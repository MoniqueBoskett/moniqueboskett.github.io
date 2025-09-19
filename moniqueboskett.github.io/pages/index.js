import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import BackToTopButton from '../components/BackToTopButton';
import GoogleAnalytics from '../components/GoogleAnalytics';
import MicrosoftClarity from '../components/MicrosoftClarity';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { layoutStyles, headingStyle, paragraphStyle } from '../styles/styles';

export default function Home() {
  const handlePhoneClick = (e) => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      alert('Call: 215-278-9306');
    }
  };

  return (
    <main style={layoutStyles.main}>
      <h1 style={headingStyle}>Welcome to Monique Boskett&rsquo;s Portfolio!</h1>

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
            Hi! I&apos;m Monique (she/her/hers) — an event and marketing strategist who creates memorable experiences through innovative
            event planning, travel, and community engagement. I created this site to showcase my work, share my journey, and connect with like-minded professionals.
            <br /><br />
            Click the menu button to learn who I am, what I do, and where I&apos;ve been. If you have any questions, or just want to say hi, feel free to reach out through the contact links below!
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
          aria-label="GitHub"
        >
          <Github size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/moniqueboskett/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          style={{ color: '#413b42' }}
          aria-label="LinkedIn"
        >
          <Linkedin size={32} />
        </a>
        <a
          href="mailto:monique.boskett@gmail.com"
          title="Email"
          style={{ color: '#413b42' }}
          aria-label="Email"
        >
          <Mail size={32} />
        </a>
        <a
          href="tel:2152789306"
          onClick={handlePhoneClick}
          title="Call"
          style={{ color: '#413b42' }}
          aria-label="Phone"
        >
          <Phone size={32} />
        </a>
      </footer>

      <BackToTopButton />
      <GoogleAnalytics />
      <MicrosoftClarity />
      <Analytics />
      <SpeedInsights />
    </main>
  );
}
