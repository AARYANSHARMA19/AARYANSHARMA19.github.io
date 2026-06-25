import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface EducationProps {
  darkMode: boolean
}

const education = [
  {
    institution: 'University of Debrecen',
    degree: 'BSc in Computer Science & Engineering',
    period: '2021 - Present',
    location: 'Debrecen, Hungary',
    details: 'Focusing on software engineering, artificial intelligence, and bioinformatics research.',
  },
  {
    institution: 'MPS International School',
    degree: 'Higher Secondary (PCM)',
    period: '2018 - 2020',
    location: 'India',
    details: 'Physics, Chemistry, Mathematics. Achieved 92.6% aggregate score.',
  },
]

function Education({ darkMode }: EducationProps) {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.2 },
    },
  }

  const cardVariants = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 30 },
    visible: prefersReducedMotion ? {} : { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section id="education" className="py-20 px-4" aria-labelledby="education-heading">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          id="education-heading"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <span className="gradient-text">Education</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.institution}
              variants={cardVariants}
              whileHover={prefersReducedMotion ? {} : { scale: 1.01, transition: { duration: 0.2 } }}
              className={`glass-card p-6 flex items-start gap-4 hover:border-primary/30 transition-all duration-300 ${darkMode ? '' : 'bg-gray-50 border-gray-200 hover:border-primary/30'}`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <HiAcademicCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{edu.institution}</h3>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{edu.period}</span>
                </div>
                <p className="text-primary font-medium text-sm mb-1">{edu.degree}</p>
                <p className={`text-sm mb-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{edu.location}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education
