import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
    return (
        <div className='flex item-center justify-center mt-2'>
            <MotionLink href="/"
                className='w-30 h-15 p-5 text-center bg-dark text-light flex items-center justify-center
                 rounded-full text-xs font-bold border border-solid border-transparent  dark:border-light sm:w-15 sm:h-8
                '
                whileHover={{
                    backgroundColor: ["#121212", "#dda467", "#c4525e", "#447a9d", "#02735e", "#121212"],
                    transition: { duration: 1, repeat: Infinity }

                }}
            >MonkeysDev</MotionLink>
        </div>
    )
}

export default Logo