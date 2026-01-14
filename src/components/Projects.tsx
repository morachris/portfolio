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

        <h2 className='font-sans text-[#FF7DB7] tracking-tighter text-6xl'>
          my selected work
        </h2>

        <div className='relative w-full flex items-center gap-4
        md:flex-row md:flex-wrap md:gap-0 md:justify-between
        flex-col'>
          <ProjectCard title={"Lumidir Habits"} description={"lorem ipsum"} />
          <ProjectCard title={"Automation Project"} description={"lorem ipsum"} imageUrl={AutomationCover.src} />
          <ProjectCard title={"Glint"} description={"lorem ipsum"} imageUrl={GlintCover.src} />
        </div>
      </div>
    </div>
  )
}

export default Projects