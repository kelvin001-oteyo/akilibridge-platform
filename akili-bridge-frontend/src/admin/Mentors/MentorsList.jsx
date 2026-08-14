import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import apiFetch from "../../api/client";

export default function MentorsList() {
  const navigate = useNavigate();
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = async () => {
    setLoading(true);
    try {
      const response = await apiFetch("/mentors");
      const data = await response.json();
      setMentors(data.data || []);
    } catch (error) {
      console.error("Error fetching mentors:", error);
      setError("Failed to load mentors");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this mentor?")) return;
    
    try {
      await apiFetch(`/mentors/${id}`, { method: "DELETE" });
      setMentors(mentors.filter(m => m.id !== id));
    } catch (error) {
      setError("Failed to delete mentor");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Mentors</h1>
          <p className="text-gray-400">Manage mentors for the fellowship program</p>
        </div>
        <button
          onClick={() => navigate("/admin/mentors/new")}
          className="px-4 py-2 bg-[#2fb3ff] text-[#0a1628] rounded-lg font-semibold hover:bg-[#8a7ff7] transition-colors"
        >
          + Add Mentor
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-4 border-[#2fb3ff] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : mentors.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <p className="text-4xl mb-4">👨‍🏫</p>
          <p>No mentors found. Add your first mentor!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={mentor.imageUrl || `https://ui-avatars.com/api/?name=${mentor.name}&background=2fb3ff&color=fff&size=64`}
                  alt={mentor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{mentor.name}</h3>
                  <p className="text-sm text-[#2fb3ff]">{mentor.title}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm line-clamp-2">{mentor.bio}</p>
              <div className="flex flex-wrap gap-1 mt-3">
                {mentor.expertise?.slice(0, 3).map((exp, i) => (
                  <span key={i} className="px-2 py-0.5 bg-[#2fb3ff]/10 text-[#2fb3ff] rounded-full text-xs">
                    {exp}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-4 pt-3 border-t border-white/5">
                <button
                  onClick={() => navigate(`/admin/mentors/edit/${mentor.id}`)}
                  className="flex-1 px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-white transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(mentor.id)}
                  className="flex-1 px-3 py-1 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-sm text-red-400 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}