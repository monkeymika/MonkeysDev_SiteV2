const crypto = require('crypto');

const isProd = process.env.NODE_ENV === 'production';

function generateNonce() {
  return crypto.randomBytes(16).toString('base64');
}

module.exports = {
  reactStrictMode: true,
  async headers() {
    const nonce = generateNonce();
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' https://www.google.com https://www.gstatic.com  https://www.googletagmanager.com https://cdn-cookieyes.com 'nonce-${nonce}' ${isProd ? '' : "'unsafe-inline' 'unsafe-eval'"};
              style-src 'self' 'unsafe-inline';
              img-src 'self' data:;
              font-src 'self';
              connect-src 'self' https://api.emailjs.com https://www.google.com https://www.recaptcha.net https://region1.google-analytics.com;
              frame-src https://www.google.com https://www.recaptcha.net;
            `.replace(/\n/g, ''), // Supprime les retours à la ligne pour éviter les erreurs
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(self), microphone=()',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};
