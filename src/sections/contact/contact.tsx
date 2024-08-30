"use client";
import { motion } from "framer-motion";

export default function Contact() {

  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col py-10 lg:flex-row"
    >
      <div className="split-container lg:flex-col lg:justify-between lg:items-start lg:pl-8">
        <h1 className="mt-0 pr-2 mb-5 font-normal leading-[140%] text-[37px] lg:text-4xl">
          Want <span className="underline decoration-solid text-red-700 lg:text-4xl">To Work?</span>
        </h1>
      </div>
      <div>
        <p className={`leading-6`}>
          If you need a modern and powerful website for your business, startup or
          yourself, I am available for work. You can email me directly at <span>
          <a href="mailto:contact@bertram-tech.de" className="underline text-red-700"> contact@bertram-tech.de</a>
          </span>
        </p>
      </div>
    </motion.div>
  );
}
