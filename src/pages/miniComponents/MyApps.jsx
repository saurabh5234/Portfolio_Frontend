import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MyApps = () => {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    const getMyApps = async () => {
      const { data } = await axios.get(
        "https://mern-stack-portfolio-backend-kevg.onrender.com/api/v1/application/getall",
        { withCredentials: true }
      );
      setApps(data.data || data.softwareApplications || []);
    };
    getMyApps();
  }, []);
  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12">
        <h1 className="block mx-auto text-center text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold tracking-[0.25em] uppercase text-white text-tubeLight-effect mb-4">
          SOFTWARE TOOLS
        </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {apps &&
          apps.map((element) => {
            return (
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
                  {element.name}
                </p>
              </Card>
            );
          })}
      </div>
      <hr className="border-t border-slate-200 my-8" />
    </div>
  );
};

export default MyApps;