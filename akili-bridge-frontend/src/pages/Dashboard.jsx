import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Mock data
  const applications = [
    { id: 1, full_name: "John Doe", discipline: "Computer Science", status: "pending", created_at: new Date().toISOString() },
    { id: 2, full_name: "Jane Smith", discipline: "Biotechnology", status: "reviewed", created_at: new Date(Date.now() - 86400000 * 5).toISOString() }
  ];

  const posts = [
    { id: 1, title: "Fellowship Program Launch", category: "Announcement", created_at: new Date().toISOString(), excerpt: "We're excited to announce..." },
    { id: 2, title: "Research Methods Workshop", category: "Event", created_at: new Date().toISOString(), excerpt: "Join us for a hands-on workshop..." }
  ];

  const notifications = [
    { id: 1, message: "Your application has been reviewed.", created_at: new Date(Date.now() - 86400000 * 2).toISOString() },
    { id: 2, message: "New research workshop available.", created_at: new Date(Date.now() - 86400000 * 1).toISOString() }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getStatusClass = (status) => {
    const classes = {
      'accepted': 'bg-green-500/20 text-green-400',
      'rejected': 'bg-red-500/20 text-red-400',
      'reviewed': 'bg-yellow-500/20 text-yellow-400',
      'pending': 'bg-blue-500/20 text-blue-400'
    };
    return classes[status] || classes['pending'];
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white p-6 md:p-8">
      {/* Welcome Banner */}
      <motion.div
        className="bg-gradient-to-br from-[#1a2a4a] to-[#0a1628] rounded-2xl p-8 mb-8 border border-white/10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] bg-clip-text text-transparent">
          {user ? `Welcome, ${user.username}` : "Welcome to AkiliBridge Dashboard"}
        </h1>
        <p className="text-gray-300 text-lg">
          {user
            ? "Track your applications, read the latest updates, and stay on top of notifications."
            : "Log in to view your applications and notifications."}
        </p>
        {!user && (
          <button
            onClick={() => navigate("/admin/login")}
            className="mt-4 px-6 py-2 bg-[#2fb3ff] text-[#0a1628] rounded-lg font-semibold hover:bg-[#8a7ff7] transition-colors"
          >
            Login
          </button>
        )}
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Applications Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            My Applications
            {applications.length > 0 && user && (
              <span className="px-2 py-0.5 bg-[#2fb3ff] text-[#0a1628] rounded-full text-xs font-bold">
                {applications.length}
              </span>
            )}
          </h2>

          {user ? (
            loading ? (
              <div className="text-gray-400 text-center py-8">Loading...</div>
            ) : applications.length > 0 ? (
              <ul className="space-y-3">
                {applications.map((application) => (
                  <li key={application.id} className="bg-white/5 rounded-xl p-4">
                    <div className="font-medium text-white">{application.full_name}</div>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="text-gray-400">{application.discipline}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusClass(application.status)}`}>
                        {application.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Submitted: {formatDate(application.created_at)}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400 mb-4">You haven't submitted any applications yet.</p>
                <Link to="/apply" className="inline-block px-4 py-2 bg-[#2fb3ff] text-[#0a1628] rounded-lg font-semibold">
                  Start Your Application →
                </Link>
              </div>
            )
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400">Log in to view your applications.</p>
            </div>
          )}
        </div>

        {/* News Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h2 className="text-xl font-semibold mb-4">Latest News</h2>
          {posts.length > 0 ? (
            <div className="space-y-4">
              {posts.map((post) => (
                <article key={post.id} className="bg-white/5 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-2 text-sm">
                    <span className="px-2 py-0.5 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500">{new Date(post.created_at).toLocaleDateString()}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-1">{post.title}</h3>
                  <p className="text-gray-400 text-sm">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="text-[#2fb3ff] hover:text-[#8a7ff7] text-sm inline-block mt-2">
                    Read article →
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center py-8">No blog posts yet.</p>
          )}
        </div>

        {/* Notifications Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            Notifications
            {notifications.length > 0 && user && (
              <span className="px-2 py-0.5 bg-[#ffd93d] text-[#0a1628] rounded-full text-xs font-bold">
                {notifications.length}
              </span>
            )}
          </h2>

          {user ? (
            notifications.length > 0 ? (
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                    <span className="text-[#ffd93d] text-xl">•</span>
                    <div>
                      <p className="text-gray-300 text-sm">{notification.message}</p>
                      <small className="text-gray-500 text-xs">{formatDate(notification.created_at)}</small>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-center py-8">No notifications yet.</p>
            )
          ) : (
            <p className="text-gray-400 text-center py-8">Log in to see your notifications.</p>
          )}
        </div>
      </div>
    </div>
  );
}