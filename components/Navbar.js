// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <header style={headerStyle}>
      <Link href="/" style={logoLinkStyle}>
        <img
          src="/monique-logo.png"
          alt="Monique Boskett Logo"
          style={logoImageStyle}
        />
        <span style={nameStyle}>Monique Boskett</span>
      </Link>
    </header>
  );
};

// === Styles ===
const headerStyle = {
  backgroundColor: '#dcc0e5', // soft lavender
  padding: '1rem 2rem',
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1000,
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
};

const logoLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
};

const logoImageStyle = {
  height: '40px',
  marginRight: '0.75rem',
};

const nameStyle = {
  fontSize: '1.25rem',
  fontWeight: '600',
  color: '#413b42', // dark grey
  fontFamily: 'Fira Sans, sans-serif',
};

export default Navbar;
