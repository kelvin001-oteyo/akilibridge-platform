import React from "react";
import { motion } from "framer-motion";
import TrackCard from "./TrackCard";

export default function ResearchTracks() {
  const tracks = [
    {
      id: 1,
      name: "Computer Science",
      description: "Build solutions. Understand systems. Foundational and applied research in algorithms, systems, and software. Fellows can explore theoretical problems, develop new approaches, or work toward practical solutions to real-world challenges.",
      color: "#df7c2e"
    },
    {
      id: 2,
      name: "Artificial Intelligence",
      description: "Research intelligent systems responsibly. Research into machine learning models, intelligent systems, and their applications to real-world challenges, with attention to responsible and meaningful use of AI.",
      color: "#df7c2e"
    },
    {
      id: 3,
      name: "Data Science",
      description: "Turn data into evidence. Research focused on transforming raw data into meaningful insights through analysis, modelling, and interpretation. Fellows develop evidence-based approaches to questions across different fields.",
      color: "#df7c2e"
    },
    {
      id: 4,
      name: "Engineering",
      description: "Research the systems that shape our world. Research involving infrastructure, materials, and the built environment, with particular focus on structural and civil systems and the challenges they address in the real world.",
      color: "#df7c2e"
    },
    {
      id: 5,
      name: "Intelligent Transportation",
      description: "Build better ways to move people and goods. Research at the intersection of transportation systems and emerging technologies, exploring practical approaches to mobility, efficiency, infrastructure, and other real-world transportation challenges.",
      color: "#df7c2e"
    },
    {
      id: 6,
      name: "Applied Mathematics & Statistics",
      description: "Use mathematical thinking to solve real problems. Mathematical and statistical research applied to real-world problems across science, engineering, technology, and society.",
      color: "#df7c2e"
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-2">
            Research Tracks
          </h2>
          <h3 className="text-xl font-medium text-[#df7c2e] mb-4">
            Six Tracks, One Standard of Rigor
          </h3>
          <p className="text-[#0a1628]/70 max-w-2xl mx-auto space-y-2">
            Fellows choose the research track that best matches their interests and the problem they want to explore. Each track provides a focused research environment while maintaining the same standard of rigorous, evidence-based work.
          </p>
          <p className="text-[#0a1628]/70 max-w-2xl mx-auto mt-2">
            Mentorship, peer learning, and program support are tailored to each discipline, giving fellows the guidance they need to develop meaningful research within their chosen field.
          </p>
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
