/** Canonical marketing CTAs — keep dual paths consistent across the site. */
export const APP_URL = 'https://app.helgoiq.com'
export const SIGNUP_URL = `${APP_URL}/signup`
export const SIGN_IN_URL = `${APP_URL}/sign-in`

/** Public Platform API for demo bookings (override via VITE_DEMO_BOOKING_API_URL). */
export const DEMO_BOOKING_API_URL =
  (import.meta.env.VITE_DEMO_BOOKING_API_URL as string | undefined)?.trim() ||
  'https://app.helgoiq.com/api/public/demo-bookings'

export const DEMO_PATH = '/book-demo'
