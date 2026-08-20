import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import apiFetch from "../../api/client";
// Import the local logo image
import logo from "../../assets/logo.png";

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
      color: "#df7c2e",
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
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Program", path: "/program" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <motion.footer
      ref={footerRef}
      className="relative bg-[#0a1628] text-white overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo & Mission Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ textShadow: "0 0 20px rgba(223,124,46,0.5)" }}
            >
              <img 
                src={logo} 
                alt="Akili Bridge Logo" 
                className="h-16 w-auto object-contain"
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-sm leading-relaxed max-w-sm"
            >
              Building stronger pathways for African researchers through 
              mentorship, training, and opportunity.
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
                  className="px-4 py-2 rounded-full bg-white/5 text-white hover:bg-[#df7c2e]/20 hover:text-[#df7c2e] transition-all text-sm font-medium"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-lg font-semibold text-[#df7c2e] mb-4 relative inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Quick Links
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-[#df7c2e] rounded-full"
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
                    className="text-gray-300 hover:text-[#df7c2e] transition-colors text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              
              {/* Added Apply Now link as per text */}
              <motion.li variants={linkVariants} whileHover="hover">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#df7c2e] hover:text-white font-semibold text-sm inline-block transition-colors"
                >
                  Apply Now
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Subscribe for Updates */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-lg font-semibold text-[#df7c2e] mb-4 flex items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Subscribe for Updates
            </motion.h4>
            <motion.form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <motion.input
                type="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #df7c2e" }}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-[#df7c2e] focus:outline-none transition-all"
                disabled={isSubmitting}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={subscribed ? { scale: [1, 1.1, 1] } : {}}
                className="w-full px-6 py-3 bg-[#df7c2e] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#df7c2e]/30 transition-all disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : subscribed ? "Subscribed ✓" : "Subscribe"}
              </motion.button>
            </motion.form>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-[#df7c2e] text-sm"
              >
                Thanks for subscribing!
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

          {/* Contact Us */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-lg font-semibold text-[#df7c2e] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Contact Us
            </motion.h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#df7c2e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:communications@akilibridge.org" className="hover:text-[#df7c2e] transition-colors">
                  communications@akilibridge.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#df7c2e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Kigali, Rwanda</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#df7c2e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+250789128345" className="hover:text-[#df7c2e] transition-colors">
                  +250 789 128 345
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
            className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-[#df7c2e]"
            initial={{ width: "0%" }}
            animate={{ width: "50%" }}
            transition={{ delay: 0.9, duration: 0.8 }}
          />
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span>
                © 2026 Akili Bridge. All Rights Reserved.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
