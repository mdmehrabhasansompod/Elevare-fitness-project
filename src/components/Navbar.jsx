import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "PROGRAMS", path: "/programs" },
    { name: "EQUIPMENTS", path: "/equipments" },
    { name: "MEMBERSHIP", path: "/membership" },
    { name: "TRAINERS", path: "/trainers" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="w-full top-0 left-0 z-50 bg-black">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Desktop Logo and Name */}
        <div className="hidden lg:flex items-center gap-4 flex-wrap">
          <img
            className="w-28 cursor-pointer"
            onClick={() => navigate("/")}
            src={assets.logo}
            alt="Elevare Fitness"
          />
          <p className="anton-regular text-3xl text-white hover:text-transparent hover:[-webkit-text-stroke:1px_var(--color-primary)] transition-all duration-300 whitespace-nowrap">
            Elevare Fitness
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 font-medium">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `group flex flex-col items-center py-1 ${isActive ? "text-orange-500" : "text-white"}`
              }
            >
              <li className="group-hover:text-orange-500 transition-colors">
                {item.name}
              </li>
              <div className="h-0.5 w-3/5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></div>
            </NavLink>
          ))}
        </ul>

        {/* Mobile Header */}
        <div className="flex lg:hidden items-center justify-between w-full">
          <img
            className="w-28 cursor-pointer"
            onClick={() => navigate("/")}
            src={assets.logo}
            alt="Elevare Fitness"
          />
          <div 
            onClick={() => setMobileMenu(!mobileMenu)} 
            className="cursor-pointer text-white"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div 
          className="lg:hidden inset-0 z-60 bg-black bg-opacity-95"
          onClick={() => setMobileMenu(false)}
        >
          <div 
            className="flex flex-col h-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-gray-800">
              <div className="flex items-center gap-4">
                <p className="anton-regular text-2xl text-white">Elevare Fitness</p>
              </div>
            </div>

            <ul className="flex flex-col items-start mt-6 px-6 gap-3 text-lg font-medium flex-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `py-3 px-4 rounded hover:bg-orange-500 hover:text-black transition-colors w-full block ${
                      isActive ? "bg-orange-500 text-black" : "text-white"
                    }`
                  }
                  onClick={() => setMobileMenu(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;