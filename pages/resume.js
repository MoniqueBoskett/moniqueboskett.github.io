// pages/resume.js
import { useState } from 'react';
import BackToTopButton from '../components/BackToTopButton';
import GoogleAnalytics from '../components/GoogleAnalytics';
import MicrosoftClarity from '../components/MicrosoftClarity';
import { jobs, education } from '../data/resumeData';
import { Briefcase, GraduationCap, Award, Download, Linkedin } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { sectionStyle, headingStyle } from '../styles/styles';

const skillDetails = [
  { title: 'Event Strategy & Execution', description: 'Proven ability to lead events from ideation through post-event analytics across in-person, hybrid, and virtual formats.' },
  { title: 'Stakeholder Management', description: 'Skilled at aligning cross-functional teams (marketing, sales, PR, creative, legal) and managing executive-level relationships.' },
  { title: 'Budget Management', description: 'Experienced managing six- and seven-figure event budgets with a focus on ROI, compliance, and fiscal discipline.' },
  { title: 'Brand & Experiential Marketing', description: 'Adept at creating memorable, on-brand experiences that drive engagement, media coverage, and customer retention.' },
  { title: 'Vendor & Agency Management', description: 'Lead RFPs, negotiate contracts, and manage production partners, venues, caterers, and creative agencies.' },
  { title: 'Executive Communications & Briefing', description: 'Develop messaging, speaker prep materials, and run-of-shows for C-suite presentations and keynotes.' },
  { title: 'Sponsorship Activation', description: 'Strategically execute sponsor deliverables and brand integrations in large-scale events and partnerships.' },
  { title: 'VIP & Influencer Engagement', description: 'Coordinate celebrity, talent, and influencer participation; manage relationships with stylists and publicists.' },
  { title: 'Project Management', description: 'Expert in juggling multiple priorities, meeting tight deadlines, and executing flawlessly under pressure.' },
  { title: 'Cross-Functional Collaboration', description: 'Regularly partner with internal departments to execute 360° campaigns and integrated event programs.' },
  { title: 'Campaign Development', description: 'Contribute to integrated marketing plans that align event goals with pipeline acceleration and brand reach.' },
  { title: 'CRM & Data Tracking', description: 'Familiar with tools like Salesforce and Splash to track event performance, lead generation, and pipeline attribution.' },
  { title: 'Creative Concepting & Content', description: 'Collaborate on themes, visual identities, and experiences that bring a brand’s mission and vision to life.' },
  { title: 'On-Site Operations & Logistics', description: 'Lead all in-person elements: staffing, registration, signage, transportation, health/safety, and show flow.' },
  { title: 'Crisis & Risk Management', description: 'Anticipate and respond to real-time event challenges, ensuring compliance, safety, and brand integrity.' },
];

