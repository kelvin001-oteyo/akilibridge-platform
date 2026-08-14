import React from "react";
import { motion } from "framer-motion";

export default function Overview() {
  return (
    <section className="py-16 px-4 bg-[#0a1628]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-4xl block mb-4">🚀</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Program <span className="text-[#2fb3ff]">Overview</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            The AkiliBridge STEM Fellowship Program is a one-year researcher-in-training 
            fellowship for undergraduate students in Rwanda. It combines hands-on research 
            experience, world-class mentorship, and career development opportunities in STEM.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <p className="text-2xl font-bold text-[#2fb3ff]">12</p>
              <p className="text-gray-400 text-sm">Months Duration</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <p className="text-2xl font-bold text-[#8a7ff7]">1:1</p>
              <p className="text-gray-400 text-sm">Mentorship Ratio</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <p className="text-2xl font-bold text-[#ff6a00]">6</p>
              <p className="text-gray-400 text-sm">Research Tracks</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}