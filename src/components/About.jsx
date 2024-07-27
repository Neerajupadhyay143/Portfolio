import React from 'react'
import { motion } from 'framer-motion'
function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className=' flex flex-col relative  h-screen text-center md:text-left  
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-14 uppercase text-gray-500 tracking-[20px] text-2xl  '>about</h3>

            <motion.img
                initial={{
                    opacity: 0,
                    x: -200,


                }}

                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{
                    duration: 1.2
                }}
                viewport={{ once: true }}
                src="neeraj-dp3.jpg" alt="neeraj-dp" className='-md-20 md:mb-0  flex-shrink-0 w-32 h-32  sm:rounded-t-full md:rounded-full  rounded-full object-cover   md:w-65 md:h-95  xl:w-[300px] xl:h-[300px]   ' />

            <div className='space-y-10  px-0 lg:px-10        4 md:px-3 text-[#ac5aff]/60'>
                <h4 className='text-2xl font-semibold'>Here is a{" "}
                    <span className='underline decoration-[#ac5aff]/40'>little</span>{" "}
                    Background
                </h4>

                <p className='text-sm  xl:text-2xl text-[#ac5aff] sm:font-1xl'>Hello, I'm Neeraj, also known as <span className='text-purple-100 underline decoration-[#ad5afc]'>Swiftsnipp</span> .
                    I'm a full stack developer with two years of coding experience.
                    I'm passionate about learning new programming languages and technologies,
                    and I get a lot of satisfaction from teaching students about coding and various frameworks.

                    I started my professional journey as a frontend developer at MetaBlock and am currently working remotely as a full stack developer.
                    In my free time, I enjoy singing and playing cricket. One of my most significant projects is <span className='underline text-green-400 decoration-[#ccffcc]'>Whatsapp-clone</span> , a clone of <span className='underline text-green-400 decoration-[#ccffcc]'> WhatsApp</span> ,
                    which has been a fantastic opportunity for me to showcase my skills and creativity in development.</p>
            </div>
        </motion.div>
    )
}

export default About
