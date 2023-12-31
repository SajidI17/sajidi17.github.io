import React from 'react'
import HOC from '../img/HOC-Emblem.png'
import GAC from '../img/Global-Affairs-Canada.png'
import SSC from '../img/SSC-Logo.png'
//bg-gradient-to-r from-[#202639] to-[#3f4c77]

const Work = () => {
  return (
    <div className='text-white md:mx-[80px] mx-[12px] py-48'>
        <p className='text-5xl font-bold text-center pb-5'>Previous Work Experience</p>


        <div className='flex flex-wrap justify-center'>

        <div className="flex flex-col m-6 w-full sm:w-96 rounded-xl overflow-hidden shadow-lg bg-neutral-800">
            <img className="w-full object-contain" src={HOC} alt="Sunset in the mountains"></img>
            <div className="px-6 py-4 h-full">
              <div className="font-bold text-md mb-2">Corporate Systems - House of Commons</div>
              <p className='font-bold'>Co-op Student</p>
              <p className="text-base">
              • Lead the team to develop custom automated build and deployment pipelines for over 30 products, significantly enhancing efficiency and consistency of deployments, while minimizing downtime 
              <br/><br/>•	Developed an automatic cloud-hosted service using C# for syncing critical security data between a database and an API, reducing manual labour and minimizing human errors 
              <br/><br/>•	Developed and maintained custom deployment scripts for website applications and databases, simplifying procedures and reducing the need for the deployment team to follow complex product-specific processes
              </p>
            </div>

            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Build/Release Pipelines</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">C# Custom Application</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">PowerShell Scripting</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Automation</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Visual Studio</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">DevOps</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Git</span>
            </div>
          </div>

        <div className="flex flex-col m-6 w-full sm:w-96 rounded-xl overflow-hidden shadow-lg bg-neutral-800">
            <img className="w-full object-contain" src={HOC} alt="Sunset in the mountains"></img>
            <div className="px-6 py-4 h-full">
              <div className="font-bold text-md mb-2">Physical Security - House of Commons</div>
              <p className='font-bold'>Co-op Student</p>
              <p className="text-base">
              • Developed and tested the automated deployment product using PowerShell for managing security software on target nodes, ensuring quick delivery of critical security infrastructure across Parliament
              <br/><br/>• Delivered presentations at sprint demos to the department and utilized feedback for further development
              <br/><br/>• Developed and implemented new features and enhancements to the pipeline using Azure resulting in better automated testing, increased efficiency during build time and reduced processing times
              </p>
            </div>

            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">PowerShell Scripting</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CD/CI Pipeline Dev</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">DevOps</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Automation</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">VS Code</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Git</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Windows Management</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">IaC</span>
            </div>
          </div>

          

          <div className="flex flex-col m-6 w-full sm:w-96 rounded-xl overflow-hidden shadow-lg bg-neutral-800">
            <img className="w-full object-contain" src={GAC} alt="Sunset in the mountains"></img>
            <div className="px-6 py-4 h-full">
              <div className="font-bold text-md mb-2">Global Affairs Canada</div>
              <p className='font-bold'>Programmer Analyst</p>
              <p className="text-base">
              • Designed well-functioning and accessible government visual forms for agencies using JavaScript and Adobe Experience Manager to deliver software depended on by thousands of people within the department
              <br/><br/>• Identified and executed test scenarios, created test plans and identified solutions for software to ensure the delivery of stable platforms
              <br/><br/>• Collaborated with developers and engineers, as well as working independently in a fast-paced development environment to finish tasks well before deadlines
              </p>
            </div>

            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Bug Testing</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Adobe Experience Manager</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Software Debugging</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Scrum</span>
            </div>
          </div>


          <div className="flex flex-col m-6 w-full sm:w-96 rounded-xl overflow-hidden shadow-lg bg-neutral-800">
            <img className="w-full object-contain" src={SSC} alt="Sunset in the mountains"></img>
            <div className="px-6 py-4 h-full">
              <div className="font-bold text-md mb-2">Shared Services Canada</div>
              <p className='font-bold'>Support Analyst</p>
              <p className="text-base">
              • Processed requests from government agencies to plan, design and operate data centre services preventing disruptions for government agencies/services. 
              <br/><br/>• Collaborated with government agencies to address needs in the delivery of IT infrastructure to servers
              <br/><br/>• Assigned requests to operations teams to ensure efficient progress of crucial IT services
              </p>
            </div>

            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ticket Management</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">IT Infrastructure</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Business Requests</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Data Centre Services</span>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Work