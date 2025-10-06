import React from 'react'
import Navbar from '../Navbar'
import Experience from '../Experience'
import Tech from '../Tech'

const Main = () => {
  return (
    <div className='w-[45%] mx-auto  bg-semilight p-10' >
      <Navbar />
      <Experience />
      <Tech />
    </div>
  )
}

export default Main
