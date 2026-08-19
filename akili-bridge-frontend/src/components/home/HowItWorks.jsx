import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HowItWorks() {
  const navigate = useNavigate();
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  const steps = [
    {
      number: "1",
      title: "Complete Application",
      description: "Fill out the online application form with your academic background, research interests, and motivation statement. Submit your transcripts and CV.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Interview Selection",
      description: "Shortlisted candidates are invited for an interview with our selection committee to discuss your research interests, goals, and potential fit for the program.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Intensive Research Term",
      description: "Selected fellows begin 16 weeks of intensive research with 1:1 mentorship from international researchers. Weekly check-ins, cohort seminars, and independent work.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Publication & Graduation",
      description: "Complete your research, submit to peer-reviewed journals or conferences, present at the final symposium, and receive your fellowship certificate.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422M12 14l6.16-3.422M12 14v6m-6 0h12" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background decoration - Subtle Orange Orbs */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#df7c2e] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#df7c2e] rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-2">
            How the Fellowship Works
          </h2>
          <p className="text-[#0a1628]/60 max-w-2xl mx-auto">
            From application to research completion — here's what to expect
          </p>
        </motion.div>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#df7c2e]/20 via-[#df7c2e]/40 to-[#df7c2e]/20 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Step number circle with icon */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#df7c2e]/10 border-2 border-[#df7c2e]/30 flex items-center justify-center text-[#df7c2e] group-hover:border-[#df7c2e] transition-all group-hover:scale-105">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-[#0a1628] mb-1 group-hover:text-[#df7c2e] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#0a1628]/70 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                  
                  {/* REMOVED: Duration/time badges */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
