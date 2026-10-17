# Sitemap & Scope — Reference vs. BrainSmart

Analysis of `https://centervillees.gcpsk12.org/` (a Finalsite-built elementary school site) and how each element is delivered for BrainSmart. The reference was reviewed for **structure only**; all branding and wording is BrainSmart's.

## Home page — section order

| # | Reference section | BrainSmart delivery | Status |
|---|---|---|---|
| 1 | Utility bar: Students & Families portal links, search, social icons | Same, plus Contact link | ✅ Built |
| 2 | Logo + school name + tagline | Same | ✅ Built |
| 3 | Main nav with dropdowns (3 levels) | Same, keyboard accessible, mobile accordion | ✅ Built |
| 4 | Hero slideshow with pause/play | Same, 4 slides, arrows, dots, respects reduced-motion | ✅ Built |
| 5 | 7 quick links | Same 7 (menu, registration, calendar, volunteer, directory, family center, supplies) | ✅ Built |
| 6 | Family Technology Resources banner | Same | ✅ Built |
| 7 | Portal tiles (payments / messaging / parent portal) | Same — URLs to be supplied | ⏳ Needs client URLs |
| 8 | News & Announcements (3 cards + View All) | Same | ✅ Built |
| 9 | Upcoming Events (date badges) + View Calendar | Same, auto-picks next events | ✅ Built |
| 10 | Footer: address, phones, social, links, legal notices, copyright | Same | ✅ Built |
| — | *(not in reference)* Welcome + three pillars | Added for a more modern first impression | ✨ Extra |

## Pages

| Section | Pages | Notes |
|---|---|---|
| **Calendar** | Calendar | Month / Week / Day + Print. Reference has the same toggle |
| **About Us** | About Us (Vision, Mission), Community Partners, Faculty & Staff (directory), School Hours, School Profile → Accountability Report | Reference's school profile points to an external dashboard; we host a profile page and report page |
| **Academics** | Academics | Single page, as in the reference |
| **Parents** | Parents landing (hours, car riders, reminders, check-out); Family Engagement Center → Welcome, Volunteer, Perception Results; Cafeteria; Newsletter; Clinic; Guide to Learning → Literacy, Math, Tech; Parent Resources; PBIS; Play 2 Learn; Records Requests; Registration & Withdrawal; The Plan & Promise; Title I; Title IX; School Supply Lists; Survey Results | All 20+ pages built. Registration page includes an admissions enquiry form |
| **Students** | Students; Digital Learning Day; Student Clubs | |
| **Programs/Services** | Programs/Services; Counseling; Library → Digital Library, Internet Safety | |
| **Footer / utility** | School Information, Site Map, Privacy, Accessibility, Nondiscrimination, News list & stories, Contact, Search | |

**Total:** 50 URLs (see `public/sitemap.xml` generated on build).

## Inner-page template (matches reference)

- Header, utility bar and main menu
- Breadcrumb ("Home › Parents › Math Mastery")
- Left **"In This Section"** sidebar showing sibling and child pages (collapses under content on mobile)
- Page title, intro, then rich content blocks
- Footer

## Deliberately different from the reference

| Reference feature | Why changed |
|---|---|
| Dropdown of ~150 district schools | BrainSmart is a single school |
| District Home link / district calendar | No district; replaced by Contact link |
| Weglot translation | Optional add-on (see proposal) |
| Finalsite CMS back-end | Our site is code-based; staff editing needs the optional CMS add-on |
| Power BI school profile | Replaced with an on-site profile page |
| ParentVUE / ParentSquare / MyPaymentsPlus | Generic portal tiles; client supplies the real tools & URLs |
| Some Gwinnett-specific pages (EES survey, Cognia notices) | Renamed/neutralised; add real accreditation text if applicable |

## Content that must come from the school (placeholder until then)

All page text, staff list, events calendar, news posts, supply-list PDFs, handbook PDFs, logo, photos, address/phone/email, portal URLs, policy texts (Privacy, Title I, Title IX, Nondiscrimination). See `06-content-guide.md`.
