// pages/_app.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import "../styles/theme.css";
import Layout from "../components/Layout";
import GoogleAnalytics from "../components/GoogleAnalytics";
import MicrosoftClarity from "../components/MicrosoftClarity";
import { Analytics } from "@vercel/analytics/react";
import * as gtag from "../lib/gtag";

import { Fira_Sans } from "next/font/google";
const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-fira",
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => gtag.pageview(url);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <>
      <GoogleAnalytics />
      <MicrosoftClarity />

      {/* Make Fira Sans the default for the whole app */}
      <div className={firaSans.className}>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </div>
    </>
  );
}

export default MyApp;
