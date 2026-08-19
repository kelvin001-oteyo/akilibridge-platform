import React from "react";
import { motion } from "framer-motion";
import TrackCard from "./TrackCard";

export default function ResearchTracks() {
  const tracks = [
    {
      id: 1,
      name: "Computer Science",
      description: "Research on computing systems, algorithms, and software development for African solutions.",
      color: "#df7c2e", // <--- FALLBACK ADDED
      duration: "16 weeks",
      skills: ["Algorithms", "Software Dev", "System Design"],
      projects: ["Open-source Contribution", "Computing Infrastructure"]
    },
    {
      id: 2,
      name: "Artificial Intelligence",
      description: "Building AI solutions for African challenges in healthcare, agriculture, and finance.",
      color: "#df7c2e", // <--- FALLBACK ADDED
      duration: "16 weeks",
      skills: ["Machine Learning", "Python", "Neural Networks"],
      projects: ["AI Health Prediction", "Agricultural AI Model"]
    },
    {
      id: 3,
      name: "Data Science",
      description: "Leveraging data analytics and visualization to drive informed decision-making across sectors.",
      color: "#df7c2e", // <--- FALLBACK ADDED
      duration: "16 weeks",
      skills: ["Data Analysis", "Visualization", "Statistical Modeling"],
      projects: ["Data Pipeline", "Analytics Dashboard"]
    },
    {
      id: 4,
      name: "Civil & Structural Engineering",
      description: "Innovative solutions for infrastructure development and structural resilience in Africa.",
      color: "#df7c2e", // <--- FALLBACK ADDED
      duration: "16 weeks",
      skills: ["Structural Analysis", "Materials", "CAD Design"],
      projects: ["Infrastructure Assessment", "Resilience Design"]
    },
    {
      id: 5,
      name: "Intelligent Transportation",
      description: "Research on smart mobility systems and transportation optimization for African cities.",
      color: "#df7c2e", // <--- FALLBACK ADDED
      duration: "16 weeks",
      skills: ["Transport Modeling", "IoT", "Traffic Analytics"],
      projects: ["Smart Traffic System", "Mobility Optimization"]
    },
    {
      id: 6,
      name: "Applied Mathematics & Statistics",
      description: "Mathematical modeling and statistical analysis for real-world problem-solving.",
      color: "#df7c2e", // <--- FALLBACK ADDED
      duration: "16 weeks",
      skills: ["Mathematical Modeling", "Statistics", "Optimization"],
      projects: ["Predictive Model", "Statistical Analysis"]
    }
  ];

  // Animation variants
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

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background decoration - Subtle Orange */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#df7c2e] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#df7c2e] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Badge - UPDATED */}
          <motion.span
            className="inline-block px-4 py-1.5 bg-[#df7c2e]/10 text-[#df7c2e] rounded-full text-xs font-medium tracking-wider uppercase mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Six Tracks, One Standard of Rigor
          </motion.span>

          {/* Title - UPDATED */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-2">
            Six Tracks, One Standard of Rigor
          </h2>

          {/* Subtitle - UPDATED */}
          <p className="text-[#0a1628]/70 max-w-2xl mx-auto">
            Fellows choose the track that matches their research interest. 
            Mentorship, cohort peers, and program structure are tailored 
            to each discipline.
          </p>

          {/* Track count indicator - Light theme */}
          <motion.div
            className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 bg-gray-100 rounded-full border border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-2xl font-bold text-[#df7c2e]">6</span>
            <span className="text-sm text-[#0a1628]/60">Tracks Available</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
