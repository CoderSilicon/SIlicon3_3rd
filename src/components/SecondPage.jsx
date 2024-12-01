import React from "react";
import { motion } from "framer-motion";
import { IoBook, IoSchool, IoBriefcase, IoRocket } from "react-icons/io5";
import img from "../assets/AvatarImg_2.jpg";
import { secondPageParagraph } from "../Constant";
const SecondPage = () => {
  const skills = [
    { name: "Web Development", level: 95 },
    { name: "Debugging", level: 75 },
    { name: "ProblemSolving", level: 89 },
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
      className="flex flex-col justify-center items-center min-h-screen  text-white"
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
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="josefin-sans text-3xl sm:text-4xl lg:text-6xl font-medium tracking-tight mb-4"
          >
            About Me
          </motion.h1>
          <motion.div
            className="h-1 w-16 lg:w-20 bg-[#38B2AC]"
            initial={{ width: 0 }}
            whileInView={{ width: "12%" }}
            transition={{ duration: 1 }}
          ></motion.div>
        </motion.div>

        {/* Main Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Avatar Image (Replaced Next.js Image with React img tag) */}
            <motion.div
              className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={img}
                alt="Profile"
                className="w-full h-full object-cover rounded-3xl shadow-2xl  shadow-teal-400/20"
              />
            </motion.div>

            {/* Quick Info */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Quick Info</h2>
              <ul className="space-y-2">
                {experiences.map((exp, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <exp.icon className="text-teal-400 text-xl" />
                    <span className="font-medium">{exp.title}:</span>
                    <span>{exp.description}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Bio Section */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Bio</h2>
              <p className="text-gray-300 leading-relaxed">
                {secondPageParagraph}
              </p>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-600 h-2 rounded">
                      <div
                        className="bg-teal-400 h-2 rounded"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
