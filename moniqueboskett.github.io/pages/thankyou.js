import Layout from '../components/Layout';
import BackToTopButton from '../components/BackToTopButton';

export default function ThankYou() {
  return (
    <Layout>
      <section style={pageStyle}>
        <img
          src="/monique-logo.png"
          alt="Monique Boskett Logo"
          loading="lazy"
          style={logoStyle}
        />
        <h1 style={headingStyle}>Thank You! 💌</h1>
        <p style={messageStyle}>
          Your message has been sent. I appreciate you reaching out and will get back to you as soon as possible!
        </p>
        <BackToTopButton />
      </section>
    </Layout>
  );
}

// Styles
const pageStyle = {
  color: '#413b42',
  fontFamily: 'Fira Sans',
  minHeight: '100vh',
  padding: '2rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const logoStyle = {
  width: '120px',
  height: 'auto',
  marginBottom: '2rem',
};

const headingStyle = {
  fontSize: '2.25rem',
  marginBottom: '1rem',
};

const messageStyle = {
  fontSize: '1.15rem',
  maxWidth: '600px',
  lineHeight: 1.6,
};
