import React from "react";
import { motion } from "framer-motion";
import FAQAccordion from "./FAQAccordion";

export default function FAQCategory({ category, questions }) {
  // Transform questions into the format FAQAccordion expects
  const faqs = questions.map(q => ({
    question: q.q,
    answer: q.a
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3">
        {/* UPDATED: All categories are now Dark Navy (#0a1628) */}
        <h2 className={`text-2xl font-bold text-[#0a1628]`}>
          {category}
        </h2>
        <span className="px-2 py-0.5 rounded-full text-xs bg-gray-100 text-[#0a1628]/60">
          {questions.length} questions
        </span>
      </div>
      <FAQAccordion faqs={faqs} />
    </motion.div>
  );
}
