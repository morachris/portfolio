import React from 'react'

const Navigation: React.FC = () => {
  return (
    <nav className='sticky w-full flex justify-center px-2 font-sans z-20
    md:text-[1.6em] md:-my-[1.6em] md:mb-8
    sm:text-[1.5em] sm:-my-[1.5em] sm:bottom-[3em] sm:mb-8
    text-[1em] bottom-[3em] tracking-tighter mb-4'>
      <div className='bg-[#010007] flex items-center text-white rounded-full has-[:hover]:bg-transparent transition-normal duration-200
        '>
        <button className='bg-[#010007] pl-6 pr-4 py-2 rounded-l-full transition-all
          hover:bg-[#2441FF] hover:font-semibold hover:mr-4 hover:pr-6 hover:rounded-full hover:outline-1 hover:outline-[#010007] hover:cursor-pointer'>
          about
        </button>

        <button className='bg-[#010007] px-4 py-2 transition-all
          hover:bg-[#2441FF] hover:font-semibold hover:ml-4 hover:mr-4 hover:rounded-full hover:outline-1 hover:outline-[#010007] hover:cursor-pointer'>
          projects
        </button>

        <button className='bg-[#010007] px-4 py-2 transition-all
          hover:bg-[#2441FF] hover:font-semibold hover:ml-4 hover:mr-4 hover:rounded-full hover:outline-1 hover:outline-[#010007] hover:cursor-pointer'>
          contact
        </button>

        <button className='bg-[#010007] pl-4 pr-6 py-2 rounded-r-full transition-all
          hover:bg-[#2441FF] hover:font-semibold hover:ml-4 hover:pl-6 hover:rounded-full hover:outline-1 hover:outline-[#010007] hover:cursor-pointer'>
          resume
        </button>
      </div>
    </nav>
  );
}

export default Navigation;