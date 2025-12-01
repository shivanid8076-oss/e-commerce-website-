import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { gsapUtils } from '../utils/gsap-utils'
import { cn } from '../utils/cn'

export default function PageTransition({ children }) {
  const location = useLocation()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef(null)
  const previousLocation = useRef(location.pathname)

  useEffect(() => {
    if (location.pathname !== previousLocation.current) {
      setIsTransitioning(true)
      
      // Exit animation
      if (containerRef.current) {
        const tl = gsapUtils.timeline()
        tl.to(containerRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.3,
          ease: 'power2.in'
        })
        .call(() => {
          previousLocation.current = location.pathname
          setIsTransitioning(false)
        })
      }
    }
  }, [location])

  useEffect(() => {
    if (!isTransitioning && containerRef.current) {
      // Entry animation
      const tl = gsapUtils.timeline()
      tl.fromTo(containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      )
    }
  }, [isTransitioning])

  return (
    <div
      ref={containerRef}
      className={cn(
        "min-h-screen transition-opacity duration-300",
        isTransitioning && "opacity-0"
      )}
    >
      {children}
    </div>
  )
}

// Modern transition overlay
export function TransitionOverlay({ isActive, onComplete }) {
  const overlayRef = useRef(null)

  useEffect(() => {
    if (isActive && overlayRef.current) {
      const tl = gsapUtils.timeline()
      
      tl.fromTo(overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: 'power2.in' }
      )
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.out',
        delay: 0.1
      })
      .call(onComplete)
    }
  }, [isActive, onComplete])

  if (!isActive) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 pointer-events-none"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-600/20 backdrop-blur-sm" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full border-2 border-teal-500 animate-spin" />
            <div className="absolute inset-2 rounded-full border-2 border-purple-500 animate-spin animation-delay-150" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Modern shared element transition
export function SharedElement({ children, elementId, isActive }) {
  const elementRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isActive && elementRef.current) {
      setIsAnimating(true)
      
      const tl = gsapUtils.timeline()
      
      // Scale and fade in
      tl.fromTo(elementRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }
      )
      .call(() => setIsAnimating(false))
    }
  }, [isActive])

  return (
    <div
      ref={elementRef}
      id={elementId}
      className={cn(
        "transition-all duration-300",
        isAnimating && "animate-pulse-glow"
      )}
    >
      {children}
    </div>
  )
}

// Modern route transition indicator
export function RouteTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 500)
    return () => clearTimeout(timer)
  }, [location])

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
      <div className={cn(
        "px-4 py-2 rounded-full glass-morphism transition-all duration-300",
        isTransitioning ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground">
            {location.pathname === '/' ? 'Home' : location.pathname.replace('/', '').charAt(0).toUpperCase() + location.pathname.slice(2)}
          </span>
        </div>
      </div>
    </div>
  )
}

// Modern fade transition
export function FadeTransition({ children, isActive, duration = 0.3 }) {
  const elementRef = useRef(null)

  useEffect(() => {
    if (elementRef.current) {
      const tl = gsapUtils.timeline()
      
      if (isActive) {
        tl.fromTo(elementRef.current,
          { opacity: 0 },
          { opacity: 1, duration, ease: 'power2.out' }
        )
      } else {
        tl.to(elementRef.current, {
          opacity: 0,
          duration,
          ease: 'power2.in'
        })
      }
    }
  }, [isActive, duration])

  return (
    <div ref={elementRef} className="transition-opacity">
      {children}
    </div>
  )
}

// Modern slide transition
export function SlideTransition({ children, isActive, direction = 'up', duration = 0.4 }) {
  const elementRef = useRef(null)

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(30px)'
      case 'down': return 'translateY(-30px)'
      case 'left': return 'translateX(30px)'
      case 'right': return 'translateX(-30px)'
      default: return 'translateY(30px)'
    }
  }

  useEffect(() => {
    if (elementRef.current) {
      const tl = gsapUtils.timeline()
      
      if (isActive) {
        tl.fromTo(elementRef.current,
          { opacity: 0, transform: getTransform() },
          { opacity: 1, transform: 'translate(0)', duration, ease: 'power2.out' }
        )
      } else {
        tl.to(elementRef.current, {
          opacity: 0,
          transform: getTransform(),
          duration,
          ease: 'power2.in'
        })
      }
    }
  }, [isActive, direction, duration])

  return (
    <div ref={elementRef} className="transition-transform">
      {children}
    </div>
  )
}

// Modern stagger transition for lists
export function StaggerTransition({ children, isActive, stagger = 0.1 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current && isActive) {
      const elements = containerRef.current.children
      const tl = gsapUtils.timeline()
      
      tl.fromTo(Array.from(elements),
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.4, 
          stagger,
          ease: 'power2.out'
        }
      )
    }
  }, [isActive, stagger])

  return (
    <div ref={containerRef} className="space-y-4">
      {children}
    </div>
  )
}
