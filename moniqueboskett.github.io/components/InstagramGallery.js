// components/InstagramGallery.js
import { useEffect, useMemo, useRef } from 'react';

const COLORS = {
  card: '#eee8f0',
  text: '#413b42'
};

export default function InstagramGallery({ postUrls = [] }) {
  const containerRef = useRef(null);
  const processedRef = useRef(new Set()); // track processed blockquotes
  const observersRef = useRef([]);

  // Normalize unique URLs (avoid duplicate embeds)
  const urls = useMemo(() => Array.from(new Set(postUrls.filter(Boolean))), [postUrls]);

  // Load IG script once
  useEffect(() => {
    if (!urls.length) return;

    if (!document.getElementById('ig-embed')) {
      const s = document.createElement('script');
      s.id = 'ig-embed';
      s.src = 'https://www.instagram.com/embed.js';
      s.async = true;
      s.onload = () => {
        // Try a first pass if content is already mounted
        try { window.instgrm?.Embeds?.process(); } catch {}
      };
      document.body.appendChild(s);
    } else {
      // If script already present, request a (light) reprocess
      try { window.instgrm?.Embeds?.process(); } catch {}
    }
  }, [urls.length]);

  // IntersectionObserver: process individual embeds only when visible
  useEffect(() => {
    if (!urls.length || !containerRef.current) return;

    // Clean up prior observers
    observersRef.current.forEach((obs) => obs.disconnect());
    observersRef.current = [];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (processedRef.current.has(el)) return;

          // Mark and process just this one
          processedRef.current.add(el);
          try { window.instgrm?.Embeds?.process?.(); } catch {}

          // Stop observing this element
          io.unobserve(el);
        });
      },
      { root: null, rootMargin: '200px', threshold: 0 }
    );

    // Observe each blockquote
    const blocks = containerRef.current.querySelectorAll('blockquote.instagram-media');
    blocks.forEach((b) => io.observe(b));
    observersRef.current.push(io);

    return () => {
      io.disconnect();
      observersRef.current = [];
    };
  }, [urls]);

  if (!urls.length) return null;

  return (
    <section style={{ marginTop: '3rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '0.5rem', color: COLORS.text }}>From Instagram</h2>
      <p style={{ textAlign: 'center', marginTop: 0, color: COLORS.text }}>
        Latest from <strong>#CookingWithMonique</strong>
      </p>

      <div
        ref={containerRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.25rem'
        }}
      >
        {urls.map((url) => (
          <blockquote
            key={url}
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{
              background: '#fff',
              borderRadius: '12px',
              padding: 0,
              margin: 0,
              boxShadow: '0 2px 10px rgba(0,0,0,0.06)'
            }}
          />
        ))}
      </div>

      {/* Note: Instagram embeds load third-party resources; they may affect page speed. */}
      <noscript>
        View posts on Instagram: #CookingWithMonique
      </noscript>
    </section>
  );
}
