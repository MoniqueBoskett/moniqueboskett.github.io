// components/Layout.js

import Script from 'next/script';
import Navbar from './Navbar';
import { layoutStyles } from '../styles/styles';

export default function Layout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  const CLARITY_ID = process.env.NEXT_PUBLIC_MICROSOFT_CLARITY;

  return (
    <>
      {/* Google Analytics */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {/* Microsoft Clarity */}
      {CLARITY_ID && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      )}

      <Navbar />
      <main style={{ ...layoutStyles.main, paddingTop: '100px' }}>
        {children}
      </main>
    </>
  );
}
