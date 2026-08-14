import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, loading: authLoading, error: authError, setError } = useAuth();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setErrorState] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const from = location.state?.from?.pathname || "/admin/dashboard";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error) setErrorState("");
    if (authError) setError(null);
  };

  const validateForm = () => {
    if (!formData.email.trim()) {
      setErrorState("Email address is required");
      return false;
    }
    if (!formData.password) {
      setErrorState("Password is required");
      return false;
    }
    if (formData.password.length < 6) {
      setErrorState("Password must be at least 6 characters");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorState("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrorState("");

    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        navigate(from, { replace: true });
      } else {
        setErrorState(result.error || "Invalid email or password");
      }
    } catch (err) {
      setErrorState(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2fb3ff] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#8a7ff7] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2fb3ff] opacity-5 rounded-full blur-3xl"></div>
        
        {[...Array(15)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -100, -200],
              x: [null, Math.random() * 200 - 100],
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

      {/* Login Card */}
      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl">
          {/* Logo */}
          <motion.div 
            className="text-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#2fb3ff]/20">
              <span className="text-3xl font-bold text-[#0a1628]">AB</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] bg-clip-text text-transparent">
              Admin Login
            </h1>
            <p className="text-gray-400 text-sm mt-1">Access the AkiliBridge admin dashboard</p>
          </motion.div>

          {/* Error Message */}
          <AnimatePresence>
            {(error || authError) && (
              <motion.div
                className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-sm flex items-start gap-3"
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-lg flex-shrink-0">⚠️</span>
                <span>{error || authError}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Email Address <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="admin@akilibridge.org"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-all"
                  autoComplete="email"
                  autoFocus
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Password <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7C7 4.24 9.24 2 12 2C14.76 2 17 4.24 17 7V11"/>
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-all"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
              <div className="mt-1 text-xs text-gray-500">
                Minimum 6 characters
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-between text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <label className="flex items-center gap-2 text-gray-400 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-[#2fb3ff] focus:ring-[#2fb3ff]/20 focus:ring-2 cursor-pointer"
                />
                <span className="group-hover:text-gray-300 transition-colors">
                  Remember me
                </span>
              </label>
              <button
                type="button"
                className="text-[#2fb3ff] hover:text-[#8a7ff7] transition-colors"
                onClick={() => alert("Please contact the system administrator to reset your password.")}
              >
                Forgot password?
              </button>
            </motion.div>

            <motion.button
              type="submit"
              disabled={loading || authLoading}
              className="w-full py-3.5 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] rounded-xl text-[#0a1628] font-semibold text-lg hover:shadow-lg hover:shadow-[#2fb3ff]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              {loading || authLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-[#0a1628] border-t-transparent rounded-full animate-spin"></div>
                  Logging in...
                </div>
              ) : (
                "Login"
              )}
            </motion.button>

            <motion.div
              className="mt-4 text-center text-xs text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <p className="mb-1 font-medium text-gray-400">Demo Credentials</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-gray-400 bg-white/5 rounded-lg p-3">
                <span>Email: <span className="text-[#2fb3ff] font-mono">admin@akilibridge.org</span></span>
                <span className="hidden sm:inline text-gray-600">|</span>
                <span>Password: <span className="text-[#2fb3ff] font-mono">admin123</span></span>
              </div>
            </motion.div>
          </form>

          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <button
              onClick={() => navigate("/")}
              className="text-gray-400 hover:text-white transition-colors text-sm flex items-center justify-center gap-1 group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
              </svg>
              Back to Home
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}