import { useEffect } from 'react';
import { site } from './data/site.js';

/** Sets the browser tab title and keeps it in sync with the page. */
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : `${site.name} — ${site.tagline}`;
  }, [title]);
}
