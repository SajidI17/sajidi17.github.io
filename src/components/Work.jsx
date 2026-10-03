import React from 'react'

const experience = [
  {
    role: 'Digital Product Developer',
    company: 'House of Commons',
    dates: 'Sept 2025 – Present',
    location: 'Ottawa, ON',
    points: [
      <>Developed and maintained <b>JavaScript</b> based <b>ServiceNow</b> Business Rules, Flow Designer workflows, and Service Portal enhancements for parliamentary ITSM systems serving <b>2,500+ users</b></>,
      <>Refactored legacy <b>C#/.NET</b> codebases and <b>CI/CD pipelines</b> from non-functional states by reconciling source code with production changes and modernizing old build and deployment scripts</>,
      <>Automated record creation through a <b>REST API</b> integration between ServiceNow and an internal application, implementing certificate-based authentication, retry handling and monitoring</>,
      <>Advised multiple teams on CI/CD architecture across <b>50+ Azure DevOps pipelines</b> defining reusable YAML templates/scripts, environment-specific configuration, and deployment protection standards</>,
      <>Maintained and configured <b>48 Windows servers</b> across 4 environments, overseeing database migrations, DNS management, load-balancing, and IIS configuration</>,
    ],
    tags: ['ServiceNow', 'JavaScript', 'C#', '.NET', 'Azure DevOps', 'REST API', 'YAML', 'Windows Server', 'IIS'],
  },
  {
    role: 'Developer / Student',
    company: 'House of Commons — Corporate Systems',
    dates: 'Sept 2023 – Dec 2024, May 2025 – Aug 2025',
    location: 'Ottawa, ON',
    points: [
      <>Owned an <b>Azure</b>-hosted <b>C#</b> service to automate bidirectional change tracking, record mapping, and retry handling between <b>Microsoft SQL</b> and a cloud service while preventing duplicate records and synchronization loops</>,
      <>Led the team to develop custom automated <b>build and deployment pipelines</b> with rollback support for over 30 C#/.NET products, significantly enhancing efficiency by <b>approximately 80%</b></>,
    ],
    tags: ['C#', '.NET', 'Azure', 'Microsoft SQL', 'CI/CD Pipelines', 'Azure DevOps'],
  },
  {
    role: 'Developer / Co-op Student',
    company: 'House of Commons — Physical Security',
    dates: 'Sept 2022 – Dec 2022',
    location: 'Ottawa, ON',
    points: [
      <>Developed an automated deployment system using <b>PowerShell</b> to manage security software on Parliament Hill</>,
      <>Streamlined and implemented enhancements and improved automated testing to the <b>CI/CD pipeline</b> reducing processing times by <b>35%</b></>,
    ],
    tags: ['PowerShell', 'CI/CD Pipelines', 'Automation', 'Automated Testing'],
  },
  {
    role: 'Programmer Analyst / Co-op Student',
    company: 'Global Affairs Canada',
    dates: 'May 2022 – Aug 2022',
    location: 'Ottawa, ON',
    points: [
      <>Delivered <b>25+ WCAG</b> aligned government forms by migrating legacy forms to <b>Adobe Experience Manager</b> and implementing <b>JavaScript</b>-based conditional fields and validation</>,
    ],
    tags: ['JavaScript', 'Adobe Experience Manager', 'WCAG Accessibility'],
  },
]

const Work = () => {
  return (
    <div className='text-white md:mx-[80px] mx-[12px] pt-48'>
        <div className='w-full text-center'>
            <p className='pb-5 text-5xl font-bold text-blue-600'>Experience</p>
        </div>

        <div className='relative max-w-5xl mx-auto flex flex-col gap-6 md:gap-8 pl-7 sm:pl-10 md:pl-12 sm:right-5 md:right-6'>
          {/*Timeline line*/}
          <div className='absolute left-[7px] top-[34px] sm:top-12 md:top-14 bottom-0 w-0.5 rounded-full bg-gradient-to-b from-blue-600 via-blue-800 to-transparent' aria-hidden='true'></div>

          {experience.map((job) => (
            <div key={job.role + job.company} className='group relative rounded-2xl border border-neutral-700/70 bg-neutral-800/60 shadow-lg p-5 sm:p-8 md:p-10 transition-colors hover:border-blue-800'>
              {/*Timeline dot SVG */}
              <svg className='absolute -left-7 sm:-left-10 md:-left-12 top-[26px] sm:top-10 md:top-12 h-4 w-4 transition-transform group-hover:scale-125' viewBox='0 0 16 16' aria-hidden='true'>
                <circle cx='8' cy='8' r='7' strokeWidth='2' className='fill-neutral-900 stroke-blue-500' />
                <circle cx='8' cy='8' r='3' className='fill-blue-500' />
              </svg>

              <p className='text-xl sm:text-2xl font-bold text-neutral-100'>{job.role}</p>
              <p className='mt-2 text-base sm:text-lg font-semibold text-blue-500'>{job.company}</p>
              {(job.dates || job.location) && (
                <div className='mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed'>
                  {job.dates && <p>{job.dates}</p>}
                  {job.location && <p>{job.location}</p>}
                </div>
              )}

              <ul className='mt-6 space-y-4 text-sm sm:text-base text-neutral-400 leading-relaxed [&_b]:font-semibold [&_b]:text-neutral-200'>
                {job.points.map((point, i) => (
                  <li key={i} className='flex gap-3'>
                    <span className='text-blue-500 shrink-0' aria-hidden='true'>→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className='mt-6 flex flex-wrap gap-2'>
                {job.tags.map((tag) => (
                  <span key={tag} className='rounded-full border border-blue-800/60 bg-blue-950/40 px-3 py-1 text-xs sm:text-sm text-blue-300'>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Work
