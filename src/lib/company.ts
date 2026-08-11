/** Registered company details (Companies House) */

export const COMPANY_LEGAL_NAME = 'HELGOIQ LIMITED'
export const COMPANY_DISPLAY_NAME = 'HelgoIQ Ltd'
/** Companies House number — https://find-and-update.company-information.service.gov.uk/company/17245104 */
export const COMPANY_NUMBER = '17245104'
export const COMPANY_NUMBER_URL =
  'https://find-and-update.company-information.service.gov.uk/company/17245104'

export const REGISTERED_OFFICE = {
  line1: 'Rooks Nest Farm',
  line2: 'Weston Road',
  city: 'Stevenage',
  county: 'Hertfordshire',
  postcode: 'SG1 4DE',
  country: 'United Kingdom',
}

export const REGISTERED_OFFICE_SINGLE_LINE = [
  REGISTERED_OFFICE.line1,
  REGISTERED_OFFICE.line2,
  REGISTERED_OFFICE.city,
  REGISTERED_OFFICE.county,
  REGISTERED_OFFICE.postcode,
].join(', ')

/** Public contact addresses — always @helgoiq.com (never legacy brand domains). */
export const CONTACT_EMAIL_ADDRESS = 'hello@helgoiq.com'
export const PRIVACY_EMAIL_ADDRESS = 'privacy@helgoiq.com'
export const LEGAL_EMAIL_ADDRESS = 'legal@helgoiq.com'
export const COMPLIANCE_EMAIL_ADDRESS = 'compliance@helgoiq.com'
