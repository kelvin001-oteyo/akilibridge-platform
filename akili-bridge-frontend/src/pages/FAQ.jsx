import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";

// Import components from components/faq/
import FAQCategory from "../components/faq/FAQCategory";

export default function FAQ() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  // Full FAQ data
  const faqs = [
    {
      category: "Program Overview",
      questions: [
        {
          q: "What is the Akili Bridge STEM Research Fellowship?",
          a: "The Akili Bridge STEM Research Fellowship is a 16-week intensive mentored research program that pairs top African scholars with practicing international researchers and engineers. Fellows work on real-world research projects, receive 1:1 mentorship, and become published authors on peer-reviewed papers or conference proceedings."
        },
        {
          q: "Who is this program designed for?",
          a: "The program is designed for final-year undergraduate students (B.Sc./B.Eng.), recent STEM graduates (Bachelor's degree holders), and current Master's or Ph.D. students who are residing and studying in East Africa. We look for scholars who are willing to pursue research as a career or continue into graduate studies."
        },
        {
          q: "How long is the fellowship?",
          a: "The flagship program runs for 16 weeks (intensive term). We also have a 12-month researcher-in-training option for undergraduate students in Rwanda. Both programs are designed to provide hands-on research experience and mentorship."
        },
        {
          q: "Is there a cost to participate?",
          a: "No, this is a fully funded fellowship program. There are absolutely no costs for selected fellows. All program expenses, mentorship, and resources are covered by Akili Bridge."
        },
        {
          q: "What makes this fellowship different from others?",
          a: "What sets us apart is our focus on tangible output — every fellow becomes a published author. We also provide 1:1 mentorship with active researchers at top global universities, a detailed recommendation letter, and exclusive post-fellowship support for fully funded Master's and Ph.D. placements."
        }
      ]
    },
    {
      category: "Eligibility & Requirements",
      questions: [
        {
          q: "What are the academic requirements?",
          a: "We welcome final-year undergraduates (B.Sc./B.Eng.), recent graduates (Bachelor's degree holders), and current Master's or Ph.D. students in STEM fields. You should have a strong academic record and a demonstrated interest in research."
        },
        {
          q: "Do I need to be from East Africa?",
          a: "Yes, currently we require applicants to be residing and studying in East Africa. This helps us build a strong regional research community and provide targeted support to scholars in the region."
        },
        {
          q: "Do I need prior research experience?",
          a: "Not necessarily. We welcome motivated students with strong academic backgrounds who are eager to learn. Our mentorship model is designed to guide you through the research process from start to finish."
        },
        {
          q: "What GPA do I need?",
          a: "We look for candidates with strong academic performance. While there is no strict minimum, a GPA of 3.0 or equivalent on a 4.0 scale is generally considered competitive."
        },
        {
          q: "What STEM fields are accepted?",
          a: "We accept applications from Computer Science, Artificial Intelligence, Data Science, Civil & Structural Engineering, Intelligent Transportation, Applied Mathematics & Statistics, and related STEM disciplines."
        },
        {
          q: "Can I apply if I'm not currently enrolled?",
          a: "Yes, recent STEM graduates (Bachelor's degree holders) are welcome to apply. You do not need to be currently enrolled in an academic program."
        }
      ]
    },
    {
      category: "Application Process",
      questions: [
        {
          q: "How do I apply?",
          a: "Applications are submitted through our Google Form. The process includes: 1) Completing the application form with your academic background and research interests, 2) Submitting supporting documents (transcripts, CV, research proposal), 3) Interview selection for shortlisted candidates, and 4) Final selection and onboarding."
        },
        {
          q: "What documents do I need to submit?",
          a: "You'll need to submit: 1) Your academic transcripts, 2) A current CV/Resume, 3) A brief research proposal or statement of purpose (1-2 pages), and 4) A letter of recommendation (optional but encouraged)."
        },
        {
          q: "Is there an application fee?",
          a: "No, there is absolutely no application fee. The program is fully funded for all selected fellows."
        },
        {
          q: "When is the application deadline?",
          a: "Application deadlines are announced on our website and social media channels. We recommend checking regularly for updates and submitting your application early for priority consideration."
        },
        {
          q: "When will I hear back after applying?",
          a: "Shortlisted candidates will be contacted within 2-3 weeks after the application deadline for interviews. Final decisions will be communicated within 4-6 weeks."
        },
        {
          q: "Can I apply to multiple research tracks?",
          a: "Yes, you can indicate your preference for up to two tracks in your application. However, you will ultimately be placed in one track that best matches your interests and background."
        },
        {
          q: "Can I edit my application after submission?",
          a: "We recommend reviewing your application carefully before submission. If you need to make critical changes, please contact our team directly with your application reference number."
        }
      ]
    },
    {
      category: "Program Structure",
      questions: [
        {
          q: "What is the weekly time commitment?",
          a: "Fellows are expected to dedicate 15 focused hours per week for the full 16-week term. This covers mandatory mentor pod check-ins, cohort seminars, and heavy independent research work."
        },
        {
          q: "Is the program remote or in-person?",
          a: "The program is hybrid — fellows work remotely with virtual mentorship, while staying connected through weekly check-ins and cohort seminars. Some tracks may have optional in-person meetups or collaboration sessions."
        },
        {
          q: "What does a typical week look like?",
          a: "A typical week includes: 1) Weekly mentor check-in (1 hour), 2) Cohort seminar or workshop (1-2 hours), 3) Independent research work (10-12 hours), and 4) Progress reporting and documentation."
        },
        {
          q: "How are mentors assigned?",
          a: "Mentors are assigned based on your research interests, academic background, and track selection. We match each fellow with an experienced researcher or senior engineer who has relevant expertise at top global universities and industry labs."
        },
        {
          q: "What research tracks are available?",
          a: "We offer six tracks: 1) Computer Science, 2) Artificial Intelligence, 3) Data Science, 4) Civil & Structural Engineering, 5) Intelligent Transportation, and 6) Applied Mathematics & Statistics."
        },
        {
          q: "Can I choose my research topic?",
          a: "You'll work on research projects aligned with your track. While your mentor will guide the research direction, there's flexibility to explore topics within the track's scope that match your interests."
        }
      ]
    },
    {
      category: "Output & Outcomes",
      questions: [
        {
          q: "Will I actually get published?",
          a: "Yes! Every fellow who completes the program will become a published author on a peer-reviewed paper, conference paper, or open-source scientific repository. Publication is a core output of the fellowship."
        },
        {
          q: "What kind of publication can I expect?",
          a: "Depending on your track and research progress, you can expect either a peer-reviewed journal paper, a conference paper, or a significant open-source contribution. Your mentor will guide you through the publication process."
        },
        {
          q: "Do I get a certificate?",
          a: "Yes, all fellows who complete the 16-week term receive the Akili Bridge Fellowship Certificate as formal recognition of completing a rigorous research term and presenting at the final symposium."
        },
        {
          q: "Will I get a recommendation letter?",
          a: "Yes, you will receive a detailed, output-backed letter of recommendation from your track mentor for future Master's/Ph.D. applications or career advancement."
        }
      ]
    },
    {
      category: "Post-Fellowship Pathway",
      questions: [
        {
          q: "What is the post-fellowship pathway?",
          a: "For fellows who complete the term, Akili Bridge provides direct support to secure fully funded Master's and Ph.D. positions at top international universities. This includes help with applications, scholarships, and connecting with professors."
        },
        {
          q: "What universities do you partner with?",
          a: "Our mentors come from and have connections with top institutions including MIT, Stanford, Oxford, Cambridge, ETH Zurich, Carnegie Mellon, and others. We leverage these extensive networks for post-fellowship placements."
        },
        {
          q: "Is the post-fellowship support guaranteed?",
          a: "The support is exclusive to program completers. While we help you connect with opportunities, the final outcome depends on your performance, research output, and the specific requirements of each opportunity."
        },
        {
          q: "What kind of funding can I expect?",
          a: "The post-fellowship support helps you secure positions covering full tuition, monthly living stipends, and research funding at top international universities."
        }
      ]
    },
    {
      category: "Technical & Logistics",
      questions: [
        {
          q: "What platform will we use for the program?",
          a: "We use a combination of platforms including Zoom for meetings, Slack/Discord for community communication, and Google Workspace for collaboration. Specific tools may vary by track."
        },
        {
          q: "What if I have technical difficulties?",
          a: "We provide technical support throughout the program. You'll have access to a program coordinator who can help with any technical issues you encounter."
        },
        {
          q: "What internet speed do I need?",
          a: "We recommend a minimum internet speed of 10 Mbps download and 5 Mbps upload for smooth video conferencing and collaboration. However, we understand that internet access varies and will work with you to accommodate your situation."
        },
        {
          q: "Is there a community for fellows?",
          a: "Yes, all fellows join a dedicated Slack/Discord community where you can connect with peers, share resources, ask questions, and collaborate beyond the formal program sessions."
        }
      ]
    },
    {
      category: "Mentorship",
      questions: [
        {
          q: "Who will mentor me?",
          a: "You will be paired with an active researcher or senior engineer at top global universities and industry labs who will provide guidance, support, and networking opportunities throughout the program."
        },
        {
          q: "How often will I meet my mentor?",
          a: "You'll have weekly mentor pod check-ins, with additional 1:1 meetings as needed. The mentorship relationship is designed to be flexible and responsive to your research needs."
        },
        {
          q: "Can I choose my mentor?",
          a: "We match fellows with mentors based on your research interests, career goals, and the mentor's expertise. You'll have the opportunity to provide preferences during the onboarding process."
        }
      ]
    }
  ];

  // Get unique categories
  const categories = [
    { id: "all", label: "All Categories" },
    ...faqs.map(faq => ({ 
      id: faq.category, 
      label: faq.category
    }))
  ];

  // Calculate total questions
  const totalQuestions = useMemo(() => {
    return faqs.reduce((acc, cat) => acc + cat.questions.length, 0);
  }, []);

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    return faqs
      .map(faq => ({
        ...faq,
        questions: faq.questions.filter(q => {
          if (!searchTerm) return true;
          const searchLower = searchTerm.toLowerCase();
          return q.q.toLowerCase().includes(searchLower) || 
                 q.a.toLowerCase().includes(searchLower);
        })
      }))
      .filter(faq => {
        if (activeCategory !== "all" && faq.category !== activeCategory) {
          return false;
        }
        return faq.questions.length > 0;
      });
  }, [searchTerm, activeCategory]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0a1628]">
      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <motion.section
        className="relative flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden border-b border-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#df7c2e] rounded-full filter blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-[#0a1628]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-[#0a1628]/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Everything you need to know about the Akili Bridge STEM Research Fellowship
          </motion.p>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* SEARCH & FILTER SECTION */}
      {/* ============================================================ */}
      <motion.section
        className="max-w-4xl mx-auto px-4 -mt-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="bg-white shadow-xl shadow-gray-200/50 rounded-2xl p-6 border border-gray-100">
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
              className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[#0a1628] placeholder-gray-400 focus:border-[#df7c2e] focus:outline-none focus:ring-2 focus:ring-[#df7c2e]/20 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0a1628] transition-colors"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-nowrap gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-[#df7c2e] text-white shadow-lg shadow-[#df7c2e]/20"
                    : "bg-gray-100 text-[#0a1628]/60 hover:bg-gray-200 hover:text-[#0a1628] border border-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="flex flex-wrap items-center justify-end mt-4 pt-4 border-t border-gray-200">
            {(searchTerm || activeCategory !== "all") && (
              <button
                onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}
                className="text-sm text-[#df7c2e] hover:text-[#c96b24] transition-colors font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/* FAQ CATEGORIES - Using FAQCategory component */}
      {/* ============================================================ */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        {filteredFaqs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-[#0a1628] mb-2">No questions found</h3>
            <p className="text-[#0a1628]/60 max-w-md mx-auto">
              We couldn't find any questions matching your search.
            </p>
            <button
              onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}
              className="mt-4 px-6 py-2 bg-[#df7c2e] rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-[#df7c2e]/30 transition-all"
            >
              Show all questions
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            className="space-y-10"
          >
            {filteredFaqs.map((category, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <FAQCategory
                  category={category.category}
                  questions={category.questions}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* ============================================================ */}
      {/* DROPPED: The "EXPLORE MORE" / QUICK LINKS section */}

      {/* ============================================================ */}
      {/* STILL HAVE QUESTIONS? */}
      {/* ============================================================ */}
      <motion.section
        className="max-w-4xl mx-auto px-4 pb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-[#0a1628] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#df7c2e]/10 rounded-full filter blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#df7c2e]/10 rounded-full filter blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Still Have <span className="text-[#df7c2e]">Questions</span>?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Can't find what you're looking for? Our team is here to help. 
              We typically respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:communications@akilibridge.org"
                className="px-8 py-3 bg-[#df7c2e] rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-[#df7c2e]/30 transition-all inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold border border-white/20 hover:bg-white/20 transition-all inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Back to Top
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Or reach us at <span className="text-gray-400">communications@akilibridge.org</span>
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
