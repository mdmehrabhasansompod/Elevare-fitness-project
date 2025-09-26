import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, UserCheck, Clock, Heart } from "lucide-react";

const reasons = [
  {
    id: 1,
    icon: <Dumbbell size={32} className="text-primary" />,
    title: "Top-notch Equipment",
    description:
      "We provide modern, high-quality gym equipment for all fitness levels.",
  },
  {
    id: 2,
    icon: <UserCheck size={32} className="text-primary" />,
    title: "Expert Trainers",
    description:
      "Our certified trainers guide you with personalized fitness programs.",
  },
  {
    id: 3,
    icon: <Clock size={32} className="text-primary" />,
    title: "Flexible Schedule",
    description:
      "Train at your convenience with our extended hours and online support.",
  },
  {
    id: 4,
    icon: <Heart size={32} className="text-primary" />,
    title: "Healthy Lifestyle",
    description:
      "We focus on holistic wellness – mind, body, and nutrition guidance.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-16">
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl anton-regular text-center mb-16 tracking-tight leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Why <span className="text-primary"> Choose</span> Us
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {reasons.map((reason, idx) => (
          <motion.div
            key={reason.id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-gray-900/80 p-8 rounded-3xl flex flex-col items-center text-center shadow-2xl"
          >
            <div className="mb-4">{reason.icon}</div>
            <h3 className="text-2xl md:text-3xl bebas-neue-regular mb-2">
              {reason.title}
            </h3>
            <p className="text-gray-300 montserrat-regular text-sm md:text-base leading-relaxed">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
