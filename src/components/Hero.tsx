import React from 'react';
import { useRef } from 'react';

import pictureBW from '../assets/pictures-of-me/picture2bw.png';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Hero: React.FC = () => {
  const container = useRef(null);
  const imgContainer = useRef(null);

  return (
    <div ref={container} className='relative bg-[url(../assets/background.png)] bg-center bg-no-repeat bg-cover overflow-hidden'>
      <div className='w-full flex flex-col items-center min-h-screen'>
        <div className='overflow-hidden lg:mt-[15dvh] mt-[10dvh] m-auto z-10'>
          <div className='bg-[#010007] w-full h-fit flex flex-col justify-center rounded-md
            md:px-8 md:pb-0
            px-4 pt-4 pb-4'>

            <p className='main-heading text-neutral-200 font-normal
              xl:text-6xl 
              lg:text-5xl
              md:text-4xl
              sm:text-3xl
              text-[1.8rem]'>
                building for the web
            </p>

            <p className='main-title bg-linear-90 from-[#2441FF] via-[#FF7DB7] to-[#FFC471] text-transparent bg-clip-text font-bold tracking-normal
              xl:text-[17em] xl:leading-75
              lg:text-[13em] lg:leading-60
              md:text-[10em] md:leading-45
              sm:text-[8em] sm:leading-30
              text-[4.5em]'>
              portfolio
            </p>
          </div>

          <p className='main-paragraph font-sans-alt tracking-tighter
            xl:text-[4.5dvh] xl:leading-[5dvh] xl:w-[34.07dvw]
            lg:w-[35dvw]
            md:w-2xl
            sm:text-[4dvh] sm:leading-[4.5dvh] sm:w-lg
            text-[3dvh] w-xs leading-[3.5dvh] mt-[2dvh]'>
            I'm Chris, a web developer focused on <span className='font-semibold font-sans tracking-normal'>structure</span>, <span className='font-semibold font-sans tracking-normal'>usability</span>, and <span className='font-semibold font-sans tracking-normal'>thoughtful</span> design.
          </p>
        </div>

        <div ref={imgContainer} className='flex m-auto z-20
          xl:w-5xl
          lg:justify-end lg:w-3xl
          w-full justify-center'>
            <img src={pictureBW.src} alt="Picture of me"
              className='picture object-contain
              xl:h-[70dvh]
              lg:h-[60dvh]
              absolute h-[50dvh] max-h-[600px] min-h-[120px] bottom-0 mx-auto' 
            />
          </div>
      </div>
    </div>
  )
}

export default Hero;