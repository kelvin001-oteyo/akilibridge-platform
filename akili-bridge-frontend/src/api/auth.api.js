import apiFetch from "./client";

export const login = async (email, password) => {
  const response = await apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Login failed");
  }

  const data = await response.json();
  return data.data;
};

export const refreshToken = async (refresh) => {
  const response = await apiFetch("/auth/refresh-token", {
    method: "POST",
    body: JSON.stringify({ refreshToken: refresh }),
  });

  if (!response.ok) {
    throw new Error("Failed to refresh token");
  }

  const data = await response.json();
  return data.data;
};

export const logout = async () => {
  try {
    await apiFetch("/auth/logout", { method: "POST" });
  } catch (error) {
    console.error("Logout error:", error);
  }
  
  localStorage.removeItem("access");
  localStorage.removeItem("token");
  localStorage.removeItem("refresh");
  localStorage.removeItem("user");
};