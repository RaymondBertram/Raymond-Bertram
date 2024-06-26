"use client";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<string>('hidden');
  const toggleMenu = () => setIsOpen(isOpen === 'hidden' ? '' : 'hidden');

  return (
    <nav className="flex items-center sticky top-0 justify-between flex-wrap bg-[#000000] p-6 transition duration-700 hover:bg-violet-600  lg:hover:bg-[#181838] rounded">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-semibold text-xl tracking-tight">Raymond Bertram</span>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-[#ffffff] border-[#ffffff] hover:text-white hover:border-white" onClick={toggleMenu}>
        <svg className="fill-[#ffffff] h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isOpen}`}>
      <div className="lg:flex lg:flex-row lg:justify-end text-sm lg:flex-grow">
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#ffffff] hover:text-[#FF0763] mr-4">
          About
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#ffffff] hover:text-[#FF0763] mr-4">
          Experience
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#ffffff] hover:text-[#FF0763] mr-4">
          Projects
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#ffffff] hover:text-[#FF0763]">
          Contact
        </a>
      </div>
    </div>
  </nav>
  );
}