# Deployment Guide — Vercel

The project is a Vite + React single-page app. `vercel.json` already contains the build settings, SPA rewrites (so `/parents/pbis` works on refresh) and cache/security headers.

## Option A — Deploy from Git (recommended)

1. **Create a Git repository** and push this folder to GitHub / GitLab / Bitbucket.
   ```bash
   git init
   git add .
   git commit -m "BrainSmart School website"
   git branch -M main
   git remote add origin https://github.com/<you>/brainsmart-school.git
   git push -u origin main
   ```
2. Go to **vercel.com → Add New → Project** and import the repository.
3. Vercel auto-detects **Vite**. Confirm:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. (Optional) Add environment variable **`VITE_FORM_ENDPOINT`** = your Formspree URL (see below).
5. Click **Deploy**. You get a preview URL like `brainsmart-school.vercel.app` — share this with the client for review.
6. Every push to `main` redeploys production; every other branch/PR gets its own preview URL.

## Option B — Deploy with the Vercel CLI

```bash
npm i -g vercel
vercel          # first run: log in, link project, deploy a preview
vercel --prod   # deploy to production
```

## Connect the domain

1. Vercel → Project → **Settings → Domains → Add** `www.brainsmartschool.org` (and the apex `brainsmartschool.org`).
2. Add the DNS records Vercel shows at the registrar (see `04-domain-hosting.md`).
3. Set `www` as primary; apex redirects to it. Wait for the green "Valid configuration" tick — HTTPS is automatic.
4. Update `site.domain` / `site.emailDomain` in `src/data/site.js` to the real domain, then redeploy (this also regenerates `sitemap.xml` and `robots.txt`).

## Contact / admissions forms

The forms need somewhere to send messages:

1. Create a free form at **formspree.io** (or Getform / Basin) pointing at the school's inbox.
2. Copy the endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. In Vercel → Settings → **Environment Variables** add `VITE_FORM_ENDPOINT` for *Production* and *Preview*, then **redeploy** (Vite bakes env vars in at build time).

Without the variable the forms fall back to opening the visitor's email app (mailto), so nothing breaks — but a real endpoint is strongly recommended.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into /dist (also regenerates sitemap.xml)
npm run preview    # serve the production build locally
```
Requires Node.js 18+.

## Pre-launch checklist

- [ ] Real logo in `public/logo.svg` + `public/favicon.svg`; brand colours in `:root` of `src/styles/index.css`
- [ ] `src/data/site.js`: name, tagline, address, phones, email, hours, social links, portal URLs, domain
- [ ] Page text replaced from the consultant's content (`src/data/pages.js`)
- [ ] Staff list (`staff.js`), events (`events.js`), news (`news.js`) replaced — sample data removed
- [ ] Hero slide images added (optional) and alt/contrast checked
- [ ] PDFs (supply lists, handbook, menu) placed in `public/docs/` and linked
- [ ] Privacy, Title I/IX, Nondiscrimination text approved by the school
- [ ] `VITE_FORM_ENDPOINT` set and a test submission received
- [ ] Domain connected, HTTPS valid, `www` primary
- [ ] Tested on iPhone/Android, Chrome, Safari, Firefox, Edge
- [ ] Submit `https://www.<domain>/sitemap.xml` to Google Search Console

## Troubleshooting

| Problem | Fix |
|---|---|
| 404 when refreshing an inner page | Ensure `vercel.json` rewrites are deployed (they are included) |
| Forms don't send | `VITE_FORM_ENDPOINT` missing or not redeployed after setting it |
| Old content after update | Hard refresh; confirm the latest deployment is "Production" in Vercel |
| Build fails on Vercel | Check Node version (Settings → General → Node.js Version 18/20/22) and read the build log |
