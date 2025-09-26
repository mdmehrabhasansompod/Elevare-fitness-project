import React from "react";
import { motion } from "framer-motion";
import {assets} from "../assets/assets"; 
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white min-h-screen flex items-center py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={assets.aboutVector}
            alt="About Elevare Fitness"
            className="w-full max-w-md md:max-w-lg object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-5xl md:text-7xl anton-regular mb-6 leading-tight">
            About <span className="text-primary">Elevare Fitness</span>
          </h2>

          <p className="text-lg md:text-xl montserrat-regular text-gray-300 leading-relaxed mb-6">
            Established in <span className="text-primary font-bold">2018</span>,
            Elevare Fitness has become a premier fitness destination. We are
            committed to building a culture of discipline, strength, and
            self-improvement for everyone who walks through our doors.
          </p>

          {/* Motto */}
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl anton-regular text-primary mb-2">
              Our Motto
            </h3>
            <p className="text-lg md:text-xl montserrat-regular text-gray-300">
              <em>"Strength. Discipline. Transformation."</em>
            </p>
          </div>

          {/* Contact Us Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigate("/contact");
              window.scrollTo(0, 0);
            }}
            className="mt-8 px-8 py-3 bg-primary text-black font-bold text-lg rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
