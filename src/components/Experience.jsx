import React, { useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const listVariants = {
    hidden: { opacity: 0, y: 50 }, // initial state: hidden and moved down by 50px
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // delay for stagger effect based on index
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const educationData = [
    {
      date: "JAN 2024 - JUN 2024",
      title: "FullStack JavaScript (MERN) Certification",
      description: [
        "MindKind is a web platform offering tools to help users better manage their mental health. As a Front End Developer, I contributed to creating intuitive and responsive user interfaces while optimizing the user experience and platform performance.",
        "Integrated Figma designs into responsive and accessible web pages.",
        "Enhanced user experience with animations and smooth navigation.",
      ],
      company: "Ark-X Academy BootCamp - Rabat",
    },
    {
      date: "JAN 2021 - JUN 2021",
      title: "Full Stack Developer",
      description: [
        "Designed and developed a management application for healthcare professionals.",
        "Implemented features for appointment scheduling, analysis tracking, and prescription management.",
        "Segregated functionalities based on user roles (patient, doctor, administrator).",
      ],
      company: "Enigma Leet",
    },
  ];

  return (
    <div className="lg:w-2/3 w-full p-4 flex flex-col items-center">
      <ul className="font-inter flex flex-col gap-4">
        {educationData.map((edu, i) => (
          <motion.li
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={listVariants}
            className="rounded-3xl items-center border-slate-700 border justify-center flex flex-col gap-3 lg:p-8 p-4"
          >
            <h3 className="text-slate-300 text-xs">{edu.date}</h3>
            <h4 className="text-slate-200 font-bold">{edu.title}</h4>
            <p className="text-xs text-slate-400">{edu.company}</p>
            <div className="w-full border px-3 border-slate-700 rounded-xl font-poppins tracking-wide">
              <ul className="list-disc text-sm py-4 pl-4 text-slate-300">
                {edu.description.map((exp, i) => (
                  <li key={i}>{exp}</li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
