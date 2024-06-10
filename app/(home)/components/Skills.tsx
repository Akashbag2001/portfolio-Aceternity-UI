"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from './ui/card-hover-effect'
import { FaNode, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoMongodb } from 'react-icons/bi';
import { SiExpress } from 'react-icons/si';
import { Vortex } from './ui/vortex';

function Skills() {
    const skills =  [
        {
            text: "React",
            Icon:FaReact,
        
        },
        {
            text: "Next",
            Icon:RiNextjsFill,
        
        },
        {
            text: "Tailwind",
            Icon:RiTailwindCssFill,
        
        },
        {
            text: "Mongo",
            Icon:BiLogoMongodb,
        
        },
        {
            text: "Express",
            Icon:SiExpress ,
        
        },
        {
            text: "Node",
            Icon:FaNode ,
        
        },
       
        
    ]
  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title text='Skills 💫' className='flex flex-col justify-center items-center -rotate-3'/>
      
      <HoverEffect items={skills}/>
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      ></Vortex>
    </div>
  )
}

export default Skills
