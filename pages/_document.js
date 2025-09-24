// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // Set theme before React renders to avoid a flash
  const setInitialTheme = `
(function() {
  try {
    var stored = localStorage.getItem("theme"); // "light" | "dark" | null
    var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored ? stored : (systemDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

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
        {/* Tell browsers we support both color schemes for built-in UI elements */}
        <meta name="color-scheme" content="light dark" />
        {/* Adaptive browser UI color (address bar, etc.) */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="var(--accent)" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0f0f11" />

        <meta
          name="description"
          content="Portfolio site for Monique Boskett: marketing & event strategist, travel & community advocate."
        />
        <meta property="og:title" content="Monique Boskett Portfolio" />
        <meta property="og:description" content="Discover the portfolio and experiences of Monique Boskett." />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:url" content="https://moniqueboskett.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        {/* Set initial theme before the app paints */}
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
