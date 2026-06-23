import React from 'react';
import ProjectCard from './ProjectCard';
import LumidirCover from '../assets/project-images/lumidir-cover.png';
import AutomationCover from '../assets/project-images/automation-cover.png';
import GlintCover from '../assets/project-images/glint-cover.png';

const Projects = () => {
  return (
    <div className='projects-section flex m-auto
      w-full py-16 mb-4'>
      <div className='flex flex-col justify-center
        xl:w-6xl
        lg:w-4xl
        md:w-2xl
        sm:w-sm
        w-2xs m-auto gap-8'>

        <h2 id='my-work'
          className='font-sans text-[#2441FF] tracking-tighter text-6xl scroll-mt-20'>
          my selected work
        </h2>

        <div className='relative w-full flex items-center gap-4
        md:flex-row md:flex-wrap md:gap-0 md:justify-between
        flex-col'>
          <ProjectCard 
            title={"Lumidir Habits"} 
            description={"Lumidir Habits is a personal web application designed to track habits and improve productivity by gamifying daily activities using a streaks system and a dashboard to visualize progress."} 
            imageUrl={LumidirCover.src}
          />
          <ProjectCard 
            title={"Automation Project"} 
            description={"This project is a purely academic automation and educational web application designed to support students in understanding the fundamental concepts of Object-Oriented Programming (OOP). Its primary goal is to reduce learning barriers by combining structured theoretical content with hands-on practical exercises. The application was specifically developed for fifth-year students in the Web Development program at Don Bosco Technical Professional High School and was not intended for commercial use or production environments."} 
            imageUrl={AutomationCover.src} 
          />
          <ProjectCard 
            title={"Glint"} 
            description={"Glint is a productivity-focused task management application designed to help users organize their work efficiently through structured workspaces and an integrated notes system. The primary goal of the project is to provide a clean, intuitive environment to manage tasks and group them by context."} 
            imageUrl={GlintCover.src} />
        </div>
      </div>
    </div>
  )
}

export default Projects