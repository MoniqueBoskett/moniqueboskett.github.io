import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Resume', path: '/resume' },
    { label: 'Events', path: '/events' },
    { label: 'Personal', path: '/personal' },
    { label: 'Travel', path: '/travel' },
    { label: 'Charities', path: '/charities' },
    { label: 'Contact Me', path: '/contact' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Hamburger Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={styles.hamburgerButton}>
          {menuOpen ? <X size={28} color="#eee8f0" /> : <Menu size={28} color="#eee8f0" />}
        </button>

        {/* Centered Logo */}
        <div style={styles.logoWrapper}>
          <Link href="/" style={styles.logoLink}>
            <img src="/monique-logo.png" alt="Monique Boskett Logo" style={styles.logoImage} />
          </Link>
        </div>
      </div>

      {/* Slide-down Menu */}
      <div
        style={{
          ...styles.navMenu,
          maxHeight: menuOpen ? '500px' : '0px',
          padding: menuOpen ? '1rem 1.5rem' : '0 1.5rem',
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={() => setMenuOpen(false)}
            style={{
              ...styles.link,
              ...(router.pathname === item.path ? styles.activeLink : {}),
              opacity: menuOpen ? 1 : 0,
              transition: 'opacity 0.3s ease 0.1s',
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: '#413b42',
    zIndex: 1000,
    fontFamily: 'Fira Sans, sans-serif',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    padding: '0.75rem 1.25rem',
  },
  hamburgerButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1100,
  },
  logoWrapper: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  logoLink: {
    display: 'inline-block',
  },
  logoImage: {
    height: '60px',
    width: 'auto',
  },
  navMenu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#413b42',
    overflow: 'hidden',
    transition: 'max-height 0.4s ease, padding 0.3s ease',
  },
  link: {
    color: '#eee8f0',
    fontSize: '1.15rem',
    textDecoration: 'none',
    fontWeight: 500,
    padding: '0.5rem 0',
    width: '100%',
  },
  activeLink: {
    textDecoration: 'underline',
  },
};
