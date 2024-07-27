import React from 'react'
import { motion } from 'framer-motion'



function Skill() {
    const side = true

    const skills = [
        {
            image: "react.png",  // URL for React image
            name: "React",
            progress: 90 // Progress percentage
        },
        {
            image: "javascript.png",     // URL for JavaScript image
            name: "JavaScript",
            progress: 85 // Progress percentage
        },
        {
            image: "css.png",    // URL for CSS image
            name: "CSS",
            progress: 90 // Progress percentage
        },
        {
            image: "nodejs.png", // URL for Node.js image
            name: "Node.js",
            progress: 75 // Progress percentage
        },
        {
            image: "bootstrap-framework.png", // URL for Python image
            name: "Python",
            progress: 90 // Progress percentage
        },
        {
            image: "tailwind-css.png", // URL for Tailwind CSS image
            name: "Tailwind CSS",
            progress: 85 // Progress percentage
        },
        {
            image: "mongo-db.png", // URL for Tailwind CSS image
            name: "Tailwind CSS",
            progress: 85 // Progress percentage
        },
        {
            image: "c-language.png", // URL for Tailwind CSS image
            name: "Tailwind CSS",
            progress: 80 // Progress percentage
        }
        , {
            image: "sql.png", // URL for Tailwind CSS image
            name: "Tailwind CSS",
            progress: 50 // Progress percentage
        }
    ];


    return (
        <>

            {
                skills.map((val, index) => (
                    <div className='group relative flex cursor-pointer'>

                        <>
                            <motion.img
                                initial={{ x: side ? -200 : 200, opacity: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}

                                src={val.image} alt="" className='object-contain  w-24 h-24  xl:w-24 xl:h-24 filter group-hover:grayscale  transition duration-300 ease-in-out' />
                            <div className='absolute  opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#ac5aff]  h-24 w-24 md:w-24 md:h-24 xl:w-24 xl:h-24 rounded-2xl z-0'  >
                                <div className='flex items-center justify-center h-full'>
                                    <p className='text-3xl font-bold text-black opacity-100'>{val.progress}%</p>
                                </div>
                            </div>
                        </>

                    </div>
                ))
            }
        </>
    )
}

export default Skill
