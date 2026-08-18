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

  // FAQ Data
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
      a: "Not necessarily. We welcome motivated students with strong academic backgrounds who are eager to learn. Our mentorship model is designed to guide you through the research process."
    },
    {
      q: "Is there a fee to participate?",
      a: "No, this is a fully funded fellowship program. There are no costs for selected fellows."
    },
    {
      q: "What happens after the fellowship?",
      a: "Program completers receive direct support to secure fully funded Master's and Ph.D. positions at top international universities, including help with applications, scholarships, and connecting with professors."
    }
  ];

  // Eligibility data
  const eligibility = [
    { label: "Academic Level", value: "Final-year undergrad, recent grad, Master's, or Ph.D. student" },
    { label: "Location", value: "Residing and studying in East Africa" },
    { label: "Commitment", value: "15 focused hours per week for 16 weeks" },
    { label: "Career Goal", value: "Willing to pursue research or graduate studies" },
    { label: "Language", value: "Proficiency in English" }
  ];

  // Post-fellowship data
  const postFellowship = [
    "Direct support to secure fully funded Master's and Ph.D. positions",
    "Full tuition coverage, monthly stipends, and research funding",
    "Connection with hiring professors at top international universities",
    "Targeted guidance for competitive global scholarship programs"
  ];

  // Application steps
  const applicationSteps = [
    {
      step: 1,
      title: "Complete Application Form",
      description: "Fill out our comprehensive Google Form with your academic background, research interests, and motivation."
    },
    {
      step: 2,
      title: "Submit Supporting Documents",
      description: "Upload your transcripts, CV/resume, and a brief research proposal or statement of purpose."
    },
    {
      step: 3,
      title: "Interview Selection",
      description: "Shortlisted candidates will be invited for an interview with our selection committee."
    },
    {
      step: 4,
      title: "Final Selection & Onboarding",
      description: "Selected fellows will receive an offer letter and begin their orientation process."
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
      {/* HERO SECTION - THEME UPDATED TO WHITE/NAVY/ORANGE */}
      {/* ============================================================ */}
      <motion.section
        className="relative flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden min-h-[90vh] border-b border-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background decoration - Subtle Orange */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#df7c2e] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#df7c2e] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#df7c2e]/5 rounded-full filter blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-7xl font-bold mb-4 text-[#0a1628] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Akili Bridge STEM <br /><span className="text-[#df7c2e]">Research Fellowship</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-semibold text-[#0a1628] mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Publish Your Research. Secure Your Future.
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl text-[#0a1628]/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Pairing top African scholars with practicing international researchers and engineers 
            for 16 weeks of real-world research, mentorship, and publication.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
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
              onClick={() => document.getElementById('program-info')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gray-100 rounded-xl text-[#0a1628] font-semibold border border-gray-200 hover:bg-gray-200 transition-all"
            >
              Learn More ↓
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
              <p className="text-2xl font-bold text-[#df7c2e]">16</p>
              <p className="text-xs text-[#0a1628]/60">Weeks</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
              <p className="text-2xl font-bold text-[#df7c2e]">1:1</p>
              <p className="text-xs text-[#0a1628]/60">Mentorship</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
              <p className="text-2xl font-bold text-[#df7c2e]">6</p>
              <p className="text-xs text-[#0a1628]/60">Tracks</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
              <p className="text-2xl font-bold text-[#df7c2e]">25</p>
              <p className="text-xs text-[#0a1628]/60">Fellows</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* PARTNER LOGOS SECTION - UPDATED TO LIGHT THEME */}
      {/* ============================================================ */}
      <section className="py-12 px-4 border-t border-b border-gray-200 bg-gray-50/50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.p 
            variants={cardVariants}
            className="text-center text-[#0a1628]/50 text-xs uppercase tracking-wider mb-6"
          >
            Our mentors are from leading institutions worldwide
          </motion.p>
          
          <motion.div 
            variants={cardVariants}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50"
          >
            <span className="text-[#0a1628] font-bold text-sm md:text-base hover:text-[#df7c2e] transition-colors cursor-default">MIT</span>
            <span className="text-[#0a1628] font-bold text-sm md:text-base hover:text-[#df7c2e] transition-colors cursor-default">Stanford</span>
            <span className="text-[#0a1628] font-bold text-sm md:text-base hover:text-[#df7c2e] transition-colors cursor-default">Oxford</span>
            <span className="text-[#0a1628] font-bold text-sm md:text-base hover:text-[#df7c2e] transition-colors cursor-default">Cambridge</span>
            <span className="text-[#0a1628] font-bold text-sm md:text-base hover:text-[#df7c2e] transition-colors cursor-default">ETH Zurich</span>
            <span className="text-[#0a1628] font-bold text-sm md:text-base hover:text-[#df7c2e] transition-colors cursor-default">Carnegie Mellon</span>
            <span className="text-[#0a1628] font-bold text-sm md:text-base hover:text-[#df7c2e] transition-colors cursor-default">Google Research</span>
            <span className="text-[#0a1628] font-bold text-sm md:text-base hover:text-[#df7c2e] transition-colors cursor-default">Microsoft Research</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* OVERVIEW COMPONENT - NOW USING THE UPDATED WHITE VERSION */}
      {/* ============================================================ */}
      <Overview />

      {/* ============================================================ */}
      {/* RESEARCH TRACKS COMPONENT - NOW USING THE UPDATED WHITE VERSION */}
      {/* ============================================================ */}
      <ResearchTracks />

      {/* ============================================================ */}
      {/* TIMELINE SECTION - UPDATED TO LIGHT THEME */}
      {/* ============================================================ */}
      <section className="bg-gray-50 py-16 px-4 border-t border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
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
              Program <span className="text-[#df7c2e]">Timeline</span>
            </motion.h2>
            
            <motion.p 
              variants={cardVariants}
              className="text-center text-[#0a1628]/60 max-w-2xl mx-auto mb-12"
            >
              Your 16-week journey from orientation to publication
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Phase 1 */}
              <motion.div
                variants={cardVariants}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#df7c2e]/40 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#df7c2e]/20 flex items-center justify-center text-[#df7c2e] font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-semibold text-[#0a1628]">Phase 1: Orientation & Foundation</h3>
                    <p className="text-xs text-[#df7c2e]">Weeks 1-2</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="text-sm text-[#0a1628]/70 flex items-start gap-2">
                    <span className="text-[#df7c2e] text-xs mt-1">▸</span>
                    Program orientation and mentor pairing
                  </li>
                  <li className="text-sm text-[#0a1628]/70 flex items-start gap-2">
                    <span className="text-[#df7c2e] text-xs mt-1">▸</span>
                    Research methodology and ethics training
                  </li>
                  <li className="text-sm text-[#0a1628]/70 flex items-start gap-2">
                    <span className="text-[#df7c2e] text-xs mt-1">▸</span>
                    Literature review and research proposal development
                  </li>
                </ul>
              </motion.div>

              {/* Phase 2 */}
              <motion.div
                variants={cardVariants}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#df7c2e]/40 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#df7c2e]/20 flex items-center justify-center text-[#df7c2e] font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-semibold text-[#0a1628]">Phase 2: Research Execution</h3>
                    <p className="text-xs text-[#df7c2e]">Weeks 3-12</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="text-sm text-[#0a1628]/70 flex items-start gap-2">
                    <span className="text-[#df7c2e] text-xs mt-1">▸</span>
                    Hands-on research with mentor guidance
                  </li>
                  <li className="text-sm text-[#0a1628]/70 flex items-start gap-2">
                    <span className="text-[#df7c2e] text-xs mt-1">▸</span>
                    Data collection, analysis, and experimentation
                  </li>
                  <li className="text-sm text-[#0a1628]/70 flex items-start gap-2">
                    <span className="text-[#df7c2e] text-xs mt-1">▸</span>
                    Weekly mentor pod check-ins
                  </li>
                  <li className="text-sm text-[#0a1628]/70 flex items-start gap-2">
                    <span className="text-[#df7c2e] text-xs mt-1">▸</span>
                    Cohort seminars and peer feedback sessions
                  </li>
                </ul>
              </motion.div>

              {/* Phase 3 */}
              <motion.div
                variants={cardVariants}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#df7c2e]/40 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#df7c2e]/20 flex items-center justify-center text-[#df7c2e] font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-semibold text-[#0a1628]">Phase 3: Publication & Presentation</h3>
                    <p className="text-xs text-[#df7c2e]">Weeks 13-16</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="text-sm text-[#0a1628]/70 flex items-start gap-2">
                    <span className="text-[#df7c2e] text-xs mt-1">▸</span>
                    Research paper writing and revision
                  </li>
                  <li className="text-sm text-[#0a1628]/70 flex items-start gap-2">
                    <span className="text-[#df7c2e] text-xs mt-1">▸</span>
                    Conference abstract and journal submission
                  </li>
                  <li className="text-sm text-[#0a1628]/70 flex items-start gap-2">
                    <span className="text-[#df7c2e] text-xs mt-1">▸</span>
                    Final symposium presentation
                  </li>
                  <li className="text-sm text-[#0a1628]/70 flex items-start gap-2">
                    <span className="text-[#df7c2e] text-xs mt-1">▸</span>
                    Career development and post-fellowship planning
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT FELLOWS RECEIVE COMPONENT - NOW USING THE UPDATED WHITE VERSION */}
      {/* ============================================================ */}
      <WhatFellowsReceive />

      {/* ============================================================ */}
      {/* ELIGIBILITY SECTION - UPDATED TO LIGHT THEME */}
      {/* ============================================================ */}
      <section className="py-16 px-4 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
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
              Candidate <span className="text-[#df7c2e]">Requirements</span>
            </motion.h2>
            
            <motion.p 
              variants={cardVariants}
              className="text-center text-[#0a1628]/60 max-w-2xl mx-auto mb-12"
            >
              Check if you qualify for the fellowship program
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {eligibility.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white rounded-2xl p-4 border border-gray-200 hover:border-[#df7c2e]/40 hover:shadow-md transition-all"
                >
                  <p className="text-xs text-[#df7c2e] font-medium uppercase tracking-wider">{item.label}</p>
                  <p className="text-[#0a1628] font-medium mt-1">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOW TO APPLY SECTION - UPDATED TO LIGHT THEME */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto py-16 px-4">
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
            How to <span className="text-[#df7c2e]">Apply</span>
          </motion.h2>
          
          <motion.p 
            variants={cardVariants}
            className="text-center text-[#0a1628]/60 max-w-2xl mx-auto mb-12"
          >
            Follow these four simple steps to submit your application
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#df7c2e]/20 via-[#df7c2e]/40 to-[#df7c2e]/20 hidden md:block" />
            
            {applicationSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#df7c2e]/10 border-2 border-[#df7c2e]/30 flex items-center justify-center text-2xl font-bold text-[#df7c2e] mx-auto mb-4 relative z-10">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-[#0a1628] mb-2">{step.title}</h3>
                <p className="text-sm text-[#0a1628]/70 max-w-xs mx-auto">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={cardVariants}
            className="text-center mt-10"
          >
            <motion.a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#df7c2e] rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-[#df7c2e]/30 hover:bg-[#c96b24] transition-all inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Application →
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* POST-FELLOWSHIP PATHWAY SECTION - UPDATED TO LIGHT THEME */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-[#0a1628] rounded-3xl p-8 md:p-12 border border-gray-800 shadow-xl"
        >
          <motion.div variants={cardVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">Post-Fellowship <span className="text-[#df7c2e]">Pathway</span></h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Exclusive to program completers — direct support to secure fully funded 
              Master's and Ph.D. positions at top international universities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              {postFellowship.map((item, index) => (
                <div key={index} className="flex items-start gap-2 bg-white/5 rounded-lg p-3 border border-white/5">
                  <span className="text-[#df7c2e] text-lg flex-shrink-0">✦</span>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* COMPARISON TABLE SECTION - UPDATED TO LIGHT THEME */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto py-16 px-4">
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
            Program <span className="text-[#df7c2e]">Comparison</span>
          </motion.h2>
          
          <motion.p 
            variants={cardVariants}
            className="text-center text-[#0a1628]/60 max-w-2xl mx-auto mb-12"
          >
            Choose the fellowship path that fits your goals and availability
          </motion.p>

          <motion.div 
            variants={cardVariants}
            className="overflow-x-auto"
          >
            <table className="w-full bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#0a1628]">Feature</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#df7c2e]">
                    16-Week Intensive <span className="block text-xs font-normal text-[#0a1628]/60">(Flagship)</span>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#df7c2e]">
                    12-Month Training <span className="block text-xs font-normal text-[#0a1628]/60">(Cohort 2025)</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-[#0a1628]/70 font-medium">Duration</td>
                  <td className="px-6 py-4 text-sm text-[#0a1628]">16 weeks (intensive term)</td>
                  <td className="px-6 py-4 text-sm text-[#0a1628]">12 months (full academic cycle)</td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-[#0a1628]/70 font-medium">Weekly Commitment</td>
                  <td className="px-6 py-4 text-sm text-[#0a1628]">15 focused hours/week</td>
                  <td className="px-6 py-4 text-sm text-[#0a1628]">Flexible research schedule</td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-[#0a1628]/70 font-medium">Target Audience</td>
                  <td className="px-6 py-4 text-sm text-[#0a1628]">Final-year undergrads, recent grads, Master's & Ph.D.</td>
                  <td className="px-6 py-4 text-sm text-[#0a1628]">Undergraduate students (Rwanda focus)</td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-[#0a1628]/70 font-medium">Mentorship</td>
                  <td className="px-6 py-4 text-sm text-[#0a1628]">1:1 with global researchers & senior engineers</td>
                  <td className="px-6 py-4 text-sm text-[#0a1628]">1:1 mentorship</td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-[#0a1628]/70 font-medium">Research Tracks</td>
                  <td className="px-6 py-4 text-sm text-[#0a1628]">6 tracks (CS, AI, Data Sci, Civil/Struct, Transpo, Math/Stats)</td>
                  <td className="px-6 py-4 text-sm text-[#0a1628]">6 cutting-edge tracks</td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-[#0a1628]/70 font-medium">Output</td>
                  <td className="px-6 py-4 text-sm text-[#0a1628]">Peer-reviewed publication, conference paper, or open-source repo</td>
                  <td className="px-6 py-4 text-sm text-[#0a1628]">Research training & skills development</td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors bg-[#df7c2e]/5">
                  <td className="px-6 py-4 text-sm text-[#0a1628]/70 font-medium">Post-Fellowship</td>
                  <td className="px-6 py-4 text-sm text-[#df7c2e] font-semibold">Direct support for fully funded Master's/Ph.D. placements</td>
                  <td className="px-6 py-4 text-sm text-[#0a1628]/60">—</td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-[#0a1628]/70 font-medium">Fellows per Cohort</td>
                  <td className="px-6 py-4 text-sm text-[#0a1628]">Rolling applications</td>
                  <td className="px-6 py-4 text-sm text-[#0a1628]">25 Fellows</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.p 
            variants={cardVariants}
            className="text-center text-xs text-[#0a1628]/50 mt-4"
          >
            * The 16-Week Intensive is the flagship program. The 12-Month Training is the first cohort (2025) for undergraduate students in Rwanda.
          </motion.p>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* MENTORSHIP COMPONENT - NOW USING THE UPDATED WHITE VERSION */}
      {/* ============================================================ */}
      <Mentorship />

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
      {/* FINAL CTA SECTION - UPDATED TO LIGHT THEME */}
      {/* ============================================================ */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200 shadow-md"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#0a1628]">
            Ready to <span className="text-[#df7c2e]">Apply</span>?
          </h2>
          <p className="text-[#0a1628]/70 mb-8 max-w-2xl mx-auto">
            Join the Akili Bridge fellowship and start your journey towards becoming a published researcher 
            with mentorship from world-class experts. Choose the program that fits your goals.
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
