import React from 'react'

const Navigation = () => {
  return (
    <nav className='sticky w-full flex justify-center px-4 font-sans z-100
    lg:text-[1.6em]
    md:text-[1.4em]
    sm:text-[1.2em]
    text-[1em] bottom-14 tracking-tighter'>
      <div className='bg-[#010007] flex items-center text-white rounded-full has-[:hover]:bg-transparent transition-normal duration-200
        '>
        <button className='bg-[#010007] pl-8 pr-4 py-2 rounded-l-full transition-all
        hover:bg-[#2441FF] hover:font-semibold hover:mr-4 hover:pr-8 hover:rounded-full hover:outline-1 hover:outline-[#010007] hover:cursor-pointer'>
          contact me
        </button>

        <button className='bg-[#010007] px-4 py-2 border-l border-r border-gray-900 transition-all
        hover:bg-[#2441FF] hover:font-semibold hover:ml-4 hover:mr-4 hover:pl-8 hover:pr-8 hover:rounded-full hover:border-none hover:outline-1 hover:outline-[#010007] hover:cursor-pointer'>
          about me
        </button>

        <button className='bg-[#010007] pl-4 pr-8 py-2 rounded-r-full transition-all
        hover:bg-[#2441FF] hover:font-semibold hover:ml-4 hover:pl-8 hover:rounded-full hover:outline-1 hover:outline-[#010007] hover:cursor-pointer'>
          projects
        </button>
      </div>
    </nav>
  );
}

export default Navigation;