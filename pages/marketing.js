// pages/marketing.js
import { useEffect, useState } from 'react';
import Script from 'next/script';
import BackToTopButton from '../components/BackToTopButton';
import GoogleAnalytics from '../components/GoogleAnalytics';
import MicrosoftClarity from '../components/MicrosoftClarity';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { marketingReels } from '../data/marketingData';
import { layoutStyles, headingStyle } from '../styles/styles';
import Error from 'next/error';

export default function Marketing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReels, setFilteredReels] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    try {
      const sorted = [...marketingReels].sort((a, b) => new Date(b.date) - new Date(a.date));
      setFilteredReels(sorted);
    } catch (error) {
      setHasError(true);
    }
  }, []);

  useEffect(() => {
    try {
      const lowerTerm = searchTerm.toLowerCase();
      const filtered = marketingReels.filter(
        (reel) =>
          reel.caption.toLowerCase().includes(lowerTerm) ||
          reel.company.toLowerCase().includes(lowerTerm) ||
          reel.handle.toLowerCase().includes(lowerTerm)
      );
      setFilteredReels(filtered.sort((a, b) => new Date(b.date) - new Date(a.date)));
    } catch (error) {
      setHasError(true);
    }
  }, [searchTerm]);

  const handleClick = (link) => {
    if (window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Instagram Reel',
        event_label: link,
      });
    }
  };

  if (hasError) return <Error statusCode={404} />;

  return (
    <main style={layoutStyles.main}>
      <GoogleAnalytics />
      <MicrosoftClarity />
      <SpeedInsights />
      <Analytics />

      <h1 style={headingStyle}>Marketing Reels</h1>

      <input
        type="text"
        placeholder="Search by caption, handle, or company..."
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
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
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
            <div style={{ padding: '1rem', background: '#f9f9f9' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{reel.company}</p>
              <p style={{
                marginBottom: '0.5rem',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>{reel.caption}</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{reel.handle} — {reel.date}</p>
            </div>
          </div>
        ))}
      </div>

      <BackToTopButton />

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
