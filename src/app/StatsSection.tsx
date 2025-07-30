"use client";
import { motion } from "framer-motion";
import React from "react";

export default function StatsSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  return (
    <section className="mb-20  pt-20 lg:pt-0 justify-center gap-4 lg:px-28 flex z-10 w-full">
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        {" "}
        <h3 className="font-poppins text-center text-4xl text-black font-bold">
          Advanced Statistics
        </h3>
        <p className="text-center text-gray-400 w-1/3">
          Track How Your Links are performing acroos the web with our advanced
          statistics dashboard
        </p>
      </div>
    </section>
  );
}
