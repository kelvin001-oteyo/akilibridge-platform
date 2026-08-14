import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { submitApplication } from "../api/applications.api";

export default function Apply() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState({});
  
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    country: "",
    
    // Academic Information
    university: "",
    degree: "",
    yearOfStudy: "",
    gpa: "",
    
    // Availability
    availability: "",
    timezone: "",
    
    // Lab Preferences
    labFirst: "",
    labSecond: "",
    portfolio: "",
    
    // Type
    type: "fellowship",
    
    // Files
    cv: null,
    transcript: null,
    sop: null,
    sampleWork: null,
  });

  const [fileErrors, setFileErrors] = useState({});
  const [uploadProgress, setUploadProgress] = useState({});

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

  const countries = [
    "Rwanda", "Kenya", "Uganda", "Tanzania", "Burundi", 
    "DR Congo", "Ethiopia", "Nigeria", "South Africa", "Other"
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (files) {
      const file = files[0];
      
      // Validate file size (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        setFileErrors({
          ...fileErrors,
          [name]: "File size must be less than 10MB"
        });
        return;
      }
      
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setFileErrors({
          ...fileErrors,
          [name]: "Only PDF and Word documents are allowed"
        });
        return;
      }
      
      setFileErrors({ ...fileErrors, [name]: "" });
      setFormData({ ...formData, [name]: file });
      
      // Simulate upload progress
      setUploadProgress({ ...uploadProgress, [name]: 0 });
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          const current = prev[name] || 0;
          if (current >= 100) {
            clearInterval(interval);
            return prev;
          }
          return { ...prev, [name]: Math.min(current + 10, 100) };
        });
      }, 100);
    } else {
      setFormData({ ...formData, [name]: value });
      setTouched({ ...touched, [name]: true });
    }
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const validateStep = (currentStep) => {
    setError("");
    const errors = [];
    
    if (currentStep === 1) {
      if (!formData.fullName) errors.push("Full name is required");
      if (!formData.email) errors.push("Email is required");
      if (!formData.phone) errors.push("Phone number is required");
      if (!formData.country) errors.push("Country is required");
      
      // Email validation
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.push("Please enter a valid email address");
      }
    }
    
    if (currentStep === 2) {
      if (!formData.university) errors.push("University is required");
      if (!formData.degree) errors.push("Degree program is required");
      if (!formData.yearOfStudy) errors.push("Year of study is required");
      if (!formData.gpa) errors.push("GPA is required");
    }
    
    if (currentStep === 3) {
      if (!formData.availability) errors.push("Availability is required");
      if (!formData.timezone) errors.push("Time zone is required");
      if (!formData.labFirst) errors.push("First lab choice is required");
    }
    
    if (currentStep === 4) {
      if (!formData.cv) errors.push("CV is required");
      if (!formData.transcript) errors.push("Transcript is required");
    }
    
    if (errors.length > 0) {
      setError(errors.join(", "));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(4)) return;
    
    setSubmitting(true);
    setError("");
    
    try {
      const submissionData = new FormData();
      
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== undefined) {
          submissionData.append(key, formData[key]);
        }
      });
      
      await submitApplication(submissionData);
      setSuccess(true);
      setTimeout(() => navigate("/dashboard"), 3000);
    } catch (err) {
      setError(err.message || "Failed to submit application");
    } finally {
      setSubmitting(false);
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#2fb3ff]/20 flex items-center justify-center text-[#2fb3ff] font-bold text-lg">
                1
              </div>
              <h2 className="text-2xl font-bold text-[#2fb3ff]">Personal Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${touched.fullName && !formData.fullName ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-all`}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${touched.email && !formData.email ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-all`}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${touched.phone && !formData.phone ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-all`}
                  placeholder="+250 788 123 456"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Country *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${touched.country && !formData.country ? 'border-red-500' : 'border-white/10'} rounded-xl text-white focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-all`}
                >
                  <option value="">Select your country</option>
                  {countries.map(country => (
                    <option key={country} value={country} className="bg-[#1a2a4a]">{country}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        );
      
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#8a7ff7]/20 flex items-center justify-center text-[#8a7ff7] font-bold text-lg">
                2
              </div>
              <h2 className="text-2xl font-bold text-[#8a7ff7]">Academic Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-1.5">University *</label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${touched.university && !formData.university ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-all`}
                  placeholder="University of Rwanda"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Degree Program *</label>
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${touched.degree && !formData.degree ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-all`}
                  placeholder="BSc Computer Science"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Year of Study *</label>
                <input
                  type="text"
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${touched.yearOfStudy && !formData.yearOfStudy ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-all`}
                  placeholder="3rd Year"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-1.5">GPA (on 4.0 scale) *</label>
                <input
                  type="text"
                  name="gpa"
                  value={formData.gpa}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${touched.gpa && !formData.gpa ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-all`}
                  placeholder="3.5"
                />
              </div>
            </div>
          </motion.div>
        );
      
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#ffd93d]/20 flex items-center justify-center text-[#ffd93d] font-bold text-lg">
                3
              </div>
              <h2 className="text-2xl font-bold text-[#ffd93d]">Availability & Lab Preferences</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Weekly Availability *</label>
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${touched.availability && !formData.availability ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-all`}
                  placeholder="10-15 hours/week"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Time Zone *</label>
                <input
                  type="text"
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${touched.timezone && !formData.timezone ? 'border-red-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-all`}
                  placeholder="CAT (UTC+2)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">First Lab Choice *</label>
                <select
                  name="labFirst"
                  value={formData.labFirst}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${touched.labFirst && !formData.labFirst ? 'border-red-500' : 'border-white/10'} rounded-xl text-white focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-all`}
                >
                  <option value="">Select your first choice</option>
                  {labs.map(lab => (
                    <option key={lab} value={lab} className="bg-[#1a2a4a]">{lab}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Second Lab Choice</label>
                <select
                  name="labSecond"
                  value={formData.labSecond}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-all"
                >
                  <option value="">Select your second choice</option>
                  {labs.map(lab => (
                    <option key={lab} value={lab} className="bg-[#1a2a4a]">{lab}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Portfolio Link (Optional)</label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-all"
                  placeholder="https://github.com/yourusername"
                />
              </div>
            </div>
          </motion.div>
        );
      
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#4CAF50]/20 flex items-center justify-center text-[#4CAF50] font-bold text-lg">
                4
              </div>
              <h2 className="text-2xl font-bold text-[#4CAF50]">Required Documents</h2>
            </div>
            
            <div className="bg-[#4CAF50]/5 border border-[#4CAF50]/20 rounded-xl p-4 mb-6">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <span className="text-[#4CAF50]">📄</span>
                Upload your documents (PDF or Word, max 10MB each)
              </p>
            </div>
            
            <div className="space-y-5">
              {[
                { name: "cv", label: "CV/Resume", required: true },
                { name: "transcript", label: "Academic Transcript", required: true },
                { name: "sop", label: "Statement of Purpose", required: false },
                { name: "sampleWork", label: "Sample Work", required: false }
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    {field.label} {field.required && <span className="text-red-400">*</span>}
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name={field.name}
                      onChange={handleChange}
                      accept=".pdf,.doc,.docx"
                      className={`w-full px-4 py-3 bg-white/5 border ${fileErrors[field.name] ? 'border-red-500' : 'border-white/10'} rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#2fb3ff] file:text-[#0a1628] file:font-semibold hover:file:bg-[#8a7ff7] cursor-pointer transition-all`}
                    />
                    {formData[field.name] && (
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-sm text-[#4CAF50]">✓ {formData[field.name].name}</span>
                        {uploadProgress[field.name] !== undefined && uploadProgress[field.name] < 100 && (
                          <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[#2fb3ff] rounded-full transition-all duration-300"
                              style={{ width: `${uploadProgress[field.name]}%` }}
                            />
                          </div>
                        )}
                      </div>
                    )}
                    {fileErrors[field.name] && (
                      <p className="text-red-400 text-sm mt-1">{fileErrors[field.name]}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  const totalSteps = 4;
  const stepTitles = ["Personal", "Academic", "Lab Preferences", "Documents"];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-full text-xs font-medium tracking-wider uppercase mb-3">
            Apply Now
          </span>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] bg-clip-text text-transparent">
            Join the Fellowship
          </h1>
          <p className="text-gray-300 mt-2">
            Complete your application to join the AkiliBridge STEM Fellowship Program
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2 text-sm text-gray-400">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round((step / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7]"
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            {stepTitles.map((title, index) => (
              <span key={index} className={step > index ? "text-[#2fb3ff]" : ""}>
                {title}
              </span>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 flex items-start gap-3"
            >
              <span className="text-lg">⚠️</span>
              <span>{error}</span>
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 flex items-start gap-3"
            >
              <span className="text-lg">✅</span>
              <span>Application submitted successfully! Redirecting to dashboard...</span>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
            <button
              type="button"
              onClick={prevStep}
              className={`px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all ${step === 1 ? 'invisible' : ''}`}
            >
              ← Previous
            </button>

            {step === totalSteps ? (
              <button
                type="submit"
                disabled={submitting || success}
                className="px-8 py-2.5 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] rounded-xl text-[#0a1628] font-semibold hover:shadow-lg hover:shadow-[#2fb3ff]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#0a1628] border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application →"
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={nextStep}
                className="px-8 py-2.5 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] rounded-xl text-[#0a1628] font-semibold hover:shadow-lg hover:shadow-[#2fb3ff]/30 transition-all"
              >
                Next →
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}