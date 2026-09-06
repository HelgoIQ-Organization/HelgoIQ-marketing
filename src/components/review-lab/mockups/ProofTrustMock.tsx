import MockBadge from '../MockBadge'
import { FOUNDER_QUOTE, FOUNDING_STUDIOS, visibleMetrics } from '../../../data/foundingStudios'

export default function ProofTrustMock() {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-10">
      <MockBadge>Mock — real slots only · no invented stats</MockBadge>
      <p className="section-label mb-2">Founding studios</p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
        First businesses going live on HelgoIQ
      </h2>
      <p className="text-gray-600 mt-3 max-w-2xl leading-relaxed">
        Same honesty rule as the live site. Metric chips render only when filled. Review badges stay
        off until Capterra or Trustpilot exist. Do not borrow LegitFit’s 110% or Walla’s 800+.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-5">
        {FOUNDING_STUDIOS.map(studio => {
          const metrics = visibleMetrics(studio)
          return (
            <article key={studio.id} className="rounded-xl border border-gray-100 bg-mist/40 p-5">
              <h3 className="text-lg font-semibold text-gray-900">{studio.name}</h3>
              <p className="text-sm text-gray-600">{studio.subtitle}</p>
              {metrics.length === 0 && (
                <p className="mt-3 text-xs text-forest-700 border border-dashed border-forest-200 rounded-lg px-3 py-2">
                  Metric chips hidden until you supply real numbers.
                </p>
              )}
              {studio.featureClaims.map(claim => (
                <p key={claim} className="mt-3 text-sm text-gray-700">
                  {claim}
                </p>
              ))}
            </article>
          )
        })}
      </div>

      <blockquote
        className="mt-8 text-xl text-gray-800 leading-relaxed max-w-3xl"
        style={{ fontFamily: 'Cormorant Garamond, serif' }}
      >
        “{FOUNDER_QUOTE.text}”
        <footer className="mt-3 text-sm font-semibold text-forest-600 font-sans">
          {FOUNDER_QUOTE.attribution}
        </footer>
      </blockquote>

      <div
        className="mt-8 h-12 rounded-lg border border-dashed border-gray-200 flex items-center justify-center text-xs text-gray-400"
        aria-hidden
      >
        Review-badge slot — hidden until listings exist
      </div>
    </section>
  )
}