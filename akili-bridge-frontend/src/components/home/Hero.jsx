import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  // Simple fade-in animations for the poster layout
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section ref={containerRef} className="relative bg-white text-[#0a1628] py-12 md:py-20 px-4 md:px-8 overflow-hidden">
      
      {/* Main Container - Two Column Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT COLUMN: Text & Information */}
        <div className="flex flex-col space-y-6 max-w-xl">
          
          {/* Logo area */}
          <motion.div 
            custom={0} initial="hidden" animate="visible" variants={fadeInUp}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-1">
               {/* This mimics the logo - replace with your actual logo tag if you have it */}
               <div className="w-10 h-10 rounded-full border-2 border-[#0a1628] flex items-center justify-center text-xl font-bold text-[#df7c2e]">AB</div>
               <h1 className="text-3xl font-bold tracking-tight">Akili Bridge</h1>
            </div>
            <p className="text-xs text-[#0a1628]/60 tracking-[0.2em] uppercase font-medium pl-1">
              Learn • Connect • Grow
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.div custom={1} initial="hidden" animate="visible" variants={fadeInUp} className="space-y-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0a1628]">
              STEM RESEARCH
            </h2>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-[#df7c2e]">
              FELLOWSHIP
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#df7c2e] mt-2">
              CALL FOR <br /> APPLICATIONS
            </h3>
          </motion.div>

          {/* Subtitle */}
          <motion.p custom={2} initial="hidden" animate="visible" variants={fadeInUp} className="text-lg md:text-xl font-medium text-[#0a1628]/80">
            For African STEM talent <span className="font-bold text-[#0a1628]">ready to do meaningful research.</span>
          </motion.p>

          {/* CTA Box - Navy with Orange Accent */}
          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeInUp} className="bg-[#0a1628] rounded-xl p-5 flex items-center gap-4 text-white relative overflow-hidden max-w-md mt-2">
            <div className="bg-[#df7c2e] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center text-3xl shadow-lg">
              📢
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-orange-200 uppercase tracking-wide">Applications are</span>
              <span className="text-2xl font-bold">NOW OPEN!</span>
            </div>
          </motion.div>

          {/* TARGET AUDIENCE SECTION */}
          <motion.div custom={4} initial="hidden" animate="visible" variants={fadeInUp} className="pt-2">
            <h4 className="font-bold text-[#0a1628] text-lg mb-3">ARE YOU A:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-3 border border-gray-200 rounded-lg bg-gray-50/50">
                <span className="text-2xl mb-1">🎓</span>
                <span className="text-xs font-bold text-[#0a1628]">FINAL-YEAR<br/>UNDERGRADUATE?</span>
                <span className="text-[10px] text-gray-500 mt-1">B.Sc / B.Eng.</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 border border-gray-200 rounded-lg bg-gray-50/50">
                <span className="text-2xl mb-1">📜</span>
                <span className="text-xs font-bold text-[#0a1628]">RECENT<br/>STEM GRADUATE?</span>
                <span className="text-[10px] text-gray-500 mt-1">Bachelor's degree</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 border border-gray-200 rounded-lg bg-gray-50/50 col-span-2 md:col-span-1">
                <span className="text-2xl mb-1">👨‍🔬</span>
                <span className="text-xs font-bold text-[#0a1628]">MASTER'S OR<br/>Ph.D. STUDENT?</span>
                <span className="text-[10px] text-gray-500 mt-1">In STEM fields</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: STEM Collage Graphic - Using Unsplash URL */}
        <motion.div 
          custom={5} initial="hidden" animate="visible" variants={fadeInUp}
          className="relative w-full h-full flex items-center justify-center"
        >
          <div className="relative w-full">
            {/* Main image - tech and bridge collage vibe */}
            <img 
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="STEM Research Collage" 
              className="w-full h-auto rounded-xl shadow-2xl object-cover max-h-[700px]"
            />
            {/* Diagonal overlay shapes to mimic the poster's diagonal cuts */}
            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-white/10" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* RESEARCH FIELDS SECTION */}
      <motion.div custom={6} initial="hidden" animate="visible" variants={fadeInUp} className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200">
        <h4 className="font-bold text-[#0a1628] text-lg mb-4">RESEARCH FIELDS INCLUDE:</h4>
        <div className="flex flex-wrap gap-6 justify-between text-sm font-medium text-[#0a1628]/80">
          <div className="flex flex-col items-center gap-1"><span className="text-2xl">💻</span>Computer Science</div>
          <div className="flex flex-col items-center gap-1"><span className="text-2xl">🧠</span>Artificial Intelligence</div>
          <div className="flex flex-col items-center gap-1"><span className="text-2xl">📊</span>Data Science</div>
          <div className="flex flex-col items-center gap-1"><span className="text-2xl">🏗️</span>Civil & Structural Eng.</div>
          <div className="flex flex-col items-center gap-1"><span className="text-2xl">🚗</span>Intelligent Transportation</div>
          <div className="flex flex-col items-center gap-1"><span className="text-2xl">∑</span>Applied Math/Statistics</div>
        </div>
        <p className="text-sm text-gray-500 mt-3">and related STEM disciplines</p>
      </motion.div>

      {/* DEADLINE & APPLY SECTION */}
      <motion.div custom={7} initial="hidden" animate="visible" variants={fadeInUp} className="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        
        {/* Deadline Box */}
        <div className="bg-white border-2 border-[#0a1628] rounded-xl p-4 flex items-center gap-4 shadow-sm">
          <div className="bg-[#df7c2e] rounded-full w-14 h-14 flex-shrink-0 flex items-center justify-center text-2xl text-white">
            📅
          </div>
          <div>
            <div className="font-bold text-[#0a1628]">APPLICATION DEADLINE</div>
            <div className="text-2xl font-extrabold text-[#df7c2e]">15 SEPTEMBER 2026</div>
          </div>
        </div>

        {/* Big Apply Now Button */}
        <motion.a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#df7c2e] text-white font-bold text-2xl py-4 px-8 rounded-lg shadow-lg flex items-center justify-center gap-4 hover:bg-[#c96b24] transition-colors w-full md:w-auto"
        >
          APPLY NOW <span className="text-3xl">→</span>
        </motion.a>

      </motion.div>
      
    </section>
  );
}
