import { useEffect, useRef, useState } from 'react'
import { Download, Eye, Award, Calendar, ExternalLink } from 'lucide-react'
import { cn } from '../utils/cn'
import { gsapUtils } from '../utils/gsap-utils'

const certificatesData = [
  {
    id: 1,
    title: 'Cyber Security Industrial Program',
    issuer: 'Threat Prism',
    date: 'November 2024',
    image: 'https://ik.imagekit.io/b3hl6sxy9/WhatsApp%20Image%202025-12-01%20at%2014.40.53_13923cad.jpg',
    category: 'cybersecurity',
    credentialId: 'TP202411',
    verificationUrl: 'https://threatprism.com/verify/TP202411',
    featured: true,
    description: 'Successfully completed industrial program on Cyber Security with focus on Information Gathering techniques',
    projects: ['Information Gathering Tech']
  },
  {
    id: 2,
    title: 'Cyber Security Program',
    issuer: 'E-Cell IIT Roorkee',
    date: 'November 2024',
    image: 'https://ik.imagekit.io/b3hl6sxy9/WhatsApp%20Image%202025-12-01%20at%2014.40.28_08096b83.jpg',
    category: 'cybersecurity',
    credentialId: 'IIT202411',
    verificationUrl: 'https://istop.ai/verify-certificate',
    featured: true,
    description: 'Successfully participated in Cyber Security program organized by E-Cell IIT Roorkee',
    projects: ['Cyber Security Fundamentals']
  }
]

const categories = [
  { id: 'all', name: 'All Certificates', count: certificatesData.length },
  { id: 'featured', name: 'Featured', count: certificatesData.filter(c => c.featured).length },
  { id: 'cybersecurity', name: 'Cyber Security', count: certificatesData.filter(c => c.category === 'cybersecurity').length }
]

