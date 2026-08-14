import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiFetch from "../../api/client";

export default function MentorForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    bio: "",
    imageUrl: "",
    expertise: [],
  });
  const [expertiseInput, setExpertiseInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isEditing) {
      fetchMentor();
    }
  }, [id]);

  const fetchMentor = async () => {
    setLoading(true);
    try {
      const response = await apiFetch(`/mentors/${id}`);
      const data = await response.json();
      setFormData(data.data);
    } catch (error) {
      setError("Failed to load mentor");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addExpertise = () => {
    const trimmed = expertiseInput.trim();
    if (trimmed && !formData.expertise.includes(trimmed)) {
      setFormData({
        ...formData,
        expertise: [...formData.expertise, trimmed],
      });
      setExpertiseInput("");
    }
  };

  const removeExpertise = (index) => {
    setFormData({
      ...formData,
      expertise: formData.expertise.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const url = isEditing ? `/mentors/${id}` : "/mentors";
      const method = isEditing ? "PUT" : "POST";
      
      const response = await apiFetch(url, {
        method,
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to save mentor");
      }

      setSuccess(true);
      setTimeout(() => navigate("/admin/mentors"), 1500);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">
        {isEditing ? "Edit Mentor" : "Add New Mentor"}
      </h1>

      {success && (
        <div className="mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400">
          {isEditing ? "Mentor updated successfully!" : "Mentor created successfully!"}
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
          <label className="block text-sm font-medium text-gray-300 mb-1">Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Bio *</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none resize-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Image URL</label>
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://ui-avatars.com/api/?name=Name&background=color&color=fff&size=128"
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Expertise</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={expertiseInput}
              onChange={(e) => setExpertiseInput(e.target.value)}
              placeholder="Type and press Enter"
              className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none"
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addExpertise())}
            />
            <button
              type="button"
              onClick={addExpertise}
              className="px-4 py-2 bg-[#2fb3ff] text-[#0a1628] rounded-lg font-semibold hover:bg-[#8a7ff7]"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.expertise.map((exp, index) => (
              <span key={index} className="flex items-center gap-1 px-3 py-1 bg-[#2fb3ff]/20 text-[#2fb3ff] rounded-lg text-sm">
                {exp}
                <button type="button" onClick={() => removeExpertise(index)} className="hover:text-red-400">×</button>
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] text-[#0a1628] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#2fb3ff]/30 transition-all disabled:opacity-50"
          >
            {loading ? "Saving..." : isEditing ? "Update Mentor" : "Create Mentor"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/mentors")}
            className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}