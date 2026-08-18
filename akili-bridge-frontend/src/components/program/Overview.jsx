import React from "react";
import { motion } from "framer-motion";

export default function Overview() {
  // UPDATED: All stats now use the brand's Orange color for a cohesive look
  const stats = [
    { value: "16", label: "Weeks Intensive" },
    { value: "1:1", label: "Mentorship with Global Experts" },
    { value: "6", label: "Research Tracks" },
    { value: "25", label: "Fellows per Cohort" },
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background decoration - Subtle orange orbs */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#df7c2e] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#df7c2e] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge - UPDATED to Orange */}
          <motion.span
            className="inline-block px-4 py-1.5 bg-[#df7c2e]/10 text-[#df7c2e] rounded-full text-xs font-medium tracking-wider uppercase mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Program Overview
          </motion.span>

          {/* Title - UPDATED to Dark Navy & Orange */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Program <span className="text-[#df7c2e]">Overview</span>
          </h2>

          {/* Description - UPDATED to Dark Navy text */}
          <p className="text-[#0a1628]/70 text-lg leading-relaxed max-w-3xl mx-auto">
            The Akili Bridge STEM Research Fellowship is a <span className="text-[#df7c2e] font-semibold">16-week intensive</span> 
            mentored research program pairing top African scholars with practicing international 
            researchers and engineers. Fellows gain hands-on research experience, receive 
            <span className="text-[#df7c2e] font-semibold"> 1:1 mentorship</span>, and become 
            published authors on peer-reviewed papers or conference proceedings.
          </p>

          {/* Stats Grid - UPDATED to light gray cards, Orange stats, Dark Navy labels */}
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
                className="bg-gray-50 rounded-xl p-4 border border-gray-200 transition-all hover:border-[#df7c2e]/40 hover:-translate-y-1 hover:shadow-md"
              >
                {/* UPDATED: All stats are now Orange */}
                <p className="text-2xl font-bold text-[#df7c2e]">
                  {stat.value}
                </p>
                {/* UPDATED: Labels are now Dark Navy */}
                <p className="text-xs text-[#0a1628]/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Trust indicator - UPDATED text color */}
          <motion.p
            className="text-xs text-[#0a1628]/50 mt-6"
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
