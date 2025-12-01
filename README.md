# Shivani Dixit - Portfolio Website

A stunning, modern, and interactive portfolio website built with React, Vite, Tailwind CSS, and GSAP. This project showcases the skills, projects, certificates, and achievements of Shivani Dixit, a 2nd-year BCA student at JB Knowledge Park, MDU.

## ✨ Features

- 🎨 **Modern UI/UX Design** - Glassmorphism effects, smooth animations, and micro-interactions
- 🌙 **Dark/Light Theme** - Seamless theme switching with localStorage persistence
- 📱 **Mobile-First Responsive** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Lazy loading, code splitting, and optimized assets
- 🎬 **GSAP Animations** - Smooth scroll-triggered animations and transitions
- 🔄 **PWA Support** - Installable as a native app with offline capabilities
- ♿ **Accessibility** - WCAG AA compliant with keyboard navigation
- 🔍 **SEO Optimized** - Meta tags, structured data, and sitemap

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with functional components and hooks
- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animation library
- **React Router** - Client-side routing

### UI Components
- **Lucide React** - Beautiful icon library
- **Custom Components** - Reusable UI components with glassmorphism effects

### Development Tools
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Vite PWA** - Progressive Web App support

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx       # Navigation with theme toggle
│   ├── Footer.jsx       # Footer with social links
│   ├── Hero.jsx         # Hero section with animations
│   ├── ThemeToggle.jsx  # Dark/light theme switcher
│   ├── SkillRadial.jsx  # Animated skill progress bars
│   ├── SkillMarquee.jsx # Auto-scrolling skill showcase
│   └── SkillChip.jsx    # Interactive skill badges
├── pages/               # Page components
│   ├── Home.jsx         # Home page with hero
│   ├── About.jsx        # About page with timeline
│   ├── Skills.jsx       # Skills showcase
│   ├── Projects.jsx     # Projects grid with modals
│   ├── Certificates.jsx # Certificates gallery
│   ├── Contact.jsx      # Contact form and info
│   └── NotFound.jsx     # 404 error page
├── utils/               # Utility functions
│   ├── cn.js            # Classname utility
│   ├── theme.js         # Theme management
│   └── gsap-utils.js    # GSAP animation helpers
└── styles/              # Global styles
    └── globals.css      # Tailwind and custom styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shivanid8076-oss/shivani-portfolio.git
   cd shivani-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📱 Pages & Routes

- **/** - Home page with hero section and introduction
- **/about** - About page with education timeline and hobbies
- **/skills** - Skills showcase with radial progress bars and marquee
- **/projects** - Projects grid with filtering and modal details
- **/certificates** - Certificates gallery with lightbox view
- **/contact** - Contact form with mailto integration
- **/404** - Custom 404 error page

## 🎨 Design System

### Colors
- **Primary**: Teal (#14b8a6)
- **Secondary**: Purple (#a855f7)
- **Accent**: Blue, Green, Yellow variations
- **Neutral**: Gray scale with dark/light variants

### Typography
- **Display**: Space Grotesk (headings)
- **Body**: Inter (paragraphs and UI text)

### Components
- **Glass Effect**: Backdrop blur with transparency
- **Neon Glow**: Subtle shadow effects
- **Card Hover**: Scale and translate animations
- **Theme Toggle**: Animated switch with persistence

## 🎬 Animations

### GSAP Features
- **Page Transitions**: Fade and slide animations
- **Scroll Triggers**: Elements animate on scroll
- **Stagger Effects**: Sequential element animations
- **Parallax**: Background movement effects
- **Micro-interactions**: Hover states and button feedback

### Accessibility
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: ARIA labels and semantic HTML

## 🔧 Configuration

### Tailwind Config
- Dark mode support with class strategy
- Custom colors and animations
- Extended utilities for glassmorphism

### Vite Config
- PWA plugin configuration
- Path aliases (@/ for src/)
- Build optimizations

### PWA Features
- Service worker for offline support
- App manifest for installability
- Caching strategy for assets

## 📊 Performance

### Lighthouse Targets
- **Performance**: ≥85
- **Accessibility**: ≥90
- **Best Practices**: ≥90
- **SEO**: ≥90

### Optimizations
- **Lazy Loading**: Images and route components
- **Code Splitting**: Automatic with React Router
- **Image Optimization**: Responsive images with srcset
- **Bundle Size**: Optimized dependencies

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add redirect rules for SPA

### GitHub Pages
```bash
npm run build
npm install -g gh-pages
gh-pages -d dist
```

## 📝 Customization

### Personal Information
Update the following files with your information:
- `src/pages/Home.jsx` - Hero content
- `src/pages/About.jsx` - Personal details
- `src/pages/Contact.jsx` - Contact information
- `index.html` - Meta tags and SEO

### Adding Projects
Edit `src/pages/Projects.jsx`:
```javascript
const projectsData = [
  {
    title: 'Your Project',
    description: 'Project description',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/...',
    live: 'https://your-project.com'
  }
]
```

### Adding Certificates
Edit `src/pages/Certificates.jsx`:
```javascript
const certificatesData = [
  {
    title: 'Certificate Name',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    verificationUrl: 'https://...'
  }
]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library

## 📞 Contact

- **Email**: shivanid8076@gmail.com
- **Phone**: +91 8076566995
- **GitHub**: [shivanid8076-oss](https://github.com/shivanid8076-oss)
- **Location**: JB Knowledge Park, MDU

---

Made with ❤️ using React & Tailwind CSS
