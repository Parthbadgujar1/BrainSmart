import { Link } from 'react-router-dom';
import { site } from '../data/site.js';
import Icon from './Icon.jsx';

const footerLinks = [
  { label: 'About Us', to: '/about-us' },
  { label: 'Academics', to: '/academics' },
  { label: 'School Information', to: '/school-information' },
  { label: 'Title I', to: '/parents/title-i' },
  { label: 'Title IX', to: '/parents/title-ix' },
  { label: 'Site Map', to: '/site-map' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Accessibility', to: '/accessibility' },
  { label: 'Nondiscrimination Policies', to: '/nondiscrimination' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand brand-light" aria-label={`${site.name} home`}>
            <img src={site.logo} alt="" width="52" height="52" />
            <span className="brand-name">{site.name}</span>
          </Link>
          <p className="footer-tagline">{site.tagline}</p>
          <address>
            <p>
              <Icon name="pin" size={16} />
              <span>
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </p>
            <p>
              <Icon name="phone" size={16} />
              <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}>{site.phone}</a>
            </p>
            <p>
              <Icon name="mail" size={16} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </address>
          <ul className="social-list" aria-label="Social media">
            {['facebook', 'instagram', 'x', 'youtube'].map((key) => (
              <li key={key}>
                <a href={site.social[key]} target="_blank" rel="noopener noreferrer" aria-label={`${site.shortName} on ${key}`}>
                  <Icon name={key} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="footer-links">
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-notices">
          <h2 className="footer-heading">Notices</h2>
          <p>
            If you have difficulty accessing any part of this website, please contact us at{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <p>
            BrainSmart School does not discriminate on the basis of race, colour, national origin, sex, disability or age in its
            programmes, activities or employment.
          </p>
          <p>External links are provided for convenience; the school is not responsible for the content of other websites.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
          <ul>
            {legalLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
