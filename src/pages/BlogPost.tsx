import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ArrowLeft, Clock } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'
import CtaButtons from '../components/CtaButtons'

function renderMarkdown(content: string): string {
  return content
    .trim()
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-4 tracking-tight">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-gray-900 mt-6 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 text-gray-600 text-sm leading-relaxed"><span class="text-forest-500 mt-1 flex-shrink-0">•</span><span>$1</span></li>')
    .replace(/(<li.*<\/li>\n?)+/g, (match) => `<ul class="space-y-2 my-4">${match}</ul>`)
    .replace(/^(?!<[h|u|l])(.+)$/gm, (line) => line.trim() ? `<p class="text-gray-600 leading-relaxed mb-4">${line}</p>` : '')
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find(p => p.slug === slug)

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | HelgoIQ Blog`
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', post.metaDescription)
    }
    return () => {
      document.title = 'HelgoIQ — The Intelligent Platform for Modern Fitness Businesses'
    }
  }, [post])

  if (!post) return <Navigate to="/blog" replace />

  const currentIndex = blogPosts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-forest-600 text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-forest-300 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to blog
          </Link>
          <span className="section-label text-forest-300 mb-3 block">{post.category}</span>
          <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-forest-300">
            <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Lead */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium border-l-4 border-forest-500 pl-5" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem' }}>
            {post.excerpt}
          </p>

          {/* Content */}
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />
        </div>
      </article>

      {/* Post navigation */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 flex justify-between gap-6">
          {prevPost ? (
            <Link to={`/blog/${prevPost.slug}`} className="group flex-1 text-left">
              <span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">Previous</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-forest-600 transition-colors leading-snug">{prevPost.title}</span>
            </Link>
          ) : <div className="flex-1" />}
          {nextPost ? (
            <Link to={`/blog/${nextPost.slug}`} className="group flex-1 text-right">
              <span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">Next</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-forest-600 transition-colors leading-snug">{nextPost.title}</span>
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Ready to try HelgoIQ?</h2>
          <p className="text-forest-200 mb-6">Start your free trial today. No credit card required.</p>
          <CtaButtons variant="forest" className="justify-center" />
        </div>
      </section>
    </div>
  )
}
