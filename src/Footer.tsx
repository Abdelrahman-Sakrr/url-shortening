import Image from "next/image";
import React from "react";
import logo from "@/../public/images/logo.svg";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative font-poppins gap-5 bg-[var(--gray-950)] text-white bottom-0 left-0 right-0 flex md:flex-row flex-col md:px-10 lg:px-0 justify-center md:justify-evenly items-center md:items-start pt-12 py-9 z-20">
      {/* <div className="w-"> */}
      <Image
        src={logo.src}
        alt="logo"
        className="text-white"
        width={100}
        height={100}
      />
      {/* </div> */}
      <div className="flex md:flex-row flex-col gap-10 mb-10">
        {/* Features */}
        <ul className="space-y-2">
          <li className="font-semibold text-white">Features</li>
          <li className="text-white/70 hover:text-white cursor-pointer">
            Link Shortening
          </li>
          <li className="text-white/70 hover:text-white cursor-pointer">
            Branded Links
          </li>
          <li className="text-white/70 hover:text-white cursor-pointer">
            Analytics
          </li>
        </ul>

        {/* Resources */}
        <ul className="space-y-2">
          <li className="font-semibold text-white">Resources</li>
          <li className="text-white/70 hover:text-white cursor-pointer">
            Blog
          </li>
          <li className="text-white/70 hover:text-white cursor-pointer">
            Developers
          </li>
          <li className="text-white/70 hover:text-white cursor-pointer">
            Support
          </li>
        </ul>

        {/* Company */}
        <ul className="space-y-2">
          <li className="font-semibold text-white">Company</li>
          <li className="text-white/70 hover:text-white cursor-pointer">
            About
          </li>
          <li className="text-white/70 hover:text-white cursor-pointer">
            Our Team
          </li>
          <li className="text-white/70 hover:text-white cursor-pointer">
            Careers
          </li>
          <li className="text-white/70 hover:text-white cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap items-center justify-between  gap-4">
        <Facebook />
        <Linkedin />
        <Twitter />
        <Github />
      </div>
    </footer>
  );
}
