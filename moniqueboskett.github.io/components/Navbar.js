// components/Navbar.js
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';

const COLORS = {
  bg: '#413b42',
  textLight: '#eee8f0'
};

const AUTO_CLOSE_MS = 5000; // keep your auto-close; set to 0 to disable

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const timerRef = useRef(null);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Resume', path: '/resume' },
    { label: 'Events', path: '/events' },
    { label: 'Marketing', path: '/marketing' },
    { label: 'Personal', path: '/personal' },
    { label: 'Travel', path: '/travel' },
    { label: 'Charities', path: '/charities' },
    { label: 'Recipes', path: '/recipes' }, // after Charities
    { label: 'Contact Me', path: '/contact' }
  ];

  const closeMenu = (returnFocus = false) => {
    setMenuOpen(false);
    if (returnFocus) {
      try { triggerRef.current?.querySelector('button, [role="button"]')?.focus(); } catch {}
    }
  };

  const toggleMenu = () => setMenuOpen((v) => !v);

  // Close on route change
  useEffect(() => {
    const onRoute = () => closeMenu();
    router.events.on('routeChangeComplete', onRoute);
    return () => router.events.off('routeChangeComplete', onRoute);
  }, [router.events]);

  // Outside click + ESC + resize + scroll
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) closeMenu(); };
    const onScroll = () => closeMenu();
    const onKey = (e) => { if (e.key === 'Escape') closeMenu(true); };
    const onDocClick = (e) => {
      const insideMenu = menuRef.current?.contains(e.target);
      const insideTrigger = triggerRef.current?.contains(e.target);
      if (!insideMenu && !insideTrigger) closeMenu();
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDocClick);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDocClick);
    };
  }, []);

  // Body scroll lock when menu open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = prev || '';
    return () => { document.body.style.overflow = prev || ''; };
  }, [menuOpen]);

  // Auto-close timer (paused while focusing inside menu)
  useEffect(() => {
    if (!AUTO_CLOSE_MS) return;
    if (menuOpen) {
      timerRef.current = setTimeout(() => closeMenu(), AUTO_CLOSE_MS);
    } else {
      clearTimeout(timerRef.current);
    }
    return () => clearTimeout(timerRef.current);
  }, [menuOpen]);

  // Pause auto-close while interacting inside menu
  const onMenuFocusIn = () => { if (AUTO_CLOSE_MS) clearTimeout(timerRef.current); };
  const onMenuFocusOut = () => {
    if (!AUTO_CLOSE_MS) return;
    // restart only if still open
    if (menuOpen) {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => closeMenu(), AUTO_CLOSE_MS);
    }
  };

  // Keyboard support for “Menu” text
  const onMenuTextKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMenu(); }
  };

  return (
    <header style={styles.header}>
      <div style={styles.topBar}>
        <div style={styles.menuLabel} ref={triggerRef}>
          <span
            role="button"
            tabIndex={0}
            aria-controls="primary-nav"
            aria-expanded={menuOpen}
            style={styles.menuText}
            onClick={toggleMenu}
            onKeyDown={onMenuTextKey}
          >
            Menu
          </span>

          <button
            aria-label="Toggle menu"
            aria-controls="primary-nav"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
            style={styles.hamburgerButton}
          >
            {menuOpen ? <X size={28} color={COLORS.textLight} /> : <Menu size={28} color={COLORS.textLight} />}
          </button>
        </div>

        <div style={styles.logoWrapper}>
          <Link href="/" style={styles.logoLink}>
            <img src="/monique-logo.png" alt="Monique Boskett Logo" style={styles.logoImage} />
          </Link>
        </div>
      </div>

      <nav
        id="primary-nav"
        ref={menuRef}
        onFocus={onMenuFocusIn}
        onBlur={onMenuFocusOut}
        style={{
          ...styles.navMenu,
          maxHeight: menuOpen ? '500px' : '0px',
          padding: menuOpen ? '1rem 1.5rem' : '0 1.5rem',
        }}
      >
        {navItems.map((item) => {
          const isActive = router.pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => closeMenu(true)}
              aria-current={isActive ? 'page' : undefined}
              style={{
                ...styles.link,
                ...(isActive ? styles.activeLink : {}),
                opacity: menuOpen ? 1 : 0,
                transition: 'opacity 0.25s ease 0.1s'
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: COLORS.bg,
    zIndex: 1000,
    fontFamily: 'Fira Sans, sans-serif',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
  },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.5rem 1.25rem',
    position: 'relative'
  },
  menuLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    position: 'relative'
  },
  menuText: {
    color: COLORS.textLight,
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    userSelect: 'none',
    outline: 'none'
  },
  hamburgerButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1100
  },
  logoWrapper: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  logoLink: { display: 'inline-block' },
  logoImage: { height: '60px', width: 'auto' },
  navMenu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: COLORS.bg,
    overflow: 'hidden',
    transition: 'max-height 0.35s ease, padding 0.25s ease'
  },
  link: {
    color: COLORS.textLight,
    fontSize: '1.15rem',
    textDecoration: 'none',
    fontWeight: 500,
    padding: '0.5rem 0',
    width: '100%'
  },
  activeLink: { textDecoration: 'underline' }
};
