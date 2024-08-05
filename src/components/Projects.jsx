import React from 'react'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player';
function Projects() {
    const projects = [
        {
            image: "web-imgpng.png", // URL for WhatsApp clone image
            name: "WhatsApp Clone",
            description: "A real-time chat application that mimics WhatsApp. Users can send and receive messages, share images, and documents. Features include real-time notifications and a responsive design.",
        },
        {
            image: "Netflix.mp4", // URL for Netflix clone image
            name: "Netflix Clone",
            description: "A streaming platform clone that allows users to browse and watch movies and TV shows. Includes features like user authentication, content categorization, and a dynamic UI that mimics the Netflix experience.",
        },
        {
            image: "ludo.mp4", // URL for Ludo King image
            name: "Ludo Projects",
            description: "An online multiplayer Ludo game that allows users to play with friends or random opponents. Features include real-time gameplay, player statistics, and a user-friendly interface.",
        },
        {
            image: "covid-19.mp4", // URL for COVID-19 tracker image
            name: "COVID-19 Tracker",
            description: "A web application that provides real-time updates on COVID-19 statistics. Users can view global and country-specific data, track trends, and access detailed information on cases and vaccinations.",
        },
    ];

    return (
        < motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-16 md:top-24 lg:top-24 xl:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'> projects</h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                {
                    projects.map((project, i) => (
                        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20  h-screen'>
                            {project.image.endsWith('.mp4') ? (



                                <ReactPlayer
                                    url={project.image} // Use project.image here
                                    playing
                                    loop
                                    muted

                                    width="20%"
                                    height="auto"
                                    max-Width="20%"
                                    className="lg:w-8 lg:h-44 object-cover"


                                />

                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className='w-58 h-44 object-cover'
                                />
                            )}

                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h5 className='text-center tracking-[15px] uppercase  font-semibold text-1xl md:text-2xl lg:text-3xl'>{project.name}</h5>
                                <h4 className='text-1xl md:text-2xl lg:text-4xl font-semibold text-center'>
                                    <span className=' underline decoration-[#ae36ff]/40'> Case Study {i + 1} of {projects.length}: </span>ups clone</h4>
                            </div>

                            <p className='sm:text-base description-text sm:truncate  sm:text-wrap '>{project.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className='w-full absolute top-[30%] bg-[#ae36ff]/40 left-0 h-[500px] -skew-y-12' />
        </motion.div>



    )
}

export default Projects
