const crypto = require('crypto');

const isProd = process.env.NODE_ENV === 'production';

function generateNonce() {
  return crypto.randomBytes(16).toString('base64');
}

const nextConfig = {
  reactStrictMode: true,
}
