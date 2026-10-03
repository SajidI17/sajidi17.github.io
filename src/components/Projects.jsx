import React from 'react'
import GTFSTransitRouting from '../img/GTFSTransitRouting.png'
import { AiFillGithub } from "react-icons/ai"

const project = {
  name: 'GTFS Transit Routing',
  image: GTFSTransitRouting,
  imageAlt: 'Map of Bus Route',
  link: 'https://github.com/SajidI17/GTFSTransitRouting',
  points: [
    <>Built a <b>full-stack</b> transit application with a <b>Spring Boot</b> REST API and <b>PostgreSQL</b>, parsing raw OC Transpo GTFS data to calculate routes with transfers and walking connections</>,
    <>Engineered a custom earliest-arrival routing algorithm using topological ordering, cross-checking route results against existing transit applications</>,
  ],
  tags: ['Java', 'Spring Boot', 'PostgreSQL', 'JavaScript', 'Python', 'CSS', 'HTML'],
}

const Projects = () => {
  return (
    <div className='text-white md:mx-[80px] mx-[12px] py-48'>
      <div className='w-full text-center'>
        <p className='text-5xl font-bold text-center pb-5 text-blue-600'>Featured Project</p>
      </div>

      <div className='max-w-5xl mx-auto rounded-2xl border border-neutral-700/70 bg-neutral-800/60 shadow-lg overflow-hidden transition-colors hover:border-blue-800 md:flex'>
        <div className='md:w-1/2 flex items-center bg-neutral-900/60 border-b md:border-b-0 md:border-r border-neutral-700/70'>
          <img className='w-full h-full object-cover' src={project.image} alt={project.imageAlt}></img>
        </div>

        <div className='md:w-1/2 p-5 sm:p-8 md:p-10 flex flex-col'>
          <p className='text-sm font-semibold uppercase tracking-wider text-blue-500'>Featured Project</p>
          <p className='mt-2 text-xl sm:text-2xl font-bold text-neutral-100'>{project.name}</p>

          <ul className='mt-6 space-y-4 text-sm sm:text-base text-neutral-400 leading-relaxed [&_b]:font-semibold [&_b]:text-neutral-200'>
            {project.points.map((point, i) => (
              <li key={i} className='flex gap-3'>
                <span className='text-blue-500 shrink-0' aria-hidden='true'>→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className='mt-6 flex flex-wrap gap-2'>
            {project.tags.map((tag) => (
              <span key={tag} className='rounded-full border border-blue-800/60 bg-blue-950/40 px-3 py-1 text-xs sm:text-sm text-blue-300'>{tag}</span>
            ))}
          </div>

          <div className='mt-8 md:mt-auto md:pt-8'>
            <a target='_blank' rel='noreferrer' href={project.link} className='inline-flex items-center gap-2 py-2.5 px-3 rounded-lg font-bold bg-blue-700 transition-all hover:bg-blue-600 hover:scale-110'>
              <AiFillGithub size={24}/> View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
