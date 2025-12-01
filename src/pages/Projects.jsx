import { useEffect, useRef, useState } from 'react'
import { Github, ExternalLink, Filter, Search } from 'lucide-react'
import { cn } from '../utils/cn'
import { gsapUtils } from '../utils/gsap-utils'

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js, featuring user authentication, payment integration, and responsive design.',
    image: '/api/placeholder/600/400',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
    category: 'fullstack',
    github: 'https://github.com/shivanid8076-oss/ecommerce-platform',
    live: 'https://ecommerce-demo.vercel.app',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/api/placeholder/600/400',
    tech: ['React', 'Firebase', 'GSAP', 'Material UI'],
    category: 'frontend',
    github: 'https://github.com/shivanid8076-oss/task-manager',
    live: 'https://task-manager-demo.vercel.app',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed meteorological data visualization.',
    image: '/api/placeholder/600/400',
    tech: ['JavaScript', 'Weather API', 'Chart.js', 'CSS3'],
    category: 'frontend',
    github: 'https://github.com/shivanid8076-oss/weather-dashboard',
    live: 'https://weather-dashboard-demo.vercel.app',
    featured: false
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A stunning personal portfolio website with smooth animations, dark mode support, and optimized performance.',
    image: '/api/placeholder/600/400',
    tech: ['React', 'Vite', 'Tailwind CSS', 'GSAP'],
    category: 'frontend',
    github: 'https://github.com/shivanid8076-oss/portfolio',
    live: 'https://shivani-dixit.vercel.app',
    featured: true
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'A full-stack blogging platform with markdown support, comment system, and admin dashboard for content management.',
    image: '/api/placeholder/600/400',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    category: 'fullstack',
    github: 'https://github.com/shivanid8076-oss/blog-platform',
    live: 'https://blog-platform-demo.vercel.app',
    featured: false
  },
  {
    id: 6,
    title: 'AI Chat Interface',
    description: 'An intelligent chat interface with AI integration, conversation history, and customizable response settings.',
    image: '/api/placeholder/600/400',
    tech: ['React', 'OpenAI API', 'WebSocket', 'Express'],
    category: 'fullstack',
    github: 'https://github.com/shivanid8076-oss/ai-chat',
    live: 'https://ai-chat-demo.vercel.app',
    featured: false
  }
]

const categories = [
  { id: 'all', name: 'All Projects', count: projectsData.length },
  { id: 'featured', name: 'Featured', count: projectsData.filter(p => p.featured).length },
  { id: 'frontend', name: 'Frontend', count: projectsData.filter(p => p.category === 'frontend').length },
  { id: 'fullstack', name: 'Full Stack', count: projectsData.filter(p => p.category === 'fullstack').length }
]

export default function Projects() {
  const pageRef = useRef(null)
  const titleRef = useRef(null)
  const filterRef = useRef(null)
  const projectsRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'featured' && project.featured) ||
      project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  useEffect(() => {
    if (!pageRef.current) return

    const tl = gsapUtils.timeline()
    
    tl.add(gsapUtils.fadeIn(titleRef.current, { delay: 0.2 }))
    tl.add(gsapUtils.slideInLeft(filterRef.current), "-=0.4")
    tl.add(gsapUtils.staggerIn('.project-card', { stagger: 0.1 }), "-=0.2")

    return () => {
      gsapUtils.killScrollTriggers()
    }
  }, [filteredProjects])

  const ProjectCard = ({ project }) => (
    <div
      className={cn(
        "project-card group relative overflow-hidden rounded-2xl",
        "glass dark:glass-dark border border-white/20",
        "card-hover cursor-pointer"
      )}
      onClick={() => setSelectedProject(project)}
    >
      {/* Project image */}
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-teal-100 to-purple-100 dark:from-teal-900/20 dark:to-purple-900/20">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-teal-400 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                {project.title.charAt(0)}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Project Preview</p>
          </div>
        </div>
      </div>

      {/* Project content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full bg-accent text-accent-foreground text-xs"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 rounded-full bg-accent text-accent-foreground text-xs">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex space-x-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "p-2 rounded-lg glass dark:glass-dark",
                "hover:scale-110 transition-all duration-200"
              )}
            >
              <Github className="h-4 w-4" />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  "p-2 rounded-lg glass dark:glass-dark",
                  "hover:scale-110 transition-all duration-200"
                )}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
          {project.featured && (
            <span className="px-2 py-1 rounded-full bg-gradient-to-r from-teal-500 to-purple-600 text-white text-xs font-semibold">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )

  return (
    <div ref={pageRef} className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects and see what I've been working on
          </p>
        </div>

        {/* Filters and Search */}
        <div ref={filterRef} className="mb-12 space-y-6">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-200",
                  "border border-border hover:border-primary",
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "glass dark:glass-dark"
                )}
              >
                <span className="font-medium">{category.name}</span>
                <span className="ml-2 text-sm opacity-70">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={cn(
                  "w-full pl-10 pr-4 py-2 rounded-lg",
                  "glass dark:glass-dark border border-white/20",
                  "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                  "placeholder:text-muted-foreground"
                )}
              />
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found matching your criteria.</p>
          </div>
        )}

        {/* Project modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl glass dark:glass-dark border border-white/20 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                    <p className="text-muted-foreground">{selectedProject.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                  >
                    ×
                  </button>
                </div>

                {/* Project image */}
                <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-teal-100 to-purple-100 dark:from-teal-900/20 dark:to-purple-900/20">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-20 h-20 mx-auto rounded-lg bg-gradient-to-br from-teal-400 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">
                          {selectedProject.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Project Preview</p>
                    </div>
                  </div>
                </div>

                {/* Tech stack */}
                <div>
                  <h3 className="font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-accent text-accent-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center space-x-2 px-4 py-2 rounded-lg",
                      "glass dark:glass-dark border border-white/20",
                      "hover:border-white/30 transition-all duration-200"
                    )}
                  >
                    <Github className="h-4 w-4" />
                    <span>View Code</span>
                  </a>
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center space-x-2 px-4 py-2 rounded-lg",
                        "bg-gradient-to-r from-teal-500 to-purple-600 text-white",
                        "hover:from-teal-600 hover:to-purple-700",
                        "transition-all duration-200"
                      )}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
