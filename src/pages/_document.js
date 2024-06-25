import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import crypto from 'crypto';

export default function Document() {
  const nonce = crypto.randomBytes(16).toString('base64');

  return (
    <Html lang="en">
      <Head>
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
        <NextScript />
      </body>
    </Html>
  )
}
