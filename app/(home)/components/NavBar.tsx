import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
function NavBar() {
    const socials = [
      {
        link: "https://www.linkedin.com/in/akash-bag/",
        label: "LinkedIn",
        Icon: FaLinkedin,
      },
      {
        link: "https://github.com/Akashbag2001",
        label: "Github",
        Icon: FaGithub,
      },
      {
        link: "https://x.com/AkashBag19?t=FQuCXF_KdXc5pmeynzLvIg&s=09",
        label: "X",
        Icon: FaXTwitter,
      },
    ];
  return (
    <nav className='flex justify-between items-center py-10 '>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Akash Bag 👨‍💻</h1>
        <div className='flex gap-5 items-center'>
            {socials.map((social,index)=>{
                const Icon = social.Icon
                return <Link href={social.link} key={index} aria-label={social.label}>
                   <Icon className='w-5 h-5 hover:scale-125 transition-all'/> 
                </Link>
            })}
        </div>
    </nav>
  )
}

export default NavBar