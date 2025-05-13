import { useState } from 'react';
import Navbar from '../components/Navbar';
import BackToTopButton from '../components/BackToTopButton';
import { jobs, education, skills } from '../data/resumeData';
import { Briefcase, GraduationCap, Award, Download, Linkedin } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Resume() {
  return (
    <div style={{ backgroundColor: '#dcc0e5', color: '#413b42', fontFamily: 'Fira Sans', padding: '2rem' }}>
      <Navbar />
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>Resume</h1>

      <p style={{ maxWidth: '800px', margin: '1rem auto 3rem', textAlign: 'center', fontSize: '1.1rem' }}>
        I&apos;m a marketing and events strategist with over 10 years of experience leading branded activations,
        community programs, and high-impact campaigns. I bring strong cross-functional skills, a deep
        commitment to DEI, and a passion for creating meaningful experiences.
      </p>

      {/* Experience Section */}
      <h2><Briefcase size={20} style={{ marginRight: '0.5rem' }} /> Professional Experience</h2>
      {jobs.map((job, index) => (
        <div key={index} style={cardStyle}>
          <div style={headerStyle}>
            <img src={`/logos/${job.logo}`} alt={job.company} style={logoStyle} />
            <div>
              <h3 style={{ margin: 0 }}>{job.title}</h3>
              <p style={{ fontWeight: 'bold', margin: '0.25rem 0' }}>
                {job.company} — {job.location} | {job.dates}
              </p>
            </div>
          </div>
          <ul style={{ paddingLeft: '1.5rem' }}>
            {job.bullets.map((b, j) => (
              <li key={j} style={{ marginBottom: '0.5rem', lineHeight: 1.6 }}>{b}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Education Section */}
      <h2><GraduationCap size={20} style={{ marginRight: '0.5rem' }} /> Education</h2>
      {education.map((edu, index) => (
        <div key={index} style={cardStyle}>
          <div style={headerStyle}>
            <img src={`/logos/${edu.logo}`} alt={edu.school} style={logoStyle} />
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

      {/* Skills Section */}
      <h2><Award size={20} style={{ marginRight: '0.5rem' }} /> Skills &amp; Certifications</h2>
      <div style={{ ...cardStyle, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
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
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

const cardStyle = {
  backgroundColor: '#eee8f0',
  borderRadius: '12px',
  padding: '1.5rem',
  marginBottom: '2rem',
  maxWidth: '900px',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '1rem'
};

const logoStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: '#dcc0e5',
  padding: '6px',
  objectFit: 'contain'
};

const buttonStyle = {
  backgroundColor: '#413b42',
  color: '#fff',
  padding: '0.75rem 1.25rem',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  fontWeight: 'bold'
};
