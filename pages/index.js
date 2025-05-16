import Navbar from '../components/Navbar';
import { Github, Linkedin, Mail } from 'lucide-react';
import BackToTopButton from '../components/BackToTopButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: '#dcc0e5',
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px,
            transparent 20px
          )`,
          color: '#413b42',
          minHeight: '100vh',
          padding: '2rem',
          paddingTop: '6rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Page Title Centered at Top */}
<h1 style={{ fontSize: '2.75rem', marginBottom: '2rem', textAlign: 'center' }}>
  Welcome to Monique Boskett&rsquo;s Portfolio!
</h1>

{/* Two-column content layout */}
<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '1000px',
    width: '100%',
    gap: '3rem',
    marginBottom: '4rem',
  }}
>
          {/* Left: Photo */}
          <img
            src="/monique.jpg"
            alt="Monique Boskett"
            style={{
              width: '320px',
              height: 'auto',
              borderRadius: '12px',
              objectFit: 'cover',
              border: '6px solid #eee8f0',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
            }}
          />
          {/* Right: Text */}
          <div style={{ maxWidth: '500px', textAlign: 'left' }}>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
              Hi! I&apos;m Monique — an event strategist who creates memorable experiences through innovative
              event planning, travel, and community engagement.
              <br /><br />
              Explore this site to learn more about who I am, what I do, and where I&apos;ve been.
            </p>
          </div>
        </div>

        {/* Footer with Icons */}
        <footer
          style={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            fontSize: '1.5rem',
          }}
        >
          <a
            href="https://github.com/MoniqueBoskett"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            style={{ color: '#413b42' }}
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/moniqueboskett/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            style={{ color: '#413b42' }}
          >
            <Linkedin size={32} />
          </a>
          <a
            href="mailto:monique.boskett@gmail.com"
            title="Email"
            style={{ color: '#413b42' }}
          >
            <Mail size={32} />
          </a>
        </footer>

        <BackToTopButton />
      </div>
    </>
  );
}
