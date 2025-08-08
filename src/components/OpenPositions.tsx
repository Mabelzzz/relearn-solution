import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock4, UsersRound } from 'lucide-react';

const positions = [
  {
    title: "Senior Full-Stack Developer",
    location: "Hybrid",
    type: "Full time",
    description:
      "Lead end-to-end web development across React, Node.js, and cloud infrastructure. Collaborate cross-functionally to ship scalable platforms that power education at scale.",
    qualifications: [
      "3+ years with React & Node.js",
      "Experience with REST APIs & DBs",
      "Git, Docker, and CI/CD familiarity",
      "Able to lead code reviews & sprints",
    ],
    link: "/positions/senior-full-stack-developer",
  },
  {
    title: "Product Designer",
    location: "Remote",
    type: "Full time",
    description:
      "Design intuitive, scalable learning experiences across web and mobile. Turn user insights into clean, accessible, and elegant UI flows.",
    qualifications: [
      "2+ years in UX/UI design",
      "Strong portfolio (web/mobile)",
      "Skilled in Figma & prototyping",
      "Understands user research & flows",
    ],
    link: "/positions/product-designer",
  },
  {
    title: "Content Creator",
    location: "Onsite",
    type: "Full time",
    description:
      "Create engaging content across formats—articles, social media, scripts—for learners, tech audiences, and partners.",
    qualifications: [
      "2+ years in content writing or media",
      "Skilled in short- & long-form content",
      "Understands tech or education topics",
      "Comfortable with fast-paced campaigns",
    ],
    link: "/positions/content-creator",
  },
];

export default function OpenPositions() {
  return (
    <section className="bg-white py-12 px-6 md:px-24 w-full md:w-[75%] mx-auto">
      <h2 className="text-4xl font-bold text-center mb-2">
        <span className="text-gray-800">Open</span>{" "}
        <span className="text-primary">Positions</span>
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Find your next opportunity to make a meaningful impact
      </p>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {['View all', 'Development', 'Design', 'Operation', 'Marketing', 'Management'].map((category) => (
          <button
            key={category}
            className={`px-4 py-1.5 border rounded-md text-sm font-medium ${
              category === 'View all' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Positions */}
      <div className="space-y-6">
        {positions.map((pos) => (
          <div key={pos.title} className="border p-6 rounded-xl shadow-sm bg-white flex flex-col">
            {/* Left: title, icons & description */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-4">
                {pos.title}
                <span className="inline-flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 text-primary mr-1" />
                  {pos.location}
                </span>
                <span className="inline-flex items-center text-gray-600 text-sm">
                  <Clock4 className="h-4 w-4 text-primary mr-1" />
                  {pos.type}
                </span>
              </h3>
              <p className="text-gray-700 mt-3">{pos.description}</p>
            </div>

            {/* Middle: qualifications - now beneath the left block */}
            <div className="flex justify-between items-start mt-2">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-600 text-sm mt-6">
                {pos.qualifications.map((q, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>

            {/* Right: View Details button */}
              <div className="mt-6">
                <Link
                  to={pos.link}
                  className="bg-[#1B8ADC] text-white text-sm px-4 py-2 rounded-md font-medium hover:bg-primary-dark transition"
                  >
                  View Details →
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="mt-12 bg-primary text-center py-10 px-6 rounded-xl">
        <h4 className="text-2xl font-semibold text-white mb-4">Don't See the Perfect Role?</h4>
        <p className="text-white mb-4">
          We’re always looking for talented individuals who share our passion for education and innovation.
          Send us your resume and let’s start a conversation.
        </p>
        <Link
          to="/get-in-touch"
          className="inline-block bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-accent-dark transition"
        >
          <div className="flex items-center space-x-3">
            <UsersRound className="h-6 w-6 text-white" />
            <p>Get in Touch</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
