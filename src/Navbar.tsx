"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/../public/images/logo.svg";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navVariant = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navElements = [
    { id: 1, title: "Features" },
    { id: 2, title: "Pricing" },
    { id: 3, title: "Resources" },
  ];
  const handleNavClick = (title: string) => {
    const element = document.querySelector(title);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial="hidden"
      animate="show"
      variants={navVariant}
      className="absolute font-poppins top-0 left-0 right-0 flex md:justify-around justify-between px-10 md:px-0 items-center py-9 z-20"
    >
      <div className="flex gap-4 items-center text-white">
        <Image src={logo.src} alt="Logo" width={100} height={100} />
        <ul className="md:flex gap-4 hidden text-gray-400 font-bold">
          {navElements.map((item) => (
            <li
              key={item.id}
              className="hover:text-gray-700 transition-all duration-300 cursor-pointer"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-2 items-center text-gray-400 font-bold">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="md:block hover:bg-[var(--customBlue)] border-2 border-[var(--customBlue)] hover:text-white text-gray-400 px-4 py-2 rounded-full hidden transition-all duration-300 cursor-pointer"
        >
          Login
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="md:block bg-customBlue opacity-50 hover:opacity-100 text-white px-4 py-2 rounded-full hidden transition-all duration-300 cursor-pointer"
        >
          Signup
        </motion.button>
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-gray-800 text-white absolute rounded-xl top-20 left-0 w-full border-slate-200 dark:border-slate-700 py-4"
          >
            {navElements.map((item) => (
              <button
                key={item.title}
                onClick={() => handleNavClick(item.title)}
                className={`block w-full text-left px-4 py-3 text-base font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 `}
              >
                {item.title}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
