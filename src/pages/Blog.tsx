import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

export default function Blog() {
  const [featured, ...rest] = blogPosts

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-forest-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-300 mb-4">HelgoIQ Blog</p>
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Insights for studio operators
          </h1>
          <p className="text-forest-200 text-lg max-w-xl leading-relaxed">
            Practical thinking on member retention, studio operations, AI, and building a fitness business that lasts.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Featured post */}
          <div className="mb-12">
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-8 bg-gray-50 rounded-2xl p-8 hover:bg-forest-50/50 transition-colors border border-gray-100"
            >
              <div>
                <span className="section-label mb-3 block">{featured.category}</span>
                <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-forest-600 transition-colors mb-3 leading-snug">
                  {featured.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>{new Date(featured.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <div className="w-full h-48 bg-forest-100 rounded-xl flex items-center justify-center">
                  <span className="text-4xl text-forest-300" style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>ℏ</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Post grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map(post => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group card p-6 hover:border-forest-200 transition-all"
              >
                <span className="section-label mb-2 block">{post.category}</span>
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-forest-600 transition-colors mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Ready to try HelgoIQ?</h2>
          <p className="text-gray-500 mb-6">Start your free trial today. No credit card required.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://app.helgoiq.com/signup" className="btn-primary">
              Start free trial <ArrowRight size={15} />
            </a>
            <Link to="/book-demo" className="btn-secondary">
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
