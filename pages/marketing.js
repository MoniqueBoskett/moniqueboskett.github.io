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
import { useRouter } from 'next/router';

export default function Marketing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReels, setFilteredReels] = useState([]);
  const [modalContent, setModalContent] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!marketingData) {
      router.push('/404');
    } else {
      const sorted = [...marketingData].sort((a, b) => new Date(b.date) - new Date(a.date));
      setFilteredReels(sorted);
    }
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
    setModalContent(reel);
  };

  const closeModal = () => setModalContent(null);

  useEffect(() => {
    const escHandler = (e) => e.key === 'Escape' && closeModal();
    window.addEventListener('keydown', escHandler);
    return () => window.removeEventListener('keydown', escHandler);
  }, []);

  return (
    <main style={layoutStyles.main}>
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
        {filteredReels.map((reel, i) => {
          const isReel = reel.link.includes('/reel/');
          const embedId = isReel
            ? reel.link.split('/reel/')[1]?.split('/')[0]
            : reel.link.split('/p/')[1]?.split('/')[0];

          return (
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
                src={`https://www.instagram.com/${isReel ? 'reel' : 'p'}/${embedId}/embed`}
                title={`Instagram - ${reel.caption.slice(0, 30)}`}
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
          );
        })}
      </div>

      {modalContent && (
        <div
          onClick={closeModal}
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
            zIndex: 2000,
            padding: '1rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: '#fff', padding: '1rem', borderRadius: '12px', maxWidth: '800px', width: '100%' }}
          >
            <iframe
              src={`https://www.instagram.com/${modalContent.link.includes('/reel/') ? 'reel' : 'p'}/${modalContent.link.split('/reel/')[1]?.split('/')[0] || modalContent.link.split('/p/')[1]?.split('/')[0]}/embed`}
              title="Expanded Instagram Post"
              width="100%"
              height="480"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              style={{ borderRadius: '10px' }}
              loading="lazy"
            ></iframe>
            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontWeight: 'bold' }}>{modalContent.company}</p>
              <p style={{ whiteSpace: 'pre-line' }}>{modalContent.caption}</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{modalContent.handle} — {modalContent.date}</p>
            </div>
          </div>
        </div>
      )}

      <BackToTopButton />
      <GoogleAnalytics />
      <Analytics />
      <MicrosoftClarity />
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
