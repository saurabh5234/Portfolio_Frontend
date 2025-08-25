import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axios.get(
        "https://mern-stack-portfolio-backend-kevg.onrender.com/api/v1/skill/getall",
        { withCredentials: true }
      );
      setSkills(data.data || data.skills || []);
    };
    getMySkills();
  }, []);
  return (
    <div className="w-full">
      {/* Heading styled like PROJECTS */}
      <h1 className="block mx-auto text-center text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold tracking-[0.25em] uppercase text-white text-tubeLight-effect mb-4">
        SKILLS
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
        {skills &&
          skills.map((element) => (
            <Card
              className="h-fit p-7 flex flex-col justify-center items-center gap-3
                bg-slate-800 border border-slate-700 rounded-xl shadow-lg
                transition-transform hover:scale-105 hover:shadow-2xl"
              key={element._id}
            >
              <img
                src={element.svg && element.svg.url}
                alt="skill"
                className="h-12 sm:h-24 w-auto"
              />
              <p className="text-white text-center font-medium">
                {element.title}
              </p>
            </Card>
          ))}
      </div>
      <hr className="border-t border-slate-200 my-8" />
    </div>
  );
};

export default Skills;