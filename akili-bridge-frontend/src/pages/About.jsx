import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function About() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("mission");
  
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0a1628] pt-16 md:pt-24">
      {/* Hero Section - Balanced and Scaled Down */}
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
            You Don't Need a Head Start. <br /><span className="text-[#df7c2e]">You Need a Real Start.</span>
          </motion.h1>

          <motion.p className="text-base md:text-lg text-[#0a1628]/80 max-w-3xl leading-relaxed">
            Akili Bridge welcomes scholars at every stage — with a program 
            built especially for those just getting started in research.
          </motion.p>
        </div>
      </motion.section>

      {/* Our Mission Section - No Label Pill - GAP REDUCED AT THE TOP */}
      <motion.section
        className="pt-6 pb-16 px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="bg-white rounded-2xl p-6 md:p-10 border border-gray-200 shadow-sm hover:border-[#df7c2e]/30 transition-all"
          variants={fadeInUp}
        >
          <h3 className="text-xl font-semibold text-[#df7c2e] mb-2">Our Mission</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Building Africa's Research Future
          </h2>
          <div className="space-y-4 text-[#0a1628]/80 text-lg leading-relaxed">
            <p>
              Africa contributes less than <span className="text-[#df7c2e] font-bold">&lt;1%</span> of global research output 
              despite being home to <span className="text-[#df7c2e] font-bold">17%</span> of the world's population. That gap 
              isn't a talent gap — it's an access gap. Brilliant, curious 
              minds exist everywhere. What's missing, too often, is the 
              mentorship, structure, and first real chance to do research 
              that matters.
            </p>
            <p>
              Akili Bridge closes that gap directly. We pair early-career 
              African scholars with international researchers for 16 weeks 
              of hands-on, 1:1 mentored research — turning curiosity into 
              real work, and real work toward publication.
            </p>
          </div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
              <p className="text-2xl md:text-3xl font-bold text-[#df7c2e]">16</p>
              <p className="text-xs text-[#0a1628]/60">Weeks of Mentored Research</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
              <p className="text-2xl md:text-3xl font-bold text-[#df7c2e]">1:1</p>
              <p className="text-xs text-[#0a1628]/60">Personal Mentorship</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
              <p className="text-2xl md:text-3xl font-bold text-[#df7c2e]">6</p>
              <p className="text-xs text-[#0a1628]/60">Research Tracks</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Our Approach Section - No Pill, No Boxes, All Text Together */}
      <motion.section
        className="py-16 px-4 bg-gray-50 border-t border-b border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-8"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-[#df7c2e] mb-2">Our Approach</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">How We're Different</h2>
          </motion.div>

          <motion.div 
            className="text-center max-w-3xl mx-auto text-[#0a1628]/80 text-lg leading-relaxed"
            variants={fadeInUp}
          >
            <p className="mb-6">
              Most research programs assume you've already done research. We don't.
            </p>
            <p className="mb-6">
              We built Akili Bridge for the scholar who has never written a research proposal, never worked with a mentor, never seen their name on a paper — but has the curiosity and drive to get there. Every part of our program, from application to final publication support, is designed to lower the barrier to entry without lowering the bar for the work itself.
            </p>
            <p>
              You bring the questions. We bring the structure, mentorship, and support to help you answer them rigorously.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Who We Serve Section - No Label Pill, Clean Text */}
      <motion.section
        className="py-16 px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="text-center"
          variants={fadeInUp}
        >
          <h3 className="text-xl font-semibold text-[#df7c2e] mb-2">Who We Serve</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
            Built for Scholars Just Starting Out
          </h2>
        </motion.div>

        <motion.div 
          className="text-center max-w-3xl mx-auto text-[#0a1628]/80 text-lg leading-relaxed"
          variants={fadeInUp}
        >
          <p className="mb-6">
            Akili Bridge is for early-career researchers across East Africa — undergraduates, recent graduates, and Master's or PhD students — who are ready to do research but haven't yet had the chance to start.
          </p>
          <p className="mb-6">
            You don't need prior publications. You don't need to already know how to write a literature review. You need a real question, genuine curiosity, and the commitment to see 16 weeks of work through.
          </p>
          <p>
            Our fellows work across six tracks: Computer Science, Artificial Intelligence, Data Science, Civil & Structural Engineering, Intelligent Transportation, and Applied Mathematics & Statistics.
          </p>
        </motion.div>
      </motion.section>

      {/* Closing Section */}
      <motion.section
        className="py-16 px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-[#0a1628] rounded-2xl p-8 md:p-12 text-center border border-gray-800 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Research shouldn't be a privilege reserved for those who already have access to it. We're here to change who gets to call themselves a researcher.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#df7c2e] rounded-xl text-white font-semibold hover:bg-[#c96b24] hover:shadow-lg hover:shadow-[#df7c2e]/30 transition-all"
            >
              Apply Now
            </a>
            <button
              onClick={() => navigate("/program")}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              Explore the Fellowship
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
