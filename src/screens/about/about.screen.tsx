"use client";
import Image from "next/image";
import { useRef } from "react";
import { useIsVisible } from "@/hooks"; 

import ray from "../../../public/images/ray.jpg";

export default function About() {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  return (
    <div ref={ref} className={`flex flex-col`}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl p-8 mb-2.5 tracking-wide font-semibold overline lg:mb-8">About Me</h1>
        <div className="flex flex-col justify-center lg:grid lg:grid-cols-2 lg:items-center">
          <div className=" bg-slate-100 rounded-xl shadow-xl p-4 lg:p-8">
            <>
              <p className="mb-4 text-justify leading-normal">
                Greetings. I am Raymond Bertram, a 23-year-old pioneer in Full
                Stack Software Engineering hailing from Hamburg, Germany. My
                aspiration is to bring forth positive changes in the world
                through innovative and sustainable software development.
              </p>
              <p className="mb-4 text-justify leading-normal">
                My personal ethos has a significant influence on setting the
                course of my life, highlighting introspection and candidness.
                These values are essential for continuous enlightenment and
                self-enhancement. The principle of comprehending before demanding comprehension is
                a belief I ardently uphold. Though life throws hurdles, it is
                ultimately our personal decisions that mold its trajectory. This
                is why I opted for Software Development to make an impact and
                turn imaginative concepts into reality.
              </p>
              <p className="mb-4 text-justify leading-normal">
              Lastly, I worked on a project aimed at developing software to enhance the daily lives of caretakers. The company provides health programs through a B2B approach, offering both analog and digital products.
              </p>
              <p className="mb-4 text-justify">
                Here are a few technologies I have been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-x-2.5 justify-start list-disc px-6">
                <li className="mb-1">{`JavaScript (ES6+)`}</li>
                <li className="mb-1">TypeScript</li>
                <li className="mb-1">React</li>
                <li className="mb-1">React Native</li>
                <li className="mb-1">AWS</li>
                <li className="mb-1">Figma</li>
              </ul>
            </>
          </div>
          <div className="flex flex-col items-center p-16">
            <div className="flex items-center justify-center">
              <Image className="rounded-xl shadow-xl lg:w-full saturate-[0.6] hover:saturate-100 hover:scale-125 hover:-translate-y-6 hover:duration-300" placeholder="empty" width={200} height={200} alt="ray" src={ray} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
