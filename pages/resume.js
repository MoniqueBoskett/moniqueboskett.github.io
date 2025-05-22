import Navbar from '../components/Navbar';
import BackToTopButton from '../components/BackToTopButton';
import { jobs, education, skills } from '../data/resumeData';
import { Briefcase, GraduationCap, Award, Download, Linkedin } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Resume() {
  return (
    <>
      <Navbar />
      <div style={pageStyle}>
        <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>Resume</h1>

        <p style={{ maxWidth: '800px', margin: '1rem auto 3rem', textAlign: 'center', fontSize: '1.1rem' }}>
          I&apos;m a marketing and events strategist with over 10 years of experience leading branded activations,
          community programs, and high-impact campaigns. I bring strong cross-functional skills, a deep
          commitment to DEI, and a passion for creating meaningful experiences.
        </p>

        {/* Experience Section */}
        <h2 style={sectionHeader}><Briefcase size={20} style={{ marginRight: '0.5rem' }} /> Professional Experience</h2>
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

        {/* Education Section */}
        <h2 style={sectionHeader}><GraduationCap size={20} style={{ marginRight: '0.5rem' }} /> Education</h2>
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

            {/* Drexel Article Links */}
            {edu.school === 'Drexel University' && (
              <div style={{ marginTop: '1rem', marginLeft: '2rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Featured Articles:</h4>
                <ul style={{ paddingLeft: '1.25rem' }}>
                  {[
                    {
                      label: 'Amid Work and MBA Studies, 2023 Graduate Commencement Speaker...',
                      url: 'https://www.lebow.drexel.edu/news/amid-work-and-mba-studies-2023-graduate-commencement-speaker-monique-boskett-finds',
                      tracking: 'Drexel Commencement Feature'
                    },
                    {
                      label: 'Meet the Student Commencement Speakers for the LeBow Class of 2023',
                      url: 'https://www.lebow.drexel.edu/news/meet-student-commencement-speakers-lebow-class-2023',
                      tracking: 'LeBow Class of 2023 Speakers'
                    },
                    {
                      label: 'LeBow Students Named Inaugural Nina Henderson Provost Scholars',
                      url: 'https://www.lebow.drexel.edu/news/lebow-students-named-inaugural-nina-henderson-provost-scholars',
                      tracking: 'LeBow Nina Henderson Scholars'
                    },
                    {
                      label: 'The Inaugural Nina Henderson Provost Scholars',
                      url: 'https://drexel.edu/provost/news-events/announcements/2021/december/the-inaugural-nina-henderson-provost-scholars',
                      tracking: 'Drexel Nina Henderson Provost Scholars'
                    }
                  ].map((article, idx) => (
                    <li key={idx}>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => window.va?.track('article_click', { article: article.tracking })}
                        style={articleLinkStyle}
                      >
                        {article.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        {/* Skills Section */}
        <h2 style={sectionHeader}><Award size={20} style={{ marginRight: '0.5rem' }} /> Skills &amp; Certifications</h2>
        <div style={{
          ...cardStyle,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '0.75rem'
        }}>
          {skills.map((s, i) => (
            <div key={i}>• {s}</div>
          ))}
        </div>

        {/* Buttons */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem'
        }}>
          <a href="/Monique_Boskett_Resume.pdf" download style={buttonStyle}>
            <Download size={16} style={{ marginRight: '0.5rem' }} /> Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/moniqueboskett"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => window.va?.track('article_click', { article: 'LinkedIn Profile' })}
            style={{ ...buttonStyle, backgroundColor: '#0077b5' }}
          >
            <Linkedin size={16} style={{ marginRight: '0.5rem' }} /> View LinkedIn
          </a>
        </div>

        <BackToTopButton />
        <Analytics />
        <SpeedInsights />
      </div>
    </>
  );
}

// Styles
const pageStyle = {
  backgroundColor: '#dcc0e5',
  color: '#413b42',
  fontFamily: 'Fira Sans',
  padding: '2rem 1rem',
  paddingTop: '6rem',
  maxWidth: '1200px',
  margin: '0 auto',
  boxSizing: 'border-box',
};

const sectionHeader = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.75rem',
  marginBottom: '1rem',
  marginTop: '3rem',
};

const cardStyle = {
  backgroundColor: '#eee8f0',
  borderRadius: '12px',
  padding: '1.5rem',
  marginBottom: '2rem',
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

const articleLinkStyle = {
  color: '#413b42',
  textDecoration: 'underline',
  display: 'inline-block',
  wordBreak: 'break-word',
};
