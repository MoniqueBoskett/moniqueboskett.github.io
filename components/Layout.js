// components/Layout.js
import Navbar from './Navbar';
import { layoutStyles } from '../styles/styles';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ ...layoutStyles.main, marginTop: '60px' }}>
        {children}
      </main>
    </>
  );
}
