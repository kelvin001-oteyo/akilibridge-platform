import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import apiFetch from "../api/client";

const ITEMS_PER_PAGE = 10;

const STATUS_OPTIONS = ["all", "pending", "reviewed", "accepted", "rejected"];

const TAB_CONFIG = {
  applications: {
    label: "Applications",
    dateField: "created_at",
    searchFields: ["fullName", "email", "country", "discipline", "university"],
    statusField: "status",
    defaultSortBy: "created_at",
    columns: [
      { label: "Name", key: "fullName" },
      { label: "Email", key: "email" },
      { label: "Country", key: "country" },
      { label: "Discipline", key: "discipline" },
      { label: "Status", key: "status" },
      { label: "Submitted", key: "created_at" },
      { label: "Actions", key: "actions" },
    ],
  },
};

const tableRowVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 20 },
  },
  exit: {
    opacity: 0,
    x: 20,
    scale: 0.98,
    transition: { duration: 0.2 },
  },
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchApplications = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await apiFetch("/applications");
      const data = await response.json();
      setApplications(data.data || []);
    } catch (error) {
      console.error("Error fetching applications:", error);
      setError("Failed to load applications");
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const activeConfig = TAB_CONFIG.applications;
  const activeRecords = applications || [];

  // Stats
  const stats = useMemo(() => {
    const total = applications.length;
    const pending = applications.filter((item) => item.status === "pending").length;
    const reviewed = applications.filter((item) => item.status === "reviewed").length;
    const accepted = applications.filter((item) => item.status === "accepted").length;
    const rejected = applications.filter((item) => item.status === "rejected").length;

    return [
      { title: "Total Applications", value: total, color: "from-blue-500 to-blue-600" },
      { title: "Pending", value: pending, color: "from-yellow-500 to-yellow-600" },
      { title: "Reviewed", value: reviewed, color: "from-purple-500 to-purple-600" },
      { title: "Accepted", value: accepted, color: "from-green-500 to-green-600" },
      { title: "Rejected", value: rejected, color: "from-red-500 to-red-600" },
    ];
  }, [applications]);

  const filteredRecords = useMemo(() => {
    return activeRecords
      .filter((record) => {
        const normalizedSearch = searchTerm.toLowerCase();
        const matchesSearch =
          !normalizedSearch ||
          activeConfig.searchFields.some((field) => {
            const value = record[field];
            return value && String(value).toLowerCase().includes(normalizedSearch);
          });

        const matchesStatus =
          statusFilter === "all" || record.status === statusFilter;

        return matchesSearch && matchesStatus;
      })
      .sort((first, second) => compareValues(first, second, sortBy, sortOrder));
  }, [activeRecords, searchTerm, sortBy, sortOrder, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / ITEMS_PER_PAGE));
  const paginatedRecords = filteredRecords.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSort = (columnKey) => {
    if (columnKey === "actions" || columnKey === "status") return;

    if (sortBy === columnKey) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }

    setSortBy(columnKey);
    setSortOrder("asc");
  };

  const handleStatusChange = async (recordId, newStatus) => {
    try {
      const response = await apiFetch(`/applications/${recordId}/status`, {
        method: "PUT",
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error("Failed to update status");

      setApplications((prev) =>
        prev.map((item) =>
          item.id === recordId ? { ...item, status: newStatus } : item
        )
      );

      setSelectedApplication((prev) =>
        prev && prev.id === recordId ? { ...prev, status: newStatus } : prev
      );
    } catch (err) {
      setError("Failed to update status");
      console.error(err);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchApplications();
  };

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this application?")) return;

    try {
      await apiFetch(`/applications/${id}`, { method: "DELETE" });
      setApplications(applications.filter((app) => app.id !== id));
      setSelectedApplication(null);
    } catch (err) {
      setError("Failed to delete application");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white p-6 md:p-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#2fb3ff] opacity-5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#8a7ff7] opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-gray-400 mt-1">
              Welcome back, {user?.username || "Admin"}!
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <motion.button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 text-sm transition-colors disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M23 4v6h-6M1 20v-6h6" />
                <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
              </svg>
              {isRefreshing ? "Refreshing..." : "Refresh"}
            </motion.button>

            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-gray-300 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </motion.div>

            <motion.button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-red-400 text-sm transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Logout
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
        >
          {stats.map((item) => (
            <motion.div
              key={item.title}
              className={`bg-gradient-to-br ${item.color} rounded-2xl p-5 shadow-lg relative overflow-hidden`}
              variants={{
                hidden: { scale: 0.9, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 180 } },
              }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/5 rounded-full" />
              <div className="relative z-10">
                <h3 className="text-sm font-medium text-white/80">{item.title}</h3>
                <p className="text-3xl font-bold">{loading ? "..." : item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 flex items-center justify-between"
            >
              <span>{error}</span>
              <button onClick={() => setError("")} className="text-red-400 hover:text-red-300">
                ×
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Filters Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10 mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-[#2fb3ff] focus:outline-none focus:ring-2 focus:ring-[#2fb3ff]/20 transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  ×
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {STATUS_OPTIONS.map((status) => (
                <motion.button
                  key={status}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    statusFilter === status
                      ? "bg-[#2fb3ff] text-[#0a1628]"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={() => setStatusFilter(status)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Table Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="px-6 py-4 border-b border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <h2 className="text-xl font-semibold">Applications</h2>
              <p className="text-sm text-gray-400">
                {filteredRecords.length} record{filteredRecords.length === 1 ? "" : "s"} match the current view
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>
                Showing {paginatedRecords.length} of {filteredRecords.length}
              </span>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-12 h-12 border-4 border-[#2fb3ff] border-t-transparent rounded-full animate-spin" />
              <p className="mt-4 text-gray-400">Loading applications...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-xl font-semibold mb-2">Could not load data</h3>
              <p className="text-gray-400">{error}</p>
              <button
                onClick={handleRefresh}
                className="mt-4 px-4 py-2 bg-[#2fb3ff] text-[#0a1628] rounded-lg font-semibold hover:bg-[#8a7ff7] transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : paginatedRecords.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="text-4xl mb-4">📭</div>
              <h3 className="text-xl font-semibold mb-2">No applications found</h3>
              <p className="text-gray-400">Try a different search or filter</p>
              {(searchTerm || statusFilter !== "all") && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setStatusFilter("all");
                  }}
                  className="mt-4 px-4 py-2 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-lg hover:bg-[#2fb3ff]/30 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      {activeConfig.columns.map((column) => (
                        <th
                          key={column.key}
                          className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider whitespace-nowrap"
                        >
                          <div className="flex items-center gap-2">
                            {column.label}
                            {column.key !== "actions" && column.key !== "status" && (
                              <motion.button
                                className="text-gray-500 hover:text-white transition-colors"
                                onClick={() => handleSort(column.key)}
                                whileHover={{ scale: 1.1 }}
                              >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <line x1="12" y1="5" x2="12" y2="19" />
                                  <polyline points="5 12 12 5 19 12" />
                                </svg>
                              </motion.button>
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <AnimatePresence>
                      {paginatedRecords.map((record, index) => (
                        <motion.tr
                          key={record.id}
                          variants={tableRowVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                          transition={{ delay: index * 0.03 }}
                          className="border-b border-white/5 last:border-0"
                        >
                          <td className="px-4 py-3 text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] flex items-center justify-center text-xs font-bold">
                                {record.fullName?.charAt(0) || "A"}
                              </div>
                              {record.fullName || "Unknown"}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">{record.email}</td>
                          <td className="px-4 py-3 text-sm">{record.country}</td>
                          <td className="px-4 py-3 text-sm">{record.discipline || "N/A"}</td>
                          <td className="px-4 py-3">
                            <select
                              value={record.status}
                              onChange={(e) => handleStatusChange(record.id, e.target.value)}
                              className={`px-2 py-1 rounded-lg text-sm font-medium bg-white/10 border border-white/10 focus:outline-none focus:border-[#2fb3ff] ${
                                record.status === "accepted"
                                  ? "text-green-400"
                                  : record.status === "rejected"
                                  ? "text-red-400"
                                  : record.status === "reviewed"
                                  ? "text-yellow-400"
                                  : "text-blue-400"
                              }`}
                            >
                              {STATUS_OPTIONS.filter((s) => s !== "all").map((status) => (
                                <option key={status} value={status} className="bg-[#1a2a4a] text-white">
                                  {status.charAt(0).toUpperCase() + status.slice(1)}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="px-4 py-3 text-sm">{formatDate(record.created_at)}</td>
                          <td className="px-4 py-3">
                            <div className="flex gap-2">
                              <motion.button
                                className="px-3 py-1.5 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-lg text-sm hover:bg-[#2fb3ff]/30 transition-colors"
                                onClick={() => setSelectedApplication({ ...record })}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                View
                              </motion.button>
                              <motion.button
                                className="px-3 py-1.5 bg-red-500/20 text-red-400 rounded-lg text-sm hover:bg-red-500/30 transition-colors"
                                onClick={() => handleDelete(record.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                Delete
                              </motion.button>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>

              {totalPages > 1 && (
                <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-4 border-t border-white/10">
                  <motion.button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg bg-white/5 text-sm disabled:opacity-50 hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Previous
                  </motion.button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <motion.button
                      key={page}
                      className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                        currentPage === page
                          ? "bg-[#2fb3ff] text-[#0a1628]"
                          : "bg-white/5 hover:bg-white/10"
                      }`}
                      onClick={() => setCurrentPage(page)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {page}
                    </motion.button>
                  ))}
                  <motion.button
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg bg-white/5 text-sm disabled:opacity-50 hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Next
                  </motion.button>
                </div>
              )}
            </>
          )}
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedApplication && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedApplication(null)}
          >
            <motion.div
              className="bg-[#1a2a4a] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-[#1a2a4a] z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] flex items-center justify-center text-xl font-bold">
                    {selectedApplication.fullName?.charAt(0) || "A"}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{selectedApplication.fullName || "Unknown"}</h2>
                    <p className="text-sm text-gray-400">{selectedApplication.email}</p>
                  </div>
                </div>
                <motion.button
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-xl transition-colors"
                  onClick={() => setSelectedApplication(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: "Full Name", value: selectedApplication.fullName },
                    { label: "Email", value: selectedApplication.email },
                    { label: "Phone", value: selectedApplication.phone || "-" },
                    { label: "Country", value: selectedApplication.country },
                    { label: "University", value: selectedApplication.university || "-" },
                    { label: "Discipline", value: selectedApplication.discipline || "-" },
                    { label: "Degree", value: selectedApplication.degree || "-" },
                    { label: "Year of Study", value: selectedApplication.yearOfStudy || "-" },
                    { label: "GPA", value: selectedApplication.gpa || "-" },
                    { label: "Availability", value: selectedApplication.availability || "-" },
                    { label: "Time Zone", value: selectedApplication.timezone || "-" },
                    { label: "Status", value: selectedApplication.status || "Pending" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/5 rounded-lg p-3">
                      <p className="text-xs text-gray-400">{item.label}</p>
                      <p className="text-white font-medium">{item.value || "-"}</p>
                    </div>
                  ))}
                </div>

                {selectedApplication.portfolio && (
                  <div className="mt-4 bg-white/5 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-1">Portfolio</p>
                    <a
                      href={selectedApplication.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#2fb3ff] hover:underline break-all"
                    >
                      {selectedApplication.portfolio}
                    </a>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap justify-end gap-3 p-6 border-t border-white/10 sticky bottom-0 bg-[#1a2a4a]">
                <motion.button
                  className="px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                  onClick={() => setSelectedApplication(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
                <motion.button
                  className="px-6 py-2 rounded-lg bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 transition-colors"
                  onClick={() => {
                    handleStatusChange(selectedApplication.id, "reviewed");
                    setSelectedApplication(null);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Mark Reviewed
                </motion.button>
                <motion.button
                  className="px-6 py-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 text-green-400 transition-colors"
                  onClick={() => {
                    handleStatusChange(selectedApplication.id, "accepted");
                    setSelectedApplication(null);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Accept
                </motion.button>
                <motion.button
                  className="px-6 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 transition-colors"
                  onClick={() => {
                    handleStatusChange(selectedApplication.id, "rejected");
                    setSelectedApplication(null);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reject
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function formatDate(value) {
  if (!value) return "-";
  return new Date(value).toLocaleDateString();
}

function compareValues(first, second, sortBy, sortOrder) {
  const firstValue = normalizeSortValue(first, sortBy);
  const secondValue = normalizeSortValue(second, sortBy);

  if (firstValue < secondValue) return sortOrder === "asc" ? -1 : 1;
  if (firstValue > secondValue) return sortOrder === "asc" ? 1 : -1;
  return 0;
}

function normalizeSortValue(record, sortBy) {
  if (sortBy === "fullName") return (record.fullName || "").toLowerCase();
  if (sortBy.includes("created_at") || sortBy.includes("submitted_at")) {
    return new Date(record[sortBy] || 0).getTime();
  }
  return String(record[sortBy] || "").toLowerCase();
}