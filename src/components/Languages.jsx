import React from 'react'

const skills = [
  {
    category: 'Languages & Frameworks',
    items: ['C# / .NET', 'Java', 'Python', 'JavaScript', 'React', 'Spring Boot'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Visual Studio', 'CI/CD Pipelines', 'Azure DevOps', 'Azure Cloud', 'ServiceNow', 'PowerShell'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'Microsoft SQL Server'],
  },
]

const Languages = () => {
  return (
    <div className='text-white md:mx-[80px] mx-[12px] pt-48'>
        <div className='w-full text-center'>
            <p className='text-5xl font-bold text-center pb-10 text-blue-600'>Technical Skills</p>
        </div>

        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
          {skills.map((group) => (
            <div key={group.category} className='rounded-2xl border border-neutral-700/70 bg-neutral-800/60 shadow-lg p-6 sm:p-8 transition-colors hover:border-blue-800'>
              <p className='text-xl font-bold text-neutral-100'>{group.category}</p>
              <ul className='mt-5 flex flex-wrap gap-2.5'>
                {group.items.map((item) => (
                  <li key={item} className='rounded-lg border border-blue-800/60 bg-blue-950/40 px-3.5 py-2 text-sm font-semibold text-blue-200 transition-colors hover:border-blue-600 hover:text-white'>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Languages
