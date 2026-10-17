import { site } from '../data/site.js';
import SmartLink from './SmartLink.jsx';
import ContactForm from './ContactForm.jsx';
import Icon from './Icon.jsx';
import Art from './art/Art.jsx';
import Reveal, { CountUp } from './Reveal.jsx';

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
                {b.items.map((s, n) => (
                  <Reveal as="li" key={s.title} delay={n * 90}>
                    <strong>{s.title}</strong>
                    <span>{s.text}</span>
                  </Reveal>
                ))}
              </ol>
            );
          case 'form':
            return <ContactForm key={i} kind={b.kind} />;

          case 'image':
            return (
              <Reveal as="figure" key={i} className="figure">
                <Art name={b.art} alt={b.caption} />
                {b.caption && <figcaption>{b.caption}</figcaption>}
              </Reveal>
            );
          case 'gallery':
            return (
              <div key={i} className="mini-gallery">
                {b.items.map((g, n) => (
                  <Reveal as="figure" key={g.caption} delay={n * 100} className="figure">
                    <Art name={g.art} alt={g.caption} />
                    <figcaption>{g.caption}</figcaption>
                  </Reveal>
                ))}
              </div>
            );
          case 'cards':
            return (
              <div key={i} className="info-cards">
                {b.items.map((c, n) => (
                  <Reveal key={c.title} delay={n * 90} className="info-card">
                    <span className="info-icon">
                      <Icon name={c.icon || 'bulb'} size={24} />
                    </span>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </Reveal>
                ))}
              </div>
            );
          case 'stats':
            return (
              <div key={i} className="mini-stats">
                {b.items.map((s) => (
                  <div key={s.label}>
                    <strong>
                      <CountUp to={s.value} suffix={s.suffix} />
                    </strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            );
          case 'quote':
            return (
              <Reveal as="blockquote" key={i} className="pull-quote">
                <p>{b.text}</p>
                {b.by && <cite>— {b.by}</cite>}
              </Reveal>
            );
          case 'faq':
            return (
              <div key={i} className="faq">
                {b.items.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            );
          case 'table':
            return (
              <div key={i} className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      {b.head.map((h) => (
                        <th key={h} scope="col">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r) => (
                      <tr key={r.join('|')}>
                        {r.map((c, n) => (n === 0 ? <th key={n} scope="row">{c}</th> : <td key={n}>{c}</td>))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'timeline':
            return (
              <ol key={i} className="timeline">
                {b.items.map((t, n) => (
                  <Reveal as="li" key={t.title} delay={n * 80}>
                    <span className="tl-time">{t.time}</span>
                    <div>
                      <strong>{t.title}</strong>
                      <p>{t.text}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            );
          case 'files':
            return (
              <ul key={i} className="files">
                {b.items.map((f) => (
                  <li key={f.label}>
                    <span className="file-icon">PDF</span>
                    <span>
                      <strong>{f.label}</strong>
                      <small>{f.meta}</small>
                    </span>
                    <span className="file-soon">Sample</span>
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
