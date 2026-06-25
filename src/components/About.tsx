import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface AboutProps {
  darkMode: boolean
}

function About({ darkMode }: AboutProps) {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.15 },
    },
  }

  const itemVariants = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 20 },
    visible: prefersReducedMotion ? {} : { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section id="about" className="py-20 px-4" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            id="about-heading"
            variants={itemVariants}
            className="section-heading"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className={`glass-card p-8 ${darkMode ? '' : 'bg-gray-50 border-gray-200'}`}
          >
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Computer Science graduate and backend-focused engineer who ships production services end-to-end - from
              Java and Spring Boot microservices to automated CI/CD delivery. Strong in REST API design, test-driven
              development, and debugging under real conditions within Agile teams.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { label: 'Backend', value: 'Java & Spring' },
                { label: 'DevOps', value: 'CI/CD & Docker' },
                { label: 'Education', value: 'BSc CS - 4.2/5.0' },
                { label: 'Location', value: 'Budapest, HU' },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`text-center p-4 rounded-lg ${darkMode ? 'bg-white/5' : 'bg-white border border-gray-200'}`}
                >
                  <div className="text-primary font-bold text-lg">{item.value}</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
