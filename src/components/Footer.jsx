import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20">
      {/* Grid System */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-start">

        {/* Logo + Copyright */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
          <img
            src={assets.white_bg_logo}
            alt="Elevare Fitness Logo"
            className="w-32"
          />
          <p className="text-gray-400 montserrat-regular text-sm md:text-base leading-relaxed">
            &copy; 2018–{new Date().getFullYear()} Elevare Fitness. All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <h3 className="text-2xl md:text-3xl anton-regular mb-2 text-primary">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-1 sm:gap-0">
            {["Home", "About", "Programs", "Trainers", "Membership", "Contact"].map(
              (link) => (
                <span
                  key={link}
                  className="text-gray-400 montserrat-bold hover:text-primary cursor-pointer text-sm md:text-base transition-colors"
                  onClick={() => {
                    const path = link === "Home" ? "/" : `/${link.toLowerCase()}`;
                    navigate(path);
                    window.scrollTo(0, 0);
                  }}
                >
                  {link}
                </span>
              )
            )}
          </div>
        </div>

        {/* Contact Info + Social */}
        <div className="flex flex-col items-center sm:items-start gap-3">
          <h3 className="text-2xl md:text-3xl anton-regular mb-2 text-primary">
            Contact
          </h3>
          <p className="text-gray-400 montserrat-regular text-sm md:text-base">
            123 Fitness Blvd, Los Angeles, CA, USA
          </p>
          <p className="text-gray-400 montserrat-regular text-sm md:text-base">
            +1 (555) 123-4567
          </p>
          <p className="text-gray-400 montserrat-regular text-sm md:text-base">
            +1 (555) 987-6543
          </p>
          <p className="text-gray-400 montserrat-regular text-sm md:text-base">
            info@elevarefitness.com
          </p>

          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


