/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  async redirects() {
    return [
      {
        source: '/(.*)',
        destination: '/maintenance',
        permanent: false,
      },
    ];
  },
};


const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)', // Applique les en-têtes à toutes les pages
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' https://www.google.com https://www.gstatic.com ${isProd ? '' : "'unsafe-inline' 'unsafe-eval'"};
              style-src 'self' 'unsafe-inline';
              img-src 'self' data:;
              font-src 'self';
              connect-src 'self';
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

module.exports = nextConfig;
