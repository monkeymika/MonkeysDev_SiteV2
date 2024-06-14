import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import TransitionEffect from '@/components/TransitionEffect';

const PolitiqueDeConfidentialite = () => {
    return (
        <>
            <Head>
                <title>MonkeysDev | Politique de Confidentialité</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Découvrez la politique de confidentialité de MonkeysDev, développeur web et designer UI/UX à Nancy." />
                <meta name="author" content="MonkeysDev" />

                {/* Balises Open Graph pour Facebook et LinkedIn */}
                <meta property="og:title" content="MonkeysDev | Politique de Confidentialité" />
                <meta property="og:description" content="Découvrez la politique de confidentialité de MonkeysDev, développeur web et designer UI/UX à Nancy." />
                <meta property="og:image" content="/images/profile/MonkeyDevelopper_fade.png" />
                <meta property="og:url" content="https://www.monkeysdev.fr/politique-de-confidentialite" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Politique de Confidentialité" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <div className='w-full flex justify-center'>
                        <div className='w-[70%] lg:w-full'>
                            <div className='bg-light dark:bg-dark p-8 rounded-2xl'>
                                <p className='text-dark dark:text-light'>
                                    {/* Votre contenu pour la politique de confidentialité ici */}
                                </p>
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default PolitiqueDeConfidentialite;
