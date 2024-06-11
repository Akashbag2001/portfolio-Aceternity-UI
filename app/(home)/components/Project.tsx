import React from 'react'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiNextdotjs } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from './ui/direction-aware-hover'
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
function Project() {
    const projects = [
        {
            title : "Online movie/Series seacher",
            tech : [SiNextdotjs,RiTailwindCssFill ],
            link: "https://hulu-clone-react-nextjs-ma27.vercel.app/?genre=fetchTrending",
            cover : "/hulu.png",
            background : "bg-green-500"
        },
        {
            title : "Twitter Clone",
            tech : [FaReact,RiTailwindCssFill,IoLogoFirebase ],
            link: "https://twitter-clone-18a0a.web.app/",
            cover : "/twitter-thump.png",
            background : "bg-indigo-500"
        },
        {
            title : "GPT-3(Modern UI/UX)",
            tech : [FaReact,FaCss3Alt ],
            link: "https://gpt3-20023.netlify.app/",
            cover : "/gpt-3-thump.png",
            background : "bg-green-500"
        },
       

    ]
  return (
    <div className='py-10 p-5 sm:p-0'>
      <Title text='Projects ✅' className='flex flex-col justify-center items-center -rotate-3'/>
      <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
        {projects.map((project,index)=>{
            return <Link href={project.link} key={index}>
                <div className={cn("p-5 rounded-b-md", project.background)}>
                <DirectionAwareHover imageUrl={project.cover} className='w-full cursor-pointer space-y-5'>
                    <div className='space-y-5'>
                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                    <div className='flex items-center gap-5'>
                        {project.tech.map((Icon,index)=>{
                            return <Icon className='w-8 h-8' key={index}/>
                        })}
                    </div>
                    </div>
                </DirectionAwareHover>
                </div>
            </Link>
        })}
      </div>
    </div>
  )
}

export default Project
