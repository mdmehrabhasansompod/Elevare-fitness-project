import React from "react";
import { trainers } from "../assets/assets";
import { motion } from "framer-motion";
import { User, Award } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; 

const Trainers = () => {
  return (
    <section className="bg-black text-white min-h-screen py-24 px-6 md:px-16">
      {/* Page Title */}
      <motion.h2
        className="text-5xl md:text-6xl anton-regular text-center mb-20 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Meet Our Trainers
      </motion.h2>

      {/* Trainers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {trainers.map((trainer, index) => (
          <motion.div
            key={trainer.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-900 rounded-3xl shadow-xl flex flex-col overflow-hidden transition-transform"
          >
            {/* Image */}
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl md:text-3xl bebas-neue-regular mb-1">
                {trainer.name}
              </h3>
              <p className="text-primary montserrat-bold text-sm md:text-base mb-2">
                {trainer.specialty}
              </p>

              <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
                <User size={16} /> {trainer.experience}
              </div>

              {trainer.certifications && (
                <div className="flex flex-wrap items-center gap-2 text-gray-400 text-xs md:text-sm mt-1">
                  <Award size={14} /> {trainer.certifications.join(", ")}
                </div>
              )}

              <p className="mt-3 text-gray-300 montserrat-regular text-sm md:text-base leading-relaxed">
                {trainer.bio}
              </p>

              {/* Social Links */}
              <div className="mt-4 flex gap-4">
                {trainer.linkedin && (
                  <a
                    href={trainer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <FaLinkedin size={22} />
                  </a>
                )}
                {trainer.instagram && (
                  <a
                    href={trainer.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <FaInstagram size={22} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;

