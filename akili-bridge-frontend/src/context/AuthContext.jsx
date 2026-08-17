import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

import {
  login as apiLogin,
  logout as apiLogout,
  refreshToken as apiRefresh,
} from "../api/auth.api";

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

  // --------------------------------------------------
  // RESTORE ADMIN SESSION
  // --------------------------------------------------

  useEffect(() => {
    const storedToken =
      localStorage.getItem("access") ||
      localStorage.getItem("token");

    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to restore admin session:", error);

        localStorage.removeItem("access");
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");

        setToken(null);
        setUser(null);
      }
    }

    setLoading(false);
  }, []);

  // --------------------------------------------------
  // ADMIN LOGIN
  // --------------------------------------------------

  const login = async (email, password) => {
    setError(null);
    setLoading(true);

    try {
      const result = await apiLogin(email, password);

      localStorage.setItem("access", result.accessToken);
      localStorage.setItem("token", result.accessToken);

      if (result.refreshToken) {
        localStorage.setItem("refresh", result.refreshToken);
      }

      if (result.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(result.user)
        );
      }

      setToken(result.accessToken);
      setUser(result.user || null);

      return {
        success: true,
        user: result.user,
      };
    } catch (err) {
      const message = err.message || "Login failed";

      setError(message);

      return {
        success: false,
        error: message,
      };
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // ADMIN LOGOUT
  // --------------------------------------------------

  const logout = async () => {
    try {
      await apiLogout();
    } catch (error) {
      console.error("Logout request failed:", error);
    } finally {
      localStorage.removeItem("access");
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      localStorage.removeItem("user");

      setToken(null);
      setUser(null);
      setError(null);

      navigate("/admin/login");
    }
  };

  // --------------------------------------------------
  // AUTHENTICATION STATUS
  // --------------------------------------------------

  const isAuthenticated = () => {
    return Boolean(token);
  };

  // --------------------------------------------------
  // REFRESH ACCESS TOKEN
  // --------------------------------------------------

  const refreshToken = async () => {
    try {
      const refresh = localStorage.getItem("refresh");

      if (!refresh) {
        throw new Error("No refresh token available");
      }

      const result = await apiRefresh(refresh);

      localStorage.setItem(
        "access",
        result.accessToken
      );

      localStorage.setItem(
        "token",
        result.accessToken
      );

      setToken(result.accessToken);

      return {
        success: true,
      };
    } catch (err) {
      console.error(
        "Failed to refresh token:",
        err
      );

      await logout();

      return {
        success: false,
        error: err.message,
      };
    }
  };

  // --------------------------------------------------
  // UPDATE ADMIN USER
  // --------------------------------------------------

  const updateUser = (userData) => {
    const updatedUser = {
      ...user,
      ...userData,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);
  };

  // --------------------------------------------------
  // CONTEXT VALUE
  // --------------------------------------------------

  const value = {
    user,
    token,
    loading,
    error,

    login,
    logout,

    isAuthenticated,

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
