import React from 'react'
import bannering from "../../assets/photo-C8q0KQHG.webp"

const ProjectCard = ({title,main,gitLink,demoLink}) => {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl' >
        <img className='p-4' src={bannering} alt="" />
        <h3 className='px-4 text-xl md:text-2xl font-bold leading normal ' >
            {title}
        </h3>
        <p className='px-4 text-sm md:text-md leading-tight py-2' >{main}</p>
        <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4 ' >
            <a href={demoLink} className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465679]' target='_blank' >Demo</a>
            <a href={gitLink} className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465679]' target='_blank' >Source Code</a>
        </div>
    </div>
  )
}

export default ProjectCard
