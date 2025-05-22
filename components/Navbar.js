import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link href="/" style={styles.logoLink}>
          <img src="/monique-logo.png" alt="Monique Boskett Logo" style={styles.logoImage} />
        </Link>

        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} style={styles.hamburgerButton} aria-label="Toggle menu">
            {menuOpen ? <X size={28} color="#eee8f0" /> : <Menu size={28} color="#eee8f0" />}
          </button>
        )}

        {(menuOpen || !isMobile) && (
          <nav style={{ ...styles.nav, flexDirection: isMobile ? 'column' : 'row' }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                style={{
                  ...styles.link,
                  ...(router.pathname === item.path ? styles.activeLink : {}),
                }}
                onClick={() => isMobile && setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
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
    padding: '0.75rem 1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
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
  hamburgerButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  },
  nav: {
    display: 'flex',
    gap: '1.25rem',
    alignItems: 'center',
    width: '100%',
    marginTop: '1rem',
  },
  link: {
    color: '#eee8f0',
    fontSize: '1.1rem',
    textDecoration: 'none',
    fontWeight: 500,
    padding: '0.25rem 0',
    textAlign: 'center',
  },
  activeLink: {
    borderBottom: '2px solid #eee8f0',
  },
};
