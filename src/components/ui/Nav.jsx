"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skils", href: "#skills" },
    { name: "Languages", href: "#lang" },
    { name: "Projects", href: "#proj" },
  ];

  const iconVariants = {
    open: { rotate: 90, scale: 1 },
    closed: { rotate: 0, scale: 1 },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:py-6 josefin-slab">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center backdrop-blur-lg bg-black/30 rounded-l-3xl rounded-r-3xl px-6 py-3 shadow-lg border border-white/10">
          <a
            href="/"
            className="text-2xl font-bold text-white tracking-tight hover:text-primary transition-colors"
          >
            Silicon
          </a>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 font-semibold josefin-sans"
              >
                {item.name}
              </a>
            ))}
          </div>

          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            initial="closed"
            animate={menuOpen ? "open" : "closed"}
            variants={iconVariants}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed inset-x-4 top-20 bg-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block text-lg text-white/80 hover:text-white py-3 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
