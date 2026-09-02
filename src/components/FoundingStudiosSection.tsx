import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {
  FOUNDER_QUOTE,
  FOUNDING_STUDIOS,
  SUPPORT_RESPONSE_HOURS,
  visibleMetrics,
} from '../data/foundingStudios'
import VerticalCardImage from './VerticalCardImage'

export default function FoundingStudiosSection() {
  return (
    <section id="founding-studios" className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="section-label mb-3">Founding studios</p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">
            First businesses going live on HelgoIQ
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Real numbers published as they land — no invented testimonials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {FOUNDING_STUDIOS.map(studio => {
            const metrics = visibleMetrics(studio)
            return (
              <article
                key={studio.id}
                className="rounded-2xl border border-gray-100 bg-mist/40 overflow-hidden shadow-sm"
              >
                <div className="aspect-[16/10]">
                  <VerticalCardImage label={studio.imageLabel} imageSrc={studio.imageSrc} />
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                    {studio.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{studio.subtitle}</p>

                  {metrics.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {metrics.map(m => (
                        <li
                          key={m.label}
                          className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-forest-100 text-forest-700"
                        >
                          <span className="font-semibold">{m.value}</span> {m.label}
                        </li>
                      ))}
                    </ul>
                  )}

                  {studio.featureClaims.length > 0 && (
                    <ul className="mt-4 space-y-1.5">
                      {studio.featureClaims.map(claim => (
                        <li key={claim} className="text-sm text-gray-700 leading-relaxed">
                          {claim}
                        </li>
                      ))}
                    </ul>
                  )}

                  {studio.secondaryQuote && (
                    <blockquote
                      className="mt-5 text-base text-gray-700 leading-relaxed"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      “{studio.secondaryQuote.text}”
                      <footer className="mt-2 text-xs font-semibold text-forest-600 not-italic font-sans">
                        {studio.secondaryQuote.attribution}
                      </footer>
                    </blockquote>
                  )}

                  <Link
                    to={studio.storyHref}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-forest-600 hover:gap-3 transition-all"
                  >
                    {studio.storyLabel} <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        <figure className="max-w-3xl mx-auto text-center border-t border-gray-100 pt-10">
          <blockquote
            className="text-xl sm:text-2xl text-gray-800 leading-relaxed"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            “{FOUNDER_QUOTE.text}”
          </blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-forest-600">
            {FOUNDER_QUOTE.attribution}
          </figcaption>
        </figure>

        {SUPPORT_RESPONSE_HOURS !== null && (
          <p className="mt-10 text-center text-sm text-gray-600">
            Support that answers within{' '}
            <span className="font-semibold text-forest-700">{SUPPORT_RESPONSE_HOURS}</span> hours.
          </p>
        )}
      </div>
    </section>
  )
}
