import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { demoProjects } from '../../data/me';


const Projects = () => {
    return (
        <>
            <div>
  <h1 className='text-dark text-2xl mt-10 font-bold underline'>Personal Projects</h1>

  {/* Fixed Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 w-[91%] mx-auto">
    {demoProjects.map(({ name, description, techStack, status, image, link }, index) => (
      <div
        key={index}
        className="bg-light rounded-lg py-7 px-5 shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <div className="flex text-lg gap-2 items-center px-10">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <FaArrowUpRightFromSquare />
          </a>
          <h1 className="text-secondary font-semibold">{name}</h1>
        </div>

        <div className="px-10 mt-2">
          <p className="text-sm text-gray-700">{description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {techStack.map((elem, idx) => (
              <span
                key={idx}
                className="text-xs bg-semilight px-2 py-1 rounded-md border border-gray-300 text-gray-600"
              >
                {elem}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

            
        </>
    )
}

export default Projects
