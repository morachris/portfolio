import React from 'react'

const Navigation: React.FC = () => {
  return (
    <nav className='sticky w-full flex justify-center px-2 font-sans z-20
    md:text-[1.6em] md:-my-[1.6em] md:mb-8
    sm:text-[1.5em] sm:-my-[1.5em] sm:bottom-[3em] sm:mb-8
    text-[1em] bottom-[3em] tracking-tighter mb-4'>
        <a className='rounded-l-[28px] transition-all p-0.5 pr-0 bg-neutral-800 flex justify-center items-center group
          hover:bg-linear-90 hover:from-[#2441FF] hover:via-[#FF7DB7] hover:to-[#FFC471] hover:cursor-pointer hover:mr-4 hover:pr-0.5 hover:rounded-[28px] hover:shadow-[0_0_30px_rgba(36,65,255,0.7)]'>
            <div className='bg-[#010007] text-neutral-200 w-full h-full py-2 px-4 rounded-l-[28px] group-hover:rounded-[28px] transition-all'>
              about
            </div>
        </a>

        <a className='transition-all py-0.5 bg-neutral-800 flex justify-center items-center rounded-none group
          hover:bg-linear-90 hover:from-[#2441FF] hover:via-[#FF7DB7] hover:to-[#FFC471] hover:cursor-pointer hover:mx-4 hover:px-0.5 hover:rounded-[28px] hover:shadow-[0_0_30px_rgba(36,65,255,0.7)]'>
            <div className='bg-[#010007] text-neutral-200 w-full h-full py-2 px-4 rounded-none group-hover:rounded-[28px] transition-all'>
              projects
            </div>
        </a>

        <a className='transition-all py-0.5 bg-neutral-800 flex justify-center items-center rounded-none group
          hover:bg-linear-90 hover:from-[#2441FF] hover:via-[#FF7DB7] hover:to-[#FFC471] hover:cursor-pointer hover:mx-4 hover:px-0.5 hover:rounded-[28px] hover:shadow-[0_0_30px_rgba(36,65,255,0.7)]'>
            <div className='bg-[#010007] text-neutral-200 w-full h-full py-2 px-4 rounded-none group-hover:rounded-[28px] transition-all'>
              contact
            </div>
        </a>

        <a className='rounded-r-[28px] transition-all p-0.5 pl-0 bg-neutral-800 flex justify-center items-center rounded-l-xs group
          hover:bg-linear-90 hover:from-[#2441FF] hover:via-[#FF7DB7] hover:to-[#FFC471] hover:cursor-pointer hover:ml-4 hover:pl-0.5 hover:rounded-[28px] hover:shadow-[0_0_30px_rgba(36,65,255,0.7)]'>
            <div className='bg-[#010007] text-neutral-200 w-full h-full py-2 px-4 rounded-r-[28px] group-hover:rounded-[28px] transition-all'>
              resume
            </div>
        </a>
    </nav>
  );
}

export default Navigation;