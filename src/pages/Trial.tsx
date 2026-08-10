import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { BOOK_DEMO_PATH, SIGN_IN_URL, TRIAL_SIGNUP_URL } from '../lib/urls'

const included = [
  'Full booking and scheduling system',
  'Member management and profiles',
  'Payments (Stripe + GoCardless)',
  'Sales pipeline and CRM',
  'Email and push notifications',
  'GDPR compliance tools',
  'Owner-bound studio setup wizard after signup',
  'No credit card required',
]

export default function Trial() {
  return (
    <div className="pt-16 min-h-screen bg-mist">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-3">Free trial</p>
            <h1 className="text-4xl font-semibold text-gray-900 tracking-tight mb-4">
              Start free.<br />No card required.
            </h1>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Create your HelgoIQ account and land in the setup wizard as the studio owner — brand,
              company, location, and trial subscription wired for you. Prefer a guided tour first?
              Book a demo instead.
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

            <p className="text-sm text-gray-500">
              Want a walkthrough before you commit?{' '}
              <Link to={BOOK_DEMO_PATH} className="text-forest-600 font-medium hover:underline">
                Book a demo
              </Link>
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Create your studio</h2>
            <p className="text-sm text-gray-500 mb-6">
              Continues to <span className="font-medium text-gray-700">app.helgoiq.com/signup</span>{' '}
              — the self-serve owner path (not a bare Clerk sign-up link).
            </p>

            <a
              href={TRIAL_SIGNUP_URL}
              className="btn-primary w-full justify-center text-base py-3 mb-4"
            >
              Start free trial <ArrowRight size={16} />
            </a>

            <div className="relative flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-gray-400">or</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            <a
              href={SIGN_IN_URL}
              className="btn-secondary w-full justify-center text-base py-3 mb-3"
            >
              Sign in to existing account
            </a>

            <Link
              to={BOOK_DEMO_PATH}
              className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium text-forest-600 hover:text-forest-700 py-2"
            >
              Book a demo instead
            </Link>

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
