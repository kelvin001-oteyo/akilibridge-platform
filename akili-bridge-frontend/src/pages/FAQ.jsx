import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const faqs = [
    {
      category: "Eligibility",
      questions: [
        {
          q: "Who can apply for the fellowship?",
          a: "Undergraduate students in Rwanda who are passionate about STEM and eager to gain hands-on research experience. We welcome applications from all backgrounds and disciplines."
        },
        {
          q: "What fields are covered?",
          a: "We accept applications from all STEM fields including but not limited to Computer Science, Engineering, Biology, Chemistry, Physics, Mathematics, and Environmental Science."
        },
        {
          q: "Do I need prior research experience?",
          a: "No prior research experience is required. We welcome students who are curious and motivated to learn. The program is designed to build research skills from the ground up."
        },
        {
          q: "Is there a minimum GPA requirement?",
          a: "Yes, applicants should have a minimum GPA of 3.0 on a 4.0 scale or equivalent. However, we also consider other factors like motivation and potential."
        }
      ]
    },
    {
      category: "Process",
      questions: [
        {
          q: "How long is the program?",
          a: "The fellowship is a one-year program with structured mentorship, research training, and professional development. The program runs from June to May each year."
        },
        {
          q: "Is there a deadline?",
          a: "Applications are accepted on a rolling basis. However, priority consideration is given to applications submitted before March 15th for the upcoming cohort."
        },
        {
          q: "What is the application process?",
          a: "The application process involves submitting an online application form, providing academic transcripts, writing a motivation statement, and participating in an interview for shortlisted candidates."
        },
        {
          q: "When will I hear back?",
          a: "You will receive a confirmation email within 48 hours of submission. Shortlisted candidates will be contacted for interviews within 2-3 weeks."
        }
      ]
    },
    {
      category: "Logistics",
      questions: [
        {
          q: "Is the program fully funded?",
          a: "Yes, selected fellows receive full funding including tuition support, research materials, mentorship, and a monthly stipend to cover living expenses."
        },
        {
          q: "Where will the program take place?",
          a: "The program is based in Kigali, Rwanda, with opportunities for remote collaboration with partner institutions across East Africa."
        },
        {
          q: "What resources are provided?",
          a: "Fellows have access to research labs, library resources, mentorship, training workshops, and networking opportunities with researchers and industry experts."
        },
        {
          q: "Is accommodation provided?",
          a: "Yes, accommodation is provided for fellows during the program. Housing is arranged near the research facilities for convenience."
        }
      ]
    },
    {
      category: "After Program",
      questions: [
        {
          q: "What happens after the program?",
          a: "Graduates join our alumni network with access to continued mentorship, research opportunities, career support, and networking events."
        },
        {
          q: "Will I receive a certificate?",
          a: "Yes, all fellows receive a certificate of completion and a detailed transcript of their research activities and achievements."
        },
        {
          q: "Are there opportunities for publication?",
          a: "Yes, fellows are encouraged and supported to publish their research in peer-reviewed journals and present at conferences."
        },
        {
          q: "Can I continue my research?",
          a: "Absolutely! Many alumni continue their research with support from AkiliBridge's alumni network and partner institutions."
        }
      ]
    },
    {
      category: "Mentorship",
      questions: [
        {
          q: "Who will mentor me?",
          a: "You will be paired with an experienced researcher or industry expert who will provide guidance, support, and networking opportunities throughout the program."
        },
        {
          q: "How often will I meet my mentor?",
          a: "You will have at least two virtual check-ins per month, with additional in-person meetings when possible. The mentorship relationship is designed to be flexible."
        },
        {
          q: "Can I choose my mentor?",
          a: "We match fellows with mentors based on their research interests, career goals, and the mentor's expertise. You'll have the opportunity to provide preferences."
        }
      ]
    }
  ];

  // Get unique categories
  const categories = ["all", ...new Set(faqs.map(faq => faq.category))];

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    return faqs
      .filter(faq => {
        if (activeCategory !== "all" && faq.category !== activeCategory) {
          return false;
        }
        if (searchTerm) {
          const searchLower = searchTerm.toLowerCase();
          return faq.questions.some(q => 
            q.q.toLowerCase().includes(searchLower) || 
            q.a.toLowerCase().includes(searchLower)
          );
        }
        return true;
      })
      .map(faq => ({
        ...faq,
        questions: faq.questions.filter(q => {
          if (!searchTerm) return true;
          const searchLower = searchTerm.toLowerCase();
          return q.q.toLowerCase().includes(searchLower) || 
                 q.a.toLowerCase().includes(searchLower);
        })
      }))
      .filter(faq => faq.questions.length > 0);
  }, [searchTerm, activeCategory]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getCategoryColor = (category) => {
    const colors = {
      "Eligibility": "text-blue-400 border-blue-500/30",
      "Process": "text-green-400 border-green-500/30",
      "Logistics": "text-yellow-400 border-yellow-500/30",
      "After Program": "text-purple-400 border-purple-500/30",
      "Mentorship": "text-pink-400 border-pink-500/30",
    };
    return colors[category] || "text-gray-400 border-gray-500/30";
  };

  const getCategoryBg = (category) => {
    const colors = {
      "Eligibility": "bg-blue-500/10",
      "Process": "bg-green-500/10",
      "Logistics": "bg-yellow-500/10",
      "After Program": "bg-purple-500/10",
      "Mentorship": "bg-pink-500/10",
    };
    return colors[category] || "bg-white/5";
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero Section */}
      <motion.section
        className="relative flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#2fb3ff] rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#8a7ff7] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10">
          <motion.span
            className="inline-block px-4 py-1.5 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-full text-xs font-medium tracking-wider uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            FAQ
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Everything you need to know about the AkiliBridge Fellowship
          </motion.p>
        </div>
      </motion.section>

      {/* Search & Filter */}
      <motion.section
        className="max-w-4xl mx-auto px-4 -mt-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          {/* Search Bar */}
          <div className="relative mb-4">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeWidth="2"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2"/>
            </svg>
            <input
              type="text"
              placeholder="Search for questions or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[#2fb3ff] text-[#0a1628]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category === "all" ? "All Categories" : category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-500">
            {filteredFaqs.reduce((acc, faq) => acc + faq.questions.length, 0)} questions found
          </div>
        </div>
      </motion.section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        {filteredFaqs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 bg-white/5 rounded-2xl border border-white/10"
          >
            <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}
              className="mt-4 px-4 py-2 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-lg hover:bg-[#2fb3ff]/30 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-10"
          >
            {filteredFaqs.map((category, catIndex) => (
              <motion.div key={catIndex} variants={fadeInUp} className="space-y-4">
                <div className="flex items-center gap-3">
                  <h2 className={`text-2xl font-bold ${getCategoryColor(category.category)}`}>
                    {category.category}
                  </h2>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${getCategoryBg(category.category)} text-gray-400`}>
                    {category.questions.length} questions
                  </span>
                </div>

                {category.questions.map((faq, qIndex) => {
                  const index = `${catIndex}-${qIndex}`;
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className={`bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-[#2fb3ff]/30 transition-all ${
                        openIndex === index ? "border-[#2fb3ff]/50" : ""
                      }`}
                    >
                      <button
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors group"
                        onClick={() => toggleAccordion(index)}
                      >
                        <span className="text-lg font-medium text-white group-hover:text-[#2fb3ff] transition-colors">
                          {faq.q}
                        </span>
                        <motion.span
                          animate={{ rotate: openIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className={`text-2xl flex-shrink-0 ml-4 transition-colors ${
                            openIndex === index ? "text-[#2fb3ff]" : "text-gray-400"
                          }`}
                        >
                          {openIndex === index ? "−" : "+"}
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-4"
                          >
                            <div className="pt-2 text-gray-300 leading-relaxed border-t border-white/5">
                              {faq.a}
                            </div>
                            {/* Helpful buttons */}
                            <div className="flex items-center gap-4 mt-4 text-sm">
                              <span className="text-gray-500">Was this helpful?</span>
                              <button className="text-gray-400 hover:text-[#2fb3ff] transition-colors">
                                Yes
                              </button>
                              <button className="text-gray-400 hover:text-[#2fb3ff] transition-colors">
                                No
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* Still Have Questions? */}
      <motion.section
        className="max-w-4xl mx-auto px-4 pb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-br from-[#2fb3ff]/10 to-[#8a7ff7]/10 rounded-2xl p-8 md:p-12 text-center border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-3">
            Still Have <span className="text-[#2fb3ff]">Questions</span>?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Can't find what you're looking for? Reach out to our team and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:info@akilibridge.org"
              className="px-8 py-3 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] rounded-xl text-[#0a1628] font-semibold hover:shadow-lg hover:shadow-[#2fb3ff]/30 transition-all inline-flex items-center gap-2"
            >
              Email Us
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              Back to Top
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}