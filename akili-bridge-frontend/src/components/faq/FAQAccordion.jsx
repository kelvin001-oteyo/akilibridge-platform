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
          // CHANGED: White background, gray border, light shadow
          className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-[#df7c2e]/40 shadow-sm hover:shadow-md transition-all"
        >
          <button
            onClick={() => toggleAccordion(index)}
            // CHANGED: Hover effect uses light gray instead of white/5
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            {/* CHANGED: Question text is now Dark Navy */}
            <span className="text-lg font-medium text-[#0a1628]">{faq.question}</span>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              // CHANGED: Icon is now Orange
              className="text-[#df7c2e] text-2xl flex-shrink-0 ml-4"
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
                // CHANGED: Answer text is Dark Navy/Gray mix, light top border
                className="px-6 pb-4 text-[#0a1628]/70 leading-relaxed border-t border-gray-100 pt-3"
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
