import { useState, useEffect } from 'react';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200); // show button after 200px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null; // don't render the button if not visible

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        backgroundColor: hovered ? '#d2bada' : '#eee8f0',
        color: '#413b42',
        border: 'none',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        fontSize: '1.25rem',
        cursor: 'pointer',
        boxShadow: hovered
          ? '0 4px 10px rgba(0,0,0,0.3)'
          : '0 2px 6px rgba(0,0,0,0.2)',
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'all 0.2s ease-in-out',
        zIndex: 999,
      }}
      aria-label="Back to Top"
    >
      ↑
    </button>
  );
}
