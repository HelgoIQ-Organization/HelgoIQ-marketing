/**
 * Edge routing for the production marketing host:
 * - 301 www.helgoiq.com → helgoiq.com (matches sitemap / canonical tags)
 * - Serve Meta App Review *.html at the exact path with 200 (no pretty-URL 308)
 * - Gated /review/* labs send X-Robots-Tag: noindex, nofollow
 */

import {
  apexCanonicalUrl,
  isReviewLabPath,
  rewriteMetaHtmlPath,
  withReviewLabHeaders,
} from './_lib/canonical'

type PagesContext = {
  request: Request
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>
}

export async function onRequest(context: PagesContext): Promise<Response> {
  const url = new URL(context.request.url)

  const canonical = apexCanonicalUrl(url)
  if (canonical) {
    return Response.redirect(canonical.toString(), 301)
  }

  const extensionless = rewriteMetaHtmlPath(url.pathname)
  if (extensionless) {
    const inner = new URL(url)
    inner.pathname = extensionless
    const assetRequest = new Request(inner.toString(), context.request)
    const upstream = await context.next(assetRequest)
    const headers = new Headers(upstream.headers)
    headers.delete('Location')
    return new Response(upstream.body, {
      status: upstream.ok ? 200 : upstream.status,
      headers,
    })
  }

  const upstream = await context.next()
  if (!isReviewLabPath(url.pathname)) return upstream
  return new Response(upstream.body, {
    status: upstream.status,
    headers: withReviewLabHeaders(upstream.headers),
  })
}
