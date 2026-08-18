import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Program() {
  const navigate = useNavigate();
  const [selectedTrack, setSelectedTrack] = useState(null);
  
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  // Updated tracks from the Call for Applications
  const tracks = [
    {
      id: 1,
      name: "Computer Science",
      description: "Research on computing systems, algorithms, and software development for African solutions.",
      color: "#2fb3ff",
      duration: "16 weeks",
      skills: ["Algorithms", "Software Dev", "System Design"],
      projects: ["Open-source Contribution", "Computing Infrastructure"]
    },
    {
      id: 2,
      name: "Artificial Intelligence",
      description: "Building AI solutions for African challenges in healthcare, agriculture, and finance.",
      color: "#8a7ff7",
      duration: "16 weeks",
      skills: ["Machine Learning", "Python", "Neural Networks"],
      projects: ["AI Health Prediction", "Agricultural AI Model"]
    },
    {
      id: 3,
      name: "Data Science",
      description: "Leveraging data analytics and visualization to drive informed decision-making across sectors.",
      color: "#ffd93d",
      duration: "16 weeks",
      skills: ["Data Analysis", "Visualization", "Statistical Modeling"],
      projects: ["Data Pipeline", "Analytics Dashboard"]
    },
    {
      id: 4,
      name: "Civil & Structural Engineering",
      description: "Innovative solutions for infrastructure development and structural resilience in Africa.",
      color: "#ff6a00",
      duration: "16 weeks",
      skills: ["Structural Analysis", "Materials", "CAD Design"],
      projects: ["Infrastructure Assessment", "Resilience Design"]
    },
    {
      id: 5,
      name: "Intelligent Transportation",
      description: "Research on smart mobility systems and transportation optimization for African cities.",
      color: "#4CAF50",
      duration: "16 weeks",
      skills: ["Transport Modeling", "IoT", "Traffic Analytics"],
      projects: ["Smart Traffic System", "Mobility Optimization"]
    },
    {
      id: 6,
      name: "Applied Mathematics & Statistics",
      description: "Mathematical modeling and statistical analysis for real-world problem-solving.",
      color: "#ff6b9d",
      duration: "16 weeks",
      skills: ["Mathematical Modeling", "Statistics", "Optimization"],
      projects: ["Predictive Model", "Statistical Analysis"]
    }
  ];

  // Updated benefits from the Call for Applications
  const benefits = [
    "Become a published author on a peer-reviewed paper or conference paper",
    "1:1 mentorship with active researchers at top global universities",
    "Detailed, output-backed letter of recommendation from your mentor",
    "Akili Bridge Fellowship Certificate for completing the 16-week term",
    "Direct support for fully funded Master's and Ph.D. positions",
    "Networking with international researchers and senior engineers"
  ];

  // Updated timeline (16-week intensive)
  const timeline = [
    {
      phase: "Phase 1: Orientation & Foundation",
      weeks: "Weeks 1-2",
      activities: [
        "Program orientation and mentor pairing",
        "Research methodology and ethics training",
        "Literature review and research proposal development"
      ]
    },
    {
      phase: "Phase 2: Research Execution",
      weeks: "Weeks 3-12",
      activities: [
        "Hands-on research with mentor guidance",
        "Data collection, analysis, and experimentation",
        "Weekly mentor pod check-ins",
        "Cohort seminars and peer feedback sessions"
      ]
    },
    {
      phase: "Phase 3: Publication & Presentation",
      weeks: "Weeks 13-16",
      activities: [
        "Research paper writing and revision",
        "Conference abstract and journal submission",
        "Final symposium presentation",
        "Career development and post-fellowship planning"
      ]
    }
  ];

  // Updated eligibility from the Call for Applications
  const eligibility = [
    { label: "Academic Level", value: "Final-year undergrad, recent grad, Master's, or Ph.D. student" },
    { label: "Location", value: "Residing and studying in East Africa" },
    { label: "Commitment", value: "15 focused hours per week for 16 weeks" },
    { label: "Career Goal", value: "Willing to pursue research or graduate studies" },
    { label: "Language", value: "Proficiency in English" }
  ];

  // Post-fellowship benefits
  const postFellowship = [
    "Direct support to secure fully funded Master's and Ph.D. positions",
    "Full tuition coverage, monthly stipends, and research funding",
    "Connection with hiring professors at top international universities",
    "Targeted guidance for competitive global scholarship programs"
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
      {/* Hero Section - UPDATED */}
      <motion.section
        className="relative flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#2fb3ff] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#8a7ff7] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <motion.span
            className="inline-block px-4 py-2 bg-[#2fb3ff]/20 rounded-full text-sm mb-4 border border-[#2fb3ff]/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            First Cohort 2025
          </motion.span>
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Akili Bridge STEM Research Fellowship
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Pairing top African scholars with practicing international researchers and engineers 
            for 16 weeks of real-world research, mentorship, and publication.
          </motion.p>

          {/* Quick Stats - UPDATED */}
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

      {/* Research Tracks - UPDATED */}
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
            Research <span className="text-[#2fb3ff]">Tracks</span>
          </motion.h2>
          
          <motion.p 
            variants={cardVariants}
            className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Choose from six cutting-edge research tracks designed to address Africa's most pressing challenges
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <motion.div
                key={track.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#2fb3ff]/50 transition-all group cursor-pointer"
                style={{ borderTopColor: track.color, borderTopWidth: "4px" }}
                onClick={() => setSelectedTrack(selectedTrack === track.id ? null : track.id)}
              >
                <h3 
                  className="text-xl font-semibold mb-2 group-hover:text-[#2fb3ff] transition-colors"
                  style={{ color: track.color }}
                >
                  {track.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {track.description}
                </p>
                
                {/* Expandable details */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: selectedTrack === track.id ? "auto" : 0,
                    opacity: selectedTrack === track.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                    <p className="text-xs text-gray-500">
                      <span className="text-[#2fb3ff]">Duration:</span> {track.duration}
                    </p>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Skills you'll learn:</p>
                      <div className="flex flex-wrap gap-1">
                        {track.skills.map((skill, i) => (
                          <span key={i} className="text-xs bg-white/5 px-2 py-0.5 rounded-full text-gray-400">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Sample projects:</p>
                      <div className="flex flex-wrap gap-1">
                        {track.projects.map((project, i) => (
                          <span key={i} className="text-xs bg-[#2fb3ff]/10 px-2 py-0.5 rounded-full text-[#2fb3ff]">
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Program Timeline - UPDATED (16 weeks) */}
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
              {timeline.map((phase, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-[#ffd93d]/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#ffd93d]/20 flex items-center justify-center text-[#ffd93d] font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{phase.phase}</h3>
                      <p className="text-xs text-[#ffd93d]">{phase.weeks}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-[#ffd93d] text-xs mt-1">▸</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Fellows Receive - UPDATED */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
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
              What You <span className="text-[#8a7ff7]">Leave With</span>
            </motion.h2>
            
            <motion.p 
              variants={cardVariants}
              className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
            >
              Our comprehensive fellowship program provides everything you need to succeed
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/5 hover:border-[#2fb3ff]/30 transition-all"
                >
                  <span className="text-[#2fb3ff] text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Eligibility Section - UPDATED */}
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

      {/* Post-Fellowship Pathway - NEW SECTION */}
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

      {/* ✅ NEW: VISUAL COMPARISON TABLE - Inserted before CTA */}
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
                    🚀 16-Week Intensive <span className="block text-xs font-normal text-gray-400">(Flagship)</span>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#ffd93d]">
                    📚 12-Month Training <span className="block text-xs font-normal text-gray-400">(Cohort 2025)</span>
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
                  <td className="px-6 py-4 text-sm text-white">Peer-reviewed publication, conference paper, or open‑source repo</td>
                  <td className="px-6 py-4 text-sm text-white">Research training & skills development</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors bg-[#2fb3ff]/5">
                  <td className="px-6 py-4 text-sm text-gray-300 font-medium">Post‑Fellowship</td>
                  <td className="px-6 py-4 text-sm text-[#2fb3ff] font-semibold">✅ Direct support for fully funded Master's/Ph.D. placements</td>
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

      {/* Mentorship Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-gradient-to-br from-[#2fb3ff]/10 to-[#8a7ff7]/10 rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <motion.div variants={cardVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">World-Class Mentorship</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Each fellow is paired with a dedicated mentor — an active researcher or senior engineer
              at top global universities and industry labs who provides guidance, support, 
              and networking opportunities throughout the program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">1:1 Mentorship</span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">Weekly Check-ins</span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">Career Guidance</span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">Publication Support</span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">Global Network</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section - Updated with Comparison Reference */}
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
