"use client";
import { IHoverButton } from "@/types";
import { motion } from "framer-motion";

export default function HoverButton({ screenId, text }: IHoverButton) {
  return (
    <div className="button-wrapper mt-[40px] pb-[15px] pr-[15px] inline-block box-border">
      <motion.div initial={{ y: 11, x: 11 }} className="button-border bg-[rgb(0, 0, 0, 0)] inline-block shadow-[0_0_0_3px_#000] box-border pb-[12px]">
        <motion.div
          initial={{ y: -5, x: -10 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: 0, x: 0 }}
        >
          <a
            href={screenId}
            className="min-w-[200px] bg-[#000000] shadow-[0_0_0_3px_#000]  text-center pt-[11px] px-[32px] pb-[12px] text-lg font-normal text-white outline-0 outline-inherit outline cursor-pointer"
          >
            {text}
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
