// Content for every inner page, keyed by URL path.
// ALL TEXT IS SAMPLE COPY written to demonstrate layout and tone — the school's private project
// consultant supplies the final wording; paste it into the blocks below (or send it to the developer).
//
// Block types: h2 | h3 | p | ul | ol | note | links | hours | form | steps |
//              image | gallery | cards | stats | quote | faq | table | timeline | files
// The optional 4th argument of page() chooses the banner picture (see src/components/art/scenes.jsx).

const h2 = (text) => ({ type: 'h2', text });
const h3 = (text) => ({ type: 'h3', text });
const p = (text) => ({ type: 'p', text });
const ul = (...items) => ({ type: 'ul', items });
const ol = (...items) => ({ type: 'ol', items });
const note = (text) => ({ type: 'note', text });
const links = (...items) => ({ type: 'links', items });
const image = (art, caption) => ({ type: 'image', art, caption });
const gallery = (...items) => ({ type: 'gallery', items });
const cards = (...items) => ({ type: 'cards', items });
const stats = (...items) => ({ type: 'stats', items });
const quote = (text, by) => ({ type: 'quote', text, by });
const faq = (...items) => ({ type: 'faq', items });
const table = (head, ...rows) => ({ type: 'table', head, rows });
const timeline = (...items) => ({ type: 'timeline', items });
const files = (...items) => ({ type: 'files', items });
const page = (title, intro, blocks = [], art) => ({ title, intro, blocks, art });

