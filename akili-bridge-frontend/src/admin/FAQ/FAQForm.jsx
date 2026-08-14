import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiFetch from "../../api/client";

export default function FAQForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const categories = ["Eligibility", "Process", "Logistics", "After"];

  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: "Eligibility",
    order: 1,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isEditing) {
      fetchFaq();
    }
  }, [id]);

  const fetchFaq = async () => {
    setLoading(true);
    try {
      const response = await apiFetch(`/faq/${id}`);
      const data = await response.json();
      setFormData(data.data);
    } catch (error) {
      setError("Failed to load FAQ");
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
      const url = isEditing ? `/faq/${id}` : "/faq";
      const method = isEditing ? "PUT" : "POST";
      
      const response = await apiFetch(url, {
        method,
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to save FAQ");
      }

      setSuccess(true);
      setTimeout(() => navigate("/admin/faq"), 1500);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">
        {isEditing ? "Edit FAQ" : "Add New FAQ"}
      </h1>

      {success && (
        <div className="mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400">
          {isEditing ? "FAQ updated successfully!" : "FAQ created successfully!"}
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Question *</label>
          <input
            type="text"
            name="question"
            value={formData.question}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Answer *</label>
          <textarea
            name="answer"
            value={formData.answer}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none resize-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Category *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Display Order</label>
          <input
            type="number"
            name="order"
            value={formData.order}
            onChange={handleChange}
            min="1"
            className="w-32 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#2fb3ff] focus:outline-none"
          />
          <p className="text-xs text-gray-500 mt-1">Lower numbers appear first</p>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-gradient-to-r from-[#2fb3ff] to-[#8a7ff7] text-[#0a1628] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#2fb3ff]/30 transition-all disabled:opacity-50"
          >
            {loading ? "Saving..." : isEditing ? "Update FAQ" : "Create FAQ"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/faq")}
            className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}