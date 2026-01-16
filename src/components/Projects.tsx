import React from 'react';
import ProjectCard from './ProjectCard';
import GlintCover from '../assets/project-images/glint-cover.png';
import AutomationCover from '../assets/project-images/automation-cover.png';

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

        <h2 className='font-sans text-[#2441FF] tracking-tighter text-6xl'>
          my selected work
        </h2>

        <div className='relative w-full flex items-center gap-4
        md:flex-row md:flex-wrap md:gap-0 md:justify-between
        flex-col'>
          <ProjectCard title={"Lumidir Habits"} description={"lorem ipsum"} />
          <ProjectCard title={"Automation Project"} description={"lorem ipsum"} imageUrl={AutomationCover.src} />
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