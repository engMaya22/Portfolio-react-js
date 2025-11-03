import logo from "../assets/MI-logo.jpg"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

const Navbar = () =>{

    return <nav className="flex items-center justify-between py-6 mb-20 ">

             <div className="flex items-center flex-shrink-0">
                <img src={logo} alt="logo" className="h-[60px]" />

             </div>

             <div className="flex items-center justify-center gap-4 m-8 text-2xl text-white">
                <a href="https://www.linkedin.com/in/maya-ismaeel-3ba3b7243"><FaLinkedin  /></a>
                <a href="https://github.com/engMaya22"><FaGithub /></a>
                {/* <a href=""><FaInstagram /></a> */}
             </div>

          </nav>

}
export default Navbar;