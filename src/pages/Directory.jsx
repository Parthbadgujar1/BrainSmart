import { useMemo, useState } from 'react';
import { staff } from '../data/staff.js';
import { site } from '../data/site.js';
import PageShell from '../components/PageShell.jsx';
import Icon from '../components/Icon.jsx';

const emailFor = (s) => s.email || `${s.first}.${s.last}@${site.emailDomain}`.toLowerCase();

export default function Directory() {
  const [keyword, setKeyword] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  const results = useMemo(() => {
    const k = keyword.trim().toLowerCase();
    return [...staff]
      .sort((a, b) => a.last.localeCompare(b.last) || a.first.localeCompare(b.first))
      .filter(
        (s) =>
          (!k || `${s.first} ${s.last} ${s.title} ${s.dept}`.toLowerCase().includes(k)) &&
          (!first || s.first.toLowerCase().startsWith(first.trim().toLowerCase())) &&
          (!last || s.last.toLowerCase().startsWith(last.trim().toLowerCase())),
      );
  }, [keyword, first, last]);

  return (
    <PageShell path="/directory" title="Faculty & Staff" intro="Meet the people who make BrainSmart School a great place to learn.">
      <form className="directory-search" role="search" onSubmit={(e) => e.preventDefault()}>
        <label>
          Keyword
          <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Name, role or department" />
        </label>
        <label>
          First Name
          <input value={first} onChange={(e) => setFirst(e.target.value)} />
        </label>
        <label>
          Last Name
          <input value={last} onChange={(e) => setLast(e.target.value)} />
        </label>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => {
            setKeyword('');
            setFirst('');
            setLast('');
          }}
        >
          Clear
        </button>
      </form>

      <p className="result-count" role="status" aria-live="polite">
        {results.length} {results.length === 1 ? 'person' : 'people'} found
      </p>

      <ul className="staff-list">
        {results.map((s) => (
          <li key={`${s.first}${s.last}`} className="staff-card">
            <span className="avatar" aria-hidden="true">
              {s.first[0]}
              {s.last[0]}
            </span>
            <div>
              <h2>
                {s.first} {s.last}
              </h2>
              <p className="staff-role">
                {s.title} · {s.dept}
              </p>
              <a href={`mailto:${emailFor(s)}`}>
                <Icon name="mail" size={15} /> {emailFor(s)}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
