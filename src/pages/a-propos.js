import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/photo_Mika.jpg';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
};

const about = () => {
    return (
        <>
            <Head>
                <title>MonkeysDev | À Propos</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Je suis Mika, développeur web et designer UI/UX à Nancy. Avec plus de 3 ans d'expérience, je crée des expériences digitales esthétiques et fonctionnelles. Spécialisé en résolution de problèmes et en design centré sur l'utilisateur, j'apporte mon expertise à chaque projet, qu'il s'agisse de sites web ou d'applications mobiles." />
                <meta name="author" content="MonkeysDev" />

                {/* Balises Open Graph pour Facebook et LinkedIn */}
                <meta property="og:title" content="MonkeysDev | À Propos" />
                <meta property="og:description" content="Découvrez Mika, développeur web et designer UI/UX à Nancy avec plus de 3 ans d'expérience. Expert en création d'expériences digitales esthétiques et fonctionnelles." />
                <meta property="og:image" content="/images/profile/photo_Mika.jpg" />
                <meta property="og:url" content="https://www.monkeysdev.fr/à-propos" />

                {/* Balise Canonique */}
                <link rel="canonical" href="https://www.monkeysdev.fr/à-propos" />
            </Head>
            <TransitionEffect />

            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion et Expertise" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biographie</h2>
                            <p className='font-medium'>Bonjour, moi c&apos;est Mika, développeur web et designer UI/UX passionné par la création d&apos;expériences digitales à la fois esthétiques, fonctionnelles et centrées sur l&apos;utilisateur. Fort de 3 ans d&apos;expérience dans ce domaine, je cherche constamment des moyens innovants pour concrétiser les visions de mes clients.</p>
                            <p className='my-4 font-medium'>
                                Pour moi, le design ne se résume pas à l&apos;aspect visuel – c&apos;est avant tout résoudre des problèmes et créer des expériences intuitives et plaisantes pour les utilisateurs.
                            </p>
                            <p className='font-medium'>
                                Que ce soit pour un site web, une application mobile ou tout autre produit digital, je m&apos;engage à apporter mon expertise en design et ma réflexion centrée sur l&apos;utilisateur à chaque projet. J&apos;ai hâte de mettre mes compétences et ma passion au service de votre prochain projet.
                            </p>
                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={profilePic} alt="MonkeysDev" className="w-full h-auto rounded-2xl"
                                priority
                                sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                            />
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    +<AnimatedNumbers value={10} />
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Clients satisfaits</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    +<AnimatedNumbers value={20} />
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projets terminés</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    +<AnimatedNumbers value={3} />
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Années d&apos;expériences</h2>
                            </div>
                        </div>
                    </div>

                    <Skills />
                    {/* <Experience />
                    <Education /> */}
                </Layout>
            </main>
        </>
    );
};

export default about;
