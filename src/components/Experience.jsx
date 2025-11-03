import {EXPERIENCES} from "../constants"
import { animate, motion } from "framer-motion"


const Experience =()=>{
    return <div className="border-b border-neutral-900 pb-4 ">
        <motion.h2 
          whileInView={{opacity:1 , y:0}}
          initial={{opacity:0,y:-100 }}
          transition={{duration:1.5}}
           className="my-20 text-center text-4xl">Experience</motion.h2>
        {EXPERIENCES.map((experiene , index)=>(
            <div key={index} className="mb-4 flex flex-wrap lg:justify-center ">
                    <motion.div
                      whileInView={{opacity:1 , x:0}}
                      initial={{opacity:0,x:-100 }}
                      transition={{duration:1.5}}   
                      className="w-full lg:w-1/4">
                      <p className="mb-2 text-sm text-neutral-400">{experiene.year}</p>

                    </motion.div>
                    <motion.div
                        whileInView={{opacity:1 , x:0}}
                        initial={{opacity:0,x:100 }}
                        transition={{duration:1.5}}  
                       className="w-full lg:w-3/4 max-w-xl ">
                       <h6 className="mb-2   font-semibold"> {experiene.role} - {" "} <span className="text-sm text-purple-100">{experiene.company}</span> </h6>
                       <p className="mb-4 text-neutral-400"> {experiene.description}</p>
                       {experiene.technologies.map((tech , index)=>(
                        <span key={index} className="bg-neutral-900 rounded mr-2 mt-2 mb-1 px-2 py-1 text-purple-800 text-sm font-medium"> {tech} </span>

                       ))}
                    </motion.div>
             </div>
        ))}

    </div>

}
export default Experience;