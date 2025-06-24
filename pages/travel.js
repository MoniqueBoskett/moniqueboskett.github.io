import { useState, useEffect } from 'react';
import VisitedStatesMap from '../components/VisitedStatesMap';
import BackToTopButton from '../components/BackToTopButton';
import GoogleAnalytics from '../components/GoogleAnalytics';
import MicrosoftClarity from '../components/MicrosoftClarity';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Modal from 'react-modal';
import { sectionStyle, headingStyle } from '../styles/styles';

Modal.setAppElement('#__next');

const countries = [
  {
    name: 'France',
    flag: 'France-Flag.png',
    date: 'January 2023',
    photos: ['france.jpg', 'france_2.jpg', 'france_3.jpg', 'france_4.jpg', 'france_5.jpg', 'france_6.jpg', 'france_7.jpg', 'france_8.jpg', 'france_9.jpg', 'france_10.jpg', 'france_11.jpg', 'france_12.jpg', 'france_13.jpg'],
  },
  {
    name: 'Italy',
    flag: 'Italy-Flag.png',
    date: 'May 2023',
    photos: ['italy.jpg', 'italy_2.jpg', 'italy_3.jpg', 'italy_4.jpg', 'italy_5.jpg', 'italy_6.jpg', 'italy_7.jpg', 'italy_8.jpg', 'italy_9.jpg', 'italy_10.jpg', 'italy_11.jpg', 'italy_12.jpg', 'italy_13.jpg', 'italy_14.jpg', 'italy_15.jpg', 'italy_16.jpg', 'italy_17.jpg', 'italy_18.jpg', 'italy_19.jpg'],
  },
  {
    name: 'Greece',
    flag: 'Greece-Flag.png',
    date: 'June 2023',
    photos: ['greece.jpg', 'greece_2.jpg', 'greece_3.jpg', 'greece_4.jpg', 'greece_5.jpg', 'greece_6.jpg', 'greece_7.jpg', 'greece_8.jpg', 'greece_9.jpg', 'greece_10.jpg', 'greece_11.jpg', 'greece_12.jpg'],
  },
  {
    name: 'Spain',
    flag: 'Spain-Flag.png',
    date: 'June 2023',
    photos: ['spain.jpg', 'spain_2.jpg', 'spain_3.jpg', 'spain_4.jpg', 'spain_5.jpg', 'spain_6.jpg', 'spain_7.jpg', 'spain_8.jpg', 'spain_9.jpg', 'spain_10.jpg', 'spain_11.jpg', 'spain_12.jpg', 'spain_13.jpg', 'spain_14.jpg', 'spain_15.jpg', 'spain_16.jpg', 'spain_17.jpg', 'spain_18.jpg', 'spain_19.jpg', 'spain_20.jpg', 'spain_21.jpg'],
  },
  {
    name: 'Panama',
    flag: 'Panama-Flag.png',
    date: 'March 2025',
    photos: ['panama.jpg', 'panama_2.jpg', 'panama_3.jpg', 'panama_4.jpg', 'panama_5.jpg', 'panama_6.jpg', 'panama_7.jpg', 'panama_8.jpg', 'panama_9.jpg', 'panama_10.jpg', 'panama_11.jpg', 'panama_12.jpg', 'panama_13.jpg'],
  },
];

export default function Travel() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isMapOpen, setIsMapOpen] = useState(true);
  const [touchStartX, setTouchStartX] = useState(null);

  const openModal = (country, index) => {
    setSelectedCountry(country);
    setCurrentIndex(index);
    setSelectedImage(country.photos[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedCountry(null);
    setCurrentIndex(null);
  };

  const showNext = () => {
    if (!selectedCountry) return;
    const nextIndex = (currentIndex + 1) % selectedCountry.photos.length;
    setSelectedImage(selectedCountry.photos[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrevious = () => {
    if (!selectedCountry) return;
    const prevIndex = (currentIndex - 1 + selectedCountry.photos.length) % selectedCountry.photos.length;
    setSelectedImage(selectedCountry.photos[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowRight') showNext();
      else if (e.key === 'ArrowLeft') showPrevious();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, selectedCountry]);

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
    <section style={sectionStyle}>
      <h1 style={headingStyle}>My Travel Adventures</h1>

      <button onClick={() => setIsMapOpen(!isMapOpen)} style={toggleButton}>
        {isMapOpen ? '▼ Hide States Visited' : '▶ Show States Visited'}
      </button>
      {isMapOpen && (
        <div style={mapWrapperStyle}>
          <VisitedStatesMap />
        </div>
      )}

      {countries.map((country, index) => (
        <CountrySection key={index} country={country} onImageClick={(i) => openModal(country, i)} />
      ))}

      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={closeModal}
          contentLabel="Enlarged Travel Photo"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 9999 },
            content: {
              inset: '10%',
              background: 'transparent',
              border: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
              flexDirection: 'column',
            },
          }}
        >
          <img
            src={`/travel/${selectedImage}`}
            alt="Enlarged travel photo"
            loading="lazy"
            style={{
              maxHeight: '90vh',
              maxWidth: '90vw',
              borderRadius: '10px',
              objectFit: 'contain',
            }}
          />
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <button onClick={(e) => { e.stopPropagation(); showPrevious(); }} style={arrowButton}>{'<'}</button>
            <button onClick={(e) => { e.stopPropagation(); showNext(); }} style={arrowButton}>{'>'}</button>
          </div>
        </Modal>
      )}

      <BackToTopButton />
      <GoogleAnalytics />
      <MicrosoftClarity />
      <Analytics />
      <SpeedInsights />
    </section>
  );
}

const CountrySection = ({ country, onImageClick }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ marginTop: '4rem' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <img
            src={`/flags/${country.flag}`}
            alt={`${country.name} flag`}
            loading="lazy"
            style={{ width: '36px', height: '24px', objectFit: 'cover', borderRadius: '4px' }}
          />
          <div>
            <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{country.name}</h2>
            <p style={{ fontSize: '1rem', margin: 0 }}>{country.date}</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={toggleButton}
          aria-expanded={isOpen}
          aria-controls={`photos-${country.name}`}
        >
          {isOpen ? '▼ Collapse' : '▶ Expand'}
        </button>
      </div>

      {isOpen && (
        <div id={`photos-${country.name}`} style={photoGridStyle}>
          {country.photos.map((photo, i) => (
            <img
              key={i}
              src={`/travel/${photo}`}
              alt={`${country.name} photo ${i + 1}`}
              loading="lazy"
              onClick={() => onImageClick(i)}
              style={photoStyle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const mapWrapperStyle = {
  width: '100%',
  overflowX: 'auto',
  marginBottom: '2rem',
};

const toggleButton = {
  backgroundColor: '#eee8f0',
  color: '#413b42',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const photoGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
  gap: '1rem',
};

const photoStyle = {
  width: '100%',
  aspectRatio: '1 / 1',
  objectFit: 'cover',
  borderRadius: '8px',
  cursor: 'pointer',
  backgroundColor: '#ccc',
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
