import React from "react";

const About = () => {
  return (
    <div className="my-28 font-inter flex flex-col gap-5 items-center text-center">
      <div className="flex flex-col gap-1 items-center text-center">
        <h2 className="lg:text-4xl text-3xl">About Me</h2>
        <span className="text-transparent lg:text-sm text-xs bg-clip-text bg-gradient-to-r from-primary via-slate-200 to-primary font-poppins">
          get to know me
        </span>
      </div>
      <p className="font-poppins text-slate-200 lg:w-[50%] w-[80%]">
        I am
        <span className="text-transparent font-inter uppercase bg-clip-text text-xl mx-1 bg-gradient-to-r from-primary to-slate-200">
          Abderrahman El Bouchikhi
        </span>
        , a Full-Stack JavaScript Developer passionate about creating innovative
        and efficient web applications. My journey began at the 1337 Coding
        School (42 Network), where I developed expertise in the MERN stack
        (MongoDB, Express.js, React.js, Node.js).
      </p>
      <p className="font-poppins text-slate-200 lg:w-[50%] w-[80%]">
        I have worked on diverse projects, from developing a travel guide
        application integrating RapidAPI to building an interactive forum for
        travelers. My experience at ARK-X Academy, where I earned a Full-Stack
        JavaScript certification, has honed my ability to work in Agile teams
        and solve complex problems.
      </p>
      <p className="font-poppins text-slate-200 lg:w-[50%] w-[80%]">
        In addition to my technical skills, I am committed to continuous
        learning and professional growth. I actively seek opportunities to
        expand my knowledge and stay updated with the latest industry trends. My
        certifications in JavaScript and problem-solving from HackerRank
        highlight my dedication to self-improvement.
      </p>
      <p className="font-poppins text-slate-200 lg:w-[50%] w-[80%]">
        Outside of coding, I enjoy exploring new technologies, contributing to
        open-source projects, and savoring a good cup of coffee. My goal is to
        leverage my skills to create impactful web applications that exceed
        client expectations. I am excited about the future of web development
        and look forward to new challenges and opportunities.
      </p>

      <button className="border-primary border mt-3 font-poppins px-4 py-2 md:py-3 text-primary rounded-full flex items-center justify-center">
        See My Resume
      </button>
    </div>
  );
};

export default About;
