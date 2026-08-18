# AGENTS.md

## Cursor Cloud specific instructions

This repo is the public marketing site for **helgoiq.com** (Vite + React Router, Cloudflare Pages).
It is not the HelgoIQ app (`helgoiq-platform`). Package manager is **pnpm**.

### Local

- `pnpm dev` serves the site on `http://localhost:4000/`
- `pnpm test` / `pnpm build` — standard commands live in `package.json`

### Publishing helgoiq.com (mandatory)

Merging or pushing to GitHub **does not** update the live website. Pages has no Git
auto-publish in this project. A 200 on a new path only means the SPA `index.html`
fallback ran — the **JS bundle** is what contains new routes and nav links.

After any change that should appear on helgoiq.com, follow
`.cursor/skills/deploy-helgoiq-com/SKILL.md`:

1. `pnpm test`
2. `pnpm deploy:production` (needs `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_PAGES_PROJECT`)
3. `pnpm deploy:verify` (optionally `-- --marker "unique string" --path /new-route`)

Do not call the work done until the live homepage bundle contains the new copy/route
and `https://helgoiq.com/sitemap.xml` lists new paths.

GitHub Actions (`.github/workflows/deploy-helgoiq-com.yml`) deploys on push to `main`
once those three Cloudflare values exist as **repository secrets**. Cloud agents
already have them as env vars and must still deploy themselves if CI is missing
or has not finished.
