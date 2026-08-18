import React from "react";
import { motion } from "framer-motion";

export default function Mentorship() {
  const mentorshipFeatures = [
    "1:1 Mentorship",
    "Weekly Check-ins",
    "Career Guidance",
    "Publication Support",
    "Global Network",
    "Research Guidance"
  ];

  return (
    <section className="py-20 px-4 bg-[#0a1628] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2fb3ff] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#8a7ff7] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#2fb3ff]/10 to-[#8a7ff7]/10 rounded-3xl p-8 md:p-12 border border-white/10 text-center"
        >
          {/* Badge */}
          <motion.span
            className="inline-block px-4 py-1.5 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-full text-xs font-medium tracking-wider uppercase mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Expert Guidance
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            World-Class <span className="text-[#2fb3ff]">Mentorship</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Each fellow is paired with a dedicated mentor — an active researcher or senior engineer
            at <span className="text-[#2fb3ff] font-semibold">top global universities and industry labs</span> 
            who provides guidance, support, and networking opportunities throughout the 16-week program.
          </p>

          {/* Mentor stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-6">
            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
              <p className="text-2xl font-bold text-[#2fb3ff]">1:1</p>
              <p className="text-[10px] text-gray-400">Personalized Mentorship</p>
            </div>
            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
              <p className="text-2xl font-bold text-[#8a7ff7]">15+</p>
              <p className="text-[10px] text-gray-400">Expert Mentors</p>
            </div>
            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
              <p className="text-2xl font-bold text-[#ffd93d]">Weekly</p>
              <p className="text-[10px] text-gray-400">Check-ins & Support</p>
            </div>
            <div className="bg-white/5 rounded-xl p-3 border border-white/5">
              <p className="text-2xl font-bold text-[#4CAF50]">Global</p>
              <p className="text-[10px] text-gray-400">University Network</p>
            </div>
          </div>

          {/* Features tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {mentorshipFeatures.map((feature, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/10 hover:border-[#2fb3ff]/30 hover:text-white transition-all hover:-translate-y-0.5"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                viewport={{ once: true }}
              >
                {feature}
              </motion.span>
            ))}
          </div>

          {/* Trust indicator */}
          <motion.p
            className="text-xs text-gray-500 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Mentors include researchers from MIT, Stanford, Oxford, Cambridge, Google Research, and Microsoft Research
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
