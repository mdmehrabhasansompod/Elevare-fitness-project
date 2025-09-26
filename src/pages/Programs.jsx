import React from "react";
import { programs } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Dumbbell, User, Check } from "lucide-react";

const ProgramsPage = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white min-h-screen py-32 px-6 md:px-20">
      {/* Page Title */}
      <motion.h2
        className="text-6xl md:text-7xl anton-regular text-center mb-32 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Programs
      </motion.h2>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {programs.map((program) => (
          <motion.div
            key={program.id}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col transition-transform duration-300"
          >
            {/* Program Image */}
            <div className="relative h-48 md:h-52">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-3xl md:text-4xl bebas-neue-regular">
                  {program.title}
                </h3>
              </div>
            </div>

            {/* Program Content */}
            <div className="p-6 flex flex-col flex-1 gap-4">
              {/* Description */}
              <p className="text-gray-300 montserrat-regular text-sm md:text-base leading-snug">
                {program.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {program.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 bg-gray-800/70 px-3 py-1 rounded-full text-xs md:text-sm montserrat-bold whitespace-nowrap"
                  >
                    <Check size={14} className="text-primary" />
                    {feature}
                  </span>
                ))}
              </div>

              {/* Stats Section */}
              <div className="flex justify-between mt-4 gap-2 flex-wrap">
                <div className="flex items-center gap-1 bg-gray-800/50 px-4 py-2 rounded-xl montserrat-bold text-xs md:text-sm">
                  <Clock size={16} /> {program.duration}
                </div>
                <div className="flex items-center gap-1 bg-gray-800/50 px-4 py-2 rounded-xl montserrat-bold text-xs md:text-sm">
                  <Dumbbell size={16} /> {program.difficulty}
                </div>
                <div className="flex items-center gap-1 bg-gray-800/50 px-4 py-2 rounded-xl montserrat-bold text-xs md:text-sm">
                  <User size={16} /> ${program.price}
                </div>
              </div>

              {/* Contact Button */}
              <button
                onClick={() => {navigate("/contact");scrollTo(0,0)}}
                className="mt-4 px-6 py-3 bg-primary text-black bebas-neue-regular rounded-2xl hover:scale-105 transition-transform text-sm md:text-base"
              >
                Contact Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="mt-32 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl md:text-5xl anton-regular mb-6">
          Ready to Transform Your Body?
        </h3>
        <button
          onClick={() => {navigate("/membership");scrollTo(0,0)}}
          className="px-12 py-4 bg-primary text-black bebas-neue-regular rounded-2xl hover:scale-105 transition-transform text-xl"
        >
          Join Now
        </button>
      </motion.div>
    </section>
  );
};

export default ProgramsPage;



