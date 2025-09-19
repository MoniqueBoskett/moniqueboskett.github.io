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

  const extractEmbedId = (link) => {
    if (link.includes('/reel/')) return link.split('/reel/')[1]?.split('/')[0];
    if (link.includes('/p/')) return link.split('/p/')[1]?.split('/')[0];
    return null;
  };

  const isReel = (link) => link.includes('/reel/');

  return (
    <main style={layoutStyles.main}>
      <h1 style={headingStyle}>Marketing</h1>

      <p style={{
        fontSize: '1.1rem',
        maxWidth: '750px',
        margin: '0 auto 2.5rem',
        lineHeight: '1.6',
        textAlign: 'center',
        background: '#eee8f0',
        padding: '1.5rem',
        borderRadius: '12px',
        border: '1px solid #ddd',
      }}>
        Over the past two years, I’ve had the opportunity to bring more than 30 Chase Sapphire events to life—ranging from music festivals and private dining experiences to backstage moments with partners like <strong>Live Nation</strong>, <strong>The Seaport</strong>, and <strong>The Infatuation</strong>.<br /><br />
        This gallery features a collection of Instagram Reels and posts that highlight the creativity, scale, and storytelling behind these activations.<br /><br />
        <strong>Click on any post to view it directly on Instagram!</strong>
      </p>

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
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              background: '#eee8f0',
            }}
          >
            <div style={{ position: 'relative', paddingTop: '120%', overflow: 'hidden' }}>
              <iframe
                src={`https://www.instagram.com/${isReel(reel.link) ? 'reel' : 'p'}/${extractEmbedId(reel.link)}/embed`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allowTransparency
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div style={{ padding: '1rem', background: '#eee8f0' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{reel.company}</p>
              <p style={{ marginBottom: '0.5rem' }}>{reel.caption}</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{reel.handle} — {reel.date}</p>
            </div>
          </div>
        ))}
      </div>

      <BackToTopButton />
      <GoogleAnalytics />
      <MicrosoftClarity />
      <Analytics />
      <SpeedInsights />

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-C4N1Y9CTEP" strategy="lazyOnload" />
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
