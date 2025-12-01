import { useEffect, useRef } from 'react'
import SkillRadial from '../components/SkillRadial'
import SkillMarquee from '../components/SkillMarquee'
import SkillChip from '../components/SkillChip'
import { Code2, Palette, Database, Globe, Smartphone, Cloud, Shield, Cpu, Zap } from 'lucide-react'
import { cn } from '../utils/cn'
import { gsapUtils } from '../utils/gsap-utils'

const skillsData = {
  marquee: [
    { name: 'React', icon: '⚛️', level: 85 },
    { name: 'JavaScript', icon: 'JS', level: 90 },
    { name: 'TypeScript', icon: 'TS', level: 75 },
    { name: 'Tailwind CSS', icon: '🎨', level: 88 },
    { name: 'GSAP', icon: '🎬', level: 80 },
    { name: 'Node.js', icon: '🟢', level: 70 },
    { name: 'Git', icon: '📦', level: 85 },
    { name: 'HTML5', icon: '📄', level: 95 },
    { name: 'CSS3', icon: '🎨', level: 92 },
    { name: 'MongoDB', icon: '🍃', level: 65 }
  ],
  main: [
    { name: 'React', level: 85, color: 'blue', years: 2 },
    { name: 'JavaScript', level: 90, color: 'yellow', years: 3 },
    { name: 'Tailwind CSS', level: 88, color: 'teal', years: 2 },
    { name: 'GSAP', level: 80, color: 'purple', years: 1 },
    { name: 'Node.js', level: 70, color: 'green', years: 1 }
  ],
  categories: [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'GSAP'],
      color: 'blue'
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      skills: ['Figma', 'Adobe XD', 'Responsive Design', 'Accessibility'],
      color: 'purple'
    },
    {
      title: 'Backend & Database',
      icon: Database,
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      color: 'green'
    },
    {
      title: 'Tools & Technologies',
      icon: Zap,
      skills: ['Git', 'Vite', 'VS Code', 'Chrome DevTools'],
      color: 'yellow'
    }
  ],
  special: [
    { name: 'Web Performance', level: 85, icon: Zap },
    { name: 'Responsive Design', level: 90, icon: Smartphone },
    { name: 'Accessibility', level: 80, icon: Shield },
    { name: 'Cloud Services', level: 70, icon: Cloud },
    { name: 'Browser APIs', level: 75, icon: Globe },
    { name: 'System Design', level: 65, icon: Cpu }
  ]
}

export default function Skills() {
  const pageRef = useRef(null)
  const titleRef = useRef(null)
  const marqueeRef = useRef(null)
  const mainSkillsRef = useRef(null)
  const categoriesRef = useRef(null)
  const specialRef = useRef(null)

  useEffect(() => {
    if (!pageRef.current) return

    const tl = gsapUtils.timeline()
    
    tl.add(gsapUtils.fadeIn(titleRef.current, { delay: 0.2 }))
    tl.add(gsapUtils.slideInLeft(marqueeRef.current), "-=0.4")
    tl.add(gsapUtils.staggerIn(mainSkillsRef.current?.children || []), "-=0.2")
    tl.add(gsapUtils.slideInRight(categoriesRef.current), "-=0.4")
    tl.add(gsapUtils.scaleIn(specialRef.current?.children || []), "-=0.2")

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
            <span className="gradient-text">Skills & Expertise</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        {/* Skills Marquee */}
        <div ref={marqueeRef} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Tech Stack</h2>
          <SkillMarquee skills={skillsData.marquee} speed={25} />
        </div>

        {/* Main Skills with Radial Progress */}
        <div ref={mainSkillsRef} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Core Competencies</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {skillsData.main.map((skill, index) => (
              <div key={skill.name} className="text-center space-y-4">
                <SkillRadial
                  skill={skill.name}
                  level={skill.level}
                  size={140}
                  strokeWidth={10}
                  color={skill.color}
                />
                <div className="space-y-1">
                  <p className="font-semibold">{skill.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {skill.years} {skill.years === 1 ? 'year' : 'years'} experience
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div ref={categoriesRef} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Skill Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.categories.map((category, index) => (
              <div
                key={category.title}
                className={cn(
                  "p-6 rounded-2xl glass dark:glass-dark border border-white/20",
                  "card-hover space-y-4"
                )}
              >
                <div className="flex items-center space-x-3">
                  <category.icon className={cn(
                    "h-6 w-6",
                    category.color === 'blue' && "text-blue-500",
                    category.color === 'purple' && "text-purple-500",
                    category.color === 'green' && "text-green-500",
                    category.color === 'yellow' && "text-yellow-500"
                  )} />
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Skills */}
        <div ref={specialRef} className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Special Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skillsData.special.map((skill, index) => (
              <div
                key={skill.name}
                className={cn(
                  "p-4 rounded-xl glass dark:glass-dark border border-white/20",
                  "text-center space-y-3 card-hover"
                )}
              >
                <skill.icon className="h-8 w-8 mx-auto text-teal-500" />
                <div>
                  <p className="font-medium text-sm">{skill.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{skill.level}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Progress Bars */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Detailed Proficiency</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {skillsData.main.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-1000 ease-out",
                      skill.color === 'blue' && "bg-blue-500",
                      skill.color === 'yellow' && "bg-yellow-500",
                      skill.color === 'teal' && "bg-teal-500",
                      skill.color === 'purple' && "bg-purple-500",
                      skill.color === 'green' && "bg-green-500"
                    )}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Skill Chips */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-center">Interactive Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.main.map((skill, index) => (
              <SkillChip
                key={skill.name}
                skill={skill.name}
                level={skill.level}
                years={skill.years}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
