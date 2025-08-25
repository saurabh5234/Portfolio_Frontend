import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import axios from "axios";

const Hero = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        "https://mern-stack-portfolio-backend-kevg.onrender.com/api/v1/user/portfolio/me",
        { withCredentials: true }
      );
      setUser(data.user);
    };
    getMyProfile();
  }, []);
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-400 rounded-full h-2 w-2"></span>
        <p>Online</p>
      </div>
      <h1 className="overflow-x-hidden text-[1.3rem] sm:text-[1.75rem] 
      md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4">
        Hii, I'm Saurabh 
      </h1>
      <h1 className="text-tubeLight-effect overflow-x-hidden text-[1.3rem] 
      sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px]">
        <Typewriter
          words={["FULLSTACK DEVELOPER"]}
          loop={50}
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <div className="w-fit px-5 py-2 bg-slate-50 rounded-[20px] flex gap-5 
      items-center mt-4 md:mt-8 lg:mt-10">
        {/* <Link to={"https://www.youtube.com/@CodeWithZeeshu"} target="_blank">
          <Youtube className="text-red-500 w-7 h-7"/>
        </Link> */}
       <Link to={"https://www.linkedin.com/in/saurabh-fullstackdev/"} target="_blank">
          <Linkedin className="text-sky-500 w-7 h-7" />
        </Link>
        {/* <Link to={user.facebookURL} target="_blank">
          <Facebook className="text-blue-800 w-7 h-7" />
        </Link> */}
        {/* <Link to={"https://www.naukri.com/mnjuser/profile"} target="_blank">
          <svg
            className="w-7 h-7"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="naukri-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1e90ff" />
                <stop offset="1" stopColor="#00c6fb" />
              </linearGradient>
            </defs>
            <rect width="32" height="32" rx="6" fill="url(#naukri-gradient)" />
            <text
              x="8"
              y="23"
              fontSize="16"
              fontWeight="bold"
              fill="white"
              fontFamily="Arial, Helvetica, sans-serif"
              style={{ textShadow: "0 0 6px #00c6fb" }}
            >
              N
            </text>
          </svg>
        </Link> */}
        <Link to={"https://x.com/Saurabh781712?s=09"} target="_blank">
          <Twitter className="text-blue-800 w-7 h-7" />
        </Link>
        {/* <Link to={"https://www.instagram.com/saurabh._1377/"} target="_blank">
          <Instagram className="text-pink-500 w-7 h-7" />
        </Link> */}
      </div>
      <div className="mt-4 md:mt-8 lg:mt-10  flex gap-3">
        <Link to={"https://github.com/saurabh5234"} target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <Github />
            </span>
            <span>Github</span>
          </Button>
        </Link>
        <Link to="/resume.pdf" target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <ExternalLink />
            </span>
            <span>Resume </span>
          </Button>
        </Link>
        
      </div>
      <p className="mt-8 text-xl tracking-[2px]">{user.aboutMe}</p>
      <hr className="my-8 md::my-10 " />
    </div>
  );
};

export default Hero;