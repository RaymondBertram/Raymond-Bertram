"use client";
import Image from "next/image";
import { useRef } from "react";
import { useIsVisible } from "@/hooks"; 
import { motion } from "framer-motion";

import webCode from "@/../public/images/code.jpg";
import mobileApp from "@/../public/images/mobile-app.jpg";
import shop from "@/../public/images/shop.jpg";
import design from "@/../public/images/design.jpg";

export default function Services() {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeIn" }}
      className="py-10"
    >
      <h1 className="mt-0 pr-2 mb-5 font-normal leading-[140%] text-[37px] lg:text-[56px]">Services</h1>
      <div className="flex flex-col gap-y-4 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:justify-items-center">
        <div className="relative">
          <Image src={webCode} alt="bg" className="rounded-xl shadow-xl brightness-50 min-h-[180px] lg:max-w-96 lg:min-h-64"/>
          <span className="absolute inset-0 flex items-center justify-center top-0 left-0 text-white text-2xl">Web Developement</span>
        </div>
        <div className="relative">
          <Image src={mobileApp} alt="bg" className="rounded-xl shadow-xl brightness-50 min-h-[180px] lg:max-w-96 lg:min-h-64"/>
          <span className="absolute inset-0 flex items-center justify-center top-0 left-0 text-white text-2xl">Mobile Developement</span>
        </div>
        <div className="relative">
          <Image src={shop} alt="bg" className="rounded-xl shadow-xl brightness-50 min-h-[180px] lg:max-w-96 lg:min-h-64"/>
          <span className="absolute inset-0 flex items-center justify-center top-0 left-0 text-white text-2xl">Shopify Developement</span>
        </div>
        <div className="relative">
          <Image src={design} alt="bg" className="rounded-xl shadow-xl brightness-50 min-h-[180px] lg:max-w-96 lg:min-h-64"/>
          <span className="absolute inset-0 flex items-center justify-center top-0 left-0 text-white text-2xl">Designs That Impress</span>
        </div>
        <div className="flex flex-col w-full bg-slate-100 rounded-xl shadow-xl py-7 lg:flex-row lg:justify-evenly lg:gap-x-10 lg:col-span-2 lg:my-6">
          <div className="flex flex-col items-center mb-4">
            <h1 className="text-2xl mb-2 font-bold lg:text-5xl">10+</h1>
            <p className="font-medium">projects done</p>
          </div>
          <div className="flex flex-col items-center mb-4">
            <h1 className="text-2xl mb-2 font-bold lg:text-5xl">100%</h1>
            <p className="font-medium">Zufriedenheit</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl mb-2 font-bold lg:text-5xl">4+</h1>
            <p className="font-medium">Erfahrung</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
