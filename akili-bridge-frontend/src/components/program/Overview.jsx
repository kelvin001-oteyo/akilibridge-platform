import React from "react";
import { motion } from "framer-motion";

export default function Overview() {
  const stats = [
    { value: "16", label: "Weeks Intensive", color: "#2fb3ff" },
    { value: "1:1", label: "Mentorship with Global Experts", color: "#8a7ff7" },
    { value: "6", label: "Research Tracks", color: "#ff6a00" },
    { value: "25", label: "Fellows per Cohort", color: "#4CAF50" },
  ];

  return (
    <section className="py-20 px-4 bg-[#0a1628] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2fb3ff] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8a7ff7] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <motion.span
            className="inline-block px-4 py-1.5 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-full text-xs font-medium tracking-wider uppercase mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Program Overview
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Program <span className="text-[#2fb3ff]">Overview</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            The Akili Bridge STEM Research Fellowship is a <span className="text-[#2fb3ff] font-semibold">16-week intensive</span> 
            mentored research program pairing top African scholars with practicing international 
            researchers and engineers. Fellows gain hands-on research experience, receive 
            <span className="text-[#8a7ff7] font-semibold"> 1:1 mentorship</span>, and become 
            published authors on peer-reviewed papers or conference proceedings.
          </p>

          {/* Stats Grid - Updated to 4 columns */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:border-[#2fb3ff]/30 transition-all hover:-translate-y-1"
              >
                <p className="text-2xl font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Trust indicator */}
          <motion.p
            className="text-xs text-gray-500 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Mentors from MIT, Stanford, Oxford, Cambridge, and more
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
