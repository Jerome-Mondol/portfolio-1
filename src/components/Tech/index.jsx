import React, { useState } from 'react'
import { tech } from '../../data/me'
import Technologies from './Technologies';

const Tech = () => {

  const [section, setSection] = useState("Frontend");

  return (
    <>
      <div>
        <h1 className='text-light text-3xl mt-10 font-bold underline'>Tech Stack</h1>
        <div className='flex gap-5 justify-center items-center mt-5'>
          {
            tech.map(({ category, items }, index) => {
              const isActive = section === category; // check if active

              return (
                <h1
                  key={index}
                  className={`
                    text-secondary py-2 px-4 rounded-3xl text-sm cursor-pointer 
                    font-semibold hover:!text-[#222831] hover:bg-[#DFD0B8] duration-100
                    ${isActive ? "!text-[#222831] bg-[#DFD0B8]" : ""}
                  `}
                  onClick={() => setSection(category)}
                >
                  {category}
                </h1>
              );
            })
          }
        </div>
        <Technologies domain={section} />
      </div>
    </>
  )
}

export default Tech