export default function Certificates() {
  const pageRef = useRef(null)
  const titleRef = useRef(null)
  const filterRef = useRef(null)
  const certificatesRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredCertificates = certificatesData.filter(certificate => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'featured' && certificate.featured) ||
      certificate.category === selectedCategory
    return matchesCategory
  })

  useEffect(() => {
    if (!pageRef.current) return

    const tl = gsapUtils.timeline()
    
    tl.add(gsapUtils.fadeIn(titleRef.current, { delay: 0.2 }))
    tl.add(gsapUtils.slideInLeft(filterRef.current), "-=0.4")
    tl.add(gsapUtils.staggerIn('.certificate-card', { stagger: 0.1 }), "-=0.2")

    return () => {
      gsapUtils.killScrollTriggers()
    }
  }, [filteredCertificates])

  const CertificateCard = ({ certificate, index }) => (
    <div
      className={cn(
        "certificate-card group relative overflow-hidden rounded-2xl",
        "glass-morphism border border-white/20",
        "card-hover cursor-pointer"
      )}
      onClick={() => setSelectedCertificate(certificate)}
    >
      {/* Certificate preview */}
      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-teal-100 to-purple-100 dark:from-teal-900/20 dark:to-purple-900/20">
        {certificate.image.includes('imagekit.io') ? (
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
        ) : null}
        <div className="w-full h-full flex items-center justify-center" style={{ display: certificate.image.includes('imagekit.io') ? 'none' : 'flex' }}>
          <div className="text-center space-y-4">
            <Award className="h-16 w-16 mx-auto text-teal-500" />
            <div className="space-y-2">
              <p className="font-semibold">{certificate.title}</p>
              <p className="text-sm text-muted-foreground">{certificate.issuer}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate info */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-1 font-display">
            {certificate.title}
          </h3>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="font-mono-tech">{certificate.issuer}</span>
            <span className="font-mono-tech">{certificate.date}</span>
          </div>
        </div>

        {/* Show projects if available */}
        {certificate.projects && (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground font-mono-tech">Projects Completed:</p>
            <div className="flex flex-wrap gap-1">
              {certificate.projects.map((project, idx) => (
                <span key={idx} className="tech-badge text-xs">
                  {project}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedCertificate(certificate)
              }}
              className={cn(
                "p-2 rounded-lg glass-morphism",
                "hover:scale-110 transition-all duration-200"
              )}
            >
              <Eye className="h-4 w-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                // Download certificate logic here
                window.open(certificate.image, '_blank')
              }}
              className={cn(
                "p-2 rounded-lg glass-morphism",
                "hover:scale-110 transition-all duration-200"
              )}
            >
              <Download className="h-4 w-4" />
            </button>
          </div>
          {certificate.featured && (
            <span className="px-2 py-1 rounded-full bg-gradient-to-r from-teal-500 to-purple-600 text-white text-xs font-semibold font-mono-tech">
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
            <span className="gradient-text">Certificates</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional certifications and achievements in web development
          </p>
        </div>

        {/* Category filters */}
        <div ref={filterRef} className="mb-12">
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
        </div>

        {/* Certificates grid */}
        <div ref={certificatesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCertificates.map((certificate, index) => (
            <CertificateCard key={certificate.id} certificate={certificate} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No certificates found in this category.</p>
          </div>
        )}

        {/* Certificate modal/lightbox */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl glass-morphism-dark border border-white/20 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2 font-display">{selectedCertificate.title}</h2>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="font-mono-tech">{selectedCertificate.issuer}</span>
                      <span>•</span>
                      <span className="font-mono-tech">{selectedCertificate.date}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                  >
                    ×
                  </button>
                </div>

                {/* Certificate image */}
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-teal-100 to-purple-100 dark:from-teal-900/20 dark:to-purple-900/20">
                  {selectedCertificate.image.includes('imagekit.io') ? (
                    <img
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <div className="w-full h-full flex items-center justify-center" style={{ display: selectedCertificate.image.includes('imagekit.io') ? 'none' : 'flex' }}>
                    <div className="text-center space-y-6">
                      <Award className="h-24 w-24 mx-auto text-teal-500" />
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold font-display">{selectedCertificate.title}</h3>
                        <p className="text-lg text-muted-foreground font-mono-tech">{selectedCertificate.issuer}</p>
                        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="font-mono-tech">{selectedCertificate.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate description */}
                {selectedCertificate.description && (
                  <div>
                    <h3 className="font-semibold mb-3 font-display">Program Details</h3>
                    <p className="text-muted-foreground font-body">{selectedCertificate.description}</p>
                  </div>
                )}

                {/* Certificate details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 font-display">Certificate Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground font-mono-tech">Credential ID:</span>
                        <span className="font-mono font-mono-tech">{selectedCertificate.credentialId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground font-mono-tech">Issue Date:</span>
                        <span className="font-mono-tech">{selectedCertificate.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground font-mono-tech">Category:</span>
                        <span className="capitalize font-mono-tech">{selectedCertificate.category}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 font-display">Verification</h3>
                    <p className="text-sm text-muted-foreground mb-3 font-body">
                      This certificate can be verified online using the credential ID.
                    </p>
                    <a
                      href={selectedCertificate.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center space-x-2 px-4 py-2 rounded-lg",
                        "bg-gradient-to-r from-teal-500 to-purple-600 text-white",
                        "hover:from-teal-600 hover:to-purple-700",
                        "transition-all duration-200 font-display"
                      )}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Verify Certificate</span>
                    </a>
                  </div>
                </div>

                {/* Projects completed */}
                {selectedCertificate.projects && (
                  <div>
                    <h3 className="font-semibold mb-3 font-display">Projects Completed</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.projects.map((project, idx) => (
                        <span key={idx} className="tech-badge font-mono-tech">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex space-x-4 pt-4 border-t border-white/20">
                  <button
                    onClick={() => window.open(selectedCertificate.image, '_blank')}
                    className={cn(
                      "inline-flex items-center space-x-2 px-4 py-2 rounded-lg",
                      "glass-morphism border border-white/20",
                      "hover:border-white/30 transition-all duration-200 font-display"
                    )}
                  >
                    <Download className="h-4 w-4" />
                    <span>Download PDF</span>
                  </button>
                  <a
                    href={selectedCertificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center space-x-2 px-4 py-2 rounded-lg",
                      "glass-morphism border border-white/20",
                      "hover:border-white/30 transition-all duration-200 font-display"
                    )}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View Online</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
