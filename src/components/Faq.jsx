import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you provide virtual training sessions?",
    answer:
      "Members get access to online workouts, live sessions, and fitness resources through our digital platform.",
  },
  {
    question: "Can I switch between membership plans?",
    answer:
      "Yes, members can upgrade or downgrade their plans anytime through our portal or app.",
  },
  {
    question: "Are personal trainers available?",
    answer:
      "Absolutely! Our certified trainers provide both in-person and virtual guidance tailored to your goals.",
  },
  {
    question: "Do you offer nutrition guidance?",
    answer:
      "Yes, we provide meal plans and nutrition tips to complement your training programs.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      layout
      className="bg-gray-900 rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
      onClick={onClick}
    >
      {/* Header */}
      <motion.div
        layout
        className="flex justify-between items-center px-6 py-5 md:py-6 text-white text-base md:text-lg font-semibold montserrat-bold relative"
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <ChevronDown size={24} />
        </motion.div>

        {/* Underline */}
        <motion.div
          layout
          className="absolute bottom-0 left-0 h-1 bg-primary rounded-full"
          animate={{ width: isOpen ? "100%" : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ opacity: { duration: 0.3 }, y: { duration: 0.3 } }}
            className="px-6 pb-6 text-gray-300 text-sm md:text-base montserrat-regular"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-black py-28 px-6 md:px-16">
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl anton-regular text-center mb-20 tracking-tight leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Frequently Asked <span className="text-primary">Questions</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {faqs.map((faq, idx) => (
          <FAQItem
            key={idx}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === idx}
            onClick={() => handleToggle(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

