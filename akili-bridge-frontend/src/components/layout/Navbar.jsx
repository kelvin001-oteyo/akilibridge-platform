import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
// Import the local logo image
import logo from "../../assets/ChatGPT Image Aug 18, 2026, 12_49_12 PM.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeqZ2JpM-sJQChU3HEsaJeQnVdpBRdTMdiyw36VsCpRB8hy_g/viewform?usp=publish-editor";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  // Public navigation — matches the agreed project structure
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Program", path: "/program" },
    { name: "FAQ", path: "/faq" },
    // "Apply" is now a CTA button, not a nav link (removed from here)
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  const handleLogout = async () => {
    setIsDropdownOpen(false);
    await logout();
    navigate("/admin/login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1628]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-[#0a1628]/80 backdrop-blur-lg border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo - USING LOCAL IMAGE */}
          <Link
            to="/"
            className="flex items-center shrink-0 group"
            aria-label="AkiliBridge Home"
          >
            <img
              src={logo}
              alt="Akili Bridge Logo"
              className="h-8 md:h-10 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-[#2fb3ff] bg-[#2fb3ff]/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}

                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#2fb3ff] rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Admin Session */}
            {isAuthenticated() && isAdmin() ? (
              <div className="hidden lg:flex items-center gap-3">
                <div className="relative">

                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-all group"
                    aria-expanded={isDropdownOpen}
                    aria-label="Open admin menu"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] flex items-center justify-center text-[#0a1628] font-bold text-sm">
                      {user?.username?.charAt(0)?.toUpperCase() || "A"}
                    </div>

                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {user?.username || "Admin"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 10,
                          scale: 0.95,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          y: 10,
                          scale: 0.95,
                        }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-56 bg-[#1a2a4a] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                      >
                        <div className="py-1">

                          <Link
                            to="/admin/dashboard"
                            onClick={() => setIsDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                          >
                            Dashboard
                          </Link>

                          <Link
                            to="/admin/mentors"
                            onClick={() => setIsDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                          >
                            Mentors
                          </Link>

                          <Link
                            to="/admin/tracks"
                            onClick={() => setIsDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                          >
                            Tracks
                          </Link>

                          <Link
                            to="/admin/faq"
                            onClick={() => setIsDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                          >
                            FAQ Management
                          </Link>

                          <div className="border-t border-white/5 my-1" />

                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
                          >
                            Logout
                          </button>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ) : (
              /* Public Apply CTA - Links to Google Form */
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-block relative overflow-hidden px-5 lg:px-6 py-2.5 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] rounded-lg text-[#0a1628] font-semibold text-sm hover:shadow-lg hover:shadow-[#2fb3ff]/30 transition-all group"
              >
                <span className="relative z-10">Apply</span>
              </a>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-2 rounded-lg hover:bg-white/5 transition-colors ml-1"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">

                <motion.span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-2"
                      : ""
                  }`}
                />

                <motion.span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />

                <motion.span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-2"
                      : ""
                  }`}
                />

              </div>
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="lg:hidden bg-[#0a1628]/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">

              {/* Public Links */}
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive(link.path)
                        ? "text-[#2fb3ff] bg-[#2fb3ff]/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}

                    {isActive(link.path) && (
                      <motion.span
                        layoutId="mobile-indicator"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-[#2fb3ff]"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

              <div className="border-t border-white/5 my-2" />

              {/* Mobile Admin Navigation */}
              {isAuthenticated() && isAdmin() ? (
                <>
                  <Link
                    to="/admin/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#2fb3ff] bg-[#2fb3ff]/10"
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/admin/mentors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:bg-white/5"
                  >
                    Mentors
                  </Link>

                  <Link
                    to="/admin/tracks"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:bg-white/5"
                  >
                    Tracks
                  </Link>

                  <Link
                    to="/admin/faq"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:bg-white/5"
                  >
                    FAQ Management
                  </Link>

                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 mt-2 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] rounded-xl text-[#0a1628] font-semibold text-sm"
                >
                  Apply
                </a>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
