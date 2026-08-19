import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import all component pieces
import Overview from "../components/program/Overview";
import ResearchTracks from "../components/program/ResearchTracks";
import WhatFellowsReceive from "../components/program/WhatFellowsReceive";
import Mentorship from "../components/program/Mentorship";

export default function Program() {
  const navigate = useNavigate();
  
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -8,
      transition: { duration: 0.2 },
    },
  };

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
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* IMPORTED COMPONENTS */}
      {/* ============================================================ */}
      <Overview />
      <ResearchTracks />
      <Mentorship />
      <WhatFellowsReceive />

      {/* ============================================================ */}
      {/* WHO CAN APPLY SECTION - Exact text from screenshot */}
      {/* ============================================================ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">Who Can Apply</h2>

            <div className="text-[#0a1628]/80 text-lg leading-relaxed max-w-2xl mx-auto space-y-6">
              <p>
                Akili Bridge Fellows are early-career researchers across East 
                Africa — undergraduates, recent graduates, and Master's or 
                PhD students. No prior publication or research experience is 
                required. What matters is a genuine research interest, the 
                commitment to see 16 weeks through, and curiosity to guide you 
                the rest of the way.
              </p>
              <p>
                Full eligibility details are covered in our <button onClick={() => navigate("/faq")} className="text-[#df7c2e] font-semibold hover:underline">FAQ</button>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CLOSING CTA SECTION - Exact text from screenshot */}
      {/* ============================================================ */}
      <section className="py-16 px-4 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#0a1628] rounded-2xl p-8 md:p-12 text-center border border-gray-800 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            You Know What the Fellowship Involves.<br />
            <span className="text-[#df7c2e]">Here's What to Do Next.</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Check the FAQ for answers to common questions, or go straight
            to the application if you're ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#df7c2e] rounded-xl text-white font-semibold hover:bg-[#c96b24] hover:shadow-lg hover:shadow-[#df7c2e]/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.a>
            <motion.button
              onClick={() => navigate("/faq")}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View FAQs
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
