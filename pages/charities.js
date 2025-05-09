import BackToTopButton from '../components/BackToTopButton';

export default function Charities() {
  return (
    <div
      style={{
        backgroundColor: '#dcc0e5',
        color: '#413b42',
        padding: '2rem',
        minHeight: '100vh',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ fontSize: '2.5rem' }}>Charities I Support</h1>

      <ul style={{ fontSize: '1.2rem', lineHeight: '2', marginTop: '1rem' }}>
        <li>
          <a
            href="https://www.blackgirlscode.com/"
            style={{ color: '#413b42' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Black Girls Code
          </a>
        </li>
        <li>
          <a
            href="https://www.charitywater.org/"
            style={{ color: '#413b42' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Charity&#58; Water
          </a>
        </li>
        <li>
          <a
            href="https://www.feedingamerica.org/"
            style={{ color: '#413b42' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Feeding America
          </a>
        </li>
      </ul>

      <BackToTopButton />
    </div>
  );
}
