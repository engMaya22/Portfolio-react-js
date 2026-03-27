
import { PROJECTS } from "../constants"
import { animate, motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
    return (
        <div className="pb-4 border-b border-neutral-900">

            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-4xl text-center">Projects</motion.h2>
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
                        className="flex items-center justify-center"
                    >
                        <a
                            href={project.link ? project.link : "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                width={150}
                                height={150}
                                className="mb-4 rounded"
                            />

                            {/* Title */}
                            <h6 className="mb-2 font-semibold">{project.title}</h6>

                            {/* Description */}
                            <p className="mb-4 text-sm text-neutral-400">{project.description}</p>

                            {/* Technologies */}
                            <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-6 lg:mb-8">
                                {project.technologies.map((technology, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 text-sm font-medium text-purple-900 rounded bg-neutral-900"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>



        </div>
    )
}

export default Projects
