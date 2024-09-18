"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`hidden lg:inline-block fixed rounded-full ${
        scroll ? "bg-bg" : "bg-transparent"
      } border border-gray-800 p-1 transition-colors duration-300`}
    >
      <ul className="flex gap-2 font-inter">
        <li className="px-3 py-2 rounded-full bg-slate-700 text-sm text-slate-300 cursor-pointer">
          Home
        </li>
        <li className="px-3 py-2 rounded-full text-sm text-slate-300 cursor-pointer">
          About
        </li>
        <li className="px-3 py-2 rounded-full text-sm text-slate-300 cursor-pointer">
          Resume
        </li>
        <li className="px-3 py-2 rounded-full text-sm text-slate-300 cursor-pointer">
          Projects
        </li>
        <li className="px-3 py-2 rounded-full text-sm text-slate-300 cursor-pointer">
          Skills
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
