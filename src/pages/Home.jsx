import { Link } from 'react-router-dom';
import { site, quickLinks } from '../data/site.js';
import { news } from '../data/news.js';
import { upcomingEvents } from '../data/events.js';
import { useDocumentTitle } from '../hooks.js';
import HeroSlider from '../components/HeroSlider.jsx';
import NewsCard from '../components/NewsCard.jsx';
import Icon from '../components/Icon.jsx';

const pillars = [
  { icon: 'bulb', title: 'Curious Minds', text: 'Hands-on, inquiry-based lessons that make children want to ask “why?” and “what if?”.' },
  { icon: 'heart', title: 'Caring Community', text: 'Small classes, kind teachers and a culture where every child belongs.' },
  { icon: 'laptop', title: 'Future Ready', text: 'Strong foundations in reading, maths, science and digital skills for tomorrow’s world.' },
];

const portals = [
  { icon: 'card', label: 'Payments', href: site.portals.payments },
  { icon: 'chat', label: 'Family Messaging', href: site.portals.messaging },
  { icon: 'people', label: 'Family Portal', href: site.portals.families },
];

export default function Home() {
  useDocumentTitle('');
  const events = upcomingEvents(7);

  return (
    <>
      <HeroSlider />

      <section className="quick-links container" aria-label="Quick links">
        <ul>
          {quickLinks.map((q) => (
            <li key={q.label}>
              <Link to={q.to}>
                <span className="ql-icon">
                  <Icon name={q.icon} size={26} />
                </span>
                <span>{q.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section welcome container">
        <div className="welcome-text">
          <p className="eyebrow">Welcome</p>
          <h2>A new school where every child can shine</h2>
          <p>
            At {site.name} we believe children thrive when they feel curious, safe and supported. Our teachers and families work together
            to build confident learners — one great day at a time.
          </p>
          <Link to="/about-us" className="btn btn-primary">
            About our school <Icon name="arrow" size={16} />
          </Link>
        </div>
        <ul className="pillars">
          {pillars.map((p) => (
            <li key={p.title}>
              <span className="pillar-icon">
                <Icon name={p.icon} size={26} />
              </span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="feature-band">
        <div className="container feature-inner">
          <div>
            <p className="eyebrow light">Family Technology Resources</p>
            <h2>Need help with devices, logins or the family portal?</h2>
            <p>We can help with Chromebooks, passwords, grades, attendance and messaging so you never miss what matters.</p>
          </div>
          <Link to="/parents/guide-to-learning/tech-guide" className="btn btn-accent btn-lg">
            Get tech help <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>

      <section className="section container" aria-label="Family portals">
        <ul className="portal-tiles">
          {portals.map((p) => (
            <li key={p.label}>
              <a href={p.href} target="_blank" rel="noopener noreferrer">
                <Icon name={p.icon} size={34} />
                <span>{p.label}</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="section container" aria-labelledby="news-h">
        <div className="section-head">
          <h2 id="news-h">News &amp; Announcements</h2>
          <Link to="/news" className="btn btn-outline">
            View All News
          </Link>
        </div>
        <div className="news-grid">
          {news.slice(0, 3).map((n) => (
            <NewsCard key={n.slug} item={n} />
          ))}
        </div>
      </section>

      <section className="section events-band" aria-labelledby="events-h">
        <div className="container">
          <div className="section-head">
            <h2 id="events-h">Upcoming Events</h2>
            <div className="head-links">
              <Link to="/calendar" className="btn btn-outline">
                View School Calendar
              </Link>
            </div>
          </div>
          {events.length ? (
            <ul className="event-list">
              {events.map((e) => {
                const d = new Date(`${e.date}T12:00:00`);
                return (
                  <li key={`${e.date}-${e.title}`}>
                    <time dateTime={e.date} className="date-badge">
                      <span>{d.toLocaleDateString('en-US', { month: 'short' })}</span>
                      <strong>{d.getDate()}</strong>
                    </time>
                    <div>
                      <h3>{e.title}</h3>
                      <p>
                        {e.time}
                        {e.location ? ` · ${e.location}` : ''}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No upcoming events — check back soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
