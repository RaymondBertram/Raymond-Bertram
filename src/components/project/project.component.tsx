import Image from "next/image";
import { motion } from 'framer-motion';
import SkillButton from "../skillButton/skillButton.component";
import HoverButton from "../hoverButton/hoverButton.component";
import pictureUnderline from "../../../public/images/picture-underline.png";
import { IProject } from "@/types";

export default function Project({ title, skill1, skill2, skill3, description, img, screenId }:IProject ) {
  return (
    <div className="py-10 lg:max-w-[1300px]">
      <div className="project grid grid-cols-[auto] grid-rows-[auto] gap-y-4 gap-x-4  md:grid-cols-1 md:grid-rows-3 lg:py-35 lg:justify-between lg:grid-cols-1">
        <div className="left-column row-start-1 col-start-1 row-end-1 col-end-2 w-full max-w-none min-w-[auto] md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2 lg:max-w-[50%] lg:min-w-[410px]">
          <h4 className="text-[#b7b4b9] uppercase tracking-wide mt-0 lg:mb-5 text-sm font-bold leading-[110%]">latest work</h4>
          <h1 className="mt-0 pr-2 mb-5 font-['Abril Fatface'] font-normal leading-[140%] text-[37px] lg:text-[64px]">{title}</h1>
          <div className="tags-wrapper flex flex-wrap mb-8 box-border">
            <SkillButton skill={skill1} />
            <SkillButton skill={skill2} />
            <SkillButton skill={skill3} />
          </div>
        </div>
        <a href="#" className="object-fill row-start-2 row-end col-start-1 col-end-3 lg:row-start-1 lg:row-end-4 lg:col-start-2  lg:col-end-3 self-center lg:justify-self-end">
          <motion.div className="" whileHover={{ scale: 1.1, x: 30, y: -15 }}>
            <Image className="mock-up-img z-10 relative align-middle inline-block w-full md:w-3/6 lg:w-[500px]" src={img} alt="underline" width={250} height={370}/>
          </motion.div>
          <Image className="dots hidden relative top-auto bottom-[168px] -left-4 lg:block lg:right-8" src={pictureUnderline}  alt="Project" width={100} height={100} />
        </a>
        <div className="content-block row-start-[auto] row-end-[auto] col-end-1 self-center lg:row-start-2 col-start-1 lg:row-end-3">
          <p className="portfolio-paragraph lg:max-w-[480px] text-lg leading-8 mb-[10px]">{description}</p>
          <HoverButton text="see this project" screenId={screenId}/>
        </div>
      </div>
    </div>
  );
};