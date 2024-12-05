import {EXPERIENCES} from "../constants"
const Experience =()=>{
    return <div className="border-b border-neutral-900 pb-4 ">
        <h2 className="my-20 text-center text-4xl">Experience</h2>
        {EXPERIENCES.map((experiene , index)=>(
            <div key={index} className="mb-4 flex flex-wrap lg:justify-center ">
                    <div className="w-full lg:w-1/4">
                      {experiene.year}

                    </div>
                    <div className="w-full lg:w-3/4 max-w-xl ">
                       <h6 className="mb-2   font-semibold"> {experiene.role} - {" "} <span className="text-sm text-purple-100">{experiene.company}</span> </h6>
                       <p className="mb-4 text-neutral-400"> {experiene.description}</p>
                       {experiene.technologies.map((tech , index)=>(
                        <span key={index} className="bg-neutral-900 rounded mr-2 mt-2 px-2 py-1 text-purple-800 text-sm font-medium"> {tech} </span>

                       ))}
                    </div>
            </div>
        ))}

    </div>

}
export default Experience;