// components/MicrosoftClarity.js
'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';

export default function MicrosoftClarity() {
  const CLARITY_ID = process.env.NEXT_PUBLIC_MICROSOFT_CLARITY;
  const router = useRouter();

  // Don’t inject anything if the env var is missing
  if (!CLARITY_ID) return null;

  // Track client-side route changes (Pages Router)
  useEffect(() => {
    const handleRouteChange = (url) => {
      try {
        // Inform Clarity of the new virtual page path
        window.clarity?.('set', 'page', url);
        // Explicit pageview event (defensive)
        window.clarity?.('track', 'PageView');
      } catch {}
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    // Also fire once for the initial load
    handleRouteChange(window.location.pathname + window.location.search + window.location.hash);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `}
    </Script>
  );
}
