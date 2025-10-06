import React, { useEffect } from 'react'
import { experiences } from '../../data/me'

const Experience = () => {


    return (
        <>
            <div>
                <h1 className='text-light text-3xl mt-10 font-bold underline' >Experience</h1>
                {[...experiences].reverse().map(({ companyName, type, domain, duration, timeline, description, status, location }, index) => (
                    <ul className="list text-secondary" key={companyName}>
                        <li className="list-row">
                            <div>#{index + 1}</div>
                            <div>
                                <div className="text-xl w-fit tooltip font-semibold" data-tip={location}>{companyName} - {type}</div>
                                <div className="text-xs uppercase font-semibold opacity-60 w-fit">{domain} - {duration}</div>
                                {/* <div className=' w-fit' >{timeline}</div> */}
                                <div className=' w-fit' >Status: {status}</div>

                                <div className='mt-2 ' >{description}</div>
                            </div>
                        </li>
                    </ul>
                ))}

            </div>
        </>
    )
}

export default Experience




