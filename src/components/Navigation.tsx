import React from 'react'

const Navigation = () => {
  return (
    <nav className='w-full px-24 py-6 flex justify-between font-sans'>
      <span>Nav Component</span>

      <ul className='flex gap-4'>
        <li>About me</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;