// styles/styles.js

// General layout container style for main content
export const layoutStyles = {
  main: {
    padding: '2rem 1rem 4rem',
    maxWidth: '1200px',
    margin: '0 auto',
    boxSizing: 'border-box',
  },
};

// General section style for each page (inherits global font)
export const sectionStyle = {
  color: 'var(--text)',
  padding: '2rem 1rem',
  boxSizing: 'border-box',
};

// Consistent heading style for page titles
export const headingStyle = {
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: '2rem',
  padding: '0 1rem',
  color: 'var(--text)',
};

// Paragraph style for descriptions and general text
export const paragraphStyle = {
  fontSize: '1.15rem',
  lineHeight: 1.6,
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto 2rem',
  color: 'var(--text)',
};

// Card-style container used for sections like jobs, education, etc.
export const cardStyle = {
  backgroundColor: 'var(--card)',
  color: 'var(--card-text)',
  border: '1px solid var(--border)',
  borderRadius: '12px',
  padding: '1.5rem',
  marginBottom: '2rem',
  maxWidth: '900px',
  marginLeft: 'auto',
  marginRight: 'auto',
  boxSizing: 'border-box',
  boxShadow: 'var(--shadow-1)',
};

// Grid layout for image displays (travel, fun facts, etc.)
export const photoGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
  gap: '1rem',
  marginTop: '1rem',
};

// Styling for individual photos
export const photoStyle = {
  width: '100%',
  aspectRatio: '1 / 1',
  objectFit: 'cover',
  borderRadius: '8px',
  cursor: 'pointer',
  backgroundColor: 'var(--badge-bg)',
  border: '1px solid var(--border)',
  boxShadow: 'var(--shadow-1)',
};

// Reusable toggle/show-hide button
export const toggleButton = {
  backgroundColor: 'var(--accent)',
  color: 'var(--accent-contrast)',
  border: 'none',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  borderRadius: '6px',
  marginBottom: '1rem',
  width: '100%',
  maxWidth: '240px',
  boxShadow: 'var(--shadow-1)',
};

// Shared primary button style
export const buttonStyle = {
  backgroundColor: 'var(--accent)',
  color: 'var(--accent-contrast)',
  fontWeight: 'bold',
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  boxShadow: 'var(--shadow-1)',
};
