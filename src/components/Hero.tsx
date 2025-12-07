import React from 'react'
import OverlayBorder from './OverlayBorder';

const Hero = () => {
  return (
    <div className='px-56 py-28 flex flex-col justify-center'>
      <div className='fixed bg-[#010007] h-fit flex flex-col px-8 justify-center pt-4 pb-8 rounded-md'>
        <p className='text-white text-6xl font-semibold tracking-tighter px-4'>welcome to my</p>
        <p className='bg-linear-90 from-[#5376FF] via-[#FF73B1] to-[#3DFF81] text-transparent -ml-3 bg-clip-text text-[24em] font-bold tracking-tight leading-90'>portfolio</p>
      </div>
      <p className='mt-132 text-4xl font-sans-alt tracking-tighter'>Nice to meet you! I'm Chris, another web developer passionate about building stuff.</p>
    </div>
  )
}

export default Hero;