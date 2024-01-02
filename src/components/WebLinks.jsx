import React from 'react'
import {AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import ResumePDF from '../pdf/Sajid_Islam_Resume.pdf'

const WebLinks = () => {
  return (
    <div className='fixed z-10 bottom-10 right-1/2 transform translate-x-1/2 md:bottom-0 md:right-0 md:translate-x-0 md:mb-12 md:mr-12'>
        <ul className='text-white inline-flex items-center md:p-4 p-2 space-x-2.5  border-solid border-2 rounded-lg bg-neutral-800 border-blue-700'>
            <a target='_blank' rel='noreferrer' href={ResumePDF}><button className='py-2.5 px-2 rounded-lg font-bold text-center bg-blue-700 transition-all hover:bg-blue-600 hover:scale-110'>Resume</button></a>
            <a target='_blank' rel='noreferrer' href='https://github.com/SajidI17'><li className=''><AiFillGithub className='fill-blue-700 transition-all hover:fill-blue-600 hover:scale-125 ' size={50}/></li></a>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/sajid-i-9132b71b7/'><li className=''><AiFillLinkedin className='fill-blue-700 transition-all hover:fill-blue-600 hover:scale-125' size={50}/></li></a>
        </ul>
    </div>

  )
}

export default WebLinks