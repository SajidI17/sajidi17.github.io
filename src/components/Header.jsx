import React from 'react'
//import {AiFillGithub,AiFillLinkedin} from "react-icons/ai"
//import ResumePDF from '../pdf/Sajid_Islam_Resume.pdf'
//import BG from '../img/wallpaper.jpg'
//import {AiFillLinkedin} from "react-icons/ai"
//text-[#14e4ff]
import SILogo2 from '../img/SILogo2.png'

const Header = () => {
  return (
    <div className='text-white py-48 justify-center flex flex-wrap items-center'>
        <div className='space-y-2 md:mx-[80px] mx-[12px]'>
            <div className='text-4xl md:text-5xl font-bold'>
                <p className=''>Hey, I'm</p>
                <p className='text-5xl md:text-7xl text-blue-600'>Sajid Islam,</p>
                <p className=''>Software Developer / Progammer.</p>
            </div>
            {/*<ul className='inline-flex items-center space-x-2.5 p-2.5 border-dashed border-2 border-blue-700'>
                <a target='_blank' rel='noreferrer' href={ResumePDF}><button className='py-2.5 px-2 rounded-lg font-medium text-center bg-blue-700 transition-all hover:bg-blue-600 hover:scale-125'>Resume</button></a>
                <a target='_blank' rel='noreferrer' href='https://github.com/SajidI17'><li className=''><AiFillGithub className='fill-blue-700 transition-all hover:fill-blue-600 hover:scale-125' size={50}/></li></a>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/sajid-i-9132b71b7/'><li className=''><AiFillLinkedin className='fill-blue-700 transition-all hover:fill-blue-600 hover:scale-125' size={50}/></li></a>
              </ul>*/}
        </div>
        <div className=''>
            <img src={SILogo2} alt='Logo of initials' className='md:w-auto md:h-full w-auto h-64 pt-20'></img>
        </div>
    </div>
  )
}

export default Header