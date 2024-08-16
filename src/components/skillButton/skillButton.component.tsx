"use client";

import { ISkill } from "@/types";

export default function SkillButton({ skill }: ISkill) {
  return (
    <div className="flex flex-row">
      <button className="bg-gray-200 hover:bg-gray-300 active:bg-gray-500 active:text-[#ffffff] focus:outline-none focus:ring focus:ring-violet-300 p-2 m-1 text-xs rounded-xl">
        {skill}
      </button>
    </div>
  );
}