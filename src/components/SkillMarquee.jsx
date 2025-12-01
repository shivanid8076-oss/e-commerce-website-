import { useEffect, useRef, useState } from 'react'
import { cn } from '../utils/cn'

export default function SkillMarquee({ skills, speed = 20, pauseOnHover = true }) {
  const marqueeRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const [duplicates, setDuplicates] = useState([])

  useEffect(() => {
    // Create duplicates for seamless looping
    setDuplicates([...skills, ...skills])
  }, [skills])

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true)
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false)
    }
  }

  return (
    <div className="relative overflow-hidden">
      <div className="flex">
        <div
          ref={marqueeRef}
          className={cn(
            "flex space-x-8 py-4",
            isPaused ? "" : "animate-marquee"
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            animationDuration: `${speed}s`,
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {duplicates.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className={cn(
                "flex items-center space-x-3 px-6 py-3 rounded-full",
                "glass dark:glass-dark border border-white/20",
                "whitespace-nowrap card-hover"
              )}
            >
              {skill.icon && (
                <span className="text-xl">{skill.icon}</span>
              )}
              <span className="font-medium">{skill.name}</span>
              {skill.level && (
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  )
}
