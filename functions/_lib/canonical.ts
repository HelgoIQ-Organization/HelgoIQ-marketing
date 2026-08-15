/** Apex host used in canonical tags, sitemap, and Meta App Review URLs. */
export const APEX_HOST = 'helgoiq.com'
export const WWW_HOST = 'www.helgoiq.com'

/** Static Meta App Review twins in /public. Pages pretty-URLs otherwise 308 these to the extensionless path. */
export const META_HTML_PATHS = [
  '/privacy.html',
  '/terms.html',
  '/data-deletion.html',
  '/sms-consent.html',
] as const

const META_HTML = new Set<string>(META_HTML_PATHS)

export function rewriteMetaHtmlPath(pathname: string): string | null {
  if (!META_HTML.has(pathname)) return null
  return pathname.slice(0, -'.html'.length)
}

/** Return the apex URL when the request is on www; otherwise null. */
export function apexCanonicalUrl(url: URL): URL | null {
  if (url.hostname !== WWW_HOST) return null
  const next = new URL(url.toString())
  next.hostname = APEX_HOST
  next.protocol = 'https:'
  next.port = ''
  return next
}
