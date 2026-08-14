import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiFetch from "../../api/client";

export default function TracksList() {
  const navigate = useNavigate();
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTracks();
  }, []);

  const fetchTracks = async () => {
    setLoading(true);
    try {
      const response = await apiFetch("/tracks");
      const data = await response.json();
      setTracks(data.data || []);
    } catch (error) {
      setError("Failed to load tracks");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this track?")) return;
    try {
      await apiFetch(`/tracks/${id}`, { method: "DELETE" });
      setTracks(tracks.filter(t => t.id !== id));
    } catch (error) {
      setError("Failed to delete track");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Research Tracks</h1>
          <p className="text-gray-400">Manage research tracks for the fellowship program</p>
        </div>
        <button
          onClick={() => navigate("/admin/tracks/new")}
          className="px-4 py-2 bg-[#2fb3ff] text-[#0a1628] rounded-lg font-semibold hover:bg-[#8a7ff7] transition-colors"
        >
          + Add Track
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
      ) : tracks.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <p className="text-4xl mb-4">📚</p>
          <p>No tracks found. Add your first research track!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tracks.map((track) => (
            <div 
              key={track.id} 
              className="bg-white/5 rounded-xl p-4 border border-white/10"
              style={{ borderTopColor: track.color || "#2fb3ff", borderTopWidth: "4px" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{track.icon || "📚"}</span>
                <h3 className="font-semibold text-white" style={{ color: track.color || "#2fb3ff" }}>
                  {track.name}
                </h3>
              </div>
              <p className="text-gray-400 text-sm">{track.description}</p>
              <div className="flex gap-2 mt-4 pt-3 border-t border-white/5">
                <button
                  onClick={() => navigate(`/admin/tracks/edit/${track.id}`)}
                  className="flex-1 px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-white transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(track.id)}
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