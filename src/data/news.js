// News & announcements. PLACEHOLDER copy — the consultant supplies the real posts.
// `body` is an array of paragraphs. Add an `image` (e.g. '/images/x.jpg') for a real thumbnail.

export const news = [
  {
    slug: 'welcome-to-brainsmart',
    title: 'Welcome to BrainSmart School',
    date: '2026-10-15',
    teaser: 'Our doors are open! Meet the team, tour the campus and learn what makes BrainSmart different.',
    tone: 'navy',
    body: [
      'We are thrilled to welcome students, families and staff to our very first school year. BrainSmart was founded on a simple idea: children learn best when they feel curious, safe and supported.',
      'Over the coming weeks we will share class updates, event details and ways to get involved. Please check this page and our monthly newsletter often.',
      'If you would like to visit, contact the front office to schedule a campus tour.',
    ],
  },
  {
    slug: 'school-hours-drop-off-pick-up',
    title: 'School Hours, Drop-Off and Pick-Up',
    date: '2026-10-12',
    teaser: 'Everything you need to know about arrival, dismissal and car-rider routines.',
    tone: 'teal',
    body: [
      'The front office is open 7:45am – 3:30pm. Classes run 8:00am – 2:45pm. Doors open for students at 7:45am; supervision before that time is not available.',
      'Car riders should follow the signage and remain in the vehicle. Staff will assist students in and out. Please have your car-rider tag visible at pick-up.',
    ],
  },
  {
    slug: 'after-school-programs',
    title: 'After-School Programs Now Enrolling',
    date: '2026-10-08',
    teaser: 'Robotics, chorus, reading buddies and more — find a club your child will love.',
    tone: 'amber',
    body: [
      'Registration is open for after-school clubs including Robotics, Chorus and Reading Buddies. Spaces are limited, so sign up early.',
      'See the Student Clubs page for schedules and how to enrol.',
    ],
  },
  {
    slug: 'volunteers-wanted',
    title: 'Volunteers Wanted',
    date: '2026-10-02',
    teaser: 'Lend a hand in the library, at events or as a classroom helper.',
    tone: 'coral',
    body: [
      'Family volunteers make our school stronger. Opportunities range from reading with students to helping at the Fall Festival.',
      'Visit the Family Engagement Center page to learn about volunteer requirements.',
    ],
  },
];

export const formatDate = (iso, opts = { month: 'long', day: 'numeric', year: 'numeric' }) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', opts);
