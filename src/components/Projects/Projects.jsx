import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white flex flex-col md:flex-row md:flex-wrap">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="EMS"
          main="full Stack Employee Management system Project using MERN Stack with admin access control and Employee Pannel "
          gitLink="https://github.com/JeevanSinghBisht107/Employee-Management-System.git"
          demoLink="https://ems-frontend-psi.vercel.app/"
        />
      </div>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Todo App"
          main="This is a complete full Mern stack based To-do web Application, where users can create, edit and delete Todo's "
          gitLink="https://github.com/JeevanSinghBisht107/Todo-Application-MERN.git"
          demoLink="https://todo-render-frontend.onrender.com"
        />
      </div>
    </div>
  );
};

export default Projects;
