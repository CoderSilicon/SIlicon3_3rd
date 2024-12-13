import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion"; // Import Framer Motion
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCodepen,
  FaDev,
  FaStackOverflow,
} from "react-icons/fa";

const FirstPage = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Frontend Developer",
      "Backend Developer",
      "C/C++ Developer",
      "Python Developer",
      "UI/UX Designer",
    ],
    typeSpeed: 80,
    loop: true,
    cursor: "",
    deleteSpeed: 100,
    autoStart: true,
  });

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // GlassBox component
  const GlassBox = ({ children }) => (
    <div className="bg-[rgba(17,24,39,0.3)] backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-none border-[1px] border-[rgba(255,255,255,0.1)] mx-2 sm:mx-4 lg:mx-20">
      {children}
    </div>
  );

  return (
    <section className="Poppins-regular relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-2 sm:px-4 lg:px-0">
      <div className="p-4 sm:p-6 lg:p-12 max-w-screen-lg mx-auto">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-6">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="my-5 josefin-sans">
                <span className="px-3 py-1 font-medium bg-[rgba(255,255,255,0.1)] rounded-full">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Hello! I'm <span className="text-[#38B2AC]">Silicon</span>
              </h1>
              <h3 className="font-medium text-[#E2E8F0] text-base sm:text-lg lg:text-xl">
                An Innovative{" "}
                <span className="text-[#38B2AC]">{typeEffect}</span>
              </h3>
            </motion.div>
          </div>

          {/* Glass Box Section */}
          <div className="text-center mb-6 josefin-sans">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <GlassBox>
                <p className="text-xs sm:text-sm lg:text-base leading-5 sm:leading-6 text-[#E2E8F0]">
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                  }
                </p>
              </GlassBox>
            </motion.div>
          </div>

          {/* Contact Button */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            {[
              // Social icons
              {
                icon: FaGithub,
                label: "GitHub",
                href: "https://github.com/SiliconGit",
              },
              {
                icon: FaTwitter,
                label: "X",
                href: "https://x.com/CoderSilicon",
              },
              {
                icon: FaCodepen,
                label: "CodePen",
                href: "https://codepen.io/codersilicon",
              },
              {
                icon: FaDev,
                label: "Dev Community",
                href: "https://dev.to/codersilicon",
              },
              {
                icon: FaStackOverflow,
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/28206480/codersilicon",
              },
            ].map((social) => (
              <a
                key={social.label}
                aria-label={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:text-3xl lg:text-4xl transition-all text-[#6c757d] hover:text-slate-100"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstPage;
