import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend, FiMessageCircle, FiExternalLink } from 'react-icons/fi'
import ClickSpark from './ClickSpark'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Contact() {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('Thanks! I will get back to you soon.')
    setTimeout(() => {
      setStatus('')
      setIsSubmitting(false)
      e.currentTarget.reset()
    }, 3000)
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-brand-500/20 to-purple-500/20">
            <FiMessageCircle className="w-7 h-7 text-brand-600 dark:text-brand-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
        </div>
        <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary font-medium">
          Feel free to reach out for <span className="font-bold text-brand-600 dark:text-brand-400">collaboration</span>, opportunities, or just a friendly hello!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative glass-strong rounded-2xl p-8 hover:shadow-xl hover:shadow-brand-500/10 transition-all overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-8">Send a Message</h3>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary mb-2">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full rounded-xl glass px-4 py-3 text-sm text-light-text dark:text-dark-text placeholder-light-textSecondary/60 dark:placeholder-dark-textSecondary/60 bg-light-surface/80 dark:bg-dark-surfaceElevated/50 focus:outline-none focus:ring-2 focus:ring-brand-500/50 dark:focus:ring-brand-400/50 transition-all font-medium"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary mb-2">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full rounded-xl glass px-4 py-3 text-sm text-light-text dark:text-dark-text placeholder-light-textSecondary/60 dark:placeholder-dark-textSecondary/60 bg-light-surface/80 dark:bg-dark-surfaceElevated/50 focus:outline-none focus:ring-2 focus:ring-brand-500/50 dark:focus:ring-brand-400/50 transition-all font-medium"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary mb-2">
                Message
              </label>
              <textarea
                required
                rows={6}
                className="w-full rounded-xl glass px-4 py-3 text-sm text-light-text dark:text-dark-text placeholder-light-textSecondary/60 dark:placeholder-dark-textSecondary/60 bg-light-surface/80 dark:bg-dark-surfaceElevated/50 focus:outline-none focus:ring-2 focus:ring-brand-500/50 dark:focus:ring-brand-400/50 transition-all resize-none"
                placeholder="Write your message here..."
              />
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/50 transition-all overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-brand-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                <FiSend className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
            </motion.button>

            {status && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-emerald-500 dark:text-emerald-400 font-medium flex items-center gap-2"
              >
                <span>✓</span>
                {status}
              </motion.p>
            )}
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative glass-strong rounded-2xl p-8 hover:shadow-xl hover:shadow-brand-500/10 transition-all overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-8">Connect With Me</h3>
            
            <div className="space-y-3">
              <ClickSpark>
                <motion.a
                  href="https://www.linkedin.com/in/ravi-gupta-2273a2297"
                  target="_blank"
                  rel="noreferrer"
                  className="group/item relative flex items-center gap-4 p-4 rounded-xl glass hover:glass-strong transition-all overflow-hidden"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 p-3 rounded-xl bg-blue-500/20 group-hover/item:scale-110 transition-transform duration-300">
                    <FiLinkedin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="relative z-10 flex-1">
                    <p className="font-bold text-light-text dark:text-dark-text">LinkedIn</p>
                    <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary">Connect professionally</p>
                  </div>
                  <FiExternalLink className="w-4 h-4 text-light-textSecondary dark:text-dark-textSecondary opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                </motion.a>
              </ClickSpark>
              
              <ClickSpark>
                <motion.a
                  href="https://github.com/ravikumargupta03"
                  target="_blank"
                  rel="noreferrer"
                  className="group/item relative flex items-center gap-4 p-4 rounded-xl glass hover:glass-strong transition-all overflow-hidden"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gray-500/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 p-3 rounded-xl bg-gray-700/20 dark:bg-gray-600/20 group-hover/item:scale-110 transition-transform duration-300">
                    <FiGithub className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div className="relative z-10 flex-1">
                    <p className="font-bold text-light-text dark:text-dark-text">GitHub</p>
                    <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary">Check out my code</p>
                  </div>
                  <FiExternalLink className="w-4 h-4 text-light-textSecondary dark:text-dark-textSecondary opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                </motion.a>
              </ClickSpark>
              
              <ClickSpark>
                <motion.a
                  href="mailto:ravigupta9408@gmail.com"
                  className="group/item relative flex items-center gap-4 p-4 rounded-xl glass hover:glass-strong transition-all overflow-hidden"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 p-3 rounded-xl bg-red-500/20 group-hover/item:scale-110 transition-transform duration-300">
                    <FiMail className="w-5 h-5 text-red-500" />
                  </div>
                  <div className="relative z-10 flex-1">
                    <p className="font-bold text-light-text dark:text-dark-text">Email</p>
                    <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary">ravigupta9408@gmail.com</p>
                  </div>
                </motion.a>
              </ClickSpark>
              
              <div className="pt-6 mt-4 border-t border-light-border dark:border-dark-border space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl glass hover:glass-strong transition-all cursor-default group">
                  <div className="p-2 rounded-lg bg-brand-500/20">
                    <FiMapPin className="w-4 h-4 text-brand-500" />
                  </div>
                  <span className="text-sm text-light-text dark:text-dark-text font-medium group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">Greater Noida, India</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl glass hover:glass-strong transition-all cursor-default group">
                  <div className="p-2 rounded-lg bg-brand-500/20">
                    <FiPhone className="w-4 h-4 text-brand-500" />
                  </div>
                  <span className="text-sm text-light-text dark:text-dark-text font-medium group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">+91 8318749146</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


