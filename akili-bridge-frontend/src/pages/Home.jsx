import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import components
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import MissionTeaser from "../components/home/MissionTeaser";
// import MentorStrip from "../components/home/MentorStrip"; // REMOVED - will be placed elsewhere
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribeError, setSubscribeError] = useState("");
  const [stats, setStats] = useState({
    fellows: 0,
    mentors: 0,
    partners: 0,
    countries: 0
  });
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Fetch real stats from API
  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Replace with actual API call
        // const response = await apiFetch("/stats");
        // const data = await response.json();
        
        // Mock data for now
        setStats({
          fellows: 127,
          mentors: 45,
          partners: 12,
          countries: 8
        });
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubscribeError("");

    if (!subscribeEmail || !subscribeEmail.includes("@")) {
      setSubscribeError("Enter a valid email address.");
      return;
    }

    try {
      // Replace with actual API call
      // await apiFetch("/newsletter/subscribe", {
      //   method: "POST",
      //   body: JSON.stringify({ email: subscribeEmail }),
      // });
      
      setSubscribed(true);
      setSubscribeEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    } catch (error) {
      setSubscribeError(error.message || "Subscription failed.");
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Testimonials data - HIDDEN (commented out)
  /*
  const testimonials = [
    {
      name: "Dr. Jane Akinyi",
      role: "Fellow 2024",
      quote: "The AkiliBridge fellowship transformed my research career. I gained hands-on experience and mentorship that I couldn't find anywhere else.",
      image: "https://ui-avatars.com/api/?name=Jane+Akinyi&background=2fb3ff&color=fff&size=64"
    },
    {
      name: "Prof. Michael Ochieng",
      role: "Mentor",
      quote: "Mentoring at AkiliBridge has been incredibly rewarding. Seeing these bright minds grow and make an impact is truly inspiring.",
      image: "https://ui-avatars.com/api/?name=Michael+Ochieng&background=8a7ff7&color=fff&size=64"
    },
    {
      name: "Sarah Uwimana",
      role: "Fellow 2024",
      quote: "The research skills and network I gained through this program opened doors I never thought possible. I'm now pursuing my PhD.",
      image: "https://ui-avatars.com/api/?name=Sarah+Uwimana&background=ff6b9d&color=fff&size=64"
    }
  ];
  */

  // Partner logos
  const partners = [
    { name: "University of Rwanda" },
    { name: "Makerere University" },
    { name: "African Union" },
    { name: "UNESCO" },
    { name: "World Bank" },
    { name: "African Development Bank" }
  ];

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  return (
    <div className="min-h-screen bg-[#0a1628]" ref={containerRef}>
      {/* Hero Section */}
      <Hero />

      {/* Stats Counter Section - HIDDEN (commented out) */}
      {/*
      <motion.section
        className="py-16 px-4 bg-gradient-to-b from-[#0a1628] to-[#1a2a4a]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Our Impact in <span className="text-[#2fb3ff]">Numbers</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Making a difference across Africa through research and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: stats.fellows, label: "Fellows Trained", color: "#2fb3ff" },
              { value: stats.mentors, label: "Expert Mentors", color: "#8a7ff7" },
              { value: stats.partners, label: "Partner Institutions", color: "#ff6b9d" },
              { value: stats.countries, label: "African Countries", color: "#ffd93d" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/5 hover:border-[#2fb3ff]/30 transition-all group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold"
                  style={{ color: item.color }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {loading ? "..." : item.value}+
                </motion.div>
                <p className="text-gray-400 text-sm mt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      */}

      {/* How It Works */}
      <HowItWorks />

      {/* Mission Teaser */}
      <MissionTeaser />

      {/* Testimonials Section - HIDDEN (commented out) */}
      {/*
      <motion.section
        className="py-20 px-4 bg-[#1a2a4a]/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-full text-xs font-medium tracking-wider uppercase mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              What Our <span className="text-[#2fb3ff]">Community Says</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real stories from fellows and mentors who have been part of our journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-[#2fb3ff]/30 transition-all group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#2fb3ff]/30"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-[#2fb3ff] text-xs">{testimonial.role}</p>
                  </div>
                </div>
                <div className="text-[#2fb3ff] text-3xl mb-2">"</div>
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
        </div>
      </motion.section>
      */}

      {/* Mentor Strip - REMOVED (will be placed elsewhere) */}
      {/* <MentorStrip /> */}

      {/* Partners Section */}
      <motion.section
        className="py-16 px-4 bg-[#0a1628]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Our <span className="text-[#2fb3ff]">Partners</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Collaborating with leading institutions across Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5 hover:border-[#2fb3ff]/30 transition-all group"
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <p className="text-gray-300 text-xs font-medium">{partner.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Subscribe Section - HIDDEN (commented out) */}
      {/*
      <section className="bg-gradient-to-b from-[#1a2a4a]/30 to-[#0a1628] py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay In <span className="text-[#2fb3ff]">The Loop</span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              Subscribe to AkiliBridge announcements and receive the latest fellowship,
              events, and research updates straight to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-xl border border-white/20 bg-white/5 text-white placeholder-gray-500 focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-all text-lg"
              />
              
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] rounded-xl text-[#0a1628] font-bold text-lg hover:shadow-lg hover:shadow-[#2fb3ff]/30 transition-all min-w-[160px]"
              >
                {subscribed ? (
                  <span className="flex items-center justify-center gap-2">
                    Subscribed
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Subscribe
                  </span>
                )}
              </button>
            </form>

            <AnimatePresence>
              {subscribeError && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-400 mt-4"
                >
                  {subscribeError}
                </motion.p>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="mt-4 px-6 py-3 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 inline-block"
                >
                  Successfully subscribed! Check your inbox.
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-gray-500 text-sm mt-4">
              No spam, unsubscribe anytime.
            </p>
          </motion.div>
        </motion.div>
      </section>
      */}

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
