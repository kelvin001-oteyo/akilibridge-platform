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
      duration: "~30 minutes",
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
      duration: "2-3 weeks after deadline",
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
      duration: "16 weeks",
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
      duration: "Graduation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422M12 14l6.16-3.422M12 14v6m-6 0h12" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#0a1628] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2fb3ff] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8a7ff7] rounded-full filter blur-3xl" />
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
          <span className="inline-block px-4 py-1.5 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-full text-xs font-medium tracking-wider uppercase mb-3">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Your Journey to <span className="text-[#2fb3ff]">Becoming a Published Researcher</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From application to publication — here's how the Akili Bridge fellowship works
          </p>
        </motion.div>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2fb3ff]/20 via-[#8a7ff7]/40 to-[#2fb3ff]/20 -translate-y-1/2" />
          
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2fb3ff]/20 to-[#8a7ff7]/20 border-2 border-[#2fb3ff]/30 flex items-center justify-center text-[#2fb3ff] group-hover:border-[#2fb3ff] transition-all group-hover:scale-105">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#2fb3ff] text-[#0a1628] text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#2fb3ff] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                  
                  {/* Duration badge */}
                  <span className="inline-block mt-3 px-3 py-1 bg-white/5 rounded-full text-xs text-gray-500 border border-white/5">
                    {step.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA at bottom */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4">
            Ready to start your journey?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] rounded-xl text-[#0a1628] font-semibold hover:shadow-lg hover:shadow-[#2fb3ff]/30 transition-all inline-flex items-center gap-2"
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <button
              onClick={() => navigate("/faq")}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              View FAQs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
