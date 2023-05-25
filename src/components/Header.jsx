import React from 'react'
import {AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import ResumePDF from '../pdf/Sajid_Islam_Resume.pdf'
//import BG from '../img/wallpaper.jpg'
//import {AiFillLinkedin} from "react-icons/ai"
//text-[#14e4ff]

const Header = () => {
  return (
    <div className='text-white py-48'>
        <div className='items-center text-center flex flex-col mt-[96px]'>
            <p className='text-2xl p-1'>Hello! My name is</p>
            <p className='text-5xl p-1 font-bold text-blue-700'>Sajid Islam</p>
            <p className='pt-1 pb-2'>I am a Software Developer and Programmer studying at Carleton University</p>
            <ul className='flex items-center border-dashed border-2 border-blue-700'>
                <a target='_blank' rel='noreferrer' href={ResumePDF}><button className='py-2.5 px-2 mx-3 rounded-lg font-medium text-center bg-blue-700 transition-all hover:bg-blue-600 hover:scale-125'>Resume</button></a>
                <a target='_blank' rel='noreferrer' href='https://github.com/SajidI17'><li className='m-3'><AiFillGithub className='fill-blue-700 transition-all hover:fill-blue-600 hover:scale-125' size={50}/></li></a>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/sajid-i-9132b71b7/'><li className='m-3'><AiFillLinkedin className='fill-blue-700 transition-all hover:fill-blue-600 hover:scale-125' size={50}/></li></a>
            </ul>
        </div>
    </div>
  )
}

export default Header