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
              I am a Computer Science &amp; Engineering student at the University of Debrecen, passionate about
              building scalable software and leveraging AI for real-world applications. Currently, I am building a
              GPU-accelerated ML pipeline using NVIDIA&apos;s cuDF and cuML libraries for bioinformatics research.
            </p>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I am looking to collaborate on projects involving generative AI, Java microservices, and bioinformatics
              tools. My current learning focus includes Advanced Spring Framework and diffusion models for generative AI.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { label: 'Experience', value: 'Java & Python' },
                { label: 'Focus', value: 'AI & ML' },
                { label: 'Education', value: 'BSc CS&E' },
                { label: 'Location', value: 'Hungary' },
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
