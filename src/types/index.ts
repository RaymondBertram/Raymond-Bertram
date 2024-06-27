import { StaticImageData } from "next/image";

export interface ICard {
  jobTitle: string;
  workDuration: string;
  description: string;
  link: string;
  skills: string[];
}

export interface ISkill {
  skill: string;
}

export interface IImageCard {
  projectType: string;
  projectTitle: string; 
  projectDescription: string;
  projectLink: string;
  imgWidth: number;
  imgHeight: number;
  imgAlt: string;
  imgSrc: StaticImageData;
}