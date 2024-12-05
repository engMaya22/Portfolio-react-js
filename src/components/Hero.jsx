
import {HERO_CONTENT} from "../constants"
import MayaProfile from "../assets/maya.jpg"
import { motion } from "framer-motion" 


const container = (delay)=>({
     hidden: {x:-100 , opacity:0},
     visible : {
         x:0 ,
         opacity:1 ,
         transition: {duration:0.5 , delay:delay}
         }

});
const Hero = ()=>{
    return <div className="border-b   border-neutral-900 pb-9 lg:mb-3">

             <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start "> 
                        <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="text-6xl lg:text-8xl pb-16 font-thin tracking-tight lg:mt-16">Maya Ismaeel</motion.h1>
                        <motion.span 
                         variants={container(0.5)}
                         initial="hidden"
                         animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                        <motion.p 
                         variants={container(1)}
                         initial="hidden"
                         animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter ">
                        {HERO_CONTENT}
                        </motion.p>
                    </div>

                </div>
                <div className="w-full lg:w-1/2">
                       <div className="flex justify-center">
                          <motion.img 
                             initial ={{x:100 , opacity:0}}
                             animate = {{x:0, opacity:1}}
                             transition= {{duration:1 , delay:1.2}}
                          src={MayaProfile} alt="Maya Image" className="h-[450px] w-full rounded " />
                       </div>
                </div>

             </div>

          </div>

}
export default Hero;