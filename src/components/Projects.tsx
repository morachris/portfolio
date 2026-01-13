import React from 'react';
import ProjectInstance from './ProjectInstance';

const Projects = () => {
  return (
    <div className='projects-section flex m-auto
      w-full py-16'>
      <div className='flex flex-col justify-center
        xl:w-6xl
        lg:w-4xl
        md:w-2xl md:gap-0
        sm:w-sm
        w-2xs m-auto'>

        <h2 className='font-sans text-[#FF7DB7] tracking-tighter text-6xl'>
          my selected work
        </h2>

        <ProjectInstance />
        <ProjectInstance />
      </div>
    </div>
  )
}

export default Projects