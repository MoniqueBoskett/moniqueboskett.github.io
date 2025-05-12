// pages/charities.js
import { useState } from 'react';
import Navbar from '../components/Navbar';
import BackToTopButton from '../components/BackToTopButton';
import { Instagram } from 'lucide-react';
import { Analytics, track } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const charities = [
  {
    name: 'Achieve Now',
    ein: '38-3920150',
    website: 'https://www.achieve-now.com/',
    logo: 'Achieve-Now-Logo.png',
    instagram: 'achievenowphiladelphia',
    about:
      'At Achieve Now, we see literacy as a social justice issue. Our goal is to produce strong, confident, effective, and joyful readers who see reading as an integral part of their lives and are life-long learners...',
  },
  {
    name: "Alzheimer's Disease and Related Disorders Association Inc",
    ein: '13-3039601',
    website: 'https://www.alz.org/',
    logo: 'Alzheimers-Association-Logo.png',
    instagram: 'alzassociation',
    about:
      "The Alzheimer's Association leads the way to end Alzheimer's and all other dementia — by accelerating global research, driving risk reduction and early detection, and maximizing quality care and support.",
  },
  {
    name: 'American Heart Association, Inc',
    ein: '13-5613797',
    website: 'https://www.heart.org/en/',
    logo: 'American-Heart-Association-Logo.png',
    instagram: 'american_heart',
    about:
      'The AHA has grown into the nation’s oldest and largest voluntary organization dedicated to fighting heart disease and stroke. We’ve invested over $5B in research and serve 35 million volunteers and supporters.',
  },
  {
    name: 'American Liver Association',
    ein: '36-2883000',
    website: 'https://liverfoundation.org/',
    logo: 'American-Liver-Foundation-Logo.png',
    instagram: 'americanliver',
    about:
      'ALF is the largest organization focused on all liver diseases. We provide support, education, and advocacy while driving research to improve and save lives.',
  },
  {
    name: 'American Red Cross',
    ein: '53-0196605',
    website: 'https://www.redcross.org/',
    logo: 'American-Red-Cross-Logo.png',
    instagram: 'americanredcross',
    about:
      'Through volunteers and donors, the Red Cross prevents and relieves suffering every day — from blood drives to disaster relief to teaching lifesaving skills.',
  },
  {
    name: 'Bebashi Transition to Hope',
    ein: '23-2484046',
    website: 'https://www.bebashi.org/',
    logo: 'Bebashi-Logo.png',
    instagram: 'philly.bebashi',
    about:
      'Bebashi empowers people to improve their health and well-being through high-quality healthcare, education, and social services in underserved communities.',
  },
  {
    name: 'Bethesda Project',
    ein: '23-2209338',
    website: 'https://www.bethesdaproject.org/',
    logo: 'Bethesda-Project-Logo.png',
    instagram: 'bethesda_project',
    about:
      'Bethesda Project provides shelter and support to adults experiencing homelessness across 11 locations in Philadelphia — creating safe spaces and community.',
  },
  {
    name: 'David Sheldrick Wildlife Trust USA Inc',
    ein: '30-0224549',
    website: 'https://www.sheldrickwildlifetrust.org/',
    logo: 'David-Sheldrick-Logo.png',
    instagram: 'sheldricktrust',
    about:
      'SWT is one of Africa’s oldest wildlife charities, best known for its orphaned elephant rescue and habitat preservation work across East Africa.',
  },
  {
    name: 'JDRF International',
    ein: '23-1907729',
    website: 'https://www.breakthrought1d.org/',
    logo: 'JDRF-Logo.png',
    instagram: 'breakthrought1dhq',
    about:
      'Breakthrough T1D funds life-changing research and drives policy and access efforts to turn Type 1 diabetes into a condition of the past.',
  },
  {
    name: 'Mazzoni Center',
    ein: '23-2176338',
    website: 'https://www.mazzonicenter.org/',
    logo: 'Mazzoni-Center-Logo.png',
    instagram: 'mazzonicenter',
    about:
      'Mazzoni Center provides comprehensive health and wellness services in an LGBTQ-focused environment that preserves dignity and improves lives.',
  },
  {
    name: 'Organization for Autism Research Inc',
    ein: '54-2062167',
    website: 'https://researchautism.org/',
    logo: 'OAR-Logo.png',
    instagram: 'organizationforautismresearch',
    about:
      'Founded by parents of autistic children, OAR funds applied research and creates practical resources to improve lives through science and understanding.',
  },
  {
    name: 'Philadelphia Community Bail Fund',
    ein: '',
    website: 'https://www.phillybailout.org/#/',
    logo: 'Philadelphia-Community-Bail-Fund-Logo.png',
    instagram: 'phillybailout',
    about:
      'The Bail Fund fights to end cash bail in Philadelphia. Until then, they post bail for people who can’t afford it, helping them avoid pretrial incarceration.',
  },
  {
    name: 'Philabundance',
    ein: '23-2290505',
    website: 'https://www.philabundance.org/',
    logo: 'Philabundance-Logo.png',
    instagram: 'philabundance',
    about:
      'Philabundance fights hunger in 9 counties through food distribution, community kitchens, and programs tackling the root causes of food insecurity.',
  },
  {
    name: 'Planned Parenthood Southeastern Pennsylvania',
    ein: '23-1352509',
    website:
      'https://www.plannedparenthood.org/planned-parenthood-southeastern-pennsylvania',
    logo: 'Planned-Parenthood-Logo.png',
    instagram: 'plannedparenthoodsepa',
    about:
      'PPSEPA provides inclusive reproductive health care and education across the region, empowering patients to make informed choices.',
  },
  {
    name: 'Project Home',
    ein: '23-2555950',
    website: 'https://www.projecthome.org/',
    logo: 'Project-Home-Logo.png',
    instagram: 'projecthomephl',
    about:
      'Project HOME helps individuals break the cycle of homelessness with housing, education, and employment — creating pathways to independence.',
  },
];

