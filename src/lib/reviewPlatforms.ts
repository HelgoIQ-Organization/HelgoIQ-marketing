/** Review-platform URLs, Google listing helpers, and eligibility rules. */

export const MARKETING_ORIGIN = 'https://helgoiq.com'

/** Expected Trustpilot slug once the helgoiq.com domain is claimed. */
export const TRUSTPILOT_PROFILE_URL = 'https://uk.trustpilot.com/review/helgoiq.com'
export const TRUSTPILOT_CLAIM_URL = 'https://business.trustpilot.com/'

export const CAPTERRA_VENDORS_URL = 'https://www.capterra.com/vendors/'
export const CAPTERRA_GYM_CATEGORY_URL = 'https://www.capterra.co.uk/directory/33276/gym-management/software'
export const GETAPP_VENDORS_URL = 'https://www.getapp.com/vendors/'
export const SOFTWARE_ADVICE_VENDORS_URL = 'https://www.softwareadvice.com/vendors/'
export const G2_VENDORS_URL = 'https://sell.g2.com/'

export const GOOGLE_BUSINESS_CREATE_URL = 'https://business.google.com/create'
export const GOOGLE_BUSINESS_ELIGIBILITY_URL =
  'https://support.google.com/business/answer/13763036'

/** Optional Place ID — set VITE_GOOGLE_PLACE_ID after Google verifies the listing. */
export function googlePlaceIdFromEnv(
  env: Pick<ImportMetaEnv, 'VITE_GOOGLE_PLACE_ID'> | undefined = import.meta.env,
): string {
  return env?.VITE_GOOGLE_PLACE_ID?.trim() ?? ''
}

export function googleReviewWriteUrl(placeId: string | undefined): string | null {
  const id = placeId?.trim()
  if (!id) return null
  return `https://search.google.com/local/writereview?placeid=${encodeURIComponent(id)}`
}

export function googleMapsSearchUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export type GoogleProfileMode = 'ineligible_online_only' | 'service_area' | 'storefront'

/**
 * Google requires in-person customer contact during stated hours.
 * Online-only brands are explicitly ineligible.
 */
export function recommendGoogleProfileMode(opts: {
  customersVisitRegisteredOffice: boolean
  staffVisitCustomerSites: boolean
}): GoogleProfileMode {
  if (opts.customersVisitRegisteredOffice) return 'storefront'
  if (opts.staffVisitCustomerSites) return 'service_area'
  return 'ineligible_online_only'
}

export type PlatformId = 'google' | 'trustpilot' | 'capterra' | 'g2' | 'getapp'

export type PlatformSuitability = 'recommended' | 'conditional' | 'optional'

export type PlatformSetupStatus = 'ready_on_site' | 'owner_must_claim' | 'blocked_until_eligible'

/** Known facts for HelgoIQ today — update when the owner confirms on-site visits. */
export const HELGOIQ_GOOGLE_FACTS = {
  customersVisitRegisteredOffice: false,
  staffVisitCustomerSites: false,
} as const

export const REVIEW_PLATFORM_POLICY = {
  google: { suitability: 'conditional' as const, status: 'blocked_until_eligible' as const },
  trustpilot: { suitability: 'recommended' as const, status: 'owner_must_claim' as const },
  capterra: { suitability: 'recommended' as const, status: 'owner_must_claim' as const },
  g2: { suitability: 'recommended' as const, status: 'owner_must_claim' as const },
  getapp: { suitability: 'optional' as const, status: 'owner_must_claim' as const },
}
