import Image from "next/image";
import { IProjectShowCase } from "@/types";

export default function ProjectShowcase({ title, description, link, img }: IProjectShowCase) {
  return (
    <div className="flex flex-col py-10 px-5 text-center bg-slate-200">
      <h4 className="text-[#b7b4b9] uppercase tracking-wide mt-0 lg:mb-5 text-sm font-bold leading-[110%]">project showcase</h4>
      <h1 className="mt-0 pr-2 mb-5 font-normal leading-[140%] text-[37px] lg:text-4xl">{title}</h1>
      <p className="pr-2 mb-5">{description}</p>
      <a target="_blank" className="pr-2 mb-5 underline text-pink-400" href={link}>visit project</a>
      <div className="section rounded-md bg-slate-200 lg:flex lg:justify-center">
        <Image className="rounded-md lg:max-w-screen-sm md:lg:max-w-screen-sm" src={img} alt="project showcase"/>
      </div>
    </div>
  );
}
