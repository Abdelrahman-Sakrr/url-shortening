"use client";
import { motion } from "framer-motion";
import React from "react";
import StatsCard from "./StatsCard";
import stat1 from "@/../public/images/icon-brand-recognition.svg";
import stat2 from "@/../public/images/icon-fully-customizable.svg";
import stat3 from "@/../public/images/icon-detailed-records.svg";
import Image from "next/image";
import bgBoostDesktop from "@/../public/images/bg-boost-desktop.svg";
import bgBoostMobile from "@/../public/images/bg-boost-mobile.svg";

export default function StatsSection() {
  const statsInfo = [
    {
      id: 1,
      image: stat1,
      title: "Brand Recognition",
      desc: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
    },
    {
      id: 2,
      image: stat2,
      title: "Detailed Records",
      desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      id: 3,
      image: stat3,
      title: "Fully Customizable",
      desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <>
      <section className="mb-20 pt-20 lg:pt-0 justify-center gap-4 lg:px-28 flex flex-col z-10 w-full">
        <div className="flex flex-col items-center justify-center mb-20 gap-4 w-full">
          <motion.h3
            className="font-poppins text-center text-4xl text-black font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Advanced Statistics
          </motion.h3>
          <motion.p
            className="text-center text-gray-400 lg:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 , delay:1 }}
          className="flex lg:flex-row flex-col relative items-center lg:justify-between gap-5"
        >
          {statsInfo.map((item) => (
            <StatsCard key={item.id} item={item} />
          ))}

          <div className="absolute w-4 h-4/5 top-0 left-1/2 transform -translate-x-1/2 lg:translate-0 lg:top-1/2 lg:left-0 lg:w-9/12 right-0 lg:h-3 bg-customBlue z-0" />
        </motion.div>
      </section>

      <div className="bg-purple flex relative justify-center flex-col items-center text-white w-full py-8">
        <p className="text-white z-10 lg:text-4xl mb-5 font-bold font-poppins">
          Boost Your Links Today
        </p>
        <button className="z-10 bg-customBlue text-white px-8 py-2 rounded-full transition-all duration-300 cursor-pointer">
          Get Started
        </button>
        <Image
          src={bgBoostDesktop}
          alt="background boost"
          className="hidden absolute left-0 right-0 top-0 bottom-0 lg:block w-full object-contain"
        />
        <Image
          src={bgBoostMobile}
          alt="background boost mobile"
          className="lg:hidden block absolute left-0 right-0 top-0 bottom-0 w-full object-contain"
        />
      </div>
    </>
  );
}
