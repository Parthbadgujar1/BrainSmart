import { useMemo, useState } from 'react';
import { eventsOn, toISO } from '../data/events.js';
import PageShell from '../components/PageShell.jsx';
import Icon from '../components/Icon.jsx';

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const startOfWeek = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate() - d.getDay());
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

function EventItem({ e }) {
  return (
    <li className={`cal-event ${e.time === 'All day' ? 'all-day' : ''}`}>
      <span className="cal-event-title">{e.title}</span>
      <span className="cal-event-meta">
        {e.time}
        {e.location ? ` · ${e.location}` : ''}
      </span>
    </li>
  );
}

export default function CalendarPage() {
  const [view, setView] = useState('month');
  const [cursor, setCursor] = useState(() => new Date());
  const todayISO = toISO(new Date());

  const move = (dir) =>
    setCursor((c) =>
      view === 'month' ? new Date(c.getFullYear(), c.getMonth() + dir, 1) : addDays(c, dir * (view === 'week' ? 7 : 1)),
    );

  const heading = useMemo(() => {
    if (view === 'month') return cursor.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    if (view === 'day') return cursor.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    const s = startOfWeek(cursor);
    const e = addDays(s, 6);
    return `${s.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} – ${e.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
  }, [view, cursor]);

  const monthCells = useMemo(() => {
    const first = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
    const start = addDays(first, -first.getDay());
    const days = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate();
    const total = Math.ceil((first.getDay() + days) / 7) * 7;
    return Array.from({ length: total }, (_, i) => addDays(start, i));
  }, [cursor]);

  return (
    <PageShell path="/calendar" title="Calendar" intro="Concerts, book fairs, family nights and holidays — everything happening at BrainSmart in 2026 – 2027." art="playground">
      <div className="cal-toolbar">
        <div className="cal-nav">
          <button type="button" onClick={() => move(-1)} aria-label={`Previous ${view}`}>
            <Icon name="prev" size={18} />
          </button>
          <h2 aria-live="polite">{heading}</h2>
          <button type="button" onClick={() => move(1)} aria-label={`Next ${view}`}>
            <Icon name="next" size={18} />
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => setCursor(new Date())}>
            Today
          </button>
        </div>
        <div className="cal-views" role="group" aria-label="Calendar view">
          {['month', 'week', 'day'].map((v) => (
            <button key={v} type="button" aria-pressed={view === v} className={view === v ? 'active' : ''} onClick={() => setView(v)}>
              {v[0].toUpperCase() + v.slice(1)}
            </button>
          ))}
          <button type="button" className="print-btn" onClick={() => window.print()}>
            Print
          </button>
        </div>
      </div>

      {view === 'month' && (
        <div className="cal-grid" role="grid" aria-label={heading}>
          {DAY_NAMES.map((d) => (
            <div key={d} className="cal-head" role="columnheader">
              <span className="long">{d}</span>
              <span className="short">{d.slice(0, 3)}</span>
            </div>
          ))}
          {monthCells.map((d) => {
            const iso = toISO(d);
            const events = eventsOn(d);
            return (
              <div
                key={iso}
                role="gridcell"
                className={`cal-cell ${d.getMonth() !== cursor.getMonth() ? 'muted' : ''} ${iso === todayISO ? 'today' : ''}`}
              >
                <span className="cal-date">{d.getDate()}</span>
                <ul>
                  {events.map((e) => (
                    <EventItem key={`${e.title}${e.time}`} e={e} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}

      {view === 'week' && (
        <div className="cal-week">
          {Array.from({ length: 7 }, (_, i) => addDays(startOfWeek(cursor), i)).map((d) => {
            const events = eventsOn(d);
            return (
              <section key={toISO(d)} className={`cal-week-day ${toISO(d) === todayISO ? 'today' : ''}`}>
                <h3>
                  {DAY_NAMES[d.getDay()]} <span>{d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </h3>
                {events.length ? (
                  <ul>
                    {events.map((e) => (
                      <EventItem key={`${e.title}${e.time}`} e={e} />
                    ))}
                  </ul>
                ) : (
                  <p className="empty">No events</p>
                )}
              </section>
            );
          })}
        </div>
      )}

      {view === 'day' && (
        <div className="cal-day">
          {eventsOn(cursor).length ? (
            <ul>
              {eventsOn(cursor).map((e) => (
                <EventItem key={`${e.title}${e.time}`} e={e} />
              ))}
            </ul>
          ) : (
            <p className="empty">No events scheduled for this day.</p>
          )}
        </div>
      )}
    </PageShell>
  );
}
