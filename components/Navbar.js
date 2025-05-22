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
        <div style={styles.leftGroup}>
          <Link href="/" style={styles.logoLink}>
            <img src="/monique-logo.png" alt="Monique Boskett Logo" style={styles.logoImage} />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={styles.hamburgerButton}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} color="#eee8f0" /> : <Menu size={28} color="#eee8f0" />}
          </button>
        </div>

        <nav style={{ ...styles.nav, display: menuOpen || window.innerWidth > 768 ? 'flex' : 'none' }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              style={{
                ...styles.link,
                ...(router.pathname === item.path ? styles.activeLink : {}),
              }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
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
    fontFamily: 'Fira Sans, sans-serif',
    flexWrap: 'wrap',
  },
  leftGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
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
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1.5rem',
    alignItems: 'center',
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
};

// Media Query Style Injection
if (typeof window !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
    @media (max-width: 768px) {
      nav {
        flex-direction: column !important;
        width: 100%;
        background-color: #413b42;
        padding: 1rem 0;
      }
      button[aria-label="Toggle menu"] {
        display: block !important;
      }
    }
  `;
  document.head.appendChild(styleTag);
}
