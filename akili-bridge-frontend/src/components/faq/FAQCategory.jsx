import React from "react";
import { motion } from "framer-motion";
import FAQAccordion from "./FAQAccordion";

export default function FAQCategory({ category, faqs }) {
  const getCategoryColor = () => {
    const colors = {
      "Eligibility": "text-blue-400 border-blue-500/30",
      "Process": "text-green-400 border-green-500/30",
      "Logistics": "text-yellow-400 border-yellow-500/30",
      "After": "text-purple-400 border-purple-500/30",
    };
    return colors[category] || "text-gray-400 border-gray-500/30";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className={`border-l-4 pl-4 mb-4 ${getCategoryColor()}`}>
        <h3 className="text-2xl font-bold text-white">{category}</h3>
        <p className="text-gray-400 text-sm">
          {faqs.length} question{faqs.length !== 1 ? "s" : ""}
        </p>
      </div>
      <FAQAccordion faqs={faqs} />
    </motion.div>
  );
}