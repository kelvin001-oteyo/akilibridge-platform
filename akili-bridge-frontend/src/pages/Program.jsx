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
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* ============================================================ */}
      {/* HERO SECTION - "First Cohort 2025" REMOVED */}
      {/* ============================================================ */}
      <motion.section
        className="relative flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden min-h-[90vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#2fb3ff] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#8a7ff7] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2fb3ff]/5 rounded-full filter blur-3xl" />
        </div>
        
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
        
        <div className="relative z-10 max-w-4xl">
          {/* "First Cohort 2025" badge removed */}

          <motion.h1
            className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Akili Bridge STEM <br />Research Fellowship
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-semibold text-[#ffd93d] mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Publish Your Research. Secure Your Future.
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
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
              className="px-8 py-4 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] rounded-xl text-[#0a1628] font-semibold text-lg shadow-lg hover:shadow-[#2fb3ff]/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now →
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('program-info')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
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
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5">
              <p className="text-2xl font-bold text-[#2fb3ff]">16</p>
              <p className="text-xs text-gray-400">Weeks</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5">
              <p className="text-2xl font-bold text-[#8a7ff7]">1:1</p>
              <p className="text-xs text-gray-400">Mentorship</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5">
              <p className="text-2xl font-bold text-[#ffd93d]">6</p>
              <p className="text-xs text-gray-400">Tracks</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5">
              <p className="text-2xl font-bold text-[#4CAF50]">25</p>
              <p className="text-xs text-gray-400">Fellows</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* PARTNER LOGOS SECTION */}
      {/* ============================================================ */}
      <section className="py-12 px-4 border-t border-b border-white/5 bg-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.p 
            variants={cardVariants}
            className="text-center text-gray-500 text-xs uppercase tracking-wider mb-6"
          >
            Our mentors are from leading institutions worldwide
          </motion.p>
          
          <motion.div 
            variants={cardVariants}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60"
          >
            <span className="text-white/30 font-bold text-sm md:text-base hover:text-white/60 transition-colors cursor-default">MIT</span>
            <span className="text-white/30 font-bold text-sm md:text-base hover:text-white/60 transition-colors cursor-default">Stanford</span>
            <span className="text-white/30 font-bold text-sm md:text-base hover:text-white/60 transition-colors cursor-default">Oxford</span>
            <span className="text-white/30 font-bold text-sm md:text-base hover:text-white/60 transition-colors cursor-default">Cambridge</span>
            <span className="text-white/30 font-bold text-sm md:text-base hover:text-white/60 transition-colors cursor-default">ETH Zurich</span>
            <span className="text-white/30 font-bold text-sm md:text-base hover:text-white/60 transition-colors cursor-default">Carnegie Mellon</span>
            <span className="text-white/30 font-bold text-sm md:text-base hover:text-white/60 transition-colors cursor-default">Google Research</span>
            <span className="text-white/30 font-bold text-sm md:text-base hover:text-white/60 transition-colors cursor-default">Microsoft Research</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* OVERVIEW COMPONENT */}
      {/* ============================================================ */}
      <Overview />

      {/* ============================================================ */}
      {/* RESEARCH TRACKS COMPONENT */}
      {/* ============================================================ */}
      <ResearchTracks />

      {/* ============================================================ */}
      {/* TIMELINE SECTION */}
      {/* ============================================================ */}
      <section className="bg-[#1a2a4a]/30 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={cardVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-4"
            >
              Program <span className="text-[#ffd93d]">Timeline</span>
            </motion.h2>
            
            <motion.p 
              variants={cardVariants}
              className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
            >
              Your 16-week journey from orientation to publication
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Phase 1 */}
              <motion.div
                variants={cardVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-[#ffd93d]/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#ffd93d]/20 flex items-center justify-center text-[#ffd93d] font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-semibold text-white">Phase 1: Orientation & Foundation</h3>
                    <p className="text-xs text-[#ffd93d]">Weeks 1-2</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-[#ffd93d] text-xs mt-1">▸</span>
                    Program orientation and mentor pairing
                  </li>
                  <li className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-[#ffd93d] text-xs mt-1">▸</span>
                    Research methodology and ethics training
                  </li>
                  <li className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-[#ffd93d] text-xs mt-1">▸</span>
                    Literature review and research proposal development
                  </li>
                </ul>
              </motion.div>

              {/* Phase 2 */}
              <motion.div
                variants={cardVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-[#ffd93d]/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#ffd93d]/20 flex items-center justify-center text-[#ffd93d] font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-semibold text-white">Phase 2: Research Execution</h3>
                    <p className="text-xs text-[#ffd93d]">Weeks 3-12</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-[#ffd93d] text-xs mt-1">▸</span>
                    Hands-on research with mentor guidance
                  </li>
                  <li className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-[#ffd93d] text-xs mt-1">▸</span>
                    Data collection, analysis, and experimentation
                  </li>
                  <li className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-[#ffd93d] text-xs mt-1">▸</span>
                    Weekly mentor pod check-ins
                  </li>
                  <li className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-[#ffd93d] text-xs mt-1">▸</span>
                    Cohort seminars and peer feedback sessions
                  </li>
                </ul>
              </motion.div>

              {/* Phase 3 */}
              <motion.div
                variants={cardVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-[#ffd93d]/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#ffd93d]/20 flex items-center justify-center text-[#ffd93d] font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-semibold text-white">Phase 3: Publication & Presentation</h3>
                    <p className="text-xs text-[#ffd93d]">Weeks 13-16</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-[#ffd93d] text-xs mt-1">▸</span>
                    Research paper writing and revision
                  </li>
                  <li className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-[#ffd93d] text-xs mt-1">▸</span>
                    Conference abstract and journal submission
                  </li>
                  <li className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-[#ffd93d] text-xs mt-1">▸</span>
                    Final symposium presentation
                  </li>
                  <li className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-[#ffd93d] text-xs mt-1">▸</span>
                    Career development and post-fellowship planning
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT FELLOWS RECEIVE COMPONENT */}
      {/* ============================================================ */}
      <WhatFellowsReceive />

      {/* ============================================================ */}
      {/* ELIGIBILITY SECTION */}
      {/* ============================================================ */}
      <section className="py-16 px-4 bg-[#1a2a4a]/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={cardVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-4"
            >
              Candidate <span className="text-[#4CAF50]">Requirements</span>
            </motion.h2>
            
            <motion.p 
              variants={cardVariants}
              className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
            >
              Check if you qualify for the fellowship program
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {eligibility.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/5 hover:border-[#4CAF50]/30 transition-all"
                >
                  <p className="text-xs text-[#4CAF50] font-medium uppercase tracking-wider">{item.label}</p>
                  <p className="text-white font-medium mt-1">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOW TO APPLY SECTION */}
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
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            How to <span className="text-[#ffd93d]">Apply</span>
          </motion.h2>
          
          <motion.p 
            variants={cardVariants}
            className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Follow these four simple steps to submit your application
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ffd93d]/20 via-[#ffd93d]/40 to-[#ffd93d]/20 hidden md:block" />
            
            {applicationSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ffd93d]/20 to-[#ffd93d]/5 border-2 border-[#ffd93d]/30 flex items-center justify-center text-2xl font-bold text-[#ffd93d] mx-auto mb-4 relative z-10">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 max-w-xs mx-auto">{step.description}</p>
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
              className="px-8 py-4 bg-gradient-to-r from-[#ffd93d] to-[#ff6a00] rounded-xl text-[#0a1628] font-semibold text-lg shadow-lg hover:shadow-[#ffd93d]/30 transition-all inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Application →
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* POST-FELLOWSHIP PATHWAY SECTION */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-gradient-to-br from-[#8a7ff7]/10 to-[#2fb3ff]/10 rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <motion.div variants={cardVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Post-Fellowship <span className="text-[#8a7ff7]">Pathway</span></h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Exclusive to program completers — direct support to secure fully funded 
              Master's and Ph.D. positions at top international universities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              {postFellowship.map((item, index) => (
                <div key={index} className="flex items-start gap-2 bg-white/5 rounded-lg p-3">
                  <span className="text-[#8a7ff7] text-lg flex-shrink-0">✦</span>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* COMPARISON TABLE SECTION */}
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
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Program <span className="text-[#ffd93d]">Comparison</span>
          </motion.h2>
          
          <motion.p 
            variants={cardVariants}
            className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Choose the fellowship path that fits your goals and availability
          </motion.p>

          <motion.div 
            variants={cardVariants}
            className="overflow-x-auto"
          >
            <table className="w-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Feature</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#2fb3ff]">
                    16-Week Intensive <span className="block text-xs font-normal text-gray-400">(Flagship)</span>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#ffd93d]">
                    12-Month Training <span className="block text-xs font-normal text-gray-400">(Cohort 2025)</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-300 font-medium">Duration</td>
                  <td className="px-6 py-4 text-sm text-white">16 weeks (intensive term)</td>
                  <td className="px-6 py-4 text-sm text-white">12 months (full academic cycle)</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-300 font-medium">Weekly Commitment</td>
                  <td className="px-6 py-4 text-sm text-white">15 focused hours/week</td>
                  <td className="px-6 py-4 text-sm text-white">Flexible research schedule</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-300 font-medium">Target Audience</td>
                  <td className="px-6 py-4 text-sm text-white">Final-year undergrads, recent grads, Master's & Ph.D.</td>
                  <td className="px-6 py-4 text-sm text-white">Undergraduate students (Rwanda focus)</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-300 font-medium">Mentorship</td>
                  <td className="px-6 py-4 text-sm text-white">1:1 with global researchers & senior engineers</td>
                  <td className="px-6 py-4 text-sm text-white">1:1 mentorship</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-300 font-medium">Research Tracks</td>
                  <td className="px-6 py-4 text-sm text-white">6 tracks (CS, AI, Data Sci, Civil/Struct, Transpo, Math/Stats)</td>
                  <td className="px-6 py-4 text-sm text-white">6 cutting-edge tracks</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-300 font-medium">Output</td>
                  <td className="px-6 py-4 text-sm text-white">Peer-reviewed publication, conference paper, or open-source repo</td>
                  <td className="px-6 py-4 text-sm text-white">Research training & skills development</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors bg-[#2fb3ff]/5">
                  <td className="px-6 py-4 text-sm text-gray-300 font-medium">Post-Fellowship</td>
                  <td className="px-6 py-4 text-sm text-[#2fb3ff] font-semibold">Direct support for fully funded Master's/Ph.D. placements</td>
                  <td className="px-6 py-4 text-sm text-gray-400">—</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-300 font-medium">Fellows per Cohort</td>
                  <td className="px-6 py-4 text-sm text-white">Rolling applications</td>
                  <td className="px-6 py-4 text-sm text-white">25 Fellows</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.p 
            variants={cardVariants}
            className="text-center text-xs text-gray-500 mt-4"
          >
            * The 16-Week Intensive is the flagship program. The 12-Month Training is the first cohort (2025) for undergraduate students in Rwanda.
          </motion.p>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* MENTORSHIP COMPONENT */}
      {/* ============================================================ */}
      <Mentorship />

      {/* ============================================================ */}
      {/* FAQ SECTION */}
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
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Frequently Asked <span className="text-[#ffd93d]">Questions</span>
          </motion.h2>
          
          <motion.p 
            variants={cardVariants}
            className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Find answers to the most common questions about the fellowship
          </motion.p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 hover:border-[#ffd93d]/20 transition-all overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  aria-expanded={expandedFaq === index}
                >
                  <span className="text-white font-medium">{faq.q}</span>
                  <span className={`text-[#ffd93d] text-xl transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}>
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
                  <div className="px-6 pb-4 pt-1">
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA SECTION */}
      {/* ============================================================ */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to <span className="text-[#2fb3ff]">Apply</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the Akili Bridge fellowship and start your journey towards becoming a published researcher 
            with mentorship from world-class experts. Choose the program that fits your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] rounded-xl text-[#0a1628] font-semibold text-lg shadow-lg hover:shadow-[#2fb3ff]/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now →
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/faq")}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              View FAQs
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
