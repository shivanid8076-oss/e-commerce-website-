import { useEffect, useRef } from 'react'
import { cn } from '../utils/cn'
import { gsapUtils } from '../utils/gsap-utils'

export default function SkillRadial({ skill, level, maxLevel = 100, size = 120, strokeWidth = 8, color = 'teal' }) {
  const svgRef = useRef(null)
  const progressRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    if (!progressRef.current || !textRef.current) return

    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const progress = (level / maxLevel) * circumference
    
    // Set up the stroke dasharray and offset
    progressRef.current.style.strokeDasharray = circumference
    progressRef.current.style.strokeDashoffset = circumference

    // Animate the progress
    const tl = gsapUtils.timeline()
    tl.to(progressRef.current, {
      strokeDashoffset: circumference - progress,
      duration: 1.5,
      ease: 'power2.out'
    })
    tl.to(textRef.current, {
      text: level,
      duration: 0.8,
      ease: 'none'
    }, '-=0.8')

    // Create scroll trigger for animation
    gsapUtils.createScrollTrigger(svgRef.current, tl, {
      start: 'top 80%',
      once: true
    })

    return () => {
      gsapUtils.killScrollTriggers()
    }
  }, [level, maxLevel, size, strokeWidth])

  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const center = size / 2

  const colorClasses = {
    teal: 'stroke-teal-500',
    purple: 'stroke-purple-500',
    blue: 'stroke-blue-500',
    green: 'stroke-green-500',
    yellow: 'stroke-yellow-500',
    red: 'stroke-red-500'
  }

  return (
    <div className={cn("relative inline-flex items-center justify-center", "group")}>
      <svg
        ref={svgRef}
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-muted/20"
        />
        
        {/* Progress circle */}
        <circle
          ref={progressRef}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          className={cn(
            "transition-all duration-300",
            colorClasses[color] || colorClasses.teal
          )}
          strokeLinecap="round"
        />
      </svg>
      
      {/* Content in center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span 
          ref={textRef}
          className="text-2xl font-bold gradient-text"
        >
          0
        </span>
        <span className="text-xs text-muted-foreground">
          {skill}
        </span>
      </div>
      
      {/* Hover effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}
