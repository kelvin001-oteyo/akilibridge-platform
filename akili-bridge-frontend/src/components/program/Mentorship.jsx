import React from "react";
import { motion } from "framer-motion";

export default function Mentorship() {
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
            Mentorship
          </motion.span>

          {/* Title - UPDATED */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
            Mentorship at the Center
          </h2>

          {/* Description - UPDATED TO EXACT NEW TEXT */}
          <div className="text-[#0a1628]/70 text-lg leading-relaxed max-w-2xl mx-auto space-y-4">
            <p>
              Every fellow is paired 1:1 with an international research mentor in their track — someone who's done the work you're setting out to do.
            </p>
            <p>
              Pairs meet biweekly to review progress, work through challenges, and refine the research as it develops. The full cohort also comes together monthly, so fellows learn not just from their mentor, but from peers working across every track.
            </p>
            <p>
              A program coordinator stays involved throughout — a second point of contact for any fellow who needs support beyond their mentor pairing.
            </p>
          </div>

          {/* REMOVED: Stats grid */}
          {/* REMOVED: Features tags */}

        </motion.div>
      </div>
    </section>
  );
}
