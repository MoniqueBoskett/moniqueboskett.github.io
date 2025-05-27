// components/Layout.js
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '100px', maxWidth: '1100px', margin: '0 auto' }}>
        {children}
      </main>
    </>
  );
}
