import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTAButton({ 
  text = "Apply Now", 
  to = "/apply", 
  variant = "primary", 
  className = "",
  onClick,
  icon,
  size = "default"
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(to);
    }
  };

  const variants = {
    primary: "bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] text-[#0a1628] hover:shadow-lg hover:shadow-[#2fb3ff]/30",
    secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/20",
    outline: "bg-transparent border-2 border-[#2fb3ff] text-[#2fb3ff] hover:bg-[#2fb3ff]/10",
    ghost: "bg-transparent text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-xl font-semibold transition-all ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {icon && <span>{icon}</span>}
      {text}
    </motion.button>
  );
}