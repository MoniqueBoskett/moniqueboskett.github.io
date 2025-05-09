// pages/personal.js
import Navbar from '../components/Navbar';
import BackToTopButton from '../components/BackToTopButton';

export default function Personal() {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: '#dcc0e5',
          color: '#413b42',
          padding: '2rem',
          paddingTop: '6rem', // push content below navbar
          minHeight: '100vh',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Me</h1>

        <p style={{ fontSize: '1.25rem', maxWidth: '700px', lineHeight: '1.7' }}>
          Hi! I&apos;m Monique — a strategic event planner and experience designer who thrives on organizing amazing moments. Whether it&apos;s building community impact through charitable initiatives or curating unforgettable events, I bring creativity, calm, and care to everything I touch.
        </p>

        <h2 style={{ marginTop: '2.5rem', fontSize: '1.75rem' }}>Fun Facts</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1rem' }}>
          <li>I love houseplants 🌿</li>
          <li>I&apos;m a huge Philadelphia Eagles fan 🦅</li>
          <li>Cheez-Its and Nutrageous bars are my guilty pleasure snacks 😋</li>
          <li>Traveling is my joy — ask me where I&apos;m going next!</li>
        </ul>

        <BackToTopButton />
      </div>
    </>
  );
}
