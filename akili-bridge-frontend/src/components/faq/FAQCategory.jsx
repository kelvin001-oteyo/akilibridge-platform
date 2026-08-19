import React from "react";
import { motion } from "framer-motion";
import FAQAccordion from "./FAQAccordion";

export default function FAQCategory({ category, questions }) {
  // Transform questions into the format FAQAccordion expects
  const faqs = questions.map(q => ({
    question: q.q,
    answer: q.a
  }));

  // Color mapping for categories - UPDATED to use Dark Navy & Orange
  const getCategoryColor = (category) => {
    const colors = {
      "Program Overview": "text-[#0a1628]",             // Dark Navy
      "Eligibility & Requirements": "text-[#0a1628]",   // Dark Navy
      "Application Process": "text-[#df7c2e]",          // Orange
      "Program Structure": "text-[#df7c2e]",            // Orange
      "Output & Outcomes": "text-[#0a1628]",            // Dark Navy
      "Post-Fellowship Pathway": "text-[#df7c2e]",      // Orange
      "Technical & Logistics": "text-[#0a1628]",        // Dark Navy
      "Mentorship": "text-[#0a1628]",                   // Dark Navy
    };
    return colors[category] || "text-[#0a1628]";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3">
        {/* UPDATED: Text is now Dark Navy or Orange, no more gradients */}
        <h2 className={`text-2xl font-bold ${getCategoryColor(category)}`}>
          {category}
        </h2>
        {/* UPDATED: Badge background is now light gray for white theme */}
        <span className="px-2 py-0.5 rounded-full text-xs bg-gray-100 text-[#0a1628]/60">
          {questions.length} questions
        </span>
      </div>
      <FAQAccordion faqs={faqs} />
    </motion.div>
  );
}
