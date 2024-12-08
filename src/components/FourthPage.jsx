import { motion } from "framer-motion"; // Import motion for animation
import React from 'react';

const FourthPage = () => {
  return (
    <>
      <section id="lang" className="py-10"></section>
      <section className="flex flex-col justify-center items-center min-h-screen">
        <section className="px-6 py-6 md:py-16 text-gray-100">
          <div className="flex justify-center items-center flex-col mb-8">
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-6xl font-medium tracking-tight mb-4 josefin-sans "
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Languages
            </motion.h1>
            <motion.div
              className="h-1 w-16 lg:w-20 bg-[#38B2AC]"
              initial={{ width: 0 }}
              whileInView={{ width: "12%" }}
              transition={{ duration: 1 }}
            />
          </div>

          {/* Spoken Languages Section */}
          <div className="my-12">
            <h2 className="text-2xl font-semibold text-[#38B2AC] monsterrat mb-6 text-center">
              Spoken Languages
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {[ 
                {
                  language: "English",
                  demo: "Hello! How are you?",
                  fluency: "Fluent",
                },
                {
                  language: "Hindi",
                  demo: "नमस्ते! आप कैसे हैं?",
                  fluency: "Fluent",
                },
                {
                  language: "Bhojpuri",
                  demo: "प्रणाम! रउवा कइसन बानी?",
                  fluency: "Fluent",
                },
                {
                  language: "Bengali",
                  demo: "নমস্কার! আপনি কেমন আছেন?",
                  fluency: "Native",
                },
                {
                  language: "Odia",
                  demo: "ନମସ୍କାର! ଆପଣ କେମିତି ଅଛନ୍ତି?",
                  fluency: "Intermediate",
                },
                {
                  language: "Telugu",
                  demo: "నమస్కారం! మీరు ఎలా ఉన్నారు?",
                  fluency: "Basic",
                },
              ].map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <LanguageCard
                    language={lang.language}
                    demo={lang.demo}
                    fluency={lang.fluency}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Programming Languages Section */}
          <div className="my-12">
            <h2 className="text-2xl font-semibold text-[#38B2AC] monsterrat mb-6 text-center">
              Programming Languages & Tools
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {[ 
                {
                  Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.87-3.13-7-7-7zM9 12H7V7h2v5zm8-5v5h-2V7h2zM9 17H7v-2h2v2zm8-2v2h-2v-2h2zM9 14H7v-2h2v2zm8-2v2h-2v-2h2zM9 19H7v-2h2v2zm8-2v2h-2v-2h2z"></path></svg>,
                  title: "HTML",
                  experience: "Mastered",
                  color: "text-orange-500",
                },
                {
                  Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3v18h14V3H5zm12 16h-5v-5h5v5zm-7-5v5H7v-5h3zm4 0v5h-3v-5h3zm-4-5v5H7V9h3zm4 0v5h-3V9h3z"></path></svg>,
                  title: "CSS3",
                  experience: "Mastered",
                  color: "text-purple-500",
                },
                {
                  Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M1 1v22h22V1H1zm12 17H7v-3h6v3zm-3-6H7v-3h3v3zm6 6h-5v-3h5v3zm-3-6h-3v-3h3v3zm5-9v20H4V3h16zM7 15h6v-3H7v3zm3-6h3v3h-3V9zm5 6h-3v-3h3v3z"></path></svg>,
                  title: "Sass",
                  experience: "Mastered",
                  color: "text-pink-400",
                },
                {
                  Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M2 5h4v14H2V5zm7 0h4v14H9V5zm7 0h4v14h-4V5z"></path></svg>,
                  title: "Tailwind",
                  experience: "Mastered",
                  color: "text-cyan-400",
                },
                {
                  Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>,
                  title: "JavaScript",
                  experience: "Mastered",
                  color: "text-yellow-500",
                },
                {
                  Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 4H5v16h14V4h-4v6h-6V4zm3 14h-4v-2h4v2zm-4-4h4v2h-4v-2z"></path></svg>,
                  title: "TypeScript",
                  experience: "Intermediate",
                  color: "text-blue-500",
                },
                {
                  Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 2v20h18V2H3zm16 18H5V4h14v16zm-7-8h2v6h-2v-6zm4 0h2v6h-2v-6z"></path></svg>,
                  title: "ReactJS",
                  experience: "Advance",
                  color: "text-cyan-400",
                },
                {
                  Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>,
                  title: "Next.js",
                  experience: "Intermediate",
                  color: "text-white",
                },
                {
                  Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 5v14h14V5H5zm12 12h-5v-5h5v5zm-7-5v5H7v-5h3zm4 0v5h-3v-5h3zm-4-5v5H7V5h3zm4 0v5h-3V5h3z"></path></svg>,
                  title: "C++",
                  experience: "Advance",
                  color: "text-blue-600",
                },
                {
                  Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm1 17h-2v-2h2v2zm0-6h-2V7h2v6z"></path></svg>,
                  title: "Python",
                  experience: "Mastered",
                  color: "text-yellow-400",
                },
                {
                  Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm-1-5v-4h2v4h-2zm3-7h-2v6h2V10z"></path></svg>,
                  title: "SQL",
                  experience: "Intermediate",
                  color: "text-yellow-700",
                },
                {
                  Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13h-3v-3h3v3zm-4-7v2h-3V8h3z"></path></svg>,
                  title: "Node.js",
                  experience: "Advance",
                  color: "text-green-600",
                },
                {
                  Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm-1-5v-4h2v4h-2zm3-7h-2v6h2V10z"></path></svg>,
                  title: "MongoDB",
                  experience: "Intermediate",
                  color: "text-green-500",
                },
                {
                  Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5 17h-4v-4h4v4zm-7-7V7h-4v4h4z"></path></svg>,
                  title: "Java",
                  experience: "Intermediate",
                  color: "text-red-600",
                },
                {
                  Icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm-1-5v-4h2v4h-2zm3-7h-2v6h2V10z"></path></svg>,
                  title: "Django",
                  experience: "Intermediate",
                  color: "text-green-700",
                },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <SkillCard
                    Icon={skill.Icon}
                    title={skill.title}
                    experience={skill.experience}
                    color={skill.color}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

// Reusable Component for Programming Skill Cards
const SkillCard = ({ Icon, title, experience, color }) => {
  return (
    <div className="rounded-2xl shadow-md shadow-gray-700 p-6 bg-gray-800 text-center w-40 flex flex-col justify-center items-center poppins-regular">
      {Icon}
      <h3 className="text-xl font-bold mt-4 text-gray-100">{title}</h3>
      <p className="text-sm text-gray-400 mt-2">{experience}</p>
    </div>
  );
};

// Reusable Component for Spoken Language Cards
const LanguageCard = ({ language, demo, fluency }) => {
  return (
    <div className="rounded-2xl shadow-md shadow-gray-700 p-6 bg-gray-800 text-center w-60 flex flex-col justify-center items-center poppins-regular">
      <h3 className="text-xl font-bold text-[#38B2AC]">{language}</h3>
      <p className="italic text-gray-300 mt-4">{`"${demo}"`}</p>
      <p className="text-sm text-gray-400 mt-2">Fluency: {fluency}</p>
    </div>
  );
};

export default FourthPage;
