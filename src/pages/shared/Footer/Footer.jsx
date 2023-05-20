import { Link } from "react-router-dom";
import logo from "../../../assets/images.jpg";
import {
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaMapMarker,
  FaPhoneAlt,
} from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <footer className="footer p-10 bg-neutral text-neutral-content mt-10">
        <div>
          <img src={logo} alt="" className="w-28  rounded-xl" />
          <p>CarToys Industries Ltd.</p>
        </div>
        <div>
          <span className="footer-title">About</span>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/allToys" className="link link-hover">
            All Toys
          </Link>
          {user && (
            <>
              <Link to="/myToys" className="link link-hover">
                My Toys
              </Link>
              <Link to="/addToy" className="link link-hover">
                Add A Toys
              </Link>
            </>
          )}
          <Link to="/blogs" className="link link-hover">
            Blogs
          </Link>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <p className="flex items-center gap-3">
            <FaPhoneAlt /> <span>+8801846******</span>
          </p>
          <p className="flex items-center gap-3">
            {" "}
            <FaMapMarker /> <span>Feni, Bangladesh</span>
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <Link>
              <FaTwitter className="w-6 h-6" />
            </Link>
            <Link>
              <FaYoutube className="w-6 h-6" />
            </Link>
            <Link>
              <FaFacebookF className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
      <div className="footer footer-center p-4 bg-neutral text-neutral-content ">
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
      </div>
    </div>
  );
};

export default Footer;

/* 
 

*/
