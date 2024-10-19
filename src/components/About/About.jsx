import React from "react";
import AboutImg from "../../assets/luca-bravo-9l_326FISzk-unsplash.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <p className="text-sm md:text-md leading-tight">
                  I have Completed my Post Graduation(M.Sc Informatics) From Institue of
                  Informatics and Communication, Delhi University with overall
                  7.5 CGPA and I have done my Graduation
                  (B.Sc(Hons.)Electronics) From ARSD College, Delhi University
                  with overall 8.1 CGPA.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <p className="text-sm md:text-md leading-tight">
                  Other Than my acadamecis, i also have good knowledge of
                  programming languages C++ and Data structures. I have done
                  certification course of Data Structures and Algorithm from
                  coding ninjas and achieved certificate od excellence.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <p className="text-sm md:text-md leading-tight">
                  I also have good Knowledge of MERN stack development I specialize in building
                  full-stack web applications using technologies like React,
                  Node.js, Express, and MongoDB.I can build both frontend as well as backend for a web Application
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
