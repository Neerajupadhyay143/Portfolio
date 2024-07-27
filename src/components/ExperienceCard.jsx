import React from 'react'
import { motion } from "framer-motion"
import { SocialIcon } from 'react-social-icons'
import { Tilt } from "react-tilt"

function ExperienceCard() {

    const workExperience = [
        {
            image: "metablockdp-1.jpeg",
            work: "Frontend Developer",
            name: "METABLOCK",
            languages: [
                "react.png",
                "javascript.png",   // React logo
                "nodejs.png",       // JavaScript logo
                "bootstrap-framework.png",
                "css.png",
                "html.png"     // CSS logo
            ],
            joiningDate: "2023-07-23",
            lastDate: "2023-11-06",
            description: "Developed and maintained the frontend of the company's main web application using React, JavaScript, and CSS. Improved user experience and implemented responsive design features."
        },
        {
            image: "101.jpg",
            work: "Frontend Developer",
            name: "FREELANCING",
            languages: [
                "react.png",
                "javascript.png",   // Node.js logo
                "nodejs.png",  // Express logo
                "bootstrap-framework.png",
                "css.png",
                "html.png"    // MongoDB logo
            ],
            joiningDate: "2022-06-01",
            lastDate: "Present ",
            description: "Worked on building and optimizing backend services using Node.js and Express. Designed database schemas and managed data storage with MongoDB. Implemented API endpoints for various functionalities."
        },
        {
            image: "rinex.png",
            work: "Full Stack Developer",
            name: "suspense",
            languages: [
                "react.png",
                "javascript.png",
                "nodejs.png",
                "tailwind-css.png",
                "bootstrap-framework.png",
                "css.png",
                "html.png"

            ],
            joiningDate: "2024-01-06",
            lastDate: "PRESENT",
            description: "Led a team in developing a full-stack web application using Angular for the frontend and Django with Python for the backend. Responsible for the entire development lifecycle, including designing UI/UX, setting up the server, and deploying the application."
        }
    ];


    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    return (
        <>
            {workExperience.map((val, index) => (
                <article className='flex flex-col  rounded-lg items-center space-y-7 flex-shrink-0 w-[500px ]  md:w-[600px] xl: w-[900px] snap-center bg-[#292929] p-1  hover:opacity-100  opacity-40 cursor-pointer transition-opacity duration-200'>
                    <Tilt options={defaultOptions} style={{ height: 220, width: 220 }} >
                        <motion.img
                            initial={{ y: -100, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className='w-32 h-32 rounded-full flex flex-col items-left  xl:w-[200px] xl:h-[200px] object-cover object-center'
                            src={val.image} alt="dp-1" />
                    </Tilt>

                    <div className='px-0 md:px-10 text-[#ac5aff] text-left'>
                        <h4 className='text-4xl font-light'>  {val.work} </h4>
                        <p className='font-bold text-2xl mt-1'> {val.name}</p>
                        <div className='flex space-x-2 my-2'>

                            {val.languages.map((lang, langIndex) => (
                                <Tilt key={langIndex} options={defaultOptions} style={{ height: 50, width: 50 }} >
                                    <img className='w-10 h-10 rounded' src={lang} alt={`lang-logo-${langIndex}`} />
                                </Tilt>
                            ))}

                        </div>
                        <p className=' py-5 uppercase text-gray-500'>{val.joiningDate} -{val.lastDate}</p>

                        <ul className='list-disc space-y-4 ml-5 text-wrap '>
                            <li> {val.description}</li>


                        </ul>
                    </div>
                </article>
            ))}
        </>
    )
}

export default ExperienceCard
