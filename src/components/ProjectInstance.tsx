import React from 'react'

interface Props {
  title: string,
  description: string,
  specs: {
    date: string,
    type: string,
  },
  markdownContent: string,
  images: [string],
}

const ProjectInstance: React.FC<Props> = ({ title, description, specs, markdownContent, images }: Props) => {
  return (
    <div className='min-h-screen w-full overflow-hidden'>
      <a href='/' className='absolute border border-neutral-800 hover:border-none hover:bg-linear-90 hover:from-[#2441FF] hover:via-[#FF7DB7] hover:to-[#FFC471] w-14 
        h-14 rounded-md top-14 left-8 p-0.5 transition-all
        hover:bg-[#090d24] hover:shadow-[0_0_30px_rgba(36,65,255,0.7)] hover:cursor-pointer hover:scale-105'>
          <div className='bg-black flex items-center justify-center rounded-xs h-full'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
              className='h-10 w-10'>
              <path fill="#ffffff" d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z"/>
            </svg>
          </div>
      </a>

      <div className='bg-black min-h-screen flex flex-col justify-center items-center pb-24 bg-[url(../assets/background-dark.png)] bg-center bg-no-repeat bg-cover overflow-hidden'>
        <div className='flex flex-col py-28 bg-black w-full gap-8 border-b border-neutral-800'>
          <h1 className='font-sans m-auto text-center bg-linear-90 from-[#2441FF] via-[#FF7DB7] to-[#FFC471] text-transparent bg-clip-text
            xl:text-[12em]
            max-w-6xl leading-50'>
            {title}
          </h1>

          <p className='font-sans-alt text-center tracking-tighter m-auto text-neutral-400
            xl:w-4xl xl:text-xl'>
            {description}
          </p>

          <div className='bg-linear-90 from-[#2441FF] via-[#FF7DB7] to-[#FFC471] mt-4 m-auto rounded-md text-neutral-200
            xl:w-xl
            p-px'>
            
            <div className='bg-black rounded-md flex justify-center items-center gap-16 py-2'>
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

        <div className='py-16 mt-6 text-neutral-300 font-sans-alt 
          prose prose-2xl prose-slate 
          prose-p:text-lg prose-p:font-sans-alt
          prose-h2:font-sans prose-h2:mb-6 prose-h2:text-neutral-200 prose-h3:font-sans prose-h3:text-neutral-200 prose-strong:text-neutral-300
          prose-hr:mb-6 prose-hr:border-neutral-800 prose-blockquote:text-neutral-300
          prose-li:text-lg
          prose-table:text-sm prose-thead:border-neutral-600 prose-th:text-neutral-300 prose-tr:text-neutral-400 prose-tr:border-neutral-800 prose-code:before:content-[""] prose-code:after:content-[""] prose-code:text-[#8899f8] prose-code:bg-neutral-800 prose-code:py-2 prose-code:px-3 prose-code:rounded-sm'
          dangerouslySetInnerHTML={{ __html: markdownContent }}
          suppressHydrationWarning>
        </div>
      </div>
    </div>
  )
}

export default ProjectInstance