import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '../utils/cn'
import { themeUtils } from '../utils/theme'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(themeUtils.isDark())

  useEffect(() => {
    themeUtils.init()
    setIsDark(themeUtils.isDark())
  }, [])

  const handleToggle = () => {
    const newIsDark = themeUtils.toggle()
    setIsDark(newIsDark)
  }

  return (
    <button
      onClick={handleToggle}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-lg",
        "transition-all duration-300 hover:scale-110",
        "glass dark:glass-dark neon-glow",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      )}
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Sun 
          className={cn(
            "h-5 w-5 text-yellow-500 transition-all duration-300",
            isDark ? "rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          )}
        />
        <Moon 
          className={cn(
            "absolute h-5 w-5 text-blue-400 transition-all duration-300",
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0"
          )}
        />
      </div>
    </button>
  )
}
