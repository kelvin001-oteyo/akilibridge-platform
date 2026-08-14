import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function FinalCTA() {
  const navigate = useNavigate();
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#2fb3ff]/10 to-[#8a7ff7]/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to Make a <span className="text-[#2fb3ff]">Difference</span>?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Join the first cohort of AkiliBridge Fellows and become part of
            Africa's research revolution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] rounded-xl text-[#0a1628] font-semibold hover:shadow-lg hover:shadow-[#2fb3ff]/30 transition-all"
            >
              Apply Now
            </a>
            <button
              onClick={() => navigate("/program")}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}