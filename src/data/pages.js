// Content for every inner page, keyed by URL path.
// ALL TEXT IS PLACEHOLDER COPY written to demonstrate layout — the school's private project
// consultant supplies the final wording; paste it into the blocks below (or send it to the developer).
//
// Block types: h2 | h3 | p | ul | ol | note | links | hours | form | steps

const h2 = (text) => ({ type: 'h2', text });
const h3 = (text) => ({ type: 'h3', text });
const p = (text) => ({ type: 'p', text });
const ul = (...items) => ({ type: 'ul', items });
const ol = (...items) => ({ type: 'ol', items });
const note = (text) => ({ type: 'note', text });
const links = (...items) => ({ type: 'links', items });
const page = (title, intro, blocks = []) => ({ title, intro, blocks });

export const pages = {
  '/about-us': page('About Us', 'BrainSmart School is a new community where every child is known, challenged and celebrated.', [
    h2('Vision'),
    p('Every BrainSmart student is ENCOURAGED to explore, EMPOWERED to lead their own learning and MOTIVATED to make the world a little brighter.'),
    h2('Mission'),
    p('We partner with families to deliver an engaging, rigorous and caring education that builds strong minds, kind hearts and confident learners ready for tomorrow.'),
    h2('Our Values'),
    ul('Curiosity — we ask big questions', 'Kindness — we look out for one another', 'Excellence — we aim high and keep growing', 'Community — families and staff learn together'),
    links({ label: 'Meet our Faculty & Staff', to: '/directory' }, { label: 'School Hours', to: '/about-us/school-hours' }),
  ]),

  '/about-us/community-partners': page('Community Partners', 'We are grateful to the organisations that support our students.', [
    p('Local businesses, libraries and community groups help BrainSmart bring real-world learning into the classroom.'),
    ul('Local public library — reading programs and author visits', 'Neighbourhood businesses — spirit nights and scholarships', 'Parent–Teacher Association — events and fundraising'),
    note('Interested in becoming a partner? Contact the front office through the Contact page.'),
    links({ label: 'Contact us', to: '/contact' }),
  ]),

  '/about-us/school-hours': page('School Hours', 'Plan your day with our arrival, dismissal and office times.', [
    { type: 'hours' },
    h2('Arrival'),
    p('Doors open to students at 7:45am. Please arrive no later than 8:00am so your child does not miss morning instruction.'),
    h2('Dismissal'),
    p('Students are dismissed at 2:45pm. Car riders, walkers and after-school programme students leave from separate areas with staff supervision.'),
    note('Early check-out is available until 2:15pm. After that time, please make dismissal changes in writing before noon.'),
  ]),

  '/about-us/school-profile': page('School Profile', 'A snapshot of BrainSmart School at a glance.', [
    ul('Grades served: Kindergarten – Grade 5 (PLACEHOLDER)', 'Opened: 2026', 'Class size target: 20 students per class', 'Accreditation: in progress'),
    links({ label: 'Accountability Report', to: '/about-us/school-profile/accountability-report' }),
  ]),

  '/about-us/school-profile/accountability-report': page('Accountability Report', 'Annual performance and improvement reporting.', [
    p('As a newly opened school, BrainSmart will publish its first accountability report after the completion of the 2026–2027 school year.'),
    note('This page is ready to host a PDF or an embedded dashboard once data is available.'),
  ]),

  '/academics': page('Academics', 'A balanced, hands-on curriculum that grows strong thinkers.', [
    h2('Core Subjects'),
    ul('English Language Arts — phonics, reading, writing and speaking', 'Mathematics — number sense, problem solving and fluency', 'Science — inquiry, experiments and the natural world', 'Social Studies — people, places and community'),
    h2('Enrichment'),
    ul('Art and Music', 'Physical Education and Health', 'STEM and Robotics', 'Library and Digital Literacy'),
    h2('How we support every learner'),
    p('Small-group instruction, regular progress checks and strong communication with families make sure each child gets what they need to succeed.'),
    links({ label: 'Guide to Learning', to: '/parents/guide-to-learning' }, { label: 'Student Clubs', to: '/students/clubs' }),
  ]),

  '/parents': page('Parents', 'Everything families need — in one place.', [
    { type: 'hours' },
    h2('Car Rider Information'),
    p('Please display your car-rider tag and remain in your vehicle. Follow staff directions and the posted traffic flow. Do not pass other vehicles in the line.'),
    h2('Reminders'),
    ul('Send a note or email for any change in dismissal', 'Label jackets, lunch boxes and water bottles', 'Check the newsletter and calendar weekly', 'Report absences to the front office by 9:00am'),
    h2('Check Out'),
    p('Students may only be released to adults listed on the emergency contact form. Photo ID is required.'),
  ]),

  '/parents/family-center': page('Family Engagement Center', 'A welcoming space for families to learn, connect and volunteer.', [
    p('The Family Engagement Center offers workshops, a resource library and one-to-one help with school systems and learning at home.'),
    links(
      { label: 'Welcome to BrainSmart!', to: '/parents/family-center/welcome' },
      { label: 'Volunteer Opportunities', to: '/parents/family-center/volunteer-opportunities' },
      { label: 'Family Perception Results', to: '/parents/family-center/perception-results' },
    ),
  ]),
  '/parents/family-center/welcome': page('Welcome to BrainSmart!', 'We are so glad you are here.', [
    p('Whether your child is new to school or new to BrainSmart, our Family Engagement Center is here to help you settle in.'),
    ul('Tour the school and meet your child’s teacher', 'Learn about arrival, dismissal and communication', 'Join the Parent–Teacher Association'),
  ]),
  '/parents/family-center/volunteer-opportunities': page('Volunteer Opportunities', 'There is a role for every family.', [
    ul('Reading buddy in the classroom', 'Library helper', 'Event and Fall Festival crew', 'Field trip chaperone'),
    note('All volunteers complete a short registration and background check before working with students.'),
    links({ label: 'Contact the Family Center', to: '/contact' }),
  ]),
  '/parents/family-center/perception-results': page('Family Perception Results', 'What families tell us helps us improve.', [
    p('Results of our annual family survey will be shared here after the first survey window closes.'),
  ]),

  '/parents/cafeteria': page('Cafeteria', 'Healthy meals to fuel learning.', [
    h2('Breakfast & Lunch'),
    p('Breakfast is served 7:45am – 8:10am. Lunch is served in grade-level blocks between 11:00am and 12:45pm.'),
    h2('Free & Reduced-Price Meals'),
    p('Families may apply at any time during the school year. Applications are confidential.'),
    h2('Monthly Menu'),
    note('The monthly menu PDF will be posted here each month.'),
  ]),

  '/parents/newsletters': page('Newsletter', 'Stay up to date with what is happening at BrainSmart.', [
    p('Our newsletter goes home on the first Monday of each month and is also available here.'),
    ul('October 2026 — Welcome edition (coming soon)'),
    links({ label: 'Read the latest news', to: '/news' }),
  ]),

  '/parents/clinic': page('Clinic', 'Caring for students who are sick or injured at school.', [
    p('Our school nurse (or trained clinic aide) cares for students during the day.'),
    h2('Medication'),
    p('Medication must be brought to the clinic by a parent or guardian in the original container with a signed authorisation form.'),
    h2('When to keep your child home'),
    ul('Fever of 100.4°F or higher in the last 24 hours', 'Vomiting or diarrhoea in the last 24 hours', 'Contagious rash or conjunctivitis'),
  ]),

  '/parents/guide-to-learning': page('Guide to Learning', 'Help your child succeed at home.', [
    p('These guides explain what your child is learning and simple ways to support it at home.'),
    links(
      { label: 'Literacy Learning', to: '/parents/guide-to-learning/literacy-learning' },
      { label: 'Math Mastery', to: '/parents/guide-to-learning/math-mastery' },
      { label: 'Tech Guide', to: '/parents/guide-to-learning/tech-guide' },
    ),
  ]),
  '/parents/guide-to-learning/literacy-learning': page('Literacy Learning', 'Raising confident readers and writers.', [
    ul('Read together for 20 minutes every day', 'Ask “what happened next?” and “why?”', 'Visit the public library every week', 'Celebrate writing — notes, lists and stories all count'),
  ]),
  '/parents/guide-to-learning/math-mastery': page('Math Mastery', 'Building number sense and problem-solving skills.', [
    ul('Count and sort everyday objects', 'Practise fact fluency with games', 'Talk about maths in cooking, shopping and travel', 'Praise effort and strategies, not just answers'),
  ]),
  '/parents/guide-to-learning/tech-guide': page('Tech Guide', 'Using school devices and accounts at home.', [
    ul('Logging in to the student portal', 'Keeping devices charged and safe', 'Setting healthy screen-time routines', 'Who to contact for technical help'),
    links({ label: 'Internet Safety', to: '/programs-services/library/internet-safety' }),
  ]),

  '/parents/parent-resources': page('Parent Resources', 'Handy links, forms and guides.', [
    ul('Student handbook (PDF)', 'Emergency contact form', 'Transportation change form', 'Calendar and bell schedule'),
    note('Upload the real documents to /public/docs and link them here.'),
  ]),

  '/parents/pbis': page('PBIS', 'Positive Behavior Interventions and Supports.', [
    p('PBIS helps every student understand and meet clear, positive expectations. We recognise good choices and teach new skills when they are needed.'),
    h3('Our expectations'),
    ul('Be Respectful', 'Be Responsible', 'Be Safe', 'Be a Learner'),
  ]),

  '/parents/play-2-learn': page('Play 2 Learn', 'Play-based activities that prepare young children for school.', [
    p('Play 2 Learn sessions invite families with children not yet in school to explore, play and meet our teachers.'),
    ul('Monthly sessions in the library', 'Free and open to families in our community', 'Ideas for learning through play at home'),
  ]),

  '/parents/records-requests': page('Records Requests', 'How to request your child’s school records.', [
    ol('Complete the records request form (available from the front office).', 'Provide photo ID.', 'Allow up to 10 school days for processing.'),
    links({ label: 'Contact the front office', to: '/contact' }),
  ]),

  '/parents/registration-withdrawal': page('Registration & Withdrawal', 'Join the BrainSmart family — or let us know if your plans change.', [
    h2('New student registration'),
    { type: 'steps', items: [
      { title: 'Send an enquiry', text: 'Complete the form below or call the front office.' },
      { title: 'Tour & meet', text: 'Visit the campus and meet our team.' },
      { title: 'Submit documents', text: 'Birth certificate, immunisation record, proof of address and previous school records.' },
      { title: 'Start learning', text: 'We welcome your child on their first day!' },
    ] },
    h2('Withdrawal'),
    p('Please notify the front office in writing at least five school days before your child’s last day so records can be prepared.'),
    h2('Admissions enquiry'),
    { type: 'form', kind: 'admissions' },
  ]),

  '/parents/plan-and-promise': page('The Plan & Promise', 'Our commitment to every family.', [
    p('Our Plan: a safe, welcoming school with high expectations, strong teaching and regular communication.'),
    p('Our Promise: we will listen, respond and work with you so every child can thrive.'),
  ]),

  '/parents/title-i': page('Title I', 'Federal support for student achievement.', [
    p('Title I provides additional resources so all children can meet challenging academic standards. Families are invited to review our parent and family engagement plan and share feedback.'),
    note('Replace with official Title I documents supplied by the school.'),
  ]),

  '/parents/title-ix': page('Title IX', 'Non-discrimination on the basis of sex.', [
    p('BrainSmart School does not discriminate on the basis of sex in its education programmes or activities, as required by Title IX.'),
    h3('Title IX Coordinator'),
    p('Name and contact details to be provided by the school.'),
  ]),

  '/parents/supply-lists': page('2026 – 2027 School Supply Lists', 'Get ready for the new school year.', [
    ul('Kindergarten — PDF coming soon', 'Grade 1 — PDF coming soon', 'Grade 2 — PDF coming soon', 'Grade 3 — PDF coming soon', 'Grade 4 — PDF coming soon', 'Grade 5 — PDF coming soon'),
    note('Upload each grade’s list as a PDF to /public/docs and link it here.'),
  ]),

  '/parents/survey-results': page('Family Survey Results', 'Your voice shapes our school.', [
    p('Survey summaries will be published here after each survey window.'),
  ]),

  '/students': page('Students', 'Your space to learn, explore and shine.', [
    p('Find clubs, learning tools and resources designed just for BrainSmart students.'),
    links({ label: 'Digital Learning Day', to: '/students/digital-learning-day' }, { label: 'Student Clubs', to: '/students/clubs' }, { label: 'Student Portal', to: 'https://example.com/student-portal' }),
  ]),
  '/students/digital-learning-day': page('Digital Learning Day', 'Learning continues, wherever we are.', [
    p('On Digital Learning Days students complete lessons online from home. Teachers post assignments in the student portal each morning.'),
    ul('Log in by 8:30am', 'Complete assigned lessons', 'Reach out to your teacher with questions'),
  ]),
  '/students/clubs': page('Student Clubs', 'Find something you love.', [
    ul('Robotics Club — Wed & Thu, 3:15pm – 4:30pm', 'Chorus — Tuesdays, 3:15pm – 4:15pm', 'Reading Buddies — Fridays, 2:00pm – 2:30pm', 'Art Club — coming soon'),
    links({ label: 'See the calendar', to: '/calendar' }),
  ]),

  '/programs-services': page('Programs / Services', 'Extra support and enrichment for students and families.', [
    links({ label: 'Counseling', to: '/programs-services/counseling' }, { label: 'Library', to: '/programs-services/library' }),
  ]),
  '/programs-services/counseling': page('Counseling', 'Supporting students’ social, emotional and academic growth.', [
    ul('Classroom lessons on kindness, friendship and feelings', 'Small-group and one-to-one support', 'Family consultations and referrals'),
    note('Parents or guardians may request counseling support by calling the front office.'),
  ]),
  '/programs-services/library': page('Library', 'A place to read, research and imagine.', [
    p('Every student visits the library weekly to borrow books and learn research skills.'),
    links({ label: 'Digital Library', to: '/programs-services/library/digital-library' }, { label: 'Internet Safety', to: '/programs-services/library/internet-safety' }),
  ]),
  '/programs-services/library/digital-library': page('Digital Library', 'Thousands of e-books and learning resources.', [
    p('Students can read and listen to books online through our digital library. Login details are shared by classroom teachers.'),
  ]),
  '/programs-services/library/internet-safety': page('Internet Safety', 'Helping children stay safe online.', [
    ul('Never share passwords or personal details', 'Tell a trusted adult if something feels wrong', 'Be kind online', 'Families: use parental controls and talk often'),
  ]),

  '/school-information': page('School Information', 'Key facts about BrainSmart School.', [
    ul('Address, phone and email: see the footer or Contact page', 'Office hours: 7:45am – 3:30pm', 'Student hours: 8:00am – 2:45pm', 'Grades: K – 5 (placeholder)'),
    links({ label: 'Contact Us', to: '/contact' }, { label: 'School Hours', to: '/about-us/school-hours' }),
  ]),

  '/privacy': page('Privacy Policy', 'How we collect and protect your information.', [
    p('BrainSmart School respects your privacy. This website collects only the information you voluntarily submit through our forms and uses it solely to respond to your enquiry.'),
    note('Replace this placeholder with the school’s official privacy policy.'),
  ]),
  '/accessibility': page('Accessibility', 'Our commitment to an accessible website.', [
    p('We aim to meet WCAG 2.1 AA guidelines. If you have trouble using any part of this website, please contact us and we will help promptly.'),
    links({ label: 'Contact us', to: '/contact' }),
  ]),
  '/nondiscrimination': page('Nondiscrimination Policy', 'Equal opportunity for all.', [
    p('BrainSmart School does not discriminate on the basis of race, colour, national origin, sex, disability, age or religion in its programmes, activities or employment.'),
    note('Replace with the school’s official policy text.'),
  ]),
};
