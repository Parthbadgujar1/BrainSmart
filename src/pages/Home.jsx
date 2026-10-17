import { Link } from 'react-router-dom';
import { site, quickLinks } from '../data/site.js';
import { news } from '../data/news.js';
import { upcomingEvents } from '../data/events.js';
import { stats, programs, dayTimeline, gallery, testimonials, principal } from '../data/home.js';
import { useDocumentTitle } from '../hooks.js';
import HeroSlider from '../components/HeroSlider.jsx';
import NewsCard from '../components/NewsCard.jsx';
import Icon from '../components/Icon.jsx';
import Marquee from '../components/Marquee.jsx';
import Reveal, { CountUp } from '../components/Reveal.jsx';
import Art, { Avatar } from '../components/art/Art.jsx';

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
  const events = upcomingEvents(6);

  return (
    <>
      <HeroSlider />

      <section className="quick-links container" aria-label="Quick links">
        <ul>
          {quickLinks.map((q, i) => (
            <Reveal as="li" key={q.label} delay={i * 60}>
              <Link to={q.to}>
                <span className="ql-icon">
                  <Icon name={q.icon} size={26} />
                </span>
                <span>{q.label}</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <Marquee />

      <section className="section welcome container">
        <Reveal from="left" className="welcome-media">
          <div className="welcome-art">
            <Art name="community" alt="Students and staff celebrating together" />
          </div>
          <span className="welcome-badge">
            <Icon name="heart" size={20} /> Every child known by name
          </span>
        </Reveal>
        <div className="welcome-text">
          <Reveal>
            <p className="eyebrow">Welcome</p>
            <h2>A new school where every child can shine</h2>
            <p>
              At {site.name} we believe children thrive when they feel curious, safe and supported. Our teachers and families work together
              to build confident learners — one great day at a time.
            </p>
          </Reveal>
          <ul className="pillars">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 110}>
                <span className="pillar-icon">
                  <Icon name={p.icon} size={26} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </ul>
          <Link to="/about-us" className="btn btn-primary">
            About our school <Icon name="arrow" size={16} />
          </Link>
        </div>
      </section>

      <section className="stats-band" aria-label="BrainSmart at a glance">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="stat">
              <Icon name={s.icon} size={28} />
              <strong>
                <CountUp to={s.value} suffix={s.suffix} />
              </strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container" aria-labelledby="programs-h">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Learning here</p>
            <h2 id="programs-h">Programs children love</h2>
          </div>
          <Link to="/programs-services" className="btn btn-outline">
            All programs & services
          </Link>
        </Reveal>
        <div className="program-grid">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <Link to={p.to} className="program-card">
                <span className="program-art">
                  <Art name={p.art} />
                </span>
                <span className="program-body">
                  <strong>{p.title}</strong>
                  <span>{p.text}</span>
                  <span className="read-more">
                    Learn more <Icon name="arrow" size={15} />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container principal" aria-labelledby="principal-h">
        <Reveal className="principal-card">
          <Avatar seed={`${principal.name}`} size={96} />
          <div>
            <p className="eyebrow">From the principal</p>
            <h2 id="principal-h">“Every child arrives with a spark.”</h2>
            <p>{principal.message}</p>
            <p className="signoff">
              <strong>{principal.name}</strong>, {principal.title}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="feature-band">
        <div className="container feature-inner">
          <Reveal>
            <p className="eyebrow light">Family Technology Resources</p>
            <h2>Need help with devices, logins or the family portal?</h2>
            <p>We can help with Chromebooks, passwords, grades, attendance and messaging so you never miss what matters.</p>
          </Reveal>
          <Link to="/parents/guide-to-learning/tech-guide" className="btn btn-accent btn-lg">
            Get tech help <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>

      <section className="section container" aria-labelledby="day-h">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">A day at BrainSmart</p>
            <h2 id="day-h">From the first bell to the last wave goodbye</h2>
          </div>
          <Link to="/about-us/school-hours" className="btn btn-outline">
            School hours
          </Link>
        </Reveal>
        <ol className="day-timeline">
          {dayTimeline.map((d, i) => (
            <Reveal as="li" key={d.time} delay={i * 90}>
              <span className="day-time">{d.time}</span>
              <strong>{d.title}</strong>
              <span>{d.text}</span>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="section container" aria-labelledby="gallery-h">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Life at BrainSmart</p>
            <h2 id="gallery-h">Moments from our school</h2>
          </div>
        </Reveal>
        <div className="gallery-grid">
          {gallery.map((g, i) => (
            <Reveal as="figure" key={g.caption} delay={i * 80} className={`gallery-item ${g.span || ''}`}>
              <Art name={g.art} alt={g.caption} />
              <figcaption>{g.caption}</figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section testimonials" aria-labelledby="voices-h">
        <div className="container">
          <Reveal className="section-head center">
            <div>
              <p className="eyebrow">Family voices</p>
              <h2 id="voices-h">What parents are saying</h2>
            </div>
          </Reveal>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <Reveal as="figure" key={t.name} delay={i * 120} className="testimonial">
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <Avatar seed={t.name} size={44} />
                  <span>
                    <strong>{t.name}</strong>
                    <small>{t.role}</small>
                  </span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" aria-label="Family portals">
        <ul className="portal-tiles">
          {portals.map((p, i) => (
            <Reveal as="li" key={p.label} delay={i * 90}>
              <a href={p.href} target="_blank" rel="noopener noreferrer">
                <Icon name={p.icon} size={34} />
                <span>{p.label}</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="section container" aria-labelledby="news-h">
        <Reveal className="section-head">
          <h2 id="news-h">News &amp; Announcements</h2>
          <Link to="/news" className="btn btn-outline">
            View All News
          </Link>
        </Reveal>
        <div className="news-grid">
          {news.slice(0, 3).map((n, i) => (
            <Reveal key={n.slug} delay={i * 110}>
              <NewsCard item={n} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section events-band" aria-labelledby="events-h">
        <div className="container">
          <Reveal className="section-head">
            <h2 id="events-h">Upcoming Events</h2>
            <div className="head-links">
              <Link to="/calendar" className="btn btn-outline">
                View School Calendar
              </Link>
            </div>
          </Reveal>
          {events.length ? (
            <ul className="event-list">
              {events.map((e, i) => {
                const d = new Date(`${e.date}T12:00:00`);
                return (
                  <Reveal as="li" key={`${e.date}-${e.title}`} delay={i * 70}>
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
                  </Reveal>
                );
              })}
            </ul>
          ) : (
            <p>No upcoming events — check back soon.</p>
          )}
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <Reveal className="cta-text">
            <h2>Come and see BrainSmart for yourself</h2>
            <p>Book a campus tour, meet our teachers and find out how your child will thrive here.</p>
            <div className="cta-buttons">
              <Link to="/parents/registration-withdrawal" className="btn btn-accent btn-lg">
                Enrol your child
              </Link>
              <Link to="/contact" className="btn btn-light btn-lg">
                Book a tour
              </Link>
            </div>
          </Reveal>
          <Reveal from="right" className="cta-art">
            <Art name="family" alt="A family arriving at the school gate" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
