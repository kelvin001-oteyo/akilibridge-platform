import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import apiFetch from "../../api/client";

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribeError, setSubscribeError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubscribeError("");

    if (!email || !email.includes("@")) {
      setSubscribeError("Enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await apiFetch("/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          role: "Subscriber",
          source: "footer",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || "Subscription failed.");
      }

      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    } catch (error) {
      setSubscribeError(error.message || "Subscription failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.6,
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

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      x: 8,
      color: "#2fb3ff",
      transition: { duration: 0.2 },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.05,
      y: -3,
      transition: { duration: 0.2 },
    },
  };

  const socialLinks = [
    { name: "Facebook", link: "https://web.facebook.com/akilibridge" },
    { name: "Instagram", link: "https://www.instagram.com/akilibridge/" },
    { name: "X", link: "https://x.com/akilibridge" },
    { name: "LinkedIn", link: "https://www.linkedin.com/company/akilibridge-africa/" },
  ];

  const quickLinks = [
    { name: "Who We Are", path: "/about" },
    { name: "Get to Know Us", path: "/about" },
    { name: "Fellowship Program", path: "/program" },
    { name: "Training & Workshops", path: "/program" },
    { name: "For Fellows", path: "/apply" },
  ];

  return (
    <motion.footer
      ref={footerRef}
      className="relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          background:
            "linear-gradient(135deg, rgba(10, 20, 40, 0.95) 0%, rgba(5, 15, 30, 0.92) 100%)",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/20"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              bottom: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -Math.random() * 100 - 50],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ textShadow: "0 0 20px rgba(255,217,102,0.5)" }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] flex items-center justify-center text-[#0a1628] font-bold text-sm shadow-lg shadow-[#2fb3ff]/20">
                AB
              </div>
              <span className="text-2xl font-bold text-white">
                Akili<span className="text-[#2fb3ff]">Bridge</span>
              </span>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm leading-relaxed max-w-sm"
            >
              Building stronger pathways for African researchers through mentorship,
              training, and opportunity.
            </motion.p>
            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover="hover"
                  className="px-4 py-2 rounded-full bg-white/5 text-white hover:bg-[#2fb3ff]/20 transition-all text-sm"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-lg font-semibold text-[#2fb3ff] mb-4 relative inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Quick Links
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-[#2fb3ff] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.6, duration: 0.5 }}
              />
            </motion.h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  variants={linkVariants}
                  whileHover="hover"
                  custom={index}
                >
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#2fb3ff] transition-colors text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter - Fixed Spacing */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-lg font-semibold text-[#2fb3ff] mb-4 flex items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Subscribe for updates
            </motion.h4>
            <motion.form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <motion.input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #2fb3ff" }}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-[#2fb3ff] focus:outline-none transition-all"
                disabled={isSubmitting}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={subscribed ? { scale: [1, 1.1, 1] } : {}}
                className="w-full px-6 py-3 bg-[#2fb3ff] text-[#0a1628] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#2fb3ff]/30 transition-all disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : subscribed ? "Subscribed ✓" : "Subscribe"}
              </motion.button>
            </motion.form>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-[#2fb3ff] text-sm"
              >
                Thanks for subscribing! 🎉
              </motion.p>
            )}
            {subscribeError && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-red-400 text-sm"
              >
                {subscribeError}
              </motion.p>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-lg font-semibold text-[#2fb3ff] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Contact Us
            </motion.h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#2fb3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:communications@akilibridge.org" className="hover:text-[#2fb3ff] transition-colors">
                  communications@akilibridge.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#2fb3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Kigali, Rwanda</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#2fb3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+250788123456" className="hover:text-[#2fb3ff] transition-colors">
                  +250 788 123 456
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="relative z-10 border-t border-white/10 mt-12 pt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-[#2fb3ff]"
            initial={{ width: "0%" }}
            animate={{ width: "50%" }}
            transition={{ delay: 0.9, duration: 0.8 }}
          />
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] flex items-center justify-center text-[#0a1628] font-bold text-[10px]">
                AB
              </div>
              <motion.span whileHover={{ color: "#2fb3ff" }}>
                © 2025 | AkiliBridge | All Rights Reserved.
              </motion.span>
            </div>
            <span className="text-white/20">|</span>
            <motion.span whileHover={{ color: "#2fb3ff" }} className="cursor-default">
              StaffWEBMAIL | WebAdmin
            </motion.span>
            <span className="text-white/20">|</span>
            <motion.span whileHover={{ color: "#2fb3ff" }} className="cursor-default">
              Built by AkiliBridge
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
