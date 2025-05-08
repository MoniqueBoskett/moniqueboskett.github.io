import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const visitedStates = [
  'Arizona', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
  'Georgia', 'Illinois', 'Indiana', 'Kentucky', 'Louisiana', 'Maryland',
  'Massachusetts', 'Mississippi', 'New Jersey', 'New York', 'North Carolina',
  'Ohio', 'Pennsylvania', 'South Carolina', 'Tennessee', 'Texas', 'Utah',
  'Vermont', 'Virginia', 'Wisconsin'
];

const VisitedStatesMap = () => {
  const [clickedState, setClickedState] = useState(null);

  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '2rem',
      backgroundColor: '#dcc0e5',
      color: '#413b42',
      borderRadius: '12px',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>States I've Visited</h2>

      {clickedState && (
        <p style={{
          backgroundColor: '#eee8f0',
          color: '#413b42',
          display: 'inline-block',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          marginBottom: '1rem',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          You clicked: {clickedState}
        </p>
      )}

      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateName = geo.properties.name;
              const isVisited = visitedStates.includes(stateName);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => setClickedState(stateName)}
                  fill={isVisited ? '#eee8f0' : '#f6eafa'}
                  stroke="#ccc"
                  style={{
                    default: { outline: 'none' },
                    hover: {
                      fill: '#bfa2d0',
                      cursor: 'pointer',
                      outline: 'none'
                    },
                    pressed: {
                      fill: '#bfa2d0',
                      outline: 'none'
                    }
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default VisitedStatesMap;
