import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Github, Mail, Phone, MapPin, Sparkles, Code2, Palette, Zap, MousePointer, ChevronDown, Star, Heart, TrendingUp, Award, Terminal, Cpu, Database, Globe, Layers, Braces } from 'lucide-react'
import { cn } from '../utils/cn'
import { gsapUtils } from '../utils/gsap-utils'

const heroData = {
  name: "Shivani Dixit",
  tagline: "2nd-year BCA Student",
  location: "JB Knowledge Park, MDU",
  bio: "I build interactive web experiences with React, Tailwind & GSAP. Explore my projects, certificates, and skills — let's build something awesome.",
  highlights: [
    { icon: Code2, text: "React Development" },
    { icon: Palette, text: "UI/UX Design" },
    { icon: Zap, text: "Performance Focus" }
  ],
  stats: [
    { number: "10+", label: "Projects", icon: Star },
    { number: "5+", label: "Certificates", icon: Award },
    { number: "100%", label: "Passion", icon: Heart }
  ],
  techStack: ["React", "JavaScript", "Tailwind CSS", "GSAP", "Node.js", "MongoDB"]
}

export default function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const bioRef = useRef(null)
  const ctaRef = useRef(null)
  const avatarRef = useRef(null)
  const highlightsRef = useRef(null)
  const statsRef = useRef(null)
  const techRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (!heroRef.current) return

    const tl = gsapUtils.timeline()
    
    // Animate in elements with stagger and safety checks
    if (titleRef.current) tl.add(gsapUtils.slideInLeft(titleRef.current, { delay: 0.2 }))
    if (subtitleRef.current) tl.add(gsapUtils.slideInLeft(subtitleRef.current), "-=0.4")
    if (bioRef.current) tl.add(gsapUtils.slideInLeft(bioRef.current), "-=0.4")
    if (highlightsRef.current?.children) tl.add(gsapUtils.staggerIn(highlightsRef.current.children), "-=0.2")
    if (avatarRef.current) tl.add(gsapUtils.slideInRight(avatarRef.current), "-=0.6")
    if (statsRef.current?.children) tl.add(gsapUtils.staggerIn(statsRef.current.children), "-=0.3")
    if (techRef.current) tl.add(gsapUtils.slideInLeft(techRef.current), "-=0.2")
    if (ctaRef.current) tl.add(gsapUtils.scaleIn(ctaRef.current), "-=0.2")

    // Parallax effect for avatar with safety check
    if (!gsapUtils.prefersReducedMotion() && avatarRef.current) {
      gsapUtils.parallax(avatarRef.current, 0.3)
    }

    return () => {
      gsapUtils.killScrollTriggers()
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return
      
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      
      setMousePosition({ x, y })
    }

    const heroElement = heroRef.current
    heroElement.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-white/50 to-purple-50/50 dark:from-background/50 dark:via-background/50 dark:to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/10 via-transparent to-purple-400/10 animate-gradient" />
        <div className="absolute inset-0 bg-gradient-to-bl from-pink-400/5 via-transparent to-blue-400/5 animate-gradient" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Tech-themed animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-teal-400/20 to-purple-400/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }} />
        
        {/* Enhanced floating particles with tech theme */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-teal-400/30 to-purple-400/30 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
        
        {/* Floating tech symbols */}
        <div className="absolute top-1/4 right-1/4 text-teal-400/20 text-4xl animate-float-slow"><Braces /></div>
        <div className="absolute bottom-1/4 left-1/4 text-purple-400/20 text-3xl animate-float-slow" style={{ animationDelay: '3s' }}><Terminal /></div>
        <div className="absolute top-1/3 left-1/3 text-blue-400/20 text-2xl animate-float-slow" style={{ animationDelay: '1s' }}><Cpu /></div>
        <div className="absolute bottom-1/3 right-1/3 text-pink-400/20 text-3xl animate-float-slow" style={{ animationDelay: '2s' }}><Database /></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Content Section */}
          <div className="text-center lg:text-left space-y-8 lg:space-y-10">
            {/* Enhanced name with modern typography */}
            <div ref={titleRef} className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                <Sparkles className="h-5 w-5 text-teal-500 animate-pulse-glow" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider font-mono-tech">Welcome to my portfolio</span>
                <Sparkles className="h-5 w-5 text-purple-500 animate-pulse-glow" />
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight">
                <span className="gradient-text animate-gradient bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {heroData.name}
                </span>
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-lg text-muted-foreground">
                <span className="flex items-center space-x-1">
                  <span className="font-medium">{heroData.tagline}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{heroData.location}</span>
                </span>
              </div>
            </div>

            {/* Enhanced bio with modern typography */}
            <div ref={subtitleRef} className="space-y-4 max-w-2xl mx-auto lg:mx-0">
              <p className="text-xl text-muted-foreground leading-relaxed font-body">
                {heroData.bio}
              </p>
            </div>

            {/* Tech stack display */}
            <div ref={techRef} className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Layers className="h-4 w-4 text-teal-500" />
                <span className="text-sm font-medium text-muted-foreground font-mono-tech">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {heroData.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="tech-badge font-mono-tech"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Enhanced highlights with modern cards */}
            <div ref={highlightsRef} className="flex flex-wrap justify-center lg:justify-start gap-3">
              {heroData.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="glass-morphism px-4 py-2 rounded-full flex items-center space-x-2 card-hover-3d"
                >
                  <highlight.icon className="h-4 w-4 text-teal-500" />
                  <span className="text-sm font-medium font-body">{highlight.text}</span>
                </div>
              ))}
            </div>

            {/* Enhanced stats section */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {heroData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="tech-card rounded-lg p-4 text-center card-hover"
                >
                  <stat.icon className="h-5 w-5 mx-auto mb-2 text-teal-500" />
                  <div className="text-2xl font-bold tech-gradient-1">{stat.number}</div>
                  <div className="text-xs text-muted-foreground font-mono-tech">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons with tech styling */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/projects"
                className={cn(
                  "btn-tech btn-modern px-8 py-4 rounded-full font-medium text-lg font-display",
                  "flex items-center space-x-2 shadow-tech hover:shadow-tech-hover",
                  "transform hover:scale-105 transition-all duration-300"
                )}
              >
                <span>View Projects</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                to="/contact"
                className={cn(
                  "glass-morphism px-8 py-4 rounded-full font-medium text-lg font-display",
                  "flex items-center space-x-2 hover:bg-white/20",
                  "transform hover:scale-105 transition-all duration-300"
                )}
              >
                <Mail className="h-5 w-5" />
                <span>Get In Touch</span>
              </Link>
            </div>
          </div>

          {/* Enhanced Avatar Section with real image and tech elements */}
          <div className="flex justify-center lg:justify-end items-center">
            <div 
              ref={avatarRef}
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Enhanced glow effect */}
              <div className={cn(
                "absolute inset-0 rounded-full transition-all duration-500",
                "bg-gradient-to-r from-teal-400 to-purple-600 opacity-30 blur-xl",
                isHovered && "opacity-50 scale-110"
              )} />
              
              {/* Enhanced avatar container with 3D effect */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className={cn(
                  "absolute inset-0 rounded-full overflow-hidden",
                  "glass-morphism border-2 border-white/20",
                  "transform transition-all duration-500",
                  isHovered && "scale-105 rotate-3"
                )}
                  style={{
                    transform: `perspective(1000px) rotateX(${mousePosition.y * 10 - 5}deg) rotateY(${mousePosition.x * 10 - 5}deg) ${isHovered ? 'scale(1.05)' : ''}`
                  }}
                >
                  {/* Real image with fallback */}
                  <div className="relative w-full h-full">
                    <img
                      src="https://ik.imagekit.io/b3hl6sxy9/WhatsApp%20Image%202025-12-01%20at%2014.29.06_aa30dc68.jpg"
                      alt="Shivani Dixit"
                      className={cn(
                        "w-full h-full object-cover transition-opacity duration-500",
                        imageLoaded ? "opacity-100" : "opacity-0"
                      )}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageLoaded(false)}
                    />
                    
                    {/* Fallback placeholder */}
                    {!imageLoaded && (
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-purple-400 to-pink-400 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <Sparkles className="h-16 w-16 mx-auto text-white animate-pulse-glow" />
                          <div className="space-y-2">
                            <p className="text-2xl font-bold text-white font-display">SD</p>
                            <p className="text-sm text-white/80 font-mono-tech">Portfolio</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Image overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                {/* Enhanced floating rings with tech theme */}
                <div className="absolute inset-0 rounded-full border border-teal-400/30 animate-pulse-glow" />
                <div className="absolute inset-2 rounded-full border border-purple-400/30 animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
                <div className="absolute inset-4 rounded-full border border-pink-400/30 animate-pulse-glow" style={{ animationDelay: '1s' }} />
                
                {/* Tech status indicators */}
                <div className="absolute -top-2 -right-2 flex items-center space-x-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-500 font-mono-tech">ONLINE</span>
                </div>
                
                {/* Social links overlay */}
                <div className={cn(
                  "absolute -bottom-4 left-1/2 transform -translate-x-1/2",
                  "flex space-x-3 p-2 glass-morphism rounded-full",
                  "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                )}>
                  <a
                    href="https://github.com/shivanid8076-oss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:shivanid8076@gmail.com"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator with tech theme */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-200 group"
        >
          <span className="text-sm font-medium font-mono-tech">Explore More</span>
          <div className="flex flex-col items-center space-y-1">
            <ChevronDown className="h-4 w-4 animate-bounce" />
            <div className="w-0.5 h-8 bg-gradient-to-b from-teal-500 to-purple-600 opacity-50" />
          </div>
        </button>
      </div>

      {/* Enhanced mouse scroll indicator */}
      <div className="absolute bottom-8 left-8 hidden lg:block">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <MousePointer className="h-4 w-4" />
          <span className="text-xs font-mono-tech">Scroll</span>
        </div>
      </div>
    </section>
  )
}
