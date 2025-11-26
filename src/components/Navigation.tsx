import React from 'react'

const Navigation = () => {
  return (
    <nav className='w-screen p-4 flex items-start justify-between border-r'>
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