import { useState } from 'react'
import { cn } from '../utils/cn'

export default function SkillChip({ skill, level, years, color = 'teal', onClick, isSelected }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const colorClasses = {
    teal: 'from-teal-500 to-teal-600',
    purple: 'from-purple-500 to-purple-600',
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    yellow: 'from-yellow-500 to-yellow-600',
    red: 'from-red-500 to-red-600'
  }

  const handleClick = () => {
    if (onClick) {
      onClick(skill)
    } else {
      setIsFlipped(!isFlipped)
    }
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        "relative h-16 w-32 cursor-pointer transition-all duration-500 transform-gpu",
        "preserve-3d hover:scale-105",
        isSelected && "ring-2 ring-primary ring-offset-2"
      )}
      style={{
        transformStyle: 'preserve-3d',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
      }}
    >
      {/* Front side */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl flex flex-col items-center justify-center",
          "glass dark:glass-dark border border-white/20",
          "backface-hidden"
        )}
        style={{ backfaceVisibility: 'hidden' }}
      >
        <span className="font-semibold text-sm">{skill}</span>
        {level && (
          <span className="text-xs text-muted-foreground mt-1">
            {level}% proficient
          </span>
        )}
      </div>
      
      {/* Back side */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl flex flex-col items-center justify-center",
          `bg-gradient-to-br ${colorClasses[color] || colorClasses.teal}`,
          "text-white backface-hidden"
        )}
        style={{ 
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)'
        }}
      >
        {years && (
          <>
            <span className="text-2xl font-bold">{years}</span>
            <span className="text-xs opacity-90">years</span>
          </>
        )}
        {!years && level && (
          <>
            <span className="text-2xl font-bold">{level}</span>
            <span className="text-xs opacity-90">proficient</span>
          </>
        )}
      </div>
    </div>
  )
}
