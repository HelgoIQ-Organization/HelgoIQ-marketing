const assets = [
  {
    name: 'Wordmark (forest)',
    desc: 'Full HelgoIQ logo — transparent PNG + SVG for light backgrounds',
    files: [
      { label: 'SVG', href: '/brand/helgoiq-wordmark.svg' },
      { label: 'PNG', href: '/brand/helgoiq-wordmark.png' },
    ],
  },
  {
    name: 'Wordmark (white)',
    desc: 'Full HelgoIQ logo — transparent white for dark backgrounds',
    files: [
      { label: 'SVG', href: '/brand/helgoiq-wordmark-white.svg' },
      { label: 'PNG', href: '/brand/helgoiq-wordmark-white.png' },
    ],
  },
  {
    name: 'Mark / favicon (forest)',
    desc: 'Italic h-bar mark alone — favicon and app icon source',
    files: [
      { label: 'SVG', href: '/brand/helgoiq-mark.svg' },
      { label: 'PNG 512', href: '/brand/helgoiq-mark.png' },
      { label: 'favicon.svg', href: '/brand/favicon.svg' },
      { label: 'favicon.png', href: '/brand/favicon.png' },
      { label: 'Apple touch', href: '/brand/apple-touch-icon.png' },
    ],
  },
  {
    name: 'Mark (white)',
    desc: 'White h-bar mark for dark backgrounds',
    files: [
      { label: 'SVG', href: '/brand/helgoiq-mark-white.svg' },
      { label: 'PNG', href: '/brand/helgoiq-mark-white.png' },
    ],
  },
]

export default function Brand() {
  return (
    <div className="pt-16">
      <section className="bg-forest-600 text-white py-14">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-300 mb-3">Brand</p>
          <h1 className="text-3xl font-semibold tracking-tight mb-3">HelgoIQ logo downloads</h1>
          <p className="text-forest-200">
            Vector SVG and transparent PNG exports from the site wordmark (Cormorant italic h-bar +
            Manrope “elgoIQ”).
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <div className="rounded-xl border border-gray-200 p-6 flex items-center justify-center bg-mist min-h-[120px]">
            <img src="/brand/helgoiq-wordmark.svg" alt="HelgoIQ wordmark" className="h-12 w-auto" />
          </div>
          <div className="rounded-xl border border-gray-200 p-6 flex items-center justify-center bg-forest-700 min-h-[120px]">
            <img
              src="/brand/helgoiq-wordmark-white.svg"
              alt="HelgoIQ wordmark white"
              className="h-12 w-auto"
            />
          </div>

          <a
            href="/brand/helgoiq-logo-pack.zip"
            className="btn-primary"
            download
          >
            Download full logo pack (.zip)
          </a>

          <div className="space-y-6 pt-4">
            {assets.map(group => (
              <div key={group.name} className="border-b border-gray-100 pb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-1">{group.name}</h2>
                <p className="text-sm text-gray-600 mb-3">{group.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {group.files.map(f => (
                    <a
                      key={f.href}
                      href={f.href}
                      download
                      className="text-sm font-medium text-forest-600 border border-forest-200 rounded-lg px-3 py-1.5 hover:bg-forest-50"
                    >
                      {f.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
