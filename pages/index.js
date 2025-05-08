import { Github, Linkedin, Mail } from 'lucide-react';
import BackToTopButton from '../components/BackToTopButton';

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: '#dcc0e5',
        color: '#413b42',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: 'sans-serif',
        textAlign: 'center',
      }}
    >
      {/* Profile Photo */}
      <img
        src="/monique.jpg"
        alt="Monique Boskett"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1.5rem',
        }}
      />

      {/* Welcome Header */}
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Welcome to Monique Boskett’s Portfolio
      </h1>

      {/* Intro Paragraph */}
      <p style={{ fontSize: '1.25rem', maxWidth: '600px' }}>
        Hi! I’m Monique — an event strategist who creates memorable experiences through innovative event planning, travel, and community engagement. Explore this site to learn more about who I am, what I do, and where I've been.
      </p>

      {/* Footer Section with Icons */}
      <footer
        style={{
          marginTop: '3rem',
          display: 'flex',
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
      <button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  style={{
    position: 'fixed',
    bottom: '1.5rem',
    right: '1.5rem',
    backgroundColor: '#eee8f0',
    color: '#413b42',
    border: 'none',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    fontSize: '1.25rem',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
  }}
  aria-label="Back to Top"
>
  ↑
</button>
<BackToTopButton />

    </div>
  );
}
