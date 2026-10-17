import { Link, NavLink } from 'react-router-dom';
import { findTrail } from '../data/nav.js';
import { useDocumentTitle } from '../hooks.js';
import Art from './art/Art.jsx';

// Default banner picture for each top-level section; individual pages can override with `art`.
const sectionArt = {
  '/calendar': 'campus',
  '/about-us': 'campus',
  '/academics': 'classroom',
  '/parents': 'family',
  '/students': 'playground',
  '/programs-services': 'library',
};

function SideList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.to}>
          <NavLink to={item.to} end>
            {item.label}
          </NavLink>
          {item.children && <SideList items={item.children} />}
        </li>
      ))}
    </ul>
  );
}

/**
 * Inner-page template shared by all pages: banner, breadcrumb, "In This Section" sidebar, H1 and body.
 * Mirrors the reference site's layout.
 */
export default function PageShell({ path, title, intro, children, trail: trailOverride, art }) {
  useDocumentTitle(title);
  const trail = trailOverride ?? findTrail(path);
  const section = trail[0];
  const sectionItems = section?.children ? section.children : null;
  const bannerArt = art === false ? null : art || (section && sectionArt[section.to]) || null;

  const crumbs = (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        {trail.map((t, i) => (
          <li key={t.to}>{i === trail.length - 1 ? <span aria-current="page">{t.label}</span> : <Link to={t.to}>{t.label}</Link>}</li>
        ))}
        {!trail.length && title && (
          <li>
            <span aria-current="page">{title}</span>
          </li>
        )}
      </ol>
    </nav>
  );

  return (
    <div className="container page-layout">
      {section && sectionItems && (
        <aside className="sidebar" aria-label="In this section">
          <h2 className="sidebar-title">In This Section</h2>
          <Link to={section.to} className="sidebar-root">
            {section.label}
          </Link>
          <SideList items={sectionItems} />
        </aside>
      )}

      <article className={`page-body ${section && sectionItems ? '' : 'wide'}`}>
        {crumbs}
        {bannerArt ? (
          <header className="page-banner">
            <Art name={bannerArt} />
            <div className="page-banner-text">
              <h1>{title}</h1>
              {intro && <p>{intro}</p>}
            </div>
          </header>
        ) : (
          <>
            <h1>{title}</h1>
            {intro && <p className="lead">{intro}</p>}
          </>
        )}
        {children}
      </article>
    </div>
  );
}
