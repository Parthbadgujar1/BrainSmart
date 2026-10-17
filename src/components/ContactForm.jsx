import { useState } from 'react';
import { site } from '../data/site.js';

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

/**
 * Contact / admissions enquiry form.
 * - With VITE_FORM_ENDPOINT set (e.g. Formspree) the form posts JSON to it.
 * - Without it, the form opens the visitor's email app addressed to the school office.
 */
export default function ContactForm({ kind = 'contact' }) {
  const admissions = kind === 'admissions';
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.website) return; // honeypot — bots fill this hidden field

    const subject = admissions ? 'Admissions enquiry' : 'Website enquiry';

    if (!ENDPOINT) {
      const body = Object.entries(data)
        .filter(([k]) => k !== 'website')
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n');
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: subject, ...data }),
      });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="form-row">
        <label>
          Your name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        {admissions ? (
          <label>
            Grade your child is entering
            <select name="grade" required defaultValue="">
              <option value="" disabled>
                Select grade
              </option>
              {['Kindergarten', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'].map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </label>
        ) : (
          <label>
            Topic
            <select name="topic" defaultValue="General">
              {['General', 'Admissions', 'Volunteering', 'Partnerships', 'Website feedback'].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
        )}
      </div>
      <label>
        Message
        <textarea name="message" rows="5" required />
      </label>
      {/* honeypot */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : admissions ? 'Send enquiry' : 'Send message'}
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {status === 'sent' && 'Thank you! Your message is on its way — we will be in touch shortly.'}
        {status === 'error' && `Sorry, something went wrong. Please email ${site.email} instead.`}
      </p>
    </form>
  );
}
