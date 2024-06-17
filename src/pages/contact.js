import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useState } from 'react';
import TransitionEffect from '@/components/TransitionEffect';
import { PhoneIcon, EmailIcon, WhatsAppIcon } from '@/components/Icons';
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

const ContactBlock = ({ href, icon: Icon, text, className }) => (
    <motion.a
        href={href}
        target="_blank"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className={`flex flex-col items-center text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark ${className}`}
    >
        <Icon className="text-3xl mb-2" />
        <span>{text}</span>
    </motion.a>
);

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRecaptchaChange = (value) => {
        setRecaptchaToken(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        if (!recaptchaToken) {
            setError("Veuillez compléter le reCAPTCHA.");
            setIsLoading(false);
            return;
        }

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
            .then((result) => {
                setIsLoading(false);
                setIsSubmitted(true);
            }, (error) => {
                setIsLoading(false);
                setError("Une erreur s'est produite, veuillez réessayer.");
            });
    };

    return (
        <>
            <Head>
                <title>MonkeysDev | Contact</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Contactez MonkeysDev, développeur web et designer UI/UX à Nancy. Remplissez le formulaire de contact ou utilisez les informations fournies pour nous joindre directement." />
                <meta name="author" content="MonkeysDev" />

                <meta property="og:title" content="MonkeysDev | Contact" />
                <meta property="og:description" content="Contactez MonkeysDev, développeur web et designer UI/UX à Nancy. Remplissez le formulaire de contact ou utilisez les informations fournies pour nous joindre directement." />
                <meta property="og:image" content="/images/profile/MonkeyDevelopper_fade.png" />
                <meta property="og:url" content="https://www.monkeysdev.fr/contact" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Contactez-Moi" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <div className='w-full flex justify-around mt-16 mb-16 sm:flex-col sm:items-center sm:gap-10'>
                        <ContactBlock className="w-10 md:w-8 " href="tel:+0744529073" icon={PhoneIcon} text="+0744529073" />
                        <ContactBlock className="w-10 md:w-8 " href="mailto:monkeysdev.contact@gmail.com" icon={EmailIcon} text="monkeysdev.contact@gmail.com" />
                        <ContactBlock className="w-10 md:w-8" href="https://wa.me/0744529073" icon={WhatsAppIcon} text="WhatsApp" />
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='relative w-[70%] h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light lg:w-full'>
                            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="w-full">
                                    <div className="mb-4 w-full">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-light" htmlFor="name">
                                            Nom
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-light dark:border-gray-700"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4 w-full">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-light" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-light dark:border-gray-700"
                                            required
                                        />
                                    </div>
                                    <div className="mb-6 w-full">
                                        <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-light" htmlFor="message">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-light dark:border-gray-700"
                                            rows="5"
                                            required
                                        />
                                    </div>
                                    <ReCAPTCHA
                                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}  // Remplacez par votre clé de site reCAPTCHA
                                        onChange={handleRecaptchaChange}
                                    />
                                    {error && <p className="text-red-500 text-xs italic">{error}</p>}
                                    <div className="flex items-center justify-center">
                                        <button
                                            type="submit"
                                            className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                                        >
                                            {isLoading ? "Envoi..." : "Envoyer"}
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="text-center">
                                    <h2 className="text-2xl font-semibold dark:text-light">Votre message a été envoyé</h2>
                                    <p className="dark:text-light">Nous vous répondrons dès que possible.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default ContactForm;
