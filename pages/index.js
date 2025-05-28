import Link from 'next/link';
import BackToTopButton from '../components/BackToTopButton';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { headingStyle, sectionStyle } from '../styles/styles';

export default function Home() {
  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>Welcome to My Portfolio 🌟</h1>

      <p style={introStyle}>
        Hi, I'm Monique! I'm passionate about events, philanthropy, and making a positive impact. Browse around to learn more about my work and passions.
      </p>

      <div style={navGrid}>
        <Link href="/resume" style={navButton}>View Resume</Link>
        <Link href="/charities" style={navButton}>Supported Charities</Link>
        <Link href="/personal" style={navButton}>Fun Facts</Link>
        <Link href="/events" style={navButton}>Event Portfolio</Link>
        <Link href="/contact" style={navButton}>Contact Me</Link>
      </div>

      <BackToTopButton />
      <Analytics />
      <SpeedInsights />
    </section>
  );
}

// 🔧 Styles
const introStyle = {
  fontSize: '1.2rem',
  textAlign: 'center',
  maxWidth: '700px',
  margin: '0 auto 2rem',
  padding: '0 1rem',
  color: '#413b42',
};

const navGrid = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '1rem',
  marginBottom: '3rem',
};

const navButton = {
  backgroundColor: '#dcc0e5',
  color: '#413b42',
  padding: '0.75rem 1.5rem',
  textDecoration: 'none',
  fontWeight: 'bold',
  borderRadius: '8px',
  fontSize: '1rem',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
};
