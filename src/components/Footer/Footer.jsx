import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub,FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div id='Footer' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center' >
        <div>
            <h1 className='text-2xl md:text-6xl font-bold' >Contact</h1>
            <h3 className='text-sm md:text-2xl font-normal' >Feel Free to reach out</h3>
        </div>
        <ul className='text-sm md:text-xl' >
            <li className='flex gap-1 items-center' ><MdOutlineEmail size={20} />jeevans026@gmail.com</li>
            <li className='flex gap-1 items-center' ><CiLinkedin size={20} /><a href="https://www.linkedin.com/in/jeevan-singh-6aa389230/">Linkedin</a></li>
            <li className='flex gap-1 items-center' ><FaGithub size={20} /><a href="https://github.com/JeevanSinghBisht107">Github</a></li>
            <li className='flex gap-1 items-center' ><FaPhoneAlt size={20} />+91-9315615929</li>
        </ul>

    </div>
  )
}

export default Footer