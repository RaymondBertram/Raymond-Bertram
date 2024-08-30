"use client";
import { useRef } from "react";
import { useIsVisible } from "@/hooks"; 
import { motion } from "framer-motion";

import { firaCode } from "@/app/fonts";
import HoverButton from "@/components/hoverButton/hoverButton.component";

export default function Home() {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={ isVisible ? { opacity: 1, y: 0 } : {} }
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <p className={`${firaCode.className} py-2`}>Hi, my name is</p>
      <h1 className="text-4xl not-italic tracking-wider py-2">Raymond Bertram</h1>
      <h2 className="text-2xl tracking-wide py-2">Full Stack Software Engineer</h2>
      <p className={`${firaCode.className} text-base py-2`}>Your Vision, Our Precision – Crafted to Wow.</p>
      <HoverButton screenId={"#mywork"} text="see my work" />
    </motion.div>
  );
}
