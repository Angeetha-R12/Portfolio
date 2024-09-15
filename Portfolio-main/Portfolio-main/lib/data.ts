import React from "react";
import Image from "next/image";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// Import images from the public folder
import safeguardAiImg from "@/public/forum.png";
import geminiGenAiImg from "@/public/hotel.png";
import hyperninjaImg from "@/public/hyperninja.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Internships",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer Intern",
    location: "Techardors",
    description:
      "Contributed to key projects and further developed expertise in Full Stack Development.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2024 - Aug 2024",
  },
  {
    title: "AI & ML Developer Intern",
    location: "OneDot Communications Ltd",
    description:
      "Developed a generative AI using Gemini LLM.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Mar 2024",
  },
  {
    title: "Graphic Designer Intern",
    location: "Ninja Studios",
    description:
      "Designed Posters and Invitations.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2024 - Apr 2024",
  },
] as const;

export const projectsData = [
  {
    title: "BOOK MY STAY",
    description:
      "mplemented user-friendly features like dynamic room selection, booking history, and automated confirmation emails to enhance the customer experience.",
    tags: ["ReactJs", "SpringBoot", "SQL"],
    imageUrl: geminiGenAiImg,  // Correct image path
    width: 800,  // Specify width
    height: 600, // Specify height
  },
  {
    title: "SKCT FORUM",
    description:
      "Integrated secure user authentication and real-time notifications, ensuring a collaborative environment for the college community to interact efficiently.",
    tags: ["React", "Spring Boot API", "SQL", "Postman"],
    imageUrl: safeguardAiImg,  // Correct image path
    width: 800,  // Specify width
    height: 600, // Specify height
  },
  
] as const;

export const skillsData = [
  "Java",
  "Postman",
  "JavaScript",
  "React",
  "SpringBoot API",
  "Git",
  "SQL",
  "AWS",
  "Linux",
  "Artificial Intelligience",
] as const;
