import { Github, Linkedin, Mail } from 'lucide-react';
import BackToTopButton from '../components/BackToTopButton';
import { layoutStyles, headingStyle, paragraphStyle } from '../styles/styles';

export default function Home() {
  return (
    <main style={layoutStyles.main}>
      <h1 style={headingStyle}>
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
          marginLeft: 'auto',
          marginRight: 'auto',
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
          <p style={paragraphStyle}>
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
    </main>
  );
}
