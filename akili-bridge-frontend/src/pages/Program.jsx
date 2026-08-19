import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Import all component pieces
import Overview from "../components/program/Overview";
import ResearchTracks from "../components/program/ResearchTracks";
import WhatFellowsReceive from "../components/program/WhatFellowsReceive";
import Mentorship from "../components/program/Mentorship";

export default function Program() {
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  // FAQ Data - Updated with new content
  const faqs = [
    {
      q: "Is this program fully remote?",
      a: "Yes, the program is hybrid with virtual mentorship and independent research. Fellows work remotely while staying connected through weekly check-ins and cohort seminars."
    },
    {
      q: "Can I apply if I'm not from East Africa?",
      a: "Currently, we require applicants to be residing and studying in East Africa. This helps us build a strong regional research community and provide targeted support."
    },
    {
      q: "Do I need prior research experience?",
      a: "No prior publication or research experience is required. What matters is a genuine research interest, the commitment to see 16 weeks through, and curiosity to guide you the rest of the way."
    },
    {
      q: "Is there a fee to participate?",
      a: "No, this is a fully funded fellowship program. There are no costs for selected fellows."
    },
    {
      q: "What happens after the fellowship?",
      a: "You complete a research project ready to submit toward publication, present at a closing symposium, and receive an Akili Bridge Fellowship certificate."
    }
  ];

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
      {/* HERO SECTION - UPDATED WITH NEW CONTENT */}
      {/* ============================================================ */}
      <motion.section
        className="relative flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden min-h-[60vh] border-b border-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background decoration - Subtle Orange */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#df7c2e] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#df7c2e] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-[#0a1628] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            The Fellowship, <br /><span className="text-[#df7c2e]">In Full</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-medium text-[#0a1628] mb-2"
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
      {/* OVERVIEW COMPONENT - NOW USING UPDATED CONTENT */}
      {/* ============================================================ */}
      <Overview />

      {/* ============================================================ */}
      {/* RESEARCH TRACKS COMPONENT */}
      {/* ============================================================ */}
      <ResearchTracks />

      {/* ============================================================ */}
      {/* MENTORSHIP COMPONENT */}
      {/* ============================================================ */}
      <Mentorship />

      {/* ============================================================ */}
      {/* WHAT FELLOWS RECEIVE COMPONENT */}
      {/* ============================================================ */}
      <WhatFellowsReceive />

      {/* ============================================================ */}
      {/* WHO CAN APPLY SECTION - NEW SECTION ADDED */}
      {/* ============================================================ */}
      <section className="py-16 px-4 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={cardVariants}
              className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4"
            >
              Who Can Apply
            </motion.h2>
            
            <motion.p 
              variants={cardVariants}
              className="text-[#0a1628]/80 text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Akili Bridge Fellows are early-career researchers across East 
              Africa — undergraduates, recent graduates, and Master's or 
              PhD students. No prior publication or research experience is 
              required. What matters is a genuine research interest, the 
              commitment to see 16 weeks through, and curiosity to guide you 
              the rest of the way.
            </motion.p>

            <motion.p 
              variants={cardVariants}
              className="text-[#0a1628]/70 mt-4"
            >
              Full eligibility details are covered in our <button onClick={() => navigate("/faq")} className="text-[#df7c2e] font-semibold hover:underline">FAQ</button>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ SECTION - UPDATED TO LIGHT THEME */}
      {/* ============================================================ */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={cardVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#0a1628]"
          >
            Frequently Asked <span className="text-[#df7c2e]">Questions</span>
          </motion.h2>
          
          <motion.p 
            variants={cardVariants}
            className="text-center text-[#0a1628]/60 max-w-2xl mx-auto mb-12"
          >
            Find answers to the most common questions about the fellowship
          </motion.p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-xl border border-gray-200 hover:border-[#df7c2e]/30 hover:shadow-md transition-all overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  aria-expanded={expandedFaq === index}
                >
                  <span className="text-[#0a1628] font-medium">{faq.q}</span>
                  <span className={`text-[#df7c2e] text-xl transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedFaq === index ? 'auto' : 0,
                    opacity: expandedFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 pt-1 border-t border-gray-100">
                    <p className="text-[#0a1628]/70 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA SECTION - UPDATED WITH NEW CONTENT */}
      {/* ============================================================ */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200 shadow-md"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a1628]">
            You Know What the Fellowship Involves. <br />
            <span className="text-[#df7c2e]">Here's What to Do Next.</span>
          </h2>
          <p className="text-[#0a1628]/70 mb-8 max-w-2xl mx-auto">
            Check the FAQ for answers to common questions, or go straight 
            to the application if you're ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#df7c2e] rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-[#df7c2e]/30 hover:bg-[#c96b24] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now →
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/faq")}
              className="px-8 py-4 bg-white rounded-xl text-[#0a1628] font-semibold border border-gray-200 hover:bg-gray-100 transition-all"
            >
              View FAQs
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
