import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { DEMO_PATH, SIGN_IN_URL, SIGNUP_URL } from '../lib/cta'

const included = [
  'Full booking and scheduling system',
  'Member management and profiles',
  'Payments (Stripe + GoCardless)',
  'Sales pipeline and CRM',
  'Email and push notifications',
  'GDPR compliance tools',
  'No credit card required',
  'Cancel anytime',
]

export default function Trial() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-3">Free trial</p>
            <h1 className="text-4xl font-semibold text-gray-900 tracking-tight mb-4">
              Start free.<br />No card required.
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Get full access to the HelgoIQ Core platform from day one. No credit card, no setup fee, no commitment. When you are ready to grow, upgrade to Growth or Premium.
            </p>

            <div className="space-y-3 mb-8">
              {included.map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-forest-500" />
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-forest-50 border border-forest-100 rounded-xl p-5">
              <p className="text-sm text-forest-700 leading-relaxed italic" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}>
                Prefer a guided walkthrough first?{' '}
                <Link to={DEMO_PATH} className="font-medium not-italic underline decoration-forest-300 hover:decoration-forest-600">
                  Book a demo
                </Link>
                {' '}— 30 or 45 minutes with someone who knows boutique studio operations.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Create your account</h2>
            <p className="text-sm text-gray-500 mb-6">Start with the Core plan — free forever. Upgrade anytime.</p>

            <a
              href={SIGNUP_URL}
              className="btn-primary w-full justify-center text-base py-3 mb-4"
            >
              Create free account <ArrowRight size={16} />
            </a>

            <div className="relative flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-gray-400">or</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            <a
              href={SIGN_IN_URL}
              className="btn-secondary w-full justify-center text-base py-3"
            >
              Sign in to existing account
            </a>

            <p className="text-xs text-gray-400 text-center mt-5 leading-relaxed">
              By creating an account you agree to our{' '}
              <a href="/terms" className="text-forest-500 hover:underline">Terms of Service</a>{' '}
              and{' '}
              <a href="/privacy" className="text-forest-500 hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
