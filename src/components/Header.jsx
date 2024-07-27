import React from 'react'
import { useForm } from 'react-hook-form';
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

function Header() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = handleSubmit((data) => window.location.href = `mailto:neerajkumarsharma013@gmail?subject=${data.subject}&body=Hi ,my name is ${data.Name}. ${data.Message}(${data.Email})`);

    return (
        <header className=' top-0 flex flex-row items-center justify-between p-4 sticky z-20'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5

                }}

                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1

                }}
                transition={{
                    duration: 1.2,
                }}

                className='flex flex-row items-center'>
                <SocialIcon
                    url='https://www.freelancer.com/u/Neerajsharma013'
                    bgColor='transparent'
                    fgColor='#ac5aff' />

                <SocialIcon
                    url='https://www.linkedin.com/feed/'
                    bgColor='transparent'
                    fgColor='#ac5aff' />

                <SocialIcon
                    url='https://www.instagram.com/swiftsnipp/'
                    bgColor='transparent'
                    fgColor='#ac5aff' />

                <SocialIcon
                    url='https://www.threads.net/@swiftsnipp/'
                    bgColor='transparent'
                    fgColor='#ac5aff' />
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5

                }}

                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1

                }}
                transition={{
                    duration: 1.2,
                }}
                className='flex flex-row items-center'>
                <SocialIcon
                    onClick={onSubmit}
                    className='cursor-pointer'
                    {...register('email')}
                    network='email'
                    bgColor='transparent'
                    fgColor='#ac5aff' />

                <p className='text-[#ac5aff] uppercase hidden md:inline-flex '>get in touch</p>
            </motion.div>

        </header>
    )
}

export default Header
