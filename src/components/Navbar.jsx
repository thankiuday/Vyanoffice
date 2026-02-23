import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const PHONE = '+919845177702'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-black">
          <span className="text-primary-500">Vyan</span> Office Solution
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`font-medium transition-colors ${
                  location.pathname === to ? 'text-primary-600' : 'text-black hover:text-primary-600'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-primary-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-primary-500 transition-colors"
            >
              <Phone size={18} />
              Call Now
            </a>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-black hover:bg-primary-100"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <ul className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block py-2 font-medium ${
                      location.pathname === to ? 'text-primary-600' : 'text-black'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 bg-primary-400 text-black px-4 py-2 rounded-lg font-semibold"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
