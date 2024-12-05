
import {PROJECTS} from "../constants"
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">

        <h2 className="text-4xl  text-center my-20">Projects</h2>
        <div>
            {PROJECTS.map((project , index)=>(
                <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
                    <div className="w-full lg:w-1/4 "> 
                      <img src={project.image}
                       alt={project.title} 
                       width={150}
                       height={150}
                       className="mb-6 rounded" />
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                         {project.title}
                        </h6>
                        <p className="mb-4 text-neutral-400">
                            {project.description}
                        </p>
                        {project.technologies.map((technology , index)=>(
                            <span key={index} className="bg-neutral-900 rounded py-1 px-2 mr-2  text-sm font-medium text-purple-900">
                                {technology}
                            </span>
                        ))}


                    </div>

                </div>

            ))}
        </div>
    
    </div>
  )
}

export default Projects
