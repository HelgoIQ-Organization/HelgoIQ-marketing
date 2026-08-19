import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  LIVE_ORIGIN,
  extractSitemapLocs,
  liveUrl,
  missingBundleMarkers,
  missingSitemapLocs,
  parseIndexBundlePath,
} from '../src/lib/liveSite.ts'

describe('live site helpers', () => {
  it('extracts sitemap locs', () => {
    const xml = `<urlset><url><loc>https://helgoiq.com/</loc></url><url><loc>https://helgoiq.com/reviews</loc></url></urlset>`
    assert.deepEqual(extractSitemapLocs(xml), [
      'https://helgoiq.com/',
      'https://helgoiq.com/reviews',
    ])
  })

  it('parses the hashed SPA bundle path', () => {
    assert.equal(
      parseIndexBundlePath('<script src="/assets/index-Oa1bxqbA.js"></script>'),
      '/assets/index-Oa1bxqbA.js',
    )
    assert.equal(parseIndexBundlePath('<html></html>'), null)
  })

  it('reports sitemap and marker gaps', () => {
    assert.deepEqual(
      missingSitemapLocs(['https://helgoiq.com/reviews'], ['https://helgoiq.com/']),
      ['https://helgoiq.com/reviews'],
    )
    assert.deepEqual(missingBundleMarkers('label:"Reviews"', ['label:"Reviews"', 'missing']), [
      'missing',
    ])
  })

  it('builds live URLs', () => {
    assert.equal(liveUrl('/reviews'), `${LIVE_ORIGIN}/reviews`)
    assert.equal(liveUrl('reviews'), `${LIVE_ORIGIN}/reviews`)
    assert.equal(liveUrl('https://helgoiq.com/reviews'), 'https://helgoiq.com/reviews')
  })
})
