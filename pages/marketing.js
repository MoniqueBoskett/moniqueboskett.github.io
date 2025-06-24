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
  const [modalReel, setModalReel] = useState(null);

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

  const handleClick = (link) => {
    if (window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Instagram Reel',
        event_label: link,
      });
    }
    setModalReel(link);
  };

  const isReelLink = (link) => link.includes('/reel/');

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
            onClick={() => handleClick(reel.link)}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {isReelLink(reel.link) ? (
              <iframe
                src={`https://www.instagram.com/reel/${reel.link.split('/reel/')[1]?.split('/')[0]}/embed`}
                title={`Instagram Reel - ${reel.caption}`}
                width="100%"
                height="480"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                style={{ borderRadius: '10px', width: '100%', height: '480px' }}
                loading="lazy"
              ></iframe>
            ) : (
              <img
                src="/static/placeholder.png"
                alt="Instagram Post"
                style={{ width: '100%', height: 'auto' }}
              />
            )}
            <div style={{ padding: '1rem', background: '#f9f9f9' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{reel.company}</p>
              <p style={{ marginBottom: '0.5rem' }}>{reel.caption.slice(0, 120)}...</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{reel.handle} — {reel.date}</p>
            </div>
          </div>
        ))}
      </div>

      {modalReel && (
        <div
          onClick={() => setModalReel(null)}
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
          }}
        >
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
            <iframe
              src={modalReel.replace('/p/', '/reel/').replace('?utm_source=ig_web_copy_link', '') + '/embed'}
              width="100%"
              height="600"
              style={{ border: 'none', borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
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
