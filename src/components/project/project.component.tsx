import Image from "next/image";
import { motion } from 'framer-motion';
import SkillButton from "../skillButton/skillButton.component";
import HoverButton from "../hoverButton/hoverButton.component";
import rightArrow from "../../../public/svgs/right-arrow.svg";
import pictureUnderline from "../../../public/images/picture-underline.png";
import { IProject } from "@/types";

import "./project.component.css";

export default function Project({ title, skill1, skill2, skill3, description, img, screenId }:IProject ) {
  return (
    <div className="container max-w-[1300px]">
      <div className="project grid py-35 items-center justify-between grid-cols-1 gap-x-[60px] gap-y-[14px]">
        <div className="left-column max-w-[50%] min-w-[410px]">
          <h4 className="text-[#b7b4b9] uppercase tracking-wide mt-0 mb-5 text-sm">latest work</h4>
          <h1 className="mt-0 mb-5 font-['Abril Fatface'] font-normal text-4xl">{title}</h1>
          <div className="tags-wrapper flex flex-wrap mb-8 box-border">
            <SkillButton skill={skill1} />
            <SkillButton skill={skill2} />
            <SkillButton skill={skill3} />
          </div>
        </div>
        <a href="" className="row-start-1 col-start-2 row-end-3 col-end-3 self-center justify-self-end">
          <motion.div whileHover={{ scale: 1.1, x: 30, y: -15 }}>
            <Image className="mock-up-img z-10 relative max-w-full" src={img} alt="underline" width={520} height={300}/>
          </motion.div>
          <Image className="dots relative top-auto bottom-40 right-8" src={pictureUnderline}  alt="Project" width={100} height={100} />
        </a>
        <div className="content-block row-start-2 col-start-1 row-end-3 col-end-2 self-start">
          <p className="portfolio-paragraph max-w-[480px] text-lg mb-[10px]">{description}</p>
          <HoverButton screenId={screenId}/>
        </div>
      </div>
    </div>
  );
};