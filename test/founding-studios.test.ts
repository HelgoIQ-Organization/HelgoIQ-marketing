import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import {
  FOUNDER_QUOTE,
  FOUNDING_STUDIOS,
  REVIEW_BADGES_ENABLED,
  SUPPORT_RESPONSE_HOURS,
  visibleMetrics,
} from '../src/data/foundingStudios.ts'
import { VERTICALS, VERTICAL_PATHS } from '../src/data/verticals.ts'

const root = join(import.meta.dirname, '..')

function read(rel: string): string {
  return readFileSync(join(root, rel), 'utf8')
}

describe('founding studios honesty', () => {
  it('keeps metric and secondary-quote slots empty until real data lands', () => {
    for (const studio of FOUNDING_STUDIOS) {
      assert.equal(visibleMetrics(studio).length, 0)
      assert.equal(studio.secondaryQuote, null)
    }
    assert.equal(SUPPORT_RESPONSE_HOURS, null)
    assert.equal(REVIEW_BADGES_ENABLED, false)
  })

  it('uses Declan founder-story quote only', () => {
    assert.match(FOUNDER_QUOTE.text, /four Pilates studios and three 24\/7 gyms/i)
    assert.match(FOUNDER_QUOTE.attribution, /Declan Ryan/)
    assert.doesNotMatch(FOUNDER_QUOTE.attribution, /Emma|Ali|Becky/i)
  })

  it('homepage ships Founding studios and outcome hero, not invented proof numbers', () => {
    const home = read('src/pages/Home.tsx')
    assert.match(home, /Your studio online in days, not months/)
    assert.match(home, /Bring my site/)
    assert.match(home, /See it working/)
    assert.match(home, /FoundingStudiosSection/)
    assert.match(home, /Built for how your studio runs/)
    assert.doesNotMatch(home, /proofStudios/)
    assert.doesNotMatch(home, /Placeholder — pending approved wording/)
  })
})

describe('operator verticals', () => {
  it('exposes six Phase-5 landing paths', () => {
    assert.equal(VERTICALS.length, 6)
    assert.deepEqual(VERTICAL_PATHS, [
      '/for/pilates',
      '/for/unstaffed-gyms',
      '/for/multi-site',
      '/for/boutique-fitness',
      '/for/personal-trainers',
      '/for/wellness-recovery',
    ])
  })

  it('keeps 24/7 native door access as feature proof', () => {
    const gyms = VERTICALS.find(v => v.slug === 'unstaffed-gyms')
    assert.ok(gyms)
    assert.match(gyms!.proofPoint, /Native door access/i)
    assert.match(gyms!.proofPoint, /no third-party bolt-on/i)
  })

  it('registers /for/:slug and lists new paths in the sitemap', () => {
    const app = read('src/App.tsx')
    const sitemap = read('public/sitemap.xml')
    assert.match(app, /path="\/for\/:slug"/)
    for (const path of VERTICAL_PATHS) {
      assert.match(sitemap, new RegExp(`https://helgoiq\\.com${path.replace(/\//g, '\\/')}`))
    }
  })
})
