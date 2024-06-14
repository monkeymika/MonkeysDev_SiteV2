import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer
            className='w-full border-t-2 border-solid border-dark
          font-medium text-lg dark:text-light dark:border-light sm:text-base
          '>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; Tous droits réservés</span>
                <div className='flex items-center lg:py-2'>
                    Build With <span className='text-primary dark:text-primaryDark text-2xl px-1'> &#9825;</span>
                    by&nbsp;<Link href="#" className='underline
                    underline-offset-2
                    ' target={"_blank"}>MonkeysDev</Link>
                </div>
                <Link href="/mentions-legales" className='underline
                    underline-offset-2
                    '>Mentions légales
                </Link>
                <Link href="/politique-de-confidentialite" className='underline
                    underline-offset-2 lg:mt-2
                    '>Politique de confidentialité
                </Link>

            </Layout>
        </footer>
    )
}

export default Footer