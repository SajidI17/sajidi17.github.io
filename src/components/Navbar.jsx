import React from 'react'
import Scroll from 'react-scroll'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center px-4 sticky top-3 text-white'>
        {/*<h1 className='w-full md:text-3xl md:visible invisible font-bold text-[#14e4ff]'>SAJID I.</h1>*/}
        <ul className='flex font-bold border-2 border-solid rounded-lg bg-neutral-800 border-blue-700'>
            <li className='p-4 cursor-pointer transition-all hover:text-blue-600 hover:scale-110'>
              <Scroll.Link activeClass='active' smooth spy to='home'>Home</Scroll.Link>
            </li>
            <li className='p-4 cursor-pointer transition-all hover:text-blue-600 hover:scale-110'>
              <Scroll.Link activeClass='active' smooth spy to='languages'>Technologies</Scroll.Link>
            </li>
            <li className='p-4 cursor-pointer transition-all hover:text-blue-600 hover:scale-110'>
              <Scroll.Link activeClass='active' smooth spy to='work'>Work</Scroll.Link>
            </li>
            <li className='p-4 cursor-pointer transition-all hover:text-blue-600 hover:scale-110'>
              <Scroll.Link activeClass='active' smooth spy to='contact'>Contact</Scroll.Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar