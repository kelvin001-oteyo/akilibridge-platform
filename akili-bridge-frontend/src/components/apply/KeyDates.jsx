import React from "react";
import { motion } from "framer-motion";

export default function KeyDates() {
  const dates = [
    { event: "Application Opens", date: "January 15, 2025", status: "Open" },
    { event: "Application Deadline", date: "March 15, 2025", status: "Upcoming" },
    { event: "Interviews", date: "April 1-15, 2025", status: "Upcoming" },
    { event: "Program Start", date: "June 1, 2025", status: "Upcoming" },
  ];

  return (
    <section className="py-16 px-4 bg-[#1a2a4a]/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Key <span className="text-[#8a7ff7]">Dates</span>
          </h2>
          <div className="space-y-4">
            {dates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/5"
              >
                <div>
                  <p className="text-white font-medium">{item.event}</p>
                  <p className="text-gray-400 text-sm">{item.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === "Open" ? "bg-green-500/20 text-green-400" :
                  "bg-yellow-500/20 text-yellow-400"
                }`}>
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}