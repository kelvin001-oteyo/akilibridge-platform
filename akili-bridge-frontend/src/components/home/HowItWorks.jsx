import React from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Apply Online",
      description: "Submit your application with academic details, motivation statement, and required documents.",
      icon: "📝"
    },
    {
      number: "02",
      title: "Review & Selection",
      description: "Our team reviews applications and shortlists candidates for interviews.",
      icon: "🔍"
    },
    {
      number: "03",
      title: "Fellowship Journey",
      description: "Selected fellows begin a one-year journey of research, mentorship, and growth.",
      icon: "🚀"
    },
    {
      number: "04",
      title: "Impact & Alumni",
      description: "Graduates join our alumni network and continue making an impact in STEM.",
      icon: "🌟"
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            How It <span className="text-[#2fb3ff]">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your journey to becoming a researcher scholar in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#2fb3ff]/50 hover:-translate-y-1 transition-all text-center"
            >
              <div className="text-4xl mb-3">{step.icon}</div>
              <div className="text-sm text-[#2fb3ff] font-mono mb-1">{step.number}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}