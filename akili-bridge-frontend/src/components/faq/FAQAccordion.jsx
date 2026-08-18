import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-[#2fb3ff]/30 transition-all"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
          >
            <span className="text-lg font-medium text-white">{faq.question}</span>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#2fb3ff] text-2xl flex-shrink-0 ml-4"
            >
              {openIndex === index ? "−" : "+"}
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-4 text-gray-300 leading-relaxed"
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
