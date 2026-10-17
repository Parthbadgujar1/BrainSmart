import { pages } from '../data/pages.js';
import { news } from '../data/news.js';
import { staff } from '../data/staff.js';

// Builds a small in-memory index over all page text, news and staff so the site search works without a backend.
const textOf = (page) =>
  [page.title, page.intro, ...page.blocks.flatMap((b) => [b.text, ...(b.items || []).map((i) => (typeof i === 'string' ? i : `${i.label || i.title || ''} ${i.text || ''}`))])]
    .filter(Boolean)
    .join(' ');

const index = [
  ...Object.entries(pages).map(([to, page]) => ({ to, title: page.title, kind: 'Page', text: textOf(page) })),
  ...news.map((n) => ({ to: `/news/${n.slug}`, title: n.title, kind: 'News', text: `${n.title} ${n.teaser} ${n.body.join(' ')}` })),
  ...staff.map((s) => ({ to: '/directory', title: `${s.first} ${s.last}`, kind: 'Staff', text: `${s.first} ${s.last} ${s.title} ${s.dept}` })),
];

export function searchSite(query) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return index
    .map((entry) => {
      const title = entry.title.toLowerCase();
      const text = entry.text.toLowerCase();
      let score = 0;
      for (const t of terms) {
        if (title.includes(t)) score += 10;
        if (text.includes(t)) score += 2;
        else return { entry, score: 0 }; // every term must match somewhere
      }
      return { entry, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => ({
      ...r.entry,
      snippet: r.entry.text.length > 160 ? `${r.entry.text.slice(0, 160)}…` : r.entry.text,
    }));
}
