import React from 'react'

interface Props {
  title: string,
  description: string,
  imageUrl?: string,
}

const ProjectCard: React.FC<Props> = ({ title, description, imageUrl }: Props) => {
  return (
    <a href={'/work/' + title.toLocaleLowerCase().replace(" ", "-")} className='group rounded-xl bg-neutral-300 flex flex-col border border-neutral-300 
      xl:w-[23em]
      lg:w-2xs
      md:w-[13.5em]
      w-full
      hover:cursor-pointer hover:scale-105 hover:border-black hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all'>
      <div className='bg-neutral-100 h-full rounded-t-xl inset-shadow-sm inset-shadow-neutral-300
        xl:min-h-[28.5em]
        lg:min-h-[22.4em]
        md:min-h-[16.6em]'>
        <img src={imageUrl} alt="Project Cover" className='rounded-t-xl w-full h-full object-cover' />
      </div>
      <div className='p-4 bg-neutral-200 rounded-b-xl border-t border-neutral-300 group-hover:bg-black'>
        <h3 className='font-sans text-2xl group-hover:text-[#FF7DB7] font-semibold
          md:text-xl'>
          {title}
        </h3>
        <p className='font-sans-alt text-lg text-neutral-700 group-hover:text-white tracking-tighter'>
          {description}
        </p>
      </div>
    </a>
  )
}

export default ProjectCard;