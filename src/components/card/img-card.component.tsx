"use client";
import { firaCode } from "@/app/fonts";
import { IImageCard } from "@/types";
import Image from "next/image";

import githubLogo from "../../../public/logos/github-mark-white.png";
import { openLink } from "@/utils";

export default function ImageCard ({ projectType, projectTitle, projectDescription, projectLink, imgWidth, imgHeight, imgAlt, imgSrc } : IImageCard ) {
  return (
    <div className={`flex flex-col p-4 my-6 rounded-xl shadow-lg text-[#FFFFFF] bg-gray-600 hover:bg-gray-300 hover:text-[#000000] hover:skew-x-0.5 hover:scale-y-105 hover:translate-y-1 hover:duration-300 shadow-slate-200`}>
      <div className="text-wrapper">
        <h2 className={`text-sm py-1 ${firaCode.className}`}>{projectType}</h2>
        <h1 className="text-2xl font-semibold py-4">{projectTitle}</h1>
        <p className="text-base py-2 text-justify leading-tight">{projectDescription}</p>
      </div>
      <div className="img-wrapper hidden">
        <Image placeholder="empty" width={imgWidth} height={imgHeight} alt={imgAlt} src={imgSrc} priority={false}/>
      </div>
      <div className="reference-wrapper flex flex-row items-start py-2">
      <Image placeholder="empty" width={30} height={30} alt={'GitHub'} src={githubLogo} priority={false} onClick={() => openLink(projectLink)} className="cursor-pointer"/>
      </div>
    </div>
  );
};