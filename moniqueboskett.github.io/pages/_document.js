// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google Fonts: Fira Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Meta: Responsive, SEO, Social */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#dcc0e5" />
        <meta name="description" content="Portfolio site for Monique Boskett: marketing & event strategist, travel & community advocate." />
        <meta property="og:title" content="Monique Boskett Portfolio" />
        <meta property="og:description" content="Discover the portfolio and experiences of Monique Boskett." />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:url" content="https://moniqueboskett.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
