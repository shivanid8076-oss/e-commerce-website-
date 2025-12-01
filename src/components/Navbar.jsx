import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Github, Download, Moon, Sun, Sparkles, Terminal, Code, Zap, Globe, ChevronDown } from 'lucide-react'
import { cn } from '../utils/cn'
import { gsapUtils } from '../utils/gsap-utils'

const navLinks = [
  { name: 'Home', href: '/', icon: Globe },
  { name: 'About', href: '/about', icon: Sparkles },
  { name: 'Skills', href: '/skills', icon: Zap },
  { name: 'Projects', href: '/projects', icon: Code },
  { name: 'Certificates', href: '/certificates', icon: Terminal },
  { name: 'Contact', href: '/contact', icon: Sparkles }
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [mobileMenuHeight, setMobileMenuHeight] = useState(0)
  const location = useLocation()
  const navbarRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      // Calculate mobile menu height
      if (mobileMenuRef.current) {
        setMobileMenuHeight(mobileMenuRef.current.scrollHeight)
      }
    } else {
      document.body.style.overflow = 'unset'
      setMobileMenuHeight(0)
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const isActiveLink = (href) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  return (
    <>
      {/* Mobile menu backdrop with improved animation */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden transition-all duration-300",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Enhanced Navbar */}
      <nav
        ref={navbarRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "py-2" : "py-4"
        )}
      >
        <div className={cn(
          "transition-all duration-300",
          scrolled 
            ? "glass-morphism border-b border-white/10 shadow-lg shadow-tech/20" 
            : "bg-transparent"
        )}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center justify-between h-16">
              {/* Enhanced Logo with tech theme */}
              <Link
                to="/"
                className="flex items-center space-x-3 group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                    "bg-gradient-to-br from-teal-500 via-purple-500 to-pink-500",
                    "shadow-tech hover:shadow-tech-hover",
                    isHovered && "scale-110 rotate-6"
                  )}>
                    <Sparkles className="h-6 w-6 text-white animate-pulse-glow" />
                  </div>
                  {/* Enhanced glow effect */}
                  <div className={cn(
                    "absolute inset-0 rounded-xl bg-gradient-to-br from-teal-500 via-purple-500 to-pink-500 opacity-40 blur-xl transition-all duration-300",
                    isHovered ? "opacity-60 scale-110" : "opacity-0 scale-100"
                  )} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold gradient-text font-display">SD</span>
                  <span className="text-xs text-muted-foreground font-mono-tech">Portfolio.dev</span>
                </div>
              </Link>

              {/* Enhanced Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-all duration-300",
                      "hover:text-primary group flex items-center space-x-2 rounded-lg",
                      "hover:bg-white/5",
                      isActiveLink(link.href) 
                        ? "text-primary bg-gradient-to-r from-teal-500/10 to-purple-500/10" 
                        : "text-muted-foreground"
                    )}
                  >
                    <link.icon className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      "group-hover:scale-110 group-hover:rotate-12"
                    )} />
                    <span className="font-body">{link.name}</span>
                    {/* Enhanced animated underline */}
                    <span className={cn(
                      "absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-teal-500 to-purple-600 transition-all duration-300 rounded-full",
                      isActiveLink(link.href) ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                    )} />
                  </Link>
                ))}
              </div>

              {/* Enhanced Right side actions */}
              <div className="flex items-center space-x-3">
                {/* Enhanced Resume button */}
                <a
                  href="/resume.pdf"
                  download
                  className={cn(
                    "hidden sm:flex items-center space-x-2 px-4 py-2 rounded-full",
                    "glass-morphism hover:bg-white/20 transition-all duration-300",
                    "text-sm font-medium hover:scale-105 font-mono-tech",
                    "border border-white/10 hover:border-white/20"
                  )}
                >
                  <Download className="h-4 w-4" />
                  <span>Resume</span>
                </a>

                {/* Enhanced GitHub link */}
                <a
                  href="https://github.com/shivanid8076-oss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-2.5 rounded-xl glass-morphism hover:bg-white/20 transition-all duration-300",
                    "hover:scale-110 hover:rotate-12",
                    "border border-white/10 hover:border-white/20"
                  )}
                >
                  <Github className="h-5 w-5" />
                </a>

                {/* Enhanced Theme toggle */}
                <ThemeToggle />

                {/* Enhanced Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={cn(
                    "lg:hidden p-2.5 rounded-xl glass-morphism transition-all duration-300",
                    "hover:scale-110 hover:bg-white/20",
                    "border border-white/10 hover:border-white/20",
                    isMenuOpen && "bg-white/20"
                  )}
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-80 glass-morphism-dark z-50 lg:hidden",
          "transform transition-all duration-300 ease-in-out",
          "border-l border-white/10",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ height: isMenuOpen ? '100vh' : 'auto' }}
        ref={mobileMenuRef}
      >
        <div className="flex flex-col h-full p-6">
          {/* Enhanced Mobile menu header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-tech">
                <Sparkles className="h-6 w-6 text-white animate-pulse-glow" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text font-display">SD</span>
                <span className="text-xs text-muted-foreground font-mono-tech">Portfolio.dev</span>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "p-2.5 rounded-xl glass-morphism hover:bg-white/20 transition-all duration-300",
                "border border-white/10 hover:border-white/20"
              )}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Enhanced Mobile navigation links */}
          <nav className="flex-1 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300",
                  "hover:bg-white/10 hover:translate-x-2",
                  "border border-transparent hover:border-white/10",
                  isActiveLink(link.href)
                    ? "bg-gradient-to-r from-teal-500/20 to-purple-500/20 text-primary border-teal-400/30"
                    : "text-muted-foreground hover:text-primary"
                )}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: isMenuOpen ? 'slideInRight 0.5s ease-out forwards' : 'none',
                  opacity: isMenuOpen ? 1 : 0
                }}
              >
                <link.icon className="h-5 w-5" />
                <span className="font-body">{link.name}</span>
                {isActiveLink(link.href) && (
                  <ChevronDown className="h-4 w-4 ml-auto rotate-180" />
                )}
              </Link>
            ))}
          </nav>

          {/* Enhanced Mobile footer actions */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <a
              href="/resume.pdf"
              download
              className={cn(
                "flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-xl",
                "bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 text-white",
                "font-medium hover:scale-105 transition-all duration-300 font-display",
                "shadow-tech hover:shadow-tech-hover"
              )}
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </a>
            
            <div className="flex justify-center space-x-3">
              <a
                href="https://github.com/shivanid8076-oss"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-3 rounded-xl glass-morphism hover:bg-white/20 transition-all duration-300",
                  "hover:scale-110 hover:rotate-12",
                  "border border-white/10 hover:border-white/20"
                )}
              >
                <Github className="h-5 w-5" />
              </a>
            </div>

            {/* Mobile theme toggle */}
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Enhanced Theme Toggle Component
function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const theme = localStorage.getItem('theme')
    // Default to dark theme if no theme is set
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(theme === 'dark' || (!theme && true) || systemPrefersDark)
    
    // Apply dark theme by default
    if (theme !== 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light'
    setIsDark(!isDark)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative p-2.5 rounded-xl glass-morphism transition-all duration-300",
        "hover:scale-110 hover:rotate-180 group",
        "border border-white/10 hover:border-white/20"
      )}
    >
      <div className="relative w-5 h-5">
        <Sun className={cn(
          "absolute inset-0 h-5 w-5 transition-all duration-300",
          isDark ? "opacity-0 rotate-180 scale-0" : "opacity-100 rotate-0 scale-100"
        )} />
        <Moon className={cn(
          "absolute inset-0 h-5 w-5 transition-all duration-300",
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-0"
        )} />
      </div>
      {/* Enhanced glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
    </button>
  )
}
