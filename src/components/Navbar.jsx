import React from 'react'
import Scroll from 'react-scroll'

//<h1 className='w-full md:text-3xl md:visible invisible font-bold text-blue-600'>SAJID I.</h1>
//<li className='md:px-4 md:py-4 px-2 py-3 cursor-pointer transition-all hover:text-blue-600 hover:scale-110'>
//<Scroll.Link activeClass='active' smooth spy to='work'>Work</Scroll.Link>
//</li>
const Navbar = () => {
  return (
    <div className='flex justify-center z-10 px-4 sticky top-3 text-white'>

        <ul className='flex font-bold border-2 border-solid rounded-lg bg-neutral-800 border-blue-700'>
            
            <li className='md:px-4 md:py-4 px-2 py-3 cursor-pointer transition-all hover:text-blue-600 hover:scale-110'>
              <Scroll.Link activeClass='active' smooth spy to='home'>Home</Scroll.Link>
            </li>
            <li className='md:px-4 md:py-4 px-2 py-3 cursor-pointer transition-all hover:text-blue-600 hover:scale-110'>
              <Scroll.Link activeClass='active' smooth spy to='work'>Experience</Scroll.Link>
            </li>
            <li className='md:px-4 md:py-4 px-2 py-3 cursor-pointer transition-all hover:text-blue-600 hover:scale-110'>
              <Scroll.Link activeClass='active' smooth spy to='projects'>Projects</Scroll.Link>
            </li>
            <li className='md:px-4 md:py-4 px-2 py-3 cursor-pointer transition-all hover:text-blue-600 hover:scale-110'>
              <Scroll.Link activeClass='active' smooth spy to='contact'>Contact</Scroll.Link>
            </li>
        </ul>

    </div>
  )
}

export default Navbar