import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TrackCard({ track }) {
  // SAFETY CHECK 1: If track data hasn't loaded yet, render nothing (stops the crash)
  if (!track) {
    return null;
  }

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // SAFETY CHECK 2: Safe optional chaining for the color
  const themeColor = track?.color || "#df7c2e";

  // SAFETY CHECK 3: Ensure name exists before using charAt(0)
  const initial = track.name ? track.name.charAt(0) : "?";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#df7c2e]/50 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
      style={{ borderTopColor: themeColor, borderTopWidth: "4px" }}
      onClick={toggleExpand}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleExpand();
        }
      }}
      aria-label={`Toggle details for ${track.name || "Track"}`}
      aria-expanded={isExpanded}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold"
          style={{ 
            background: `${themeColor}15`, // Very light version of the color
            color: themeColor 
          }}
        >
          {initial}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#0a1628] group-hover:text-[#df7c2e] transition-colors">
            {track.name}
          </h3>
          <span className="text-xs text-[#0a1628]/50">{track.duration}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#0a1628]/70 text-sm leading-relaxed">{track.description}</p>

      {/* Expand indicator */}
      <div className="flex justify-end mt-3">
        <span className="text-xs text-[#0a1628]/50 group-hover:text-[#df7c2e] transition-colors">
          {isExpanded ? "Show less ▲" : "Show more ▼"}
        </span>
      </div>

      {/* Expandable content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
              {/* Skills */}
              <div>
                <p className="text-xs text-[#0a1628]/50 font-medium uppercase tracking-wider mb-2">
                  Skills You'll Learn
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {track.skills && track.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 px-3 py-1 rounded-full text-[#0a1628]/70 border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <p className="text-xs text-[#0a1628]/50 font-medium uppercase tracking-wider mb-2">
                  Sample Projects
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {track.projects && track.projects.map((project, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full border"
                      style={{
                        background: `${themeColor}15`,
                        color: themeColor,
                        borderColor: `${themeColor}30`,
                      }}
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>

              {/* Duration badge */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs text-[#0a1628]/50">Duration:</span>
                <span
                  className="text-xs font-medium px-3 py-0.5 rounded-full"
                  style={{
                    background: `${themeColor}20`,
                    color: themeColor,
                  }}
                >
                  {track.duration}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
