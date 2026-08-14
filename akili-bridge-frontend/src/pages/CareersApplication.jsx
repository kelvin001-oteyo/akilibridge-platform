import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CareersApplication() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    degree: "",
    year: "",
    country: "",
    gpa: "",
    availability: "",
    timezone: "",
    labFirst: "",
    labSecond: "",
    portfolio: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const labs = [
    "EdTech & Digital Learning Lab",
    "Energy Storage & Battery Technology Lab",
    "Nanotechnology & Advanced Materials Lab",
    "Artificial Intelligence & Data Science Lab",
    "Biotechnology & Health Innovations Lab",
    "Renewable Energy Systems Lab",
    "Civil & Environmental Engineering Lab",
    "ICT & Emerging Technologies Lab"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const required = ["fullName", "email", "phone", "university", "degree", "year", "country", "gpa", "availability", "timezone"];
    required.forEach(field => {
      if (!formData[field]) newErrors[field] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-[#2fb3ff]/20 rounded-full text-sm border border-[#2fb3ff]/30 mb-4">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] bg-clip-text text-transparent">
            Careers Application Form
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Submit your application to join AkiliBridge and become part of Africa's research revolution.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
        >
          {/* Personal Information */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-xl font-semibold text-[#2fb3ff] mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <input
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.fullName ? 'border-red-500' : 'border-white/20'} rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none transition-colors`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none transition-colors`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone *</label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.phone ? 'border-red-500' : 'border-white/20'} rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none transition-colors`}
                  placeholder="+250 788 123 456"
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Country *</label>
                <input
                  name="country"
                  type="text"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.country ? 'border-red-500' : 'border-white/20'} rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none transition-colors`}
                  placeholder="Rwanda"
                />
                {errors.country && <p className="text-red-400 text-sm mt-1">{errors.country}</p>}
              </div>
            </div>
          </motion.div>

          {/* Academic Information */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-xl font-semibold text-[#8a7ff7] mb-4">Academic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">University *</label>
                <input
                  name="university"
                  type="text"
                  value={formData.university}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.university ? 'border-red-500' : 'border-white/20'} rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none transition-colors`}
                  placeholder="University of Rwanda"
                />
                {errors.university && <p className="text-red-400 text-sm mt-1">{errors.university}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Degree Program *</label>
                <input
                  name="degree"
                  type="text"
                  value={formData.degree}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.degree ? 'border-red-500' : 'border-white/20'} rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none transition-colors`}
                  placeholder="BSc Computer Science"
                />
                {errors.degree && <p className="text-red-400 text-sm mt-1">{errors.degree}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Year of Study *</label>
                <input
                  name="year"
                  type="text"
                  value={formData.year}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.year ? 'border-red-500' : 'border-white/20'} rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none transition-colors`}
                  placeholder="3rd Year"
                />
                {errors.year && <p className="text-red-400 text-sm mt-1">{errors.year}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">GPA (4.0 scale) *</label>
                <input
                  name="gpa"
                  type="text"
                  value={formData.gpa}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.gpa ? 'border-red-500' : 'border-white/20'} rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none transition-colors`}
                  placeholder="3.5"
                />
                {errors.gpa && <p className="text-red-400 text-sm mt-1">{errors.gpa}</p>}
              </div>
            </div>
          </motion.div>

          {/* Availability & Lab Preferences */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-xl font-semibold text-[#ffd93d] mb-4">Availability & Lab Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Weekly Availability *</label>
                <input
                  name="availability"
                  type="text"
                  value={formData.availability}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.availability ? 'border-red-500' : 'border-white/20'} rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none transition-colors`}
                  placeholder="10-15 hours/week"
                />
                {errors.availability && <p className="text-red-400 text-sm mt-1">{errors.availability}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Time Zone *</label>
                <input
                  name="timezone"
                  type="text"
                  value={formData.timezone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.timezone ? 'border-red-500' : 'border-white/20'} rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none transition-colors`}
                  placeholder="CAT (UTC+2)"
                />
                {errors.timezone && <p className="text-red-400 text-sm mt-1">{errors.timezone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">First Choice Lab *</label>
                <select
                  name="labFirst"
                  value={formData.labFirst}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none transition-colors"
                >
                  <option value="">Select lab</option>
                  {labs.map(lab => <option key={lab} value={lab}>{lab}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Second Choice Lab</label>
                <select
                  name="labSecond"
                  value={formData.labSecond}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none transition-colors"
                >
                  <option value="">Select lab</option>
                  {labs.map(lab => <option key={lab} value={lab}>{lab}</option>)}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Submit */}
          <motion.div variants={itemVariants}>
            <button
              type="submit"
              disabled={submitting}
              className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] rounded-full text-[#0a1628] font-semibold hover:scale-105 transition-all disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Submit Application →"}
            </button>
            
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400"
                >
                  ✓ Application submitted successfully! We'll be in touch soon.
                </motion.div>
              )}
            </AnimatePresence>
            
            <p className="text-gray-500 text-sm mt-4">
              * Required fields. All documents should be in PDF format. Maximum file size: 10MB per file.
            </p>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
}