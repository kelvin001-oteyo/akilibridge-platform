import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Imports remain here
import Overview from "../components/program/Overview";
import ResearchTracks from "../components/program/ResearchTracks";
import WhatFellowsReceive from "../components/program/WhatFellowsReceive";
import Mentorship from "../components/program/Mentorship";

export default function Program() {
  const navigate = useNavigate();
  
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  return (
    <div className="min-h-screen bg-white text-[#0a1628]">
      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <motion.section
        className="relative flex flex-col items-center justify-center text-center py-24 px-4 overflow-hidden min-h-[60vh] border-b border-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background decoration - Subtle Orange */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#df7c2e] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#df7c2e] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="relative z-10 max-w-4xl px-4">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-[#0a1628] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            The Fellowship, <br /><span className="text-[#df7c2e]">In Full</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-medium text-[#0a1628]/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A 16-week research fellowship designed to take you from a 
            research question to real, mentored work — built specifically 
            for scholars who are just getting started.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#df7c2e] rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-[#df7c2e]/30 hover:bg-[#c96b24] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now →
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* YOUR COMPONENTS ARE RENDERED HERE */}
      {/* ============================================================ */}
      <Overview />
      <ResearchTracks />
      <Mentorship />
      <WhatFellowsReceive />
      
    </div>
  );
}
