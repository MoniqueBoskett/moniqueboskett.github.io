// components/BackToTopButton.js
import { useEffect, useRef, useState } from 'react';

const COLORS = {
  bg: '#eee8f0',
  hover: '#dcc0e5',
  text: '#413b42'
};

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 200);
        ticking.current = false;
      });
    };

    // Initial check (in case user lands mid-page)
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const handleClick = () => {
    if (prefersReduced) window.scrollTo(0, 0);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        backgroundColor: hovered ? COLORS.hover : COLORS.bg,
        color: COLORS.text,
        border: 'none',
        borderRadius: '50%',
        width: 48,
        height: 48,
        fontSize: '1.25rem',
        lineHeight: 1,
        cursor: 'pointer',
        boxShadow: hovered ? '0 4px 10px rgba(0,0,0,0.25)' : '0 2px 6px rgba(0,0,0,0.18)',
        transform: hovered ? 'scale(1.06)' : 'scale(1)',
        transition: 'transform 120ms ease, box-shadow 120ms ease, background-color 120ms ease',
        zIndex: 999
      }}
      aria-label="Back to Top"
      title="Back to Top"
    >
      ↑
    </button>
  );
}
