import React from "react";
import { motion } from "framer-motion";
import MentorCard from "./MentorCard";

export default function MentorGrid() {
  const mentors = [
    {
      id: 1,
      name: "Dr. Alice Mwangi",
      title: "Senior Research Scientist",
      bio: "Expert in AI and machine learning with over 15 years of experience in African research institutions.",
      image: "https://ui-avatars.com/api/?name=Alice+Mwangi&background=2fb3ff&color=fff&size=128",
      expertise: ["Artificial Intelligence", "Machine Learning", "Data Science"]
    },
    {
      id: 2,
      name: "Prof. David Kagame",
      title: "Director of Research",
      bio: "Leading researcher in renewable energy systems and sustainable development technologies.",
      image: "https://ui-avatars.com/api/?name=David+Kagame&background=8a7ff7&color=fff&size=128",
      expertise: ["Renewable Energy", "Sustainable Development", "Energy Storage"]
    },
    {
      id: 3,
      name: "Dr. Grace Uwimana",
      title: "Biotechnology Research Lead",
      bio: "Specializing in biotechnology and health innovations for African healthcare systems.",
      image: "https://ui-avatars.com/api/?name=Grace+Uwimana&background=ff6b9d&color=fff&size=128",
      expertise: ["Biotechnology", "Health Innovations", "Medical Research"]
    },
    {
      id: 4,
      name: "Prof. James Oduor",
      title: "Nanotechnology Expert",
      bio: "Pioneering nanotechnology research for materials science and industrial applications in East Africa.",
      image: "https://ui-avatars.com/api/?name=James+Oduor&background=ffd93d&color=000&size=128",
      expertise: ["Nanotechnology", "Materials Science", "Industrial Research"]
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#1a2a4a]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">
            Our <span className="text-[#8a7ff7]">Mentors</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            World-class researchers and industry experts guiding the next generation of African scientists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </section>
  );
}