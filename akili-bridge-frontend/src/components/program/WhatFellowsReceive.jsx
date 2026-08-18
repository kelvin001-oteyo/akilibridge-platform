import React from "react";
import { motion } from "framer-motion";

export default function WhatFellowsReceive() {
  const benefits = [
    {
      text: "Become a published author on a peer-reviewed paper, conference paper, or open-source repository"
    },
    {
      text: "1:1 mentorship with active researchers at top global universities and industry labs"
    },
    {
      text: "Detailed, output-backed letter of recommendation from your track mentor"
    },
    {
      text: "Akili Bridge Fellowship Certificate for completing the 16-week term"
    },
    {
      text: "Direct support for fully funded Master's and Ph.D. positions at top international universities"
    },
    {
      text: "Networking with international researchers and senior engineers"
    }
  ];

  // SVG Checkmark Icon
  const CheckIcon = () => (
    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <section className="py-20 px-4 bg-[#1a2a4a]/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8a7ff7] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2fb3ff] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <motion.span
            className="inline-block px-4 py-1.5 bg-[#8a7ff7]/20 text-[#8a7ff7] rounded-full text-xs font-medium tracking-wider uppercase mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Your Outcomes
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            What You <span className="text-[#8a7ff7]">Leave With</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our comprehensive fellowship program provides everything you need to succeed
          </p>

          {/* Promise indicator - No emoji */}
          <motion.div
            className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 bg-[#4CAF50]/10 rounded-full border border-[#4CAF50]/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-[#4CAF50] text-lg font-bold">✦</span>
            <span className="text-sm text-[#4CAF50] font-medium">100% of fellows become published authors</span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:border-[#8a7ff7]/30 hover:-translate-y-0.5 transition-all group"
            >
              <span className="text-[#8a7ff7] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                <CheckIcon />
              </span>
              <span className="text-gray-300 text-sm leading-relaxed">{benefit.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
