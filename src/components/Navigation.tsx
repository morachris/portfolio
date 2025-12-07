import React from 'react'

const Navigation = () => {
  return (
    <nav className='fixed bottom-10 w-full px-24 py-6 flex font-sans'>
      <ul className='flex items-center gap-4 text-lg'>
        <li className='bg-[#010007] text-white px-4 py-0.5 rounded-full'>contact me  </li>
        <li>about me</li>
        <li>projects</li>
      </ul>
    </nav>
  );
}

export default Navigation;