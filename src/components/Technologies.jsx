
import { RiReactjsLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { SiLivewire } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { animate, motion } from "framer-motion"

const iconVariants = (duration)=>({
 initial :{y:-10},
 animate :{
       y:[10 , -10],
       transition:{
              duration:duration , 
              ease:"linear",
              repeat : Infinity,
              repeatType : "reverse"
       }
 }


})

const Technologies = ()=>{
    return <div
                className="border-b border-neutral-800  pb-24 ">
                  <motion.h1
                   whileInView={{opacity:1 , y:0}}
                   initial={{opacity:0,y:-100 }}
                   transition={{duration:1.5}}

                   className="text-center my-20 text-4xl" >Technologies</motion.h1>
                  <motion.div
                   whileInView={{opacity:1 , x:0}}
                   initial={{opacity:0,x:-100 }}
                   transition={{duration:1.5}}
                   className="flex  flex-col lg:flex-row justify-center items-center gap-4 ">
                      <motion.div
                            variants={iconVariants(3)}
                            initial="initial"
                            animate="animate"
                            className="rounded-2xl border-4 border-neutral-800 p-4">
                             <FaLaravel className="text-7xl text-red-500" />
                      </motion.div>
                      <motion.div 
                            variants={iconVariants(2.5)}
                            initial="initial"
                            animate="animate"

                             className="rounded-2xl border-4 border-neutral-800 p-4">
                             <RiReactjsLine className="text-7xl text-cyan-400" />
                      </motion.div>
                     
                      <motion.div 
                      variants={iconVariants(5)}
                      initial="initial"
                      animate="animate"
                      className="rounded-2xl border-4 border-neutral-800 p-4">
                             <SiLivewire className="text-7xl text-pink-500" />
                      </motion.div>
                      <motion.div 
                       variants={iconVariants(2)}
                       initial="initial"
                       animate="animate"
                      className="rounded-2xl border-4 border-neutral-800 p-4">
                             <SiTypescript className="text-7xl text-cyan-700" />
                      </motion.div>

                      {/* <motion.div
                       variants={iconVariants(4)}
                       initial="initial"
                       animate="animate"
                       className="rounded-2xl border-4 border-neutral-800 p-4">
                             <DiRedis className="text-7xl text-red-700" />
                      </motion.div> */}
                    



                 </motion.div>
            </div>
}

export default Technologies;