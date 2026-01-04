import { FaGithub, FaLinkedin } from "react-icons/fa";
import { me } from '../../data/me.js'
import { MdDownload } from "react-icons/md";


const Navbar = () => {

    const { name, profileImage, role, location, bio, social } = me;
    console.log(social.email)
  return (
    <>      
        <div className='w-full' id="hero" style={{ scrollMarginTop: '88px' }}>
            <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 md:gap-14'>
            <img src={profileImage} alt="" className='w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full flex-shrink-0'/>
            <div className='text-center sm:text-left w-full'>
                <h1 className='text-dark text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Hi, I'm {name}</h1>
                <p className='text-light text-sm sm:text-base md:text-lg'>{role}</p>
                <p className='text-light text-sm sm:text-base md:text-lg'>📍{location}</p>
                <div className="mt-3 sm:mt-5 flex gap-2 items-center justify-center sm:justify-start flex-wrap" >
                    <a href={social.github} target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
                    <a href={social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
                    <button className="flex items-center gap-2 text-xs sm:text-sm bg-white text-gray-800 px-4 py-1 rounded-sm mt-2 sm:mt-0" ><MdDownload /> Resume</button>
                </div>
            </div>
            </div>
            <div className='mt-4 sm:mt-0'>
                <p className='mt-3 text-secondary text-sm sm:text-base md:text-lg max-w-2xl mt-5' >{bio}</p>
            </div>
        </div> 
    </>
  )
}

export default Navbar
