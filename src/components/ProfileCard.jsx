import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'
import ClickSpark from './ClickSpark'

export default function ProfileCard() {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/ravikumargupta03', label: 'GitHub', color: 'text-gray-700 dark:text-gray-300' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ravi-gupta-2273a2297', label: 'LinkedIn', color: 'text-blue-600 dark:text-blue-400' },
    { icon: FiMail, href: '#', label: 'Email', color: 'text-red-600 dark:text-red-400' },
    { icon: FiTwitter, href: '#', label: 'Twitter', color: 'text-sky-600 dark:text-sky-400' },
  ]

  const techStack = ['Python', 'JavaScript', 'React', 'TensorFlow', 'PyTorch', 'Node.js']

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 100 }}
    >
      {/* Profile Card Container */}
      <motion.div
        className="relative glass-strong rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ willChange: 'transform' }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-brand-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-6">
            <motion.div
              className="relative mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* Glowing orb behind avatar */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-purple-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              
              {/* Avatar */}
              <motion.div
                className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full glass-strong border-4 border-white/50 dark:border-gray-800/50 overflow-hidden"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(99, 102, 241, 0.3)',
                    '0 0 40px rgba(139, 92, 246, 0.5)',
                    '0 0 20px rgba(99, 102, 241, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-brand-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl md:text-6xl">👨‍💻</span>
                </div>
              </motion.div>
              
              {/* Status indicator */}
              <motion.div
                className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Name and Title */}
            <motion.h2
              className="text-xl sm:text-2xl font-bold text-light-text dark:text-dark-text mb-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Ravi Kumar Gupta
            </motion.h2>
            <motion.p
              className="text-brand-600 dark:text-brand-400 font-medium text-xs sm:text-sm mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              CS & Data Science Student
            </motion.p>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <ClickSpark key={index} className="inline-block">
                  <motion.a
                    href={social.href}
                    target={social.href !== '#' ? "_blank" : undefined}
                    rel={social.href !== '#' ? "noopener noreferrer" : undefined}
                    className={`${social.color} w-10 h-10 rounded-full glass flex items-center justify-center hover:glass-strong transition-all cursor-pointer`}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                </ClickSpark>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-gray-700 mb-6" />

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-light-textSecondary dark:text-dark-textSecondary mb-3 uppercase tracking-wide">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1.5 rounded-full glass text-xs font-medium text-light-text dark:text-dark-text hover:glass-strong transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Projects', value: '10+' },
              { label: 'Experience', value: '2Y' },
              { label: 'Location', value: 'India' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass rounded-xl p-3 text-center group/stat cursor-default"
                whileHover={{ scale: 1.05, y: -3 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <div className="text-xl font-bold text-brand-600 dark:text-brand-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-light-textSecondary dark:text-dark-textSecondary font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating particles effect on hover */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brand-400 rounded-full opacity-0 group-hover:opacity-100"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-r from-brand-400 to-purple-400 opacity-20 blur-xl pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1], 
          rotate: [0, 180, 360],
          x: [0, 10, 0],
          y: [0, -10, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-20 blur-xl pointer-events-none"
        animate={{ 
          scale: [1, 1.3, 1], 
          rotate: [360, 180, 0],
          x: [0, -10, 0],
          y: [0, 10, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}

