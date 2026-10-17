import { site } from '../data/site.js';
import SmartLink from './SmartLink.jsx';
import ContactForm from './ContactForm.jsx';
import Icon from './Icon.jsx';

function HoursCards() {
  return (
    <div className="hours-cards">
      <div className="hours-card">
        <Icon name="clock" size={26} />
        <span className="hours-label">Office Hours</span>
        <strong>{site.officeHours}</strong>
      </div>
      <div className="hours-card alt">
        <Icon name="book" size={26} />
        <span className="hours-label">School Hours</span>
        <strong>{site.schoolHours}</strong>
      </div>
    </div>
  );
}

/** Renders the data-driven content blocks defined in src/data/pages.js */
export default function Blocks({ blocks = [] }) {
  return (
    <div className="blocks">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return <h2 key={i}>{b.text}</h2>;
          case 'h3':
            return <h3 key={i}>{b.text}</h3>;
          case 'p':
            return <p key={i}>{b.text}</p>;
          case 'ul':
            return (
              <ul key={i} className="bullets">
                {b.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i} className="bullets">
                {b.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ol>
            );
          case 'note':
            return (
              <aside key={i} className="note">
                <Icon name="bulb" size={20} />
                <p>{b.text}</p>
              </aside>
            );
          case 'links':
            return (
              <div key={i} className="link-buttons">
                {b.items.map((l) => (
                  <SmartLink key={l.to} to={l.to} className="btn btn-outline">
                    {l.label} <Icon name="arrow" size={16} />
                  </SmartLink>
                ))}
              </div>
            );
          case 'hours':
            return <HoursCards key={i} />;
          case 'steps':
            return (
              <ol key={i} className="steps">
                {b.items.map((s) => (
                  <li key={s.title}>
                    <strong>{s.title}</strong>
                    <span>{s.text}</span>
                  </li>
                ))}
              </ol>
            );
          case 'form':
            return <ContactForm key={i} kind={b.kind} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
