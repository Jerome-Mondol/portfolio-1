import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { demoProjects } from '../../data/me';


const Projects = () => {
    return (
        <>
            <div>
                <h1 className='text-dark text-3xl mt-10 font-bold underline'>Personal Projects</h1>
                {
                    demoProjects.map(({name, description, techStack, status, image, link}, index) => (
                        <div key={index + 1} >
                            <div className='flex text-lg px-10 pt-5 gap-2 items-center' >
                                <a href={link} target='_blank' className='text-blue-600'><FaArrowUpRightFromSquare /></a>
                                <h1 className='text-secondary' >{name}</h1>
                            </div>
                            <div className='px-10' >
                                <p>{description}</p>  
                                <div className='w-fit mt-1' >
                                    {
                                        techStack.map((elem, index) => (
                                                <div key={index + 1} >{elem}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Projects
