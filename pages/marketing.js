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
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Marketing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReels, setFilteredReels] = useState([]);
  const [selectedReel, setSelectedReel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

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

  const handleClick = (reel) => {
    if (window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Instagram Reel',
        event_label: reel.link,
      });
    }
    setSelectedReel(reel);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReel(null);
  };

  const getEmbedUrl = (link) => {
    if (link.includes('/reel/')) {
      return `https://www.instagram.com/reel/${link.split('/reel/')[1]?.split('/')[0]}/embed`;
    } else if (link.includes('/p/')) {
      return `https://www.instagram.com/p/${link.split('/p/')[1]?.split('/')[0]}/embed`;
    }
    return '';
  };

  return (
    <main style={layoutStyles.main}>
      <Head>
        <title>Marketing Reels | Monique Boskett</title>
      </Head>
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
            onClick={() => handleClick(reel)}
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
              src={getEmbedUrl(reel.link)}
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
                overflow: 'hidden'
              }}>{reel.caption}</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{reel.handle} — {reel.date}</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedReel && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '800px',
              width: '90%',
              background: '#fff',
              borderRadius: '12px',
              padding: '1.5rem',
              position: 'relative',
            }}
          >
            <iframe
              src={getEmbedUrl(selectedReel.link)}
              width="100%"
              height="480"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              loading="lazy"
              style={{ borderRadius: '10px' }}
            ></iframe>
            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontWeight: 'bold' }}>{selectedReel.company}</p>
              <p style={{ whiteSpace: 'pre-wrap' }}>{selectedReel.caption}</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{selectedReel.handle} — {selectedReel.date}</p>
            </div>
          </div>
        </div>
      )}

      <BackToTopButton />
      <Analytics />
      <SpeedInsights />
      <GoogleAnalytics />
      <MicrosoftClarity />
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
