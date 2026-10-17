import { Link } from 'react-router-dom';
import { nav, extraPages } from '../data/nav.js';
import PageShell from '../components/PageShell.jsx';

function Tree({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <li key={i.to}>
          <Link to={i.to}>{i.label}</Link>
          {i.children && <Tree items={i.children} />}
        </li>
      ))}
    </ul>
  );
}

export default function SiteMapPage() {
  return (
    <PageShell path="/site-map" title="Site Map" intro="Every page on the BrainSmart School website." trail={[]}>
      <div className="sitemap">
        <Tree items={[{ label: 'Home', to: '/' }, ...nav, ...extraPages.filter((e) => e.to !== '/site-map')]} />
      </div>
    </PageShell>
  );
}
