import React from 'react'
import { me } from '../../data/me.js' 


const Navbar = () => {

    const { name, profileImage, role, location, bio } = me;

  return (
    <>
        <div className='w-full' >
            <div className='flex items-center gap-8 ' >
            <img src={profileImage} alt="" className='w-25 h-25 rounded-full'/>    
            <div>
                <h1 className='text-dark text-2xl font-bold'>Hi, I'm {name}</h1>
                <p className='text-light' >{role}</p>
                <p className='text-light' >📍{location}</p>
            </div>
            </div>
            <div>
                <p className='mt-3 text-secondary' >{bio}</p>
            </div>
        </div> 
    </>
  )
}

export default Navbar
