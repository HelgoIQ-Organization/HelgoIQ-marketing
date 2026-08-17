import { Link } from 'react-router-dom'
import { ArrowRight, Check, MapPin } from 'lucide-react'
import CtaButtons from '../components/CtaButtons'
import ReviewCard from '../components/ReviewCard'
import {
  featuredTestimonials,
  googleListingPack,
  reviewCollectionRules,
  reviewPlatforms,
  siblingMarketplaceLinks,
  studioReviews,
} from '../data/reviews'
import {
  COMPANY_LEGAL_NAME,
  COMPANY_NUMBER,
  COMPANY_NUMBER_URL,
  REGISTERED_OFFICE,
  REGISTERED_OFFICE_SINGLE_LINE,
} from '../lib/company'
import {
  HELGOIQ_GOOGLE_FACTS,
  googleMapsSearchUrl,
  googlePlaceIdFromEnv,
  googleReviewWriteUrl,
  recommendGoogleProfileMode,
} from '../lib/reviewPlatforms'

const suitabilityLabel: Record<string, string> = {
  recommended: 'Recommended',
  conditional: 'Conditional',
  optional: 'Optional',
}

const statusLabel: Record<string, string> = {
  ready_on_site: 'Ready on this site',
  owner_must_claim: 'Owner must claim',
  blocked_until_eligible: 'Eligibility first',
}

