import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface ContactProps {
  darkMode: boolean
}

const contactLinks = [
  {
    name: 'Email',
    href: 'mailto:aaryansrma19@gmail.com',
    Icon: FiMail,
    label: 'aaryansrma19@gmail.com',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/AARYANSHARMA19',
    Icon: FiGithub,
    label: 'AARYANSHARMA19',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/aaryan-sharma-6a802b1bb',
    Icon: FiLinkedin,
    label: 'aaryan-sharma-6a802b1bb',
  },
]

function Contact({ darkMode }: ContactProps) {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
    },
  }

  const itemVariants = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 20 },
    visible: prefersReducedMotion ? {} : { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section id="contact" className="py-20 px-4" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            id="contact-heading"
            variants={itemVariants}
            className="section-heading"
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg mb-10 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            I am always open to discussing new projects, research collaborations,
            or opportunities in software development and AI.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className={`flex items-center gap-3 px-5 py-3 rounded-lg transition-all duration-300 group ${
                  darkMode
                    ? 'bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5'
                    : 'bg-gray-50 border border-gray-200 hover:border-primary/50 hover:bg-primary/5'
                }`}
                aria-label={`${link.name}: ${link.label}${link.name !== 'Email' ? ' (opens in new tab)' : ''}`}
              >
                <link.Icon className={`w-5 h-5 transition-colors group-hover:text-primary ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <span className={`text-sm font-medium transition-colors group-hover:text-primary ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {link.label}
                </span>
              </a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <a
              href="/Aaryan_Sharma_Java_HU.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              aria-label="Download resume PDF (opens in new tab)"
            >
              <FiDownload className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
