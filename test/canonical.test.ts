import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  APEX_HOST,
  apexCanonicalUrl,
  rewriteMetaHtmlPath,
  WWW_HOST,
} from '../functions/_lib/canonical.ts'

describe('rewriteMetaHtmlPath', () => {
  it('maps Meta App Review HTML twins to extensionless asset paths', () => {
    assert.equal(rewriteMetaHtmlPath('/privacy.html'), '/privacy')
    assert.equal(rewriteMetaHtmlPath('/terms.html'), '/terms')
    assert.equal(rewriteMetaHtmlPath('/data-deletion.html'), '/data-deletion')
    assert.equal(rewriteMetaHtmlPath('/sms-consent.html'), '/sms-consent')
  })

  it('leaves SPA and other paths unchanged', () => {
    assert.equal(rewriteMetaHtmlPath('/privacy'), null)
    assert.equal(rewriteMetaHtmlPath('/pricing'), null)
    assert.equal(rewriteMetaHtmlPath('/index.html'), null)
  })
})

describe('apexCanonicalUrl', () => {
  it('rewrites www to the apex host and keeps path and query', () => {
    const next = apexCanonicalUrl(
      new URL('https://www.helgoiq.com/privacy.html?ref=meta'),
    )
    assert.ok(next)
    assert.equal(next.hostname, APEX_HOST)
    assert.equal(next.pathname, '/privacy.html')
    assert.equal(next.search, '?ref=meta')
    assert.equal(next.protocol, 'https:')
  })

  it('does not rewrite apex, pages.dev, or app hosts', () => {
    assert.equal(apexCanonicalUrl(new URL(`https://${APEX_HOST}/`)), null)
    assert.equal(apexCanonicalUrl(new URL(`https://${WWW_HOST.replace('www.', 'preview.')}/`)), null)
    assert.equal(apexCanonicalUrl(new URL('https://app.helgoiq.com/')), null)
    assert.equal(
      apexCanonicalUrl(new URL('https://example.pages.dev/privacy.html')),
      null,
    )
  })
})
