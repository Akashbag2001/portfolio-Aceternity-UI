import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';

function page() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Hero section with grid background */}
      <div className="dark:bg-black bg-black dark:bg-grid-white/[0.04] bg-grid-white/[0.04] relative">
        <div className="max-w-7xl mx-auto px-5 pb-5">
          {/* NavBar */}
          <NavBar />
          {/* Hero */}
          <HeroSection />
        </div>
        {/* Fade to black */}
        <div className="h-20 xl:h-40 bg-gradient-to-t from-black absolute w-full bottom-0 left-0 pointer-events-none" />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-5">
        <Skills />
        <WorkExperience />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default page