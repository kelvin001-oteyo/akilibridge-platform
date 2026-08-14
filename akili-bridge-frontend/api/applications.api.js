import apiFetch from "./client";

// Submit a new application
const submitApplication = async (formData) => {
  try {
    const response = await apiFetch("/applications/submit", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "Failed to submit application");
    }

    return await response.json();
  } catch (error) {
    console.error("Submit application error:", error);
    throw error;
  }
};

// Get all applications (Admin)
const getApplications = async (params = {}) => {
  try {
    const query = new URLSearchParams(params).toString();
    const response = await apiFetch(`/applications?${query}`);
    if (!response.ok) {
      throw new Error("Failed to fetch applications");
    }
    return await response.json();
  } catch (error) {
    console.error("Get applications error:", error);
    throw error;
  }
};

// Get application stats (Admin)
const getApplicationStats = async () => {
  try {
    const response = await apiFetch("/applications/stats");
    if (!response.ok) {
      throw new Error("Failed to fetch stats");
    }
    return await response.json();
  } catch (error) {
    console.error("Get stats error:", error);
    throw error;
  }
};

// Get single application by ID (Admin)
const getApplicationById = async (id) => {
  try {
    const response = await apiFetch(`/applications/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch application");
    }
    return await response.json();
  } catch (error) {
    console.error("Get application error:", error);
    throw error;
  }
};

// Update application status (Admin)
const updateApplicationStatus = async (id, data) => {
  try {
    const response = await apiFetch(`/applications/${id}/status`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "Failed to update status");
    }
    return await response.json();
  } catch (error) {
    console.error("Update status error:", error);
    throw error;
  }
};

// Delete application (Admin)
const deleteApplication = async (id) => {
  try {
    const response = await apiFetch(`/applications/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete application");
    }
    return await response.json();
  } catch (error) {
    console.error("Delete application error:", error);
    throw error;
  }
};

// Export all functions
export {
  submitApplication,
  getApplications,
  getApplicationStats,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication,
};