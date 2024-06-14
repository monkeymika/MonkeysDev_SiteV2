import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import TransitionEffect from '@/components/TransitionEffect';

const MentionsLegales = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <Head>
                <title>MonkeysDev | Mentions Légales</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Découvrez les mentions légales de MonkeysDev, développeur web et designer UI/UX à Nancy." />
                <meta name="author" content="MonkeysDev" />

                {/* Balises Open Graph pour Facebook et LinkedIn */}
                <meta property="og:title" content="MonkeysDev | Mentions Légales" />
                <meta property="og:description" content="Découvrez les mentions légales de MonkeysDev, développeur web et designer UI/UX à Nancy." />
                <meta property="og:image" content="/images/profile/MonkeyDevelopper_fade.png" />
                <meta property="og:url" content="https://www.monkeysdev.fr/mentions-legales" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Mentions Légales" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <div className='w-full flex justify-center'>
                        <div className='w-[70%] lg:w-full'>
                            <div className='bg-light dark:bg-dark p-8 rounded-2xl'>
                                <div className='text-dark dark:text-light'>
                                    <h2 className="font-bold text-xl mb-4">Définitions</h2>
                                    <p className="mb-4"><b>Client :</b> tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.<br />
                                        <b>Prestations et Services :</b> <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> met à disposition des Clients :</p>

                                    <p className="mb-4"><b>Contenu :</b> Ensemble des éléments constituants l&apos;information présente sur le Site, notamment textes – images – vidéos.</p>

                                    <p className="mb-4"><b>Informations clients :</b> Ci après dénommé « Information (s) » qui correspondent à l&apos;ensemble des données personnelles susceptibles d&apos;être détenues par <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> pour la gestion de votre compte, de la gestion de la relation client et à des fins d’analyses et de statistiques.</p>

                                    <p className="mb-4"><b>Utilisateur :</b> Internaute se connectant, utilisant le site susnommé.</p>
                                    <p className="mb-4"><b>Informations personnelles :</b> « Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l&apos;identification des personnes physiques auxquelles elles s&apos;appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>
                                    <p className="mb-4">Les termes « données à caractère personnel », « personne concernée », « sous traitant » et « données sensibles » ont le sens défini par le Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>

                                    <h2 className="font-bold text-xl mb-4">1. Présentation du site internet.</h2>
                                    <p className="mb-4">En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, il est précisé aux utilisateurs du site internet <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi:</p>
                                    <p className="mb-4"><strong>Propriétaire</strong> :  Auto entreprise MonkeysDev   – 78 rue de la justice 54710 Ludres<br />
                                        <strong>Responsable publication</strong> : Aubras Michael – monkeysdev.contact@gmail.com<br />
                                        Le responsable publication est une personne physique ou une personne morale.<br />
                                        <strong>Webmaster</strong> : Aubras Michael – monkeysdev.contact@gmail.com<br />
                                        <strong>Hébergeur</strong> : Hostinger – 61 Rue Lordou Vironos 6023 Larnaca Pas de numéro<br />
                                        <strong>Délégué à la protection des données</strong> : Aubras Michael – monkeysdev.contact@gmail.com<br />
                                    </p>

                                    <div className="mb-4"><p>Ces mentions légales RGPD sont issues du <a href="https://fr.orson.io/1371/generateur-mentions-legales" title="générateur gratuit offert par Orson.io">générateur gratuit offert par Orson.io</a></p></div>

                                    <h2 className="font-bold text-xl mb-4">2. Conditions générales d’utilisation du site et des services proposés.</h2>
                                    <p className="mb-4">Le Site constitue une œuvre de l&apos;esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables.
                                        Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.</p>

                                    <p className="mb-4">L&apos;utilisation du site <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> implique l&apos;acceptation pleine et entière des conditions générales d&apos;utilisation ci-après décrites. Ces conditions d&apos;utilisation sont susceptibles d&apos;être modifiées ou complétées à tout moment, les utilisateurs du site <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> sont donc invités à les consulter de manière régulière.</p>

                                    <p className="mb-4">Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a>, qui s&apos;efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l&apos;intervention.
                                        Le site web <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> est mis à jour régulièrement par <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> responsable. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s&apos;imposent néanmoins à l&apos;utilisateur qui est invité à s&apos;y référer le plus souvent possible afin d&apos;en prendre connaissance.</p>

                                    <h2 className="font-bold text-xl mb-4">3. Description des services fournis.</h2>
                                    <p className="mb-4">Le site internet <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> a pour objet de fournir une information concernant l&apos;ensemble des activités de la société.
                                        <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> s&apos;efforce de fournir sur le site <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>

                                    <p className="mb-4">Toutes les informations indiquées sur le site <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> sont données à titre indicatif, et sont susceptibles d&apos;évoluer. Par ailleurs, les renseignements figurant sur le site <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>

                                    <h2 className="font-bold text-xl mb-4">4. Limitations contractuelles sur les données techniques.</h2>
                                    <p className="mb-4">Le site utilise la technologie JavaScript.
                                        Le site Internet ne pourra être tenu responsable de dommages matériels liés à l&apos;utilisation du site. De plus, l&apos;utilisateur du site s&apos;engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour
                                        Le site <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> est hébergé chez un prestataire sur le territoire de l&apos;Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>

                                    <p className="mb-4">L&apos;objectif est d&apos;apporter une prestation qui assure le meilleur taux d&apos;accessibilité. L&apos;hébergeur assure la continuité de son service 24 Heures sur 24, tous les jours de l&apos;année. Il se réserve néanmoins la possibilité d&apos;interrompre le service d&apos;hébergement pour les durées les plus courtes possibles notamment à des fins de maintenance, d&apos;amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les Prestations et Services génèrent un trafic réputé anormal.</p>

                                    <p className="mb-4"><a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> et l&apos;hébergeur ne pourront être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie lié notamment à l&apos;encombrement du réseau empêchant l&apos;accès au serveur.</p>

                                    <h2 className="font-bold text-xl mb-4">5. Propriété intellectuelle et contrefaçons.</h2>
                                    <p className="mb-4"><a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> est propriétaire des droits de propriété intellectuelle et détient les droits d&apos;usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons.
                                        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a>.</p>

                                    <p className="mb-4">Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>

                                    <h2 className="font-bold text-xl mb-4">6. Limitations de responsabilité.</h2>
                                    <p className="mb-4"><a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> agit en tant qu&apos;éditeur du site. <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a>  est responsable de la qualité et de la véracité du Contenu qu&apos;il publie.</p>

                                    <p className="mb-4"><a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur, lors de l&apos;accès au site internet <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a>, et résultant soit de l&apos;utilisation d&apos;un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.</p>

                                    <p className="mb-4"><a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> ne pourra également être tenu responsable des dommages indirects (tels par exemple qu&apos;une perte de marché ou perte d&apos;une chance) consécutifs à l&apos;utilisation du site <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a>.
                                        Des espaces interactifs (possibilité de poser des questions dans l&apos;espace contact) sont à la disposition des utilisateurs. <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l&apos;utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie ...).</p>

                                    <h2 className="font-bold text-xl mb-4">7. Gestion des données personnelles.</h2>
                                    <p className="mb-4">Le Client est informé des réglementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l&apos;Economie Numérique, la Loi Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).</p>

                                    <h3 className="font-bold">7.1 Responsables de la collecte des données personnelles</h3>
                                    <p className="mb-4">Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de l&apos;Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données Personnelles est : MonkeysDev. <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a>est représenté par Aubras Michael, son représentant légal</p>

                                    <p className="mb-4">En tant que responsable du traitement des données qu&apos;il collecte, <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> s&apos;engage à respecter le cadre des dispositions légales en vigueur. Il lui appartient notamment au Client d&apos;établir les finalités de ses traitements de données, de fournir à ses prospects et clients, à partir de la collecte de leurs consentements, une information complète sur le traitement de leurs données personnelles et de maintenir un registre des traitements conforme à la réalité.
                                        Chaque fois que <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> traite des Données Personnelles, <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> prend toutes les mesures raisonnables pour s&apos;assurer de l&apos;exactitude et de la pertinence des Données Personnelles au regard des finalités pour lesquelles <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> les traite.</p>
                                    <h3 className="font-bold">7.2 Finalité des données collectées</h3>
                                    <p className="mb-4"><a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> est susceptible de traiter tout ou partie des données :</p>

                                    <ul className="list-disc list-inside mb-4">
                                        <li>pour permettre la navigation sur le Site et la gestion et la traçabilité des prestations et services commandés par l&apos;utilisateur : données de connexion et d&apos;utilisation du Site, facturation, historique des commandes, etc.</li>
                                        <li>pour prévenir et lutter contre la fraude informatique (spamming, hacking…) : matériel informatique utilisé pour la navigation, l&apos;adresse IP, le mot de passe (hashé)</li>
                                        <li>pour améliorer la navigation sur le Site : données de connexion et d&apos;utilisation</li>
                                        <li>pour mener des enquêtes de satisfaction facultatives sur <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> : adresse email</li>
                                        <li>pour mener des campagnes de communication (sms, mail) : numéro de téléphone, adresse email</li>
                                    </ul>
                                    <p className="mb-4"><a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité ou à des fins statistiques et d&apos;analyses.</p>
                                    <h3 className="font-bold">7.3 Droit d’accès, de rectification et d’opposition</h3>
                                    <p className="mb-4">Conformément à la réglementation européenne en vigueur, les Utilisateurs de <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> disposent des droits suivants :</p>

                                    <ul className="list-disc list-inside mb-4">
                                        <li>droit d&apos;accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données des Utilisateurs droit de verrouillage ou d&apos;effacement des données des Utilisateurs à caractère personnel (article 17 du RGPD), lorsqu&apos;elles sont inexactes, incomplètes, équivoques, périmées, ou dont la collecte, l&apos;utilisation, la communication ou la conservation est interdite</li>
                                        <li>droit de retirer à tout moment un consentement (article 13-2c RGPD)</li>
                                        <li>droit à la limitation du traitement des données des Utilisateurs (article 18 RGPD)</li>
                                        <li>droit d&apos;opposition au traitement des données des Utilisateurs (article 21 RGPD)</li>
                                        <li>droit à la portabilité des données que les Utilisateurs auront fournies, lorsque ces données font l&apos;objet de traitements automatisés fondés sur leur consentement ou sur un contrat (article 20 RGPD)</li>
                                        <li>droit de définir le sort des données des Utilisateurs après leur mort et de choisir à qui <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> devra communiquer (ou non) ses données à un tiers qu&apos;ils aura préalablement désigné</li>
                                    </ul>

                                    <p className="mb-4">Dès que <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> a connaissance du décès d&apos;un Utilisateur et à défaut d&apos;instructions de sa part, <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> s&apos;engage à détruire ses données, sauf si leur conservation s&apos;avère nécessaire à des fins probatoires ou pour répondre à une obligation légale.</p>

                                    <p className="mb-4">Si l&apos;Utilisateur souhaite savoir comment <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> utilise ses Données Personnelles, demander à les rectifier ou s&apos;oppose à leur traitement, l&apos;Utilisateur peut contacter <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> par écrit à l&apos;adresse suivante :</p>

                                    <p className="mb-4">MonkeysDev – DPO, Aubras Michael <br />
                                        78 rue de la justice 54710 Ludres.</p>

                                    <p className="mb-4">Dans ce cas, l&apos;Utilisateur doit indiquer les Données Personnelles qu&apos;il souhaiterait que <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> corrige, mette à jour ou supprime, en s&apos;identifiant précisément avec une copie d&apos;une pièce d&apos;identité (carte d&apos;identité ou passeport).</p>

                                    <p className="mb-4">Les demandes de suppression de Données Personnelles seront soumises aux obligations qui sont imposées à <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> par la loi, notamment en matière de conservation ou d&apos;archivage des documents. Enfin, les Utilisateurs de <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> peuvent déposer une réclamation auprès des autorités de contrôle, et notamment de la CNIL (https://www.cnil.fr/fr/plaintes).</p>

                                    <h3 className="font-bold">7.4 Non-communication des données personnelles</h3>
                                    <p className="mb-4"><a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> s&apos;interdit de traiter, héberger ou transférer les Informations collectées sur ses Clients vers un pays situé en dehors de l&apos;Union européenne ou reconnu comme « non adéquat » par la Commission européenne sans en informer préalablement le client. Pour autant, <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> reste libre du choix de ses sous-traitants techniques et commerciaux à la condition qu&apos;il présentent les garanties suffisantes au regard des exigences du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).</p>

                                    <p className="mb-4"><a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> s&apos;engage à prendre toutes les précautions nécessaires afin de préserver la sécurité des Informations et notamment qu&apos;elles ne soient pas communiquées à des personnes non autorisées. Cependant, si un incident impactant l&apos;intégrité ou la confidentialité des Informations du Client est portée à la connaissance de <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a>, celle-ci devra dans les meilleurs délais informer le Client et lui communiquer les mesures de corrections prises. Par ailleurs <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> ne collecte aucune « données sensibles ».</p>

                                    <p className="mb-4">Les Données Personnelles de l&apos;Utilisateur peuvent être traitées par des filiales de <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> et des sous-traitants (prestataires de services), exclusivement afin de réaliser les finalités de la présente politique.</p>
                                    <p className="mb-4">Dans la limite de leurs attributions respectives et pour les finalités rappelées ci-dessus, les principales personnes susceptibles d&apos;avoir accès aux données des Utilisateurs de <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> sont principalement les agents de notre service client.</p>

                                    <h2 className="font-bold text-xl mb-4">8. Notification d’incident</h2>
                                    <p className="mb-4">Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune méthode de stockage électronique n&apos;est complètement sûre. Nous ne pouvons en conséquence pas garantir une sécurité absolue.
                                        Si nous prenions connaissance d&apos;une brèche de la sécurité, nous avertirions les utilisateurs concernés afin qu&apos;ils puissent prendre les mesures appropriées. Nos procédures de notification d&apos;incident tiennent compte de nos obligations légales, qu&apos;elles se situent au niveau national ou européen. Nous nous engageons à informer pleinement nos clients de toutes les questions relevant de la sécurité de leur compte et à leur fournir toutes les informations nécessaires pour les aider à respecter leurs propres obligations réglementaires en matière de reporting.</p>

                                    <p className="mb-4">Aucune information personnelle de l&apos;utilisateur du site <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> n&apos;est publiée à l&apos;insu de l&apos;utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l&apos;hypothèse du rachat de <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> et de ses droits permettrait la transmission des dites informations à l&apos;éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l&apos;utilisateur du site <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a>.</p>

                                    <h3 className="font-bold">Sécurité</h3>
                                    <p className="mb-4">Pour assurer la sécurité et la confidentialité des Données Personnelles et des Données Personnelles de Santé, <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> utilise des réseaux protégés par des dispositifs standards tels que par pare-feu, la pseudonymisation, l’encryption et mot de passe.</p>

                                    <p className="mb-4">Lors du traitement des Données Personnelles, <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> prend toutes les mesures raisonnables visant à les protéger contre toute perte, utilisation détournée, accès non autorisé, divulgation, altération ou destruction.</p>

                                    <h2 className="font-bold text-xl mb-4">9. Liens hypertextes « cookies » et balises (“tags”) internet</h2>
                                    <p className="mb-4">Le site <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a>. Cependant, <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.</p>
                                    <p className="mb-4">Sauf si vous décidez de désactiver les cookies, vous acceptez que le site puisse les utiliser. Vous pouvez à tout moment désactiver ces cookies et ce gratuitement à partir des possibilités de désactivation qui vous sont offertes et rappelées ci-après, sachant que cela peut réduire ou empêcher l’accessibilité à tout ou partie des Services proposés par le site.</p>

                                    <h3 className="font-bold">9.1. « COOKIES »</h3>
                                    <p className="mb-4">Un « cookie » est un petit fichier d’information envoyé sur le navigateur de l’Utilisateur et enregistré au sein du terminal de l’Utilisateur (ex : ordinateur, smartphone), (ci-après « Cookies »). Ce fichier comprend des informations telles que le nom de domaine de l’Utilisateur, le fournisseur d’accès Internet de l’Utilisateur, le système d’exploitation de l’Utilisateur, ainsi que la date et l’heure d’accès. Les Cookies ne risquent en aucun cas d’endommager le terminal de l’Utilisateur.</p>
                                    <p className="mb-4"><a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> est susceptible de traiter les informations de l’Utilisateur concernant sa visite du Site, telles que les pages consultées, les recherches effectuées. Ces informations permettent à <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> d’améliorer le contenu du Site, de la navigation de l’Utilisateur.</p>
                                    <p className="mb-4">Les Cookies facilitant la navigation et/ou la fourniture des services proposés par le Site, l’Utilisateur peut configurer son navigateur pour qu’il lui permette de décider s’il souhaite ou non les accepter de manière à ce que des Cookies soient enregistrés dans le terminal ou, au contraire, qu’ils soient rejetés, soit systématiquement, soit selon leur émetteur. L’Utilisateur peut également configurer son logiciel de navigation de manière à ce que l’acceptation ou le refus des Cookies lui soient proposés ponctuellement, avant qu’un Cookie soit susceptible d’être enregistré dans son terminal. <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> informe l’Utilisateur que, dans ce cas, il se peut que les fonctionnalités de son logiciel de navigation ne soient pas toutes disponibles.</p>
                                    <p className="mb-4">Si l’Utilisateur refuse l’enregistrement de Cookies dans son terminal ou son navigateur, ou si l’Utilisateur supprime ceux qui y sont enregistrés, l’Utilisateur est informé que sa navigation et son expérience sur le Site peuvent être limitées. Cela pourrait également être le cas lorsque <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> ou l’un de ses prestataires ne peut pas reconnaître, à des fins de compatibilité technique, le type de navigateur utilisé par le terminal, les paramètres de langue et d’affichage ou le pays depuis lequel le terminal semble connecté à Internet.</p>
                                    <p className="mb-4">Le cas échéant, <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> décline toute responsabilité pour les conséquences liées au fonctionnement dégradé du Site et des services éventuellement proposés par <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a>, résultant (i) du refus de Cookies par l’Utilisateur (ii) de l’impossibilité pour <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> d’enregistrer ou de consulter les Cookies nécessaires à leur fonctionnement du fait du choix de l’Utilisateur. Pour la gestion des Cookies et des choix de l’Utilisateur, la configuration de chaque navigateur est différente. Elle est décrite dans le menu d’aide du navigateur, qui permettra de savoir de quelle manière l’Utilisateur peut modifier ses souhaits en matière de Cookies.</p>
                                    <p className="mb-4">À tout moment, l’Utilisateur peut faire le choix d’exprimer et de modifier ses souhaits en matière de Cookies. <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> pourra en outre faire appel aux services de prestataires externes pour l’aider à recueillir et traiter les informations décrites dans cette section.</p>
                                    <p className="mb-4">Enfin, en cliquant sur les icônes dédiées aux réseaux sociaux Twitter, Facebook, Linkedin et Google Plus figurant sur le Site de <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> ou dans son application mobile et si l’Utilisateur a accepté le dépôt de cookies en poursuivant sa navigation sur le Site Internet ou l’application mobile de <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a>, Twitter, Facebook, Linkedin et Google Plus peuvent également déposer des cookies sur vos terminaux (ordinateur, tablette, téléphone portable).</p>
                                    <p className="mb-4">Ces types de cookies ne sont déposés sur vos terminaux qu’à condition que vous y consentiez, en continuant votre navigation sur le Site Internet ou l’application mobile de <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a>. À tout moment, l’Utilisateur peut néanmoins revenir sur son consentement à ce que <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> dépose ce type de cookies.</p>

                                    <h3 className="font-bold">9.2. BALISES (“TAGS”) INTERNET</h3>
                                    <p className="mb-4"><a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> peut employer occasionnellement des balises Internet (également appelées « tags », ou balises d’action, GIF à un pixel, GIF transparents, GIF invisibles et GIF un à un) et les déployer par l’intermédiaire d’un partenaire spécialiste d’analyses Web susceptible de se trouver (et donc de stocker les informations correspondantes, y compris l’adresse IP de l’Utilisateur) dans un pays étranger.</p>

                                    <p className="mb-4">Ces balises sont placées à la fois dans les publicités en ligne permettant aux internautes d’accéder au Site, et sur les différentes pages de celui-ci.</p>
                                    <p className="mb-4">Cette technologie permet à <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> d’évaluer les réponses des visiteurs face au Site et l’efficacité de ses actions (par exemple, le nombre de fois où une page est ouverte et les informations consultées), ainsi que l’utilisation de ce Site par l’Utilisateur.</p>
                                    <p className="mb-4">Le prestataire externe pourra éventuellement recueillir des informations sur les visiteurs du Site et d’autres sites Internet grâce à ces balises, constituer des rapports sur l’activité du Site à l’attention de <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a>, et fournir d’autres services relatifs à l’utilisation de celui-ci et d’Internet.</p>

                                    <h2 className="font-bold text-xl mb-4">10. Droit applicable et attribution de juridiction.</h2>
                                    <p className="mb-4">Tout litige en relation avec l’utilisation du site <a href="https://monkeysdev.fr/">https://monkeysdev.fr/</a> est soumis au droit français.
                                        En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Nancy.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default MentionsLegales;
