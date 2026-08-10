/**
 * Cloudflare Pages Function — proxy tRPC to the HelgoIQ Platform app origin.
 * Keeps browser calls same-origin so preview (*.pages.dev) works without CORS changes.
 */

const DEFAULT_ORIGIN = 'https://app.helgoiq.com'

type PagesContext = {
  request: Request
  params: { path?: string | string[] }
  env?: { VITE_APP_ORIGIN?: string; APP_ORIGIN?: string }
}

function targetOrigin(env?: PagesContext['env']): string {
  const fromEnv = env?.VITE_APP_ORIGIN || env?.APP_ORIGIN
  if (fromEnv && /^https?:\/\//.test(fromEnv)) return fromEnv.replace(/\/$/, '')
  return DEFAULT_ORIGIN
}

export async function onRequest(context: PagesContext): Promise<Response> {
  const { request, params, env } = context
  const pathParts = Array.isArray(params.path)
    ? params.path
    : params.path
      ? [params.path]
      : []
  const procedurePath = pathParts.join('/')
  if (!procedurePath) {
    return Response.json(
      { error: { json: { message: 'Missing tRPC procedure path', code: -32600 } } },
      { status: 400 },
    )
  }

  const incoming = new URL(request.url)
  const origin = targetOrigin(env)
  const targetUrl = `${origin}/api/trpc/${procedurePath}${incoming.search}`

  const headers = new Headers()
  const contentType = request.headers.get('Content-Type')
  const accept = request.headers.get('Accept')
  if (contentType) headers.set('Content-Type', contentType)
  if (accept) headers.set('Accept', accept)
  else headers.set('Accept', 'application/json')

  const init: RequestInit = {
    method: request.method,
    headers,
    redirect: 'follow',
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    init.body = await request.arrayBuffer()
  }

  try {
    const upstream = await fetch(targetUrl, init)
    const body = await upstream.arrayBuffer()
    const responseHeaders = new Headers()
    const upstreamType = upstream.headers.get('Content-Type')
    if (upstreamType) responseHeaders.set('Content-Type', upstreamType)
    responseHeaders.set('Cache-Control', 'no-store')
    return new Response(body, {
      status: upstream.status,
      headers: responseHeaders,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Upstream fetch failed'
    return Response.json(
      {
        error: {
          json: {
            message: `Unable to reach Platform API: ${message}`,
            code: -32000,
            data: { code: 'INTERNAL_SERVER_ERROR', httpStatus: 502 },
          },
        },
      },
      { status: 502 },
    )
  }
}
