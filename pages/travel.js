import { useState } from 'react';
import Navbar from '../components/Navbar';
import VisitedStatesMap from '../components/VisitedStatesMap';
import BackToTopButton from '../components/BackToTopButton';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

const Travel = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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

  return (
    <>
      <Navbar />
      <div style={pageStyle}>
        <h1 style={headingStyle}>My Travel Adventures</h1>

        <VisitedStatesMap />

        {countries.map((country, index) => (
          <CountrySection key={index} country={country} onImageClick={setSelectedImage} />
        ))}

        <Modal
          isOpen={!!selectedImage}
          onRequestClose={() => setSelectedImage(null)}
          contentLabel="Image Modal"
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
            },
          }}
        >
          <img
            src={`/travel/${selectedImage}`}
            alt="Enlarged travel photo"
            style={{
              maxHeight: '90vh',
              maxWidth: '90vw',
              borderRadius: '10px',
              objectFit: 'contain',
            }}
          />
        </Modal>

        <BackToTopButton />
      </div>
    </>
  );
};

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
            style={{ width: '36px', height: '24px', objectFit: 'cover', borderRadius: '4px' }}
          />
          <div>
            <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{country.name}</h2>
            <p style={{ fontSize: '1rem', margin: 0 }}>{country.date}</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: '#eee8f0',
            color: '#413b42',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          {isOpen ? '▼ Collapse' : '▶ Expand'}
        </button>
      </div>

      {isOpen && (
        <div style={photoGridStyle}>
          {country.photos.map((photo, i) => (
            <img
              key={i}
              src={`/travel/${photo}`}
              alt={`${country.name} ${i + 1}`}
              onClick={() => onImageClick(photo)}
              style={photoStyle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Styles
const pageStyle = {
  backgroundColor: '#dcc0e5',
  color: '#413b42',
  fontFamily: 'Fira Sans',
  padding: '2rem 1rem',
  paddingTop: '6rem',
  minHeight: '100vh',
  maxWidth: '1200px',
  margin: '0 auto',
};

const headingStyle = {
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: '2rem',
};

const photoGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
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

export default Travel;
