import React from "react";
import { motion } from "framer-motion";

export default function WhatFellowsReceive() {
  const benefits = [
    "1:1 mentorship with leading researchers",
    "Hands-on research experience in cutting-edge labs",
    "Career development workshops and training",
    "Publication and conference presentation opportunities",
    "Networking with fellow researchers and industry experts",
    "Research funding and resource support"
  ];

  return (
    <section className="py-16 px-4 bg-[#1a2a4a]/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">
            What Fellows <span className="text-[#8a7ff7]">Receive</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our comprehensive fellowship program provides everything you need to succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/5 hover:border-[#2fb3ff]/30 transition-all"
            >
              <span className="text-[#2fb3ff] text-xl flex-shrink-0">✓</span>
              <span className="text-gray-300">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}