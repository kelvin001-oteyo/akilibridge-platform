import React from "react";
import { motion } from "framer-motion";

export default function OurMission() {
  return (
    <section className="py-16 px-4 bg-[#0a1628]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
        >
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Our <span className="text-[#2fb3ff]">Mission</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            At AkiliBridge, we provide aspiring African researchers with the
            skills, training, and support needed to tackle Africa's most pressing
            challenges. Through our fellowship and training programs, we equip
            undergraduate students with hands-on research experience, mentorship
            from top-tier academics, and the tools to drive innovation in their
            fields.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <span className="text-3xl block mb-2">🎓</span>
              <p className="text-white font-semibold">100+</p>
              <p className="text-gray-400 text-sm">Researchers Trained</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <span className="text-3xl block mb-2">🌍</span>
              <p className="text-white font-semibold">5+</p>
              <p className="text-gray-400 text-sm">African Countries</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <span className="text-3xl block mb-2">👨‍🏫</span>
              <p className="text-white font-semibold">10+</p>
              <p className="text-gray-400 text-sm">Partner Institutions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}