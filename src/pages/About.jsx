import { useEffect, useRef } from 'react'
import { Calendar, MapPin, Award, BookOpen, Heart, Music, Camera, Code } from 'lucide-react'
import { cn } from '../utils/cn'
import { gsapUtils } from '../utils/gsap-utils'

const timelineData = [
  {
    date: '2022 - Present',
    title: 'Bachelor of Computer Applications',
    organization: 'JB Knowledge Park, MDU',
    description: 'Currently pursuing BCA with focus on web development and modern technologies.',
    type: 'education',
    icon: BookOpen
  },
  {
    date: '2021',
    title: 'Higher Secondary Education',
    organization: 'Board of Secondary Education',
    description: 'Completed 12th grade with Computer Science as main subject.',
    type: 'education',
    icon: Award
  },
  {
    date: '2023',
    title: 'Web Development Journey',
    organization: 'Self Learning',
    description: 'Started learning React, Tailwind CSS, and modern web development practices.',
    type: 'achievement',
    icon: Code
  }
]

const hobbies = [
  { name: 'Coding', icon: Code, description: 'Building interactive web experiences' },
  { name: 'Music', icon: Music, description: 'Listening to relaxing music while coding' },
  { name: 'Photography', icon: Camera, description: 'Capturing moments and nature' },
  { name: 'Reading', icon: BookOpen, description: 'Tech blogs and programming books' }
]

export default function About() {
  const pageRef = useRef(null)
  const titleRef = useRef(null)
  const timelineRef = useRef(null)
  const hobbiesRef = useRef(null)

  useEffect(() => {
    if (!pageRef.current) return

    const tl = gsapUtils.timeline()
    
    tl.add(gsapUtils.fadeIn(titleRef.current, { delay: 0.2 }))
    tl.add(gsapUtils.staggerIn('.timeline-item', { stagger: 0.2 }), "-=0.4")
    tl.add(gsapUtils.scaleIn(hobbiesRef.current?.children || []), "-=0.2")

    return () => {
      gsapUtils.killScrollTriggers()
    }
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and interests
          </p>
        </div>

        {/* Personal Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className={cn(
            "p-8 rounded-2xl glass dark:glass-dark border border-white/20",
            "space-y-6"
          )}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Hi, I'm Shivani! 👋</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate 2nd-year BCA student with a love for creating beautiful and functional web experiences. 
                  My journey in web development started with curiosity and has grown into a genuine passion for building 
                  interactive applications that make a difference.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                  or learning about the latest trends in web development.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-teal-500" />
                    <span>JB Knowledge Park, MDU</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-5 w-5 text-purple-500" />
                    <span>2nd Year BCA Student</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="h-5 w-5 text-blue-500" />
                    <span>Web Development Enthusiast</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-red-500" />
                    <span>Passionate Learner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">My Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-teal-500 to-purple-500" />
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "timeline-item relative flex items-center",
                    index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  {/* Content */}
                  <div className={cn(
                    "w-5/12 p-6 rounded-xl glass dark:glass-dark border border-white/20",
                    index % 2 === 0 ? "text-right mr-auto" : "text-left ml-auto"
                  )}>
                    <div className="flex items-center space-x-2 mb-2" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      <item.icon className="h-5 w-5 text-teal-500" />
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.organization}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full border-4 border-background" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hobbies & Interests */}
        <div ref={hobbiesRef} className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Hobbies & Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <div
                key={hobby.name}
                className={cn(
                  "p-6 rounded-xl glass dark:glass-dark border border-white/20",
                  "text-center space-y-4 card-hover"
                )}
              >
                <hobby.icon className="h-12 w-12 mx-auto text-gradient-to-r from-teal-500 to-purple-500" />
                <div>
                  <h3 className="font-semibold mb-2">{hobby.name}</h3>
                  <p className="text-sm text-muted-foreground">{hobby.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
