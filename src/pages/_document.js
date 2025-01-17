import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import crypto from 'crypto';

function generateNonce() {
  return crypto.randomBytes(16).toString('base64');
}

export default function Document(ctx) {
  const nonce = generateNonce();

  return (
    <Html lang="en">
      <Head>
        <meta name="nonce" content={nonce} /> {/* Ajout de la meta tag nonce */}
        <Script
          src="https://cdn-cookieyes.com/client_data/999d53387ee35c02ae6292c9/script.js"
          strategy="beforeInteractive"
          nonce={nonce}
        />
      </Head>
      <body>
        <Script id='theme-switcher' strategy='beforeInteractive' nonce={nonce}>
          {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          `}
        </Script>
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  );
}
