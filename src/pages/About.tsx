import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const values = [
  {
    label: 'Intellectual rigour',
    description: 'The name earns its reference. Every feature is built with care, not assembled. We do not add features because competitors have them.',
  },
  {
    label: 'Calm',
    description: 'Complexity made clear. The platform does not shout. Good software should reduce anxiety, not create it.',
  },
  {
    label: 'Honesty',
    description: '"The connection isn\'t decorative." We say what we mean. No inflated claims, no hidden fees, no dark patterns.',
  },
  {
    label: 'Systems thinking',
    description: 'Every variable touches every other variable. We build for that — not isolated features, but a connected system.',
  },
]

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-forest-600 text-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-300 mb-4">About HelgoIQ</p>
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6 max-w-2xl">
            Named for an island.<br />Built for a complex system.
          </h1>
          <p className="text-forest-200 text-lg leading-relaxed max-w-xl">
            HelgoIQ is the intelligent platform for modern fitness businesses. This is where the name comes from, and why it matters.
          </p>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-6">The name</p>

            <p className="text-xl text-gray-800 leading-relaxed mb-6 font-medium" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem' }}>
              The platform is named after Helgoland, the small island in the North Sea.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              In June 1925, a 23-year-old Werner Heisenberg retreated there to escape a particularly bad attack of hay fever. While he was there, he worked out the matrix mathematics that became quantum mechanics — the foundational science that, over the next century, would make semiconductors, modern computing, and AI possible.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              We named the platform HelgoIQ because the connection isn't decorative. The AI tools at the heart of this platform exist because of the work that started on that island. And the principle that drew Heisenberg there — that complex systems can be understood through the right framework — is exactly what running a modern fitness business needs.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Studios and gyms operate as complex systems. Retention depends on scheduling depends on instructor performance depends on member communication. Every variable touches every other variable. The platforms that help you understand it should be built with intellectual rigour, not just decent UX.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              HelgoIQ brings those systems together into one calm, intelligent platform, helping studios and gyms turn operational complexity into clarity. Modern AI, applied with care, to a problem that deserves it.
            </p>

            {/* ℏ callout */}
            <div className="bg-forest-50 border-l-4 border-forest-500 rounded-r-xl p-6 my-10">
              <div className="flex items-start gap-4">
                <span className="text-5xl text-forest-500 leading-none" style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>ℏ</span>
                <div>
                  <p className="text-sm font-semibold text-forest-600 mb-1">The h-bar symbol</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The ℏ in our logo is the reduced Planck constant — h-bar — which appears in Heisenberg's uncertainty principle: ΔxΔp ≥ ℏ/2. It is the most recognisable symbol from the work that started on Helgoland. We use it as the opening character of our wordmark because it is both a stylised H and a precise scientific symbol. The connection is intentional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">What we stand for</p>
            <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">Brand values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map(v => (
              <div key={v.label} className="card p-7">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{v.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Source notes */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-4">Historical record</p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">The Helgoland breakthrough</h2>
          <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
            <p>
              Werner Heisenberg's breakthrough on Helgoland occurred in June 1925. He submitted his paper on matrix mechanics — "Über quantentheoretische Umdeutung kinematischer und mechanischer Beziehungen" — in July 1925. It was published in September 1925 and became one of the foundational papers of quantum mechanics.
            </p>
            <p>
              The ℏ symbol (h-bar, the reduced Planck constant) appears in Heisenberg's uncertainty principle: ΔxΔp ≥ ℏ/2. It is defined as h/2π, where h is Planck's constant.
            </p>
            <p>
              Helgoland is a small archipelago in the German Bight, North Sea, approximately 70km from the German mainland. It has a population of approximately 1,400 people.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Ready to try the platform?</h2>
          <p className="text-forest-200 mb-8">Start free. No credit card required.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/trial" className="btn-dark">
              Start free trial <ArrowRight size={15} />
            </Link>
            <Link to="/features" className="inline-flex items-center gap-2 border border-forest-400/50 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-forest-500/30 transition-all">
              Explore features
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
