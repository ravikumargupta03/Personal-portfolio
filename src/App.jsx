import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'
import GalaxyBackground from './components/GalaxyBackground'

function App() {
  useEffect(() => {
    // ensure starts at top on load
    window.scrollTo(0, 0)
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300 ease-out relative overflow-x-hidden">
        <GalaxyBackground />
        <BackgroundAnimation />
        {/* Enhanced gradient overlays with MUCH better distinction */}
        <div 
          className="fixed inset-0 -z-10 bg-hero-gradient-light dark:bg-hero-gradient pointer-events-none opacity-80 dark:opacity-70 transition-opacity duration-300" 
          style={{ willChange: 'opacity' }}
        />
        
        {/* Light mode - Bright warm gradient */}
        <div 
          className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50/60 via-purple-50/40 to-pink-50/50 dark:opacity-0 pointer-events-none transition-opacity duration-300" 
          style={{ willChange: 'opacity' }}
        />
        
        {/* Dark mode - Deep dark gradient with vibrant accents */}
        <div 
          className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-950/40 via-purple-950/50 to-black/60 opacity-0 dark:opacity-100 pointer-events-none transition-opacity duration-300" 
          style={{ willChange: 'opacity' }}
        />
        
        {/* Additional dark mode accent - more vibrant */}
        <div 
          className="fixed inset-0 -z-10 bg-gradient-to-t from-transparent via-purple-900/20 to-transparent opacity-0 dark:opacity-100 pointer-events-none transition-opacity duration-300" 
          style={{ willChange: 'opacity' }}
        />
        
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App


