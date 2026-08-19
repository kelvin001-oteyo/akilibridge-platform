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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Updated team members with real names from the fellowship context
  const teamMembers = [
    {
      name: "Oteyo Kelvin",
      role: "Senior Research Mentor",
      bio: "AI & Data Science expert with a passion for mentoring African researchers and driving innovation in STEM education.",
      image: "https://ui-avatars.com/api/?name=Oteyo+Kelvin&background=df7c2e&color=fff&size=128"
    },
    {
      name: "Dr. Jean-Pierre Niyigena",
      role: "Research Mentor",
      bio: "Civil & Structural Engineering specialist with extensive experience in African infrastructure development and research.",
      image: "https://ui-avatars.com/api/?name=Jean-Pierre+Niyigena&background=df7c2e&color=fff&size=128"
    },
    {
      name: "Dr. Sarah Mwangi",
      role: "Program Director",
      bio: "Passionate about building research capacity in Africa with 15+ years of experience in STEM education and program leadership.",
      image: "https://ui-avatars.com/api/?name=Sarah+Mwangi&background=df7c2e&color=fff&size=128"
    },
    {
      name: "Dr. Grace Uwimana",
      role: "Head of Research",
      bio: "Biotechnology expert dedicated to mentoring the next generation of African scientists and fostering research excellence.",
      image: "https://ui-avatars.com/api/?name=Grace+Uwimana&background=df7c2e&color=fff&size=128"
    }
  ];

  const coreValues = [
    {
      title: "Excellence",
      description: "We strive for the highest standards in research and education."
    },
    {
      title: "Innovation",
      description: "We foster creative thinking and novel approaches to African challenges."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnerships and collective impact."
    },
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our work."
    },
    {
      title: "Impact",
      description: "We are committed to creating measurable change in African communities."
    },
    {
      title: "Inclusion",
      description: "We ensure equal opportunities for all aspiring researchers."
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Founded",
      description: "Akili Bridge was founded with a vision to nurture African researchers and build research capacity across the continent."
    },
    {
      year: "2024",
      title: "First Cohort",
      description: "Launched the inaugural STEM Fellowship Program with 25 fellows across 6 research tracks."
    },
    {
      year: "2025",
      title: "Expansion",
      description: "Expanded to 8 partner institutions across East Africa with mentors from top global universities."
    },
    {
      year: "2026",
      title: "Impact & Growth",
      description: "100+ fellows trained, 50+ research projects completed, and 25+ publications produced."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#0a1628]">
      {/* Hero Section - UPDATED TO ORANGE/DARK NAVY */}
      <motion.section
        className="relative flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden border-b border-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#df7c2e] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#df7c2e] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        {/* Grid overlay - UPDATED TO LIGHT GRAY */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(rgba(10,22,40,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,22,40,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />

        <div className="relative z-10">
          <motion.span
            className="inline-block px-4 py-1.5 bg-[#df7c2e]/10 text-[#df7c2e] rounded-full text-xs font-medium tracking-wider uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Us
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 text-[#0a1628]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            About Akili Bridge
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-[#0a1628]/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Building Africa's Next Generation of Researchers
          </motion.p>
        </div>
      </motion.section>

      {/* Mission & Vision Tabs - UPDATED TO LIGHT THEME */}
      <motion.section
        className="max-w-4xl mx-auto px-4 -mt-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="bg-white shadow-xl shadow-gray-200/50 rounded-2xl p-6 md:p-8 border border-gray-200">
          <div className="flex gap-2 mb-6 bg-gray-100 rounded-xl p-1">
            {["mission", "vision", "values"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[#df7c2e] text-white shadow-md"
                    : "text-[#0a1628]/60 hover:text-[#0a1628] hover:bg-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-[200px]"
            >
              {activeTab === "mission" && (
                <div>
                  <h3 className="text-2xl font-bold text-[#df7c2e] mb-3">Our Mission</h3>
                  <p className="text-[#0a1628]/70 text-lg leading-relaxed">
                    To empower the next generation of African researchers with the skills,
                    mentorship, and opportunities they need to drive innovation and solve
                    Africa's most pressing challenges through rigorous research and publication.
                  </p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-200">
                      <p className="text-2xl font-bold text-[#df7c2e]">100+</p>
                      <p className="text-sm text-[#0a1628]/60">Researchers Trained</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-200">
                      <p className="text-2xl font-bold text-[#df7c2e]">8</p>
                      <p className="text-sm text-[#0a1628]/60">African Countries</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-200">
                      <p className="text-2xl font-bold text-[#df7c2e]">12</p>
                      <p className="text-sm text-[#0a1628]/60">Partner Institutions</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "vision" && (
                <div>
                  <h3 className="text-2xl font-bold text-[#df7c2e] mb-3">Our Vision</h3>
                  <p className="text-[#0a1628]/70 text-lg leading-relaxed">
                    A thriving African research ecosystem where local talent drives
                    scientific discovery, innovation, and sustainable development across
                    the continent, contributing to global knowledge and solving local challenges.
                  </p>
                  <div className="mt-4 p-4 bg-[#df7c2e]/10 rounded-xl border border-[#df7c2e]/20">
                    <p className="text-[#df7c2e] font-medium text-lg">
                      "Africa's future is built by African researchers."
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "values" && (
                <div>
                  <h3 className="text-2xl font-bold text-[#df7c2e] mb-3">Core Values</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {coreValues.map((value, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-3 border border-gray-200 hover:border-[#df7c2e]/40 transition-all">
                        <p className="font-semibold text-[#0a1628] text-sm">{value.title}</p>
                        <p className="text-[#0a1628]/60 text-xs">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Mission Statement - UPDATED TO LIGHT THEME */}
      <motion.section
        className="max-w-4xl mx-auto py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200 hover:border-[#df7c2e]/40 transition-all shadow-sm">
          <p className="text-lg md:text-xl text-[#0a1628]/70 leading-relaxed">
            At Akili Bridge, we provide aspiring African researchers with the
            skills, training, and support needed to tackle Africa's most pressing
            challenges. Through our fellowship and training programs, we equip
            undergraduate and graduate students with hands-on research experience,
            mentorship from top-tier academics and industry experts, and the tools
            to drive innovation in their fields. Every fellow who completes our
            program becomes a published author, contributing to the global body of
            scientific knowledge while solving local problems.
          </p>
        </div>
      </motion.section>

      {/* Timeline Section - UPDATED TO LIGHT THEME */}
      <motion.section
        className="py-16 px-4 bg-gray-50 border-t border-b border-gray-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-[#df7c2e]/10 text-[#df7c2e] rounded-full text-xs font-medium tracking-wider uppercase mb-3">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">Our <span className="text-[#df7c2e]">Timeline</span></h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#df7c2e] to-[#df7c2e]/50 hidden md:block" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`flex flex-col md:flex-row items-center mb-8 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 md:w-1/2">
                  <div className={`p-4 md:p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#df7c2e]/40 hover:shadow-md transition-all ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-[#df7c2e]">{item.year}</span>
                      <span className="text-sm text-[#0a1628]/50">•</span>
                      <span className="text-sm text-[#df7c2e] font-medium">{item.title}</span>
                    </div>
                    <p className="text-[#0a1628]/70 text-sm">{item.description}</p>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#df7c2e] relative z-10">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>

                <div className="flex-1 md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section - UPDATED TO LIGHT THEME */}
      <motion.section
        className="py-20 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#df7c2e]/10 text-[#df7c2e] rounded-full text-xs font-medium tracking-wider uppercase mb-3">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">Meet the <span className="text-[#df7c2e]">Team</span></h2>
            <p className="text-[#0a1628]/70 max-w-2xl mx-auto mt-2">
              Passionate individuals dedicated to nurturing Africa's next generation of researchers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-[#df7c2e]/40 hover:shadow-lg transition-all group"
                whileHover={{ y: -5 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-200 group-hover:border-[#df7c2e] transition-all"
                />
                <h3 className="text-[#0a1628] font-semibold text-lg">{member.name}</h3>
                <p className="text-[#df7c2e] text-sm font-medium">{member.role}</p>
                <p className="text-[#0a1628]/70 text-sm mt-2 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section - UPDATED TO LIGHT THEME */}
      <motion.section
        className="max-w-4xl mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-[#0a1628] rounded-2xl p-8 md:p-12 text-center border border-gray-800 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our <span className="text-[#df7c2e]">Mission</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            Be part of the movement to build Africa's next generation of researchers and innovators.
          </p>
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
              onClick={() => navigate("/for-mentors")}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              Become a Mentor
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
