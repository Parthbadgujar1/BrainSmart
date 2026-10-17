// Generates public/sitemap.xml and the Sitemap line in robots.txt from the site data.
// Runs automatically before `npm run build` (see "prebuild" in package.json).
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { site } from '../src/data/site.js';
import { flattenNav, extraPages } from '../src/data/nav.js';
import { pages } from '../src/data/pages.js';
import { news } from '../src/data/news.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const base = `https://${site.domain}`;

const paths = new Set(['/', ...flattenNav().map((n) => n.to), ...extraPages.map((e) => e.to), ...Object.keys(pages), ...news.map((n) => `/news/${n.slug}`)]);
const today = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...paths].sort().map((p) => `  <url><loc>${base}${p === '/' ? '' : p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;

writeFileSync(join(root, 'sitemap.xml'), xml);
writeFileSync(join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`);
console.log(`sitemap.xml: ${paths.size} URLs for ${base}`);
