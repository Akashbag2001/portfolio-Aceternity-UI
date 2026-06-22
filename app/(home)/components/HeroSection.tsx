"use client";
import React from "react";
import { MovingBtn } from './ui/moving-border';
import Title from "./Title";
import { FlipWords } from "./ui/flip-words";


function HeroSection() {
  const words = ["Software-Engineer","Full-Stack-Developer", "Problem-Solver", "Typescript-specialist", "Agentic-AI-Practitioner"]
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-16 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="leftPart space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold pb-4">
          Nice to Meet You! 👋 <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Akash"}
          </span>
        </h1>
        <div className="text-lg font-bold  md:w-96 text-grey-300">
          {"I'm a "}<FlipWords words={words}/>
        </div>
        <a
          href="mailto:bagakash11@gmail.com"
          className="inline-block group"
        >
          <Title text="Contact Me 📫"/>
        </a>
      </div>
      <MovingBtn borderRadius="0.5rem" className="p-3 font-semibold">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <p>💼 Avalaible for work</p></a>
      </MovingBtn>
      <div className="rightPart space-y-3 -rotate-[30deg]  w-72 h-72 relative">
        <div className="flex gap-3 translate-x-8">
          <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
          <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
        </div>

        <div className="flex gap-3 -translate-x-8">
          <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
          <div className="w-32 h-32 rounded-full bg-green-500"></div>
        </div>

        <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
      </div>
    </div>
  );
}

export default HeroSection;
