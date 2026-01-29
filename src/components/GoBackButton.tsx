import React from 'react';

const GoBackButton: React.FC = () => {
  return (
    <button onClick={() => history.back()}
      className='fixed bg-neutral-800 hover:border-none hover:bg-linear-90 hover:from-[#2441FF] hover:via-[#FF7DB7] hover:to-[#FFC471] rounded-md p-0.5 transition-all z-30
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
    </button>
  )
}

export default GoBackButton;