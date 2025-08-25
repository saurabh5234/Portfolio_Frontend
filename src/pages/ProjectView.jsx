import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Button } from "@/components/ui/button";

const ProjectView = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [stack, setStack] = useState("");
  const [gitRepoLink, setGitRepoLink] = useState("");
  const [deployed, setDeployed] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [Image, setProjectBanner] = useState("");
  const [projectBannerPreview, setProjectBannerPreview] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getProject = async () => {
      await axios
        .get(`https://mern-stack-portfolio-backend-kevg.onrender.com/api/v1/project/get/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          const p = res.data.data || res.data.project;
          setTitle(p.title);
          setDescription(Array.isArray(p.description) ? p.description.join(". ") : p.description || "");
          setStack(p.stack);
          setDeployed(p.deployed);
          setTechnologies(Array.isArray(p.technologies) ? p.technologies.join(", ") : p.technologies || "");
          setGitRepoLink(p.githubLink || p.gitRepoLink || "");
          setProjectLink(p.liveLink || p.projectLink || "");
          const banner = p.image && p.image.url;
          setProjectBanner(banner || "");
          setProjectBannerPreview(banner || "");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    };
    getProject();
  }, [id]);

  const descriptionList = description
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);
  const technologiesList = technologies.split(", ");

  const navigateTo = useNavigate();
  const handleReturnToPortfolio = () => {
    navigateTo("/");
  };

  return (
    <>
      <div className="flex mt-7 justify-center items-start min-h-[70vh] sm:gap-4 sm:py-6">
        <div className="w-[100%] px-5 md:w-[1000px] pb-5">
          <div className="flex justify-end">
            <Button onClick={handleReturnToPortfolio}>Return to Portfolio</Button>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h1 className="text-2xl font-bold mb-3">{title}</h1>
              <div className="rounded-lg border overflow-hidden shadow-sm bg-white flex items-center justify-center p-4">
                <img
                  src={projectBannerPreview ? projectBannerPreview : "/vite.svg"}
                  alt="projectBanner"
                  className="w-full h-80 md:h-96 object-contain"
                />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="px-2 py-1 text-xs rounded bg-slate-200 text-slate-900">{stack || "Unknown Stack"}</span>
                <span className="px-2 py-1 text-xs rounded bg-slate-900 text-white">{deployed || "N/A"}</span>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-xl font-semibold mb-2">Description</p>
                <ul className="list-disc pl-5 space-y-1">
                  {descriptionList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xl font-semibold mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {technologiesList.filter(Boolean).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs rounded bg-slate-200 text-slate-900">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href={gitRepoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Github Repository
                </a>
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                >
                  Live Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectView;