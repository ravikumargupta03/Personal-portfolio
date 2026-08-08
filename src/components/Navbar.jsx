import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-brand-500/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.a
          href="#home"
              className="text-xl font-bold bg-gradient-to-r from-brand-500 to-purple-500 dark:from-brand-400 dark:to-purple-400 bg-clip-text text-transparent hover:from-brand-600 hover:to-purple-600 dark:hover:from-brand-300 dark:hover:to-purple-300 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ravi Kumar Gupta
        </motion.a>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="relative p-2.5 rounded-xl glass hover:glass-strong transition-all duration-300 group"
            aria-label="Toggle theme"
          >
            <motion.div
              whileHover={{ rotate: theme === 'dark' ? 180 : 15, scale: 1.15 }}
              whileTap={{ scale: 0.85 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? (
                <FiSun className="w-5 h-5 text-yellow-400 dark:text-yellow-300 group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.6)] transition-all" />
              ) : (
                <FiMoon className="w-5 h-5 text-indigo-700 dark:text-indigo-300 group-hover:text-indigo-600 transition-all" />
              )}
            </motion.div>
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
              animate={theme === 'dark' ? { opacity: [0, 0.3, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
          </button>

          <button
            className="sm:hidden p-2 rounded-lg glass hover:glass-strong transition-all"
            aria-label="Toggle Menu"
            onClick={() => setOpen(!open)}
          >
            <motion.div
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </motion.div>
          </button>
        </div>

        <ul className="hidden sm:flex gap-2">
          {links.map((l, index) => (
            <motion.li
              key={l.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={l.href}
                className="relative px-4 py-2 rounded-lg text-sm font-semibold text-light-textSecondary dark:text-dark-textSecondary hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-300 group"
              >
                {l.label}
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500 to-purple-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden border-t border-light-border dark:border-dark-border glass"
          >
            <ul className="flex flex-col px-4 py-4 gap-2">
              {links.map((l, index) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={l.href}
                    className="block w-full py-3 px-4 rounded-lg text-light-text dark:text-dark-text font-semibold hover:glass-strong hover:text-brand-600 dark:hover:text-brand-400 transition-all"
                    onClick={handleLinkClick}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}


