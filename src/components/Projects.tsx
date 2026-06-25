import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface ProjectsProps {
  darkMode: boolean
}

const projects = [
  {
    title: 'PayFlow - Payment Processing & Fraud-Detection API',
    description: [
      'Built a Spring Boot payments service with idempotent endpoints and a pluggable, rule-based fraud engine returning APPROVE / REVIEW / DECLINE.',
      'Implemented rate limiting and event publishing behind interfaces with in-memory defaults and Redis / Kafka implementations selected by Spring profile; secured endpoints with stateless JWT authentication.',
      'Achieved ~88% line coverage (JaCoCo) across 20 JUnit and Spock tests under a TDD workflow; containerized with Docker Compose and automated build and test via a GitHub Actions CI pipeline.',
    ],
    tech: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Redis', 'Kafka', 'Docker'],
    github: 'https://github.com/AARYANSHARMA19/payflow',
  },
  {
    title: 'Expense Tracker REST API - CRUD & Spend Analytics',
    description: [
      'Built a JWT-secured REST API with full CRUD and a category-spend summary endpoint, enforcing per-user data isolation and request validation; backed by PostgreSQL with H2 for zero-dependency local runs.',
      'Achieved ~93% line coverage (JaCoCo) across 13 JUnit and Spring MockMvc tests; multi-stage Docker build automated through a GitHub Actions CI pipeline.',
    ],
    tech: ['Java 17', 'Spring Boot', 'PostgreSQL', 'JUnit', 'Docker'],
    github: 'https://github.com/AARYANSHARMA19/expense-tracker',
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
              <ul className={`text-sm flex-grow mb-4 space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.description.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2 mt-0.5 flex-shrink-0">&#9656;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 text-sm transition-colors hover:text-primary ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  aria-label={`View ${project.title} repository (opens in new tab)`}
                >
                  <FiExternalLink className="w-4 h-4" />
                  View
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
