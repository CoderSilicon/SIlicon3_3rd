import { motion } from "framer-motion"; // Import motion for animation
import {
  RiReactjsLine,
  RiNextjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import {
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaSass,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import { DiJava } from "react-icons/di";
import {
  TbBrandCpp,
  TbBrandTypescript,
  TbBrandPython,
  TbSql,
  TbBrandMysql,
} from "react-icons/tb";
import { BiLogoDjango, BiLogoGoLang, BiLogoPostgresql } from "react-icons/bi";

const FourthPage = () => {
  return (
    <>
      <section id="lang" className="py-10"></section>
      <section className="flex flex-col justify-center items-center min-h-screen">
        <section className="px-6 py-6 md:py-16 text-gray-100">
          <div className="flex justify-center items-center flex-col mb-8">
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-6xl font-medium tracking-tight mb-4 josefin-sanss"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Tools
            </motion.h1>
            <motion.div
              className="h-1 w-16 lg:w-20 bg-[#38B2AC]"
              initial={{ width: 0 }}
              whileInView={{ width: "12%" }}
              transition={{ duration: 1 }}
            />
          </div>

          {/* Programming Languages Section */}
          <div className="my-12">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {[
                {
                  Icon: FaHtml5,
                  title: "HTML",
                  experience: "Mastered",
                  color: "text-orange-500",
                },
                {
                  Icon: FaCss3,
                  title: "CSS3",
                  experience: "Mastered",
                  color: "text-purple-500",
                },
                {
                  Icon: FaSass,
                  title: "Sass",
                  experience: "Mastered",
                  color: "text-pink-400",
                },
                {
                  Icon: RiTailwindCssFill,
                  title: "Tailwind",
                  experience: "Mastered",
                  color: "text-cyan-400",
                },
                {
                  Icon: RiJavascriptFill,
                  title: "JavaScript",
                  experience: "Mastered",
                  color: "text-yellow-500",
                },
                {
                  Icon: TbBrandTypescript,
                  title: "TypeScript",
                  experience: "Advance",
                  color: "text-blue-500",
                },
                {
                  Icon: RiReactjsLine,
                  title: "ReactJS",
                  experience: "Advance",
                  color: "text-cyan-400",
                },
                {
                  Icon: FaNodeJs,
                  title: "Node.js",
                  experience: "Advance",
                  color: "text-green-600",
                },
                {
                  Icon: SiExpress,
                  title: "Express.js",
                  experience: "Advance",
                  color: "text-slate-100",
                },
                {
                  Icon: RiNextjsFill,
                  title: "Next.js",
                  experience: "Advance",
                  color: "text-white",
                },
                {
                  Icon: SiMongodb,
                  title: "MongoDB",
                  experience: "Advance",
                  color: "text-green-500",
                },
                {
                  Icon: TbSql,
                  title: "SQL",
                  experience: "Intermediate",
                  color: "text-yellow-700",
                },
                {
                  Icon: BiLogoPostgresql,
                  title: "PostgreSQL",
                  experience: "Intermediate",
                  color: "text-blue-700",
                },
                {
                  Icon: TbBrandMysql,
                  title: "MySQL",
                  experience: "Advance",
                  color: "text-blue-400",
                },
                {
                  Icon: TbBrandPython,
                  title: "Python",
                  experience: "Mastered",
                  color: "text-yellow-400",
                },
                {
                  Icon: BiLogoGoLang,
                  title: "GoLang",
                  experience: "Advance",
                  color: "text-blue-500",
                },
                {
                  Icon: TbBrandCpp,
                  title: "C++",
                  experience: "Advance",
                  color: "text-blue-600",
                },
                {
                  Icon: DiJava,
                  title: "Java",
                  experience: "Intermediate",
                  color: "text-red-600",
                },
                ,
                {
                  Icon: FaDocker,
                  title: "Docker",
                  experience: "Intermediate",
                  color: "text-blue-500",
                },
                {
                  Icon: FaLinux,
                  title: "Linux",
                  experience: "Mastered",
                  color: "text-black-700",
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
      <Icon className={`text-6xl ${color}`} />
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
