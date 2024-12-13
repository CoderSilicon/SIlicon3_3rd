import React from "react";
import { motion } from "framer-motion";
import { IoSchool, IoBriefcase, IoRocket } from "react-icons/io5";
import img from "../assets/AvatarImg_2.jpg";
import { secondPageParagraph } from "../Constant";

const SecondPage = () => {
  const skills = [
    { name: "Web Development", level: 95 },
    { name: "Debugging", level: 75 },
    { name: "Problem Solving", level: 89 },
  ];

  const experiences = [
    {
      icon: IoSchool,
      title: "Education",
      description: "Still a Student 😊!",
    },
    {
      icon: IoBriefcase,
      title: "Experience",
      description: "4+ years in Full Stack Development",
    },
    {
      icon: IoRocket,
      title: "Projects",
      description: "5+ successful projects delivered",
    },
  ];

  return (
    <section
      className="flex flex-col justify-center items-center min-h-screen text-gray-200 bg-gradient-to-b from-gray-950 via-gray-800 to-gray-950"
      id="about"
    >
      <div className="container px-6 py-20">
        {/* Section Heading */}
        <motion.div
          className="flex justify-center items-center flex-col mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 className="josefin-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </motion.h1>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-teal-400 to-blue-500"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 1 }}
          ></motion.div>
        </motion.div>

        {/* Main Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Avatar Image */}
            <motion.div
              className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto overflow-hidden rounded-full shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={img}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Quick Info */}
            <motion.div
              className="bg-gray-800/60 p-6 rounded-xl shadow-lg backdrop-blur-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-teal-400">
                Quick Info
              </h2>
              <ul className="space-y-3">
                {experiences.map((exp, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <exp.icon className="text-teal-400 text-2xl" />
                    <div>
                      <p className="font-medium text-lg">{exp.title}</p>
                      <p className="text-gray-300 text-sm">{exp.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Bio Section */}
            <motion.div
              className="bg-gray-800/60 p-6 rounded-xl shadow-lg backdrop-blur-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-teal-400">Bio</h2>
              <p className="leading-relaxed text-gray-300">
                {secondPageParagraph}
              </p>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              className="bg-gray-800/60 p-6 rounded-xl shadow-lg backdrop-blur-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-teal-400">
                Skills
              </h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-teal-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 h-2 rounded">
                      <div
                        className="bg-gradient-to-r from-teal-400 to-blue-500 h-2 rounded"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