export default function Reviews() {
  const placeId = googlePlaceIdFromEnv()
  const writeReviewUrl = googleReviewWriteUrl(placeId)
  const mapsUrl = googleMapsSearchUrl(
    `${googleListingPack.businessName}, ${REGISTERED_OFFICE_SINGLE_LINE}`,
  )
  const googleMode = recommendGoogleProfileMode(HELGOIQ_GOOGLE_FACTS)
  const googleModeLabel =
    googleMode === 'ineligible_online_only'
      ? 'Not eligible yet (online-only until on-site studio visits are confirmed)'
      : googleMode === 'service_area'
        ? 'Service-area listing — hide the street address'
        : 'Storefront listing — only if customers visit the office'

  return (
    <div className="pt-16">
      <section className="bg-forest-600 text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-300 mb-3">
            The best
          </p>
          <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">
            What studio operators say
          </h1>
          <p className="text-forest-200 text-lg leading-relaxed">
            Social proof for HelgoIQ — the operating platform for bookings, memberships, CRM, and
            AI. Cards below use the same layout as a strong review grid. Live Google, Trustpilot,
            and Capterra quotes replace the samples once those profiles are verified.
          </p>
        </div>
      </section>

      <section className="relative py-20 bg-white overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(27,58,46,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,58,46,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-forest-200/50 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-sage/30 blur-3xl"
          aria-hidden
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-label mb-3">Testimonials</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">
              What our clients say
            </h2>
            <p className="text-sm text-gray-500 mt-3">
              Featured quotes stay marked as pending approved wording — the same honesty rule as
              the rest of this site.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {featuredTestimonials.map(item => (
              <figure
                key={item.id}
                className="break-inside-avoid mb-6 bg-white rounded-2xl border border-gray-100 shadow-md p-6"
              >
                <blockquote
                  className={`text-gray-800 leading-relaxed ${
                    item.featured ? 'font-semibold text-gray-900' : ''
                  }`}
                  style={
                    item.featured
                      ? undefined
                      : { fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem' }
                  }
                >
                  “{item.quote}”
                </blockquote>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <figcaption>
                    <div className="text-sm font-semibold text-gray-900">{item.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.handle}</div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-label mb-3">Studio reviews</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">
              Operator reviews
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              The kettlebell-app pattern — stars, a short title, and a “more” expand — mapped to
              HelgoIQ jobs: fill the room, convert the intro, recover payments, and keep AI behind
              an approval queue.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {studioReviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-3">Review platforms</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">
              Google, Trustpilot, Capterra — what to set up
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              This site can show the page and the listing pack. Google, Trustpilot, and Capterra
              each require the business owner to claim the profile. None of those accounts can be
              verified from a coding session.
            </p>
          </div>
          <div className="space-y-6">
            {reviewPlatforms.map(platform => (
              <article key={platform.id} className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 mr-2">{platform.name}</h3>
                  <span className="text-xs font-semibold uppercase tracking-widest text-forest-600 bg-forest-50 px-2.5 py-1 rounded-full">
                    {suitabilityLabel[platform.suitability]}
                  </span>
                  <span className="text-xs font-medium text-gray-600 bg-mist px-2.5 py-1 rounded-full">
                    {statusLabel[platform.status]}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900 mb-2">{platform.headline}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{platform.body}</p>
                <div className="grid md:grid-cols-2 gap-6 mb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 mb-2">
                      Why it fits
                    </p>
                    <ul className="space-y-2">
                      {platform.fit.map(item => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check size={15} className="text-forest-500 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                      Watch-outs
                    </p>
                    <ul className="space-y-2">
                      {platform.caution.map(item => (
                        <li key={item} className="text-sm text-gray-600 leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  <span className="font-semibold text-gray-900">Owner step: </span>
                  {platform.ownerAction}
                </p>
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-forest-600 hover:underline"
                >
                  {platform.hrefLabel} <ArrowRight size={14} />
                </a>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm">
            {siblingMarketplaceLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-forest-600 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="google-listing" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-3">Google Business Profile</p>
          <h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-4">
            Listing pack for HelgoIQ
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
            Ready to paste into{' '}
            <a
              href="https://business.google.com/create"
              target="_blank"
              rel="noreferrer"
              className="text-forest-600 hover:underline"
            >
              business.google.com/create
            </a>
            . Google must verify the owner. If HelgoIQ is purely remote (trial and demo only on
            video), skip Google reviews and use Trustpilot plus Capterra. If staff visit studios,
            create a service-area profile and hide the street address.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <dl className="space-y-4 text-sm">
              {(
                [
                  ['Business name', googleListingPack.businessName],
                  ['Legal entity', googleListingPack.legalName],
                  ['Company number', googleListingPack.companyNumber],
                  ['Primary category', googleListingPack.primaryCategory],
                  ['Website', googleListingPack.website],
                  ['Public email', googleListingPack.email],
                  ['Service area', googleListingPack.serviceArea],
                ] as const
              ).map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                    {label}
                  </dt>
                  <dd className="text-gray-900">{value}</dd>
                </div>
              ))}
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                  Recommended Google mode
                </dt>
                <dd className="text-gray-900">{googleModeLabel}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                  Phone
                </dt>
                <dd className="text-gray-600">
                  Not published on this site. Add the single authoritative HelgoIQ number before
                  submitting — Google rejects mismatched or personal numbers.
                </dd>
              </div>
            </dl>

            <div className="bg-mist rounded-2xl p-6">
              <div className="flex items-center gap-2 text-forest-600 mb-3">
                <MapPin size={18} />
                <h3 className="text-lg font-semibold text-gray-900">Registered office</h3>
              </div>
              <address className="not-italic text-sm text-gray-700 leading-relaxed">
                {REGISTERED_OFFICE.line1}
                <br />
                {REGISTERED_OFFICE.line2}
                <br />
                {REGISTERED_OFFICE.city}
                <br />
                {REGISTERED_OFFICE.county}
                <br />
                {REGISTERED_OFFICE.postcode}
                <br />
                {REGISTERED_OFFICE.country}
              </address>
              <p className="text-sm text-gray-600 leading-relaxed mt-4">
                {googleListingPack.publicAddressPolicy}
              </p>
              <p className="text-sm text-gray-500 mt-3">
                {COMPANY_LEGAL_NAME} · Company No.{' '}
                <a
                  href={COMPANY_NUMBER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-forest-600 hover:underline"
                >
                  {COMPANY_NUMBER}
                </a>
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-forest-600 hover:underline mt-4"
              >
                Search this address on Google Maps <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="mt-8 border border-gray-100 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Suggested description</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{googleListingPack.description}</p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            {writeReviewUrl ? (
              <a href={writeReviewUrl} target="_blank" rel="noreferrer" className="btn-primary">
                Write a Google review <ArrowRight size={15} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 border border-gray-200 text-gray-500 px-6 py-3 rounded-lg text-sm">
                Google “Write a review” unlocks after Place ID is set
              </span>
            )}
            <Link to="/features#reviews" className="btn-secondary">
              HelgoIQ for studio Google reviews
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-mist">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-3">How we collect reviews</p>
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-8">
            Honesty first — same as the brand values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviewCollectionRules.map(rule => (
              <div key={rule.title} className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{rule.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{rule.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Run the platform, then leave the review
          </h2>
          <p className="text-forest-200 mb-8 leading-relaxed">
            Start a trial or book a demo. When the studio is live, we will ask for a review on the
            platforms that actually fit — not a fake star count on this page.
          </p>
          <CtaButtons variant="forest" className="justify-center" />
        </div>
      </section>
    </div>
  )
}
