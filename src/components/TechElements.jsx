import { useState, useEffect } from 'react'
import { Terminal, Code, Zap, Cpu, Database, Globe, Layers, Braces, Package, Cloud, Shield, Activity } from 'lucide-react'
import { cn } from '../utils/cn'

// Tech-themed floating elements component
export function TechFloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const techIcons = [
    { icon: Terminal, size: 'text-2xl', color: 'text-teal-400/20' },
    { icon: Code, size: 'text-3xl', color: 'text-purple-400/20' },
    { icon: Cpu, size: 'text-xl', color: 'text-blue-400/20' },
    { icon: Database, size: 'text-2xl', color: 'text-pink-400/20' },
    { icon: Globe, size: 'text-3xl', color: 'text-green-400/20' },
    { icon: Layers, size: 'text-xl', color: 'text-yellow-400/20' },
    { icon: Braces, size: 'text-2xl', color: 'text-red-400/20' },
    { icon: Package, size: 'text-xl', color: 'text-indigo-400/20' },
    { icon: Cloud, size: 'text-3xl', color: 'text-cyan-400/20' },
    { icon: Shield, size: 'text-2xl', color: 'text-orange-400/20' },
    { icon: Activity, size: 'text-xl', color: 'text-violet-400/20' },
    { icon: Zap, size: 'text-2xl', color: 'text-amber-400/20' }
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {techIcons.map((item, index) => (
        <div
          key={index}
          className={cn(
            "absolute animate-float-slow transition-transform duration-300",
            item.color
          )}
          style={{
            left: `${15 + (index * 8)}%`,
            top: `${10 + (index * 7)}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${8 + (index % 4)}s`,
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        >
          <item.icon className={item.size} />
        </div>
      ))}
    </div>
  )
}

// Tech-themed code snippet component
export function TechCodeSnippet({ code, language = "javascript" }) {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="tech-card rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-black/50 border-b border-teal-400/20">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-muted-foreground font-mono-tech">{language}</span>
          <button
            onClick={copyCode}
            className="p-1 rounded hover:bg-white/10 transition-colors"
          >
            <Code className="h-3 w-3 text-teal-400" />
          </button>
        </div>
      </div>
      <div className="p-4 bg-black/30">
        <pre className="text-sm text-green-400 font-mono-tech overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
      {copied && (
        <div className="absolute top-2 right-2 bg-teal-500 text-white text-xs px-2 py-1 rounded font-mono-tech">
          Copied!
        </div>
      )}
    </div>
  )
}

// Tech-themed terminal component
export function TechTerminal({ commands }) {
  const [currentCommand, setCurrentCommand] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % commands.length)
      setIsTyping(true)
      setTimeout(() => setIsTyping(false), 1000)
    }, 3000)

    return () => clearInterval(interval)
  }, [commands.length])

  return (
    <div className="terminal-text">
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs text-green-400 font-mono-tech">terminal@portfolio</span>
      </div>
      <div className="space-y-1">
        {commands.map((cmd, index) => (
          <div
            key={index}
            className={cn(
              "font-mono-tech text-sm",
              index === currentCommand && isTyping ? "animate-pulse" : ""
            )}
          >
            <span className="text-green-400">$</span>
            <span className="text-green-300 ml-2">{cmd}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Tech-themed stats component
export function TechStats({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="tech-card-hover text-center p-4">
          <stat.icon className="h-6 w-6 mx-auto mb-2 text-teal-500" />
          <div className="text-2xl font-bold tech-gradient-1">{stat.value}</div>
          <div className="text-xs text-muted-foreground font-mono-tech">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

// Tech-themed progress bars component
export function TechProgress({ skills }) {
  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium font-mono-tech">{skill.name}</span>
            <span className="text-xs text-muted-foreground font-mono-tech">{skill.level}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-1000 ease-out",
                "bg-gradient-to-r from-teal-500 to-purple-600",
                "animate-tech-glow"
              )}
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

// Tech-themed timeline component
export function TechTimeline({ events }) {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-purple-600" />
      {events.map((event, index) => (
        <div key={index} className="relative flex items-start space-x-6 mb-8">
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full glass-morphism flex items-center justify-center border-2 border-teal-400/30">
              <event.icon className="h-6 w-6 text-teal-500" />
            </div>
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-bold font-display">{event.title}</h3>
              <span className="text-xs text-muted-foreground font-mono-tech bg-muted/50 px-2 py-1 rounded">
                {event.date}
              </span>
            </div>
            <p className="text-muted-foreground font-body">{event.description}</p>
            {event.technologies && (
              <div className="flex flex-wrap gap-2">
                {event.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge font-mono-tech">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

// Tech-themed card component
export function TechCard({ title, description, icon, technologies, link }) {
  return (
    <div className="tech-card-hover group">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-teal-500/20 to-purple-600/20">
          <icon className="h-6 w-6 text-teal-500" />
        </div>
        <h3 className="text-lg font-bold font-display">{title}</h3>
      </div>
      
      <p className="text-muted-foreground mb-4 font-body">{description}</p>
      
      {technologies && (
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-badge font-mono-tech">
              {tech}
            </span>
          ))}
        </div>
      )}
      
      {link && (
        <a
          href={link}
          className="inline-flex items-center space-x-2 text-teal-500 hover:text-teal-600 transition-colors font-mono-tech"
        >
          <span>View Project</span>
          <Code className="h-4 w-4" />
        </a>
      )}
    </div>
  )
}

// Tech-themed badges component
export function TechBadges({ badges }) {
  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="tech-badge font-mono-tech flex items-center space-x-2"
        >
          <badge.icon className="h-3 w-3" />
          <span>{badge.name}</span>
        </div>
      ))}
    </div>
  )
}

// Tech-themed animated background component
export function TechBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-400/10 to-transparent rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  )
}
