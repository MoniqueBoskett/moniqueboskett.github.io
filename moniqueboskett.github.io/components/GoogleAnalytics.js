// components/GoogleAnalytics.js
'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  if (!id) return null; // don’t inject anything if ID isn’t set

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
