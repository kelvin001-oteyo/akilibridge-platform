import React from "react";
import { motion } from "framer-motion";

export default function Checklist() {
  const items = [
    "Complete the online application form",
    "Submit your academic transcripts",
    "Provide a motivation statement",
    "Upload your CV/Resume",
    "Submit a sample of your work (optional)",
    "Provide contact information for two referees"
  ];

  return (
    <section className="py-16 px-4 bg-[#0a1628]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Application <span className="text-[#2fb3ff]">Checklist</span>
          </h2>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 text-gray-300"
              >
                <span className="text-[#2fb3ff] text-lg flex-shrink-0">☐</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}