import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          src="https://cdn-cookieyes.com/client_data/999d53387ee35c02ae6292c9/script.js"
          strategy="beforeInteractive"
        />
      </Head>
      <body>
        <Script id='theme-switcher' strategy='beforeInteractive'>
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
