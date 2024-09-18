"use client";

import React, { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";

const Cursus = () => {
  const [tab, setTab] = useState("education");
  return (
    <section className="flex font-inter flex-col w-full mt-5 items-center">
      <div className="rounded-full p-1 border-gray-800 bg-transparent border">
        <ul className="flex gap-2">
          <li
            onClick={() => setTab("education")}
            className={`cursor-pointer rounded-full px-4 text-slate-300 py-2 ${
              tab == "education" ? "bg-slate-700" : ""
            }`}
          >
            Education
          </li>
          <li
            onClick={() => setTab("experience")}
            className={`cursor-pointer rounded-full text-slate-300 px-4 py-2 ${
              tab == "experience" ? "bg-slate-700" : ""
            }`}
          >
            experience
          </li>
        </ul>
      </div>

      {tab == "education" ? <Education /> : <Experience />}
    </section>
  );
};

export default Cursus;
