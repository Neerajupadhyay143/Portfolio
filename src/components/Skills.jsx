import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'

function Skills() {
    return (
        <motion.div
            className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>skills</h3>
            <h3 className='absolute top-36  uppercase tracing-[3px] text-[#ac5aff] text-sm '> hover over a skill for currency profieciency</h3>


            <div className='grid grid-cols-4 gap-5'>
                <Skill />
              

            </div>
        </motion.div>
    )
}

export default Skills
