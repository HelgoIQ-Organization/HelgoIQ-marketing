export type SubProcessor = {
  name: string
  purpose: string
  location: string
  privacyUrl?: string
}

/**
 * Holding public sub-processor list for studio diligence.
 * Update when vendors are confirmed by counsel / ops.
 */
export const subProcessors: SubProcessor[] = [
  {
    name: 'Clerk',
    purpose: 'Authentication and user identity for the HelgoIQ app',
    location: 'United States / EU (as configured)',
    privacyUrl: 'https://clerk.com/legal/privacy',
  },
  {
    name: 'DigitalOcean',
    purpose: 'Application hosting and related infrastructure for the HelgoIQ platform',
    location: 'United Kingdom / EU (as configured)',
    privacyUrl: 'https://www.digitalocean.com/legal/privacy-policy',
  },
  {
    name: 'Cloudflare',
    purpose: 'CDN, DNS, WAF, and hosting for helgoiq.com marketing properties',
    location: 'Global edge network',
    privacyUrl: 'https://www.cloudflare.com/privacypolicy/',
  },
  {
    name: 'Stripe',
    purpose: 'Card payment processing and billing-related services',
    location: 'United States / EEA (as configured)',
    privacyUrl: 'https://stripe.com/privacy',
  },
  {
    name: 'GoCardless',
    purpose: 'Direct debit / open banking payment collection',
    location: 'United Kingdom / EEA',
    privacyUrl: 'https://gocardless.com/privacy/',
  },
  {
    name: 'Resend',
    purpose: 'Transactional email delivery (e.g. demo confirmations, product email)',
    location: 'United States',
    privacyUrl: 'https://resend.com/legal/privacy-policy',
  },
  {
    name: 'Sentry',
    purpose: 'Application error monitoring and performance diagnostics',
    location: 'EU (as configured) / United States',
    privacyUrl: 'https://sentry.io/privacy/',
  },
]

export const SUBPROCESSORS_UPDATED = '10 August 2026'
