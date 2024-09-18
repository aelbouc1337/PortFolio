import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full gap-5 flex flex-col items-center justify-center pt-24">
      <Image src="/codingGuy.png" width={200} height={200} />
      <h2 className="font-poppins font-bold text-center text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-200">
        Keep calm and <br />
        <span className="text-transparent font-poppins text-5xl">code on</span>.
      </h2>
      <p className="font-poppins tracking-wide text-center md:text-base text-sm text-slate-200 w-[80%] lg:w-[50%]">
        Driven by a love for coding and a knack for problem-solving, I excel in
        developing modern web applications using the MERN stack. My work is
        characterized by a focus on performance, scalability, and user
        experience. I am committed to delivering top-notch solutions that meet
        and exceed client expectations.
      </p>
      <button className="rounded-full font-poppins p-3 text-slate-200 border border-b-slate-200 border-t-primary border-r-primary">
        Contact Me
      </button>
    </header>
  );
};

export default Header;
