import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const videoList = [assets.video1, assets.video2, assets.video3, assets.video4];

const Header = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {videoList.map(
          (video, index) =>
            index === current && (
              <motion.video
                key={index}
                src={video}
                autoPlay
                muted
                playsInline
                onEnded={() => setCurrent((prev) => (prev + 1) % videoList.length)}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            )
        )}
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <motion.h1
          className="font-anton text-5xl sm:text-6xl md:text-8xl text-white tracking-wider drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Elevare <span className="text-primary">Fitness</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Unlock your potential. Train harder. Transform your life with strength
          and discipline.
        </motion.p>

        <motion.div
          className="mt-8 flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button
            onClick={() => {
              navigate("/membership");
              window.scrollTo(0, 0);
            }}
            className="px-8 py-3 bg-primary text-black font-bold text-lg rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Join Now
          </button>
          <button
            onClick={() => {
              navigate("/about");
              window.scrollTo(0, 0);
            }}
            className="px-8 py-3 border border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
