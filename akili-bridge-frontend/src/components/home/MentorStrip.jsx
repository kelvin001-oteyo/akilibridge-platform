import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MentorStrip() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const mentors = [
    { 
      name: "Dr. Alice Mwangi", 
      title: "AI Research Scientist", 
      image: "https://ui-avatars.com/api/?name=Alice+Mwangi&background=2fb3ff&color=fff&size=128",
      expertise: ["AI", "Machine Learning", "Data Science"],
      color: "#2fb3ff"
    },
    { 
      name: "Prof. David Kagame", 
      title: "Renewable Energy Expert", 
      image: "https://ui-avatars.com/api/?name=David+Kagame&background=8a7ff7&color=fff&size=128",
      expertise: ["Renewable Energy", "Sustainability", "Energy Storage"],
      color: "#8a7ff7"
    },
    { 
      name: "Dr. Grace Uwimana", 
      title: "Biotechnology Lead", 
      image: "https://ui-avatars.com/api/?name=Grace+Uwimana&background=ff6b9d&color=fff&size=128",
      expertise: ["Biotechnology", "Health", "Medical Research"],
      color: "#ff6b9d"
    },
    { 
      name: "Prof. James Oduor", 
      title: "Nanotechnology Expert", 
      image: "https://ui-avatars.com/api/?name=James+Oduor&background=ffd93d&color=000&size=128",
      expertise: ["Nanotechnology", "Materials", "Industrial Research"],
      color: "#ffd93d"
    },
  ];

  // Duplicate mentors for infinite scroll effect
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
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-[#1a2a4a]/30 to-[#0a1628] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-[#8a7ff7]/20 text-[#8a7ff7] rounded-full text-xs font-medium tracking-wider uppercase mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Our Experts
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Meet Our <span className="bg-gradient-to-r from-[#8a7ff7] to-[#2fb3ff] bg-clip-text text-transparent">Mentors</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            World-class researchers and industry experts guiding the next generation of African scientists
          </p>
        </motion.div>

        {/* Infinite Scroll Mentor Strip */}
        <div className="relative overflow-hidden py-4">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{
              x: ["0%", "-33.33%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {extendedMentors.map((mentor, index) => (
              <motion.div
                key={index}
                className="inline-flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 min-w-[180px] border border-white/5 hover:border-[#2fb3ff]/30 transition-all group cursor-pointer"
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(47, 179, 255, 0.15)"
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
                    className="relative w-20 h-20 rounded-full object-cover border-2 border-white/10 group-hover:border-[#2fb3ff]/50 transition-all duration-300"
                  />
                  {/* Verified badge removed */}
                </div>

                {/* Info */}
                <div className="mt-4 text-center">
                  <p className="text-white font-semibold text-sm group-hover:text-[#2fb3ff] transition-colors">
                    {mentor.name}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">{mentor.title}</p>
                  <div className="flex flex-wrap justify-center gap-1 mt-2">
                    {mentor.expertise.slice(0, 2).map((exp, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-0.5 bg-white/5 rounded-full text-[10px] text-gray-400"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a1628] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a1628] to-transparent pointer-events-none" />
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => navigate("/about")}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full text-[#2fb3ff] text-sm font-medium border border-white/10 hover:border-[#2fb3ff]/30 transition-all"
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
        </motion.div>
      </div>
    </section>
  );
}
