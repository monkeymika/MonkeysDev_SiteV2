const crypto = require('crypto');

function generateNonce() {
  return crypto.randomBytes(16).toString('base64');
}

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
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
              script-src 'self' https://www.google.com https://www.gstatic.com https://www.googletagmanager.com https://cdn-cookieyes.com 'nonce-${nonce}' ${isProd ? '' : "'unsafe-inline' 'unsafe-eval'"};
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https://cdn-cookieyes.com;
              font-src 'self';
              connect-src 'self' https://api.emailjs.com https://www.google.com https://www.recaptcha.net https://region1.google-analytics.com https://cdn-cookieyes.com https://log.cookieyes.com;
              frame-src 'self' https://www.google.com https://www.recaptcha.net;
              form-action 'self';
              base-uri 'self';
            `.replace(/\n/g, ''),
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
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
        ],
      },
    ];
  },
};

module.exports = nextConfig;
