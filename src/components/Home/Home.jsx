import React from "react";
import myImage from "../../assets/MyImage.jpg";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leaading-normal tracking-tighter">
          Hello' I am Jeevan
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mb-10">
          A passionate web developer with experience in building full-stack web
          applications. Looking for an opportunity to utilize my skills for the
          growth of the organization.
        </p>
        <a href="https://drive.google.com/drive/folders/1oAHYTqeX-0VdULw-_CiVDlUpJDjbrXw9?usp=sharing" target="_blank" className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] ">
          View CV
        </a>
      </div>
      <div>
        <img className="h-96 rounded-full" src={myImage} />
      </div>
    </div>
  );
}; 

export default Home;
