// pages/contact.js
import Navbar from '../components/Navbar';
import BackToTopButton from '../components/BackToTopButton';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div style={pageStyle}>
        <h1 style={titleStyle}>Get in Touch 💌</h1>
        <p style={descriptionStyle}>
          Have a question, collaboration idea, or just want to say hello? Fill out the form below and I&apos;ll get back to you!
        </p>

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
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
};

const titleStyle = {
  fontSize: '2.5rem',
  marginBottom: '1rem',
  textAlign: 'center',
};

const descriptionStyle = {
  maxWidth: '600px',
  width: '100%',
  textAlign: 'center',
  marginBottom: '2rem',
  fontSize: '1.1rem',
  padding: '0 1rem',
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
