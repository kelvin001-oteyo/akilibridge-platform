import React from "react";
import { motion } from "framer-motion";

export default function WhoWeServe() {
  const groups = [
    {
      name: "Undergraduate Students",
      description: "STEM students in Rwanda eager to gain hands-on research experience and mentorship.",
      icon: "🎓"
    },
    {
      name: "Early-Career Researchers",
      description: "Recent graduates looking to build their research portfolio and academic network.",
      icon: "🔬"
    },
    {
      name: "Aspiring Academics",
      description: "Students considering graduate studies and academic careers in STEM fields.",
      icon: "📚"
    },
    {
      name: "Innovators & Problem Solvers",
      description: "Young thinkers passionate about solving Africa's challenges through research.",
      icon: "💡"
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">
            Who We <span className="text-[#2fb3ff]">Serve</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            AkiliBridge is dedicated to empowering the next generation of African researchers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#2fb3ff]/30 transition-all text-center"
            >
              <span className="text-4xl block mb-3">{group.icon}</span>
              <h3 className="text-lg font-semibold text-white mb-2">{group.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{group.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}