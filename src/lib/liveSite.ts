/** Helpers for proving helgoiq.com actually serves a new SPA bundle. */

export const LIVE_ORIGIN = 'https://helgoiq.com'

export function extractSitemapLocs(sitemapXml: string): string[] {
  return [...sitemapXml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map(match => match[1].trim())
}

export function parseIndexBundlePath(html: string): string | null {
  const match = html.match(/\/assets\/index-[^"']+\.js/)
  return match?.[0] ?? null
}

export function missingSitemapLocs(expected: string[], live: string[]): string[] {
  const have = new Set(live)
  return expected.filter(url => !have.has(url))
}

export function missingBundleMarkers(bundle: string, markers: string[]): string[] {
  return markers.filter(marker => marker.length > 0 && !bundle.includes(marker))
}

export function liveUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const normalised = path.startsWith('/') ? path : `/${path}`
  return `${LIVE_ORIGIN}${normalised}`
}
