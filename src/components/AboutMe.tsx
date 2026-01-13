import React from 'react';
import { useRef } from 'react';

import picture3 from '../assets/pictures-of-me/picture3.jpg';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


const AboutMe: React.FC = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(container.current, {
        x: -2000,
        duration: 0.6,
        ease: "expo.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%", // Plays when top reaches 60% of the viewport
          toggleActions: "play none none reverse", // Plays when scrolling down, reverts when scrolling up
        }
      });
    }, { scope: container }
  );

  return (
    <div ref={container} className='aboutme-section flex m-auto justify-between items-center
      xl:w-6xl
      lg:w-4xl
      md:w-2xl md:flex-row md:gap-0
      sm:w-sm
      flex-col w-2xs gap-4 py-16'>
      <div className='flex flex-col justify-center
      w-full'>
        <h2 className='font-sans text-[#2441FF] tracking-tighter text-6xl'>
          about me
        </h2>

        <p className='font-sans-alt text-[#010007] mt-8 mb-4 tracking-tighter
          xl:w-xl xl:text-2xl
          lg:w-md lg:text-2xl
          md:w-xs
          sm:text-xl
          text-xl'>

          I'm a web developer based in Costa Rica who enjoys turning ideas into clean, well-structured digital experiences. <br /><br />
          I care deeply about usability, accessibility, and thoughtful design, both in how things look and how they work under the hood.
        </p>

        <div className='flex items-center'>
          {/* Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" 
          className='md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10'>
            <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
          className='md:w-11 md:h-11 sm:w-9 sm:h-9 w-7 h-7'>
            <path d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
        </div>

        <button className='contact-button mt-8 bg-[#FFC471] text-[#010007] border border-[#010007] transition-all rounded-full
          lg:text-3xl
          md:text-2xl md:w-3xs md:ml-0
          sm:text-xl sm:w-full
          text-lg w-full m-auto py-1
          hover:bg-[#010007] hover:cursor-pointer hover:scale-105 hover:text-[#FFC471]'>
            Contact me!
        </button>
      </div>
      
      <img src={picture3.src} alt="Picture of me"
        className='relative rounded-lg border
        xl:w-md
        lg:w-sm
        md:w-2xs
        w-full'
      />
    </div>
  )
}

export default AboutMe;