import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search, Zap } from 'lucide-react'
import { cn } from '../utils/cn'
import { gsapUtils } from '../utils/gsap-utils'

export default function NotFound() {
  const pageRef = useRef(null)
  const contentRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    if (!pageRef.current) return

    const tl = gsapUtils.timeline()
    
    tl.add(gsapUtils.scaleIn(contentRef.current, { delay: 0.2 }))
    tl.add(gsapUtils.staggerIn(buttonsRef.current?.children || []), "-=0.2")

    return () => {
      gsapUtils.killScrollTriggers()
    }
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-purple-50 dark:from-background dark:via-background dark:to-background" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={contentRef} className="text-center space-y-8">
          {/* 404 Animation */}
          <div className="relative inline-block">
            <div className="text-9xl font-display font-bold gradient-text animate-pulse-slow">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Zap className="h-16 w-16 text-teal-500 opacity-0 animate-pulse" />
            </div>
          </div>

          {/* Error message */}
          <div className="space-y-4 max-w-md mx-auto">
            <h1 className="text-3xl sm:text-4xl font-display font-bold">
              Oops! Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground">
              The page you're looking for seems to have vanished into the digital void. 
              Let's get you back to somewhere more interesting!
            </p>
          </div>

          {/* Action buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className={cn(
                "inline-flex items-center space-x-2 px-6 py-3 rounded-lg",
                "bg-gradient-to-r from-teal-500 to-purple-600 text-white",
                "hover:from-teal-600 hover:to-purple-700",
                "transition-all duration-300 hover:scale-105 shadow-lg",
                "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              )}
            >
              <Home className="h-4 w-4" />
              <span>Go Home</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className={cn(
                "inline-flex items-center space-x-2 px-6 py-3 rounded-lg",
                "glass dark:glass-dark border border-white/20",
                "hover:border-white/30 transition-all duration-300 hover:scale-105",
                "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              )}
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Helpful links */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              Maybe you're looking for:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/about"
                className="px-4 py-2 rounded-full glass dark:glass-dark hover:scale-105 transition-all duration-200"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="px-4 py-2 rounded-full glass dark:glass-dark hover:scale-105 transition-all duration-200"
              >
                Projects
              </Link>
              <Link
                to="/skills"
                className="px-4 py-2 rounded-full glass dark:glass-dark hover:scale-105 transition-all duration-200"
              >
                Skills
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 rounded-full glass dark:glass-dark hover:scale-105 transition-all duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Fun message */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Error code: 404 | Status: Page is having an existential crisis
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Don't worry, even the best pages get lost sometimes! 🌟
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
