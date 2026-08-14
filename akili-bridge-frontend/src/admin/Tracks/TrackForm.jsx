import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiFetch from "../../api/client";

export default function TrackForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    icon: "📚",
    color: "#2fb3ff",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const iconOptions = ["📚", "🔋", "🧪", "🤖", "🧬", "☀️", "💻", "🔬", "🧫", "⚡", "🌱", "🧠"];
  const colorOptions = ["#2fb3ff", "#8a7ff7", "#ff6b9d", "#ffd93d", "#4CAF50", "#ff6a00", "#e74c3c", "#9b59b6"];

  useEffect(() => {
    if (isEditing) {
      fetchTrack();
    }
  }, [id]);

  const fetchTrack = async () => {
    setLoading(true);
    try {
      const response = await apiFetch(`/tracks/${id}`);
      const data = await response.json();
      setFormData(data.data);
    } catch (error) {
      setError("Failed to load track");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const url = isEditing ? `/tracks/${id}` : "/tracks";
      const method = isEditing ? "PUT" : "POST";
      
      const response = await apiFetch(url, {
        method,
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to save track");
      }

      setSuccess(true);
      setTimeout(() => navigate("/admin/tracks"), 1500);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">
        {isEditing ? "Edit Track" : "Add New Track"}
      </h1>

      {success && (
        <div className="mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400">
          {isEditing ? "Track updated successfully!" : "Track created successfully!"}
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none resize-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Icon</label>
          <div className="flex flex-wrap gap-2">
            {iconOptions.map((icon) => (
              <button
                key={icon}
                type="button"
                onClick={() => setFormData({ ...formData, icon })}
                className={`w-12 h-12 rounded-lg text-2xl transition-all ${
                  formData.icon === icon
                    ? "bg-[#2fb3ff]/20 border-2 border-[#2fb3ff]"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Color</label>
          <div className="flex flex-wrap gap-2">
            {colorOptions.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setFormData({ ...formData, color })}
                className={`w-10 h-10 rounded-full transition-all ${
                  formData.color === color
                    ? "ring-2 ring-offset-2 ring-offset-[#0a1628] ring-white"
                    : "hover:scale-110"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] text-[#0a1628] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#2fb3ff]/30 transition-all disabled:opacity-50"
          >
            {loading ? "Saving..." : isEditing ? "Update Track" : "Create Track"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/tracks")}
            className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}