import { useState } from 'react';
import Navbar from '../components/Navbar';
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
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: '#dcc0e5',
          color: '#413b42',
          fontFamily: 'Fira Sans',
          padding: '2rem 1rem',
          paddingTop: '6rem',
          minHeight: '100vh',
        }}
      >
        <h1
          style={{
            fontSize: '2.25rem',
            textAlign: 'center',
            marginBottom: '2rem',
            padding: '0 1rem',
          }}
        >
          ✨ Fun Facts About Me ✨
        </h1>

        {funFacts.map((fact, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#eee8f0',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '2rem',
              maxWidth: '900px',
              marginLeft: 'auto',
              marginRight: 'auto',
              boxSizing: 'border-box',
            }}
          >
            <p style={{ fontSize: '1.15rem', marginBottom: '1rem' }}>
              {fact.text}{' '}
              {fact.link && (
                <a
                  href={fact.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLinkClick(fact.link.label)}
                  style={{
                    color: '#413b42',
                    fontWeight: 'bold',
                    wordBreak: 'break-word',
                  }}
                >
                  {fact.link.label}
                </a>
              )}
            </p>

            {/* Embedded content like Spotify/Duolingo */}
            {fact.embed && (
              <div style={{ marginTop: '1rem' }}>
                {fact.embed}
              </div>
            )}

            {fact.photos?.length > 0 && (
              <>
                <button
                  onClick={() => toggleImageSection(index)}
                  style={{
                    backgroundColor: '#dcc0e5',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    borderRadius: '6px',
                    marginBottom: '1rem',
                    width: '100%',
                    maxWidth: '240px',
                  }}
                >
                  {openIndex === index ? '▲ Hide Photos' : '▼ Show Photos'}
                </button>

                {openIndex === index && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                      gap: '0.75rem',
                      marginTop: '1rem',
                    }}
                  >
                    {fact.photos.map((img, i) => (
                      <img
                        key={i}
                        src={`/funfacts/${img}`}
                        alt=""
                        onClick={() => setModalImage(`/funfacts/${img}`)}
                        style={{
                          width: '100%',
                          height: '150px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          cursor: 'pointer',
                        }}
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
                  style={{
                    width: '100%',
                    marginTop: '0.5rem',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '1px solid #aaa',
                    fontFamily: 'Fira Sans',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    marginTop: '0.5rem',
                    backgroundColor: '#dcc0e5',
                    color: '#413b42',
                    fontWeight: 'bold',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                  }}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        ))}

        {modalImage && (
          <div
            onClick={() => setModalImage(null)}
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
            }}
          >
            <img
              src={modalImage}
              alt="Full view"
              style={{
                maxHeight: '90%',
                maxWidth: '90%',
                border: '6px solid #eee8f0',
                borderRadius: '12px',
              }}
            />
          </div>
        )}

        <BackToTopButton />
        <Analytics />
        <SpeedInsights />
      </div>
    </>
  );
}
