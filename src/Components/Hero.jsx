import { motion } from "framer-motion"
import SlideUp from "../Animation/SlideUp"
import { SlideLeft, SlideRight } from "../Animation/SlideUp"

const Hero = () => {
    return (
        <>
            <div className="header__content px-28 p">
                <div className="flex items-center justify-between ">
                    <div>
                        <motion.h1
                         variants={SlideUp(0.6)}
                         initial="initial"
                         animate="animate"
                         className="mb-4 text-6xl font-bold leading-20 text-textDark">Single Platform For <br /> All Your <span className="text-[#30bfe2]">Learning</span> <br /> Needs.</motion.h1>
                        <motion.p
                            variants={SlideUp(0.8)}
                            initial="initial"
                            animate="animate"
                            className="pt-3 font-semibold first-letter:uppercase first-letter:text-[#30bfe2]">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis <br />
                            quisquam obcaecati repellendus sit tempore deleniti ipsum in, <br />
                            possimus earum laboriosam ex! Eius omnis sint ullam <br />
                            voluptas assumenda nam suscipit repudiandae?
                        </motion.p>
                    </div>
                    <motion.div
                    variants={SlideLeft(0.2)}
                    whileInView={"animate"}
                    initial="initial"
                    className="flex items-center justify-center">
                        <img src="/hero.jpg" alt="" className="h-[500px]"/>
                    </motion.div>
                </div>
                <motion.div 
                 variants={SlideUp(0.9)}
                 initial="initial"
                 animate="animate"
                 className="mt-[-75px]">
                    <button className=" px-4 py-2 text-white  rounded-md hover:bg-[#83c8d8] transition-all ease-in-out duration-300  bg-[#30bfe2] hover:text-black font-semibold">Find Courses</button>
                </motion.div>
            </div>
        </>
    )
}
export default Hero