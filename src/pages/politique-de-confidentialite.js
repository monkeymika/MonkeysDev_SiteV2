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
                                <div className='text-dark dark:text-light'>
                                    <h2 className="font-bold text-xl mb-4">Politique de Confidentialité</h2>
                                    <h2 className="font-bold text-xl mb-4">1. Collecte de l’information</h2>
                                    <p className="mb-4">Nous recueillons des informations lorsque vous nous contactez via notre site <a href="https://monkeysdev.fr">monkeysdev.fr</a>. Les informations recueillies incluent votre nom, votre adresse e-mail et votre numéro de téléphone.</p>

                                    <h2 className="font-bold text-xl mb-4">2. Utilisation des informations</h2>
                                    <p className="mb-4">Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
                                    <ul className="list-disc list-inside mb-4">
                                        <li>Vous contacter par e-mail ou téléphone.</li>
                                        <li>Améliorer notre site Web.</li>
                                        <li>Améliorer le service client et vos besoins de prise en charge.</li>
                                    </ul>

                                    <h2 className="font-bold text-xl mb-4">3. Confidentialité des informations</h2>
                                    <p className="mb-4">Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées ou données à une autre société pour n'importe quelle raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande et/ou une transaction, par exemple pour expédier une commande.</p>

                                    <h2 className="font-bold text-xl mb-4">4. Divulgation à des tiers</h2>
                                    <p className="mb-4">Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierces parties de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.</p>

                                    <h2 className="font-bold text-xl mb-4">5. Protection des informations</h2>
                                    <p className="mb-4">Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default PolitiqueDeConfidentialite;
