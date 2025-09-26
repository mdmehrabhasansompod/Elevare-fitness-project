import React from "react";
import { membershipPlans } from "../assets/assets";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Membership = () => {
  return (
    <section className="bg-black text-white min-h-screen py-24 px-6 md:px-16">
      {/* Page Title */}
      <motion.h2
        className="text-6xl anton-regular text-center mb-24 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Membership Plans
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {membershipPlans.map((plan, idx) => {
          const isPopular = plan.name === "Gold Plan"; // Highlight Gold Plan as most preferred
          return (
            <motion.div
              key={plan.id}
              whileHover={{ scale: 1.06 }}
              className={`flex flex-col p-6 rounded-3xl shadow-2xl transition-transform duration-300 border ${
                isPopular
                  ? "bg-gradient-to-b from-yellow-500/40 to-yellow-600/20 border-yellow-400"
                  : "bg-gray-900 border-gray-800"
              }`}
            >
              {/* Popular Badge */}
              {isPopular && (
                <div className="absolute -mt-10 ml-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm montserrat-bold">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`${
                  isPopular ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
                } bebas-neue-regular mb-4`}
              >
                {plan.name}
              </h3>

              {/* Price & Duration */}
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className={`${
                    isPopular ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
                  } montserrat-bold text-primary`}
                >
                  ${plan.price}
                </span>
                <span className="text-gray-400 montserrat-regular text-sm md:text-base">
                  / {plan.duration}
                </span>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-gray-300 text-sm md:text-base"
                  >
                    <Check size={18} className="text-primary" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Join Now Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`mt-auto px-6 py-3 rounded-xl font-bold transition-transform ${
                  isPopular
                    ? "bg-yellow-400 text-black"
                    : "bg-primary text-black"
                }`}
              >
                Join Now
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Membership;
