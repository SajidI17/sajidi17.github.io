import React from 'react'
import cLogo from '../img/C.png'
import javaLogo from '../img/Java.png'
import jsLogo from '../img/JS.png'
import psLogo from '../img/PowerShell.png'
import pythonLogo from '../img/Python.png'
import reactLogo from '../img/React.png'
import gitLogo from '../img/Git.png'
import mongoLogo from '../img/Mongodb.png'
import nodeLogo from '../img/Nodejs.png'

const Languages = () => {
  return (
    <div className='text-white py-48'>
        <div className='w-full text-center'>
            <p className='pb-5 text-5xl font-bold'>Technologies</p>
            <p className='pb-10'>Various technologies/languages I've used extensively</p>
        </div>
        
        <div className='md:mx-[80px] mx-[12px]'>
            <ul className='flex flex-wrap group font-bold text-center justify-center'>
                <li className='m-5'>
                    <img className='object-contain w-20 h-20 group-hover:opacity-50' src={javaLogo} alt="Java Language Logo"></img>
                    <div className='transition-all transform opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0'>
                        <p>Java</p>
                    </div>
                </li>

                <li className='m-5'>
                    <img className='object-contain w-20 h-20 group-hover:opacity-50' src={cLogo} alt="C Language Logo"></img>
                    <div className='transition-all transform opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0'>
                        <p>C</p>
                    </div>
                </li>

                <li className='m-5'>
                    <img className='object-contain w-20 h-20 group-hover:opacity-50' src={jsLogo} alt="Javascript Language Logo"></img>

                    <div className='transition-all transform opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0'>
                        <p>JavaScript</p>
                    </div>
                </li>

                <li className='m-5'>
                    <img className='object-contain w-20 h-20 group-hover:opacity-50' src={psLogo} alt="PowerShell Logo"></img>

                    <div className='transition-all transform opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0'>
                        <p>PowerShell</p>
                    </div>
                </li>

                <li className='m-5'>
                    <img className='object-contain w-20 h-20 group-hover:opacity-50' src={pythonLogo} alt="Python Language Logo"></img>

                    <div className='transition-all transform opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0'>
                        <p>Python</p>
                    </div>
                </li>

                <li className='m-5'>
                    <img className='object-contain w-20 h-20 group-hover:opacity-50' src={reactLogo} alt="React Logo"></img>

                    <div className='transition-all transform opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0'>
                        <p>React</p>
                    </div>
                </li>

                <li className='m-5'>
                    <img className='object-contain w-20 h-20 group-hover:opacity-50' src={gitLogo} alt="Git Logo"></img>

                    <div className='transition-all transform opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0'>
                        <p>Git</p>
                    </div>
                </li>

                <li className='m-5'>
                    <img className='object-contain w-20 h-20 group-hover:opacity-50' src={mongoLogo} alt="MongoDB Logo"></img>

                    <div className='transition-all transform opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0'>
                        <p>MongoDB</p>
                    </div>
                </li>

                <li className='m-5'>
                    <img className='object-contain w-20 h-20 group-hover:opacity-50' src={nodeLogo} alt="NodeJS Logo"></img>

                    <div className='transition-all transform opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0'>
                        <p>NodeJS</p>
                    </div>
                </li>


            </ul>
        </div>
    </div>
  )
}

export default Languages