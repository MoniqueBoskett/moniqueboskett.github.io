import { useState } from 'react';

const visitedStates = [
  'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'IL', 'IN', 'KY',
  'LA', 'MD', 'MA', 'MS', 'NJ', 'NY', 'NC', 'OH', 'PA', 'SC',
  'TN', 'TX', 'UT', 'VT', 'VA', 'WI'
];

const allStates = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

const VisitedStatesMap = () => {
  const [selectedState, setSelectedState] = useState(null);

  const handleClick = (state) => {
    setSelectedState(state);
    setTimeout(() => setSelectedState(null), 2000);
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{ textAlign: 'center' }}>U.S. States I&apos;ve Visited</h2>
      <div style={mapContainerStyle}>
        {allStates.map((state) => (
          <div
            key={state}
            onClick={() => handleClick(state)}
            title={state}
            style={{
              ...stateStyle,
              backgroundColor: visitedStates.includes(state) ? '#eee8f0' : '#ccc',
              border: selectedState === state ? '2px solid #413b42' : '1px solid #aaa',
              color: '#413b42',
            }}
          >
            {state}
          </div>
        ))}
      </div>
      {selectedState && (
        <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '1rem' }}>
          You clicked on: {selectedState}
        </p>
      )}
    </div>
  );
};

const mapContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(48px, 1fr))',
  gap: '6px',
  maxWidth: '600px',
  margin: '0 auto',
};

const stateStyle = {
  backgroundColor: '#ccc',
  padding: '10px',
  borderRadius: '6px',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  fontWeight: 'bold',
  userSelect: 'none',
};

export default VisitedStatesMap;
