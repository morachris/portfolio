import React from 'react'

const ProjectInstance = ({ }) => {
  return (
    <div>

      <br /> 
      <hr className='text-neutral-300' />
      <br />

      <h3 className='text-neutral-500 font-sans font-semibold tracking-tight
      text-4xl'>
        project title
      </h3>

      <div className='flex my-4 w-full
        md:flex-row
        flex-col justify-between gap-8'>

        <div className='font-sans-alt text-[#010007]
          xl:text-2xl
          lg:w-2/3 lg:text-2xl
          md:w-2/4
          sm:text-xl
          text-xl'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis illum temporibus officiis tenetur deleniti quidem, suscipit veniam eos atque, excepturi, nemo cum? Dolor harum asperiores excepturi quod ipsam deserunt accusantium.
          <br /><br />

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem corporis cumque ducimus repudiandae deleniti porro voluptas pariatur laudantium eligendi sequi quisquam recusandae esse et, ea, voluptate saepe doloribus tempore.
        </div>

        <div className='flex
          lg:w-1/3
          md:w-2/4
          gap-2 flex-col'>
          {/* Each image is a div. Replace later... */}
          <div className='w-full h-56 bg-neutral-200'></div>
          <div className='w-full h-56 bg-neutral-200'></div>
          <div className='w-full h-56 bg-neutral-200'></div>
        </div>
      </div>
    </div>
  )
}

export default ProjectInstance;