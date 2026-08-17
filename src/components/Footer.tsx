import { Link } from 'react-router-dom'
import {
  COMPANY_DISPLAY_NAME,
  COMPANY_NUMBER,
  COMPANY_NUMBER_URL,
  REGISTERED_OFFICE_SINGLE_LINE,
} from '../lib/company'
import { BOOK_DEMO_PATH, SIGN_IN_URL, TRIAL_SIGNUP_URL } from '../lib/urls'

type FooterLink = { label: string; to?: string; href?: string }

const footerLinks: Record<string, FooterLink[]> = {
  Product: [
    { label: 'Features', to: '/features' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'For Pilates studios', to: '/for/pilates' },
    { label: 'Switch / migrate', to: '/migrate' },
    { label: 'Start free trial', href: TRIAL_SIGNUP_URL },
    { label: 'Book a demo', to: BOOK_DEMO_PATH },
    { label: 'Sign in', href: SIGN_IN_URL },
  ],
  Platform: [
    { label: 'Booking & Scheduling', to: '/features/booking' },
    { label: 'Memberships & Payments', to: '/features/memberships' },
    { label: 'CRM & Marketing', to: '/features/crm' },
    { label: 'AI Command Centre', to: '/features/ai' },
    { label: 'Websites & Migration', to: '/features/websites' },
    { label: 'Team & Ops', to: '/features/team' },
  ],
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Reviews', to: '/reviews' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
    { label: 'Trust centre', to: '/trust' },
    { label: 'Brand assets', to: '/brand' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Website Terms', to: '/terms' },
    { label: 'SMS policy', to: '/sms-consent' },
    { label: 'Meta data deletion', to: '/data-deletion' },
    { label: 'Platform Privacy', to: '/platform-privacy' },
    { label: 'Platform Terms', to: '/platform-terms' },
    { label: 'DPA', to: '/dpa' },
    { label: 'DPIA overview', to: '/dpia' },
    { label: 'Sub-processors', to: '/subprocessors' },
    { label: 'Status', to: '/status' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-forest-600 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-0 mb-4" aria-label="HelgoIQ home">
              <span
                className="text-2xl font-medium text-white leading-none"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
              >
                ℏ
              </span>
              <span
                className="text-2xl font-medium text-white leading-none"
                style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.02em' }}
              >
                elgoIQ
              </span>
            </Link>
            <p className="text-forest-200 text-sm leading-relaxed max-w-xs">
              The intelligent operating platform for modern fitness studios. Named for Helgoland —
              where quantum mechanics began.
            </p>
            <div className="mt-5 text-xs text-forest-300 leading-relaxed space-y-1 max-w-sm">
              <p className="font-medium text-forest-100">{COMPANY_DISPLAY_NAME}</p>
              <p>
                Company No.{' '}
                <a
                  href={COMPANY_NUMBER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white underline-offset-2 hover:underline"
                >
                  {COMPANY_NUMBER}
                </a>
              </p>
              <p>{REGISTERED_OFFICE_SINGLE_LINE}</p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={TRIAL_SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 bg-white text-forest-600 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-mist transition-colors"
              >
                Start free trial
              </a>
              <Link
                to={BOOK_DEMO_PATH}
                className="inline-flex items-center justify-center gap-2 border border-forest-400/50 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-forest-500/40 transition-colors"
              >
                Book a demo
              </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-forest-300 mb-4">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="text-sm text-forest-200 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-forest-200 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-forest-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-forest-300 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {COMPANY_DISPLAY_NAME}. Company No. {COMPANY_NUMBER}.
            Registered in England and Wales.
          </p>
          <p
            className="text-forest-400 text-xs italic text-center sm:text-right"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Named for Helgoland — where Heisenberg worked out quantum mechanics in 1925.
          </p>
        </div>
      </div>
    </footer>
  )
}
