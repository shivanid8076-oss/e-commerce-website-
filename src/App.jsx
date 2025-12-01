import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ModernCursor from './components/ModernCursor'
import ScrollProgress from './components/ScrollProgress'
import PageTransition, { RouteTransition } from './components/PageTransition'
import { TechBackground, TechFloatingElements } from './components/TechElements'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="page-layout bg-background text-foreground font-body relative">
      <TechBackground />
      <TechFloatingElements />
      <ModernCursor />
      <ScrollProgress />
      <RouteTransition />
      <Navbar />
      <main className="content-layout pt-20">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}

export default App
