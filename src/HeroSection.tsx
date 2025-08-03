"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import workingImage from "@/../public/images/illustration-working.svg";
import ShortenList from "./Components/ShortenList";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export default function HeroSection() {
  return (
    <>
      <section className="min-h-screen relative flex flex-col-reverse pt-20 lg:pt-0 justify-around gap-4 lg:px-28 lg:flex-row items-center bg-white z-10 w-full">
        <motion.div
          className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg::w-1/2 w-full gap-4"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h3 className="font-bold text-gray-800 font-poppins xl:text-8xl lg:text-7xl text-4xl w-full text-center lg:text-start">
            More than just shorter links
          </h3>
          <p className="text-gray-400 text-center font-poppins xl:w-2/3 w-full lg:text-xl lg:text-start">
            Build Your Brand Recognition and get detailed insights on how your
            links are performing
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-customBlue lg:w-1/4 w-1/2 font-bold opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer py-2 rounded-full"
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.div
          className="lg:w-1/2 lg:p-0 p-5"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image
            src={workingImage.src}
            alt="working image"
            className="w-full"
            width={400}
            height={400}
          />
        </motion.div>
      </section>
      <ShortenList />
    </>
  );
}
