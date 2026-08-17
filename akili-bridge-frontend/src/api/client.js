const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const apiFetch = async (endpoint, options = {}) => {
  const token =
    localStorage.getItem("access") ||
    localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  // Attach JWT when available
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  // Let the browser set the correct Content-Type for FormData
  if (options.body instanceof FormData) {
    delete headers["Content-Type"];
  }

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(
      `${API_BASE_URL}${endpoint}`,
      config
    );

    // Session expired / unauthorized
    if (response.status === 401) {
      localStorage.removeItem("access");
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      localStorage.removeItem("user");

      window.location.href = "/admin/login";

      throw new Error(
        "Session expired. Please login again."
      );
    }

    return response;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};

export default apiFetch;
