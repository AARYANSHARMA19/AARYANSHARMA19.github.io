import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface ProjectsProps {
  darkMode: boolean
}

const projects = [
  {
    title: 'GPU-Accelerated ML Pipeline for Bioinformatics',
    description:
      'Built a high-performance machine learning pipeline leveraging NVIDIA cuDF and cuML for GPU-accelerated data processing and model training on large-scale bioinformatics datasets.',
    tech: ['Python', 'NVIDIA cuDF', 'NVIDIA cuML', 'Docker', 'CUDA'],
    github: 'https://github.com/AARYANSHARMA19',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Modern, responsive portfolio built with React, Tailwind CSS, and Framer Motion. Features smooth animations, dark/light mode, and accessible design following WCAG guidelines.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/AARYANSHARMA19/AARYANSHARMA19.github.io',
    live: 'https://aaryansharma19.github.io',
  },
  {
    title: 'Java Microservices Training Project',
    description:
      'Developed microservice-based applications as part of intensive Java training. Implemented REST APIs, unit testing with JUnit, and CI/CD pipelines with Maven.',
    tech: ['Java', 'Spring', 'Maven', 'JUnit', 'REST APIs'],
    github: 'https://github.com/AARYANSHARMA19',
  },
]

function Projects({ darkMode }: ProjectsProps) {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.15 },
    },
  }

  const cardVariants = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 30 },
    visible: prefersReducedMotion ? {} : { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section id="projects" className="py-20 px-4" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          id="projects-heading"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={prefersReducedMotion ? {} : { y: -5, transition: { duration: 0.2 } }}
              className={`glass-card p-6 flex flex-col group hover:border-primary/30 transition-all duration-300 ${darkMode ? '' : 'bg-gray-50 border-gray-200 hover:border-primary/30'}`}
            >
              <h3 className={`text-lg font-bold mb-3 group-hover:text-primary transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <p className={`text-sm flex-grow mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-primary/10 text-primary' : 'bg-primary/10 text-primary'}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-sm transition-colors hover:text-primary ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                    aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-sm transition-colors hover:text-primary ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                    aria-label={`View ${project.title} live demo (opens in new tab)`}
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
