
import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles';
import { Link } from "react-router-dom"
import { motion } from 'framer-motion';
import "../App.css"



function Hero() {

    const [text, count] = useTypewriter({
        words: [
            "hi , the Name's Neeraj Kumar Sharma",
            "guy-who loves-coffee.jsx",
            "<ButLovesToCodeMore/>",
        ],
        loop: true,
        delaySpeed: 2000,
        transation: 0.6

    })
    return (
        <div className=' h-screen flex flex-col space-y-8 justify-center items-center overflow-hidden     '>

            <BackgroundCircles />
            <div className='  '>


                <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2.6,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    src="neeraj-dp.jpg" alt="dp" className=' image-box animate-pulse relative rounded-full   h-32 w-32 min-w-3xl mx-auto object-cover z-20' />
            </div>
            <div className='z-20'>
                <h2 className='text-sm  text-[#ac5aff]/60 uppercase  text-center tracking-[15px]'>web developer</h2>
                <h1 className="  text-white text-5xl lg:text-6xl   font-samibold px-10" >

                    <span className='mr-3 text-[#ac5aff]'>{text}</span>
                    <Cursor cursorColor="red" />
                </h1>
            </div>


            <div className='pt-3  flex flex-row  z-20  '>


                <a href='#about' >  <button className='heroButton'> about</button></a>






                <a href='#experience' >


                    <button className='heroButton'> experience</button>

                </a>



                <a href='#skills' >


                    <button className='heroButton'> skills</button>

                </a>


                <a href='#projects' >


                    <button className='heroButton'> projects</button>

                </a>


            </div>




        </div>
    )
}

export default Hero
