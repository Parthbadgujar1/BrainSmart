import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { site } from '../data/site.js';
import { nav } from '../data/nav.js';
import Icon from './Icon.jsx';

const socials = [
  ['facebook', 'Facebook'],
  ['instagram', 'Instagram'],
  ['x', 'X (Twitter)'],
  ['youtube', 'YouTube'],
];

function NavNode({ item, depth = 0, openKey, setOpenKey }) {
  const hasChildren = !!item.children?.length;
  const open = openKey === item.to;
  return (
    <li className={`nav-item depth-${depth} ${hasChildren ? 'has-children' : ''} ${open ? 'open' : ''}`}>
      <div className="nav-row">
        <NavLink to={item.to} end={!hasChildren} className="nav-link">
          {item.label}
        </NavLink>
        {hasChildren && (
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-label={`${open ? 'Collapse' : 'Expand'} ${item.label} menu`}
            onClick={() => setOpenKey(open ? null : item.to)}
          >
            <Icon name="chevron" size={16} />
          </button>
        )}
      </div>
      {hasChildren && (
        <ul className="dropdown">
          {item.children.map((child) => (
            <NavNode key={child.to} item={child} depth={depth + 1} openKey={openKey} setOpenKey={setOpenKey} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openKey, setOpenKey] = useState(null);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setOpenKey(null);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && (setMenuOpen(false), setSearchOpen(false), setOpenKey(null));
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const submitSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-inner">
          <div className="utility-links">
            <a href={site.portals.students} target="_blank" rel="noopener noreferrer">
              Students
            </a>
            <a href={site.portals.families} target="_blank" rel="noopener noreferrer">
              Families
            </a>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="utility-right">
            <button
              type="button"
              className="search-toggle"
              aria-expanded={searchOpen}
              aria-controls="site-search"
              onClick={() => setSearchOpen((s) => !s)}
            >
              <Icon name={searchOpen ? 'close' : 'search'} size={16} />
              <span>{searchOpen ? 'Close Search' : 'Open Search'}</span>
            </button>
            <ul className="social-list" aria-label="Social media">
              {socials.map(([key, label]) => (
                <li key={key}>
                  <a href={site.social[key]} target="_blank" rel="noopener noreferrer" aria-label={`${site.shortName} on ${label}`}>
                    <Icon name={key} size={17} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {searchOpen && (
          <form id="site-search" className="search-panel" role="search" onSubmit={submitSearch}>
            <div className="container search-inner">
              <label htmlFor="q" className="sr-only">
                Search the site
              </label>
              <input id="q" type="search" autoFocus placeholder="Search BrainSmart School…" value={query} onChange={(e) => setQuery(e.target.value)} />
              <button type="submit" className="btn btn-accent">
                Search
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => setQuery('')}>
                Clear
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="brand-bar">
        <div className="container brand-inner">
          <Link to="/" className="brand" aria-label={`${site.name} home`}>
            <img src={site.logo} alt="" width="56" height="56" />
            <span className="brand-text">
              <span className="brand-name">{site.name}</span>
              <span className="brand-tagline">{site.tagline}</span>
            </span>
          </Link>
          <Link to="/parents/registration-withdrawal" className="btn btn-accent brand-cta">
            Enrol Now
          </Link>
          <button
            type="button"
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((m) => !m)}
          >
            <Icon name={menuOpen ? 'close' : 'burger'} size={22} />
            <span>{menuOpen ? 'Close Menu' : 'Open Menu'}</span>
          </button>
        </div>
      </div>

      <nav id="main-nav" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main">
        <ul className="container nav-list">
          {nav.map((item) => (
            <NavNode key={item.to} item={item} openKey={openKey} setOpenKey={setOpenKey} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
