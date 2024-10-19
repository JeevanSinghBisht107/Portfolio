import React from 'react'
import { FaCss3,FaHtml5,FaJs, FaReact,FaNodeJs,FaDatabase } from 'react-icons/fa'
import { SiMongodb,SiCplusplus,SiExpress  } from 'react-icons/si'
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div id='Skills' className='p-10 md:p-24' >
        <h1 className='text-2xl md:text-4xl text-white font-bold' >Skills</h1>
        <div className='flex flex-wrap items-center' >
            <div className='flex flex-wrap md:w2/5 gap-8 md:p-12 py-10' >
                <div className='flex justigy-center items-center bg-black text-white text-2xl px-5 py-2 gap-2 bg-opacity-30 ' >
                    <p className='' >HTML</p>
                    <span className='p-3 flex items-center rounded-2xl' >
                        <FaHtml5 color='#E34F26' />
                    </span>
                </div>
                <div className='flex justigy-center items-center bg-black text-white text-2xl px-5 py-2 gap-2 bg-opacity-30 ' >
                    <p className='' >CSS</p>
                    <span className='p-3 flex items-center rounded-2xl' >
                        <FaCss3 color='#1572b6' />
                    </span>
                </div>
                <div className='flex justigy-center items-center bg-black text-white text-2xl px-5 py-2 gap-2 bg-opacity-30 ' >
                    <p className='' >Tailwind CSS</p>
                    <span className='p-3 flex items-center rounded-2xl' >
                        <RiTailwindCssFill color='#1572b6' />
                    </span>
                </div>
                <div className='flex justigy-center items-center bg-black text-white text-2xl px-5 py-2 gap-2 bg-opacity-30 ' >
                    <p className='' >JavaScript</p>
                    <span className='p-3 flex items-center rounded-2xl' >
                        <FaJs color='#F7DF1E' />
                    </span>
                </div>
                <div className='flex justigy-center items-center bg-black text-white text-2xl px-5 py-2 gap-2 bg-opacity-30 ' >
                    <p className='' >Reactjs</p>
                    <span className='p-3 flex items-center rounded-2xl' >
                        <FaReact color='#61DAFB' />
                    </span>
                </div>
                <div className='flex justigy-center items-center bg-black text-white text-2xl px-5 py-2 gap-2 bg-opacity-30 ' >
                    <p className='' >Nodejs</p>
                    <span className='p-3 flex items-center rounded-2xl' >
                        <FaNodeJs color='#68a063' />
                    </span>
                </div>
                <div className='flex justigy-center items-center bg-black text-white text-2xl px-5 py-2 gap-2 bg-opacity-30 ' >
                    <p className='' >Expressjs</p>
                    <span className='p-3 flex items-center rounded-2xl' >
                        <SiExpress color='#68a063' />
                    </span>
                </div>
                <div className='flex justigy-center items-center bg-black text-white text-2xl px-5 py-2 gap-2 bg-opacity-30 ' >
                    <p className='' >MongoDB</p>
                    <span className='p-3 flex items-center rounded-2xl' >
                        <SiMongodb color='#47A248' />
                    </span>
                </div>
                <div className='flex justigy-center items-center bg-black text-white text-2xl px-5 py-2 gap-2 bg-opacity-30 ' >
                    <p className='' >SQL</p>
                    <span className='p-3 flex items-center rounded-2xl' >
                        <FaDatabase color='#61DAFB' />
                    </span>
                </div>
                <div className='flex justigy-center items-center bg-black text-white text-2xl px-5 py-2 gap-2 bg-opacity-30 ' >
                    <p className='' >C++</p>
                    <span className='p-3 flex items-center rounded-2xl' >
                        <SiCplusplus color='#00599c' />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills