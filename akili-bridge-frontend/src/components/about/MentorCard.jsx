import React from "react";
import { motion } from "framer-motion";

export default function MentorCard({ mentor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#2fb3ff]/50 hover:-translate-y-1 transition-all text-center"
    >
      <img
        src={mentor.image}
        alt={mentor.name}
        className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-[#2fb3ff]/30 object-cover"
      />
      <h3 className="text-lg font-semibold text-white">{mentor.name}</h3>
      <p className="text-sm text-[#2fb3ff] mb-2">{mentor.title}</p>
      <p className="text-gray-400 text-sm leading-relaxed mb-3">{mentor.bio}</p>
      <div className="flex flex-wrap justify-center gap-1.5">
        {mentor.expertise.map((exp, index) => (
          <span key={index} className="px-2 py-0.5 bg-[#2fb3ff]/10 text-[#2fb3ff] rounded-full text-xs">
            {exp}
          </span>
        ))}
      </div>
    </motion.div>
  );
}