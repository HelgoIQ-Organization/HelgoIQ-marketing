/**
 * Prove the live Cloudflare Pages bundle matches this checkout.
 * Usage: node --experimental-strip-types scripts/verify-live-site.ts [--path /reviews] [--marker "text"]
 */
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import {
  LIVE_ORIGIN,
  extractSitemapLocs,
  liveUrl,
  missingBundleMarkers,
  missingSitemapLocs,
  parseIndexBundlePath,
} from '../src/lib/liveSite.ts'

function parseArgs(argv: string[]) {
  const paths: string[] = []
  const markers: string[] = []
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    const next = argv[i + 1]
    if (arg === '--path' && next) {
      paths.push(next)
      i += 1
    } else if (arg === '--marker' && next) {
      markers.push(next)
      i += 1
    }
  }
  return { paths, markers }
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url, { redirect: 'follow' })
  if (!response.ok) {
    throw new Error(`${url} returned ${response.status}`)
  }
  return response.text()
}

const { paths, markers } = parseArgs(process.argv.slice(2))
const localSitemap = await readFile(resolve(process.cwd(), 'public/sitemap.xml'), 'utf8')
const expectedLocs = extractSitemapLocs(localSitemap)
const liveSitemap = await fetchText(`${LIVE_ORIGIN}/sitemap.xml`)
const liveLocs = extractSitemapLocs(liveSitemap)
const missingLocs = missingSitemapLocs(expectedLocs, liveLocs)

if (missingLocs.length > 0) {
  console.error('Live sitemap is missing URLs from this checkout:')
  for (const url of missingLocs) console.error(`  ${url}`)
  process.exit(1)
}

const homeHtml = await fetchText(`${LIVE_ORIGIN}/`)
const bundlePath = parseIndexBundlePath(homeHtml)
if (!bundlePath) {
  console.error('Could not find /assets/index-*.js on the live homepage')
  process.exit(1)
}

const bundle = await fetchText(`${LIVE_ORIGIN}${bundlePath}`)
const requiredMarkers = markers.length > 0 ? markers : ['label:"Reviews"', 'What studio operators say']
const missingMarkers = missingBundleMarkers(bundle, requiredMarkers)
if (missingMarkers.length > 0) {
  console.error(`Live bundle ${bundlePath} is missing:`)
  for (const marker of missingMarkers) console.error(`  ${marker}`)
  process.exit(1)
}

for (const path of paths) {
  await fetchText(liveUrl(path))
}

console.log(`ok ${LIVE_ORIGIN} bundle=${bundlePath} sitemap=${liveLocs.length} markers=${requiredMarkers.length}`)
