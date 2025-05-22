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
    <div style={pageStyle}>
      <Navbar />
      <h1 style={headingStyle}>Event Portfolio</h1>

      <div style={flipbookWrapper}>
        <HTMLFlipBook
          width={600}
          height={800}
          size="stretch"
          minWidth={280}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1536}
          maxShadowOpacity={0.3}
          showCover={false}
          mobileScrollSupport={true}
          onFlip={(e) => setCurrentPage(e.data)}
          ref={bookRef}
          style={{ width: '100%', maxWidth: '95vw' }}
        >
          {pages.map((page, i) => (
            <div key={i} className="page">
              <img src={page.src} alt={page.label} style={imageStyle} />
              <div style={pageLabel}>{page.label}</div>
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      <div style={thumbnailGrid}>
        {pages.map((page, i) => (
          <div
            key={i}
            onClick={() => bookRef.current.pageFlip().turnToPage(i)}
            style={{
              ...thumbnailItem,
              border: i === currentPage ? '3px solid #413b42' : '1px solid #aaa',
            }}
          >
            <img src={page.src} alt={page.label} style={thumbnailImage} />
            <span style={thumbnailLabel}>{page.label}</span>
          </div>
        ))}
      </div>

      <div style={downloadWrapper}>
        <a href="/Monique_Boskett_Event_Portfolio.pdf" download style={downloadButton}>
          <Download size={18} style={{ marginRight: '0.5rem' }} /> Download Full PDF
        </a>
      </div>

      <BackToTopButton />
    </div>
  );
}

// Styles
const pageStyle = {
  backgroundColor: '#dcc0e5',
  color: '#413b42',
  fontFamily: 'Fira Sans',
  padding: '2rem 1rem',
  paddingTop: '6rem',
  minHeight: '100vh',
  boxSizing: 'border-box',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '2.5rem',
  marginBottom: '1.5rem',
};

const flipbookWrapper = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
  width: '100%',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
};

const pageLabel = {
  textAlign: 'center',
  marginTop: '0.5rem',
  fontSize: '0.9rem',
};

const thumbnailGrid = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '0.5rem',
  marginBottom: '2rem',
};

const thumbnailItem = {
  padding: '4px',
  cursor: 'pointer',
  backgroundColor: '#eee8f0',
  textAlign: 'center',
  borderRadius: '6px',
  width: '70px',
  flexShrink: 0,
};

const thumbnailImage = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  display: 'block',
  marginBottom: '4px',
  borderRadius: '4px',
};

const thumbnailLabel = {
  fontSize: '0.75rem',
};

const downloadWrapper = {
  textAlign: 'center',
  marginBottom: '3rem',
};

const downloadButton = {
  backgroundColor: '#413b42',
  color: '#fff',
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  fontWeight: 'bold',
  fontSize: '1rem',
};
