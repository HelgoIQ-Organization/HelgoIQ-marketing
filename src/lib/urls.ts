/** Canonical app + marketing funnel URLs */

export const APP_ORIGIN = import.meta.env.VITE_APP_ORIGIN || 'https://app.helgoiq.com'

/** Self-serve trial — owner-binding signup (Platform #899). Do not use bare /sign-up. */
export const TRIAL_SIGNUP_URL = `${APP_ORIGIN}/signup`

export const SIGN_IN_URL = `${APP_ORIGIN}/sign-in`

/** In-app demo booking page on this marketing site */
export const BOOK_DEMO_PATH = '/book-demo'

export const CONTACT_EMAIL = 'mailto:hello@helgoiq.com'
