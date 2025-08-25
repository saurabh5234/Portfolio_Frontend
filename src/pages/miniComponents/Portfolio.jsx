import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getMyProjects = async () => {
      const { data } = await axios.get(
        "https://mern-stack-portfolio-backend-kevg.onrender.com/api/v1/project/getall",
        { withCredentials: true }
      );
      setProjects(data.data || data.projects || []);
    }; 
    getMyProjects();
  }, []);
  return (
    <div className="w-full px-4 py-8">
        <h1 className="block mx-auto text-center text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold tracking-[0.25em] uppercase text-white text-tubeLight-effect mb-4">
           PROJECTS
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center">
        {projects.map((project) => (
          <Link
            to={`/project/${project._id}`}
            key={project._id}
            className="w-full flex flex-col items-center hover:scale-[1.03] transition-transform"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center p-2 w-full max-w-[500px] h-[180px] sm:h-[220px] md:h-[320px]">
              <img
                src={project.image?.url || "/vite.svg"}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white text-center">{project.title}</h2>
          </Link>
        ))}
      </div>
      <hr className="border-t border-slate-200 my-8" />
    </div>
  );
};

export default Portfolio;