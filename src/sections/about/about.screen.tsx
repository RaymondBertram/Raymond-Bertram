"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "@/hooks"; 

export default function About() {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeIn" }}
      className="flex flex-col lg:flex-row"
      >
      <div className="split-container">
        <h1 className="mt-0 pr-2 mb-5 font-normal leading-[140%] text-[37px] lg:text-4xl">What <span className="underline">I Do</span> </h1>
      </div>
      <div className="lg:flex-col lg:justify-between lg:items-start lg:pl-8">
        <div className="pt-2">
          <p className="mt-0 pr-2 mb-5 font-semibold leading-[140%] text-2xl lg:text-3xl">Full Stack Developement</p>
          <p className={`leading-6`}>
            My journey started as a full stack developer where I build digital
            products in agile methodologies with technologies like
            JavaScript/Typescript, React, React Native, AWS, JEST and Node. Its
            not about the technologies but more about attitude and the mentality
            to get things done effectivly.
          </p>
        </div>
        <div className="py-10">
          <h1 className="mt-0 pr-2 mb-5 font-semibold leading-[140%] text-2xl lg:text-3xl">Design</h1>
          <p className={`leading-6`}>
            Additionally I design beautiful and powerful websites for modern
            businesses. Any business today needs a website that wins customers’
            trust and helps you do your business well. I make sure your website is
            up to that standard.
          </p>
        </div>
      </div>
      
    </motion.div>
  );
}
