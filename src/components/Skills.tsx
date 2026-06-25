import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface SkillsProps {
  darkMode: boolean
}

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'C/C++', 'R', 'MATLAB'],
    color: 'from-primary to-emerald-400',
  },
  {
    title: 'Frameworks & Web',
    skills: ['Spring MVC', 'JSP', 'REST APIs', 'SQL', 'React'],
    color: 'from-accent to-blue-400',
  },
  {
    title: 'Data & AI',
    skills: ['NVIDIA cuDF/cuML', 'Machine Learning', 'Deep Learning', 'Data Pipelines', 'Computer Vision'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git/GitHub', 'Docker', 'Maven', 'Linux', 'Slurm HPC'],
    color: 'from-orange-500 to-yellow-500',
  },
]

function Skills({ darkMode }: SkillsProps) {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
    },
  }

  const cardVariants = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: 30 },
    visible: prefersReducedMotion ? {} : { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section id="skills" className="py-20 px-4" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          id="skills-heading"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={prefersReducedMotion ? {} : { scale: 1.02, transition: { duration: 0.2 } }}
              className={`glass-card p-6 group cursor-default ${darkMode ? '' : 'bg-gray-50 border-gray-200'}`}
            >
              <h3 className={`text-lg font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm rounded-full transition-all duration-300 ${
                      darkMode
                        ? 'bg-white/5 text-gray-300 border border-white/10 hover:border-primary/50 hover:text-primary hover:bg-primary/5'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-primary/50 hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
