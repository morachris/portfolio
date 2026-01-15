import React from 'react'

const Navigation: React.FC = () => {
  return (
    <nav className='sticky w-full flex justify-center px-2 font-sans z-20
    md:text-[1.6em] md:-my-[1.6em] md:mb-8
    sm:text-[1.5em] sm:-my-[1.5em] sm:bottom-[3em] sm:mb-8
    text-[1em] bottom-[3em] tracking-tighter mb-4'>
      <div className='flex items-center text-white rounded-full has-[:hover]:bg-transparent transition-normal duration-200 group'>
        <a className='rounded-l-full transition-all p-px bg-neutral-800 flex justify-center items-center nav-btn 
          peer peer/about
          hover:bg-linear-90 hover:from-[#2441FF] hover:via-[#FF7DB7] hover:to-[#FFC471] hover:cursor-pointer hover:mr-4 hover:rounded-full hover:shadow-[0_0_30px_rgba(36,65,255,0.7)]'>
            <div className='bg-black w-full h-full py-2 px-4 rounded-l-full hover:rounded-full transition-all'>
              about
            </div>
        </a>

        <a className='transition-all p-px bg-neutral-800 flex justify-center items-center rounded-none nav-btn 
          peer peer/projects peer-hover/about:rounded-l-full peer-hover/contact:rounded-r-full
          hover:bg-linear-90 hover:from-[#2441FF] hover:via-[#FF7DB7] hover:to-[#FFC471] hover:cursor-pointer hover:mx-4 hover:rounded-full hover:shadow-[0_0_30px_rgba(36,65,255,0.7)]'>
            <div className='bg-black w-full h-full py-2 px-4 rounded-none hover:rounded-full transition-all'>
              projects
            </div>
        </a>

        <a className='transition-all p-px bg-neutral-800 flex justify-center items-center rounded-none nav-btn 
          peer peer/contact peer-hover/projects:rounded-l-full
          hover:bg-linear-90 hover:from-[#2441FF] hover:via-[#FF7DB7] hover:to-[#FFC471] hover:cursor-pointer hover:mx-4 hover:rounded-full hover:shadow-[0_0_30px_rgba(36,65,255,0.7)]'>
            <div className='bg-black w-full h-full py-2 px-4 hover:rounded-full transition-all'>
              contact
            </div>
        </a>

        <a className='rounded-r-full transition-all p-px bg-neutral-800 flex justify-center items-center rounded-none nav-btn 
          peer peer/resume
          hover:bg-linear-90 hover:from-[#2441FF] hover:via-[#FF7DB7] hover:to-[#FFC471] hover:cursor-pointer hover:ml-4 hover:rounded-full hover:shadow-[0_0_30px_rgba(36,65,255,0.7)]'>
            <div className='bg-black w-full h-full py-2 px-4 rounded-r-full hover:rounded-full transition-all'>
              resume
            </div>
        </a>
      </div>
    </nav>
  );
}

export default Navigation;