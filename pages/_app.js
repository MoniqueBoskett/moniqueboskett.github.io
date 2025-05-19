// pages/_app.js
import '../styles/globals.css';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react'; // ✅ Import Analytics

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#eee8f0',
          padding: '1rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
          borderBottom: '2px solid #ccc',
          zIndex: 1000,
        }}
      >
        <Link href="/" style={{ color: '#413b42', textDecoration: 'none' }}>Home</Link>
        <Link href="/personal" style={{ color: '#413b42', textDecoration: 'none' }}>Personal</Link>
        <Link href="/resume" style={{ color: '#413b42', textDecoration: 'none' }}>Resume</Link>
        <Link href="/events" style={{ color: '#413b42', textDecoration: 'none' }}>Events</Link>
        <Link href="/travel" style={{ color: '#413b42', textDecoration: 'none' }}>Travel</Link>
        <Link href="/charities" style={{ color: '#413b42', textDecoration: 'none' }}>Charities</Link>
      </nav>

      <main style={{ padding: '6rem 2rem 2rem' }}>
        <Component {...pageProps} />
        <Analytics /> {/* ✅ Add Analytics tracking */}
      </main>
    </>
  );
}

export default MyApp;
