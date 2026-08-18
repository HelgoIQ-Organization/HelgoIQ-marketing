---
name: deploy-helgoiq-com
description: Deploy the HelgoIQ marketing site to helgoiq.com via Cloudflare Pages and verify the live SPA bundle. Use whenever helgoiq-marketing pages, routes, nav, copy, assets, sitemap, or legal HTML change — and after any merge to main. Merging GitHub is not a publish.
---

# Deploy helgoiq.com after every marketing change

`helgoiq.com` is a **Cloudflare Pages SPA**. GitHub `main` is the source of truth for code. It is **not** the live website. There is no Git integration that publishes on merge. A merged PR with no Pages deploy leaves production on the previous bundle — new routes such as `/reviews` 200 the old `index.html` and React renders a blank main, and the header still omits the new link.

## When this is mandatory

Do this before calling any marketing-site change done, whenever any of these are true:

- The user wants the change on `helgoiq.com`
- The change is already on `main` (including a just-merged PR)
- You added or renamed a public route, nav item, or sitemap URL
- You changed copy, layout, or assets the public site should show

Use preview (`pnpm deploy:preview`) only when the user asked for a draft URL and not production. Do not stop at “PR merged” or “pushed to origin”.

## Required env

These are already injected on Cursor Cloud agents. Local/CI need the same values:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_PAGES_PROJECT`

If any are missing, say so and do not pretend the site updated.

## Procedure

1. Commit and push the marketing change. Do not deploy `node_modules` noise.
2. `pnpm test` then `pnpm deploy:production` from `helgoiq-marketing`.
   Production script builds, then `npx wrangler pages deploy dist --branch=main`.
3. Wait a few seconds, then `pnpm deploy:verify` (add `-- --marker "unique new string" --path /new-route` for the change you just shipped).
4. Confirm all three:
   - Live sitemap (`https://helgoiq.com/sitemap.xml`) lists every new path
   - Homepage JS bundle filename changed or contains the new marker (`/assets/index-*.js`)
   - Header/footer source contains the new nav label (this is a SPA — `curl` of `/reviews` always returns `index.html`)
5. Tell the user the live URL and that a hard refresh may be needed if they still see the previous header.

## Do not

- Treat GitHub Actions, `gh` checks, or a 200 on `/new-route` as proof the new React route exists
- Register or claim Google / Trustpilot / Capterra from this skill
- Deploy from a worktree that is missing the intended commits
- Print Cloudflare tokens or the raw Pages project name

## After merge (the `/reviews` failure mode)

1. `git fetch origin main` and confirm the merge commit is on `origin/main`.
2. List Pages deployments (`npx wrangler pages deployment list --project-name="$CLOUDFLARE_PAGES_PROJECT"`). If Production `Source` is an older SHA than `origin/main`, production is stale.
3. Deploy and verify as above.
