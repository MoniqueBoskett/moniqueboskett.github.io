import { useState, useEffect } from 'react';
import BackToTopButton from '../components/BackToTopButton';
import { Instagram } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import GoogleAnalytics from '../components/GoogleAnalytics';
import MicrosoftClarity from '../components/MicrosoftClarity';
import { charities } from '../data/charitiesData';
import { headingStyle, sectionStyle } from '../styles/styles';

const charityGallery = [
  'charity.jpg', 'charity2.jpg', 'charity3.jpg', 'charity4.jpg',
  'charity5.jpg', 'charity6.jpg', 'charity7.jpg', 'charity8.jpg',
  'charity9.jpg', 'charity10.jpg',
];

export default function Charities() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalImage, setModalImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  const filteredCharities = charities.filter((charity) =>
    charity.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (index) => {
    setModalImage(`/charityphotos/${charityGallery[index]}`);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setModalImage(null);
    setCurrentIndex(null);
  };

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % charityGallery.length;
    setModalImage(`/charityphotos/${charityGallery[nextIndex]}`);
    setCurrentIndex(nextIndex);
  };

  const showPrevious = () => {
    const prevIndex = (currentIndex - 1 + charityGallery.length) % charityGallery.length;
    setModalImage(`/charityphotos/${charityGallery[prevIndex]}`);
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalImage) return;
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowRight') showNext();
      else if (e.key === 'ArrowLeft') showPrevious();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalImage, currentIndex]);

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
    <section style={{ ...sectionStyle, backgroundColor: '#eee8f0' }}>
      <h1 style={headingStyle}>Charities I Support</h1>
      <p style={descriptionStyle}>
        Giving back is an important part of who I am. I believe in supporting causes that create real change in people&apos;s lives.
        Whether you choose to support one of my favorites or discover a new one of your own, thank you for taking the time to give back.
      </p>

      <div style={cardWrapper}>
        <button onClick={() => setGalleryOpen(!galleryOpen)} style={toggleButton}>
          {galleryOpen ? '▲ Hide Giving Back in Action' : '▼ Show Giving Back in Action'}
        </button>
        {galleryOpen && (
          <div style={{ marginTop: '1rem', ...galleryGrid }}>
            {charityGallery.map((photo, i) => (
              <img
                key={i}
                src={`/charityphotos/${photo}`}
                alt={`Charity image ${i + 1}`}
                loading="lazy"
                onClick={() => openModal(i)}
                style={thumbnailStyle}
              />
            ))}
          </div>
        )}
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
        <input
          type="text"
          placeholder="Search charities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchInput}
        />
      </div>

      {filteredCharities.map((charity, index) => (
        <div key={index} style={cardWrapper}>
          <div style={charityHeader}>
            <img
              src={`/logos/${charity.logo}`}
              alt={`${charity.name} logo`}
              loading="lazy"
              style={logoStyle}
            />
            <div style={{ flex: 1 }}>
              <h2 style={{ margin: 0 }}>{charity.name}</h2>
              <p style={{ margin: '0.25rem 0' }}>EIN: {charity.ein || 'N/A'}</p>
              <p>
                <a href={charity.website} target="_blank" rel="noopener noreferrer" onClick={() => window.va?.track('link_click', { type: 'website', charity: charity.name })} style={linkStyle}>
                  {charity.website}
                </a>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <a href={`https://www.instagram.com/${charity.instagram}`} target="_blank" rel="noopener noreferrer" onClick={() => window.va?.track('link_click', { type: 'instagram', charity: charity.name })} style={linkStyle}>
                  <Instagram size={18} strokeWidth={2} /> @{charity.instagram}
                </a>
              </p>
              <a href={charity.website} target="_blank" rel="noopener noreferrer" onClick={() => window.va?.track('link_click', { type: 'donate', charity: charity.name })} style={donateButton}>
                Donate
              </a>
            </div>
          </div>

          <button onClick={() => setExpandedIndex(expandedIndex === index ? null : index)} style={toggleButton}>
            {expandedIndex === index ? '▲ Hide Description' : '▼ About This Charity'}
          </button>

          {expandedIndex === index && (
            <p style={{ marginTop: '1rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{charity.about}</p>
          )}

          <div style={{ marginTop: '1rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              *Please note that the EIN (Employer Identification Number) is provided for reference purposes only and should not be used for any illegal activities.
            </p>
          </div>
        </div>
      ))}

      {modalImage && (
        <div
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            flexDirection: 'column',
          }}
        >
          <img
            src={modalImage}
            alt="Expanded charity"
            style={{
              maxHeight: '80%',
              maxWidth: '90%',
              border: '6px solid #eee8f0',
              borderRadius: '12px',
              cursor: 'pointer',
            }}
          />
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <button onClick={(e) => { e.stopPropagation(); showPrevious(); }} style={arrowButton}>{'<'}</button>
            <button onClick={(e) => { e.stopPropagation(); showNext(); }} style={arrowButton}>{'>'}</button>
          </div>
        </div>
      )}

      <BackToTopButton />
      <GoogleAnalytics />
      <Analytics />
      <MicrosoftClarity />
      <SpeedInsights />
    </section>
  );
}

const descriptionStyle = {
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto 2rem',
  fontSize: '1.15rem',
};

const cardWrapper = {
  backgroundColor: '#eee8f0',
  borderRadius: '12px',
  padding: '1.5rem',
  marginBottom: '2rem',
  maxWidth: '900px',
  marginLeft: 'auto',
  marginRight: 'auto',
  boxSizing: 'border-box',
};

const toggleButton = {
  backgroundColor: '#dcc0e5',
  border: 'none',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  borderRadius: '6px',
  width: '100%',
  maxWidth: '240px',
  marginTop: '1rem',
};

const charityHeader = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.5rem',
  flexWrap: 'wrap',
  marginBottom: '1rem',
};

const logoStyle = {
  width: '80px',
  height: '80px',
  objectFit: 'contain',
  flexShrink: 0,
};

const linkStyle = {
  color: '#413b42',
  textDecoration: 'underline',
  wordBreak: 'break-word',
};

const donateButton = {
  display: 'inline-block',
  backgroundColor: '#413b42',
  color: '#fff',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  textDecoration: 'none',
  marginTop: '0.5rem',
  fontWeight: 'bold',
};

const galleryGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
  gap: '1rem',
};

const thumbnailStyle = {
  width: '100%',
  aspectRatio: '1 / 1',
  objectFit: 'cover',
  borderRadius: '8px',
  cursor: 'pointer',
  backgroundColor: '#ccc',
};

const searchInput = {
  width: '100%',
  padding: '0.75rem',
  borderRadius: '8px',
  border: '1px solid #aaa',
  fontSize: '1rem',
  fontFamily: 'Fira Sans',
  boxSizing: 'border-box',
};

const arrowButton = {
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
