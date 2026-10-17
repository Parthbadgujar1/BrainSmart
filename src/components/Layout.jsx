import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Icon from './Icon.jsx';
import { demoMode } from '../data/site.js';

export default function Layout() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  const first = useRef(true);
  const [showTop, setShowTop] = useState(false);
  const [banner, setBanner] = useState(demoMode);

  // On route change: scroll to top and move focus to main content for keyboard / screen-reader users.
  useEffect(() => {
    window.scrollTo(0, 0);
    if (first.current) {
      first.current = false;
      return;
    }
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      {banner && (
        <div className="demo-banner" role="note">
          <span>
            <strong>Design preview</strong> — wording, names and pictures are sample content; the school’s real material replaces it
            before launch.
          </span>
          <button type="button" onClick={() => setBanner(false)} aria-label="Dismiss preview notice">
            <Icon name="close" size={16} />
          </button>
        </div>
      )}
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <div key={pathname} className="page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
      <button
        type="button"
        className={`to-top ${showTop ? 'show' : ''}`}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name="chevron" size={22} className="flip" />
      </button>
    </>
  );
}
