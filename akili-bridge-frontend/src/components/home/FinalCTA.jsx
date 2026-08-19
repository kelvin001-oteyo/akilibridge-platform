import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function FinalCTA() {
  const navigate = useNavigate();
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  // Stats for social proof
  const stats = [
    { value: "16", label: "Weeks" },
    { value: "1:1", label: "Mentorship" },
    { value: "6", label: "Research Tracks" }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden border-t border-gray-200">
      {/* Decorative background elements - Faint Orange Orbs */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#df7c2e] rounded-full filter blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#df7c2e] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl shadow-gray-200/50"
        >
          {/* REMOVED: Badge flag */}

          {/* Main Title - UPDATED */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#0a1628] mb-4"
          >
            Ready to Begin Your Research Journey?
          </motion.h2>

          {/* Description - UPDATED */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[#0a1628]/70 text-lg max-w-2xl mx-auto mb-6"
          >
            Join Akili Bridge and get hands-on mentorship, real research 
            experience, and the guidance to take your work toward publication.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                <p className="text-2xl font-bold text-[#df7c2e]">{stat.value}</p>
                <p className="text-xs text-[#0a1628]/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* REMOVED: Trust indicator text */}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#df7c2e] rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-[#df7c2e]/30 hover:bg-[#c96b24] transition-all hover:scale-105 active:scale-95"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply Now
            </motion.a>
            <motion.button
              onClick={() => navigate("/program")}
              className="px-8 py-4 bg-white rounded-xl text-[#0a1628] font-semibold border border-gray-200 hover:bg-gray-50 hover:border-[#df7c2e]/40 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Program Details
            </motion.button>
          </motion.div>

          {/* Deadline notice - UPDATED TEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs text-[#0a1628]/50 mt-6"
          >
            Applications reviewed on a rolling basis. Early submission is encouraged.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
