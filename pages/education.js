// pages/education.js
import Navbar from '../components/Navbar';
import BackToTopButton from '../components/BackToTopButton';

export default function Education() {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: '#dcc0e5',
          color: '#413b42',
          padding: '2rem',
          paddingTop: '6rem', // keeps content below navbar
          minHeight: '100vh',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Education</h1>

        <section
          style={{
            backgroundColor: '#eee8f0',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Temple University</h2>
          <p style={{ marginTop: '0.5rem', fontSize: '1.1rem' }}>
            <strong>B.A. in Strategic Communication</strong> &ndash; Graduated 2013
          </p>
        </section>

        <BackToTopButton />
      </div>
    </>
  );
}
