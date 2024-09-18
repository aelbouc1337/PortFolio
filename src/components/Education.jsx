import React from "react";
import { motion } from "framer-motion";

const Education = () => {
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
      place: "Ark-X Academy BootCamp - Rabat",
    },
    {
      date: "MARS 2019 - JUN 2021",
      title: "1337 Coding School (42 Network)",
      place: "1337 Coding School (42 Network) - Khouribga",
    },
    {
      date: "OCT 2015 - JUN 2018",
      title: "Bachelor’s Degree in Web and Mobile Development",
      place: "Ibn Tofail University - Kénitra",
    },
  ];

  return (
    <div className="w-full p-4 flex flex-col items-center">
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
            {}
            <p className="text-xs text-slate-400">{edu.place}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
