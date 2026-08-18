import React from "react";
import { motion } from "framer-motion";
import FAQAccordion from "./FAQAccordion";

export default function FAQCategory({ category, questions }) {
  // Transform questions into the format FAQAccordion expects
  const faqs = questions.map(q => ({
    question: q.q,
    answer: q.a
  }));

  // Color mapping for categories
  const getCategoryColor = (category) => {
    const colors = {
      "Program Overview": "text-[#2fb3ff]",
      "Eligibility & Requirements": "text-[#4CAF50]",
      "Application Process": "text-[#ffd93d]",
      "Program Structure": "text-[#ff6a00]",
      "Output & Outcomes": "text-[#8a7ff7]",
      "Post-Fellowship Pathway": "text-[#ff6b9d]",
      "Technical & Logistics": "text-[#ffd93d]",
      "Mentorship": "text-[#2fb3ff]",
    };
    return colors[category] || "text-[#2fb3ff]";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3">
        <h2 className={`text-2xl font-bold ${getCategoryColor(category)}`}>
          {category}
        </h2>
        <span className="px-2 py-0.5 rounded-full text-xs bg-white/5 text-gray-400">
          {questions.length} questions
        </span>
      </div>
      <FAQAccordion faqs={faqs} />
    </motion.div>
  );
}
