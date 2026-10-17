import { site } from '../data/site.js';
import PageShell from '../components/PageShell.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Icon from '../components/Icon.jsx';

export default function ContactPage() {
  return (
    <PageShell path="/contact" title="Contact Us" intro="Questions, tour requests or ideas? We’d love to hear from you." trail={[]} art="family">
      <div className="contact-grid">
        <div>
          <ContactForm kind="contact" />
        </div>
        <aside className="contact-card">
          <h2>Visit or call</h2>
          <p>
            <Icon name="pin" size={18} />
            <span>
              {site.address.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </span>
          </p>
          <p>
            <Icon name="phone" size={18} /> <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}>{site.phone}</a>
          </p>
          <p>
            <Icon name="mail" size={18} /> <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>
            <Icon name="clock" size={18} />
            <span>
              Office: {site.officeHours}
              <span className="block">School: {site.schoolHours}</span>
            </span>
          </p>
        </aside>
      </div>
    </PageShell>
  );
}
