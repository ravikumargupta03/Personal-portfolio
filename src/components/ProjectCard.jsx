import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function ProjectCard({ title, description, href, year, tags = [], delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 100 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative glass-strong rounded-2xl p-6 hover:shadow-2xl hover:shadow-brand-500/20 transition-all duration-300 overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="relative z-10">
        {year && (
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full glass text-brand-600 dark:text-brand-400 mb-4">
            {year}
          </span>
        )}
        
        <h4 className="text-xl font-bold text-light-text dark:text-dark-text mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {title}
        </h4>
        
        <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary leading-relaxed mb-4 font-medium">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-lg glass text-light-textSecondary dark:text-dark-textSecondary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <motion.a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/50 transition-all"
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiGithub className="w-4 h-4" />
          View on GitHub
          <FiExternalLink className="w-3 h-3" />
        </motion.a>
      </div>
    </motion.article>
  )
}


