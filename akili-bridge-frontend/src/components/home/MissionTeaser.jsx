import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MissionTeaser() {
  const navigate = useNavigate();
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  // Stats that are meaningful and connected to the fellowship
  const stats = [
    { value: "16", label: "Weeks of Intensive Research", color: "#2fb3ff" },
    { value: "1:1", label: "Mentorship with Global Experts", color: "#8a7ff7" },
    { value: "100%", label: "Fellows Become Published Authors", color: "#ffd93d" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0a1628] to-[#1a2a4a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#2fb3ff] rounded-full filter blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#8a7ff7] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.span
            className="inline-block px-4 py-1.5 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-full text-xs font-medium tracking-wider uppercase mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Our Mission
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Building Africa's <span className="text-[#2fb3ff]">Research Future</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Africa contributes less than <span className="text-[#ff6a00] font-bold">&lt;1%</span> of global research 
            output despite being home to <span className="text-[#2fb3ff] font-bold">17%</span> of the world's population.
          </p>

          <p className="text-gray-400 text-base leading-relaxed max-w-3xl mx-auto mt-4">
            At <span className="text-[#2fb3ff] font-semibold">Akili Bridge</span>, we are changing this narrative. 
            Our fellowship program pairs top African scholars with international researchers, 
            providing the mentorship, training, and support needed to produce world-class 
            research and become published authors.
          </p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-[#2fb3ff]/30 transition-all"
              >
                <p className="text-2xl font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] rounded-xl text-[#0a1628] font-semibold hover:shadow-lg hover:shadow-[#2fb3ff]/30 transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>

            <motion.button
              onClick={() => navigate("/about")}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold border border-white/20 hover:bg-white/20 transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Trust indicator */}
          <motion.p
            className="text-xs text-gray-500 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Fellows receive mentorship from researchers at MIT, Stanford, Oxford, Cambridge, and more
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
