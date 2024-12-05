
import {CONTACT} from "../constants"
import { animate, motion } from "framer-motion"


const Contact = ()=>{
    return <div className="border-b border-neutral-900 pb-20">
               <motion.h2 
                 whileInView={{opacity:1 , y:0}}
                 initial={{opacity:0,y:-100 }}
                 transition={{duration:0.5}}  
               
               className="text-center text-4xl my-10">Get in Touch</motion.h2>
               <motion.div
                 
                 className="text-center tracking-tighter">
                   <motion.p
                    whileInView={{opacity:1 , x:0}}
                    initial={{opacity:0,x:-100 }}
                    transition={{duration:1.5}}  
                    className="my-4">
                      {CONTACT.address}
                   </motion.p>
                   <motion.p
                    whileInView={{opacity:1 , x:0}}
                    initial={{opacity:0,x:100 }}
                    transition={{duration:1.5}}  
                    className="my-4">
                      {CONTACT.phoneNo}
                   </motion.p>
                   <a className=" border-b" href={`mailto:${CONTACT.email}`}>
                      {CONTACT.email}
                   </a>

               </motion.div>

           </div>
}

export default Contact;