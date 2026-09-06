import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { describe, it } from 'node:test'
import { extractSitemapLocs } from '../src/lib/liveSite.ts'
import { REVIEW_LAB_MARKER, REVIEW_LAB_PATH } from '../src/lib/reviewLab.ts'

describe('competitive review lab gate', () => {
  it('is not listed in the public sitemap', async () => {
    const xml = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8')
    const locs = extractSitemapLocs(xml)
    assert.equal(
      locs.some(loc => loc.includes('/review/')),
      false,
    )
    assert.equal(
      locs.includes('https://helgoiq.com/review/competitive-lab'),
      false,
    )
  })

  it('is disallowed in robots.txt', async () => {
    const robots = await readFile(new URL('../public/robots.txt', import.meta.url), 'utf8')
    assert.match(robots, /Disallow:\s*\/review\//)
  })

  it('is not linked from public header or footer nav', async () => {
    const header = await readFile(new URL('../src/components/Header.tsx', import.meta.url), 'utf8')
    const footer = await readFile(new URL('../src/components/Footer.tsx', import.meta.url), 'utf8')
    assert.equal(header.includes(REVIEW_LAB_PATH), false)
    assert.equal(footer.includes(REVIEW_LAB_PATH), false)
    assert.equal(header.includes('Competitive'), false)
  })

  it('keeps the public header labels unchanged', async () => {
    const header = await readFile(new URL('../src/components/Header.tsx', import.meta.url), 'utf8')
    for (const label of [
      'Features',
      'Pricing',
      'For studios',
      'Bring my site',
      'About',
      'Reviews',
      'Blog',
      'Book a demo',
      'Start free trial',
    ]) {
      assert.equal(header.includes(label), true, label)
    }
  })

  it('exposes the deploy verify marker on the lab page', async () => {
    const lab = await readFile(
      new URL('../src/components/review-lab/LabBanner.tsx', import.meta.url),
      'utf8',
    )
    assert.equal(lab.includes('REVIEW_LAB_MARKER'), true)
    assert.equal(REVIEW_LAB_MARKER, 'Internal review lab — not indexed')
    assert.equal(REVIEW_LAB_PATH, '/review/competitive-lab')
  })
})
