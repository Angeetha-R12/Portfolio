"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/pro.jpeg"
              alt="Anki Portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              style={{ transform: 'scale(1.2)' }} // Apply 20% zoom
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-small !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.span
          className="font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello, I'm Angeetha.
        </motion.span>{" "}
        An Aspiring{" "}
        <motion.span
          className="font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
           Computer Science Student focused on Web development and AI
        </motion.span>{" "}
        and{" "}
        <motion.span
          className="font-bold"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          obessed on contributing to open-source projects
        </motion.span>{" "}
        {/* like{" "} */}
        {/* <motion.span className="font-bold">AOSP/Custom Android OS</motion.span>{" "} */}
        <motion.a
          href="https://t.me/ninjaonsteroids"
          className="underline"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {/* @ninjaonsteroids */}
        </motion.a>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <motion.div
          whileHover={{ scale: 1.05, backgroundColor: "#1F2937", color: "#F9FAFB" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full shadow-lg cursor-pointer"
        >
          <Link
            href="#contact"
            className="flex items-center gap-2"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, backgroundColor: "#F9FAFB", color: "#1F2937" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full shadow-lg cursor-pointer"
        >
          <a
            className="flex items-center gap-2"
            href="/CV.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 transition-transform group-hover:translate-y-1" />
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, backgroundColor: "#F9FAFB", color: "#1F2937" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full shadow-lg cursor-pointer"
        >
          <a
            className="flex items-center gap-2"
            href="https://www.linkedin.com/in/angeetha-r"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, backgroundColor: "#F9FAFB", color: "#1F2937" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full shadow-lg cursor-pointer"
        >
          <a
            className="flex items-center gap-2"
            href="https://github.com/Angeetha-R12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
