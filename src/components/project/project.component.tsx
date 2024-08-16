import Image from "next/image";
import { motion } from 'framer-motion';
import SkillButton from "../skillButton/skillButton.component";
import HoverButton from "../hoverButton/hoverButton.component";
import pictureUnderline from "../../../public/images/picture-underline.png";
import { IProject } from "@/types";

import "./project.component.css";

export default function Project({ title, skill1, skill2, skill3, description, img, screenId }:IProject ) {
  return (
    <div className="lg:container lg:max-w-[1300px]">
      <div className="project grid lg:py-35 items-center lg:justify-between lg:grid-cols-1 gap-x-[60px] gap-y-[14px]">
        <div className="left-column w-full max-w-none min-w-[auto] lg:max-w-[50%] lg:min-w-[410px]">
          <h4 className="text-[#b7b4b9] uppercase tracking-wide mt-0 lg:mb-5 text-sm font-bold leading-[110%]">latest work</h4>
          <h1 className="mt-0 mb-5 font-['Abril Fatface'] font-normal leading-[140%] text-[37px] lg:text-4xl">{title}</h1>
          <div className="tags-wrapper flex flex-wrap mb-8 box-border">
            <SkillButton skill={skill1} />
            <SkillButton skill={skill2} />
            <SkillButton skill={skill3} />
          </div>
        </div>
        <a href="" className="row-start-2 col-start-1 row-end-3 col-end-3 lg:row-start-1 lg:col-start-2 lg:row-end-3 lg:col-end-3 self-center justify-self-end">
          <motion.div whileHover={{ scale: 1.1, x: 30, y: -15 }}>
            <Image className="mock-up-img z-10 relative max-w-full align-middle	inline-block" src={img} alt="underline" width={520} height={300}/>
          </motion.div>
          <Image className="dots relative top-auto bottom-40 lg:right-8" src={pictureUnderline}  alt="Project" width={101} height={100} />
        </a>
        <div className="content-block row-start-3 row-end-4 col-end-3 lg:row-start-2 col-start-1 lg:row-end-3  self-start">
          <p className="portfolio-paragraph lg:max-w-[480px] text-lg leading-8 mb-[10px]">{description}</p>
          <HoverButton text="see this project" screenId={screenId}/>
        </div>
      </div>
    </div>
  );
};