import React from 'react'
import Portfolio from '../img/Portfolio.png'
import GTFSTransitRouting from '../img/GTFSTransitRouting.png'
import { FaCode } from "react-icons/fa";



const Projects = () => {
  return (
    <div className='text-white md:mx-[80px] mx-[12px] py-48'>
      <div className='w-full text-center'>
        <p className='text-5xl font-bold text-center pb-5 text-blue-600 '>Projects</p>
        <p className='pb-10'>A sample of projects I have worked on.</p>
      </div>
          

      <div className='flex flex-wrap justify-center '>
        <div className="flex flex-col m-6 w-full sm:w-96 rounded-xl overflow-hidden shadow-lg bg-neutral-800 border-2 border-solid border-blue-800">
          <img className="w-full object-contain" src={Portfolio} alt="Website Page"></img>
          <div className="px-6 py-4">
            <div className="font-bold text-md mb-2">Portfolio Website</div>
            <p className="text-base">
              <br/>The current website made with with React and TailwindCSS hosted on GitHub. 
            </p>
          </div>

          <div className="h-full flex justify-center items-center">
            <a target='_blank' rel='noreferrer' href='https://github.com/SajidI17/sajidi17.github.io'><FaCode className='fill-blue-700 transition-all hover:fill-blue-600 hover:scale-125' size={60}/></a>
          </div>

          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">TailwindCSS</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
          </div>
        </div>
        

        <div className="flex flex-col m-6 w-full sm:w-96 rounded-xl overflow-hidden shadow-lg bg-neutral-800 border-2 border-solid border-blue-800">
          <img className="w-full object-contain" src={GTFSTransitRouting} alt="Map of Bus Route"></img>
          <div className="px-6 py-4">
            <div className="font-bold text-md mb-2">GTFS Transit Routing</div>
            <p className="text-base">
              <br/>A full-stack application that utilizes GTFS data to produce an optimal transit route between two stops. The core focus is the Java algorithm that constructs a subgraph and returns the optimal transit route when given two stops. 
            </p>
          </div>

          <div className="h-full flex justify-center items-center">
            <a target='_blank' rel='noreferrer' href='https://github.com/SajidI17/GTFSTransitRouting'><FaCode className='fill-blue-700 transition-all hover:fill-blue-600 hover:scale-125' size={60}/></a>
          </div>

          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Spring Boot</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">PostgreSQL</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Python</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
          </div>
        </div>


      </div>
    </div>

  )
}

export default Projects