import { motion } from 'framer-motion'
import { SiNvidia } from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import { HiAcademicCap } from 'react-icons/hi'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { IconType } from 'react-icons'

interface CertificationsProps {
  darkMode: boolean
}

interface Certification {
  name: string
  issuer: string
  date: string
  Icon: IconType
  iconColor: string
}

const certifications: Certification[] = [
  {
    name: 'AI for Anomaly Detection',
    issuer: 'NVIDIA',
    date: 'November 2024',
    Icon: SiNvidia,
    iconColor: 'text-green-500',
  },
  {
    name: 'AI for Predictive Maintenance',
    issuer: 'NVIDIA',
    date: 'November 2024',
    Icon: SiNvidia,
    iconColor: 'text-green-500',
  },
  {
    name: 'Data Engineering Pipelines',
    issuer: 'NVIDIA',
    date: 'December 2024',
    Icon: SiNvidia,
    iconColor: 'text-green-500',
  },
  {
    name: 'CV for Industrial Inspection',
    issuer: 'NVIDIA',
    date: 'December 2024',
    Icon: SiNvidia,
    iconColor: 'text-green-500',
  },
  {
    name: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA',
    date: 'November 2024',
    Icon: SiNvidia,
    iconColor: 'text-green-500',
  },
  {
    name: 'Azure Data Fundamentals (DP-900)',
    issuer: 'Microsoft',
    date: 'February 2025',
    Icon: VscAzure,
    iconColor: 'text-blue-500',
  },
  {
    name: 'IT Specialist - HTML and CSS',
    issuer: 'Certiport',
    date: 'January 2025',
    Icon: HiAcademicCap,
    iconColor: 'text-purple-500',
  },
]

function Certifications({ darkMode }: CertificationsProps) {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 },
    },
  }

  const cardVariants = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 },
    visible: prefersReducedMotion ? {} : { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  }

  return (
    <section id="certifications" className="py-20 px-4" aria-labelledby="certifications-heading">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          id="certifications-heading"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <span className="gradient-text">Certifications</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={cardVariants}
              whileHover={prefersReducedMotion ? {} : { scale: 1.03, transition: { duration: 0.2 } }}
              className={`glass-card p-5 group cursor-default hover:border-primary/30 transition-all duration-300 relative overflow-hidden ${darkMode ? '' : 'bg-gray-50 border-gray-200 hover:border-primary/30'}`}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>

              <div className="relative flex items-start gap-3">
                <cert.Icon className={`w-6 h-6 flex-shrink-0 mt-0.5 ${cert.iconColor}`} />
                <div>
                  <h3 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {cert.name}
                  </h3>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {cert.issuer} &bull; {cert.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
