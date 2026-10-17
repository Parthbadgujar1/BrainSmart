# Content Guide — for the school's consultant

All wording, images and documents come from the school's private project consultant. This guide says exactly what to send and where it appears. Everything currently on the site is **placeholder text**.

## 1. What to send (checklist)

### Brand & school facts
- [ ] Logo — SVG or high-res PNG with transparent background; plus a one-colour version if available
- [ ] Brand colours (hex codes) and fonts, if any
- [ ] School name (exact), tagline, grades served
- [ ] Address, main phone, second phone/fax, general email, office & school hours
- [ ] Social media URLs (Facebook, Instagram, X, YouTube)
- [ ] URLs: student portal, family portal, payments, messaging app
- [ ] Email address to receive website form enquiries

### Pages (supply as Word / Google Doc, one heading per page)
- [ ] **Home**: welcome paragraph, 3–6 hero slides (headline, 1-sentence text, button label + page link, optional photo 1920×800)
- [ ] **About Us**: Vision, Mission, values · Community Partners · School Hours · School Profile · Accountability Report
- [ ] **Academics**: curriculum, programmes, enrichment
- [ ] **Parents** (≈ 18 pages): arrival/dismissal & car rider · Family Engagement Center · Volunteer · Cafeteria · Newsletter · Clinic · Guide to Learning (Literacy / Math / Tech) · Parent Resources · PBIS · Play 2 Learn · Records Requests · Registration & Withdrawal · The Plan & Promise · Title I · Title IX (+ coordinator name) · Supply Lists · Survey results
- [ ] **Students**: Digital Learning Day · Clubs (name, day/time)
- [ ] **Programs/Services**: Counseling · Library · Digital Library · Internet Safety
- [ ] **Legal**: Privacy Policy · Accessibility statement · Nondiscrimination Policy

### Data
- [ ] **Staff list**: first name, last name, job title, department, email (Excel/Sheet)
- [ ] **Calendar**: date, title, time, location (Excel/Sheet) for the school year
- [ ] **News**: 3–6 starter stories (title, date, 1–2 paragraphs, optional photo 800×500)

### Files
- [ ] PDFs: supply lists per grade, student/parent handbook, monthly menu, forms
- [ ] Photos: campus, classrooms, students *(photo-release permission required for identifiable children)*

## 2. Image specifications

| Use | Size | Format | Max weight |
|---|---|---|---|
| Hero slide | 1920 × 800 | JPG / WebP | 300 KB |
| News thumbnail | 800 × 500 | JPG / WebP | 120 KB |
| Logo | any (vector preferred) | SVG / PNG | 100 KB |

## 3. Where content lives in the code (for the developer)

| What | File |
|---|---|
| School name, address, hours, social, portals, hero slides, quick links | `src/data/site.js` |
| Menu structure | `src/data/nav.js` |
| Text of every inner page | `src/data/pages.js` |
| Calendar events | `src/data/events.js` |
| News stories | `src/data/news.js` |
| Staff directory | `src/data/staff.js` |
| Colours, spacing, fonts | top of `src/styles/index.css` (`:root`) |
| Images & PDFs | `public/images/`, `public/docs/` |

### Editing a page

Each page is an object with a title, intro and blocks:

```js
'/parents/pbis': page('PBIS', 'Positive Behavior Interventions and Supports.', [
  p('Body paragraph…'),
  h3('Our expectations'),
  ul('Be Respectful', 'Be Responsible', 'Be Safe'),
  note('Highlighted callout box'),
  links({ label: 'Contact us', to: '/contact' }),
]),
```

Available blocks: `h2`, `h3`, `p`, `ul`, `ol`, `note`, `links`, `hours`, `steps`, and `{ type: 'form', kind: 'admissions' }`.

### Adding a new page
1. Add the page to `src/data/pages.js` with its URL path as the key.
2. Add a link in `src/data/nav.js` (the sidebar, breadcrumb, site map and search update automatically).

### Linking a PDF
Place the file at `public/docs/supply-list-kindergarten.pdf`, then link `to: '/docs/supply-list-kindergarten.pdf'` (external `http…` links open in a new tab automatically).

## 4. Approval process

1. Consultant sends content batch via a shared folder (Google Drive / Dropbox).
2. Developer publishes it to the **preview URL** and notifies the consultant.
3. Consultant/client reply with **one consolidated list** of changes per review round (2 rounds included).
4. Final written sign-off ("approved to launch") triggers go-live and the final invoice.
