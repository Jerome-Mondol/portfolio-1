import React from 'react'
import Navbar from '../Navbar'
import Experience from '../Experience'
import Tech from '../Tech'
import Projects from '../Projects'

const Main = () => {
  return (
    <div className='w-[45%] mx-auto bg-semilight p-10 border border-red-100' >
      <Navbar />
      <Experience />
      <Tech />
      <Projects />
    </div>
  )
}

export default Main
