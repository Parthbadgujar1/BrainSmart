import { Link, useSearchParams } from 'react-router-dom';
import { searchSite } from '../lib/search.js';
import PageShell from '../components/PageShell.jsx';

export default function SearchPage() {
  const [params] = useSearchParams();
  const q = params.get('q') || '';
  const results = searchSite(q);

  return (
    <PageShell path="/search" title="Search" trail={[]}>
      <p className="lead">
        {q ? (
          <>
            {results.length} result{results.length === 1 ? '' : 's'} for “{q}”
          </>
        ) : (
          'Enter a search term using the Open Search link at the top of the page.'
        )}
      </p>
      <ul className="search-results">
        {results.map((r) => (
          <li key={`${r.to}${r.title}`}>
            <span className="kind">{r.kind}</span>
            <h2>
              <Link to={r.to}>{r.title}</Link>
            </h2>
            <p>{r.snippet}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
