// components/Navbar.js
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const COLORS = {
  bg: "#413b42",
  text: "#eee8f0",
  ring: "#eee8f0",
};

const AUTO_CLOSE_MS = 5000;

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const timerRef = useRef(null);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Resume", path: "/resume" },
    { label: "Events", path: "/events" },
    { label: "Marketing", path: "/marketing" },
    { label: "Personal", path: "/personal" },
    { label: "Travel", path: "/travel" },
    { label: "Charities", path: "/charities" },
    { label: "Recipes", path: "/recipes" },
    { label: "Contact Me", path: "/contact" },
  ];

  const closeMenu = (returnFocus = false) => {
    setMenuOpen(false);
    if (returnFocus) {
      try { triggerRef.current?.querySelector("button, [role='button']")?.focus(); } catch {}
    }
  };
  const toggleMenu = () => setMenuOpen((v) => !v);

  useEffect(() => {
    const onRoute = () => closeMenu();
    router.events.on("routeChangeComplete", onRoute);
    return () => router.events.off("routeChangeComplete", onRoute);
  }, [router.events]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) closeMenu(); };
    const onScroll = () => closeMenu();
    const onKey = (e) => { if (e.key === "Escape") closeMenu(true); };
    const onDocClick = (e) => {
      const insideMenu = menuRef.current?.contains(e.target);
      const insideTrigger = triggerRef.current?.contains(e.target);
      if (!insideMenu && !insideTrigger) closeMenu();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDocClick);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prev || "";
    return () => { document.body.style.overflow = prev || ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!AUTO_CLOSE_MS) return;
    if (menuOpen) timerRef.current = setTimeout(() => closeMenu(), AUTO_CLOSE_MS);
    else clearTimeout(timerRef.current);
    return () => clearTimeout(timerRef.current);
  }, [menuOpen]);

  const onMenuFocusIn = () => { if (AUTO_CLOSE_MS) clearTimeout(timerRef.current); };
  const onMenuFocusOut = () => {
    if (!AUTO_CLOSE_MS) return;
    if (menuOpen) {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => closeMenu(), AUTO_CLOSE_MS);
    }
  };
  const onMenuTextKey = (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleMenu(); }
  };

  return (
    <header className="nav-header">
      <div className="nav-topbar">
        {/* Left: Menu + hamburger */}
        <div className="nav-left" ref={triggerRef}>
          <span
            role="button"
            tabIndex={0}
            aria-controls="primary-nav"
            aria-expanded={menuOpen}
            className="menu-text"
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
            className="hamburger-btn"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Center: logo */}
        <div className="nav-center">
          <Link href="/" className="logo-link">
            <img src="/monique-logo.png" alt="Monique Boskett Logo" className="logo-img" />
          </Link>
        </div>

        {/* Right: theme choice */}
        <div className="nav-right">
          <ThemeToggle />
        </div>
      </div>

      {/* Dropdown */}
      <nav
        id="primary-nav"
        ref={menuRef}
        onFocus={onMenuFocusIn}
        onBlur={onMenuFocusOut}
        className={`nav-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={menuOpen ? "false" : "true"}
      >
        {navItems.map((item) => {
          const isActive = router.pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => closeMenu(true)}
              aria-current={isActive ? "page" : undefined}
              className={`nav-link ${isActive ? "active" : ""}`}
              style={{ opacity: menuOpen ? 1 : 0, transition: "opacity 0.25s ease 0.1s" }}
            >
              <span className="nav-link-text">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <style jsx>{`
        .nav-header {
          position: fixed; top: 0; width: 100%; z-index: 1000;
          background: ${COLORS.bg}; color: ${COLORS.text};
          border-bottom: 1px solid rgba(0,0,0,0.15);
          box-shadow: 0 1px 4px rgba(0,0,0,0.12);
        }

        /* Taller bar (back to your original feel) */
        .nav-topbar {
          position: relative;
          display: flex;
          align-items: center;                 /* vertical centering for everything */
          justify-content: space-between;
          padding: 0.9rem 1rem;                /* a bit taller */
        }

        .nav-left {
          display: inline-flex; align-items: center; gap: 0.5rem;
          line-height: 1;                      /* prevent baseline oddities */
        }
        .menu-text {
          color: ${COLORS.text}; font-weight: 700; font-size: 1rem; cursor: pointer;
          padding: 0.25rem 0.4rem; border-radius: 8px; vertical-align: middle;
        }
        .menu-text:hover { background: rgba(255,255,255,0.06); }
        .hamburger-btn {
          background: transparent; border: none; color: ${COLORS.text};
          cursor: pointer; border-radius: 8px; padding: 0.2rem; vertical-align: middle;
        }
        .hamburger-btn:hover { background: rgba(255,255,255,0.06); }

        .nav-center { position: absolute; left: 50%; transform: translateX(-50%); }
        .logo-img {
          height: 62px; width: 62px; object-fit: cover; border-radius: 9999px;   /* slightly larger */
          background: rgba(255,255,255,0.06); border: 2px solid ${COLORS.ring};
          box-shadow: 0 0 0 2px rgba(0,0,0,0.25);
        }

        .nav-right {
          display: inline-flex; align-items: center; justify-content: flex-end;
          min-width: 260px;
          white-space: nowrap;
          flex: 0 1 auto;                      /* allow slight shrink on tiny screens */
        }

        /* Force ThemeToggle's radios to stack with centered labels (no change to its file needed) */
        :global(.theme-toggle) { display: inline-flex; gap: 1.1rem; align-items: center; }
        :global(.theme-toggle .theme-option) {
          display: inline-flex;
          flex-direction: column;              /* circle above word */
          align-items: center;                 /* centered horizontally */
          gap: 0.35rem;
        }
        :global(.theme-toggle .radio) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;                      /* ensure true centering */
        }
        :global(.theme-toggle .label) {
          text-align: center;                  /* center the word under the circle */
          line-height: 1.1;
          font-weight: 700;
        }

        .nav-menu {
          display: flex; flex-direction: column; align-items: flex-start;
          background: ${COLORS.bg}; overflow: hidden; max-height: 0; padding: 0 1rem;
          transition: max-height 0.35s ease, padding 0.25s ease;
          border-bottom: 1px solid rgba(0,0,0,0.15);
        }
        .nav-menu.open { max-height: 600px; padding: 1rem 1rem 1.5rem; gap: 1rem; }

        .nav-link { text-decoration: none; width: 100%; padding: 0.75rem 0; border-radius: 6px; }
        .nav-link:hover { background: rgba(255,255,255,0.08); }
        .nav-link.active .nav-link-text { text-decoration: underline; }

        .nav-link-text { color: ${COLORS.text}; font-size: 1rem; font-weight: 600; line-height: 1; }

        /* Tiny screens: scale the toggle a bit so it stays to the right of the logo */
        @media (max-width: 420px) {
          :global(.theme-toggle) {
            transform: scale(0.92);
            transform-origin: right center;
          }
        }
      `}</style>
    </header>
  );
}
