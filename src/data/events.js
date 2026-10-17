// Calendar data. One-off events use ISO dates (YYYY-MM-DD); weekly events repeat on `weekdays`
// (0 = Sunday … 6 = Saturday) between `from` and `until`.
// PLACEHOLDER — replace with the real 2026-27 school calendar from the consultant.

export const oneOffEvents = [
  { date: '2026-10-19', title: 'Fall Picture Day', time: '8:30am', location: 'Gymnasium' },
  { date: '2026-10-22', title: 'Parent–Teacher Conferences', time: '3:30pm – 6:30pm', location: 'Classrooms' },
  { date: '2026-10-28', title: 'Spirit Night', time: '5:00pm – 8:00pm', location: 'Local partner restaurant' },
  { date: '2026-10-30', title: 'Fall Festival', time: '1:00pm', location: 'School Grounds' },
  { date: '2026-11-03', title: 'No School — Teacher Planning Day', time: 'All day' },
  { date: '2026-11-10', title: 'Book Fair', time: 'All day', location: 'Library' },
  { date: '2026-11-11', title: 'Book Fair', time: 'All day', location: 'Library' },
  { date: '2026-11-12', title: 'Family Literacy Night', time: '6:00pm – 7:30pm', location: 'Library' },
  { date: '2026-11-23', title: 'Thanksgiving Break (no school)', time: 'All day' },
  { date: '2026-11-24', title: 'Thanksgiving Break (no school)', time: 'All day' },
  { date: '2026-11-25', title: 'Thanksgiving Break (no school)', time: 'All day' },
  { date: '2026-12-08', title: 'Winter Concert', time: '6:00pm', location: 'Auditorium' },
  { date: '2026-12-18', title: 'Last Day Before Winter Break', time: 'All day' },
  { date: '2027-01-05', title: 'Classes Resume', time: 'All day' },
  { date: '2027-01-18', title: 'No School — Martin Luther King Jr. Day', time: 'All day' },
  { date: '2027-02-11', title: 'Field Day Planning Meeting', time: '3:30pm', location: 'Conference Room' },
  { date: '2027-03-04', title: 'Science & STEM Expo', time: '5:30pm', location: 'Gymnasium' },
  { date: '2027-04-15', title: 'Spring Picture Day', time: '8:30am', location: 'Gymnasium' },
  { date: '2027-05-13', title: 'Field Day', time: 'All day', location: 'School Grounds' },
  { date: '2027-05-27', title: 'Last Day of School', time: '11:30am dismissal' },
];

export const weeklyEvents = [
  { title: 'Chorus Rehearsal', time: '3:15pm – 4:15pm', weekdays: [2], from: '2026-09-01', until: '2027-05-25' },
  { title: 'Robotics Club', time: '3:15pm – 4:30pm', weekdays: [3, 4], from: '2026-09-01', until: '2027-05-25' },
  { title: 'Reading Buddies', time: '2:00pm – 2:30pm', weekdays: [5], from: '2026-09-01', until: '2027-05-25' },
];

const pad = (n) => String(n).padStart(2, '0');
export const toISO = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

/** All events happening on a given Date, sorted with all-day items first. */
export function eventsOn(date) {
  const iso = toISO(date);
  const day = date.getDay();
  const list = oneOffEvents.filter((e) => e.date === iso).map((e) => ({ ...e }));
  for (const w of weeklyEvents) {
    if (w.weekdays.includes(day) && iso >= w.from && iso <= w.until) list.push({ ...w, date: iso });
  }
  return list.sort((a, b) => (a.time === 'All day' ? -1 : b.time === 'All day' ? 1 : 0));
}

/** The next `count` one-off events from today onward. */
export function upcomingEvents(count = 7, from = new Date()) {
  const iso = toISO(from);
  return oneOffEvents.filter((e) => e.date >= iso).slice(0, count);
}
