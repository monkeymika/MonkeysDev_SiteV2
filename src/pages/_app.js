import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { useEffect, useState } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
});

const GA_TRACKING_ID = 'G-VYGX0SP46J';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [nonce, setNonce] = useState('');

  useEffect(() => {
    const nonceMetaTag = document.querySelector('meta[name="nonce"]');
    if (nonceMetaTag) {
      setNonce(nonceMetaTag.content);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="MonkeysDev - Développeur web freelance sur Nancy. Je réalise et vous accompagne dans la création de votre site internet." />
        <meta name="author" content="MonkeysDev" />

        <meta property="og:title" content="MonkeysDev - Développeur Web à Nancy" />
        <meta property="og:description" content="Votre entreprise a une histoire unique. En tant que développeur web à Nancy, je crée des sites internet qui la racontent. Laissez votre marque faire la différence." />
        <meta property="og:image" content="/images/profile/MonkeyDevelopper_fade.png" />
        <meta property="og:url" content="https://www.monkeysdev.fr" />

        <title>MonkeysDev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID} />

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-VYGX0SP46J" strategy="afterInteractive" nonce={nonce} />
      <Script id="google-analytics" strategy="afterInteractive" nonce={nonce}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>

      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
