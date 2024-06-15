import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/JesonRich_Project.png";
import project2 from "../../public/images/projects/splashScreen_Tokdem.png";
import project3 from "../../public/images/projects/splashScreen_Hire.png";
import project4 from "../../public/images/projects/splashScreen_AuPetitGourmet.png";
import project5 from "../../public/images/projects/splasScreen_Toshokan.png";
import project6 from "../../public/images/projects/splashScreen_VandoeuvreBoxe.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article
            className="w-full flex items-center justify-between relative rounded-br-2xl
            rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
            "
        >
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            "
            />
            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full "
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>
                <div className="mt-2 flex items-center">
                    {/* <Link href={github} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link> */}
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                        dark:bg-light dark:text-dark
                        sm:px-4 sm:text-base
                        "
                    >
                        Voir Projet
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({ title, type, img, link, github }) => {
    return (
        <article
            className="w-full flex flex-col item-center justify-between rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
        "
        >
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            "
            />
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg "
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
                        {title}
                    </h2>
                </Link>

                <div className="w-full mt-2 flex items-center justify-between">
                    <Link
                        href={link}
                        target="_blank"
                        className="text-lg font-semibold underline md:text-base"
                    >
                        Voir
                    </Link>
                    {/* <Link href={github} target="_blank" className="w-8 md:w-6">
                        <GithubIcon />
                    </Link> */}
                </div>
            </div>
        </article>
    );
};

const Portfolio = () => {
    return (
        <>
            <Head>
                <title>MonkeysDev | Portfolio</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name='description' content="Découvrez les projets que j'ai réalisés en tant que développeur web et designer UI/UX à Nancy. Explorez une variété de sites web et applications mobiles que j'ai créés, avec une attention particulière à l'esthétique, la fonctionnalité et l'expérience utilisateur." />
                <meta name="author" content="MonkeysDev" />

                {/* Balises Open Graph pour Facebook et LinkedIn */}
                <meta property="og:title" content="MonkeysDev | Portfolio" />
                <meta property="og:description" content="Découvrez les projets réalisés par MonkeysDev, développeur web et designer UI/UX à Nancy. Explorez une variété de sites web et applications mobiles créés avec une attention particulière à l'esthétique, la fonctionnalité et l'expérience utilisateur." />
                <meta property="og:image" content="/images/profile/MonkeyDevelopper_fade.png" />
                <meta property="og:url" content="https://www.monkeysdev.fr/portfolio" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Projets en Lumière"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Jeson Rich Peinture & Décoration"
                                img={project1}
                                summary="Un site créé avec WordPress et Divi en constructeur de page. Ce site présente les services et réalisations d'un peintre professionnel. Il offre une navigation intuitive et met en avant des galeries de travaux de peinture, des témoignages clients et des informations sur les services proposés."
                                link="https://jesonrichpeinturedecoration.com/"
                                github="/"
                                type="Site pour un artisan peintre"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Au Petit Gourmet"
                                img={project4}
                                summary="Un site de restaurant avec des fonctionnalités de réservation en ligne, des menus interactifs, et des galeries de photos pour attirer les clients."
                                link="https://aupetitgourmet.fr/"
                                github="/"
                                type="Restaurant"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Hire"
                                img={project3}
                                summary="Une application mobile pour faciliter la recherche et l'embauche de talents, avec des fonctionnalités de messagerie et de gestion de projets."
                                link="https://hire-app.fr/"
                                github="/"
                                type="Présentation d'une application mobile"
                            />
                        </div>

                        <div className="col-span-12">
                            <FeaturedProject
                                title="Toshokan"
                                img={project5}
                                summary="Toshokan, un site conçu pour présenter une application mobile dédiée à la gestion des collections de mangas. Cette application permet aux utilisateurs de suivre leurs lectures, découvrir de nouveaux titres, et gérer leur bibliothèque personnelle de mangas avec une interface intuitive et des fonctionnalités avancées."
                                link="https://toshokan-12c9e.web.app/home"
                                github="/"
                                type="Présentation d'une application mobile"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Tokdem"
                                img={project2}
                                summary="Tokdem, un site de présentation d'une application mobile innovante pour la communication interne des entreprises. Elle permet de diffuser des messages, d'échanger via messagerie, de gérer une base documentaire, de proposer des missions et d'utiliser un chatbot IA. Tokdem améliore l'engagement et la fluidité de la communication au sein des équipes."
                                link="https://tokdem.com/"
                                github="/"
                                type="Présentation d'une application mobile"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Vandoeuvre Boxe"
                                img={project6}
                                summary="Un site web pour le club de boxe de Vandoeuvre, présentant les horaires, les entraîneurs, et les événements à venir. Inclut également une galerie de photos et des témoignages."
                                link="https://vandoeuvre-boxe.fr/"
                                github="/"
                                type="Site du club de boxe de Vandoeuvre"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Portfolio;
