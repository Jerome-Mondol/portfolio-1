import React from 'react'
import { experiences } from '../../data/me.js'

const Experience = () => {


    return (
        <>
            <div>
                <h1 className='text-dark text-xl sm:text-2xl mt-10 font-bold underline' >Experience</h1>
                {[...experiences].reverse().map(({ companyName, type, domain, duration, description, status, location }, index) => (
                    <ul className="list text-dark" key={companyName}>
                        <li className="list-row flex-col sm:flex-row">
                            <div className="text-sm sm:text-base">#{index + 1}</div>
                            <div className="w-full">
                                <div className="text-lg sm:text-xl w-fit tooltip font-semibold" data-tip={location}>{companyName} - {type}</div>
                                <div className="text-xs sm:text-sm uppercase font-semibold opacity-60 w-fit">{domain} - {duration}</div>
                                <div className='w-fit text-sm sm:text-base' >Status: {status}</div>

                                <div className='mt-2 text-sm sm:text-base' >{description}</div>
                            </div>
                        </li>
                    </ul>
                ))}

            </div>
        </>
    )
}

export default Experience




