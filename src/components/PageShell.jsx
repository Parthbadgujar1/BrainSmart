import { Link, NavLink } from 'react-router-dom';
import { findTrail } from '../data/nav.js';
import { useDocumentTitle } from '../hooks.js';

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
 * Inner-page template shared by all pages: breadcrumb, "In This Section" sidebar, H1 and body.
 * Mirrors the reference site's layout.
 */
export default function PageShell({ path, title, intro, children, trail: trailOverride }) {
  useDocumentTitle(title);
  const trail = trailOverride ?? findTrail(path);
  const section = trail[0];
  const sectionItems = section?.children ? section.children : null;

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
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            {trail.map((t, i) => (
              <li key={t.to}>
                {i === trail.length - 1 ? <span aria-current="page">{t.label}</span> : <Link to={t.to}>{t.label}</Link>}
              </li>
            ))}
            {!trail.length && title && (
              <li>
                <span aria-current="page">{title}</span>
              </li>
            )}
          </ol>
        </nav>
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
        {children}
      </article>
    </div>
  );
}
