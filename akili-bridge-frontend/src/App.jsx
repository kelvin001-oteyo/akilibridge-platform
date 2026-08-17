import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Program from "./pages/Program";
import FAQ from "./pages/FAQ";
import Apply from "./pages/Apply";

// Admin
import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";

import MentorsList from "./admin/Mentors/MentorsList";
import MentorForm from "./admin/Mentors/MentorForm";

import TracksList from "./admin/Tracks/TracksList";
import TrackForm from "./admin/Tracks/TrackForm";

import FAQList from "./admin/FAQ/FAQList";
import FAQForm from "./admin/FAQ/FAQForm";

// Protected Route
// ProtectedRoute.jsx should now be directly inside src/
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="min-h-screen bg-[#0a1628] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <AnimatePresence mode="wait">
          <Routes>

            {/* =========================
                PUBLIC ROUTES
            ========================== */}

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/program" element={<Program />} />

            <Route path="/faq" element={<FAQ />} />

            <Route path="/apply" element={<Apply />} />


            {/* =========================
                ADMIN AUTH
            ========================== */}

            <Route
              path="/admin/login"
              element={<AdminLogin />}
            />

            <Route
              path="/admin"
              element={
                <Navigate
                  to="/admin/login"
                  replace
                />
              }
            />


            {/* =========================
                ADMIN DASHBOARD
            ========================== */}

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <Dashboard />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />


            {/* =========================
                ADMIN - MENTORS
            ========================== */}

            <Route
              path="/admin/mentors"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <MentorsList />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/mentors/new"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <MentorForm />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/mentors/edit/:id"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <MentorForm />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />


            {/* =========================
                ADMIN - TRACKS
            ========================== */}

            <Route
              path="/admin/tracks"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <TracksList />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/tracks/new"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <TrackForm />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/tracks/edit/:id"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <TrackForm />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />


            {/* =========================
                ADMIN - FAQ
            ========================== */}

            <Route
              path="/admin/faq"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <FAQList />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/faq/new"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <FAQForm />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/faq/edit/:id"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <FAQForm />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />


            {/* =========================
                404
            ========================== */}

            <Route
              path="*"
              element={
                <Navigate
                  to="/"
                  replace
                />
              }
            />

          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
