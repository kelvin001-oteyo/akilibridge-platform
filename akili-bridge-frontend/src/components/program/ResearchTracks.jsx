import React from "react";
import { motion } from "framer-motion";

export default function TrackCard({ track }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:border-[#df7c2e]/30 transition-all duration-300 group"
    >
      {/* Color Strip Header */}
      <div 
        className="h-1 w-12 rounded-full mb-4 transition-all duration-300 group-hover:w-16"
        style={{ backgroundColor: track.color || "#df7c2e" }}
      />

      <h3 className="text-xl font-bold text-[#0a1628] mb-2 group-hover:text-[#df7c2e] transition-colors">
        {track.name}
      </h3>
      <p className="text-[#0a1628]/70 text-sm leading-relaxed mb-4">
        {track.description}
      </p>

      <div className="flex items-center gap-2 text-xs text-[#0a1628]/50 mb-4 border-t border-gray-100 pt-3">
        <span className="px-2 py-0.5 bg-gray-100 rounded-full text-[#df7c2e] font-medium">
          {track.duration}
        </span>
      </div>

      <div className="space-y-2">
        <div>
          <p className="text-xs font-semibold text-[#0a1628]/40 uppercase tracking-wider mb-1">
            Skills
          </p>
          <div className="flex flex-wrap gap-1.5">
            {track.skills.map((skill, i) => (
              <span 
                key={i} 
                className="px-2 py-0.5 bg-gray-100 rounded-full text-xs text-[#0a1628]/70"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <p className="text-xs font-semibold text-[#0a1628]/40 uppercase tracking-wider mb-1">
            Sample Projects
          </p>
          <div className="flex flex-wrap gap-1.5">
            {track.projects.map((project, i) => (
              <span 
                key={i} 
                className="px-2 py-0.5 bg-[#df7c2e]/10 rounded-full text-xs text-[#df7c2e] border border-[#df7c2e]/20"
              >
                {project}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
