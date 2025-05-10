// components/VisitedStatesMap.js
import USAMap from 'react-usa-map';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

// State name mapping for tooltips
const stateNames = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', FL: 'Florida', GA: 'Georgia',
  HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa',
  KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland',
  MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi', MO: 'Missouri',
  MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey',
  NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio',
  OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina',
  SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont',
  VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming',
  DC: 'Washington D.C.'
};

// States not visited
const unvisitedStates = [
  'AL', 'AK', 'AR', 'HI', 'ID', 'IA', 'KS', 'KY', 'ME', 'MI',
  'MN', 'MO', 'MT', 'NE', 'NH', 'NM', 'ND', 'OK', 'OR', 'SD',
  'WA', 'WV', 'WY'
];

// Map coloring
const statesCustomConfig = () => {
  const config = {};
  Object.keys(stateNames).forEach((abbr) => {
    config[abbr] = {
      fill: unvisitedStates.includes(abbr) ? '#eee8f0' : '#413b42',
      clickHandler: () => {},
    };
  });
  return config;
};

export default function VisitedStatesMap() {
  const [hoveredState, setHoveredState] = useState('');

  const handleMouseEnter = (event) => {
    const abbr = event.target.dataset.name;
    if (stateNames[abbr]) {
      setHoveredState(stateNames[abbr]);
    }
  };

  const handleMouseLeave = () => {
    setHoveredState('');
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
        U.S. States I&apos;ve Visited
      </h2>
      <div
        data-tooltip-id="map-tooltip"
        data-tooltip-content={hoveredState}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <USAMap customize={statesCustomConfig()} />
      </div>

      <Tooltip id="map-tooltip" />

      {/* Legend */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginTop: '1.5rem',
        fontSize: '0.95rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: '#413b42' }}></div>
          <span>Visited</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: '#eee8f0' }}></div>
          <span>Not Visited</span>
        </div>
      </div>
    </div>
  );
}
