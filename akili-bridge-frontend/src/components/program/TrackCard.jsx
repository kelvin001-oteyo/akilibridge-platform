import React from "react";
import { motion } from "framer-motion";

export default function TrackCard({ track }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#2fb3ff]/50 hover:-translate-y-1 transition-all"
      style={{ borderTopColor: track.color, borderTopWidth: "4px" }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ background: `${track.color}20` }}
        >
          {track.icon}
        </div>
        <h3 className="text-lg font-semibold text-white" style={{ color: track.color }}>
          {track.name}
        </h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{track.description}</p>
    </motion.div>
  );
}