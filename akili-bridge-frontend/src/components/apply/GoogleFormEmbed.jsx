import React from "react";
import { motion } from "framer-motion";

export default function GoogleFormEmbed({ formUrl = "" }) {
  return (
    <section className="py-16 px-4 bg-[#0a1628]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
        >
          <div className="aspect-video w-full rounded-xl overflow-hidden">
            <iframe
              src={formUrl || "https://docs.google.com/forms/d/e/your-form-id/viewform"}
              className="w-full h-full"
              title="Application Form"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}