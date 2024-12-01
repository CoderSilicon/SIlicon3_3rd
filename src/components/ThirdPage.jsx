import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend Development",
    description: "I can Craft responsive UIs with React and modern CSS",
    icon: "🌐",
    badge: "React",
  },
  {
    title: "Backend Development",
    description: "I can Build scalable APIs with Node.js and Express",
    icon: "🖥️",
    badge: "Node.js",
  },
  {
    title: "UI/UX Design",
    description: "I can Create intuitive interfaces and design systems",
    icon: "🎨",
    badge: "Figma",
  },
  {
    title: "Data Analysis",
    description: "I can Extract insights with Python and visualization",
    icon: "📊",
    badge: "Python",
  },
  {
    title: "Cybersecurity",
    description: "I can Implement secure coding and penetration testing",
    icon: "🔒",
    badge: "Ethical Hacking",
  },
  {
    title: "Java Development",
    description: "I can Build automation apps in Java",
    icon: "☕",
    badge: "Java",
  },
  {
    title: "C++ Development",
    description: "I can Optimize performance for system-level apps",
    icon: "⚙️",
    badge: "C++",
  },
  {
    title: "Python Development",
    description: "I can Develop AI/ML solutions and automation scripts",
    icon: "🐍",
    badge: "Java",
  },
  {
    title: "Graphic & Image Designing ",
    description: "I can Create visuals and editing images for various media",
    icon: "🖌️",
    badge: "Photoshop",
  },
];

const ThirdPage = () => {
  return (
    <section
      className="flex flex-col justify-center items-center min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-950 text-gray-100"
      id="skills"
    >
      <motion.div
        className="w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center items-center flex-col mb-8">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl font-medium tracking-tight mb-4 josefin-sans " // Updated color here
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Skills
          </motion.h1>
          <motion.div
            className="h-1 w-16 lg:w-20 bg-[#38B2AC]"
            initial={{ width: 0 }}
            whileInView={{ width: "12%" }}
            transition={{ duration: 1 }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span
                      className="text-2xl mr-2"
                      role="img"
                      aria-label={skill.title}
                    >
                      {skill.icon}
                    </span>
                    <h2 className="text-xl font-semibold text-gray-100">
                      {skill.title}
                    </h2>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full">
                    {skill.badge}
                  </span>
                </div>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ThirdPage;
