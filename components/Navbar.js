import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Resume', path: '/resume' },
    { label: 'Events', path: '/events' },
    { label: 'Personal', path: '/personal' },
    { label: 'Travel', path: '/travel' },
    { label: 'Charities', path: '/charities' },
    { label: 'Contact Me', path: '/contact' },
  ];

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo */}
        <Link href="/" style={styles.logoLink}>
          <img src="/monique-logo.png" alt="Monique Boskett Logo" style={styles.logoImage} />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ ...styles.nav, display: isOpen ? 'none' : 'flex' }} className="nav-desktop">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              style={{
                ...styles.link,
                ...(router.pathname === item.path ? styles.activeLink : {}),
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} style={styles.hamburgerBtn}>
          {isOpen ? <X size={24} color="#eee8f0" /> : <Menu size={24} color="#eee8f0" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={styles.mobileMenu}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              style={{
                ...styles.mobileLink,
                ...(router.pathname === item.path ? styles.activeLink : {}),
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#413b42',
    zIndex: 1000,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0.75rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Fira Sans, sans-serif',
  },
  logoLink: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '48px',
    width: 'auto',
    cursor: 'pointer',
  },
  nav: {
    gap: '2rem',
    flexWrap: 'wrap',
  },
  link: {
    color: '#eee8f0',
    fontSize: '1.05rem',
    textDecoration: 'none',
    fontWeight: 500,
  },
  activeLink: {
    borderBottom: '2px solid #eee8f0',
    paddingBottom: '2px',
  },
  hamburgerBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'none',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#413b42',
    padding: '1rem',
  },
  mobileLink: {
    color: '#eee8f0',
    textDecoration: 'none',
    padding: '0.75rem 0',
    fontSize: '1.1rem',
    fontWeight: 500,
  },
};

// Media Query Styles (you’ll add these in global CSS or a module if needed)
if (typeof window !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
    @media (max-width: 768px) {
      .nav-desktop {
        display: none !important;
      }
    }

    @media (min-width: 769px) {
      button[style*="hamburgerBtn"] {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(styleTag);
}
