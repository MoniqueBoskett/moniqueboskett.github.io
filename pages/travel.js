import { useState } from 'react';
import VisitedStatesMap from '../components/VisitedStatesMap';
import BackToTopButton from '../components/BackToTopButton';

const Travel = () => {
  const countries = [
    {
      name: '🇫🇷 France',
      altText: 'France',
      date: 'January 2023',
      photos: ['France.jpg', 'France_2.jpg', 'France_3.jpg', 'France_4.jpg', 'France_5.jpg', 'France_6.jpg', 'France_7.jpg', 'France_8.jpg', 'France_9.jpg', 'France_10.jpg', 'France_11.jpg', 'France_12.jpg', 'France_13.jpg'],
    },
    {
      name: '🇮🇹 Italy',
      altText: 'Italy',
      date: 'May 2023',
      photos: ['Italy.jpg', 'Italy_2.jpg', 'Italy_3.jpg', 'Italy_4.jpg', 'Italy_5.jpg', 'Italy_6.jpg', 'Italy_7.jpg', 'Italy_8.jpg', 'Italy_9.jpg', 'Italy_10.jpg', 'Italy_11.jpg', 'Italy_12.jpg', 'Italy_13.jpg', 'Italy_14.jpg', 'Italy_15.jpg', 'Italy_16.jpg', 'Italy_17.jpg', 'Italy_18.jpg', 'Italy_19.jpg'],
    },
    {
      name: '🇬🇷 Greece',
      altText: 'Greece',
      date: 'June 2023',
      photos: ['Greece.jpg', 'Greece_2.jpg', 'Greece_3.jpg', 'Greece_4.jpg', 'Greece_5.jpg', 'Greece_6.jpg', 'Greece_7.jpg', 'Greece_8.jpg', 'Greece_9.jpg', 'Greece_10.jpg', 'Greece_11.jpg'],
    },
    {
      name: '🇪🇸 Spain',
      altText: 'Spain',
      date: 'June 2023',
      photos: ['Spain.jpg', 'Spain_2.jpg', 'Spain_3.jpg', 'Spain_4.jpg', 'Spain_5.jpg', 'Spain_6.jpg', 'Spain_7.jpg', 'Spain_8.jpg', 'Spain_9.jpg', 'Spain_10.jpg', 'Spain_11.jpg', 'Spain_12.jpg', 'Spain_13.jpg', 'Spain_14.jpg', 'Spain_15.jpg', 'Spain_16.jpg', 'Spain_17.jpg', 'Spain_18.jpg', 'Spain_19.jpg', 'Spain_20.jpg', 'Spain_21.jpg'],
    },
    {
      name: '🇵🇦 Panama',
      altText: 'Panama',
      date: 'March 2025',
      photos: ['Panama.jpg', 'Panama_2.jpg', 'Panama_3.jpg', 'Panama_4.jpg', 'Panama_5.jpg', 'Panama_6.jpg', 'Panama_7.jpg', 'Panama_8.jpg', 'Panama_9.jpg', 'Panama_10.jpg', 'Panama_11.jpg', 'Panama_12.jpg', 'Panama_13.jpg', 'Panama_14.jpg'],
    },
  ];

  return (
    <div style={{ backgroundColor: '#dcc0e5', color: '#413b42', fontFamily: 'sans-serif', padding: '2rem', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>
        My Travel Adventures
      </h1>

      <VisitedStatesMap />

      {countries.map((country, index) => (
        <CountrySection key={index} country={country} />
      ))}

      <BackToTopButton />
    </div>
  );
};

// === Expandable Section Component ===
const CountrySection = ({ country }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ marginTop: '4rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', margin: 0 }}>{country.name}</h2>
          <p style={{ fontSize: '1rem', margin: 0 }}>{country.date}</p>
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
          {isOpen ? '🔽 Collapse' : '▶️ Expand'}
        </button>
      </div>

      {isOpen && (
        <div style={photoGridStyle}>
          {country.photos.map((photo, i) => (
            <a
              key={i}
              href={`/${photo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="photo-link"
            >
              <img
                src={`/${photo}`}
                alt={`${country.altText} ${i + 1}`}
                className="photo-img"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

// === Styles ===
const photoGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1rem',
  justifyItems: 'center',
};

// Hover style
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    .photo-img {
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.3s ease;
      max-width: 100%;
      height: auto;
    }
    .photo-img:hover {
      transform: scale(1.05);
    }
  `;
  document.head.appendChild(style);
}

export default Travel;
