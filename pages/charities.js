// pages/charities.js
import { useState } from 'react';
import Navbar from '../components/Navbar';
import BackToTopButton from '../components/BackToTopButton';
import { Instagram } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { charities } from '../data/charitiesData';

export default function Charities() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCharities = charities.filter((charity) =>
    charity.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#dcc0e5', color: '#413b42', fontFamily: 'Fira Sans', padding: '2rem' }}>
      <Navbar />
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Charities I Support</h1>
      <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
        Giving back is an important part of who I am. I believe in supporting causes that create real change in people&apos;s lives.
        Whether you choose to support one of my favorites or discover a new one of your own, thank you for taking the time to give back.
      </p>

      <div style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
        <input
          type="text"
          placeholder="Search charities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '1px solid #aaa'
          }}
        />
      </div>

      {filteredCharities.map((charity, index) => (
        <div
          key={index}
          style={{
            backgroundColor: '#eee8f0',
            borderRadius: '12px',
            padding: '1.5rem',
            marginBottom: '2rem',
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <img
              src={`/logos/${charity.logo}`}
              alt={`${charity.name} logo`}
              style={{ width: '180px', height: 'auto', objectFit: 'contain', flexShrink: 0 }}
            />
            <div>
              <h2 style={{ margin: 0 }}>{charity.name}</h2>
              <p style={{ margin: '0.25rem 0' }}>EIN: {charity.ein || 'N/A'}</p>
              <p style={{ margin: '0.25rem 0' }}>
                <a
                  href={charity.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => window.va && window.va.track('donate_click', { charity: charity.name })}
                  style={{ color: '#413b42', fontWeight: 'bold' }}
                >
                  {charity.website}
                </a>
              </p>
              <p style={{ margin: '0.25rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <a
                  href={`https://www.instagram.com/${charity.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#413b42', display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
                >
                  <Instagram size={18} strokeWidth={2} /> @{charity.instagram}
                </a>
              </p>
              <a
                href={charity.website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.va && window.va.track('donate_click', { charity: charity.name })}
                style={{
                  display: 'inline-block',
                  marginTop: '0.75rem',
                  backgroundColor: '#dcc0e5',
                  color: '#413b42',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  textDecoration: 'none'
                }}
              >
                Donate
              </a>
            </div>
          </div>

          <button
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            style={{
              backgroundColor: '#dcc0e5',
              border: 'none',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontWeight: 'bold',
              borderRadius: '6px',
              color: '#413b42'
            }}
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

      <BackToTopButton />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
