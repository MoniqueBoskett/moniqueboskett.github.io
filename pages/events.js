import React, { useRef, useEffect, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import BackToTopButton from '../components/BackToTopButton';
import GoogleAnalytics from '../components/GoogleAnalytics';
import MicrosoftClarity from '../components/MicrosoftClarity';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Download } from 'lucide-react';
import { headingStyle, sectionStyle } from '../styles/styles';

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
    <section style={{ ...sectionStyle, backgroundColor: '#eee8f0' }} aria-label="Event Portfolio">
      <h1 style={headingStyle}>Event Portfolio</h1>

      <p style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '1rem' }}>
        Viewing Page {currentPage + 1} of {totalPages}
      </p>

      <div style={flipbookWrapper}>
        <HTMLFlipBook
          width={500}
          height={700}
          size="stretch"
          minWidth={260}
          maxWidth={800}
          minHeight={400}
          maxHeight={1400}
          maxShadowOpacity={0.3}
          showCover={false}
          mobileScrollSupport={true}
          onFlip={(e) => setCurrentPage(e.data)}
          ref={bookRef}
          style={{ width: '100%', maxWidth: '85vw' }}
        >
          {pages.map((page, i) => (
            <div key={i} className="page" role="button" aria-label={`View ${page.label}`} tabIndex={0}>
              <img
                src={page.src}
                alt={`Event portfolio ${page.label}`}
                loading="lazy"
                decoding="async"
                style={imageStyle}
              />
              <div style={pageLabel}>{page.label}</div>
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      <div style={thumbnailGrid} aria-label="Page Thumbnails">
        {pages.map((page, i) => (
          <div
            key={i}
            onClick={() => {
              window.va?.track('flipbook_page_click', { page: i + 1 });
              bookRef.current.pageFlip().turnToPage(i);
            }}
            onKeyDown={(e) => e.key === 'Enter' && bookRef.current.pageFlip().turnToPage(i)}
            tabIndex={0}
            role="button"
            aria-label={`Go to ${page.label}`}
            style={{
              ...thumbnailItem,
              border: i === currentPage ? '3px solid #413b42' : '1px solid #aaa',
            }}
          >
            <img
              src={page.src}
              alt={`Thumbnail ${page.label}`}
              loading="lazy"
              decoding="async"
              style={thumbnailImage}
            />
            <span style={thumbnailLabel}>{page.label}</span>
          </div>
        ))}
      </div>

      <div style={downloadWrapper}>
        <a
          href="/Monique_Boskett_Event_Portfolio.pdf"
          download
          style={{ ...downloadButton, ...downloadButtonHover }}
          aria-label="Download Full PDF"
          onClick={() => window.va?.track('download_portfolio_pdf')}
        >
          <Download size={18} style={{ marginRight: '0.5rem' }} /> Download Full PDF
        </a>
      </div>

      <BackToTopButton />
      <GoogleAnalytics />
      <Analytics />
      <MicrosoftClarity />
      <SpeedInsights />
    </section>
  );
}

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
  padding: '0 1rem',
  overflowX: 'auto',
};

const thumbnailItem = {
  padding: '4px',
  cursor: 'pointer',
  backgroundColor: '#eee8f0',
  textAlign: 'center',
  borderRadius: '6px',
  width: '70px',
  flexShrink: 0,
  outline: 'none',
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
  transition: 'background-color 0.3s ease',
};

const downloadButtonHover = {
  ':hover': {
    backgroundColor: '#5a4b5d',
  },
};
