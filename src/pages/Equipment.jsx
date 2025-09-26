import React from "react";
import { equipments } from "../assets/assets";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Equipment = () => {
  return (
    <section className="bg-black text-white min-h-screen py-24 px-6 md:px-16">
      {/* Page Title */}
      <motion.h2
        className="text-6xl anton-regular text-center mb-20 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Premium Gym Equipments
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {equipments.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03, y: -5 }}
            className="relative rounded-3xl overflow-hidden shadow-xl bg-gray-900 transition-transform duration-300"
          >
            {/* Image with overlay */}
            <div className="relative h-56 md:h-60 w-full">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl md:text-3xl bebas-neue-regular">
                {item.name}
              </h3>
            </div>

            {/* Info Section */}
            <div className="p-5 flex flex-col gap-2">
              <p className="text-gray-300 montserrat-regular text-sm md:text-base">
                {item.type}
              </p>
              {item.brand && (
                <p className="text-gray-400 montserrat-regular text-sm md:text-base">
                  Brand: {item.brand}
                </p>
              )}
              {item.weightRange && (
                <p className="text-gray-400 montserrat-regular text-sm md:text-base">
                  Weight: {item.weightRange}
                </p>
              )}

              {/* Features */}
              <div className="flex flex-wrap gap-2 mt-2">
                {item.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 bg-gray-800/60 px-3 py-1 rounded-full text-xs md:text-sm montserrat-bold"
                  >
                    <Check size={14} className="text-primary" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Equipment;
