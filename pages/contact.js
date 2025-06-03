import BackToTopButton from '../components/BackToTopButton';
import GoogleAnalytics from '../components/GoogleAnalytics';
import MicrosoftClarity from '../components/MicrosoftClarity';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { headingStyle, sectionStyle } from '../styles/styles';

export default function Contact() {
  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>Get in Touch 💌</h1>
      <p style={descriptionStyle}>
        Have a question, collaboration idea, or just want to say hello? Fill out the form below and I&apos;ll get back to you!
      </p>

      <div style={centeredWrapper}>
        <form
          action="https://formspree.io/f/mpwdnlyw"
          method="POST"
          target="_blank"
          style={formWrapper}
        >
          <input type="hidden" name="_redirect" value="https://moniqueboskett.vercel.app/thankyou" />

          <div style={fieldGroup}>
            <label htmlFor="name" style={labelStyle}>Name</label>
            <input type="text" name="name" id="name" required style={inputStyle} />
          </div>

          <div style={fieldGroup}>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input type="email" name="email" id="email" required style={inputStyle} />
          </div>

          <div style={fieldGroup}>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea name="message" id="message" rows="5" required style={{ ...inputStyle, resize: 'vertical' }} />
          </div>

          <button type="submit" style={submitButton}>Send Message</button>
        </form>
      </div>

      <BackToTopButton />

      {/* Google Analytics snippet */}
      <GoogleAnalytics />

      {/* Vercel Analytics */}
      <Analytics />

      {/* Microsoft Clarity snippet */}
      <MicrosoftClarity />

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </section>
  );
}

// 🔧 Styles
const centeredWrapper = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
};

const descriptionStyle = {
  maxWidth: '600px',
  width: '100%',
  textAlign: 'center',
  marginBottom: '2rem',
  fontSize: '1.1rem',
  padding: '0 1rem',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const formWrapper = {
  backgroundColor: '#eee8f0',
  padding: '2rem',
  borderRadius: '12px',
  maxWidth: '500px',
  width: '100%',
  boxSizing: 'border-box',
};

const fieldGroup = {
  marginBottom: '1rem',
};

const labelStyle = {
  fontWeight: 'bold',
  display: 'block',
  marginBottom: '0.25rem',
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  borderRadius: '6px',
  border: '1px solid #aaa',
  fontFamily: 'Fira Sans',
  fontSize: '1rem',
  boxSizing: 'border-box',
};

const submitButton = {
  backgroundColor: '#dcc0e5',
  color: '#413b42',
  fontWeight: 'bold',
  padding: '0.75rem 1.5rem',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  width: '100%',
  fontSize: '1rem',
  marginTop: '1rem',
};
