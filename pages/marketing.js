// pages/marketing.js
import { useEffect, useState } from 'react';
import Script from 'next/script';
import BackToTopButton from '../components/BackToTopButton';
import GoogleAnalytics from '../components/GoogleAnalytics';
import MicrosoftClarity from '../components/MicrosoftClarity';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { marketingData } from '../data/marketingData';
import { layoutStyles, headingStyle } from '../styles/styles';

export default function Marketing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReels, setFilteredReels] = useState([]);
  const [modalIndex, setModalIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    const sorted = [...marketingData].sort((a, b) => new Date(b.date) - new Date(a.date));
    setFilteredReels(sorted);
  }, []);

  useEffect(() => {
    const lowerTerm = searchTerm.toLowerCase();
    const filtered = marketingData.filter(
      (reel) =>
        reel.caption.toLowerCase().includes(lowerTerm) ||
        reel.company.toLowerCase().includes(lowerTerm) ||
        reel.handle.toLowerCase().includes(lowerTerm)
    );
    setFilteredReels(filtered.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, [searchTerm]);

  const handleClick = (index) => {
    const link = filteredReels[index].link;
    if (window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Instagram Reel',
        event_label: link,
      });
    }
    setModalIndex(index);
  };

  const showNext = () => {
    setModalIndex((prev) => (prev + 1) % filteredReels.length);
  };

  const showPrevious = () => {
    setModalIndex((prev) => (prev - 1 + filteredReels.length) % filteredReels.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    if (deltaX > 50) showPrevious();
    else if (deltaX < -50) showNext();
    setTouchStartX(null);
  };

  return (
    <main style={layoutStyles.main}>
      <h1 style={headingStyle}>Marketing Reels</h1>

      <input
        type="text"
        placeholder="Search by description, handle, or company..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: '2rem',
          padding: '0.75rem 1rem',
          width: '100%',
          maxWidth: '500px',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '8px',
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem',
          paddingBottom: '4rem',
        }}
      >
        {filteredReels.map((reel, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={`https://www.instagram.com/p/${reel.link.split('/p/')[1]?.split('/')[0]}/media/?size=l`}
              alt={`Instagram reel preview - ${reel.caption}`}
              style={{ width: '100%', height: 'auto' }}
            />
            <div style={{ padding: '1rem', background: '#f9f9f9' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{reel.company}</p>
              <p style={{ marginBottom: '0.5rem' }}>{reel.caption.slice(0, 120)}...</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{reel.handle} — {reel.date}</p>
            </div>
          </div>
        ))}
      </div>

      {modalIndex !== null && (
        <div
          onClick={() => setModalIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            flexDirection: 'column',
          }}
        >
          <iframe
            src={filteredReels[modalIndex].link.replace('/p/', '/reel/').replace('?utm_source=ig_web_copy_link', '') + '/embed'}
            width="100%"
            height="600"
            style={{ border: 'none', borderRadius: '12px', maxWidth: '90vw' }}
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <button onClick={(e) => { e.stopPropagation(); showPrevious(); }} style={arrowStyle}>{'<'}</button>
            <button onClick={(e) => { e.stopPropagation(); showNext(); }} style={arrowStyle}>{'>'}</button>
          </div>
        </div>
      )}

      <BackToTopButton />
      <GoogleAnalytics />
      <MicrosoftClarity />
      <Analytics />
      <SpeedInsights />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-C4N1Y9CTEP"
        strategy="lazyOnload"
      />
      <Script id="ga" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C4N1Y9CTEP');
        `}
      </Script>
    </main>
  );
}

const arrowStyle = {
  backgroundColor: '#dcc0e5',
  color: '#413b42',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  cursor: 'pointer',
};
