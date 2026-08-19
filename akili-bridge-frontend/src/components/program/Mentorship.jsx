import React from "react";
import { motion } from "framer-motion";

export default function Mentorship() {
  const mentorshipFeatures = [
    "1:1 Mentorship",
    "Weekly Check-ins",
    "Career Guidance",
    "Publication Support",
    "Global Network",
    "Research Guidance"
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background decoration - Changed to subtle orange */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#df7c2e] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#df7c2e] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl shadow-gray-200/50 text-center"
        >
          {/* Badge - UPDATED */}
          <motion.span
            className="inline-block px-4 py-1.5 bg-[#df7c2e]/10 text-[#df7c2e] rounded-full text-xs font-medium tracking-wider uppercase mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Mentorship at the Center
          </motion.span>

          {/* Title - UPDATED */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
            Mentorship at the Center
          </h2>

          {/* Description - UPDATED TO EXACT NEW TEXT */}
          <p className="text-[#0a1628]/70 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Every fellow is paired 1:1 with an international research 
            mentor in their track — someone who's done the work you're 
            setting out to do.
          </p>
          <p className="text-[#0a1628]/70 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Pairs meet biweekly to review progress, work through 
            challenges, and refine the research as it develops. The full 
            cohort also comes together monthly, so fellows learn not just 
            from their mentor, but from peers working across every track.
          </p>
          <p className="text-[#0a1628]/70 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            A program coordinator stays involved throughout — a second 
            point of contact for any fellow who needs support beyond their 
            mentor pairing.
          </p>

          {/* Mentor stats - Updated to light gray cards with Dark Navy text */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-6">
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
              <p className="text-2xl font-bold text-[#df7c2e]">1:1</p>
              <p className="text-[10px] text-[#0a1628]/60">Personalized Mentorship</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
              <p className="text-2xl font-bold text-[#df7c2e]">15+</p>
              <p className="text-[10px] text-[#0a1628]/60">Expert Mentors</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
              <p className="text-2xl font-bold text-[#df7c2e]">Weekly</p>
              <p className="text-[10px] text-[#0a1628]/60">Check-ins & Support</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
              <p className="text-2xl font-bold text-[#df7c2e]">Global</p>
              <p className="text-[10px] text-[#0a1628]/60">University Network</p>
            </div>
          </div>

          {/* Features tags - Updated to light gray tags with Dark Navy text */}
          <div className="flex flex-wrap justify-center gap-2">
            {mentorshipFeatures.map((feature, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm text-[#0a1628]/70 border border-gray-200 hover:border-[#df7c2e]/40 hover:text-[#0a1628] transition-all hover:-translate-y-0.5"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                viewport={{ once: true }}
              >
                {feature}
              </motion.span>
            ))}
          </div>

          {/* REMOVED: Trust indicator (MIT, Stanford, etc.) */}
          
        </motion.div>
      </div>
    </section>
  );
}
