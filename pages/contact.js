// pages/contact.js
import Navbar from '../components/Navbar';
import BackToTopButton from '../components/BackToTopButton';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: '#dcc0e5',
          color: '#413b42',
          fontFamily: 'Fira Sans',
          padding: '2rem',
          paddingTop: '6rem',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
          Get in Touch 💌
        </h1>
        <p style={{ maxWidth: '600px', textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Have a question, collaboration idea, or just want to say hello? Fill out the form below and I'll get back to you!
        </p>

        <form
          action="https://formspree.io/f/xqkrvjoz"
          method="POST"
          style={{
            backgroundColor: '#eee8f0',
            padding: '2rem',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '100%',
          }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name" style={{ fontWeight: 'bold' }}>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="message" style={{ fontWeight: 'bold' }}>Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              style={{ ...inputStyle, resize: 'vertical' }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#dcc0e5',
              color: '#413b42',
              fontWeight: 'bold',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Send Message
          </button>
        </form>

        <BackToTopButton />
        <Analytics />
        <SpeedInsights />
      </div>
    </>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  marginTop: '0.25rem',
  borderRadius: '6px',
  border: '1px solid #aaa',
  fontFamily: 'Fira Sans',
};
