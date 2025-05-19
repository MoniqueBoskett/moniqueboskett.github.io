// pages/contact.js
import Navbar from '../components/Navbar';
import BackToTopButton from '../components/BackToTopButton';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Contact() {
return (
<>
<Navbar />
<div style={{ backgroundColor: '#dcc0e5', color: '#413b42', fontFamily: 'Fira Sans', padding: '2rem', paddingTop: '6rem' }}>
<h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Let's Connect 💌</h1>
<p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.15rem' }}>
Whether you have questions about my work, want to collaborate, or just want to say hi — feel free to reach out!
</p>
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#eee8f0', padding: '2rem', borderRadius: '12px' }}>
      <form action="mailto:monique.boskett@gmail.com" method="POST" encType="text/plain">
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Name</label>
          <input type="text" id="name" name="name" required style={inputStyle} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Email</label>
          <input type="email" id="email" name="email" required style={inputStyle} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Message</label>
          <textarea id="message" name="message" rows="5" required style={inputStyle} />
        </div>
        <button type="submit" style={buttonStyle}>Send</button>
      </form>
    </div>

    <div style={{ textAlign: 'center', marginTop: '3rem', fontSize: '1.25rem' }}>
      <p>Or find me on social media:</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
        <a href="mailto:monique.boskett@gmail.com" title="Email" style={iconLink}><Mail size={28} /></a>
        <a href="https://www.linkedin.com/in/moniqueboskett" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={iconLink}><Linkedin size={28} /></a>
        <a href="https://www.instagram.com/monique_lynee" target="_blank" rel="noopener noreferrer" title="Instagram" style={iconLink}><Instagram size={28} /></a>
      </div>
    </div>

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
borderRadius: '8px',
border: '1px solid #aaa',
fontFamily: 'Fira Sans',
fontSize: '1rem',
};

const buttonStyle = {
backgroundColor: '#dcc0e5',
color: '#413b42',
padding: '0.75rem 1.5rem',
border: 'none',
borderRadius: '8px',
fontWeight: 'bold',
cursor: 'pointer',
fontSize: '1rem',
};

const iconLink = {
color: '#413b42',
display: 'inline-flex',
alignItems: 'center',
};