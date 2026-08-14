import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiFetch from "../../api/client";

export default function FAQList() {
  const navigate = useNavigate();
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    setLoading(true);
    try {
      const response = await apiFetch("/faq");
      const data = await response.json();
      setFaqs(data.data || []);
    } catch (error) {
      setError("Failed to load FAQs");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this FAQ?")) return;
    try {
      await apiFetch(`/faq/${id}`, { method: "DELETE" });
      setFaqs(faqs.filter(f => f.id !== id));
    } catch (error) {
      setError("Failed to delete FAQ");
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      "Eligibility": "text-blue-400 bg-blue-500/20",
      "Process": "text-green-400 bg-green-500/20",
      "Logistics": "text-yellow-400 bg-yellow-500/20",
      "After": "text-purple-400 bg-purple-500/20",
    };
    return colors[category] || "text-gray-400 bg-gray-500/20";
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">FAQ Management</h1>
          <p className="text-gray-400">Manage frequently asked questions</p>
        </div>
        <button
          onClick={() => navigate("/admin/faq/new")}
          className="px-4 py-2 bg-[#2fb3ff] text-[#0a1628] rounded-lg font-semibold hover:bg-[#8a7ff7] transition-colors"
        >
          + Add FAQ
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
      ) : faqs.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <p className="text-4xl mb-4">❓</p>
          <p>No FAQs found. Add your first frequently asked question!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(faq.category)}`}>
                      {faq.category}
                    </span>
                    <span className="text-xs text-gray-500">Order: #{faq.order}</span>
                  </div>
                  <h3 className="font-semibold text-white">{faq.question}</h3>
                  <p className="text-gray-400 text-sm mt-1">{faq.answer}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/admin/faq/edit/${faq.id}`)}
                    className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-white transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(faq.id)}
                    className="px-3 py-1 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-sm text-red-400 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}