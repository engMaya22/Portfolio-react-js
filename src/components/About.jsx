import aboutImage  from   "../assets/about.jpg"
import {ABOUT_TEXT} from "../constants"
const About =()=>{
    return <div className="pb-4 border-b border-neutral-900">
             <h1 className="my-20 text-center text-3xl">
                About <span className="text-neutral-500">
                Me
                </span>
             </h1>
             <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">

                  <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="about" className="rounded-2xl"/>
                  </div>

                </div>
                <div className="w-full lg:w-1/2 lg:p-8">

                    <div className="flex  justify-center lg:justify-start">
                        <p className=" my-2 max-w-xl py-6"> {ABOUT_TEXT} </p>
                         
                    </div>

                </div>



             </div>

          </div>

}
export default About ;