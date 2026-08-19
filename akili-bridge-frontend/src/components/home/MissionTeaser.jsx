import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MissionTeaser() {
  const navigate = useNavigate();
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden border-t border-b border-gray-200">
      {/* Background decoration - Subtle Orange Orbs */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#df7c2e] rounded-full filter blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#df7c2e] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Building Africa's <span className="text-[#df7c2e]">Research Future</span>
          </h2>

          <p className="text-[#0a1628]/80 text-lg leading-relaxed max-w-3xl mx-auto">
            Africa contributes less than <span className="text-[#df7c2e] font-bold">&lt;1%</span> of global research 
            output despite being home to <span className="text-[#df7c2e] font-bold">17%</span> of the world's population.
          </p>

          <p className="text-[#0a1628]/70 text-base leading-relaxed max-w-3xl mx-auto mt-4">
            At <span className="text-[#df7c2e] font-semibold">Akili Bridge</span>, we are changing this narrative. 
            Our fellowship program pairs top African scholars with international researchers, 
            providing the mentorship, training, and support needed to produce world-class 
            research and become published authors.
          </p>

          {/* REMOVED: The 3 Stats Cards (100+, 8, 12) */}

          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => navigate("/about")}
              className="px-8 py-3 bg-white rounded-xl text-[#0a1628] font-semibold border border-gray-200 hover:bg-gray-100 hover:border-[#df7c2e]/40 transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn Our Story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
