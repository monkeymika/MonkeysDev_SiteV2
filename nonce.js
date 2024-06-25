// nonce.js
const crypto = require('crypto');

let nonce = null;

function generateNonce() {
    nonce = crypto.randomBytes(16).toString('base64');
    return nonce;
}

function getNonce() {
    return nonce;
}

module.exports = {
    generateNonce,
    getNonce,
};
