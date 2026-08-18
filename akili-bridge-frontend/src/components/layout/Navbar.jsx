import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
// Import the local logo image
import logo from "../../assets/akilibridge.png";

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
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-md"
          : "bg-white/80 backdrop-blur-lg border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo - FIXED: Added a dark bg fallback and a border so it pops */}
          <Link
            to="/"
            className="flex items-center shrink-0 group"
            aria-label="AkiliBridge Home"
          >
            <img
              src={logo}
              alt="Akili Bridge Logo"
              className="h-14 md:h-16 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation - UPDATED TO ORANGE/DARK NAVY THEME */}
          <div className="hidden lg:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-[#df7c2e] bg-[#df7c2e]/10"
                    : "text-[#0a1628]/70 hover:text-[#0a1628] hover:bg-gray-100"
                }`}
              >
                {link.name}

                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#df7c2e] rounded-full"
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

            {/* Admin Session - UPDATED FOR LIGHT THEME */}
            {isAuthenticated() && isAdmin() ? (
              <div className="hidden lg:flex items-center gap-3">
                <div className="relative">

                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all group"
                    aria-expanded={isDropdownOpen}
                    aria-label="Open admin menu"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#df7c2e] flex items-center justify-center text-white font-bold text-sm">
                      {user?.username?.charAt(0)?.toUpperCase() || "A"}
                    </div>

                    <span className="text-sm text-[#0a1628]/70 group-hover:text-[#0a1628] transition-colors">
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
                        className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden"
                      >
                        <div className="py-1">
                          <Link
                            to="/admin/dashboard"
                            onClick={() => setIsDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#0a1628]/70 hover:bg-gray-50 hover:text-[#df7c2e] transition-colors"
                          >
                            Dashboard
                          </Link>
                          <Link
                            to="/admin/mentors"
                            onClick={() => setIsDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#0a1628]/70 hover:bg-gray-50 hover:text-[#df7c2e] transition-colors"
                          >
                            Mentors
                          </Link>
                          <Link
                            to="/admin/tracks"
                            onClick={() => setIsDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#0a1628]/70 hover:bg-gray-50 hover:text-[#df7c2e] transition-colors"
                          >
                            Tracks
                          </Link>
                          <Link
                            to="/admin/faq"
                            onClick={() => setIsDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#0a1628]/70 hover:bg-gray-50 hover:text-[#df7c2e] transition-colors"
                          >
                            FAQ Management
                          </Link>
                          <div className="border-t border-gray-100 my-1" />
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
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
              /* Public Apply CTA - UPDATED TO SOLID ORANGE */
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-block relative overflow-hidden px-5 lg:px-6 py-2.5 bg-[#df7c2e] rounded-lg text-white font-semibold text-sm hover:bg-[#c96b24] hover:shadow-lg hover:shadow-[#df7c2e]/30 transition-all group"
              >
                <span className="relative z-10">Apply Now</span>
              </a>
            )}

            {/* Mobile Menu Button - UPDATED TO DARK NAVY LINES */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-2 rounded-lg hover:bg-gray-100 transition-colors ml-1"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className={`block h-0.5 bg-[#0a1628] rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <motion.span
                  className={`block h-0.5 bg-[#0a1628] rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <motion.span
                  className={`block h-0.5 bg-[#0a1628] rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu - UPDATED TO LIGHT THEME */}
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
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 overflow-hidden shadow-xl"
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
                        ? "text-[#df7c2e] bg-[#df7c2e]/10"
                        : "text-[#0a1628]/70 hover:text-[#0a1628] hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <motion.span
                        layoutId="mobile-indicator"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-[#df7c2e]"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

              <div className="border-t border-gray-200 my-2" />

              {/* Mobile Admin Navigation */}
              {isAuthenticated() && isAdmin() ? (
                <>
                  <Link
                    to="/admin/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#df7c2e] bg-[#df7c2e]/10"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/admin/mentors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#0a1628]/70 hover:bg-gray-100"
                  >
                    Mentors
                  </Link>
                  <Link
                    to="/admin/tracks"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#0a1628]/70 hover:bg-gray-100"
                  >
                    Tracks
                  </Link>
                  <Link
                    to="/admin/faq"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#0a1628]/70 hover:bg-gray-100"
                  >
                    FAQ Management
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all"
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
                  className="flex items-center justify-center gap-2 px-4 py-3 mt-2 bg-[#df7c2e] rounded-xl text-white font-semibold text-sm"
                >
                  Apply Now
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
