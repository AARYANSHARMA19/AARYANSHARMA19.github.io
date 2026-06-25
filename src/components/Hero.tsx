import { motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface HeroProps {
  darkMode: boolean
}

function Hero({ darkMode }: HeroProps) {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: prefersReducedMotion ? 0 : 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 30 },
    visible: prefersReducedMotion ? {} : { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-primary' : 'bg-primary/30'}`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 ${darkMode ? 'bg-accent' : 'bg-accent/30'}`} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Profile photo */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-sm opacity-75 animate-gradient" />
            <img
              src="/photo.png"
              alt="Aaryan Sharma"
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-background"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="gradient-text">Aaryan Sharma</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className={`text-lg md:text-xl lg:text-2xl font-light mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
        >
          Backend-Focused Engineer{' '}
          <span className="text-primary">||</span> Java &amp; Spring Boot{' '}
          <span className="text-primary">||</span> CI/CD &amp; DevOps
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
            }}
            className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Get in Touch
          </a>
          <a
            href="/Aaryan_Sharma_Java_HU.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300 ${darkMode ? '' : 'hover:bg-primary/5'}`}
            aria-label="Download resume (opens in new tab)"
          >
            View Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HiChevronDown className={`w-6 h-6 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
