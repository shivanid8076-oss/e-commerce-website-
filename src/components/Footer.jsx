import { Github, Mail, Phone, MapPin, Heart, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '../utils/cn'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-400 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SD</span>
              </div>
              <span className="font-display font-semibold gradient-text">
                Shivani Dixit
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              2nd-year BCA student building interactive web experiences with modern technologies.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/shivanid8076-oss"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-lg glass dark:glass-dark",
                  "hover:scale-110 transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                )}
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="mailto:shivanid8076@gmail.com"
                className={cn(
                  "p-2 rounded-lg glass dark:glass-dark",
                  "hover:scale-110 transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                )}
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:8076566995"
                className={cn(
                  "p-2 rounded-lg glass dark:glass-dark",
                  "hover:scale-110 transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                )}
                aria-label="Phone"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/skills" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  to="/certificates" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Certificates
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="mailto:shivanid8076@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  shivanid8076@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="tel:8076566995"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 8076566995
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  JB Knowledge Park, MDU
                </span>
              </div>
            </div>
          </div>

          {/* Resume Download */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resume</h3>
            <p className="text-sm text-muted-foreground">
              Download my resume to learn more about my skills and experience.
            </p>
            <a
              href="/resume.pdf"
              download
              className={cn(
                "inline-flex items-center space-x-2 px-4 py-2 rounded-lg",
                "bg-gradient-to-r from-teal-500 to-purple-600 text-white",
                "hover:from-teal-600 hover:to-purple-700",
                "transition-all duration-300 hover:scale-105",
                "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              )}
            >
              <Download className="h-4 w-4" />
              <span className="text-sm font-medium">Download PDF</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Shivani Dixit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
