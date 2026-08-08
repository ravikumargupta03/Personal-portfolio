import { motion } from 'framer-motion'
import { FiAward, FiBook, FiCode, FiTool, FiUser, FiTarget } from 'react-icons/fi'

const languages = ['C', 'C++', 'Python', 'HTML/CSS', 'JavaScript', 'ReactJS']
const frameworks = ['Next.js', 'React Router', 'React Native', 'ExpressJS', 'Tailwind CSS']
const tools = ['Git', 'GitHub', 'Docker', 'PyCharm', 'VS Code']
const concepts = ['Data Structures', 'REST APIs', 'Modular Programming', 'NLP', 'Machine Learning', 'Data Analytics']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const skillCardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
}

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-brand-500/20 to-purple-500/20">
              <FiUser className="w-7 h-7 text-brand-600 dark:text-brand-400" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </div>
          <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary max-w-3xl leading-relaxed font-medium">
            I'm an aspiring <span className="font-bold text-brand-600 dark:text-brand-400">Computer Science</span> and <span className="font-bold text-purple-600 dark:text-purple-400">Data Science</span> undergraduate currently pursuing a B.Tech 
            from <span className="font-semibold">G.L. Bajaj Institute of Technology & Management</span> (AKTU), with a <span className="font-bold text-brand-600 dark:text-brand-400">GPA of 8.09</span>. I have a 
            strong interest in AI, Machine Learning, Web Development, and Data Analytics, and I'm 
            building a technical portfolio around <span className="font-semibold text-pink-600 dark:text-pink-400">Python</span>, <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>, and data-driven applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            className="group relative glass-strong rounded-2xl p-6 hover:shadow-xl hover:shadow-brand-500/10 transition-all overflow-hidden"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-gradient-to-br from-brand-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                  <FiBook className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text">Education</h3>
              </div>
              <div className="space-y-4 text-light-textSecondary dark:text-dark-textSecondary">
                <div>
                  <p className="font-bold text-light-text dark:text-dark-text text-lg mb-1">
                    Bachelor of Technology (Computer Science)
                  </p>
                  <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">G.L. Bajaj Institute of Technology & Management, AKTU</p>
                  <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 dark:bg-brand-500/20">
                    <span className="text-sm text-brand-600 dark:text-brand-400 font-bold">GPA: 8.09</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-light-border dark:border-dark-border space-y-2">
                  <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">Class XII (CBSE, 2023): <span className="font-semibold text-brand-600 dark:text-brand-400">73%</span> – Sarla International Academy, Basti</p>
                  <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">Class X (CBSE, 2021): <span className="font-semibold text-brand-600 dark:text-brand-400">88%</span> – Sarla International Academy, Basti</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            variants={itemVariants}
            className="group relative glass-strong rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all overflow-hidden"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                  <FiAward className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text">Experience</h3>
              </div>
              <div className="space-y-4 text-sm text-light-textSecondary dark:text-dark-textSecondary">
                <div>
                  <p className="font-bold text-light-text dark:text-dark-text">Accenture – Technology Apprenticeship</p>
                  <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/20 mt-1">
                    <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Jun–Jul 2025</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-xs text-light-textSecondary dark:text-dark-textSecondary">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-500 mt-0.5">▹</span>
                      <span>Cloud-based data platforms (<span className="font-semibold">4hrs/week reduction</span>)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-500 mt-0.5">▹</span>
                      <span>Data pipeline optimization (<span className="font-semibold">20% efficiency</span>)</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-light-border dark:border-dark-border">
                  <p className="font-bold text-light-text dark:text-dark-text">Deloitte – Tech Simulation</p>
                  <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/20 mt-1">
                    <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Jun–Jul 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-gradient-to-br from-brand-500/20 to-purple-500/20">
              <FiTarget className="w-6 h-6 text-brand-600 dark:text-brand-400" />
            </div>
            <h3 className="text-3xl font-bold text-light-text dark:text-dark-text">
              <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              variants={skillCardVariants}
              className="group glass rounded-2xl p-6 hover:glass-strong hover:shadow-lg transition-all"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <p className="text-base font-bold text-light-text dark:text-dark-text mb-4 flex items-center gap-2">
                <FiCode className="w-5 h-5 text-brand-500" /> Languages
              </p>
              <div className="flex flex-wrap gap-2">
                {languages.map((s, idx) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className="rounded-lg glass px-3 py-1.5 text-sm font-semibold text-light-text dark:text-dark-text hover:glass-strong hover:text-brand-600 dark:hover:text-brand-400 hover:scale-105 transition-all cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={skillCardVariants}
              className="group glass rounded-2xl p-6 hover:glass-strong hover:shadow-lg transition-all"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <p className="text-base font-bold text-light-text dark:text-dark-text mb-4 flex items-center gap-2">
                <FiTool className="w-5 h-5 text-purple-500" /> Frameworks
              </p>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((s, idx) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className="rounded-lg glass px-3 py-1.5 text-sm font-semibold text-light-text dark:text-dark-text hover:glass-strong hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105 transition-all cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={skillCardVariants}
              className="group glass rounded-2xl p-6 hover:glass-strong hover:shadow-lg transition-all"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <p className="text-base font-bold text-light-text dark:text-dark-text mb-4 flex items-center gap-2">
                <FiTool className="w-5 h-5 text-pink-500" /> Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((s, idx) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className="rounded-lg glass px-3 py-1.5 text-sm font-semibold text-light-text dark:text-dark-text hover:glass-strong hover:text-pink-600 dark:hover:text-pink-400 hover:scale-105 transition-all cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={skillCardVariants}
              className="group glass rounded-2xl p-6 hover:glass-strong hover:shadow-lg transition-all"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <p className="text-base font-bold text-light-text dark:text-dark-text mb-4 flex items-center gap-2">
                <FiCode className="w-5 h-5 text-brand-500" /> Concepts
              </p>
              <div className="flex flex-wrap gap-2">
                {concepts.map((s, idx) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className="rounded-lg glass px-3 py-1.5 text-sm font-semibold text-light-text dark:text-dark-text hover:glass-strong hover:text-brand-600 dark:hover:text-brand-400 hover:scale-105 transition-all cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}


