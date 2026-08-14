import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login as apiLogin, logout as apiLogout, refreshToken as apiRefresh } from "../api/auth.api";

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("access") || localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user data:", e);
        logout();
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setError(null);
    setLoading(true);

    try {
      const result = await apiLogin(email, password);
      
      localStorage.setItem("access", result.accessToken);
      localStorage.setItem("token", result.accessToken);
      localStorage.setItem("refresh", result.refreshToken);
      localStorage.setItem("user", JSON.stringify(result.user));

      setToken(result.accessToken);
      setUser(result.user);

      return { success: true, user: result.user };
    } catch (err) {
      setError(err.message || "Login failed");
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await apiLogout();
    setToken(null);
    setUser(null);
    navigate("/admin/login");
  };

  const isAuthenticated = () => {
    return !!token && !!user;
  };

  const isAdmin = () => {
    return user?.role === "admin";
  };

  const getUserRole = () => {
    return user?.role || null;
  };

  const refreshToken = async () => {
    try {
      const refresh = localStorage.getItem("refresh");
      if (!refresh) {
        throw new Error("No refresh token available");
      }

      const result = await apiRefresh(refresh);
      
      localStorage.setItem("access", result.accessToken);
      localStorage.setItem("token", result.accessToken);
      setToken(result.accessToken);

      return { success: true };
    } catch (err) {
      console.error("Failed to refresh token:", err);
      logout();
      return { success: false, error: err.message };
    }
  };

  const updateUser = (userData) => {
    const updatedUser = { ...user, ...userData };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const value = {
    user,
    token,
    loading,
    error,
    login,
    logout,
    isAuthenticated,
    isAdmin,
    getUserRole,
    refreshToken,
    updateUser,
    setError,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;