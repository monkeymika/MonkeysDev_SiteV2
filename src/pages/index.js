import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/profile/MonkeyDevelopper_fade.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>MonkeysDev - Développeur Web à Nancy</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description"
          content="MonkeysDev - Développeur web freelance sur Nancy. Je réalise et vous accompagne dans la création de votre site internet." />
        <meta name="author" content="MonkeysDev" />
        <meta name="keywords" content="Développeur web, Freelance, Nancy, Création de site internet, MonkeysDev" />

        {/* Balises Open Graph pour Facebook et LinkedIn */}
        <meta property="og:title" content="MonkeysDev - Développeur Web à Nancy" />
        <meta property="og:description" content="Votre entreprise a une histoire unique. En tant que développeur web à Nancy, je crée des sites internet qui la racontent. Laissez votre marque faire la différence." />
        <meta property="og:image" content="/images/profile/MonkeyDevelopper_fade.png" />
        <meta property="og:url" content="https://www.monkeysdev.fr" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MonkeysDev" />

        {/* Balise Canonical */}
        <link rel="canonical" href="https://www.monkeysdev.fr" />
      </Head>

      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full gap-5 md:gap-0 lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='MonkeysDev' className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Vos Idées Web Deviennent Réalité." className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
              ' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                Votre entreprise a une histoire unique. En tant que développeur web à Nancy, je crée des sites internet qui la racontent. Laissez votre marque faire la différence.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/contact"
                  className='flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                   border-2 border-solid border-transparent hover:border-dark
                   
                   dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                   hover:dark:border-light md:p-2 md:px-4 md:text-base
                  '
                  download={true}
                >Discutons <LinkArrow className={"w-6 ml-1"} />

                </Link>
                <Link href="/portfolio"
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >Réalisations</Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-16 md:hidden'>
          <Image src={lightBulb} alt='MonkeysDev' className='w-full h-auto' />
        </div>
      </main>
    </>
  );
}
