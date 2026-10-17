// News & announcements. SAMPLE copy — the consultant supplies the real posts.
// `body` is an array of paragraphs. Add an `image` (e.g. '/images/x.jpg') for a real photo; otherwise the `art` scene is used.

export const news = [
  {
    slug: 'welcome-to-brainsmart',
    title: 'Welcome to BrainSmart School',
    date: '2026-10-15',
    teaser: 'Our doors are open! Meet the team, tour the campus and learn what makes BrainSmart different.',
    tone: 'navy',
    art: 'campus',
    body: [
      'We are thrilled to welcome students, families and staff to our very first school year. BrainSmart was founded on a simple idea: children learn best when they feel curious, safe and supported.',
      'Classrooms are bright, class sizes are small and every teacher has been chosen for their warmth as much as their expertise. Over the coming weeks we will share class updates, event details and ways to get involved.',
      'If you would like to visit, contact the front office to schedule a campus tour. We would love to meet you.',
    ],
  },
  {
    slug: 'school-hours-drop-off-pick-up',
    title: 'School Hours, Drop-Off and Pick-Up',
    date: '2026-10-12',
    teaser: 'Everything you need to know about arrival, dismissal and car-rider routines.',
    tone: 'teal',
    art: 'family',
    body: [
      'The front office is open 7:45am – 3:30pm. Classes run 8:00am – 2:45pm. Doors open for students at 7:45am; supervision before that time is not available.',
      'Car riders should follow the signage and remain in the vehicle. Staff will assist students in and out. Please have your car-rider tag visible at pick-up so we can call your child quickly.',
      'Walkers and bike riders use the side gate. Thank you for helping us keep every child safe.',
    ],
  },
  {
    slug: 'after-school-programs',
    title: 'After-School Programs Now Enrolling',
    date: '2026-10-08',
    teaser: 'Robotics, chorus, reading buddies and more — find a club your child will love.',
    tone: 'amber',
    art: 'stem',
    body: [
      'Registration is open for after-school clubs including Robotics, Chorus, Reading Buddies and Garden Club. Spaces are limited, so sign up early.',
      'Clubs meet two afternoons a week and finish by 4:30pm. See the Student Clubs page for schedules and how to enrol.',
    ],
  },
  {
    slug: 'volunteers-wanted',
    title: 'Volunteers Wanted',
    date: '2026-10-02',
    teaser: 'Lend a hand in the library, at events or as a classroom helper.',
    tone: 'coral',
    art: 'community',
    body: [
      'Family volunteers make our school stronger. Opportunities range from reading with students to helping at the Fall Festival.',
      'Visit the Family Engagement Center page to learn about volunteer requirements and to sign up for your first shift.',
    ],
  },
  {
    slug: 'healthy-lunch-menu',
    title: 'Fresh New Lunch Menu',
    date: '2026-09-28',
    teaser: 'Colourful, balanced meals cooked fresh daily — see this month’s menu.',
    tone: 'teal',
    art: 'cafeteria',
    body: [
      'Our cafeteria team has designed a fresh menu with fruit, vegetables, whole grains and a vegetarian option every day.',
      'Allergy information is posted with every menu. Families with dietary needs should contact the clinic so we can plan together.',
    ],
  },
  {
    slug: 'garden-club-launch',
    title: 'Garden Club Plants Its First Seeds',
    date: '2026-09-21',
    teaser: 'Students dig in to learn where food comes from — and how patience pays off.',
    tone: 'amber',
    art: 'garden',
    body: [
      'Our new Garden Club planted sunflowers, beans and herbs in raised beds beside the playground. Students will track growth in their science journals all term.',
      'Know a green thumb? We would love donations of seeds, tools and gloves — contact the front office.',
    ],
  },
];

export const formatDate = (iso, opts = { month: 'long', day: 'numeric', year: 'numeric' }) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', opts);
