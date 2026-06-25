import { motion } from 'framer-motion'
import { SiNvidia } from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import { HiAcademicCap, HiExternalLink } from 'react-icons/hi'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { IconType } from 'react-icons'

interface CertificationsProps {
  darkMode: boolean
}

interface Certification {
  name: string
  issuer: string
  Icon: IconType
  iconColor: string
  verifyUrl?: string
}

interface CertGroup {
  title: string
  certs: Certification[]
}

const certGroups: CertGroup[] = [
  {
    title: 'Professional & Cloud',
    certs: [
      {
        name: 'Microsoft Certified: Azure Data Fundamentals (DP-900)',
        issuer: 'Microsoft',
        Icon: VscAzure,
        iconColor: 'text-blue-500',
      },
      {
        name: 'IT Specialist - Software Development',
        issuer: 'Pearson/Certiport',
        Icon: HiAcademicCap,
        iconColor: 'text-purple-500',
      },
      {
        name: 'IT Specialist - Java',
        issuer: 'Pearson/Certiport',
        Icon: HiAcademicCap,
        iconColor: 'text-purple-500',
      },
      {
        name: 'IT Specialist - HTML & CSS',
        issuer: 'Pearson/Certiport',
        Icon: HiAcademicCap,
        iconColor: 'text-purple-500',
      },
    ],
  },
  {
    title: 'NVIDIA Deep Learning Institute',
    certs: [
      {
        name: 'Building Agentic AI Applications with LLMs',
        issuer: 'NVIDIA',
        Icon: SiNvidia,
        iconColor: 'text-green-500',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=GBSCSv-FTSK-1fURVkUaKA',
      },
      {
        name: 'Fundamentals of Deep Learning',
        issuer: 'NVIDIA',
        Icon: SiNvidia,
        iconColor: 'text-green-500',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=1tO0Ys3ITkGJkXM3sgBKrQ',
      },
      {
        name: 'Generative AI with Diffusion Models',
        issuer: 'NVIDIA',
        Icon: SiNvidia,
        iconColor: 'text-green-500',
      },
      {
        name: 'Computer Vision for Industrial Inspection',
        issuer: 'NVIDIA',
        Icon: SiNvidia,
        iconColor: 'text-green-500',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=PV8c_jE3QomEE0TyJpgd5g',
      },
      {
        name: 'Predictive Maintenance',
        issuer: 'NVIDIA',
        Icon: SiNvidia,
        iconColor: 'text-green-500',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=38XtOjStR1qLXwTBdn0PuA',
      },
      {
        name: 'Anomaly Detection',
        issuer: 'NVIDIA',
        Icon: SiNvidia,
        iconColor: 'text-green-500',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=tsySqX7jSfWy5q22OMI6hw',
      },
      {
        name: 'Accelerating Data Engineering Pipelines',
        issuer: 'NVIDIA',
        Icon: SiNvidia,
        iconColor: 'text-green-500',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=o5JCS_LbT9ahWTcuP48UHQ',
      },
      {
        name: 'Fundamentals of Accelerated Data Science',
        issuer: 'NVIDIA',
        Icon: SiNvidia,
        iconColor: 'text-green-500',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=P7Hq1rEUS6OwvnVGGaNDow',
      },
    ],
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

        {certGroups.map((group) => (
          <div key={group.title} className="mb-10">
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              {group.title}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {group.certs.map((cert) => (
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
                    <div className="flex-grow">
                      <h4 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {cert.name}
                      </h4>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {cert.issuer}
                      </p>
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                          aria-label={`Verify ${cert.name} certificate (opens in new tab)`}
                        >
                          <HiExternalLink className="w-3.5 h-3.5" />
                          Verify
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
