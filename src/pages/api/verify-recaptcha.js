// pages/api/verify-recaptcha.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only POST requests allowed' });
    }

    const { token } = req.body;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();

    if (!data.success) {
        return res.status(400).json({ message: 'reCAPTCHA verification failed', ...data });
    }

    res.status(200).json({ message: 'reCAPTCHA verification succeeded', ...data });
}
