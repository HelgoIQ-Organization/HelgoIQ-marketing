import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'helgoiq_cookie_prefs_v1'

type Prefs = {
  necessary: true
  analytics: boolean
  decidedAt: string
}

function readPrefs(): Prefs | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as Prefs
  } catch {
    return null
  }
}

function writePrefs(analytics: boolean) {
  const prefs: Prefs = {
    necessary: true,
    analytics,
    decidedAt: new Date().toISOString(),
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
  window.dispatchEvent(new CustomEvent('helgoiq:cookie-prefs', { detail: prefs }))
}

/**
 * Lightweight consent bar. Necessary cookies only by default.
 * Analytics remains off until accepted — wire trackers to the
 * `helgoiq:cookie-prefs` event when you add them.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const existing = readPrefs()
    if (!existing) setVisible(true)
  }, [])

  if (!visible) return null

  const decide = (analytics: boolean) => {
    writePrefs(analytics)
    setVisible(false)
  }

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[60] p-4 sm:p-6 pointer-events-none"
      role="dialog"
      aria-label="Cookie preferences"
    >
      <div className="pointer-events-auto max-w-3xl mx-auto bg-forest-800 text-white rounded-xl shadow-xl border border-forest-500/40 px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-sm leading-relaxed text-forest-50">
          We use necessary cookies to run helgoiq.com and the app sign-in flow. Optional analytics
          cookies stay off unless you accept them. See our{' '}
          <Link to="/privacy" className="underline underline-offset-2 hover:text-white">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:justify-end">
          <button
            type="button"
            onClick={() => decide(false)}
            className="inline-flex justify-center items-center px-4 py-2 rounded-lg text-sm font-medium border border-white/30 hover:bg-white/10 transition-colors"
          >
            Necessary only
          </button>
          <button
            type="button"
            onClick={() => decide(true)}
            className="inline-flex justify-center items-center px-4 py-2 rounded-lg text-sm font-medium bg-white text-forest-700 hover:bg-mist transition-colors"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  )
}
