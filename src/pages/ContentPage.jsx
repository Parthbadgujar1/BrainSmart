import { useLocation, Link } from 'react-router-dom';
import { pages } from '../data/pages.js';
import PageShell from '../components/PageShell.jsx';
import Blocks from '../components/Blocks.jsx';

export default function ContentPage() {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const page = pages[path];

  if (!page) {
    return (
      <PageShell path={path} title="Page not found" intro="Sorry, we couldn’t find the page you were looking for." trail={[]} art="playground">
        <div className="link-buttons">
          <Link to="/" className="btn btn-primary">
            Go to the home page
          </Link>
          <Link to="/site-map" className="btn btn-outline">
            View the site map
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell path={path} title={page.title} intro={page.intro} art={page.art}>
      <Blocks blocks={page.blocks} />
    </PageShell>
  );
}
