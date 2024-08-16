"use client";
import { useRef } from "react";
import { useIsVisible } from "@/hooks"; 
import Project from "@/components/project/project.component";

import laptop from "../../../public/images/laptop.jpg";

export default function MyWork() {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  const content = {
    project1: {
      title: "Project Title 1",
      skill1: "Website Design",
      skill2: "Webflow Development",
      skill3: "Concept",
      description: "This is a homepage design and build for a concept project – a chat application. I designed the page first then built a responsive web page using Webflow.",
      img: laptop,
      screenId: "/projects",
    },
  };

  const { project1 } = content;

  return (
    <div ref={ref} className={`flex flex-col`}>
      <div className="flex flex-col">
        {/* <h1 className="text-3xl p-8 mb-2.5 tracking-wide font-semibold overline lg:mb-8">My Work</h1> */}
        <div className="projects flex flex-col">
          <Project {...project1} />
          <Project {...project1} />
        </div>
      </div>
    </div>
  );
}
