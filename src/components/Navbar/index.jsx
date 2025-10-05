import React from 'react'
import { me } from '../../data/me' 


const Navbar = () => {

    const { name, profileImage, role, location, bio } = me[0];

  return (
    <>
        <div className='w-full' >
            <div className='flex items-center gap-8 ' >
            <img src={profileImage} alt="" className='w-25 h-25 rounded-full'/>    
            <div>
                <h1 className='text-light text-2xl font-bold'>Hi, I'm {name}</h1>
                <p className='text-dark' >{role}</p>
                <p className='text-dark' >📍{location}</p>
            </div>
            </div>
            <div>
                <p className='mt-3 text-light' >{bio}</p>
            </div>
        </div> 
    </>
  )
}

export default Navbar
