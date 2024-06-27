"use client";
import { firaCode } from "@/app/fonts";
import { ICard } from "@/types";
import { openLink } from "@/utils";
import SkillButton from "../skillButton/skillButton.component";

export default function Card ({  jobTitle, workDuration,  description, link, skills }: ICard) {
  return (
    <div onClick={() => openLink(link)} className={`flex flex-col p-4 my-6 rounded-xl shadow-lg  bg-gray-100 hover:bg-gray-300 hover:text-[#181818] hover:skew-y-1 hover:scale-y-105 hover:translate-y-1 hover:duration-300 shadow-slate-200`}>
      <h2 className="text-2xl font-semibold py-4">{jobTitle}</h2>
      <p className={`text-sm py-1 ${firaCode.className}`} >{workDuration}</p>
      <p className="text-base py-2 text-justify leading-tight">{description}</p>
      <div className="flex flex-row flex-wrap gap-1">
        {skills.map((skill, index) => (
          <SkillButton key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};