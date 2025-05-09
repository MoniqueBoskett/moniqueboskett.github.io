import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Resume', path: '/resume' },
    { label: 'Education', path: '/education' },
    { label: 'Personal', path: '/personal' },
    { label: 'Travel', path: '/travel' },
    { label: 'Charities', path: '/charities' },
  ];

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link href="/" style={styles.logoContainer}>
          <img
            src="/monique-logo.png"
            alt="Monique Boskett Logo"
            style={styles.logoImage}
          />
        </Link>
        <nav style={styles.nav}>
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
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#413b42', // dark grey background
    zIndex: 1000,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0.75rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Fira Sans, sans-serif',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '48px',
    width: 'auto',
    cursor: 'pointer',
  },
  nav: {
    display: 'flex',
    gap: '3rem', // increased spacing between nav items
  },
  link: {
    color: '#eee8f0', // cream color text
    fontSize: '1.1rem',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.2s ease',
  },
  activeLink: {
    borderBottom: '2px solid #eee8f0',
    paddingBottom: '2px',
  },
};
