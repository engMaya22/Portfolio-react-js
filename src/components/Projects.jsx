
import {PROJECTS} from "../constants"
import { animate, motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">

        <motion.h2 
        whileInView={{opacity:1 , y:0}}
        initial={{opacity:0,y:-100 }}
        transition={{duration:1.5}}  
        className="text-4xl  text-center my-20">Projects</motion.h2>
       <Swiper
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }}
            className="border-neutral-900 rounded-1"
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
        >
        {PROJECTS.map((project, index) => (
            <SwiperSlide 
                key={index} 
                className="flex items-center justify-center "
            >
                <div className="flex flex-col items-center text-center">
                    {/* Image */}
                    <img 
                        src={project.image}
                        alt={project.title}
                        width={150}
                        height={150}
                        className="rounded mb-4"
                    />
                    
                    {/* Title */}
                    <h6 className="font-semibold mb-2">{project.title}</h6>
                    
                    {/* Description */}
                    <p className="text-neutral-400 text-sm mb-4">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-6 lg:mb-8">
                        {project.technologies.map((technology, index) => (
                            <span 
                                key={index} 
                                className="bg-neutral-900 text-purple-900 rounded py-1 px-2 text-sm font-medium"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </SwiperSlide>
        ))}
       </Swiper>


     
    </div>
  )
}

export default Projects
