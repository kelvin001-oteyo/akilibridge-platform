import React from "react";
import { motion } from "framer-motion";

export default function Mentorship() {
  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      {/* Background decoration - Subtle orange orbs */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#df7c2e] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#df7c2e] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10 text-center"
        >
          {/* TITLE RESTORED - Clean and bold */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
            Mentorship
          </h2>

          {/* Subtitle */}
          <h3 className="text-2xl md:text-3xl font-semibold text-[#df7c2e] mb-4">
            Mentorship at the Center
          </h3>

          {/* Description */}
          <div className="text-[#0a1628]/70 text-lg leading-relaxed max-w-2xl mx-auto space-y-4">
            <p>
              Every fellow is paired 1:1 with an international research mentor in their track — someone who's done the work you're setting out to do.
            </p>
            <p>
              Pairs meet biweekly to review progress, work through challenges, and refine the research as it develops. The full cohort also comes together monthly, so fellows learn not just from their mentor, but from peers working across every track.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
