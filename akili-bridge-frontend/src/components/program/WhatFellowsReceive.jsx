import React from "react";
import { motion } from "framer-motion";

export default function WhatFellowsReceive() {
  const benefits = [
    {
      text: "16 weeks of structured, 1:1 mentored research"
    },
    {
      text: "A completed research project in your discipline"
    },
    {
      text: "Support taking your work toward publication"
    },
    {
      text: "A closing symposium to present your findings"
    },
    {
      text: "An Akili Bridge Fellowship certificate"
    },
    {
      text: "A network of peers and mentors across six research fields"
    }
  ];

  // SVG Checkmark Icon - Updated to Dark Navy
  const CheckIcon = () => (
    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background decoration - Faint Orange orbs */}
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
          className="text-center mb-12"
        >
          {/* REMOVED: Badge */}

          {/* Title - UPDATED */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-2">
            What You Walk Away With
          </h2>
          
          {/* REMOVED: Subtitle */}
          {/* REMOVED: Promise indicator */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-[#df7c2e]/40 hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              <span className="text-[#df7c2e] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                <CheckIcon />
              </span>
              <span className="text-[#0a1628]/70 text-sm leading-relaxed">{benefit.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
