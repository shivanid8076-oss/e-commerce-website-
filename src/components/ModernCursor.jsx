import { useEffect, useRef, useState } from 'react'
import { cn } from '../utils/cn'

export default function ModernCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]')
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleHoverStart)
      element.addEventListener('mouseleave', handleHoverEnd)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleHoverStart)
        element.removeEventListener('mouseleave', handleHoverEnd)
      })
    }
  }, [])

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`
    }
    if (followerRef.current) {
      followerRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`
    }
  }, [position])

  if (typeof window === 'undefined' || window.innerWidth < 768) {
    return null // Hide on mobile devices
  }

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={cn(
          "fixed top-0 left-0 w-4 h-4 pointer-events-none z-50 transition-transform duration-75 ease-out",
          "mix-blend-difference",
          isHovering && "scale-150",
          isClicking && "scale-75"
        )}
      >
        <div className={cn(
          "w-full h-full rounded-full bg-white",
          "transition-all duration-200 ease-out",
          isHovering && "bg-teal-400",
          isClicking && "bg-purple-400"
        )} />
      </div>

      {/* Follower cursor */}
      <div
        ref={followerRef}
        className={cn(
          "fixed top-0 left-0 w-8 h-8 pointer-events-none z-40 transition-transform duration-150 ease-out",
          !isVisible && "opacity-0"
        )}
      >
        <div className={cn(
          "w-full h-full rounded-full border-2 border-teal-400/50",
          "transition-all duration-300 ease-out",
          isHovering && "border-purple-400 scale-125",
          isClicking && "scale-50 border-purple-600"
        )} />
      </div>

      {/* Trail effect */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-teal-400/20 pointer-events-none"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: `all ${0.1 + i * 0.05}s ease-out`,
              opacity: isVisible ? 0.2 - i * 0.04 : 0,
              scale: 1 - i * 0.15
            }}
          />
        ))}
      </div>
    </>
  )
}
