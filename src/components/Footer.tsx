import { Link } from 'react-router-dom'

const APP_URL = 'https://app.helgoiq.com'

const footerLinks = {
  Product: [
    { label: 'Features', to: '/features' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Start free trial', to: '/trial' },
    { label: 'Sign in', href: `${APP_URL}/sign-in` },
  ],
  Platform: [
    { label: 'Booking & Scheduling', to: '/features#booking' },
    { label: 'Member Management', to: '/features#members' },
    { label: 'CRM & Sales Pipeline', to: '/features#crm' },
    { label: 'Marketing Automation', to: '/features#marketing' },
    { label: 'AI Intelligence', to: '/features#ai' },
    { label: 'Payments', to: '/features#payments' },
  ],
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', href: 'mailto:hello@helgoiq.com' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-forest-600 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-0 mb-4">
              <span className="text-2xl font-medium text-white leading-none" style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>
                ℏ
              </span>
              <span className="text-2xl font-medium text-white leading-none" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
                elgoIQ
              </span>
            </Link>
            <p className="text-forest-200 text-sm leading-relaxed max-w-xs">
              The intelligent platform for modern fitness businesses. Named for Helgoland — where quantum mechanics began.
            </p>
            <div className="mt-6">
              <Link
                to="/trial"
                className="inline-flex items-center gap-2 bg-white text-forest-600 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-cream transition-colors"
              >
                Start free trial
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-forest-300 mb-4">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    {'to' in link ? (
                      <Link
                        to={link.to!}
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

      {/* Bottom bar */}
      <div className="border-t border-forest-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-forest-300 text-xs">
            © {new Date().getFullYear()} HelgoIQ Ltd. All rights reserved.
          </p>
          <p className="text-forest-400 text-xs italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Named for Helgoland — where Heisenberg worked out quantum mechanics in 1925.
          </p>
        </div>
      </div>
    </footer>
  )
}
