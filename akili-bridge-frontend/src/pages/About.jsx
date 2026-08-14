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

  const teamMembers = [
    {
      name: "Dr. Jean Pierre",
      role: "Founder & Director",
      bio: "PhD in STEM Education with 15+ years of experience in African research development.",
      image: "https://ui-avatars.com/api/?name=Jean+Pierre&background=2fb3ff&color=fff&size=128"
    },
    {
      name: "Dr. Grace Uwimana",
      role: "Head of Research",
      bio: "Biotechnology expert with a passion for mentoring the next generation of African scientists.",
      image: "https://ui-avatars.com/api/?name=Grace+Uwimana&background=8a7ff7&color=fff&size=128"
    },
    {
      name: "Prof. David Kagame",
      role: "Academic Advisor",
      bio: "Renowned professor of Engineering with extensive experience in African research institutions.",
      image: "https://ui-avatars.com/api/?name=David+Kagame&background=ff6b9d&color=fff&size=128"
    },
    {
      name: "Sarah Akinyi",
      role: "Program Coordinator",
      bio: "Expert in program management and research administration with 10+ years of experience.",
      image: "https://ui-avatars.com/api/?name=Sarah+Akinyi&background=ffd93d&color=000&size=128"
    }
  ];

  const coreValues = [
    {
      title: "Excellence",
      description: "We strive for the highest standards in research and education.",
    },
    {
      title: "Innovation",
      description: "We foster creative thinking and novel approaches to African challenges.",
    },
    {
      title: "Collaboration",
      description: "We believe in the power of partnerships and collective impact.",
    },
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our work.",
    },
    {
      title: "Impact",
      description: "We are committed to creating measurable change in African communities.",
    },
    {
      title: "Inclusion",
      description: "We ensure equal opportunities for all aspiring researchers.",
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Founded",
      description: "AkiliBridge was founded with a vision to nurture African researchers."
    },
    {
      year: "2024",
      title: "First Cohort",
      description: "Launched the inaugural STEM Fellowship Program with 25 fellows."
    },
    {
      year: "2025",
      title: "Expansion",
      description: "Expanded to 5 partner institutions across East Africa."
    },
    {
      year: "2026",
      title: "Impact",
      description: "100+ fellows trained, 50+ research projects completed."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero Section */}
      <motion.section
        className="relative flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#2fb3ff] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#8a7ff7] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-full text-xs font-medium tracking-wider uppercase mb-4">
            About Us
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-[#a8e6ff] bg-clip-text text-transparent">
            About AkiliBridge
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Building Africa's Next Generation of Researchers
          </p>
        </div>
      </motion.section>

      {/* Mission & Vision Tabs */}
      <motion.section
        className="max-w-4xl mx-auto px-4 -mt-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
          <div className="flex gap-2 mb-6 bg-white/5 rounded-xl p-1">
            {["mission", "vision", "values"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] text-[#0a1628]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
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
                  <h3 className="text-2xl font-bold text-[#2fb3ff] mb-3">Our Mission</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To empower the next generation of African researchers with the skills,
                    mentorship, and opportunities they need to drive innovation and solve
                    Africa's most pressing challenges.
                  </p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <p className="text-sm text-gray-300">100+ Researchers Trained</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <p className="text-sm text-gray-300">8 African Countries</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 text-center">
                      <p className="text-sm text-gray-300">12 Partner Institutions</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "vision" && (
                <div>
                  <h3 className="text-2xl font-bold text-[#8a7ff7] mb-3">Our Vision</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    A thriving African research ecosystem where local talent drives
                    scientific discovery, innovation, and sustainable development across
                    the continent.
                  </p>
                  <div className="mt-4 p-4 bg-gradient-to-r from-[#2fb3ff]/10 to-[#8a7ff7]/10 rounded-xl border border-white/5">
                    <p className="text-[#2fb3ff] font-medium">
                      "Africa's future is built by African researchers."
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "values" && (
                <div>
                  <h3 className="text-2xl font-bold text-[#ffd93d] mb-3">Core Values</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {coreValues.map((value, index) => (
                      <div key={index} className="bg-white/5 rounded-xl p-3">
                        <p className="font-semibold text-white text-sm">{value.title}</p>
                        <p className="text-gray-400 text-xs">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Mission Statement */}
      <motion.section
        className="max-w-4xl mx-auto py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="bg-gradient-to-br from-[#2fb3ff]/10 to-[#8a7ff7]/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 hover:border-[#2fb3ff]/50 transition-all">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            At AkiliBridge, we provide aspiring African researchers with the
            skills, training, and support needed to tackle Africa's most pressing
            challenges. Through our fellowship and training programs, we equip
            undergraduate students with hands-on research experience, mentorship
            from top-tier academics, and the tools to drive innovation in their
            fields.
          </p>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        className="py-16 px-4 bg-[#1a2a4a]/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-full text-xs font-medium tracking-wider uppercase mb-3">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our <span className="text-[#2fb3ff]">Timeline</span></h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#2fb3ff] to-[#8a7ff7] hidden md:block" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`flex flex-col md:flex-row items-center mb-8 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 md:w-1/2">
                  <div className={`p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-[#2fb3ff]/30 transition-all ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-[#2fb3ff]">{item.year}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-[#8a7ff7] font-medium">{item.title}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] relative z-10">
                  <div className="w-3 h-3 rounded-full bg-[#0a1628]"></div>
                </div>

                <div className="flex-1 md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#8a7ff7]/20 text-[#8a7ff7] rounded-full text-xs font-medium tracking-wider uppercase mb-3">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Meet the <span className="text-[#8a7ff7]">Team</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-2">
              Passionate individuals dedicated to nurturing Africa's next generation of researchers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/5 hover:border-[#2fb3ff]/30 transition-all group"
                whileHover={{ y: -5 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-[#2fb3ff]/30 group-hover:border-[#2fb3ff] transition-all"
                />
                <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                <p className="text-[#2fb3ff] text-sm font-medium">{member.role}</p>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="max-w-4xl mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-br from-[#2fb3ff]/10 to-[#8a7ff7]/10 rounded-2xl p-8 md:p-12 text-center border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our <span className="text-[#2fb3ff]">Mission</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            Be part of the movement to build Africa's next generation of researchers and innovators.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] rounded-xl text-[#0a1628] font-semibold hover:shadow-lg hover:shadow-[#2fb3ff]/30 transition-all"
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