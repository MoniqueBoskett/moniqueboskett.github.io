// pages/events.js
import React, { useRef, useEffect, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Navbar from '../components/Navbar';
import BackToTopButton from '../components/BackToTopButton';
import { Download } from 'lucide-react';

const totalPages = 16;
const pages = Array.from({ length: totalPages }, (_, i) => ({
  label: `Page ${i + 1}`,
  src: `/events/page${i + 1}.png`,
}));

export default function Events() {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') bookRef.current?.flipNext();
      if (e.key === 'ArrowLeft') bookRef.current?.flipPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div style={{ backgroundColor: '#dcc0e5', color: '#413b42', fontFamily: 'Fira Sans', paddingTop: '6rem' }}>
      <Navbar />
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Event Portfolio</h1>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <HTMLFlipBook
          width={600}
          height={800}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1536}
          maxShadowOpacity={0.3}
          showCover={false}
          mobileScrollSupport={true}
          onFlip={(e) => setCurrentPage(e.data)}
          ref={bookRef}
          style={{ margin: '0 2rem' }}
        >
          {pages.map((page, i) => (
            <div key={i} className="page">
              <img
                src={page.src}
                alt={page.label}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
              <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>{page.label}</div>
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
        {pages.map((page, i) => (
          <div
            key={i}
            onClick={() => bookRef.current.pageFlip().turnToPage(i)}
            style={{
              border: i === currentPage ? '3px solid #413b42' : '1px solid #aaa',
              padding: '4px',
              cursor: 'pointer',
              backgroundColor: '#eee8f0',
              textAlign: 'center'
            }}
          >
            <img
              src={page.src}
              alt={page.label}
              style={{ width: '60px', height: '80px', objectFit: 'cover', display: 'block', marginBottom: '4px' }}
            />
            <span style={{ fontSize: '0.75rem' }}>{page.label}</span>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <a
          href="/Monique_Boskett_Event_Portfolio.pdf"
          download
          style={{
            backgroundColor: '#413b42',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            fontWeight: 'bold',
          }}
        >
          <Download size={18} style={{ marginRight: '0.5rem' }} /> Download Full PDF
        </a>
      </div>

      <BackToTopButton />
    </div>
  );
}