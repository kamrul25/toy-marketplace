import { Link } from "react-router-dom";
import logo from "../../../assets/images.jpg"
import {FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content mt-10">
        <div className="flex justify-between items-center">
            <img src={logo} alt="" className="w-12 rounded-xl"/>
            <p>Copyright © 2023 - All right reserved by Science Toy Industries Ltd</p>
        </div> 
        <div>
          <span className="footer-title">Social</span> 
          <div className="grid grid-flow-col gap-4">
            <Link><FaTwitter className="w-6 h-6"/></Link> 
            <Link><FaYoutube className="w-6 h-6" /></Link> 
            <Link><FaFacebookF className="w-6 h-6" /></Link>
          </div>
        </div>

      </footer>
    );
};

export default Footer;