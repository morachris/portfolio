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
    <div className='min-h-screen w-full overflow-hidden py-32'>
      <div className='m-auto flex flex-col justify-center gap-4 text-[#010007]
        xl:w-6xl'>
        <h1 className='font-sans m-auto
          xl:text-8xl'>
          {title}
        </h1>

        <p className='font-sans-alt text-center tracking-tighter
          xl:text-xl'>
          {description}
        </p>

        <div className='bg-black mt-4 m-auto rounded-md text-white flex justify-center items-center
          xl:w-xl
          gap-16 py-3 px-4'>
          <div className='flex flex-col tracking-tighter
            xl:text-md'>
            <label htmlFor="date-timeline">
              Timeline:
            </label>
            <p className='text-neutral-400'>
              {specs.date}
            </p>
          </div>

          <div>
            <label htmlFor="type">
              Type:
            </label>
            <p className='text-neutral-400'>
              {specs.type}
            </p>
          </div>
        </div>

        <div className='prose text-2xl 
          prose-p:text-lg prose-li:text-lg prose-table:text-lg'
          dangerouslySetInnerHTML={{ __html: markdownContent }}
          suppressHydrationWarning>
        </div>
      </div>
    </div>
  )
}

export default ProjectInstance