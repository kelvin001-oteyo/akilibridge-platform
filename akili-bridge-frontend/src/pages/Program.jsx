import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Program() {
  const navigate = useNavigate();
  const [selectedTrack, setSelectedTrack] = useState(null);
  
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  const tracks = [
    {
      id: 1,
      name: "EdTech & Digital Learning",
      description: "Research on innovative educational technologies and digital learning solutions for African classrooms.",
      color: "#2fb3ff",
      duration: "12 weeks",
      skills: ["EdTech Design", "Digital Pedagogy", "Learning Analytics"],
      projects: ["Digital Learning Platform", "Teacher Training Module"]
    },
    {
      id: 2,
      name: "Energy Storage & Battery Technology",
      description: "Developing sustainable energy storage solutions and battery technologies for off-grid communities.",
      color: "#ffd93d",
      duration: "12 weeks",
      skills: ["Battery Chemistry", "Energy Systems", "Sustainable Design"],
      projects: ["Solar Battery System", "Energy Storage Optimization"]
    },
    {
      id: 3,
      name: "Nanotechnology & Advanced Materials",
      description: "Exploring nanomaterials and advanced materials for applications in medicine, electronics, and manufacturing.",
      color: "#ff6b9d",
      duration: "12 weeks",
      skills: ["Nanomaterials", "Material Characterization", "Lab Techniques"],
      projects: ["Nanoparticle Synthesis", "Material Testing"]
    },
    {
      id: 4,
      name: "Artificial Intelligence & Data Science",
      description: "Building AI solutions and data science applications to address African challenges in healthcare, agriculture, and finance.",
      color: "#8a7ff7",
      duration: "12 weeks",
      skills: ["Machine Learning", "Data Analysis", "Python Programming"],
      projects: ["AI Health Prediction", "Agricultural Data Analysis"]
    },
    {
      id: 5,
      name: "Biotechnology & Health Innovations",
      description: "Advancing biotechnology research for disease prevention, diagnostics, and healthcare delivery in Africa.",
      color: "#4CAF50",
      duration: "12 weeks",
      skills: ["Molecular Biology", "Genetic Analysis", "Lab Research"],
      projects: ["Disease Detection Kit", "Genetic Research Study"]
    },
    {
      id: 6,
      name: "Renewable Energy Systems",
      description: "Designing and optimizing renewable energy systems for sustainable development across the continent.",
      color: "#ff6a00",
      duration: "12 weeks",
      skills: ["Solar Energy", "Wind Energy", "Energy Optimization"],
      projects: ["Solar Panel Efficiency", "Wind Turbine Design"]
    }
  ];

  const benefits = [
    "1:1 mentorship with leading researchers",
    "Hands-on research experience in cutting-edge labs",
    "Career development workshops and training",
    "Publication and conference presentation opportunities",
    "Networking with fellow researchers and industry experts",
    "Research funding and resource support"
  ];

  // Program timeline
  const timeline = [
    {
      phase: "Phase 1: Foundation",
      weeks: "Weeks 1-4",
      activities: [
        "Orientation and program introduction",
        "Research methodology training",
        "Lab safety and protocols",
        "Literature review and research proposal"
      ]
    },
    {
      phase: "Phase 2: Research",
      weeks: "Weeks 5-16",
      activities: [
        "Hands-on research in assigned lab",
        "Data collection and analysis",
        "Weekly mentor meetings",
        "Progress presentations"
      ]
    },
    {
      phase: "Phase 3: Analysis & Writing",
      weeks: "Weeks 17-24",
      activities: [
        "Data analysis and interpretation",
        "Research paper writing",
        "Conference abstract preparation",
        "Final presentation preparation"
      ]
    },
    {
      phase: "Phase 4: Publication & Graduation",
      weeks: "Weeks 25-48",
      activities: [
        "Paper submission to journals",
        "Conference presentations",
        "Career development sessions",
        "Graduation ceremony"
      ]
    }
  ];

  // Eligibility criteria
  const eligibility = [
    { label: "Academic", value: "Current undergraduate student in STEM field" },
    { label: "Country", value: "Rwandan citizen or resident" },
    { label: "Year of Study", value: "2nd, 3rd, or 4th year" },
    { label: "Academic Performance", value: "Minimum GPA of 3.0 on a 4.0 scale" },
    { label: "Research Interest", value: "Demonstrated interest in research" },
    { label: "Language", value: "Proficiency in English" }
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero Section */}
      <motion.section
        className="relative flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background orbs */}
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
            STEM Fellowship Program
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A one-year researcher-in-training fellowship for undergraduate students in Rwanda,
            equipping the next generation of African researchers with skills, mentorship,
            and opportunities in STEM.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5">
              <p className="text-2xl font-bold text-[#2fb3ff]">12</p>
              <p className="text-xs text-gray-400">Months</p>
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

      {/* Research Tracks */}
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
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4"
                  style={{ background: `${track.color}20` }}
                >
                  {track.icon}
                </div>
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

      {/* Program Timeline */}
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
              Your journey from orientation to graduation
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* What Fellows Receive */}
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
              What Fellows <span className="text-[#8a7ff7]">Receive</span>
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
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Eligibility Section */}
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
              Eligibility <span className="text-[#4CAF50]">Criteria</span>
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
              Each fellow is paired with a dedicated mentor — an experienced researcher or industry expert
              who provides guidance, support, and networking opportunities throughout the program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">1:1 Mentorship</span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">Monthly Check-ins</span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">Career Guidance</span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">Research Support</span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10">Networking</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
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
            Join the first cohort of AkiliBridge Fellows and start your journey
            towards becoming a world-class researcher.
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