export default function Charities() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [search, setSearch] = useState('');

  const filteredCharities = charities.filter((charity) =>
    charity.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#dcc0e5', color: '#413b42', fontFamily: 'Fira Sans', padding: '2rem' }}>
      <Navbar />
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Charities I Support</h1>
      <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
        Giving back is an important part of who I am. I believe in supporting causes that create real change in people&apos;s lives. 
        Whether you choose to support one of my favorites or discover a new one of your own, thank you for taking the time to give back.
      </p>

      <input
        type="text"
        placeholder="Search charities..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '500px',
          margin: '0 auto 2rem',
          display: 'block',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '1rem'
        }}
      />

      {filteredCharities.map((charity, index) => (
        <div key={index} style={{
          backgroundColor: '#eee8f0',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem',
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <img
              src={`/logos/${charity.logo}`}
              alt={`${charity.name} logo`}
              style={{ width: '160px', height: 'auto', objectFit: 'contain' }}
            />
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ margin: '0 0 0.5rem' }}>{charity.name}</h2>
              <p style={{ margin: '0.25rem 0' }}>EIN: {charity.ein || 'N/A'}</p>
              <p style={{ margin: '0.25rem 0' }}>
                <a
                  href={charity.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track(`${charity.name} - Website Clicked`)}
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
                  onClick={() => track(`${charity.name} - Instagram Clicked`)}
                  style={{ color: '#413b42', display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
                >
                  <Instagram size={18} strokeWidth={2} /> @{charity.instagram}
                </a>
              </p>
              <button
                onClick={() => {
                  window.open(charity.website, '_blank');
                  track(`${charity.name} - Donate Clicked`);
                }}
                style={{
                  marginTop: '0.75rem',
                  backgroundColor: '#dcc0e5',
                  color: '#413b42',
                  border: '2px solid #413b42',
                  borderRadius: '6px',
                  padding: '0.5rem 1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Donate
              </button>
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
              color: '#413b42',
              marginBottom: '0.5rem'
            }}
          >
            {expandedIndex === index ? '▲ Hide Description' : '▼ About This Charity'}
          </button>

          {expandedIndex === index && (
            <p style={{ marginTop: '1rem', lineHeight: 1.6 }}>
              {charity.about}
            </p>
          )}
        </div>
      ))}

      <BackToTopButton />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

