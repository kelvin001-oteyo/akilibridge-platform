import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MissionTeaser() {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#0a1628] to-[#1a2a4a]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-[#2fb3ff]">Mission</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Africa contributes less than <span className="text-[#ff6a00] font-bold">&lt;1%</span> of global research 
            output despite being home to <span className="text-[#2fb3ff] font-bold">17%</span> of the world's population.
            <br /><br />
            At <span className="text-[#2fb3ff] font-semibold">AkiliBridge</span>, we believe Africa needs more researchers — 
            not just in numbers, but in quality, innovation, and impact.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="mt-6 px-6 py-2.5 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-xl border border-[#2fb3ff]/30 hover:bg-[#2fb3ff]/30 transition-all"
          >
            Learn More →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
