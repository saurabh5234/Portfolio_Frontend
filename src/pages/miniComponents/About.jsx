import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const { data } = await axios.get(
          "https://mern-stack-portfolio-backend-kevg.onrender.com/api/v1/user/portfolio/me",
          { withCredentials: true }
        );
        setUser(data.user || {});
      } catch {
        setUser({});
      }
    };
    getMyProfile();
  }, []);

  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <div className="px-8 py-4">
          <h1 className="block mx-auto text-center text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold tracking-[0.25em] uppercase text-white text-tubeLight-effect mb-4">
            ABOUT ME
          </h1>
        </div>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-border bg-card">
              <img
                src={(user.avatar && user.avatar.url) || "/Portfolio.png"}
                alt="avatar"
                className="h-[260px] w-[200px] sm:h-[340px] sm:w-[260px] md:h-[360px] md:w-[280px] lg:h-[420px] lg:w-[320px] object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              Recently completed my B.Tech in Computer Science and
              seeking opportunities in Software Development. 💻 Skilled in the
              MERN Stack (MongoDB, Express.js, React, Node.js) with strong
              knowledge of HTML, CSS, Bootstrap, JavaScript for frontend and
              Java, SQL, MongoDB, Express.js, Node.js for backend. Developed
              multiple academic and self-driven projects, applying concepts to
              real-world applications. 🤝 Passionate about collaboration,
              continuous learning. Seeking opportunities to apply my skills.
            </p>
          </div>
        </div>
        {/* <p className="tracking-[1px] text-xl">
          My dedication and perseverance in timely delivery of work are integral
          to me. I maintain the courage to face any challenges for extended
          periods.
        </p> */}
      </div>
      <hr className="border-t border-slate-200 my-8" />
    </div>
  );
};

export default About;
