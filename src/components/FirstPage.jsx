import React, { useState, useEffect, useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import gsap from "gsap";
import { CSSPlugin } from "gsap/all";
import { motion } from "framer-motion"; // Import Framer Motion
import { firstPageParagraph } from "../Constant";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(CSSPlugin);

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
    <div className="bg-[rgba(17,24,39,0.3)] backdrop-blur-lg rounded-xl p-8 shadow-none border-[1px] border-[rgba(255,255,255,0.1)] lg:mx-40">
      {children}
    </div>
  );

  return (
    <section className="Poppins-regular relative z-10 min-h-screen flex flex-col items-center justify-center text-white lg:mx-0 mx-6 sm:mx-4">
      <div className="p-8 sm:p-16 max-w-full mx-auto">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-8">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="my-7 josefin-sans">
                <span className="px-4 py-2 font-medium bg-[rgba(255,255,255,0.1)] rounded-full my-7">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
                Hello! I'm <span className="text-[#38B2AC] ">Silicon</span>
              </h1>
              <h3 className="font-medium text-[#E2E8F0] sm:text-lg lg:text-xl">
                An Innovative{" "}
                <span className="text-[#38B2AC]">{typeEffect}</span>
              </h3>
            </motion.div>
          </div>

          {/* Glass Box Section */}
          <div className="text-center mb-8 josefin-sans">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <GlassBox>
                <p className="text-xl leading-7 text-[#E2E8F0]">
                  {firstPageParagraph}
                </p>
              </GlassBox>
            </motion.div>
          </div>

          {/* Contact Button */}
          <div className="flex justify-center items-center gap-4 sm:gap-6">
            <a
              href="#contact"
              className="bg-none lg:hover:bg-[#38B2AC] bg-[#319b96] text-[#fff] py-4 px-8 text-xl rounded-2xl flex items-center cursor-pointer gap-1 "
            >
              Contact Me
            </a>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between gap-1 mt-2">
                {[
                  { icon: FaGithub, label: "GitHub", href: "#" },
                  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
                  { icon: FaTwitter, label: "Twitter", href: "#" },
                ].map((social) => (
                  <button
                    key={social.label}
                    aria-label={social.label}
                    href={social.href}
                    className="bg-none border-none lg:text-4xl lg:hover:text-5xl transition-all sm:text-5xl mx-2  text-[#6c757d] cursor-pointer text-2xl lg:hover:text-slate-100 "
                  >
                    <social.icon />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstPage;
