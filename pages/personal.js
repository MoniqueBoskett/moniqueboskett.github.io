export default function Personal() {
    return (
      <div style={{
        backgroundColor: '#dcc0e5',
        color: '#413b42',
        padding: '2rem',
        minHeight: '100vh',
        fontFamily: 'sans-serif'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Me</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '700px' }}>
          Hi! I’m Monique — a strategic event planner and experience designer who thrives on organizing amazing moments. Whether it's building community impact through charitable initiatives or curating unforgettable events, I bring creativity, calm, and care to everything I touch.
        </p>
  
        <h2 style={{ marginTop: '2rem' }}>Fun Facts:</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <li>I love houseplants 🌿</li>
          <li>I'm a huge Philadelphia Eagles fan 🦅</li>
          <li>Cheez-Its and Nutrageous bars are my guilty pleasure snacks 😋</li>
          <li>Traveling is my joy — ask me where I’m going next!</li>
        </ul>
      </div>
    );
  }
  