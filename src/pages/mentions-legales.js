/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    // Supprimez la configuration des en-têtes car ils ne sont pas compatibles avec l'exportation statique
    // async headers() {
    //   return [
    //     {
    //       source: '/(.*)', // Applique les en-têtes à toutes les pages
    //       headers: [
    //         {
    //           key: 'Content-Security-Policy',
    //           value: `
    //             default-src 'self';
    //             script-src 'self' https://www.google.com https://www.gstatic.com ${isProd ? '' : "'unsafe-inline' 'unsafe-eval'"};
    //             style-src 'self' 'unsafe-inline';
    //             img-src 'self' data:;
    //             font-src 'self';
    //             connect-src 'self';
    //             frame-src https://www.google.com https://www.recaptcha.net;
    //           `.trim().replace(/\n/g, ' '), // Supprime les retours à la ligne pour éviter les erreurs
    //         },
    //         {
    //           key: 'X-Content-Type-Options',
    //           value: 'nosniff',
    //         },
    //         {
    //           key: 'Referrer-Policy',
    //           value: 'strict-origin-when-cross-origin',
    //         },
    //         {
    //           key: 'Permissions-Policy',
    //           value: 'geolocation=(self), microphone=()',
    //         },
    //         {
    //           key: 'X-Frame-Options',
    //           value: 'DENY',
    //         },
    //         {
    //           key: 'X-XSS-Protection',
    //           value: '1; mode=block',
    //         },
    //       ],
    //     },
    //   ];
    // },
};

module.exports = nextConfig;
