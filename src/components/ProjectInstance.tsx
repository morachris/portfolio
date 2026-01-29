import React from 'react'
import type { ImageMetadata } from 'astro'

interface Props {
  title: string,
  description: string,
  specs: {
    date: string,
    type: string,
  },
  markdownContent: string,
  images: [ImageMetadata],
}

const ProjectInstance: React.FC<Props> = ({ title, description, specs, markdownContent, images }: Props) => {
  return (
    <div className='min-h-screen w-full'>
      <a href='/' className='fixed bg-neutral-800 hover:border-none hover:bg-linear-90 hover:from-[#2441FF] hover:via-[#FF7DB7] hover:to-[#FFC471] rounded-md p-0.5 transition-all z-30
        lg:w-14 lg:h-14 lg:top-16 lg:left-10
        sm:top-14 sm:left-8
        w-14 h-14 top-12 left-7
        hover:bg-[#090d24] hover:shadow-[0_0_30px_rgba(36,65,255,0.7)] hover:cursor-pointer hover:scale-105'>
          <div className='bg-[#010007] flex items-center justify-center rounded-sm h-full'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
              className='h-10 w-10'>
              <path fill="#ffffff" d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z"/>
            </svg>
          </div>
      </a>

      <div className='min-h-screen flex flex-col pb-24'>
        <div className='flex flex-col justify-center gap-8 items-center bg-[#010007] border-b border-neutral-800 w-full pt-32 pb-16'>
          <h1 className='font-sans text-center bg-linear-90 from-[#2441FF] via-[#FF7DB7] to-[#FFC471] text-transparent bg-clip-text
            xl:text-[12vw] xl:w-6xl xl:leading-[12vw]
            lg:text-[12vw] lg:w-4xl lg:leading-[12vw]
            sm:text-[14vw] sm:w-[70vw] sm:leading-[14vw]
            text-[16vw] w-[80vw] leading-[16vw]'>
            {title}
          </h1>

          <div className='bg-linear-90 p-0.5 from-[#2441FF] via-[#FF7DB7] to-[#FFC471] mt-4 m-auto rounded-md text-neutral-200
            xl:w-xl xl:text-xl
            sm:text-xl
            sm:w-lg sm:text-[1em]
            w-[70vw] text-[0.8em]'>
            
            <div className='bg-[#010007] rounded-md flex justify-evenly items-center gap-10 py-2
            px-8'>
              <div className='flex flex-col tracking-tighter
                xl:text-lg'>
                <label htmlFor="date-timeline">
                  Timeline:
                </label>
                <p className='text-neutral-400'>
                  {specs.date}
                </p>
              </div>

              <div className='flex flex-col tracking-tighter
                xl:text-md'>
                <label htmlFor="type">
                  Type:
                </label>
                <p className='text-neutral-400'>
                  {specs.type}
                </p>
              </div>
            </div>
          </div>
        </div>

        <img 
          src={images[0].src} 
          alt="Project Image" 
          className='rounded-md m-auto mt-16
            xl:w-7xl' 
        />

        <div className='relative flex m-auto mb-20 gap-16
        xl:w-300
        lg:w-4xl
        md:flex-row md:justify-between md:w-[80vw]
        sm:flex-col sm:mt-24 sm:w-md
        flex-col w-2xs mt-32'>
          <div className='self-start text-neutral-200 
            md:w-1/2 md:top-32 md:sticky md:self-start
            relative sm:mt-0'>
            <h2 className='text-[4em]'>
              {title}
            </h2>

            <p className='text-neutral-400 whitespace-pre-line font-sans-alt tracking-tighter
            text-lg leading-[1.3em]'>
              {description}
            </p>

            <div className='flex flex-wrap justify-center gap-4 mt-8 m-auto'>
              {images.slice(1).map((image, index) => {
                return (
                  <img 
                    src={image.src} 
                    alt={"Project Screenshot"} 
                    key={index} 
                    className='rounded-md w-2xl object-cover'  
                  />
                )
              })}
            </div>
          </div>

          <div className='text-neutral-400 font-sans-alt m-auto tracking-tighter
            prose prose-slate 
            prose-p:text-lg prose-p:font-sans-alt
            prose-h2:font-sans prose-h2:mb-6 prose-h2:text-neutral-200 prose-h3:font-sans prose-h3:text-neutral-200 prose-strong:text-neutral-400
            prose-hr:mb-6 prose-hr:border-neutral-800 prose-blockquote:text-neutral-300
            prose-li:text-lg
            prose-table:text-sm prose-thead:border-neutral-600 prose-th:text-neutral-300 prose-tr:text-neutral-400 prose-tr:border-neutral-800 prose-code:before:content-[""] prose-code:after:content-[""] prose-code:text-[#8899f8] prose-code:bg-neutral-800 prose-code:py-1 prose-code:px-2 prose-code:rounded-sm prose-code:break-all
            
            md:w-1/2 prose-h2:text-[2.7em] prose-h3:text-[2em]
            sm:w-md
            w-2xs'
            dangerouslySetInnerHTML={{ __html: markdownContent }}
            suppressHydrationWarning>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectInstance;