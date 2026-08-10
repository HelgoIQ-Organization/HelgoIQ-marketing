import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { DEMO_PATH, SIGN_IN_URL, SIGNUP_URL } from '../lib/cta'

// Pages that have a dark hero — header starts transparent with white text
const DARK_HERO_PAGES = ['/']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const hasDarkHero = DARK_HERO_PAGES.includes(location.pathname)
  const isTransparent = hasDarkHero && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const navLinks = [
    { label: 'Features', to: '/features' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'About', to: '/about' },
    { label: 'Blog', to: '/blog' },
  ]

  const isActive = (to: string) => location.pathname === to

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
          : hasDarkHero
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link to="/" className="flex items-center gap-0 group">
            <span
              className={`text-2xl font-medium leading-none transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-forest-600'}`}
              style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
            >
              ℏ
            </span>
            <span
              className={`text-2xl font-medium leading-none transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-forest-600'}`}
              style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
            >
              elgoIQ
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  isActive(link.to)
                    ? isTransparent ? 'text-white bg-white/10' : 'text-forest-600 bg-forest-50'
                    : isTransparent ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-forest-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={SIGN_IN_URL}
              className={`text-sm font-medium transition-colors px-3 py-2 ${
                isTransparent ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-forest-600'
              }`}
            >
              Sign in
            </a>
            <Link
              to={DEMO_PATH}
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                isTransparent
                  ? 'text-white/90 hover:bg-white/10'
                  : 'text-forest-600 hover:bg-forest-50'
              }`}
            >
              Book a demo
            </Link>
            <a href={SIGNUP_URL} className="btn-primary text-sm py-2 px-5">
              Start free trial
            </a>
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isTransparent ? 'text-white hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-forest-600 bg-forest-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 mt-2 pt-3 flex flex-col gap-2">
              <a
                href={SIGN_IN_URL}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Sign in
              </a>
              <Link
                to={DEMO_PATH}
                className="btn-secondary justify-center"
              >
                Book a demo
              </Link>
              <a href={SIGNUP_URL} className="btn-primary justify-center">
                Start free trial
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
