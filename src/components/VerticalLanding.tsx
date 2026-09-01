import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import type { Vertical } from '../data/verticals'
import { VERTICALS } from '../data/verticals'
import { BOOK_DEMO_PATH } from '../lib/urls'
import VerticalCardImage from './VerticalCardImage'

type Props = { vertical: Vertical }

export default function VerticalLanding({ vertical }: Props) {
  const others = VERTICALS.filter(v => v.slug !== vertical.slug)

  return (
    <div>
      <section className="relative min-h-[70svh] flex items-end overflow-hidden text-white bg-forest-700">
        <div className="absolute inset-0 hero-atmosphere" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 pt-32 w-full grid lg:grid-cols-2 gap-10 items-end">
          <div className="max-w-2xl animate-fade-up">
            <p
              className="text-4xl sm:text-5xl font-medium mb-5"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
            >
              HelgoIQ
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
              {vertical.name}
            </h1>
            <p className="text-forest-100/90 text-lg leading-relaxed mb-8 max-w-xl">
              {vertical.pain}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/migrate" className="btn-dark text-base py-3 px-7">
                Bring my site <ArrowRight size={16} />
              </Link>
              <Link
                to={BOOK_DEMO_PATH}
                className="inline-flex items-center gap-2 border border-forest-400/50 text-white px-7 py-3 rounded-lg font-medium text-base hover:bg-forest-500/30 transition-all"
              >
                Book a demo
              </Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/15 shadow-xl aspect-[16/10] max-w-lg lg:ml-auto w-full">
            <VerticalCardImage label={vertical.imageLabel} imageSrc={vertical.imageSrc} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="section-label mb-3">What solves it</p>
            <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
              Three features that match the floor
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {vertical.features.map((f, i) => (
              <div key={f.title}>
                <div className="text-xs font-semibold tracking-widest text-forest-400 mb-3">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-mist">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-3">Proof</p>
          <p
            className="text-xl sm:text-2xl text-gray-800 leading-relaxed"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {vertical.proofPoint}
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Feature proof — outcome numbers publish as founding studios go live.
          </p>
        </div>
      </section>

      <section className="py-20 bg-forest-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Ready to bring your site across?
          </h2>
          <p className="text-forest-100/90 mb-8 leading-relaxed">
            Paste your current website. We import it, protect rankings for 30 days, and connect
            timetable, booking, and payments — with the team walking you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/migrate" className="btn-dark text-base py-3 px-8">
              Bring my site <ArrowRight size={16} />
            </Link>
            <Link
              to={BOOK_DEMO_PATH}
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-3 rounded-lg font-medium text-base hover:bg-white/10 transition-all"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-6">Also built for</p>
          <ul className="flex flex-wrap gap-3">
            {others.map(v => (
              <li key={v.slug}>
                <Link
                  to={v.path}
                  className="inline-flex items-center gap-2 text-sm font-medium text-forest-600 px-4 py-2 rounded-full border border-forest-100 hover:bg-forest-50 transition-colors"
                >
                  <Check size={14} className="text-forest-400" />
                  {v.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
