import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Github, Send, Copy, Check } from 'lucide-react'
import { cn } from '../utils/cn'
import { gsapUtils } from '../utils/gsap-utils'

const contactData = {
  email: 'shivanid8076@gmail.com',
  phone: '+91 8076566995',
  location: 'JB Knowledge Park, MDU',
  github: 'https://github.com/shivanid8076-oss'
}

const socialLinks = [
  { name: 'GitHub', icon: Github, url: contactData.github, color: 'hover:text-gray-600 dark:hover:text-gray-400' },
  { name: 'Email', icon: Mail, url: `mailto:${contactData.email}`, color: 'hover:text-red-600 dark:hover:text-red-400' },
  { name: 'Phone', icon: Phone, url: `tel:${contactData.phone}`, color: 'hover:text-green-600 dark:hover:text-green-400' }
]

export default function Contact() {
  const pageRef = useRef(null)
  const titleRef = useRef(null)
  const contactRef = useRef(null)
  const formRef = useRef(null)
  const [copied, setCopied] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!pageRef.current) return

    const tl = gsapUtils.timeline()
    
    tl.add(gsapUtils.fadeIn(titleRef.current, { delay: 0.2 }))
    tl.add(gsapUtils.slideInLeft(contactRef.current), "-=0.4")
    tl.add(gsapUtils.slideInRight(formRef.current), "-=0.2")

    return () => {
      gsapUtils.killScrollTriggers()
    }
  }, [])

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(type)
      setTimeout(() => setCopied(''), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    
    window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div ref={pageRef} className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have a project in mind or just want to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div ref={contactRef} className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Let's Connect</h2>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className={cn(
                "p-6 rounded-2xl glass dark:glass-dark border border-white/20",
                "card-hover group"
              )}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 text-white">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">{contactData.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(contactData.email, 'email')}
                    className={cn(
                      "p-2 rounded-lg glass dark:glass-dark",
                      "hover:scale-110 transition-all duration-200"
                    )}
                  >
                    {copied === 'email' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className={cn(
                "p-6 rounded-2xl glass dark:glass-dark border border-white/20",
                "card-hover group"
              )}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">{contactData.phone}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(contactData.phone, 'phone')}
                    className={cn(
                      "p-2 rounded-lg glass dark:glass-dark",
                      "hover:scale-110 transition-all duration-200"
                    )}
                  >
                    {copied === 'phone' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className={cn(
                "p-6 rounded-2xl glass dark:glass-dark border border-white/20",
                "card-hover group"
              )}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">{contactData.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "p-3 rounded-lg glass dark:glass-dark border border-white/20",
                      "hover:scale-110 transition-all duration-200",
                      social.color
                    )}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <h3 className="font-semibold">Quick Actions</h3>
              <div className="space-y-2">
                <a
                  href={`mailto:${contactData.email}?subject=Project%20Inquiry`}
                  className={cn(
                    "inline-flex items-center space-x-2 px-4 py-2 rounded-lg",
                    "glass dark:glass-dark border border-white/20",
                    "hover:border-white/30 transition-all duration-200"
                  )}
                >
                  <Mail className="h-4 w-4" />
                  <span>Discuss a Project</span>
                </a>
                <a
                  href={`mailto:${contactData.email}?subject=Collaboration%20Opportunity`}
                  className={cn(
                    "inline-flex items-center space-x-2 px-4 py-2 rounded-lg",
                    "glass dark:glass-dark border border-white/20",
                    "hover:border-white/30 transition-all duration-200"
                  )}
                >
                  <Send className="h-4 w-4" />
                  <span>Collaborate</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef}>
            <div className={cn(
              "p-8 rounded-2xl glass dark:glass-dark border border-white/20",
              "space-y-6"
            )}>
              <h2 className="text-2xl font-semibold">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={cn(
                        "w-full px-4 py-2 rounded-lg",
                        "glass dark:glass-dark border border-white/20",
                        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                        "placeholder:text-muted-foreground"
                      )}
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={cn(
                        "w-full px-4 py-2 rounded-lg",
                        "glass dark:glass-dark border border-white/20",
                        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                        "placeholder:text-muted-foreground"
                      )}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={cn(
                      "w-full px-4 py-2 rounded-lg",
                      "glass dark:glass-dark border border-white/20",
                      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                      "placeholder:text-muted-foreground"
                    )}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={cn(
                      "w-full px-4 py-2 rounded-lg resize-none",
                      "glass dark:glass-dark border border-white/20",
                      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                      "placeholder:text-muted-foreground"
                    )}
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg",
                    "bg-gradient-to-r from-teal-500 to-purple-600 text-white",
                    "hover:from-teal-600 hover:to-purple-700",
                    "transition-all duration-300 hover:scale-105",
                    "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? 'Opening Email Client...' : 'Send Message'}</span>
                </button>
              </form>

              <p className="text-sm text-muted-foreground text-center">
                This form will open your email client with the message pre-filled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
