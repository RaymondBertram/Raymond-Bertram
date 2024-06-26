"use client";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState('hidden');

  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#000000] p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-semibold text-xl tracking-tight">Raymond Bertram</span>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-[#ffffff] hover:text-white hover:border-white">
        <svg className="fill-[#ffffff] h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden">
      <div className="text-sm lg:flex-grow">
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          About
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Experience
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Projects
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Contact
        </a>
      </div>
    </div>
  </nav>
  );
}
