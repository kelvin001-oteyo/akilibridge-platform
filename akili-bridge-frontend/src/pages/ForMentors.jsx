import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ForMentors() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("benefits");
  
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const benefits = [
    { title: "Shape Future Leaders", description: "Guide Africa's brightest minds through real-world challenges" },
    { title: "Expand Network", description: "Collaborate and co-author with emerging researchers" },
    { title: "Recruit Talent", description: "Identify exceptional candidates for graduate programs" },
    { title: "Drive Change", description: "Foster ethical, context-relevant research in Africa" },
  ];

  const responsibilities = [
    "Provide guidance on research design, execution, and publication",
    "Offer constructive feedback on proposals and reports",
    "Conduct virtual check-ins (minimum twice per month)",
    "Encourage professional and academic growth",
  ];

  const mentoringBenefits = [
    "Shape the next generation of African STEM leaders",
    "Expand your research network in East Africa",
    "Gain recognition on our website and publications",
    "Access to research collaboration opportunities",
    "Invitation to mentor events and workshops"
  ];

  const eligibility = [
    "Master's or PhD in a STEM field",
    "At least one peer-reviewed publication as lead author",
    "Commitment to a six-month remote mentorship",
    "Strong communication and mentoring skills",
    "Passion for developing African research talent"
  ];

  // Testimonials from current mentors
  const mentorTestimonials = [
    {
      name: "Dr. Sarah Akinyi",
      role: "Research Methodologist",
      quote: "Mentoring at AkiliBridge has been one of the most rewarding experiences of my career. Watching these young researchers grow and develop their skills is truly inspiring.",
      image: "https://ui-avatars.com/api/?name=Sarah+Akinyi&background=4CAF50&color=fff&size=64"
    },
    {
      name: "Prof. James Oduor",
      role: "Nanotechnology Expert",
      quote: "The AkiliBridge mentorship program connects you with the brightest minds in Africa. It's a two-way learning experience that benefits everyone involved.",
      image: "https://ui-avatars.com/api/?name=James+Oduor&background=ffd93d&color=000&size=64"
    },
    {
      name: "Dr. Alice Mwangi",
      role: "AI Research Scientist",
      quote: "Being a mentor at AkiliBridge has allowed me to give back to the next generation of researchers. The impact we're making together is truly remarkable.",
      image: "https://ui-avatars.com/api/?name=Alice+Mwangi&background=2fb3ff&color=fff&size=64"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white overflow-x-hidden relative">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/95 to-[#1a2a4a]/90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center mb-12 bg-gradient-to-r from-white to-[#a8e6ff] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          FOR MENTORS
          <span className="block text-lg md:text-2xl font-medium bg-gradient-to-r from-[#ff6a00] to-[#c68a3d] bg-clip-text text-transparent mt-2">
            Shape the Future of African Research
          </span>
        </motion.h1>

        {/* Intro Section */}
        <motion.section
          className="mb-12"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-gradient-to-br from-[#ff6a00]/15 to-[#ffb447]/5 backdrop-blur-sm rounded-3xl p-6 md:p-10 text-center border border-[#ff6a00]/30">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#ff6a00] to-[#c68a3d] bg-clip-text text-transparent">
              Fellowship Program Mentor Application
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-3 opacity-90 max-w-3xl mx-auto">
              Are you passionate about shaping the future of African research and innovation?
              The AkiliBridge STEM Fellowship Program invites experienced researchers,
              academics, and industry experts to mentor Africa's brightest emerging STEM talents.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-90 max-w-3xl mx-auto">
              This is your opportunity to empower the next generation of African researchers
              and contribute to solving pressing challenges through high-quality, ethical,
              and impactful research.
            </p>
          </div>
        </motion.section>

        {/* Quick Stats */}
        <motion.section
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {[
            { value: "50+", label: "Active Mentors" },
            { value: "100+", label: "Fellows Mentored" },
            { value: "8", label: "African Countries" },
            { value: "95%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/5 hover:border-[#ff6a00]/30 transition-all"
            >
              <p className="text-2xl font-bold text-[#ff6a00]">{stat.value}</p>
              <p className="text-xs text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Tabs Section */}
        <motion.section
          className="mb-12"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <div className="flex gap-2 mb-6 bg-white/5 rounded-xl p-1">
              {[
                { id: "benefits", label: "Benefits" },
                { id: "responsibilities", label: "Responsibilities" },
                { id: "eligibility", label: "Eligibility" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-[#ff6a00] to-[#c68a3d] text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-[200px]"
              >
                {activeTab === "benefits" && (
                  <div>
                    <h3 className="text-xl font-bold text-[#ff6a00] mb-4">Benefits of Mentoring</h3>
                    <ul className="space-y-3">
                      {mentoringBenefits.map((item, i) => (
                        <motion.li
                          key={i}
                          custom={i}
                          variants={listItemVariants}
                          initial="hidden"
                          animate="visible"
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-[#ff6a00] text-lg">✓</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "responsibilities" && (
                  <div>
                    <h3 className="text-xl font-bold text-[#ff6a00] mb-4">Role & Responsibilities</h3>
                    <ul className="space-y-3">
                      {responsibilities.map((item, i) => (
                        <motion.li
                          key={i}
                          custom={i}
                          variants={listItemVariants}
                          initial="hidden"
                          animate="visible"
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-[#ff6a00] text-lg">▹</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "eligibility" && (
                  <div>
                    <h3 className="text-xl font-bold text-[#ff6a00] mb-4">Eligibility to Mentor</h3>
                    <ul className="space-y-3">
                      {eligibility.map((item, i) => (
                        <motion.li
                          key={i}
                          custom={i}
                          variants={listItemVariants}
                          initial="hidden"
                          animate="visible"
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-[#ff6a00] text-lg">✓</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Why Become a Mentor Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#ff6a00] after:to-[#c68a3d] after:mx-auto after:mt-2 after:rounded">
            Why Become an AkiliBridge Mentor?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:-translate-y-2 hover:scale-[1.02] transition-all"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-[#ff6a00] mb-2">{benefit.title}</h3>
                <p className="text-sm opacity-85 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mentor Testimonials */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#ff6a00] after:to-[#c68a3d] after:mx-auto after:mt-2 after:rounded">
            What Our <span className="text-[#ff6a00]">Mentors Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mentorTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-[#ff6a00]/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#ff6a00]/30"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-[#ff6a00] text-xs">{testimonial.role}</p>
                  </div>
                </div>
                <div className="text-[#ff6a00] text-3xl mb-2">"</div>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div className="flex gap-0.5 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Application Process */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#ff6a00] after:to-[#c68a3d] after:mx-auto after:mt-2 after:rounded">
            How to Apply
          </h2>
          <div className="max-w-3xl mx-auto">
            {[
              { step: 1, title: "Complete the Mentor Application Form", description: "Fill out your personal and professional details" },
              { step: 2, title: "Provide Credentials", description: "Academic credentials, publication details, and research expertise" },
              { step: 3, title: "Profile Review & Matching", description: "Our team reviews your profile and matches you with a fellow" }
            ].map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 bg-white/5 rounded-2xl mb-3 hover:bg-[#ff6a00]/10 hover:translate-x-2 transition-all"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-[#ff6a00] to-[#c68a3d] rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 flex-1 text-center sm:text-left">
                  <div>
                    <div className="font-semibold">{step.title}</div>
                    <div className="text-sm opacity-70">{step.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 bg-[#ff6a00]/10 rounded-2xl p-4 mt-6 border-l-4 border-[#ff6a00]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <p className="text-sm md:text-base text-center sm:text-left">
              Selected mentors will receive an onboarding guide and be introduced to their mentees at the start of the program.
            </p>
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-to-br from-[#ff6a00]/10 to-[#c68a3d]/10 rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Make a <span className="text-[#ff6a00]">Difference</span>?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our community of mentors and help shape the future of African research.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-8 py-4 bg-gradient-to-r from-[#ff6a00] to-[#c68a3d] rounded-full text-white font-semibold text-lg inline-flex items-center gap-3 overflow-hidden hover:shadow-lg hover:shadow-[#ff6a00]/40 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Apply Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
              </motion.a>
              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/about")}
              >
                Learn More
              </motion.button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Join 50+ mentors already making an impact across Africa
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}