export const pages = {
  /* ───────────────────────── ABOUT US ───────────────────────── */
  '/about-us': page('About Us', 'BrainSmart School is a new community where every child is known, challenged and celebrated.', [
    h2('Vision'),
    p('Every BrainSmart student is ENCOURAGED to explore, EMPOWERED to lead their own learning and MOTIVATED to make the world a little brighter.'),
    h2('Mission'),
    p('We partner with families to deliver an engaging, rigorous and caring education that builds strong minds, kind hearts and confident learners ready for tomorrow.'),
    stats({ value: 20, label: 'Students per class (max)' }, { value: 6, label: 'Grade levels (K – 5)' }, { value: 12, suffix: '+', label: 'Clubs & programs' }),
    h2('Our values'),
    cards(
      { icon: 'bulb', title: 'Curiosity', text: 'We ask big questions and celebrate the thrill of finding answers.' },
      { icon: 'heart', title: 'Kindness', text: 'We look out for one another — in the classroom, on the playground and online.' },
      { icon: 'book', title: 'Excellence', text: 'We aim high, practise hard and keep growing, one step at a time.' },
      { icon: 'people', title: 'Community', text: 'Families, staff and neighbours learn and celebrate together.' },
    ),
    h2('Our story'),
    timeline(
      { time: '2025', title: 'A dream takes shape', text: 'A group of educators and parents set out to build a school where children love to learn.' },
      { time: 'Spring 2026', title: 'Campus ready', text: 'Classrooms, a library, a science lab and a garden are completed.' },
      { time: 'Fall 2026', title: 'Doors open', text: 'BrainSmart welcomes its very first students — Kindergarten to Grade 5.' },
      { time: 'Next', title: 'Growing together', text: 'New clubs, partnerships and community events join the calendar every term.' },
    ),
    image('campus', 'The BrainSmart School campus'),
    links({ label: 'Meet our Faculty & Staff', to: '/directory' }, { label: 'School Hours', to: '/about-us/school-hours' }),
  ], 'campus'),

  '/about-us/community-partners': page('Community Partners', 'We are grateful to the organisations that help our students learn beyond the classroom.', [
    p('Local businesses, libraries and community groups help BrainSmart bring real-world learning to life. Their time, talent and generosity open doors for every child.'),
    cards(
      { icon: 'book', title: 'Public Library', text: 'Monthly author visits, summer reading challenges and library cards for every student.' },
      { icon: 'heart', title: 'Neighbourhood Businesses', text: 'Spirit nights, book-fair sponsorships and career-day speakers.' },
      { icon: 'people', title: 'Parent–Teacher Association', text: 'Family events, classroom grants and a warm welcome for new families.' },
      { icon: 'laptop', title: 'Tech & STEM Partners', text: 'Equipment donations and volunteer engineers who mentor the robotics club.' },
    ),
    quote('When businesses and schools work together, children see how learning connects to the real world.', 'Local business partner (sample)'),
    note('Interested in becoming a partner? We would love to hear from you — contact the front office.'),
    links({ label: 'Become a partner', to: '/contact' }),
  ], 'community'),

  '/about-us/school-hours': page('School Hours', 'Plan your day with our arrival, dismissal and office times.', [
    { type: 'hours' },
    h2('A typical day'),
    timeline(
      { time: '7:45', title: 'Doors open & breakfast', text: 'Students are welcomed at the gate. Breakfast is served until 8:10am.' },
      { time: '8:00', title: 'Learning begins', text: 'Morning meeting, then reading, writing and maths blocks.' },
      { time: '11:00', title: 'Lunch & recess', text: 'Grade-level lunch periods between 11:00am and 12:45pm.' },
      { time: '12:45', title: 'Afternoon learning', text: 'Science, social studies, art, music and PE.' },
      { time: '2:45', title: 'Dismissal', text: 'Car riders, walkers and after-school program students leave from separate supervised areas.' },
    ),
    note('Early check-out is available until 2:15pm. After that time, please make dismissal changes in writing before noon.'),
    faq(
      { q: 'What if I am running late?', a: 'Please call the front office. Students arriving after 8:00am sign in at the office and receive a late pass.' },
      { q: 'Is before-care available?', a: 'Supervision begins at 7:45am. We are planning a before- and after-care program — ask the office for updates.' },
      { q: 'How do I change how my child goes home?', a: 'Send a signed note or email the office before noon on the day of the change.' },
    ),
  ], 'family'),

  '/about-us/school-profile': page('School Profile', 'A snapshot of BrainSmart School at a glance.', [
    table(['At a glance', 'Details'],
      ['Grades served', 'Kindergarten – Grade 5'],
      ['Opened', '2026'],
      ['Class size', 'Up to 20 students per class'],
      ['Student–teacher ratio', 'About 20 : 1, with teaching assistants in early grades'],
      ['School day', '8:00am – 2:45pm'],
      ['Accreditation', 'In progress'],
    ),
    h2('Facilities'),
    cards(
      { icon: 'book', title: 'Library & Media Center', text: 'A bright reading space with 5,000+ books and a digital library.' },
      { icon: 'bulb', title: 'Science & STEM Lab', text: 'Equipped for experiments, coding and robotics.' },
      { icon: 'home', title: 'Garden & Playground', text: 'Raised garden beds, a shaded play area and a multi-purpose field.' },
      { icon: 'laptop', title: 'Digital Learning Lab', text: 'Chromebooks and interactive displays for every grade.' },
    ),
    gallery({ art: 'library', caption: 'Our library' }, { art: 'science', caption: 'STEM lab' }, { art: 'garden', caption: 'School garden' }),
    links({ label: 'Accountability Report', to: '/about-us/school-profile/accountability-report' }),
  ], 'campus'),

  '/about-us/school-profile/accountability-report': page('Accountability Report', 'Annual performance and improvement reporting.', [
    p('As a newly opened school, BrainSmart will publish its first accountability report after the completion of the 2026–2027 school year. We believe in being open with families about how well we are doing and where we can do better.'),
    h3('What the report will include'),
    ul('Student progress in reading and maths', 'Attendance and family engagement', 'Staff qualifications and professional learning', 'Improvement goals for the next year'),
    files({ label: '2026 – 2027 Accountability Report', meta: 'PDF · available after the school year' }, { label: 'School Improvement Plan', meta: 'PDF · 6 pages' }),
  ], 'classroom'),

  /* ───────────────────────── ACADEMICS ───────────────────────── */
  '/academics': page('Academics', 'A balanced, hands-on curriculum that grows strong thinkers.', [
    p('At BrainSmart we teach the whole child. Strong foundations in literacy and maths sit alongside science, the arts and the skills of collaboration and curiosity.'),
    h2('Core subjects'),
    cards(
      { icon: 'book', title: 'English Language Arts', text: 'Phonics, reading, writing and speaking — with daily independent reading.' },
      { icon: 'bulb', title: 'Mathematics', text: 'Number sense, problem solving and fluency through games and real-life tasks.' },
      { icon: 'laptop', title: 'Science', text: 'Inquiry, experiments and the natural world, explored in our STEM lab.' },
      { icon: 'people', title: 'Social Studies', text: 'People, places and community — connecting history to children’s lives.' },
    ),
    image('classroom', 'Small classes mean more time with the teacher'),
    h2('Enrichment'),
    gallery({ art: 'art', caption: 'Art & creativity' }, { art: 'music', caption: 'Music & chorus' }, { art: 'sports', caption: 'PE & wellness' }),
    h2('How we support every learner'),
    ul('Small-group instruction matched to each child’s level', 'Regular progress checks and family conferences', 'Extra support and enrichment, so every child is challenged', 'Counseling and social-emotional learning woven into the week'),
    quote('We don’t just teach lessons — we teach children how to learn.', 'Principal Maya Anderson (sample)'),
    h2('Frequently asked questions'),
    faq(
      { q: 'What curriculum do you follow?', a: 'BrainSmart follows state standards, enriched with project-based learning, STEM and the arts.' },
      { q: 'How do you measure progress?', a: 'Teachers use classroom observation, short assessments and portfolios, shared with families each term.' },
      { q: 'Do you support children who need extra help?', a: 'Yes — small groups, individual plans and close work with families and specialists.' },
    ),
    links({ label: 'Guide to Learning', to: '/parents/guide-to-learning' }, { label: 'Student Clubs', to: '/students/clubs' }),
  ], 'classroom'),

  /* ───────────────────────── PARENTS ───────────────────────── */
  '/parents': page('Parents', 'Everything families need — in one place.', [
    { type: 'hours' },
    h2('Car rider information'),
    p('Please display your car-rider tag and remain in your vehicle. Follow staff directions and the posted traffic flow. Do not pass other vehicles in the line, and never ask children to cross between cars.'),
    h2('Reminders'),
    cards(
      { icon: 'chat', title: 'Stay in the loop', text: 'Check the newsletter and calendar weekly and turn on message alerts.' },
      { icon: 'backpack', title: 'Label everything', text: 'Jackets, lunch boxes and water bottles — names make returns easy.' },
      { icon: 'clock', title: 'Report absences', text: 'Call or message the front office by 9:00am on the day.' },
      { icon: 'heart', title: 'Dismissal changes', text: 'Send a note or email before noon for any change in pick-up.' },
    ),
    h2('Check out'),
    p('Students may only be released to adults listed on the emergency contact form. Photo ID is required.'),
    faq(
      { q: 'Who can pick up my child?', a: 'Only parents or guardians and adults you have listed on the emergency contact form.' },
      { q: 'What should my child bring each day?', a: 'A backpack, water bottle, lunch (or lunch account) and the school’s homework folder.' },
      { q: 'How do I speak with my child’s teacher?', a: 'Email through the family portal or call the office; teachers reply within one school day.' },
    ),
  ], 'family'),

  '/parents/family-center': page('Family Engagement Center', 'A welcoming space for families to learn, connect and volunteer.', [
    p('The Family Engagement Center is the heart of our parent partnership. It offers workshops, a resource library, a cosy meeting room and one-to-one help with school systems and learning at home.'),
    cards(
      { icon: 'people', title: 'Parent workshops', text: 'Monthly sessions on reading at home, maths games, online safety and more.' },
      { icon: 'book', title: 'Lending library', text: 'Borrow books, games and learning kits to use with your child.' },
      { icon: 'chat', title: 'Coffee mornings', text: 'Meet other families and school staff over tea, coffee and snacks.' },
    ),
    links(
      { label: 'Welcome to BrainSmart!', to: '/parents/family-center/welcome' },
      { label: 'Volunteer Opportunities', to: '/parents/family-center/volunteer-opportunities' },
      { label: 'Family Perception Results', to: '/parents/family-center/perception-results' },
    ),
  ], 'community'),
  '/parents/family-center/welcome': page('Welcome to BrainSmart!', 'We are so glad you are here.', [
    p('Whether your child is new to school or new to BrainSmart, our Family Engagement Center is here to help you settle in. Here is how your first month will look:'),
    steps3(),
    quote('The welcome tour made us feel like part of the family before the first day even started.', 'New parent (sample)'),
  ], 'family'),
  '/parents/family-center/volunteer-opportunities': page('Volunteer Opportunities', 'There is a role for every family — big or small.', [
    cards(
      { icon: 'book', title: 'Reading buddy', text: '30 minutes a week reading one-to-one with a student.' },
      { icon: 'home', title: 'Garden helper', text: 'Help our Garden Club plant, water and harvest.' },
      { icon: 'heart', title: 'Event crew', text: 'Spirit nights, Fall Festival, Book Fair and Field Day.' },
      { icon: 'people', title: 'Field-trip chaperone', text: 'Join classes on trips to museums, farms and more.' },
    ),
    note('All volunteers complete a short registration and background check before working with students.'),
    h2('How to get started'),
    ol('Complete the volunteer form at the front office.', 'Attend a 20-minute orientation.', 'Choose your first opportunity and meet your teacher contact.'),
    links({ label: 'Contact the Family Center', to: '/contact' }),
  ], 'garden'),
  '/parents/family-center/perception-results': page('Family Perception Results', 'What families tell us helps us improve.', [
    p('Each year we invite every family to share how we are doing. Results are published here, along with the actions we take in response.'),
    stats({ value: 95, suffix: '%', label: 'would recommend BrainSmart (sample)' }, { value: 92, suffix: '%', label: 'feel welcome at school (sample)' }, { value: 90, suffix: '%', label: 'say communication is clear (sample)' }),
    note('Figures shown are sample values to illustrate the layout. The first real survey will run in the spring.'),
  ], 'family'),

  '/parents/cafeteria': page('Cafeteria', 'Healthy, colourful meals to fuel learning.', [
    p('Our cafeteria team prepares meals fresh each day, with fruit, vegetables and whole grains on every tray — and a vegetarian choice always available.'),
    image('cafeteria', 'Lunch time at BrainSmart'),
    h2('Meal times & prices'),
    table(['Meal', 'Time', 'Price (sample)'],
      ['Breakfast', '7:45am – 8:10am', '$2.00'],
      ['Lunch', '11:00am – 12:45pm (by grade)', '$3.25'],
      ['Milk (extra)', 'With any meal', '$0.50'],
    ),
    h2('This week’s sample menu'),
    table(['Day', 'Main', 'Sides'],
      ['Monday', 'Baked chicken & rice', 'Steamed broccoli, apple slices'],
      ['Tuesday', 'Veggie pasta bake', 'Garden salad, orange wedges'],
      ['Wednesday', 'Soft tacos', 'Black beans, corn, pineapple'],
      ['Thursday', 'Cheese pizza on whole wheat', 'Carrot sticks, grapes'],
      ['Friday', 'Fish bites or hummus wrap', 'Sweet potato fries, melon'],
    ),
    h2('Free & reduced-price meals'),
    p('Families may apply at any time during the school year. Applications are confidential and your child will never be identified at the cafeteria.'),
    faq(
      { q: 'How do I put money on my child’s lunch account?', a: 'Pay online through the Payments link on the home page, or send cash or a check with your child.' },
      { q: 'What about food allergies?', a: 'Tell the clinic and the cafeteria manager. We will create an allergy plan and label safe options.' },
      { q: 'Can my child bring lunch from home?', a: 'Of course. Please avoid sharing food and keep nut-free lunches in classrooms with allergies.' },
    ),
    files({ label: 'October menu', meta: 'PDF · 1 page' }, { label: 'Free & reduced meal application', meta: 'PDF · 2 pages' }),
  ], 'cafeteria'),

  '/parents/newsletters': page('Newsletter', 'Stay up to date with what is happening at BrainSmart.', [
    p('Our newsletter goes home on the first Monday of each month. It is packed with news, dates, student work and tips for learning at home.'),
    files(
      { label: 'October 2026 — Welcome edition', meta: 'PDF · 4 pages' },
      { label: 'November 2026 — Book Fair & Literacy Night', meta: 'PDF · 4 pages' },
      { label: 'December 2026 — Winter Concert', meta: 'PDF · 4 pages' },
    ),
    quote('The newsletter is the first thing I read on Monday morning — it makes me feel part of what my children are doing.', 'Parent (sample)'),
    links({ label: 'Read the latest news', to: '/news' }, { label: 'See the calendar', to: '/calendar' }),
  ], 'library'),

  '/parents/clinic': page('Clinic', 'Caring for students who are sick or injured at school.', [
    p('Our school nurse cares for students during the day, keeps health records and works with families on any medical needs.'),
    image('care', 'The school clinic is a calm, friendly space'),
    h2('Medication'),
    p('Medication must be brought to the clinic by a parent or guardian in the original container with a signed authorisation form.'),
    h2('When to keep your child home'),
    cards(
      { icon: 'clock', title: 'Fever', text: '100.4°F or higher in the last 24 hours — stay home until fever-free without medicine.' },
      { icon: 'heart', title: 'Stomach bug', text: 'Vomiting or diarrhoea in the last 24 hours.' },
      { icon: 'people', title: 'Contagious illness', text: 'Rash, conjunctivitis or anything your doctor says is catching.' },
    ),
    h2('Immunisations & forms'),
    files({ label: 'Medication authorisation form', meta: 'PDF · 1 page' }, { label: 'Health history form', meta: 'PDF · 2 pages' }),
    faq(
      { q: 'What happens if my child becomes ill at school?', a: 'The nurse will assess them and call a parent or guardian if they need to go home.' },
      { q: 'Does the school have a nurse every day?', a: 'Yes — a nurse or trained clinic aide is available throughout the school day.' },
    ),
  ], 'care'),

  '/parents/guide-to-learning': page('Guide to Learning', 'Help your child succeed at home.', [
    p('These guides explain what your child is learning and give simple, fun ways to support it at home — no special equipment required.'),
    cards(
      { icon: 'book', title: 'Literacy Learning', text: 'Raising confident readers and writers.' },
      { icon: 'bulb', title: 'Math Mastery', text: 'Building number sense and problem-solving skills.' },
      { icon: 'laptop', title: 'Tech Guide', text: 'Using school devices and accounts safely.' },
    ),
    links(
      { label: 'Literacy Learning', to: '/parents/guide-to-learning/literacy-learning' },
      { label: 'Math Mastery', to: '/parents/guide-to-learning/math-mastery' },
      { label: 'Tech Guide', to: '/parents/guide-to-learning/tech-guide' },
    ),
  ], 'library'),
  '/parents/guide-to-learning/literacy-learning': page('Literacy Learning', 'Raising confident readers and writers.', [
    cards(
      { icon: 'book', title: 'Read every day', text: '20 minutes together — picture books, chapter books or comics all count.' },
      { icon: 'chat', title: 'Talk about stories', text: 'Ask “What happened next?” and “How do you think she felt?”' },
      { icon: 'home', title: 'Visit the library', text: 'A weekly trip builds a lifelong habit and costs nothing.' },
    ),
    h2('Reading milestones'),
    table(['Grade', 'By the end of the year, most children…'],
      ['Kindergarten', 'Know letters and sounds, and read simple words'],
      ['Grade 1', 'Read short stories and write simple sentences'],
      ['Grade 2', 'Read fluently and write short paragraphs'],
      ['Grade 3 – 5', 'Read chapter books independently and write with detail'],
    ),
    image('library', 'Reading together builds confidence'),
  ], 'library'),
  '/parents/guide-to-learning/math-mastery': page('Math Mastery', 'Building number sense and problem-solving skills.', [
    cards(
      { icon: 'bulb', title: 'Play with numbers', text: 'Count steps, sort snacks and spot patterns on the way to school.' },
      { icon: 'clock', title: 'Short and often', text: '10 minutes of fact practice a day beats an hour on Sunday.' },
      { icon: 'heart', title: 'Praise the effort', text: 'Celebrate strategies and persistence, not just right answers.' },
    ),
    h2('Maths in everyday life'),
    ul('Cooking — measuring, fractions and timing', 'Shopping — adding prices and counting change', 'Travel — reading maps, distance and time', 'Games — dice, cards and board games build fluency'),
    quote('Maths isn’t about being fast; it’s about being curious and not giving up.', 'Grade 3 teacher (sample)'),
  ], 'stem'),
  '/parents/guide-to-learning/tech-guide': page('Tech Guide', 'Using school devices and accounts at home.', [
    steps2(),
    h2('Healthy screen habits'),
    ul('Keep devices in shared family spaces', 'Agree on screen-free time, especially before bed', 'Charge devices overnight outside bedrooms', 'Talk about what your child is watching and playing'),
    image('digital', 'Students use school devices in our digital lab'),
    faq(
      { q: 'My child forgot their password.', a: 'Contact the Technology Coordinator through the family portal; resets take under a day.' },
      { q: 'What if a school device is damaged?', a: 'Report it right away to your child’s teacher. Accidental damage is handled case by case.' },
    ),
    links({ label: 'Internet Safety', to: '/programs-services/library/internet-safety' }),
  ], 'digital'),

  '/parents/parent-resources': page('Parent Resources', 'Handy links, forms and guides.', [
    files(
      { label: 'Student & family handbook', meta: 'PDF · 24 pages' },
      { label: 'Emergency contact form', meta: 'PDF · 1 page' },
      { label: 'Transportation change form', meta: 'PDF · 1 page' },
      { label: 'School calendar 2026 – 2027', meta: 'PDF · 2 pages' },
      { label: 'Uniform & dress guide', meta: 'PDF · 2 pages' },
    ),
    note('The real documents will be uploaded to the site before launch.'),
  ], 'family'),

  '/parents/pbis': page('PBIS', 'Positive Behavior Interventions and Supports.', [
    p('PBIS helps every student understand and meet clear, positive expectations. We celebrate good choices and teach new skills whenever they are needed.'),
    h2('Our expectations'),
    cards(
      { icon: 'heart', title: 'Be Respectful', text: 'Use kind words and listen to others.' },
      { icon: 'bulb', title: 'Be Responsible', text: 'Take care of our school and our things.' },
      { icon: 'people', title: 'Be Safe', text: 'Walking feet, hands to ourselves, safe choices.' },
      { icon: 'book', title: 'Be a Learner', text: 'Try your best and never give up.' },
    ),
    h2('How we celebrate'),
    ul('“Brain Bucks” earned for great choices, spent at the Friday school store', 'Positive notes and phone calls home', 'Monthly assemblies to recognise class and student achievements'),
    image('playground', 'Positive behaviour begins with play and kindness'),
  ], 'playground'),

  '/parents/play-2-learn': page('Play 2 Learn', 'Play-based sessions that prepare young children for school.', [
    p('Play 2 Learn invites families with children not yet in school to explore, play and meet our teachers. It is free and open to everyone in the community.'),
    table(['When', 'Where', 'Theme (sample)'],
      ['First Saturday, 10:00am', 'Library', 'Stories & songs'],
      ['Third Saturday, 10:00am', 'Art room', 'Messy art'],
      ['Last Friday, 3:30pm', 'Garden', 'Little scientists'],
    ),
    gallery({ art: 'art', caption: 'Messy art' }, { art: 'garden', caption: 'Little scientists' }, { art: 'library', caption: 'Story time' }),
    links({ label: 'Contact us to reserve a place', to: '/contact' }),
  ], 'art'),

  '/parents/records-requests': page('Records Requests', 'How to request your child’s school records.', [
    steps2('records'),
    table(['Request', 'Typical turnaround'],
      ['Report card copy', '2 school days'],
      ['Attendance record', '3 school days'],
      ['Full student record transfer', '10 school days'],
    ),
    links({ label: 'Contact the front office', to: '/contact' }),
  ], 'family'),

  '/parents/registration-withdrawal': page('Registration & Withdrawal', 'Join the BrainSmart family — or let us know if your plans change.', [
    h2('New student registration'),
    { type: 'steps', items: [
      { title: 'Send an enquiry', text: 'Complete the form below or call the front office.' },
      { title: 'Tour & meet', text: 'Visit the campus and meet our team.' },
      { title: 'Submit documents', text: 'Birth certificate, immunisation record, proof of address and previous school records.' },
      { title: 'Start learning', text: 'We welcome your child on their first day!' },
    ] },
    image('family', 'Families are warmly welcomed at the gate'),
    h2('What you will need'),
    files({ label: 'Registration packet', meta: 'PDF · 6 pages' }, { label: 'Enrolment checklist', meta: 'PDF · 1 page' }),
    faq(
      { q: 'What ages can enrol?', a: 'Children turning five by the start of the school year can join Kindergarten; others join their grade level.' },
      { q: 'Is there a waiting list?', a: 'Classes are capped at 20. If a class is full, we will add your child to a waiting list and contact you.' },
      { q: 'Can we visit before we apply?', a: 'Yes! Book a tour through the Contact page — we run them every week.' },
    ),
    h2('Withdrawal'),
    p('Please notify the front office in writing at least five school days before your child’s last day so records can be prepared.'),
    h2('Admissions enquiry'),
    { type: 'form', kind: 'admissions' },
  ], 'family'),

  '/parents/plan-and-promise': page('The Plan & Promise', 'Our commitment to every family.', [
    h2('Our Plan'),
    p('A safe, welcoming school with high expectations, strong teaching and regular communication.'),
    h2('Our Promise'),
    cards(
      { icon: 'heart', title: 'We will listen', text: 'Your questions and ideas always matter to us.' },
      { icon: 'chat', title: 'We will respond', text: 'Replies within one school day, every time.' },
      { icon: 'people', title: 'We will partner', text: 'Together we help every child thrive.' },
    ),
    quote('A school is a promise a community makes to its children.', 'BrainSmart founding team (sample)'),
  ], 'community'),

  '/parents/title-i': page('Title I', 'Federal support for student achievement.', [
    p('Title I provides additional resources so all children can meet challenging academic standards. Families are invited to review our parent and family engagement plan and share feedback.'),
    h3('How Title I helps'),
    ul('Extra reading and maths support in small groups', 'Family learning nights and take-home learning kits', 'Professional learning for teachers'),
    files({ label: 'Parent & Family Engagement Plan', meta: 'PDF · 4 pages' }, { label: 'School–Parent Compact', meta: 'PDF · 2 pages' }),
    note('Replace with the official Title I documents supplied by the school.'),
  ], 'classroom'),

  '/parents/title-ix': page('Title IX', 'Non-discrimination on the basis of sex.', [
    p('BrainSmart School does not discriminate on the basis of sex in its education programs or activities, as required by Title IX.'),
    h3('Title IX Coordinator'),
    table(['Role', 'Contact (sample)'], ['Coordinator', 'Grace Owens'], ['Email', 'titleix@brainsmartschool.org'], ['Phone', '(555) 010-2030']),
    files({ label: 'Title IX policy & grievance procedure', meta: 'PDF · 5 pages' }),
  ], 'family'),

  '/parents/supply-lists': page('2026 – 2027 School Supply Lists', 'Get ready for the new school year.', [
    image('art', 'Fresh pencils, crayons and notebooks — ready for day one'),
    table(['Grade', 'Highlights (sample)'],
      ['Kindergarten', 'Backpack, crayons, glue sticks, rest mat, change of clothes'],
      ['Grade 1', 'Pencils, ruler, scissors, folders, headphones'],
      ['Grade 2', 'Notebooks, markers, dry-erase pens, headphones'],
      ['Grade 3', 'Binder, dividers, highlighters, calculator'],
      ['Grade 4', 'Binder, planner, coloured pencils, calculator'],
      ['Grade 5', 'Binder, planner, protractor, USB drive'],
    ),
    files(
      { label: 'Kindergarten supply list', meta: 'PDF · 1 page' },
      { label: 'Grade 1 supply list', meta: 'PDF · 1 page' },
      { label: 'Grade 2 supply list', meta: 'PDF · 1 page' },
      { label: 'Grade 3 supply list', meta: 'PDF · 1 page' },
      { label: 'Grade 4 supply list', meta: 'PDF · 1 page' },
      { label: 'Grade 5 supply list', meta: 'PDF · 1 page' },
    ),
    note('Tip: label every item with your child’s name — it makes lost-and-found much easier!'),
  ], 'art'),

  '/parents/survey-results': page('Family Survey Results', 'Your voice shapes our school.', [
    p('Each survey window, we publish a summary of what we heard and what we will do about it.'),
    cards(
      { icon: 'chat', title: 'You said', text: 'Families want more ways to see classroom learning.' },
      { icon: 'bulb', title: 'We are', text: 'Launching class photo updates and open-classroom mornings.' },
      { icon: 'heart', title: 'Next steps', text: 'We will report back after the next survey.' },
    ),
    files({ label: 'Fall 2026 survey summary', meta: 'PDF · available after the first survey' }),
  ], 'community'),

  /* ───────────────────────── STUDENTS ───────────────────────── */
  '/students': page('Students', 'Your space to learn, explore and shine.', [
    p('Hello, BrainSmart students! This is your corner of the website. Find clubs to join, tools for learning and fun things to explore.'),
    cards(
      { icon: 'laptop', title: 'Student portal', text: 'Log in to see assignments, books and class pages.' },
      { icon: 'people', title: 'Clubs', text: 'Robotics, chorus, garden club and more — find your thing.' },
      { icon: 'book', title: 'Library', text: 'Borrow books or read e-books from home.' },
    ),
    gallery({ art: 'playground', caption: 'Recess fun' }, { art: 'stem', caption: 'Robotics club' }, { art: 'music', caption: 'Chorus' }),
    links({ label: 'Digital Learning Day', to: '/students/digital-learning-day' }, { label: 'Student Clubs', to: '/students/clubs' }, { label: 'Student Portal', to: 'https://example.com/student-portal' }),
  ], 'playground'),
  '/students/digital-learning-day': page('Digital Learning Day', 'Learning continues, wherever we are.', [
    p('On Digital Learning Days students complete lessons online from home. Teachers post assignments in the student portal each morning and are available for questions.'),
    timeline(
      { time: '8:30', title: 'Log in', text: 'Open the student portal and find today’s plan.' },
      { time: '9:00', title: 'Reading & writing', text: 'Short lessons with videos and activities.' },
      { time: '10:30', title: 'Maths', text: 'Practice and puzzles to try on your own or with family.' },
      { time: '12:00', title: 'Lunch & movement', text: 'Take a break — eat, stretch and play outside.' },
      { time: '1:00', title: 'Explore', text: 'Science, art or music activity of your choice.' },
    ),
    image('digital', 'Students log in from home on Digital Learning Days'),
    faq(
      { q: 'What if I don’t have a device?', a: 'Contact the office — we can lend a Chromebook for the day.' },
      { q: 'What if I have a question?', a: 'Message your teacher in the portal. They reply during school hours.' },
    ),
  ], 'digital'),
  '/students/clubs': page('Student Clubs', 'Find something you love.', [
    p('Clubs meet after school and finish by 4:30pm. Sign up through the front office or the family portal — spaces are limited!'),
    table(['Club', 'When', 'Grades'],
      ['Robotics Club', 'Wed & Thu, 3:15 – 4:30pm', '3 – 5'],
      ['Chorus', 'Tuesdays, 3:15 – 4:15pm', 'K – 5'],
      ['Reading Buddies', 'Fridays, 2:00 – 2:30pm', '2 – 5'],
      ['Garden Club', 'Mondays, 3:15 – 4:15pm', 'K – 5'],
      ['Art Club', 'Thursdays, 3:15 – 4:15pm', 'K – 5'],
      ['Chess & Games', 'Wednesdays, 3:15 – 4:00pm', '2 – 5'],
    ),
    gallery({ art: 'stem', caption: 'Robotics' }, { art: 'music', caption: 'Chorus' }, { art: 'garden', caption: 'Garden club' }),
    quote('I never thought I could build a robot — now I can’t stop!', 'Grade 4 student (sample)'),
    links({ label: 'See the calendar', to: '/calendar' }),
  ], 'stem'),

  /* ───────────────────────── PROGRAMS / SERVICES ───────────────────────── */
  '/programs-services': page('Programs / Services', 'Extra support and enrichment for students and families.', [
    cards(
      { icon: 'heart', title: 'Counseling', text: 'Caring support for feelings, friendships and learning.' },
      { icon: 'book', title: 'Library', text: 'Books, e-books and research skills for every student.' },
      { icon: 'bulb', title: 'Enrichment', text: 'STEM, art, music and PE woven through the week.' },
      { icon: 'people', title: 'Family services', text: 'Workshops, volunteering and community connections.' },
    ),
    gallery({ art: 'counseling', caption: 'Counseling' }, { art: 'library', caption: 'Library' }, { art: 'sports', caption: 'Wellness' }),
    links({ label: 'Counseling', to: '/programs-services/counseling' }, { label: 'Library', to: '/programs-services/library' }),
  ], 'library'),
  '/programs-services/counseling': page('Counseling', 'Supporting students’ social, emotional and academic growth.', [
    p('Our school counselor helps children understand feelings, make friends, solve problems and feel safe at school.'),
    image('counseling', 'A calm, cosy space to talk and be heard'),
    cards(
      { icon: 'people', title: 'Classroom lessons', text: 'Kindness, friendship, feelings and bullying prevention.' },
      { icon: 'heart', title: 'Small groups', text: 'Skills groups for friendship, confidence and handling big feelings.' },
      { icon: 'chat', title: 'One-to-one', text: 'Short, supportive chats when your child needs them.' },
      { icon: 'home', title: 'Family support', text: 'Consultations and referrals to community resources.' },
    ),
    note('Parents or guardians may request counseling support by calling the front office.'),
    faq(
      { q: 'Is counseling confidential?', a: 'Yes, within safety limits. Counselors share information only when a child may be at risk.' },
      { q: 'How does my child see the counselor?', a: 'By teacher or family referral, or by asking for a visit themselves.' },
    ),
  ], 'counseling'),
  '/programs-services/library': page('Library', 'A place to read, research and imagine.', [
    p('Every student visits the library weekly to borrow books, hear stories and learn research skills. Our media specialist curates stories from every culture and interest.'),
    stats({ value: 5000, suffix: '+', label: 'books on our shelves' }, { value: 1, label: 'weekly visit per class' }, { value: 200, suffix: '+', label: 'e-books online' }),
    image('library', 'Readers get cosy in our beanbag corner'),
    links({ label: 'Digital Library', to: '/programs-services/library/digital-library' }, { label: 'Internet Safety', to: '/programs-services/library/internet-safety' }),
  ], 'library'),
  '/programs-services/library/digital-library': page('Digital Library', 'Thousands of e-books and learning resources.', [
    p('Students can read and listen to books online through our digital library. Login details are shared by classroom teachers.'),
    cards(
      { icon: 'book', title: 'E-books', text: 'Fiction, non-fiction and graphic novels for all ages.' },
      { icon: 'laptop', title: 'Audiobooks', text: 'Listen on the go with a tablet or phone.' },
      { icon: 'bulb', title: 'Research tools', text: 'Kid-safe encyclopedias and databases.' },
    ),
    image('digital', 'Reading on a screen — safe and fun'),
  ], 'digital'),
  '/programs-services/library/internet-safety': page('Internet Safety', 'Helping children stay safe online.', [
    h2('For students'),
    cards(
      { icon: 'laptop', title: 'Keep it private', text: 'Never share passwords, your address or your full name online.' },
      { icon: 'chat', title: 'Tell a grown-up', text: 'If something feels wrong, tell a trusted adult straight away.' },
      { icon: 'heart', title: 'Be kind', text: 'Treat others online the way you would face to face.' },
    ),
    h2('For families'),
    ul('Use parental controls and keep devices in shared spaces', 'Talk often about what your child sees and does online', 'Learn the apps and games your child uses', 'Set a family media plan together'),
    quote('Ask about their online day just like you ask about their school day.', 'Media specialist Isabel Reyes (sample)'),
  ], 'digital'),

  /* ───────────────────────── FOOTER / UTILITY ───────────────────────── */
  '/school-information': page('School Information', 'Key facts about BrainSmart School.', [
    table(['Quick facts', ''],
      ['Grades', 'Kindergarten – Grade 5'],
      ['Office hours', '7:45am – 3:30pm'],
      ['Student hours', '8:00am – 2:45pm'],
      ['Mascot', 'Brainy the Owl (sample)'],
      ['School colours', 'Navy and gold'],
    ),
    cards(
      { icon: 'pin', title: 'Find us', text: 'Address and directions are on the Contact page and in the footer.' },
      { icon: 'calendar', title: 'Dates', text: 'See holidays and events on the school calendar.' },
      { icon: 'people', title: 'Staff', text: 'Meet our friendly team in the staff directory.' },
    ),
    links({ label: 'Contact Us', to: '/contact' }, { label: 'School Hours', to: '/about-us/school-hours' }),
  ], 'campus'),

  '/privacy': page('Privacy Policy', 'How we collect and protect your information.', [
    p('BrainSmart School respects your privacy. This website collects only the information you voluntarily submit through our forms and uses it solely to respond to your enquiry.'),
    h3('What we collect'),
    ul('Name, email and phone when you contact us', 'Basic, anonymous visit statistics to improve the site'),
    h3('What we never do'),
    ul('Sell or share your information with advertisers', 'Collect personal details from children through this website'),
    note('Replace this sample with the school’s official privacy policy.'),
  ], false),
  '/accessibility': page('Accessibility', 'Our commitment to an accessible website.', [
    p('We aim to meet WCAG 2.1 AA guidelines so everyone can use this website. Features include keyboard navigation, a skip link, readable colour contrast, resizable text and descriptive page titles.'),
    p('If you have trouble using any part of this website, please contact us and we will help promptly.'),
    links({ label: 'Contact us', to: '/contact' }),
  ], false),
  '/nondiscrimination': page('Nondiscrimination Policy', 'Equal opportunity for all.', [
    p('BrainSmart School does not discriminate on the basis of race, colour, national origin, sex, disability, age or religion in its programs, activities or employment.'),
    note('Replace with the school’s official policy text.'),
  ], false),
};

/* — small reusable step lists — */
function steps3() {
  return {
    type: 'steps',
    items: [
      { title: 'Week 1 — Meet & greet', text: 'Tour the classroom, meet your child’s teacher and learn the daily routine.' },
      { title: 'Week 2 — Get connected', text: 'Set up the family portal and join the newsletter and class messages.' },
      { title: 'Week 3 — Get involved', text: 'Join a coffee morning, volunteer or come to an event.' },
    ],
  };
}
function steps2(kind) {
  if (kind === 'records') {
    return { type: 'steps', items: [
      { title: 'Complete the request form', text: 'Available from the front office or the Parent Resources page.' },
      { title: 'Show photo ID', text: 'We confirm that you are a parent or guardian.' },
      { title: 'Collect or receive', text: 'Records are ready in the time shown below.' },
    ] };
  }
  return { type: 'steps', items: [
    { title: 'Log in', text: 'Use the username and password your teacher sent home.' },
    { title: 'Find your class', text: 'Open the student portal and choose today’s lessons.' },
    { title: 'Need help?', text: 'Message the Technology Coordinator through the family portal.' },
  ] };
}
