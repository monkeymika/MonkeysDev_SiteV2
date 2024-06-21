// pages/_app.js
import NavBar from '@/components/NavBar';
import Logo from '@/components/Logo';
import '@/styles/globals.css';
import { Montserrat } from "next/font/google";
import Head from 'next/head';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});

const GA_TRACKING_ID = 'G-VYGX0SP46J'; // Remplacez par votre propre ID de suivi

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="MonkeysDev - Développeur web freelance sur Nancy. Je réalise et vous accompagne dans la création de votre site internet." />
        <meta name="author" content="MonkeysDev" />

        {/* Balises Open Graph pour Facebook et LinkedIn */}
        <meta property="og:title" content="MonkeysDev - Développeur Web à Nancy" />
        <meta property="og:description" content="Votre entreprise a une histoire unique. En tant que développeur web à Nancy, je crée des sites internet qui la racontent. Laissez votre marque faire la différence." />
        <meta property="og:image" content="/images/profile/MonkeyDevelopper_fade.png" />
        <meta property="og:url" content="https://www.monkeysdev.fr" />

        <title>MonkeysDev</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://cs.iubenda.com/autoblocking/3678612.js"
          async
        ></script>
        <script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          charset="UTF-8"
          async
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _iub = _iub || [];
              _iub.csConfiguration = {
                askConsentAtCookiePolicyUpdate: true,
                floatingPreferencesButtonDisplay: "bottom-right",
                lang: "fr",
                perPurposeConsent: true,
                siteId: 3678612,
                whitelabel: false,
                cookiePolicyId: 14120052,
                cookiePolicyUrl: "https://www.monkeysdev.fr/politique-de-confidentialite",
                banner: {
                  acceptButtonDisplay: true,
                  closeButtonDisplay: false,
                  customizeButtonDisplay: true,
                  explicitWithdrawal: true,
                  listPurposes: true,
                  position: "float-top-center",
                  rejectButtonDisplay: true,
                  showTitle: false
                }
              };
            `
          }}
        ></script>
      </Head>

      <GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID} />

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
