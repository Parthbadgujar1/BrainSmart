// Central place for school details. The consultant can edit everything here
// (name, contact details, links, hero slides) without touching components.
// Values marked PLACEHOLDER must be replaced with real information before launch.

export const site = {
  name: 'BrainSmart School',
  shortName: 'BrainSmart',
  tagline: 'Learn Smart. Grow Bright.',
  logo: '/logo.svg',
  domain: 'www.brainsmartschool.org', // PLACEHOLDER — see docs/04-domain-hosting.md (.edu is restricted)
  emailDomain: 'brainsmartschool.org',

  // PLACEHOLDER contact details
  address: ['123 Learning Lane', 'Your City, ST 00000'],
  phone: '(555) 010-2030',
  phoneAlt: '(555) 010-2031',
  email: 'office@brainsmartschool.org',
  officeHours: '7:45am – 3:30pm',
  schoolHours: '8:00am – 2:45pm',

  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    x: 'https://x.com/',
    youtube: 'https://www.youtube.com/',
  },

  // Portals shown in the utility bar and on the home page (PLACEHOLDER URLs)
  portals: {
    students: 'https://example.com/student-portal',
    families: 'https://example.com/family-portal',
    payments: 'https://example.com/payments',
    messaging: 'https://example.com/messaging',
  },
};

export const heroSlides = [
  {
    title: 'Welcome to BrainSmart School',
    text: 'A brand-new school built around curious minds, caring teachers and families who are partners in learning.',
    cta: { label: 'Enrol your child', to: '/parents/registration-withdrawal' },
    tone: 'navy',
  },
  {
    title: '2026 – 2027 School Supply Lists',
    text: 'Find the supply list for every grade level and get ready for a great year.',
    cta: { label: 'View supply lists', to: '/parents/supply-lists' },
    tone: 'teal',
  },
  {
    title: 'Free & Reduced-Price Meals',
    text: 'Apply today so your child can enjoy healthy breakfasts and lunches at school.',
    cta: { label: 'Cafeteria information', to: '/parents/cafeteria' },
    tone: 'amber',
  },
  {
    title: 'Book Fair & Family Spirit Night',
    text: 'Join us for books, food and fun — every purchase supports our school library.',
    cta: { label: 'See upcoming events', to: '/calendar' },
    tone: 'coral',
  },
];

export const quickLinks = [
  { label: 'School Menu', to: '/parents/cafeteria', icon: 'menu' },
  { label: 'New Student Registration', to: '/parents/registration-withdrawal', icon: 'register' },
  { label: 'Calendar', to: '/calendar', icon: 'calendar' },
  { label: 'Volunteer', to: '/parents/family-center/volunteer-opportunities', icon: 'heart' },
  { label: 'Faculty & Staff Directory', to: '/directory', icon: 'people' },
  { label: 'Family Center', to: '/parents/family-center', icon: 'home' },
  { label: 'School Supplies', to: '/parents/supply-lists', icon: 'backpack' },
];
