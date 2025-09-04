// components/Layout.js
'use client';

import Navbar from './Navbar';
import BackToTopButton from './BackToTopButton';
import GoogleAnalytics from './GoogleAnalytics';
import MicrosoftClarity from './MicrosoftClarity';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { layoutStyles } from '../styles/styles';

export default function Layout({ children }) {
  // If env vars aren't set, GA/Clarity components simply render nothing.
  return (
    <>
      {/* Analytics (global) */}
      <GoogleAnalytics />
      <MicrosoftClarity />
      <Analytics />
      <SpeedInsights />

      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: 1,
          height: 1,
          overflow: 'hidden'
        }}
        onFocus={(e) => {
          // reveal when focused
          Object.assign(e.currentTarget.style, {
            left: '1rem',
            top: '1rem',
            width: 'auto',
            height: 'auto',
            padding: '0.5rem 0.75rem',
            background: '#eee8f0',
            color: '#413b42',
            borderRadius: '8px',
            zIndex: 2000
          });
        }}
        onBlur={(e) => {
          Object.assign(e.currentTarget.style, {
            left: '-9999px',
            top: 'auto',
            width: 1,
            height: 1,
            padding: 0
          });
        }}
      >
        Skip to content
      </a>

      <Navbar />

      {/* Main content */}
      <main id="main-content" style={{ ...layoutStyles.main, paddingTop: '100px' }}>
        {children}
      </main>

      {/* Back to top on every page */}
      <BackToTopButton />
    </>
  );
}
