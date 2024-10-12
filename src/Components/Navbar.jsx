import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion"
import SlideUp from "../Animation/SlideUp"

const Navbar = () => {
    return (
        <div className='px-28 py-8  flex items-center justify-between'>
            <motion.h2 
             initial={{ opacity: 0, y: -100 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
            className='text-3xl font-bold text-[#30bfe2]'>MyLearning </motion.h2>
            <motion.div
             initial={{ opacity: 0, y: -100 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
            className='flex items-center gap-8'>
                <FaFacebook className='text-3xl h-8 w-8 bg-gray-300 hover:bg-[#30bfe2] transition-all ease-in-out duration-300 rounded-full p-2 cursor-pointer ' />
                <AiFillInstagram className='text-3xl h-8 w-8 bg-gray-300 hover:bg-[#30bfe2] transition-all ease-in-out duration-300 rounded-full p-2 cursor-pointer' />
                <IoLogoGithub className='text-3xl h-8 w-8 bg-gray-300 hover:bg-[#30bfe2] transition-all ease-in-out duration-300 rounded-full p-2 cursor-pointer' />
            </motion.div>
        </div>
    )
}

export default Navbar
