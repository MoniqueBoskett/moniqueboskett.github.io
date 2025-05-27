import { Github, Linkedin, Mail } from 'lucide-react';
import BackToTopButton from '../components/BackToTopButton';

export default function Home() {
  return (
    <>
      <h1
        style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: '2rem',
          padding: '0 1rem',
        }}
      >
        Welcome to Monique Boskett&rsquo;s Portfolio!
      </h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          maxWidth: '1000px',
          width: '100%',
          marginBottom: '4rem',
        }}
      >
        <img
          src="/monique.jpg"
          alt="Monique Boskett"
          style={{
            width: '100%',
            maxWidth: '320px',
            height: 'auto',
            borderRadius: '12px',
            objectFit: 'cover',
            border: '6px solid #eee8f0',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
            flexShrink: 0,
          }}
        />

        <div style={{ maxWidth: '600px', flex: 1, textAlign: 'left' }}>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.6 }}>
            Hi! I&apos;m Monique (she/her/hers) — an event strategist who creates memorable experiences through innovative
            event planning, travel, and community engagement.
            <br /><br />
            Explore this site to learn more about who I am, what I do, and where I&apos;ve been.
          </p>
        </div>
      </div>

      <footer
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          fontSize: '1.5rem',
          flexWrap: 'wrap',
          marginBottom: '2rem',
        }}
      >
        <a
          href="https://moniqueboskett.github.io/"
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
    </>
  );
}
