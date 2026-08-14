import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import apiFetch from "../api/client";

const ITEMS_PER_PAGE = 10;

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [stats, setStats] = useState({
    fellowship: 0,
    undergraduate: 0,
    newsletter: 0,
    pending: 0
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      // Fetch real data from backend
      const [fellowshipRes, undergraduateRes, newsletterRes] = await Promise.all([
        apiFetch("/applications?type=fellowship"),
        apiFetch("/applications?type=undergraduate"),
        apiFetch("/newsletter"),
      ]);

      const fellowshipData = await fellowshipRes.json();
      const undergraduateData = await undergraduateRes.json();
      const newsletterData = await newsletterRes.json();

      const fellowshipList = fellowshipData.data || [];
      const undergraduateList = undergraduateData.data || [];
      const newsletterList = newsletterData.data || [];

      const pendingCount = 
        fellowshipList.filter(a => a.status === "pending").length +
        undergraduateList.filter(a => a.status === "pending").length;

      setStats({
        fellowship: fellowshipList.length,
        undergraduate: undergraduateList.length,
        newsletter: newsletterList.length,
        pending: pendingCount
      });

      setApplications([...fellowshipList, ...undergraduateList]);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { title: "Fellowship", value: stats.fellowship, color: "from-blue-500 to-blue-600", icon: "FG" },
    { title: "Undergraduate", value: stats.undergraduate, color: "from-green-500 to-green-600", icon: "UG" },
    { title: "Newsletter", value: stats.newsletter, color: "from-gray-500 to-gray-600", icon: "NL" },
    { title: "Pending Reviews", value: stats.pending, color: "from-yellow-500 to-yellow-600", icon: "RV" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white p-6 md:p-8 relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-gray-400 mt-1">
            Welcome back, {user?.username || "Admin"}!
          </p>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            onClick={fetchDashboardData}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 text-sm transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 4v6h-6M1 20v-6h6" />
              <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
            </svg>
            Refresh
          </motion.button>
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
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {statCards.map((item) => (
          <div
            key={item.title}
            className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-lg relative overflow-hidden`}
          >
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/5 rounded-full"></div>
            <div className="relative z-10">
              <div className="text-2xl font-bold mb-1">{item.icon}</div>
              <h3 className="text-sm font-medium text-white/80">{item.title}</h3>
              <p className="text-3xl font-bold">{loading ? "..." : item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400">
          {error}
        </div>
      )}

      {/* Table */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
        <div className="px-6 py-4 border-b border-white/10">
          <h2 className="text-xl font-semibold">Recent Applications</h2>
          <p className="text-sm text-gray-400">
            {applications.length} applications total
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-12 h-12 border-4 border-[#2fb3ff] border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-400">Loading...</p>
          </div>
        ) : applications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-4xl mb-4">📭</div>
            <h3 className="text-xl font-semibold mb-2">No applications yet</h3>
            <p className="text-gray-400">Applications will appear here once submitted.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.slice(0, 10).map((app) => (
                  <tr key={app.id} className="border-b border-white/5 last:border-0 hover:bg-white/5">
                    <td className="px-4 py-3 text-sm">{app.fullName}</td>
                    <td className="px-4 py-3 text-sm">{app.email}</td>
                    <td className="px-4 py-3 text-sm capitalize">{app.type}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        app.status === 'accepted' ? 'bg-green-500/20 text-green-400' :
                        app.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                        app.status === 'reviewed' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {app.status?.toUpperCase() || "PENDING"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}