import React from "react";
import { motion } from "framer-motion";

export default function Overview() {
  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#df7c2e] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#df7c2e] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10 text-center"
        >
          {/* NEW TITLE ADDED: Overview */}
          <h3 className="text-sm font-semibold text-[#df7c2e] uppercase tracking-wider mb-2">
            Overview
          </h3>

          {/* Subtitle */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
            How the Program Is Structured
          </h2>

          {/* Description */}
          <div className="text-[#0a1628]/70 text-lg leading-relaxed max-w-3xl mx-auto space-y-4">
            <p>
              Akili Bridge Fellows commit to 16 weeks of intensive, mentored research — fully remote, so location is never a barrier to joining.
            </p>
            <p>
              Each fellow is paired with an international research mentor in their discipline and works independently between structured check-ins. Fellows receive biweekly 1:1 mentorship sessions alongside monthly cohort-wide calls, creating a balance between individual guidance and peer learning.
            </p>
            <p>
              The fellowship follows a gradual progression. The early weeks focus on defining a research question, understanding the research process, and building foundational skills. As the program progresses, fellows move into deeper independent research, analysis, and drafting with continued support from their mentors.
            </p>
            <p>
              By the end of the 16 weeks, fellows are expected to complete a research project ready to move toward publication, present their findings at a closing symposium, and receive an Akili Bridge Fellowship certificate.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
