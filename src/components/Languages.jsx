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
import azureLogo from '../img/Azure.png'
import cSharpLogo from '../img/CSharp.png'

const Languages = () => {
  return (
    <div className='text-white py-48'>
        <div className='w-full text-center'>
            <p className='pb-5 text-5xl font-bold'>Technologies</p>
            <p className='pb-10'>Various technologies/languages I've used extensively</p>
        </div>
        
        <div className='md:mx-[80px] mx-[12px]'>
            <ul className='flex flex-wrap font-bold text-center justify-center'>
                <li className='m-5 group'>
                    <img className='object-contain w-20 h-20 transition-all group-hover:scale-125' src={javaLogo} alt="Java Language Logo"></img>
                    <div className='transition-all transform opacity-0 translate-y-2 group-hover:opacity-100'>
                        <p>Java</p>
                    </div>
                </li>

                <li className='m-5 group'>
                    <img className='object-contain w-20 h-20 transition-all group-hover:scale-125' src={cLogo} alt="C Language Logo"></img>
                    <div className='transition-all transform opacity-0 translate-y-2 group-hover:opacity-100'>
                        <p>C</p>
                    </div>
                </li>

                <li className='m-5 group'>
                    <img className='object-contain w-20 h-20 transition-all group-hover:scale-125' src={cSharpLogo} alt="C# Language Logo"></img>
                    <div className='transition-all transform opacity-0 translate-y-2 group-hover:opacity-100'>
                        <p>C</p>
                    </div>
                </li>

                <li className='m-5 group'>
                    <img className='object-contain w-20 h-20 transition-all group-hover:scale-125' src={jsLogo} alt="Javascript Language Logo"></img>

                    <div className='transition-all transform opacity-0 translate-y-2 group-hover:opacity-100'>
                        <p>JavaScript</p>
                    </div>
                </li>

                <li className='m-5 group'>
                    <img className='object-contain w-20 h-20 transition-all group-hover:scale-125' src={psLogo} alt="PowerShell Logo"></img>

                    <div className='transition-all transform opacity-0 translate-y-2 group-hover:opacity-100'>
                        <p>PowerShell</p>
                    </div>
                </li>

                <li className='m-5 group'>
                    <img className='object-contain w-20 h-20 transition-all group-hover:scale-125' src={pythonLogo} alt="Python Language Logo"></img>

                    <div className='transition-all transform opacity-0 translate-y-2 group-hover:opacity-100'>
                        <p>Python</p>
                    </div>
                </li>

                <li className='m-5 group'>
                    <img className='object-contain w-20 h-20 transition-all group-hover:scale-125' src={reactLogo} alt="React Logo"></img>

                    <div className='transition-all transform opacity-0 translate-y-2 group-hover:opacity-100'>
                        <p>React</p>
                    </div>
                </li>

                <li className='m-5 group'>
                    <img className='object-contain w-20 h-20 transition-all group-hover:scale-125' src={gitLogo} alt="Git Logo"></img>

                    <div className='transition-all transform opacity-0 translate-y-2 group-hover:opacity-100'>
                        <p>Git</p>
                    </div>
                </li>

                <li className='m-5 group'>
                    <img className='object-contain w-20 h-20 transition-all group-hover:scale-125' src={mongoLogo} alt="MongoDB Logo"></img>

                    <div className='transition-all transform opacity-0 translate-y-2 group-hover:opacity-100'>
                        <p>MongoDB</p>
                    </div>
                </li>

                <li className='m-5 group'>
                    <img className='object-contain w-20 h-20 transition-all group-hover:scale-125' src={nodeLogo} alt="NodeJS Logo"></img>

                    <div className='transition-all transform opacity-0 translate-y-2 group-hover:opacity-100'>
                        <p>NodeJS</p>
                    </div>
                </li>

                <li className='m-5 group'>
                    <img className='object-contain w-20 h-20 transition-all group-hover:scale-125' src={azureLogo} alt="Azure Devops Logo"></img>

                    <div className='transition-all transform opacity-0 translate-y-2 group-hover:opacity-100'>
                        <p>Azure DevOps</p>
                    </div>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Languages