import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'

function WorkExperience() {





    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            div className=' relative overflow-hidden h-screen flex items-center flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto'>
            <h3 className='absolute top-10 uppercase text-gray-500 tracking-[20px] text-2xl  '>experience</h3>

            <div className=' max-w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-44'>
                <ExperienceCard />

            </div>
        </motion.div>
    )
}

export default WorkExperience
