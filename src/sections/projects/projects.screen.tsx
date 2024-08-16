import ImageCard from "@/components/card/img-card.component";
import logo from "../../app/favicon.ico";

export default function Projects() { 
  const project1 = {
    projectType: "Study Project",
    projectTitle: "Time System", 
    projectDescription: "A time management system that helps you keep track of you the working hours of an employee. It is build with React and Node.js.",
    projectLink: "https://github.com/RaymondBertram/time-system",
    imgWidth: 200,
    imgHeight: 200,
    imgAlt: "logo",
    imgSrc: logo,
  };

  const project2 = {
    projectType: "Featured Project",
    projectTitle: "Lifebonus Professional App", 
    projectDescription: "LifeBonus Pflege Pro is a health app for improving physical and mental well-being in the care professions. Would you like a helper in your trouser pocket that is always there for you? One that helps you to cope better with stress and carry out care movements more easily?",
    projectLink: "",
    imgWidth: 200,
    imgHeight: 200,
    imgAlt: "logo",
    imgSrc: logo,
  };

  const project3 = {
    projectType: "Bachelorthesis Project",
    projectTitle: "Health account prevention programme", 
    projectDescription: "A program to boost the activity within the health account prevention programme. It is a program that allows you track your activities within a reward after completing it successful. The techstack used is React, Node.js with In-Memory-Datebase.",
    projectLink: "",
    imgWidth: 200,
    imgHeight: 200,
    imgAlt: "logo",
    imgSrc: logo,
  };

  const project4 = {
    projectType: "Selfhosted Project",
    projectTitle: "My Portfolio", 
    projectDescription: "A portfolio that showcases my projects and experiences. It is build with Next.js and TailwindCSS.",
    projectLink: "https://github.com/RaymondBertram/raymond-bertram",
    imgWidth: 200,
    imgHeight: 200,
    imgAlt: "logo",
    imgSrc: logo,
  };


  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl p-8 mb-2.5 tracking-wide font-semibold overline">Projects</h1>
      <div className="card-container flex flex-col">
        <ImageCard {...project1} />
        <ImageCard {...project2} />
        <ImageCard {...project3} />
        <ImageCard {...project4} />
      </div>
    </div>
  );
};