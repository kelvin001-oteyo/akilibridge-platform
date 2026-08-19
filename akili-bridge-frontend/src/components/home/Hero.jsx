import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section 
      ref={containerRef} 
      className="relative bg-white text-[#0a1628] pt-32 lg:pt-40 pb-20 md:pb-24 px-4 md:px-8 overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* BACKGROUND IMAGE WRAPPER */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 w-full">
        
        {/* EXACT HEADLINE FROM SIMBA */}
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeInUp} className="space-y-1">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0a1628]">
            Empowering African Scholars <br />
            <span className="text-[#df7c2e]">Through Research</span>
          </h2>
        </motion.div>

        {/* EXACT DESCRIPTION FROM SIMBA */}
        <motion.p custom={1} initial="hidden" animate="visible" variants={fadeInUp} className="text-base md:text-lg text-[#0a1628]/80 max-w-3xl leading-relaxed">
          We equip early-career researchers across East Africa with mentorship, training, and real-world research experience — starting with our flagship STEM Research Fellowship.
        </motion.p>

        {/* EXACT BUTTONS FROM SIMBA */}
        <motion.div 
          custom={2} initial="hidden" animate="visible" variants={fadeInUp}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-2"
        >
          <motion.button
            onClick={() => navigate("/program")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#df7c2e] text-white font-semibold text-sm md:text-base py-3 px-6 md:py-3 md:px-8 rounded-lg shadow-md hover:bg-[#c96b24] transition-colors flex items-center justify-center gap-2"
          >
            Explore the Fellowship 
            <span className="text-lg">→</span>
          </motion.button>
          <motion.button
            onClick={() => navigate("/about")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#0a1628] font-semibold text-sm md:text-base py-3 px-6 md:py-3 md:px-8 rounded-lg border-2 border-[#0a1628] hover:bg-gray-50 transition-colors"
          >
            About Akili Bridge
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
