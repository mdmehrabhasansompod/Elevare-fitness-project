import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Dumbbell, User, Calendar } from "lucide-react";

const statsData = [
  { id: 1, number: 17, label: "Equipments", icon: <Dumbbell size={28} /> },
  { id: 2, number: 7, label: "Trainers", icon: <User size={28} /> },
  { id: 3, number: 6, label: "Programs", icon: <Calendar size={28} /> },
];

const StatCard = ({ number, label, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;
    const duration = 2000;
    const increment = end / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(counter);
  }, [number]);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-gradient-to-br from-gray-900/80 to-gray-800/90 p-8 md:p-10 rounded-3xl flex flex-col items-center text-center shadow-2xl transition-transform duration-300 max-w-xs mx-auto"
    >
      {/* Number */}
      <motion.span
        className="text-5xl md:text-6xl anton-regular text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {count}+
      </motion.span>

      {/* Icon + Label */}
      <div className="flex items-center gap-3 mt-2">
        <div className="text-primary">{icon}</div>
        <motion.span
          className="text-lg md:text-xl montserrat-bold text-gray-300 uppercase tracking-wider"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {label}
        </motion.span>
      </div>
    </motion.div>
  );
};

const StatisticsSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-16">
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl anton-regular text-center mb-16 tracking-tight leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
       Elevare <span className="text-primary">Offers</span>
      </motion.h2>

      {/* Single Card Container */}
      <div className="bg-gray-900/70 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto flex flex-col sm:flex-row justify-around items-center gap-8 shadow-2xl">
        {statsData.map((stat) => (
          <StatCard
            key={stat.id}
            number={stat.number}
            label={stat.label}
            icon={stat.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;
