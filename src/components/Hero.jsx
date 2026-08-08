import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiCode, FiTrendingUp, FiDatabase } from 'react-icons/fi'
import Typewriter from './Typewriter'
import BlobCursor from './BlobCursor'
import ProfileCard from './ProfileCard'
import ClickSpark from './ClickSpark'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-32 pb-20 sm:pb-28 min-h-screen flex items-center">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
        <motion.div
          className="lg:col-span-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-brand-500 dark:text-brand-400 font-bold tracking-wide text-sm uppercase mb-4 flex items-center gap-2"
          >
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              👋
            </motion.span>
            Hello, I'm
          </motion.p>
          
          <div className="relative py-8 px-4 -mx-4 mb-4">
            <BlobCursor>
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight relative z-10"
              >
                <span className="bg-gradient-to-r from-brand-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  <Typewriter text="Ravi Kumar Gupta" speed={80} />
                </span>
              </motion.h1>
            </BlobCursor>
          </div>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 mb-6"
          >
            <motion.span
              className="group px-4 py-1.5 rounded-full glass text-sm font-semibold text-light-text dark:text-dark-text hover:shadow-glow transition-all cursor-default relative overflow-hidden"
              whileHover={{ scale: 1.08, y: -2 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-brand-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <span className="relative z-10">Aspiring Computer Science</span>
            </motion.span>
            <motion.span
              className="group px-4 py-1.5 rounded-full glass text-sm font-semibold text-light-text dark:text-dark-text hover:shadow-glow transition-all cursor-default relative overflow-hidden"
              whileHover={{ scale: 1.08, y: -2 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <span className="relative z-10">& Data Science Student</span>
            </motion.span>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-light-textSecondary dark:text-dark-textSecondary leading-relaxed max-w-2xl mb-8 font-medium"
          >
            I'm a B.Tech Computer Science student at <span className="font-bold text-brand-600 dark:text-brand-400">G.L. Bajaj Institute</span> of Technology & Management, 
            passionate about <span className="font-bold text-brand-600 dark:text-brand-400">AI</span>,{' '}
            <span className="font-bold text-purple-600 dark:text-purple-400">Machine Learning</span>, 
            Web Development, and Data Analytics. I build <span className="font-semibold text-pink-600 dark:text-pink-400">data-driven solutions</span>, ML-powered applications, 
            and modern web interfaces.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <ClickSpark>
              <motion.a
                href="#projects"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/50 hover:shadow-xl hover:shadow-brand-500/50 transition-all overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            </ClickSpark>
            
            <ClickSpark>
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:glass-strong transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </ClickSpark>
            
            <ClickSpark>
              <motion.a
                href="/Raviresume.pdf"
                download="Ravi_Kumar_Gupta_Resume.pdf"
                className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-light-text dark:text-dark-text hover:glass-strong transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                Resume
              </motion.a>
            </ClickSpark>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 mt-12"
          >
            <div className="glass rounded-xl p-4 hover:glass-strong transition-all group cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <FiCode className="w-4 h-4 text-brand-500" />
                <span className="text-2xl font-bold text-light-text dark:text-dark-text">6+</span>
              </div>
              <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary font-medium">Languages</p>
            </div>
            <div className="glass rounded-xl p-4 hover:glass-strong transition-all group cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <FiTrendingUp className="w-4 h-4 text-purple-500" />
                <span className="text-2xl font-bold text-light-text dark:text-dark-text">5+</span>
              </div>
              <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary font-medium">Frameworks</p>
            </div>
            <div className="glass rounded-xl p-4 hover:glass-strong transition-all group cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <FiDatabase className="w-4 h-4 text-pink-500" />
                <span className="text-2xl font-bold text-light-text dark:text-dark-text">10+</span>
              </div>
              <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary font-medium">Projects</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="lg:col-span-5">
          <ProfileCard />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-start justify-center p-2 backdrop-blur-sm bg-white/10 dark:bg-black/10">
          <motion.div
            className="w-1 h-3 rounded-full bg-brand-500"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}


