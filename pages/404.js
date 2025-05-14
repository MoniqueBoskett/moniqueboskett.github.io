// pages/404.js
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Custom404() {
  return (
    <div style={{ backgroundColor: '#dcc0e5', color: '#413b42', fontFamily: 'Fira Sans', padding: '2rem', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ maxWidth: '700px', margin: '4rem auto', textAlign: 'center' }}>
        <Image
          src="/images/elephant-404.png" // make sure you move your image to public/images/ folder
          alt="Lost Elephant"
          width={500}
          height={400}
        />
        <h1 style={{ fontSize: '2.5rem', marginTop: '1.5rem' }}>Oops! You’ve wandered off the safari.</h1>
        <p style={{ fontSize: '1.2rem', margin: '1rem 0 2rem' }}>
          This isn’t where the herd’s headed — even our elephant is confused.
        </p>
        <Link href="/" style={{
          backgroundColor: '#413b42',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          display: 'inline-block'
        }}>
          🐘 Return to Home
        </Link>
      </div>
    </div>
  );
}
