
import { RiReactjsLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { SiLivewire } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { DiRedis } from "react-icons/di";


const Technologies = ()=>{
    return <div className="border-b border-neutral-800  pb-24">
                  <h1 className="text-center my-20 text-4xl" >Technologies</h1>
                  <div className="flex flex-wrap flex-col lg:flex-row justify-center items-center gap-4">
                      <div className="rounded-2xl border-4 border-neutral-800 p-4">
                             <RiReactjsLine className="text-7xl text-cyan-400" />
                      </div>
                      <div className="rounded-2xl border-4 border-neutral-800 p-4">
                             <FaLaravel className="text-7xl text-red-500" />
                      </div>
                      <div className="rounded-2xl border-4 border-neutral-800 p-4">
                             <SiLivewire className="text-7xl text-pink-500" />
                      </div>
                      <div className="rounded-2xl border-4 border-neutral-800 p-4">
                             <SiTypescript className="text-7xl text-cyan-700" />
                      </div>

                      <div className="rounded-2xl border-4 border-neutral-800 p-4">
                             <DiRedis className="text-7xl text-red-700" />
                      </div>
                    



                 </div>
            </div>
}

export default Technologies;