import logo from "../assets/MI-logo.jpg"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

const Navbar = () =>{

    return <nav className="  mb-20 py-6 flex items-center  justify-between">

             <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="logo" className="h-[60px]" />

             </div>

             <div className="flex m-8 gap-4 items-center justify-center text-white  text-2xl">
                <FaLinkedin  />
                <FaGithub />
                <FaInstagram />
             </div>

          </nav>

}
export default Navbar;