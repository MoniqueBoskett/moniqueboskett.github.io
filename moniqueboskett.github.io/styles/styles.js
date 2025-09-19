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

// General section style for each page
export const sectionStyle = {
  color: '#413b42',
  fontFamily: 'Fira Sans',
  padding: '2rem 1rem',
  boxSizing: 'border-box',
};

// Consistent heading style for page titles
export const headingStyle = {
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: '2rem',
  padding: '0 1rem',
};

// Paragraph style for descriptions and general text
export const paragraphStyle = {
  fontSize: '1.15rem',
  lineHeight: 1.6,
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto 2rem',
};

// Card-style container used for sections like jobs, education, etc.
export const cardStyle = {
  backgroundColor: '#eee8f0',
  borderRadius: '12px',
  padding: '1.5rem',
  marginBottom: '2rem',
  maxWidth: '900px',
  marginLeft: 'auto',
  marginRight: 'auto',
  boxSizing: 'border-box',
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
  backgroundColor: '#ccc',
};

// Reusable toggle/show-hide button
export const toggleButton = {
  backgroundColor: '#dcc0e5',
  border: 'none',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  borderRadius: '6px',
  marginBottom: '1rem',
  width: '100%',
  maxWidth: '240px',
};

// Shared primary button style
export const buttonStyle = {
  backgroundColor: '#dcc0e5',
  color: '#413b42',
  fontWeight: 'bold',
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};
