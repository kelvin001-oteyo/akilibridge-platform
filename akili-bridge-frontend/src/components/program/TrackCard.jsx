import React from "react";
import { motion } from "framer-motion";

export default function TrackCard({ track }) {
  // SAFETY CHECK 1: If track is missing, don't render anything (Stops the crash)
  if (!track || typeof track !== 'object') {
    return null;
  }

  // SAFETY CHECK 2: Safely handle missing color
  const themeColor = track.color || "#df7c2e";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:border-[#df7c2e]/30 transition-all duration-300 group"
    >
      {/* Color Strip Header */}
      <div 
        className="h-1 w-12 rounded-full mb-4 transition-all duration-300 group-hover:w-16"
        style={{ backgroundColor: themeColor }}
      />

      {/* Track Name */}
      <h3 className="text-xl font-bold text-[#0a1628] mb-2 group-hover:text-[#df7c2e] transition-colors">
        {track.name || "Research Track"}
      </h3>

      {/* Track Description */}
      <p className="text-[#0a1628]/70 text-sm leading-relaxed mb-4">
        {track.description || "No description available."}
      </p>

      {/* Duration Badge */}
      <div className="flex items-center gap-2 text-xs text-[#0a1628]/50 mb-4 border-t border-gray-100 pt-3">
        <span className="px-2 py-0.5 bg-gray-100 rounded-full text-[#df7c2e] font-medium">
          {track.duration || "N/A"}
        </span>
      </div>

      {/* Skills Section */}
      <div className="space-y-2">
        <div>
          <p className="text-xs font-semibold text-[#0a1628]/40 uppercase tracking-wider mb-1">
            Skills
          </p>
          <div className="flex flex-wrap gap-1.5">
            {/* SAFETY CHECK: Ensure skills is an array before mapping */}
            {Array.isArray(track.skills) && track.skills.map((skill, i) => (
              <span 
                key={i} 
                className="px-2 py-0.5 bg-gray-100 rounded-full text-xs text-[#0a1628]/70"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
