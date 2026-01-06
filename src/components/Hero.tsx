import React from 'react';
import { useRef } from 'react';

import picture from '../assets/picture.png';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".main-heading", {y: -200, ease: "back.inOut", duration: 1})
        .from(".main-title", {x: -1400, ease: "back.inOut", duration: 1}, "-= 1")
        .from(".main-paragraph", {y: -150, ease:"back.inOut", duration: 1}, "-= 2");
    }, {scope: container}
  );

  return (
    <div ref={container} className='bg-[url(../assets/background.png)] bg-center bg-no-repeat bg-cover drop-shadow-xl/20 z-10'>
      <div className='w-full flex flex-col items-center min-h-screen'>
        <div className='overflow-hidden mt-40'>

          <div className='bg-[#010007] w-fit h-fit flex flex-col justify-center rounded-md z-20
            md:px-8 md:pb-0
            px-4 pt-4 pb-4 '>
            <p className='main-heading text-white font-semibold tracking-tighter
            xl:text-6xl 
            lg:text-5xl
            md:text-4xl
            sm:text-3xl
            text-[1.8rem]'>
              hi there! welcome to my
            </p>

            <p className='main-title bg-linear-90 from-[#2441FF] via-[#FF7DB7] to-[#FFC471] text-transparent bg-clip-text font-bold -tracking-normal
            xl:text-[17em] xl:leading-75
            lg:text-[13em] lg:leading-60
            md:text-[10em] md:leading-45
            sm:text-[8em] sm:leading-30
            text-[5.5em] leading-20'>
              portfolio
            </p>
          </div>

          <p className='main-paragraph font-sans-alt tracking-tighter
          xl:w-[18em]
          lg:text-4xl lg:w-[15em]
          md:w-xl
          sm:text-3xl sm:w-lg sm:leading-10
          text-2xl w-xs leading-8 mt-4'>
            Nice to meet you! I'm Chris, a <span className='font-sans font-bold'>web developer</span> passionate about building cool stuff.
          </p>

          <div className='w-[95%] flex justify-center
            lg:justify-end'>
            <img src={picture.src} alt="Picture of me"
              className='bottom-0
              xl:w-[20em]
              lg:w-[16em]
              md:w-[13em]
              sm:w-[14em]
              absolute w-[16em]' 
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero;