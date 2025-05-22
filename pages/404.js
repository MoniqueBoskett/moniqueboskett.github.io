import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Custom404() {
  return (
    <div style={pageStyle}>
      <Navbar />
      <div style={contentStyle}>
        <div style={imageWrapper}>
          <Image
            src="/images/elephant-404.png"
            alt="Lost Elephant"
            width={500}
            height={400}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>
        <h1 style={headingStyle}>Oops! You’ve wandered off the safari.</h1>
        <p style={paragraphStyle}>
          This isn’t where the herd’s headed — even our elephant is confused.
        </p>
        <Link href="/" passHref>
          <a style={buttonStyle}>🐘 Return to Home</a>
        </Link>
      </div>
    </div>
  );
}

// Styles
const pageStyle = {
  backgroundColor: '#dcc0e5',
  color: '#413b42',
  fontFamily: 'Fira Sans, sans-serif',
  padding: '2rem 1rem',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const contentStyle = {
  maxWidth: '700px',
  width: '100%',
  marginTop: '6rem',
  textAlign: 'center',
  padding: '0 1rem',
};

const imageWrapper = {
  width: '100%',
  maxWidth: '500px',
  margin: '0 auto',
};

const headingStyle = {
  fontSize: '2rem',
  marginTop: '1.5rem',
};

const paragraphStyle = {
  fontSize: '1.1rem',
  margin: '1rem 0 2rem',
  lineHeight: 1.5,
};

const buttonStyle = {
  backgroundColor: '#413b42',
  color: '#fff',
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 'bold',
  display: 'inline-block',
  fontSize: '1rem',
};
