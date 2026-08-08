import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { FiFolder } from 'react-icons/fi'

const projects = [
  {
    title: 'AI Career Accelerator & Resume Skill Gap Analyzer',
    description: 'Built with Python, NLP, Scikit-learn, and Streamlit. Extracts and visualizes resume data, analyzes skills, and provides job-fit scoring. Includes interactive dashboards and ATS score prediction. Follows modular, scalable design for performance optimization.',
    href: 'https://github.com/ravikumargupta03',
    year: 'Jul 2025',
    tags: ['Python', 'NLP', 'Streamlit', 'ML'],
  },
  {
    title: 'StockSeer.AI',
    description: 'A stock prediction platform using Python, TensorFlow, and Streamlit. Analyzes and forecasts market trends using real-time data. Includes dynamic charts, API-driven architecture, and responsive dashboards.',
    href: 'https://github.com/ravikumargupta03',
    year: 'Jul 2025',
    tags: ['Python', 'TensorFlow', 'Streamlit', 'Data Science'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-brand-500/20 to-purple-500/20">
            <FiFolder className="w-6 h-6 text-brand-600 dark:text-brand-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>
        <p className="text-lg text-light-textSecondary dark:text-dark-textSecondary mb-12 font-medium">
          A showcase of my recent work and <span className="font-bold text-brand-600 dark:text-brand-400">innovative projects</span> I've built and explored.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} delay={i * 0.15} />
        ))}
      </motion.div>
    </section>
  )
}


