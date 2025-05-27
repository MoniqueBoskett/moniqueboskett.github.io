import { useState } from 'react';
import BackToTopButton from '../components/BackToTopButton';
import { Instagram } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { charities } from '../data/charitiesData';

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

  const filteredCharities = charities.filter((charity) =>
    charity.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <h1 style={titleStyle}>Charities I Support</h1>
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
                onClick={() => setModalImage(`/charityphotos/${photo}`)}
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
                <a
                  href={charity.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => window.va?.track('link_click', { type: 'website', charity: charity.name })}
                  style={linkStyle}
                >
                  {charity.website}
                </a>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <a
                  href={`https://www.instagram.com/${charity.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => window.va?.track('link_click', { type: 'instagram', charity: charity.name })}
                  style={linkStyle}
                >
                  <Instagram size={18} strokeWidth={2} /> @{charity.instagram}
                </a>
              </p>
              <a
                href={charity.website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.va?.track('link_click', { type: 'donate', charity: charity.name })}
                style={donateButton}
              >
                Donate
              </a>
            </div>
          </div>

          <button
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            style={toggleButton}
          >
            {expandedIndex === index ? '▲ Hide Description' : '▼ About This Charity'}
          </button>

          {expandedIndex === index && (
            <p style={{ marginTop: '1rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
              {charity.about}
            </p>
          )}

          <div style={{ marginTop: '1rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              *Please note that the EIN (Employer Identification Number) is provided for reference purposes only and should not be used for any illegal activities.
            </p>
          </div>
        </div>
      ))}

      {modalImage && (
        <div onClick={() => setModalImage(null)} style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 1000,
        }}>
          <img
            src={modalImage}
            alt="Expanded charity"
            style={{ maxHeight: '90%', maxWidth: '90%', border: '6px solid #eee8f0', borderRadius: '12px' }}
          />
        </div>
      )}

      <BackToTopButton />
      <Analytics />
      <SpeedInsights />
    </section>
  );
}

// 🔧 Styles
const titleStyle = {
  fontSize: '2.25rem',
  textAlign: 'center',
  marginBottom: '2rem',
  padding: '0 1rem',
};

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
