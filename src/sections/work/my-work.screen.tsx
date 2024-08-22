"use client";
import { useRef } from "react";
import { useIsVisible } from "@/hooks"; 
import { motion } from "framer-motion";

import Project from "@/components/project/project.component";
import laptop from "../../../public/images/laptop.jpg";
import motoInside from "../../../public/images/moto-inside-advertisment.png";
import lifebonus from "../../../public/images/lifebonus-smartphone.webp";

export default function MyWork() {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  const content = {
    project1: {
      title: "Lifebonus Mobile App",
      skill1: "React Native",
      skill2: "Agile Development",
      skill3: "TypeScript",
      description: "The Lifebonus mobile app helps caregivers to improve their daily movements and mindfullness. I worked on this project as a full stack developer, building and improving features in the app from using TypeScript, AWS and React Native.",
      img: lifebonus,
      screenId: "/projects/lifebonus",
    },
    project2: {
      title: "Health Reward Program",
      skill1: "React",
      skill2: "Node.js",
      skill3: "Concept",
      description: "This is my bachelor thesis project, where I build a health reward program. I designed and built the frontend and backend of the app using React and Node.js.",
      img: laptop,
      screenId: "/projects/university",
    },
    project3: {
      title: "Advertisment Page",
      skill1: "HTML/CSS",
      skill2: "Webflow Development",
      skill3: "JavaScript",
      description: "This is a advertisement page for a motor cross company in the netherlands. I built a responsive web page using Webflow and adding custom embedded code to show data in a bar-chart.",
      img: motoInside,
      screenId: "/projects/motoinside",
    },
  };

  const { project1, project2, project3 } = content;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeIn" }}
      className={`flex flex-col`}
    >
      <Project {...project1} />
      <Project {...project2} />
      <Project {...project3} />
    </motion.div>
  );
}
