import { HiArrowUp } from 'react-icons/hi'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface FooterProps {
  darkMode: boolean
}

function Footer({ darkMode }: FooterProps) {
  const prefersReducedMotion = useReducedMotion()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <footer className={`py-8 px-4 border-t ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
          &copy; {new Date().getFullYear()} Aaryan Sharma. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className={`flex items-center gap-2 text-sm transition-colors hover:text-primary ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
          aria-label="Scroll back to top"
        >
          <HiArrowUp className="w-4 h-4" />
          Back to top
        </button>
      </div>
    </footer>
  )
}

export default Footer
