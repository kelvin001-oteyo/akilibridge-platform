import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  subtitle,
  highlight,
  align = "center",
  className = "",
}) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-10 ${alignClass} ${className}`}
    >
      {highlight && (
        <span className="inline-block px-3 py-1 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-full text-xs font-medium mb-3">
          {highlight}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        {title}
        {subtitle && (
          <span className="text-[#2fb3ff]"> {subtitle}</span>
        )}
      </h2>
    </motion.div>
  );
}