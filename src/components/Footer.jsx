import { motion } from 'framer-motion'
import { FiHeart, FiCode } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 border-t border-light-border dark:border-dark-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
            © {year} Ravi Kumar Gupta. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
            >
              <FiHeart className="w-4 h-4 text-red-500" />
            </motion.span>
            <span>using</span>
            <FiCode className="w-4 h-4 text-brand-500" />
            <span>React, Tailwind CSS & Framer Motion</span>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}


