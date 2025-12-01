import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const gsapUtils = {
  timeline: (options = {}) => {
    return gsap.timeline(options)
  },
  
  to: (element, options = {}) => {
    return gsap.to(element, options)
  },
  
  fromTo: (element, fromVars, toVars) => {
    return gsap.fromTo(element, fromVars, toVars)
  },
  
  fadeIn: (element, options = {}) => {
    if (!element) return gsap.timeline()
    return gsap.fromTo(element, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', ...options }
    )
  },
  
  staggerIn: (elements, options = {}) => {
    if (!elements || elements.length === 0) return gsap.timeline()
    return gsap.fromTo(elements,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: 'power2.out',
        ...options 
      }
    )
  },
  
  slideInLeft: (element, options = {}) => {
    if (!element) return gsap.timeline()
    return gsap.fromTo(element,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', ...options }
    )
  },
  
  slideInRight: (element, options = {}) => {
    if (!element) return gsap.timeline()
    return gsap.fromTo(element,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', ...options }
    )
  },
  
  scaleIn: (element, options = {}) => {
    if (!element) return gsap.timeline()
    return gsap.fromTo(element,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)', ...options }
    )
  },
  
  typewriter: (element, text, options = {}) => {
    if (!element) return gsap.timeline()
    element.textContent = ''
    // Manual typewriter effect without TextPlugin
    const chars = text.split('')
    let currentText = ''
    
    return gsap.to({}, {
      duration: text.length * 0.03,
      ease: 'none',
      onUpdate: function() {
        const progress = this.progress()
        const charIndex = Math.floor(progress * chars.length)
        currentText = chars.slice(0, charIndex + 1).join('')
        element.textContent = currentText
      },
      ...options
    })
  },
  
  createScrollTrigger: (element, animation, options = {}) => {
    return ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      ...options,
      animation
    })
  },
  
  parallax: (element, speed = 0.5) => {
    if (!element) return gsap.timeline()
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  },
  
  marquee: (element, duration = 20) => {
    if (!element) return gsap.timeline()
    const timeline = gsap.timeline({ repeat: -1 })
    timeline.to(element, {
      xPercent: -100,
      duration: duration,
      ease: 'none'
    })
    return timeline
  },
  
  killScrollTriggers: () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  },
  
  refresh: () => {
    ScrollTrigger.refresh()
  },
  
  prefersReducedMotion: () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
}

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
