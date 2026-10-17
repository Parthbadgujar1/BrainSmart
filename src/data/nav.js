// Site structure — mirrors the reference school site (Calendar, About Us, Academics,
// Parents, Students, Programs/Services) with up to three nesting levels.

export const nav = [
  { label: 'Calendar', to: '/calendar' },
  {
    label: 'About Us',
    to: '/about-us',
    children: [
      { label: 'Community Partners', to: '/about-us/community-partners' },
      { label: 'Faculty & Staff', to: '/directory' },
      { label: 'School Hours', to: '/about-us/school-hours' },
      {
        label: 'School Profile',
        to: '/about-us/school-profile',
        children: [{ label: 'Accountability Report', to: '/about-us/school-profile/accountability-report' }],
      },
    ],
  },
  { label: 'Academics', to: '/academics' },
  {
    label: 'Parents',
    to: '/parents',
    children: [
      {
        label: 'Family Engagement Center',
        to: '/parents/family-center',
        children: [
          { label: 'Welcome to BrainSmart!', to: '/parents/family-center/welcome' },
          { label: 'Volunteer Opportunities', to: '/parents/family-center/volunteer-opportunities' },
          { label: 'Family Perception Results', to: '/parents/family-center/perception-results' },
        ],
      },
      { label: 'Cafeteria', to: '/parents/cafeteria' },
      { label: 'Newsletter', to: '/parents/newsletters' },
      { label: 'Clinic', to: '/parents/clinic' },
      {
        label: 'Guide to Learning',
        to: '/parents/guide-to-learning',
        children: [
          { label: 'Literacy Learning', to: '/parents/guide-to-learning/literacy-learning' },
          { label: 'Math Mastery', to: '/parents/guide-to-learning/math-mastery' },
          { label: 'Tech Guide', to: '/parents/guide-to-learning/tech-guide' },
        ],
      },
      { label: 'Parent Resources', to: '/parents/parent-resources' },
      { label: 'PBIS', to: '/parents/pbis' },
      { label: 'Play 2 Learn', to: '/parents/play-2-learn' },
      { label: 'Records Requests', to: '/parents/records-requests' },
      { label: 'Registration & Withdrawal', to: '/parents/registration-withdrawal' },
      { label: 'The Plan & Promise', to: '/parents/plan-and-promise' },
      { label: 'Title I', to: '/parents/title-i' },
      { label: 'Title IX', to: '/parents/title-ix' },
      { label: '2026 – 2027 School Supply Lists', to: '/parents/supply-lists' },
      { label: 'Family Survey Results', to: '/parents/survey-results' },
    ],
  },
  {
    label: 'Students',
    to: '/students',
    children: [
      { label: 'Digital Learning Day', to: '/students/digital-learning-day' },
      { label: 'Student Clubs', to: '/students/clubs' },
    ],
  },
  {
    label: 'Programs/Services',
    to: '/programs-services',
    children: [
      { label: 'Counseling', to: '/programs-services/counseling' },
      {
        label: 'Library',
        to: '/programs-services/library',
        children: [
          { label: 'Digital Library', to: '/programs-services/library/digital-library' },
          { label: 'Internet Safety', to: '/programs-services/library/internet-safety' },
        ],
      },
    ],
  },
];

// Pages that live outside the main navigation (footer / utility links)
export const extraPages = [
  { label: 'News & Announcements', to: '/news' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'School Information', to: '/school-information' },
  { label: 'Site Map', to: '/site-map' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Accessibility', to: '/accessibility' },
  { label: 'Nondiscrimination Policy', to: '/nondiscrimination' },
];

/** Returns the chain of nav nodes from the top level down to `path`, or [] if not in the tree. */
export function findTrail(path, items = nav, trail = []) {
  for (const item of items) {
    const next = [...trail, item];
    if (item.to === path) return next;
    if (item.children) {
      const found = findTrail(path, item.children, next);
      if (found.length) return found;
    }
  }
  return [];
}

/** Flattens the tree into a list of every nav link (used for search and the site map). */
export function flattenNav(items = nav, out = []) {
  for (const item of items) {
    out.push({ label: item.label, to: item.to });
    if (item.children) flattenNav(item.children, out);
  }
  return out;
}
