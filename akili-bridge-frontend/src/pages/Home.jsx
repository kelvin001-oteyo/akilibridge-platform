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

  // Partner logos - REMOVED/COMMENTED OUT
  /*
  const partners = [
    { name: "University of Rwanda" },
    { name: "Makerere University" },
    { name: "African Union" },
    { name: "UNESCO" },
    { name: "World Bank" },
    { name: "African Development Bank" }
  ];
  */

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
      {/* Hero Section */}
      <Hero />

      {/* How It Works */}
      <HowItWorks />

      {/* Mission Teaser */}
      <MissionTeaser />

      {/* 
      ============================================================
      PARTNERS SECTION - COMMENTED OUT PER SIMBA'S INSTRUCTION
      ============================================================
      <motion.section
        className="py-16 px-4 bg-gray-50 border-t border-b border-gray-200"
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-2">
              Our <span className="text-[#df7c2e]">Partners</span>
            </h2>
            <p className="text-[#0a1628]/60 text-sm">
              Collaborating with leading institutions across Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-[#df7c2e]/40 hover:shadow-md transition-all group"
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <p className="text-[#0a1628]/70 text-xs font-medium group-hover:text-[#df7c2e] transition-colors">{partner.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      */}

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