export default function Resume() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>Monique Boskett's Resume</h1>

      <p style={introText}>
        Monique Boskett, MBA (she/her/hers), is an Event Execution & Marketing Strategy Lead with 10+ years of experience crafting immersive marketing activations—managing $5M+ budgets and cross-functional teams to deliver standout experiences from film festivals to music fests. Her collaborative spirit, creative problem-solving, and upbeat energy ensure every event is seamless, memorable, and on-target.
      </p>

      {/* Experience */}
      <h2 style={sectionHeader}>
        <Briefcase size={20} style={{ marginRight: '0.5rem' }} /> Professional Experience
      </h2>
      {jobs.map((job, index) => (
        <div key={index} style={cardStyle}>
          <div style={headerStyle}>
            <img src={`/logos/${job.logo}`} alt={job.company} style={largeLogoStyle} />
            <div>
              <h3 style={{ margin: 0 }}>{job.title}</h3>
              <p style={{ fontWeight: 'bold', margin: '0.25rem 0' }}>
                {job.company} — {job.location} | {job.dates}
              </p>
            </div>
          </div>
          {job.summary && (
            <p style={{ marginBottom: '1rem', whiteSpace: 'pre-line' }}>{job.summary}</p>
          )}
          {job.bullets && (
            <ul style={{ paddingLeft: '1.5rem' }}>
              {job.bullets.map((b, j) => (
                <li key={j} style={{ marginBottom: '0.5rem', lineHeight: 1.6 }}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {/* Education */}
      <h2 style={sectionHeader}>
        <GraduationCap size={20} style={{ marginRight: '0.5rem' }} /> Education
      </h2>
      {education.map((edu, index) => (
        <div key={index} style={cardStyle}>
          <div style={headerStyle}>
            <img src={`/logos/${edu.logo}`} alt={edu.school} style={largeLogoStyle} />
            <div>
              <h3 style={{ margin: 0 }}>{edu.degree}</h3>
              <p style={{ fontWeight: 'bold', margin: '0.25rem 0' }}>
                {edu.school} — {edu.location} | {edu.date}
              </p>
            </div>
          </div>
          {edu.bullets.map((b, j) => (
            <p key={j} style={{ marginLeft: '2rem', marginBottom: '0.25rem' }}>{b}</p>
          ))}
        </div>
      ))}

      {/* Skills */}
      <h2 style={sectionHeader}>
        <Award size={20} style={{ marginRight: '0.5rem' }} /> Skills &amp; Certifications
      </h2>
      <div style={{ marginBottom: '2rem' }}>
        {skillDetails.map((skill, idx) => (
          <div key={idx} style={cardStyle}>
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              style={skillToggleButton}
            >
              {openIndex === idx ? '▼' : '▶'} {skill.title}
            </button>
            {openIndex === idx && (
              <p style={{ marginTop: '0.75rem' }}>{skill.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Links */}
      <div style={linkWrapper}>
        <a href="/Monique_Boskett_Resume.pdf" download style={downloadButton}>
          <Download size={16} style={{ marginRight: '0.5rem' }} /> Download Resume
        </a>
        <a
          href="https://www.linkedin.com/in/moniqueboskett"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => window.va?.track?.('article_click', { article: 'LinkedIn Profile' })}
          style={{ ...downloadButton, backgroundColor: '#0077b5' /* LinkedIn brand */ }}
        >
          <Linkedin size={16} style={{ marginRight: '0.5rem' }} /> View LinkedIn
        </a>
      </div>

      <BackToTopButton />
      <GoogleAnalytics />
      <Analytics />
      <MicrosoftClarity />
      <SpeedInsights />
    </section>
  );
}

/* ---------- Styles (theme-aware) ---------- */

const introText = {
  maxWidth: '800px',
  margin: '1rem auto 3rem',
  textAlign: 'center',
  fontSize: '1.1rem',
  background: 'var(--card)',
  color: 'var(--card-text)',
  border: '1px solid var(--border)',
  borderRadius: '12px',
  padding: '1.25rem',
  boxShadow: 'var(--shadow-1)',
};

const sectionHeader = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.75rem',
  marginBottom: '1rem',
  marginTop: '3rem',
  color: 'var(--text)',
};

const cardStyle = {
  backgroundColor: 'var(--card)',
  color: 'var(--card-text)',
  borderRadius: '12px',
  padding: '1.5rem',
  marginBottom: '1rem',
  border: '1px solid var(--border)',
  boxShadow: 'var(--shadow-1)',
};

const headerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '1.5rem',
  marginBottom: '1rem',
};

const largeLogoStyle = {
  width: '100px',
  height: 'auto',
  objectFit: 'contain',
  flexShrink: 0,
};

const skillToggleButton = {
  background: 'transparent',
  border: 'none',
  color: 'var(--text)',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  cursor: 'pointer',
  textAlign: 'left',
  width: '100%',
  padding: 0,
};

const downloadButton = {
  backgroundColor: '#413b42',
  color: '#fff',
  padding: '0.75rem 1.25rem',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  fontWeight: 'bold',
  boxShadow: 'var(--shadow-1)',
};

const linkWrapper = {
  textAlign: 'center',
  marginTop: '3rem',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '1rem',
};

const articleLinkStyle = {
  color: 'var(--text)',
  textDecoration: 'underline',
  display: 'inline-block',
  wordBreak: 'break-word',
};
