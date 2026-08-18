import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TrackCard({ track }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#2fb3ff]/50 hover:-translate-y-1 transition-all cursor-pointer group"
      style={{ borderTopColor: track.color, borderTopWidth: "4px" }}
      onClick={toggleExpand}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleExpand();
        }
      }}
      aria-label={`Toggle details for ${track.name}`}
      aria-expanded={isExpanded}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white"
          style={{ background: `${track.color}20`, color: track.color }}
        >
          {track.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white group-hover:text-[#2fb3ff] transition-colors">
            {track.name}
          </h3>
          <span className="text-xs text-gray-500">{track.duration}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">{track.description}</p>

      {/* Expand indicator */}
      <div className="flex justify-end mt-3">
        <span className="text-xs text-gray-500 group-hover:text-[#2fb3ff] transition-colors">
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
            <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
              {/* Skills */}
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">
                  Skills You'll Learn
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {track.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-400 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">
                  Sample Projects
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {track.projects.map((project, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full border"
                      style={{
                        background: `${track.color}15`,
                        color: track.color,
                        borderColor: `${track.color}30`,
                      }}
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>

              {/* Duration badge */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs text-gray-500">Duration:</span>
                <span
                  className="text-xs font-medium px-3 py-0.5 rounded-full"
                  style={{
                    background: `${track.color}20`,
                    color: track.color,
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
