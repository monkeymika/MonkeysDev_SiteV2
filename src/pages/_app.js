import NavBar from '@/components/NavBar';
import Logo from '@/components/Logo';
import '@/styles/globals.css';
import { Montserrat } from "next/font/google";
import Head from 'next/head';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});

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
      </Head>
      <link rel="icon" href="/favicon.ico" />

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
