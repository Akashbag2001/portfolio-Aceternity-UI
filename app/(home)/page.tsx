import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';

function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-5  ">
          {/* navBar */}
          <NavBar />
          {/* Hero section */}
          <HeroSection />
        </div>
        <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute w-full -bottom-5 left-0 xl:bottom-0'></div>
      </div>
      <div className='max-w-7xl mx-auto p-5 mt-20'>
        <Skills/>
        <Project/>
        <Footer/>
      </div>
    </div>
  );
}

export default page