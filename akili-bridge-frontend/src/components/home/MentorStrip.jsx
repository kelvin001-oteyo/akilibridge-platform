import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MentorStrip() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  // Updated mentors — real names from the fellowship
  const mentors = [
    { 
      name: "Oteyo Kelvin", 
      title: "Senior Research Mentor", 
      image: "https://ui-avatars.com/api/?name=Oteyo+Kelvin&background=df7c2e&color=fff&size=128",
      expertise: ["Artificial Intelligence", "Data Science", "Machine Learning"],
      color: "#df7c2e",
      institution: "AI & Data Science Track"
    },
    { 
      name: "Dr. Jean-Pierre Niyigena", 
      title: "Research Mentor", 
      image: "https://ui-avatars.com/api/?name=Jean-Pierre+Niyigena&background=df7c2e&color=fff&size=128",
      expertise: ["Civil Engineering", "Structural Design", "Infrastructure"],
      color: "#df7c2e",
      institution: "Civil & Structural Engineering Track"
    },
    { 
      name: "Dr. Sarah Mwangi", 
      title: "Program Director", 
      image: "https://ui-avatars.com/api/?name=Sarah+Mwangi&background=df7c2e&color=fff&size=128",
      expertise: ["STEM Education", "Research Leadership", "Program Development"],
      color: "#df7c2e",
      institution: "Program Leadership"
    },
    { 
      name: "Dr. Grace Uwimana", 
      title: "Head of Research", 
      image: "https://ui-avatars.com/api/?name=Grace+Uwimana&background=df7c2e&color=fff&size=128",
      expertise: ["Biotechnology", "Health Research", "Scientific Innovation"],
      color: "#df7c2e",
      institution: "Research Operations"
    },
    { 
      name: "Prof. David Kagame", 
      title: "Academic Advisor", 
      image: "https://ui-avatars.com/api/?name=David+Kagame&background=df7c2e&color=fff&size=128",
      expertise: ["Engineering", "Academic Leadership", "Research Excellence"],
      color: "#df7c2e",
      institution: "Academic Affairs"
    },
    { 
      name: "Dr. Sarah Akinyi", 
      title: "Program Coordinator", 
      image: "https://ui-avatars.com/api/?name=Sarah+Akinyi&background=df7c2e&color=fff&size=128",
      expertise: ["Program Management", "Research Administration", "Student Support"],
      color: "#df7c2e",
      institution: "Program Operations"
    },
  ];

  // Duplicate mentors for infinite scroll effect (enough for smooth loop)
  const extendedMentors = [...mentors, ...mentors, ...mentors];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gray-50 overflow-hidden border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-[#df7c2e]/10 text-[#df7c2e] rounded-full text-xs font-medium tracking-wider uppercase mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            World-Class Mentorship
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-3">
            Meet Our <span className="text-[#df7c2e]">Mentors</span>
          </h2>
          <p className="text-[#0a1628]/70 text-lg max-w-2xl mx-auto">
            Active researchers and senior engineers from top global universities and industry labs guiding our fellows
          </p>
        </motion.div>

        {/* Mentor Count Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
            <span className="text-2xl font-bold text-[#df7c2e]">{mentors.length}+</span>
            <span className="text-sm text-[#0a1628]/60">Expert Mentors Available</span>
          </div>
        </motion.div>

        {/* Infinite Scroll Mentor Strip */}
        <div className="relative overflow-hidden py-4">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{
              x: ["0%", "-33.33%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {extendedMentors.map((mentor, index) => (
              <motion.div
                key={index}
                className="inline-flex flex-col items-center bg-white rounded-2xl p-5 min-w-[200px] border border-gray-200 hover:border-[#df7c2e]/40 hover:shadow-lg transition-all group cursor-default"
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(223, 124, 46, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Image with glow effect */}
                <div className="relative">
                  <div 
                    className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: `radial-gradient(circle, ${mentor.color}40, transparent 70%)`,
                      transform: "scale(1.5)"
                    }}
                  />
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="relative w-20 h-20 rounded-full object-cover border-2 border-gray-200 group-hover:border-[#df7c2e]/50 transition-all duration-300"
                  />
                </div>

                {/* Info */}
                <div className="mt-4 text-center">
                  <p className="text-[#0a1628] font-semibold text-sm group-hover:text-[#df7c2e] transition-colors">
                    {mentor.name}
                  </p>
                  <p className="text-[#0a1628]/60 text-xs mt-0.5">{mentor.title}</p>
                  <p className="text-[#df7c2e] text-[10px] font-medium mt-1">
                    {mentor.institution}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1 mt-2">
                    {mentor.expertise.slice(0, 2).map((exp, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-0.5 bg-gray-100 rounded-full text-[10px] text-[#0a1628]/60"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays for smooth fade - UPDATED TO WHITE/GRAY */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>

        {/* View All & Become a Mentor Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              onClick={() => navigate("/about")}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 rounded-full text-[#0a1628] text-sm font-medium border border-gray-200 hover:border-[#df7c2e]/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Mentors
              <motion.svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.button>

            <motion.a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#df7c2e] rounded-full text-white text-sm font-medium hover:bg-[#c96b24] hover:shadow-lg hover:shadow-[#df7c2e]/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply to Become a Fellow
              <motion.svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
