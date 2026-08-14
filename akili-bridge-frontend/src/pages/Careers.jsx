import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Careers() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");

  // Animation variants
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

  // Job categories
  const categories = [
    { id: "all", label: "All Positions" },
    { id: "fellowship", label: "Fellowship" },
    { id: "mentorship", label: "Mentorship" },
    { id: "administration", label: "Administration" },
    { id: "communications", label: "Communications" }
  ];

  // Job opportunities with more details
  const opportunities = [
    {
      id: 1,
      title: "Program Coordinator – STEM Fellowship",
      type: "Full-time",
      category: "fellowship",
      location: "Kigali, Rwanda (Hybrid)",
      description: "Coordinate the STEM Fellowship Program, manage fellow activities, and ensure program success.",
      requirements: [
        "Bachelor's degree in STEM or related field",
        "2+ years of program coordination experience",
        "Experience working with students or young professionals",
        "Excellent organizational and communication skills"
      ],
      postedDate: "2026-08-10",
      deadline: "2026-09-10"
    },
    {
      id: 2,
      title: "Research Mentor – Labs Division",
      type: "Part-time",
      category: "mentorship",
      location: "Remote (East Africa)",
      description: "Guide and mentor undergraduate researchers in cutting-edge STEM research projects.",
      requirements: [
        "Master's or PhD in a STEM field",
        "3+ years of research experience",
        "Experience mentoring early-career researchers",
        "Strong publication record"
      ],
      postedDate: "2026-08-08",
      deadline: "2026-09-08"
    },
    {
      id: 3,
      title: "Communications & Outreach Officer",
      type: "Full-time",
      category: "communications",
      location: "Kigali, Rwanda",
      description: "Manage AkiliBridge communications, social media, and outreach activities to promote the program.",
      requirements: [
        "Bachelor's degree in Communications or related",
        "3+ years of communications experience",
        "Strong writing and social media skills",
        "Experience in the education or non-profit sector"
      ],
      postedDate: "2026-08-05",
      deadline: "2026-09-05"
    },
    {
      id: 4,
      title: "Fellowship Administrator",
      type: "Full-time",
      category: "administration",
      location: "Kigali, Rwanda",
      description: "Support the administration of the fellowship program, including applications and fellow onboarding.",
      requirements: [
        "Bachelor's degree in Administration or related",
        "2+ years of administrative experience",
        "Experience with database management",
        "Strong attention to detail"
      ],
      postedDate: "2026-08-12",
      deadline: "2026-09-12"
    },
    {
      id: 5,
      title: "STEM Education Specialist",
      type: "Contract",
      category: "fellowship",
      location: "Remote",
      description: "Develop and deliver STEM training materials and workshops for fellowship participants.",
      requirements: [
        "Master's degree in STEM Education or related",
        "5+ years of teaching or training experience",
        "Experience developing curriculum",
        "Knowledge of African education systems"
      ],
      postedDate: "2026-08-07",
      deadline: "2026-09-07"
    }
  ];

  // Benefits data
  const benefits = [
    {
      title: "Professional Development",
      description: "Continuous learning and growth opportunities",
      icon: "📈"
    },
    {
      title: "Flexible Work",
      description: "Hybrid and remote work options available",
      icon: "🏠"
    },
    {
      title: "Impactful Work",
      description: "Directly contribute to Africa's research future",
      icon: "🌍"
    },
    {
      title: "Collaborative Culture",
      description: "Work with passionate, like-minded colleagues",
      icon: "🤝"
    },
    {
      title: "Competitive Compensation",
      description: "Fair and competitive salary packages",
      icon: "💰"
    },
    {
      title: "Networking Opportunities",
      description: "Connect with leading researchers and institutions",
      icon: "🌐"
    }
  ];

  // Filter opportunities
  const filteredOpportunities = activeFilter === "all"
    ? opportunities
    : opportunities.filter(opp => opp.category === activeFilter);

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
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#2fb3ff] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#8a7ff7] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10">
          <motion.span
            className="inline-block px-4 py-1.5 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-full text-xs font-medium tracking-wider uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join Our Team
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-[#a8e6ff] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Careers at AkiliBridge
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Join us in building Africa's next generation of researchers and innovators.
          </motion.p>
        </div>
      </motion.section>

      {/* Why Work With Us */}
      <motion.section
        className="max-w-4xl mx-auto px-4 -mt-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 hover:border-[#2fb3ff]/50 transition-all">
          <h2 className="text-3xl font-bold mb-4 text-[#2fb3ff] flex items-center gap-3">
            <span>Why Work With Us?</span>
            <span className="text-2xl">💼</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            At AkiliBridge, we believe in nurturing talent, fostering innovation,
            and creating opportunities for growth. Our team is dedicated to
            empowering African scholars through mentorship, training, and impactful
            research programs.
          </p>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-[#8a7ff7]/20 text-[#8a7ff7] rounded-full text-xs font-medium tracking-wider uppercase mb-3">
              Benefits
            </span>
            <h2 className="text-3xl font-bold text-white">Why Join <span className="text-[#2fb3ff]">AkiliBridge</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-2">
              We offer a supportive environment where you can grow professionally and make a difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-[#2fb3ff]/30 transition-all group"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Current Opportunities */}
      <motion.section
        className="py-16 px-4 bg-[#1a2a4a]/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-[#ffd93d]/20 text-[#ffd93d] rounded-full text-xs font-medium tracking-wider uppercase mb-3">
              Open Positions
            </span>
            <h2 className="text-3xl font-bold text-white">Current <span className="text-[#ffd93d]">Opportunities</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-2">
              Find your role and join our mission to transform African research
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat.id
                    ? "bg-[#2fb3ff] text-[#0a1628]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredOpportunities.length > 0 ? (
              filteredOpportunities.map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-[#2fb3ff]/30 transition-all group"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-[#2fb3ff] transition-colors">
                          {job.title}
                        </h3>
                        <span className="px-2 py-0.5 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-full text-xs font-medium">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <span>📍</span> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <span>📅</span> Posted: {new Date(job.postedDate).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <span>⏰</span> Deadline: {new Date(job.deadline).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="mt-3">
                        <p className="text-xs text-gray-500 font-medium mb-1">Requirements:</p>
                        <ul className="flex flex-wrap gap-1">
                          {job.requirements.slice(0, 3).map((req, i) => (
                            <li key={i} className="text-xs text-gray-400 bg-white/5 px-2 py-0.5 rounded-full">
                              {req}
                            </li>
                          ))}
                          {job.requirements.length > 3 && (
                            <li className="text-xs text-gray-500">+{job.requirements.length - 3} more</li>
                          )}
                        </ul>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => navigate("/careers/application")}
                        className="px-6 py-2 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] rounded-xl text-[#0a1628] font-semibold text-sm hover:shadow-lg hover:shadow-[#2fb3ff]/30 transition-all whitespace-nowrap"
                      >
                        Apply Now →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No positions available in this category</p>
                <button
                  onClick={() => setActiveFilter("all")}
                  className="mt-4 px-4 py-2 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-lg hover:bg-[#2fb3ff]/30 transition-colors"
                >
                  View all positions
                </button>
              </div>
            )}
          </div>

          <motion.p variants={fadeInUp} className="text-center text-gray-400 mt-6 text-sm">
            More roles will be announced soon. Stay tuned for updates.
          </motion.p>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="max-w-4xl mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-br from-[#2fb3ff]/10 to-[#8a7ff7]/10 rounded-2xl p-8 md:p-12 text-center border border-white/10">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Make a <span className="text-[#2fb3ff]">Difference</span>?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join our team and help build Africa's next generation of researchers and innovators.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] rounded-xl text-[#0a1628] font-semibold text-lg shadow-lg hover:shadow-[#2fb3ff]/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/careers/application")}
            >
              Apply Now →
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/for-mentors")}
            >
              Become a Mentor
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}