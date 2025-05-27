import { useState } from 'react';
import BackToTopButton from '../components/BackToTopButton';
import { funFacts } from '../data/personalData';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Personal() {
  const [openIndex, setOpenIndex] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const toggleImageSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleLinkClick = (label) => {
    if (window.va) {
      window.va.track('link_click', { label });
    }
  };

  return (
    <section style={sectionStyle}>
      <h1 style={titleStyle}>✨ Fun Facts About Me ✨</h1>

      {funFacts.map((fact, index) => (
        <div key={index} style={cardStyle}>
          <p style={textStyle}>
            {fact.text}{' '}
            {fact.link && (
              <a
                href={fact.link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkClick(fact.link.label)}
                style={linkStyle}
              >
                {fact.link.label}
              </a>
            )}
          </p>

          {fact.embed && <div style={{ marginTop: '1rem' }}>{fact.embed}</div>}

          {fact.photos?.length > 0 && (
            <>
              <button
                onClick={() => toggleImageSection(index)}
                style={toggleButton}
              >
                {openIndex === index ? '▲ Hide Photos' : '▼ Show Photos'}
              </button>

              {openIndex === index && (
                <div style={photoGrid}>
                  {fact.photos.map((img, i) => (
                    <img
                      key={i}
                      src={`/funfacts/${img}`}
                      alt={`Photo related to fun fact ${index + 1}`}
                      loading="lazy"
                      onClick={() => setModalImage(`/funfacts/${img}`)}
                      style={photoStyle}
                    />
                  ))}
                </div>
              )}
            </>
          )}

          {fact.allowComments && (
            <form
              action="https://formspree.io/f/mpwdnlyw"
              method="POST"
              style={{ marginTop: '1.5rem' }}
            >
              <input type="hidden" name="_redirect" value="https://moniqueboskett.vercel.app/thankyou" />
              <label htmlFor={`comment-${index}`} style={{ fontWeight: 'bold' }}>
                ✍️ Leave a Comment:
              </label>
              <textarea
                id={`comment-${index}`}
                name="message"
                rows={3}
                placeholder="Please share..."
                required
                style={textareaStyle}
              />
              <button type="submit" style={submitButton}>Submit</button>
            </form>
          )}
        </div>
      ))}

      {modalImage && (
        <div onClick={() => setModalImage(null)} style={modalOverlay}>
          <img
            src={modalImage}
            alt="Full view"
            style={modalImageStyle}
          />
        </div>
      )}

      <BackToTopButton />
      <Analytics />
      <SpeedInsights />
    </section>
  );
}

// Styles
const sectionStyle = {
  color: '#413b42',
  fontFamily: 'Fira Sans',
  padding: '2rem 1rem',
  boxSizing: 'border-box',
};

const titleStyle = {
  fontSize: '2.25rem',
  textAlign: 'center',
  marginBottom: '2rem',
  padding: '0 1rem',
};

const cardStyle = {
  backgroundColor: '#eee8f0',
  borderRadius: '12px',
  padding: '1.5rem',
  marginBottom: '2rem',
  maxWidth: '900px',
  marginLeft: 'auto',
  marginRight: 'auto',
  boxSizing: 'border-box',
};

const textStyle = {
  fontSize: '1.15rem',
  marginBottom: '1rem',
};

const linkStyle = {
  color: '#413b42',
  fontWeight: 'bold',
  wordBreak: 'break-word',
};

const toggleButton = {
  backgroundColor: '#dcc0e5',
  border: 'none',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  borderRadius: '6px',
  marginBottom: '1rem',
  width: '100%',
  maxWidth: '240px',
};

const photoGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
  gap: '0.75rem',
  marginTop: '1rem',
};

const photoStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '8px',
  cursor: 'pointer',
};

const textareaStyle = {
  width: '100%',
  marginTop: '0.5rem',
  padding: '0.75rem',
  borderRadius: '8px',
  border: '1px solid #aaa',
  fontFamily: 'Fira Sans',
  fontSize: '1rem',
  boxSizing: 'border-box',
};

const submitButton = {
  marginTop: '0.5rem',
  backgroundColor: '#dcc0e5',
  color: '#413b42',
  fontWeight: 'bold',
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

const modalOverlay = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalImageStyle = {
  maxHeight: '90%',
  maxWidth: '90%',
  border: '6px solid #eee8f0',
  borderRadius: '12px',
};
