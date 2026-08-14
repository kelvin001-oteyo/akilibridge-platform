import React from "react";
import { motion } from "framer-motion";
import TrackCard from "./TrackCard";

export default function ResearchTracks() {
  const tracks = [
    {
      id: 1,
      name: "EdTech & Digital Learning",
      description: "Research on innovative educational technologies and digital learning solutions for African classrooms.",
      icon: "📚",
      color: "#2fb3ff"
    },
    {
      id: 2,
      name: "Energy Storage & Battery Technology",
      description: "Developing sustainable energy storage solutions and battery technologies for off-grid communities.",
      icon: "🔋",
      color: "#ffd93d"
    },
    {
      id: 3,
      name: "Nanotechnology & Advanced Materials",
      description: "Exploring nanomaterials and advanced materials for applications in medicine, electronics, and manufacturing.",
      icon: "🧪",
      color: "#ff6b9d"
    },
    {
      id: 4,
      name: "Artificial Intelligence & Data Science",
      description: "Building AI solutions and data science applications to address African challenges.",
      icon: "🤖",
      color: "#8a7ff7"
    },
    {
      id: 5,
      name: "Biotechnology & Health Innovations",
      description: "Advancing biotechnology research for disease prevention and healthcare delivery in Africa.",
      icon: "🧬",
      color: "#4CAF50"
    },
    {
      id: 6,
      name: "Renewable Energy Systems",
      description: "Designing and optimizing renewable energy systems for sustainable development.",
      icon: "☀️",
      color: "#ff6a00"
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#1a2a4a]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">
            Research <span className="text-[#2fb3ff]">Tracks</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from six cutting-edge research tracks designed to address Africa's most pressing challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </section>
  );
}