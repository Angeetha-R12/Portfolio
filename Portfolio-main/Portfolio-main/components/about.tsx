"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <motion.p
        className="mb-3 text-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        With a background in <span className="font-bold">Computer Scienece and Engineering</span>, I embarked on a journey to turn my passion for technology into a career. My expertise lies in <span className="font-bold">Full Stack</span>, <span className="font-bold">Web Development</span>, and <span className="font-bold">Artifical Intelligence</span>. I have hands-on experience with a variety of technologies including <span className="font-bold">Java</span>, <span className="font-bold">React</span>, <span className="font-bold">Spring Boot API</span>, <span className="font-bold">JavaScript</span>, and <span className="font-bold">SQL</span>. Additionally, I am proficient in using tools such as <span className="font-bold">Intellij</span>, <span className="font-bold">Eclipse</span>, <span className="font-bold">Git</span>, and <span className="font-bold">Postman</span> and have worked with platform like <span className="font-bold">Amazon Web Service</span><span className="font-bold"></span>.
      </motion.p>

      <motion.p
        className="mb-3 text-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        My projects showcase my ability to tackle complex problems and develop innovative solutions. Notable examples include <span className="font-bold">SKCT-FORUM</span>, a forum with AI chatbot, and <span className="font-bold"></span>a digital hub for students to collaborate, share technical insights, and innovate together. 
      </motion.p>

      <motion.p
        className="text-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
       Another example <span className="font-bold">Hotel Reservation Website</span>, an intuitive platform for real-time hotel reservations, built for seamless <span className="font-bold">user experience and efficiency.</span> Optimize your stay with <span className="font-bold">advanced booking algorithms and secure transactions.</span>
      </motion.p>
    </motion.section>
  );
}
