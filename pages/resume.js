import { Briefcase, GraduationCap, Award, Download, Linkedin } from 'lucide-react';
import BackToTopButton from '../components/BackToTopButton';

const logoPath = '/logos/';

const jobs = [
  {
    title: 'Senior Associate, Branded Card & Travel Experiences',
    company: 'JPMorgan Chase',
    location: 'Wilmington, DE',
    dates: 'Oct 2023 – Present',
    logo: 'jpmorgan.png',
    bullets: [
      'Executed high-profile Chase Sapphire events: Sundance, PGA, Aspen Ski Week, EEEEEATSCON, Live Nation festivals.',
      'Integrated cross-functional teams to enhance customer experience and card promotion.',
      'Tracked KPIs and managed event budgets exceeding $5M.',
    ],
  },
  {
    title: 'Senior Campaign Manager',
    company: 'JPMorgan Chase',
    location: 'Wilmington, DE',
    dates: 'Jun 2022 – Oct 2023',
    logo: 'jpmorgan.png',
    bullets: [
      'Managed marketing campaigns across business groups and stakeholders.',
      'Led DEI conversations and team collaboration activities.',
    ],
  },
  {
    title: 'Community Affairs Specialist',
    company: 'Independence Blue Cross',
    location: 'Philadelphia, PA',
    dates: 'Apr 2019 – Jun 2022',
    logo: 'ibx.png',
    bullets: [
      'Planned 250+ events for IBC, PAC, and Foundation.',
      'Created new tracking systems and improved internal communications.',
      'Led DEI panels and National Volunteer Week initiatives through iLEAD.',
    ],
  },
  {
    title: 'Community Lead, Events & Operations',
    company: 'WeWork',
    location: 'Philadelphia, PA',
    dates: 'Nov 2016 – Apr 2019',
    logo: 'wework.png',
    bullets: [
      'Planned and promoted 400+ community events.',
      'Drove occupancy and sales performance through service and outreach.',
    ],
  },
  {
    title: 'Supervisor, Guest Services & Events',
    company: 'Philadelphia Eagles',
    location: 'Philadelphia, PA',
    dates: 'Jun 2013 – Mar 2017',
    logo: 'eagles.png',
    bullets: [
      'Managed team operations at Lincoln Financial Field.',
      'Awarded MVP and perfect attendance honors.',
    ],
  },
  {
    title: 'Assistant Store Manager',
    company: 'Sherwin Williams',
    location: 'Marlton, NJ',
    dates: 'Jun 2015 – Nov 2016',
    logo: 'sherwin.png',
    bullets: [
      'Managed $1.8M store and 9-month interim leadership.',
      'Planned marketing events, drove sales, and managed recruitment.',
    ],
  },
  {
    title: 'Partnership Marketing Intern',
    company: 'Philadelphia Union',
    location: 'Chester, PA',
    dates: 'Jun 2014 – Nov 2014',
    logo: 'union.png',
    bullets: [
      'Worked with partners like Dunkin Donuts and Toyota.',
      'Coordinated sponsor activations and team appearances.',
    ],
  },
];

const education = [
  {
    degree: 'MBA, Entrepreneurship & Innovation',
    school: 'Drexel University',
    location: 'Philadelphia, PA',
    date: '2020 – 2023',
    logo: 'drexel.png',
    bullets: ['Minor: Project Management', 'GPA: 4.0'],
  },
  {
    degree: 'BS, Marketing',
    school: 'The College of New Jersey',
    location: 'Ewing, NJ',
    date: '2011 – 2015',
    logo: 'tcnj.png',
    bullets: [],
  },
];

const skills = [
  'Event Planning & Execution',
  'Strategic Partnerships',
  'Stakeholder Engagement',
  'Project Management',
  'Marketing Strategy',
  'Volunteer Programming',
  'Community Affairs',
  'Public Speaking',
  'DEI Engagement',
  'Team Leadership',
];

const Resume = () => {
  return (
    <div style={{ backgroundColor: '#dcc0e5', color: '#413b42', fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>Resume</h1>

      {/* Intro */}
      <p style={{ maxWidth: '800px', margin: '1rem auto 3rem', textAlign: 'center', fontSize: '1.1rem' }}>
        I&apos;m a marketing and events strategist with over 10 years of experience leading branded activations,
        community programs, and high-impact campaigns. I bring strong cross-functional skills, a deep
        commitment to DEI, and a passion for creating meaningful experiences.
      </p>

      {/* Experience */}
      <h2><Briefcase size={20} style={{ marginRight: '0.5rem' }} /> Professional Experience</h2>
      {jobs.map((job, i) => (
        <div key={i} style={cardStyle}>
          <div style={rowStyle}>
            <img
              src={`${logoPath}${job.logo}`}
              alt={job.company}
              style={logoStyle}
            />
            <div>
              <h3 style={{ margin: 0 }}>{job.title}</h3>
              <p style={{ fontWeight: 'bold', margin: '0.25rem 0' }}>
                {job.company} — {job.location} | {job.dates}
              </p>
            </div>
          </div>
          <ul style={{ paddingLeft: '1.2rem' }}>
            {job.bullets.map((b, j) => (
              <li key={j} style={{ marginBottom: '0.5rem', lineHeight: 1.6 }}>{b}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Education */}
      <h2><GraduationCap size={20} style={{ marginRight: '0.5rem' }} /> Education</h2>
      {education.map((edu, i) => (
        <div key={i} style={cardStyle}>
          <div style={rowStyle}>
            <img
              src={`${logoPath}${edu.logo}`}
              alt={edu.school}
              style={logoStyle}
            />
            <div>
              <h3 style={{ margin: 0 }}>{edu.degree}</h3>
              <p style={{ fontWeight: 'bold', margin: '0.25rem 0' }}>
                {edu.school} — {edu.location} | {edu.date}
              </p>
            </div>
          </div>
          {edu.bullets.map((b, j) => (
            <p key={j} style={{ marginLeft: '3.5rem', marginBottom: '0.25rem' }}>{b}</p>
          ))}
        </div>
      ))}

      {/* Skills */}
      <h2><Award size={20} style={{ marginRight: '0.5rem' }} /> Skills &amp; Certifications</h2>
      <div style={{
        ...cardStyle,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '0.75rem'
      }}>
        {skills.map((s, i) => (
          <div key={i}>• {s}</div>
        ))}
      </div>

      {/* Buttons */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="/Monique_Boskett_Resume.pdf" download style={buttonStyle}>
          <Download size={16} style={{ marginRight: '0.5rem' }} /> Download Resume
        </a>
        <a
          href="https://www.linkedin.com/in/moniqueboskett"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...buttonStyle, marginLeft: '1rem', backgroundColor: '#0077b5' }}
        >
          <Linkedin size={16} style={{ marginRight: '0.5rem' }} /> View LinkedIn
        </a>
      </div>

      <BackToTopButton />
    </div>
  );
};

// === Styles ===
const cardStyle = {
  backgroundColor: '#eee8f0',
  borderRadius: '12px',
  padding: '1.5rem',
  margin: '2rem auto',
  maxWidth: '800px',
};

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '1rem',
};

const logoStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: '#dcc0e5',
  padding: '6px',
  objectFit: 'contain',
};

const buttonStyle = {
  backgroundColor: '#413b42',
  color: '#fff',
  padding: '0.75rem 1.25rem',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  fontWeight: 'bold',
};

export default Resume;
