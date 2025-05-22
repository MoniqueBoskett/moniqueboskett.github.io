// pages/thankyou.js
import Navbar from '../components/Navbar';
import BackToTopButton from '../components/BackToTopButton';

export default function ThankYou() {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: '#dcc0e5',
          color: '#413b42',
          fontFamily: 'Fira Sans',
          minHeight: '100vh',
          padding: '2rem',
          paddingTop: '6rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <img
          src="/monique-logo.png"
          alt="Monique Boskett Logo"
          style={{
            width: '120px',
            height: 'auto',
            marginBottom: '2rem',
          }}
        />
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Thank You! 💌</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
          Your message has been sent. I appreciate you reaching out and will get back to you as soon as possible!
        </p>
        <BackToTopButton />
      </div>
    </>
  );
}