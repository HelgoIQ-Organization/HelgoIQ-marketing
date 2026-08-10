import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import CtaButtons from '../components/CtaButtons'
import { featurePages, getFeaturePage } from '../data/featurePages'

export default function FeatureDetail() {
  const { slug } = useParams<{ slug: string }>()
  const page = slug ? getFeaturePage(slug) : undefined

  if (!page) {
    return <Navigate to="/features" replace />
  }

  const Icon = page.icon
  const others = featurePages.filter(p => p.slug !== page.slug)

  return (
    <div className="pt-16">
      <section className="bg-forest-600 text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Icon size={20} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-forest-300">
              {page.label}
            </p>
          </div>
          <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">{page.headline}</h1>
          <p className="text-forest-200 text-lg leading-relaxed max-w-2xl mb-8">{page.support}</p>
          <CtaButtons variant="forest" size="sm" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-14">
          {page.sections.map(section => (
            <div key={section.title}>
              <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-3">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">{section.body}</p>
              <ul className="space-y-2.5">
                {section.bullets.map(b => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 size={15} className="text-forest-500 mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 bg-mist border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-4">More of the platform</p>
          <div className="flex flex-wrap gap-3">
            {others.map(p => (
              <Link
                key={p.slug}
                to={`/features/${p.slug}`}
                className="text-sm font-medium text-forest-700 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:border-forest-300 hover:bg-forest-50 transition-colors"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">See it with your studio in mind</h2>
          <p className="text-gray-600 mb-6">Start free, or book a walkthrough with our team.</p>
          <CtaButtons className="justify-center" />
          <div className="mt-6">
            <Link to="/features" className="text-sm text-forest-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
              Back to features hub <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
