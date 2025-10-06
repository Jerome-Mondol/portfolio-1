import React from 'react'
import { tech } from '../../data/me'

const Technologies = ({ domain }) => {
  return (
    <>
        <div className= 'mt-2 flex justify-center items-center gap-5 flex-wrap h-[8rem]' >
            {
                tech.filter(({category, items}, index) => domain == category)
                .map(({category, items}, index) => (
                    items.map(({name, icon}, i) => (
                        <div key={i + 1} className=' flex py-2 px-4 justify-center items-center gap-2 rounded-lg' >
                            <img src={icon} alt={name} className='w-8 h-8' />
                            <h1>{name}</h1>
                        </div>
                    ))
                ))
            }
        </div>
    </>
  )
}

export default Technologies
