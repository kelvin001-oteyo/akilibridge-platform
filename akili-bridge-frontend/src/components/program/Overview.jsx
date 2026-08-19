import React from "react";
import { motion } from "framer-motion";

export default function Overview() {
  // Stats updated to match new content
  const stats = [
    { value: "16", label: "Weeks of Mentored Research" },
    { value: "1:1", label: "Mentor Support" },
    { value: "6", label: "Research Tracks" },
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
          {/* Badge - UPDATED */}
          <motion.span
            className="inline-block px-4 py-1.5 bg-[#df7c2e]/10 text-[#df7c2e] rounded-full text-xs font-medium tracking-wider uppercase mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Overview
          </motion.span>

          {/* Title - UPDATED */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            How the Program Is Structured
          </h2>

          {/* Description - UPDATED TO EXACT NEW TEXT */}
          <div className="text-[#0a1628]/70 text-lg leading-relaxed max-w-3xl mx-auto space-y-4">
            <p>
              Akili Bridge Fellows commit to 16 weeks of intensive, mentored 
              research — fully remote, so location is never a barrier to 
              joining.
            </p>
            <p>
              Each fellow is paired with an international research mentor in 
              their discipline and works independently between structured 
              check-ins, supported by biweekly 1:1 mentorship sessions and 
              monthly cohort-wide calls. The pace is intentionally gradual: 
              early weeks focus on defining a research question and building 
              foundational skills, later weeks move into deeper independent 
              work and drafting.
            </p>
            <p>
              By the end of the 16 weeks, fellows complete a research 
              project ready to submit toward publication, present at a 
              closing symposium, and receive an Akili Bridge Fellowship 
              certificate.
            </p>
          </div>

          {/* Stats Grid - UPDATED to 3 columns */}
          <motion.div
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-8"
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
                <p className="text-2xl font-bold text-[#df7c2e]">
                  {stat.value}
                </p>
                <p className="text-xs text-[#0a1628]/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* REMOVED: Trust indicator */}
          
        </motion.div>
      </div>
    </section>
  );
}
