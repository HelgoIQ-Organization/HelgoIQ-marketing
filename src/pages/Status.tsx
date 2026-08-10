import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Loader2, MinusCircle, XCircle } from 'lucide-react'
import { APP_ORIGIN } from '../lib/urls'

type CheckState = 'loading' | 'ok' | 'degraded' | 'down'

type ServiceCheck = {
  id: string
  name: string
  detail: string
  state: CheckState
  latencyMs?: number
}

async function probe(
  name: string,
  id: string,
  fn: () => Promise<{ ok: boolean; detail: string; degraded?: boolean }>,
): Promise<ServiceCheck> {
  const started = performance.now()
  try {
    const result = await fn()
    const latencyMs = Math.round(performance.now() - started)
    return {
      id,
      name,
      detail: result.detail,
      latencyMs,
      state: result.ok ? (result.degraded ? 'degraded' : 'ok') : 'down',
    }
  } catch (err) {
    return {
      id,
      name,
      detail: err instanceof Error ? err.message : 'Probe failed',
      latencyMs: Math.round(performance.now() - started),
      state: 'down',
    }
  }
}

function StatusIcon({ state }: { state: CheckState }) {
  if (state === 'loading') return <Loader2 className="animate-spin text-forest-500" size={20} />
  if (state === 'ok') return <CheckCircle2 className="text-forest-500" size={20} />
  if (state === 'degraded') return <MinusCircle className="text-amber-500" size={20} />
  return <XCircle className="text-red-500" size={20} />
}

export default function Status() {
  const [checks, setChecks] = useState<ServiceCheck[]>([
    { id: 'marketing', name: 'Marketing site', detail: 'Checking…', state: 'loading' },
    { id: 'app', name: 'HelgoIQ app', detail: 'Checking…', state: 'loading' },
    { id: 'demoApi', name: 'Demo booking API', detail: 'Checking…', state: 'loading' },
  ])
  const [checkedAt, setCheckedAt] = useState<string | null>(null)

  const run = async () => {
    setChecks(prev => prev.map(c => ({ ...c, state: 'loading', detail: 'Checking…' })))
    const results = await Promise.all([
      probe('Marketing site', 'marketing', async () => {
        const res = await fetch('/', { method: 'HEAD', cache: 'no-store' })
        return {
          ok: res.ok,
          detail: res.ok ? 'helgoiq.com Pages deployment responding' : `HTTP ${res.status}`,
        }
      }),
      probe('HelgoIQ app', 'app', async () => {
        const res = await fetch(APP_ORIGIN, { method: 'GET', mode: 'no-cors', cache: 'no-store' })
        // no-cors opaque response → treat reachability as ok if no throw
        return {
          ok: true,
          detail:
            res.type === 'opaque'
              ? `${APP_ORIGIN} reachable (opaque CORS response)`
              : `HTTP ${res.status}`,
          degraded: res.type === 'opaque',
        }
      }),
      probe('Demo booking API', 'demoApi', async () => {
        const input = encodeURIComponent(JSON.stringify({ json: { days: 3 } }))
        const res = await fetch(`/api/trpc/demoBooking.listSlots?input=${input}`, {
          headers: { Accept: 'application/json' },
          cache: 'no-store',
        })
        const body = await res.json().catch(() => null)
        const message = body?.error?.json?.message as string | undefined
        if (res.ok && !body?.error) {
          return { ok: true, detail: 'demoBooking.listSlots available' }
        }
        if (message?.includes('No procedure found') || message?.includes('NOT_FOUND')) {
          return {
            ok: true,
            degraded: true,
            detail:
              'Proxy reachable; demoBooking not deployed on app origin yet (Platform #899 pending prod)',
          }
        }
        return {
          ok: false,
          detail: message || `HTTP ${res.status}`,
        }
      }),
    ])
    setChecks(results)
    setCheckedAt(new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' }))
  }

  useEffect(() => {
    void run()
  }, [])

  const overall: CheckState = checks.some(c => c.state === 'loading')
    ? 'loading'
    : checks.some(c => c.state === 'down')
      ? 'down'
      : checks.some(c => c.state === 'degraded')
        ? 'degraded'
        : 'ok'

  const overallLabel =
    overall === 'loading'
      ? 'Checking systems…'
      : overall === 'ok'
        ? 'All systems operational'
        : overall === 'degraded'
          ? 'Partial degradation'
          : 'Incident detected'

  return (
    <div className="pt-16">
      <section className="bg-forest-600 text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-300 mb-3">
            Status
          </p>
          <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">
            HelgoIQ system status
          </h1>
          <p className="text-forest-200 text-lg leading-relaxed">
            Live checks from this browser against the marketing site, app origin, and demo booking
            API proxy.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <StatusIcon state={overall} />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{overallLabel}</h2>
              {checkedAt && (
                <p className="text-xs text-gray-500 mt-1">Last checked {checkedAt} (UK time)</p>
              )}
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {checks.map(check => (
              <li
                key={check.id}
                className="flex items-start gap-3 border border-gray-100 rounded-xl px-4 py-4"
              >
                <StatusIcon state={check.state} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-semibold text-gray-900">{check.name}</h3>
                    {check.latencyMs !== undefined && check.state !== 'loading' && (
                      <span className="text-xs text-gray-400">{check.latencyMs} ms</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{check.detail}</p>
                </div>
              </li>
            ))}
          </ul>

          <button type="button" onClick={() => void run()} className="btn-secondary">
            Re-run checks
          </button>

          <p className="text-sm text-gray-500 mt-8 leading-relaxed">
            This is an in-product status view for the marketing deployment — not a third-party
            status provider. For incidents affecting your studio, email{' '}
            <a href="mailto:hello@helgoiq.com" className="text-forest-600 hover:underline">
              hello@helgoiq.com
            </a>
            . Privacy / trust docs live in the{' '}
            <Link to="/trust" className="text-forest-600 hover:underline">
              Trust centre
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
