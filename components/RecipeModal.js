// components/RecipeModal.js
import { useEffect, useRef, useState, useCallback } from 'react';

const COLORS = {
  bgCard: '#eee8f0',
  accent: '#dcc0e5',
  text: '#413b42'
};

export default function RecipeModal({ recipe, onClose }) {
  const [index, setIndex] = useState(0);
  const startXRef = useRef(null);

  const media = recipe?.media || [];
  const current = media[index];

  const clamp = (i) => (!media.length ? 0 : (i + media.length) % media.length);
  const next = useCallback(() => setIndex((i) => clamp(i + 1)), [media.length]);
  const prev = useCallback(() => setIndex((i) => clamp(i - 1)), [media.length]);

  // Close on ESC + arrow navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prevOverflow; };
  }, []);

  // Touch swipe
  const onTouchStart = (e) => { startXRef.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (startXRef.current == null) return;
    const dx = e.changedTouches[0].clientX - startXRef.current;
    if (dx < -40) next();
    if (dx > 40) prev();
    startXRef.current = null;
  };

  if (!recipe) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${recipe.title} gallery`}
      onClick={onClose}
      style={overlayStyle}
    >
      <div onClick={(e) => e.stopPropagation()} style={shellStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h2 style={{ margin: 0, fontSize: '1.1rem' }}>{recipe.title}</h2>
          <button onClick={onClose} aria-label="Close" style={closeBtn}>×</button>
        </div>

        {/* Viewport — sized to match Personal/Travel feel */}
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={viewportStyle}
        >
          {/* Nav arrows */}
          <button onClick={prev} aria-label="Previous" style={navBtn('left')}>‹</button>
          <button onClick={next} aria-label="Next" style={navBtn('right')}>›</button>

          {/* Media wrapper with fixed max height and contain */}
          <div style={mediaFrame}>
            {current?.type === 'video' ? (
              <video
                key={current.src}                /* force remount */
                src={current.src}
                poster={current.poster}
                autoPlay
                muted
                playsInline
                controls
                preload="metadata"
                style={mediaEl}
              />
            ) : (
              <img
                key={current?.src}
                src={current?.src}
                alt={current?.alt || current?.caption || recipe.title}
                loading="eager"
                style={mediaEl}
              />
            )}
          </div>

          {/* Dots below the media, above caption */}
          <div style={dotsRow}>
            {media.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to item ${i + 1}`}
                onClick={() => setIndex(i)}
                style={dot(i === index)}
              />
            ))}
          </div>
        </div>

        {/* Caption under media */}
        {current?.caption && <div style={captionBox}>{current.caption}</div>}
      </div>
    </div>
  );
}

/* ---------- Styles ---------- */

const overlayStyle = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '1rem'
};

const shellStyle = {
  width: 'min(980px, 100%)',
  maxHeight: '92vh',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  background: COLORS.bgCard,
  color: COLORS.text,
  borderRadius: 12,
  boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
  overflow: 'hidden'
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.6rem 0.9rem',
  borderBottom: '1px solid rgba(0,0,0,0.06)'
};

const closeBtn = {
  border: 'none',
  background: '#413b42',
  color: '#fff',
  borderRadius: '50%',
  width: 32,
  height: 32,
  fontSize: '1.25rem',
  cursor: 'pointer'
};

const viewportStyle = {
  position: 'relative',
  background: COLORS.bgCard,
  padding: '0.5rem 0.75rem 0.25rem',
  display: 'grid',
  justifyItems: 'center',
  alignItems: 'center',
  zIndex: 1
};

// Frame that constrains media to a friendly size (similar to other pages)
const mediaFrame = {
  width: '100%',
  maxWidth: 860,
  maxHeight: '60vh',
  display: 'grid',
  placeItems: 'center',
  background: '#eee8f0',
  borderRadius: 8,
  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
  overflow: 'hidden'
};

// The actual media element uses contain so nothing overflows
const mediaEl = {
  maxWidth: '100%',
  maxHeight: '60vh',
  objectFit: 'contain',
  borderRadius: 6
};

const navBtn = (side) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  [side]: 8,
  zIndex: 2,
  border: 'none',
  background: '#dcc0e5',
  color: '#413b42',
  padding: '0.35rem 0.6rem',
  borderRadius: 10,
  opacity: 0.95,
  cursor: 'pointer',
  fontSize: '1.5rem',
  fontWeight: 700
});

const dotsRow = {
  marginTop: '0.5rem',
  display: 'flex',
  gap: 8,
  justifyContent: 'center'
};

const dot = (active) => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  border: 'none',
  background: active ? '#413b42' : 'rgba(65,59,66,0.35)',
  cursor: 'pointer'
});

const captionBox = {
  padding: '0.75rem 1rem',
  borderTop: '1px solid rgba(0,0,0,0.06)',
  background: COLORS.bgCard
};