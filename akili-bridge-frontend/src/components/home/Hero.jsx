import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section 
      ref={containerRef} 
      className="relative bg-white text-[#0a1628] py-12 md:py-20 px-4 md:px-8 overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* BACKGROUND IMAGE WRAPPER - Using your current collage as a full background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")`,
          }}
        />
        {/* Soft white gradient overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
      </div>

      {/* CENTERED MAIN CONTENT CONTAINER */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center space-y-6 w-full">
        
        {/* Logo area (moved to top center) */}
        <motion.div 
          custom={0} initial="hidden" animate="visible" variants={fadeInUp}
          className="flex flex-col items-center mb-2"
        >
          <div className="flex items-center gap-3 mb-1">
             <div className="w-12 h-12 rounded-full border-2 border-[#0a1628] flex items-center justify-center text-xl font-bold text-[#df7c2e]">AB</div>
             <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Akili Bridge</h1>
          </div>
          <p className="text-xs text-[#0a1628]/60 tracking-[0.2em] uppercase font-medium">
            Learn • Connect • Grow
          </p>
        </motion.div>

        {/* Main Headlines */}
        <motion.div custom={1} initial="hidden" animate="visible" variants={fadeInUp} className="space-y-1">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-[#0a1628]">
            STEM RESEARCH
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-[#df7c2e]">
            FELLOWSHIP
          </h2>
        </motion.div>

        {/* Value Proposition */}
        <motion.div custom={2} initial="hidden" animate="visible" variants={fadeInUp} className="space-y-2">
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight">
            Publish your research.<br />
            <span className="text-[#df7c2e]">Secure your future.</span>
          </p>
        </motion.div>

        {/* Subtitle Description */}
        <motion.p custom={3} initial="hidden" animate="visible" variants={fadeInUp} className="text-base md:text-lg text-[#0a1628]/80 max-w-2xl leading-relaxed">
          A 16-week mentored fellowship pairing African scholars with international researchers for real-world research and publication.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          custom={4} initial="hidden" animate="visible" variants={fadeInUp}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-2"
        >
          <motion.a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#df7c2e] text-white font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:bg-[#c96b24] transition-colors flex items-center justify-center gap-2"
          >
            Apply Now 
            <span className="text-2xl">→</span>
          </motion.a>
          <motion.button
            onClick={() => navigate("/program")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#0a1628] font-semibold text-lg py-4 px-8 rounded-lg border-2 border-[#0a1628] hover:bg-gray-50 transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          custom={5} initial="hidden" animate="visible" variants={fadeInUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl w-full mt-4 pt-4 border-t border-gray-200"
        >
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-[#df7c2e]">16</p>
            <p className="text-xs text-[#0a1628]/60 uppercase tracking-wider">Weeks</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-[#df7c2e]">1:1</p>
            <p className="text-xs text-[#0a1628]/60 uppercase tracking-wider">Mentorship</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-[#df7c2e]">6</p>
            <p className="text-xs text-[#0a1628]/60 uppercase tracking-wider">Research Tracks</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-[#df7c2e]">25</p>
            <p className="text-xs text-[#0a1628]/60 uppercase tracking-wider">Fellows per Cohort</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
