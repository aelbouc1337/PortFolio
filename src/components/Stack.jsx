"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const techStack = [
  { name: "Next.js", icon: "/icons/next.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "TypeScript", icon: "/icons/ts.png" },
  { name: "JavaScript", icon: "/icons/js.png" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
  { name: "mongo", icon: "/icons/mongodb.png" },
  { name: "express", icon: "/icons/express.png" },
  { name: "nodejs", icon: "/icons/nodejs.png" },
  { name: "HTML", icon: "/icons/html.png" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "Figma", icon: "/icons/figma.png" },
  { name: "GitHub", icon: "/icons/github.png" },
  { name: "C", icon: "/icons/c.png" },
  { name: "C++", icon: "/icons/cplus.png" },
];
const Stack = () => {
  return (
    <section className="py-16 flex flex-col gap-6 font-inter lg:px-40 px-6">
      <div className="flex flex-col gap-1 items-center text-center">
        <h2 className="lg:text-4xl text-3xl">My Stack</h2>
        <span className="text-transparent lg:text-sm text-xs bg-clip-text bg-gradient-to-r from-primary via-slate-200 to-primary font-poppins">
          Technologies i work with
        </span>
      </div>
      <div className="grid lg:grid-cols-6 grid-cols-3 grid-rows-3 lg:gap-5 gap-2 items-center">
        {techStack.map((tech, index) => (
          <div className="w-full h-full hover:border hover:scale-105 transition-all duration-300 hover:border-primary rounded-3xl cursor-pointer overflow-hidden">
            <Image
              key={index}
              src={tech.icon}
              width={30}
              height={30}
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Stack;
