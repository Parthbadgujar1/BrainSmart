# Domain & Hosting

## 1. The `.edu` problem (tell the client early)

The client asked for `https://www.brainsmartschool.edu`. **A new K-12 school generally cannot register a `.edu` domain.** `.edu` is a sponsored top-level domain administered by EDUCAUSE and restricted to US post-secondary institutions that are accredited by an agency recognised by the US Department of Education. Elementary / K-12 schools do not qualify, so no registrar can sell it to them regardless of budget.

> Verify current eligibility at the EDUCAUSE `.edu` registry (net.educause.edu/edudomain) before sending, in case the client's circumstances differ (e.g. they are part of an accredited college).

### Recommended alternatives

| Option | Why | Approx. cost / yr* |
|---|---|---|
| **brainsmartschool.org** ⭐ | Trusted, standard for schools & non-profits; no eligibility rules | $10 – 20 |
| brainsmartschool.school | Descriptive and modern | $25 – 40 |
| brainsmartschool.com | Most familiar to the public | $12 – 20 |
| brainsmart.org / .school | Shorter if available | varies |

*Prices vary by registrar and change annually — check at registration. The estimate uses **$20** for budgeting.

**Tip:** also register the `.com` (≈ $15/yr) if budget allows, to prevent look-alike sites; it can redirect to the main domain.

## 2. Who owns the domain

Register the domain **in the school's name** (client as Registrant, with their email as the admin contact). The developer may manage DNS during the project using a delegated login. This avoids lock-in and keeps ownership clear. Use a registrar with free WHOIS privacy and 2-factor auth (e.g. Cloudflare Registrar, Namecheap, Porkbun, Google-successor registrars).

## 3. Hosting — Vercel

The site is a static React build, so it is served from **Vercel's global CDN**: fast anywhere, free managed SSL (HTTPS), automatic deploys from Git, instant rollbacks, and preview links for review.

| Plan | Use |
|---|---|
| **Hobby (free)** | Fine for building and sharing the **preview**. Vercel's terms limit Hobby to personal, **non-commercial** use, so do not rely on it for the school's live site. |
| **Pro (~$20 / month per member)** | **Recommended for production**: commercial use permitted, higher limits, analytics, support. Budgeted at $240 for the year. |

> Confirm current Vercel pricing and terms at vercel.com/pricing and vercel.com/legal/terms before invoicing.

**Alternatives** if the client wants lower recurring cost: Netlify, Cloudflare Pages (both have generous free tiers that allow commercial use). The code is host-agnostic; only `vercel.json` is Vercel-specific.

## 4. DNS setup (summary)

After adding the domain in Vercel (Project → Settings → Domains):

| Type | Name | Value |
|---|---|---|
| A | `@` (apex) | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Values shown here are Vercel's standard records; **always use the exact values Vercel displays** for the project, since they can change. Set `www.brainsmartschool.org` as the primary domain and let the apex redirect to it. SSL is issued automatically within minutes of DNS propagation (up to 24–48 hours).

## 5. Email (optional)

Hosting the website does **not** include mailboxes. For addresses like `office@brainsmartschool.org`:

- **Google Workspace** (≈ $6/user/month; education/non-profit discounts may apply) or **Microsoft 365**.
- Add the provider's MX/SPF/DKIM records at the registrar — do not change them when moving the website.
- The website's contact form sends to an inbox of the client's choice (`VITE_FORM_ENDPOINT`, see deployment guide).

## 6. Annual cost summary

| Item | Year 1 | Year 2+ |
|---|---:|---:|
| Domain (.org) | ~$20 | ~$15 – 20 |
| Hosting (Vercel Pro) | $240 | $240 |
| Email (optional, per user) | ~$72 | ~$72 |
