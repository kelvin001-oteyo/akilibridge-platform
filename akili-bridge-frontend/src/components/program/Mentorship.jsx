import React from "react";
import { motion } from "framer-motion";

export default function Mentorship() {
  return (
    <section className="py-16 px-4 bg-[#0a1628]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#2fb3ff]/10 to-[#8a7ff7]/10 rounded-3xl p-8 md:p-12 border border-white/10 text-center"
        >
          <span className="text-5xl block mb-4">🧑‍🏫</span>
          <h2 className="text-3xl font-bold text-white mb-4">
            World-Class <span className="text-[#2fb3ff]">Mentorship</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Each fellow is paired with a dedicated mentor — an experienced researcher or industry expert
            who provides guidance, support, and networking opportunities throughout the program.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">1:1 Mentorship</span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">Monthly Check-ins</span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">Career Guidance</span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">Research Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}