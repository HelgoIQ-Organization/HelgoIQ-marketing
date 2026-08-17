import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  HELGOIQ_GOOGLE_FACTS,
  REVIEW_PLATFORM_POLICY,
  googleMapsSearchUrl,
  googlePlaceIdFromEnv,
  googleReviewWriteUrl,
  recommendGoogleProfileMode,
} from '../src/lib/reviewPlatforms.ts'

describe('googleReviewWriteUrl', () => {
  it('returns null without a Place ID', () => {
    assert.equal(googleReviewWriteUrl(''), null)
    assert.equal(googleReviewWriteUrl('   '), null)
    assert.equal(googleReviewWriteUrl(undefined), null)
  })

  it('builds the official write-review URL', () => {
    assert.equal(
      googleReviewWriteUrl('ChIJ-test-place'),
      'https://search.google.com/local/writereview?placeid=ChIJ-test-place',
    )
  })
})

describe('googlePlaceIdFromEnv', () => {
  it('reads a trimmed Place ID from Vite env', () => {
    assert.equal(googlePlaceIdFromEnv({ VITE_GOOGLE_PLACE_ID: '  abc  ' }), 'abc')
    assert.equal(googlePlaceIdFromEnv({}), '')
  })
})

describe('googleMapsSearchUrl', () => {
  it('encodes the registered-office query', () => {
    const url = googleMapsSearchUrl('HelgoIQ, Rooks Nest Farm, Stevenage')
    assert.equal(
      url,
      'https://www.google.com/maps/search/?api=1&query=HelgoIQ%2C%20Rooks%20Nest%20Farm%2C%20Stevenage',
    )
  })
})

describe('recommendGoogleProfileMode', () => {
  it('treats a purely online SaaS as ineligible', () => {
    assert.equal(
      recommendGoogleProfileMode({
        customersVisitRegisteredOffice: false,
        staffVisitCustomerSites: false,
      }),
      'ineligible_online_only',
    )
  })

  it('recommends a hidden-address service-area listing when staff visit studios', () => {
    assert.equal(
      recommendGoogleProfileMode({
        customersVisitRegisteredOffice: false,
        staffVisitCustomerSites: true,
      }),
      'service_area',
    )
  })

  it('recommends a storefront only when customers visit the office', () => {
    assert.equal(
      recommendGoogleProfileMode({
        customersVisitRegisteredOffice: true,
        staffVisitCustomerSites: false,
      }),
      'storefront',
    )
  })

  it('defaults HelgoIQ to ineligible until on-site contact is confirmed', () => {
    assert.equal(recommendGoogleProfileMode(HELGOIQ_GOOGLE_FACTS), 'ineligible_online_only')
    assert.equal(HELGOIQ_GOOGLE_FACTS.customersVisitRegisteredOffice, false)
  })
})

describe('review platform policy', () => {
  it('rates Capterra and Trustpilot as claimable, Google as eligibility-gated', () => {
    assert.equal(REVIEW_PLATFORM_POLICY.trustpilot.suitability, 'recommended')
    assert.equal(REVIEW_PLATFORM_POLICY.trustpilot.status, 'owner_must_claim')
    assert.equal(REVIEW_PLATFORM_POLICY.capterra.suitability, 'recommended')
    assert.equal(REVIEW_PLATFORM_POLICY.capterra.status, 'owner_must_claim')
    assert.equal(REVIEW_PLATFORM_POLICY.g2.suitability, 'recommended')
    assert.equal(REVIEW_PLATFORM_POLICY.google.suitability, 'conditional')
    assert.equal(REVIEW_PLATFORM_POLICY.google.status, 'blocked_until_eligible')
  })
})
