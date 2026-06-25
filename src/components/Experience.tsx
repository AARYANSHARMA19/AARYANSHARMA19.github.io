import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface ExperienceProps {
  darkMode: boolean
}

const experiences = [
  {
    role: 'DevOps Trainee',
    company: 'NIX',
    location: 'Budapest, Hungary',
    period: 'Feb 2025 - Feb 2026',
    description: [
      'Built and maintained CI/CD pipelines (GitHub Actions, Azure DevOps) automating build, test, and deploy for 6+ services, cutting deployment time from ~20 minutes to under 5 minutes.',
      'Containerized 8 internal services with Docker, eliminating recurring environment-mismatch failures during releases.',
      'Diagnosed and resolved 15+ post-deployment issues per sprint via log analysis, and authored 10+ runbooks that reduced repeat incidents.',
    ],
  },
  {
    role: 'Java Trainee, Backend',
    company: 'NIX',
    location: 'Budapest, Hungary',
    period: 'Jul 2024 - Jan 2025',
    description: [
      'Developed and tested 5+ backend microservices in Java 17 and Spring Boot using a TDD approach, maintaining ~80% test coverage.',
      'Shipped 20+ REST API endpoints and resolved 25+ bugs in production-facing services.',
      'Root-caused application issues across dev and test environments by reproducing failures and analyzing logs.',
    ],
  },
  {
    role: 'Bioinformatics Research Intern',
    company: 'University of Debrecen',
    location: 'Debrecen, Hungary',
    period: 'Jul 2024 - Sep 2024',
    description: [
      'Built Python data pipelines (Pandas, NumPy) to process 10,000+ records, automating manual data handling and adding validation checks; documented 6+ reproducible workflows.',
    ],
  },
]

function Experience({ darkMode }: ExperienceProps) {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.3 },
    },
  }

  const cardVariants = (index: number) => ({
    hidden: prefersReducedMotion
      ? {}
      : { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: prefersReducedMotion
      ? {}
      : { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  })

  return (
    <section id="experience" className="py-20 px-4" aria-labelledby="experience-heading">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          id="experience-heading"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`} />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              variants={cardVariants(index)}
              className={`relative mb-12 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              } pl-12 md:pl-0`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-3 md:left-auto ${
                index % 2 === 0 ? 'md:right-[-0.5625rem]' : 'md:left-[-0.5625rem]'
              } top-6 w-4 h-4 rounded-full bg-primary border-4 ${darkMode ? 'border-background' : 'border-white'}`} />

              <div className={`glass-card p-6 hover:border-primary/30 transition-all duration-300 ${darkMode ? '' : 'bg-gray-50 border-gray-200 hover:border-primary/30'}`}>
                <div className="flex flex-wrap items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-primary">{exp.role}</h3>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{exp.period}</span>
                </div>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {exp.company} &bull; {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.description.map((point, i) => (
                    <li
                      key={i}
                      className={`text-sm flex items-start ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      <span className="text-primary mr-2 mt-1 flex-shrink-0">&#9656;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
