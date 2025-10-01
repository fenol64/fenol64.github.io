import React from "react";
import ProjectButton from "@/components/atoms/ProjectButton";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  siteLink: string;
  repoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, description, technologies, siteLink, repoLink }) => (
  <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center h-full">
    <img src={image} alt={name} className="w-full h-40 object-cover rounded mb-4" />
    <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">{name}</h3>
    <p className="text-slate-600 mb-4 text-center">{description}</p>
    <div className="flex-grow" />
    <div className="flex gap-2 mt-4 w-full justify-center">
      <ProjectButton href={siteLink} variant="site">
        <FaGlobe size={20} />
      </ProjectButton>
      <ProjectButton href={repoLink} variant="repo">
        <FaGithub size={20} />
      </ProjectButton>
    </div>
  </div>
);

export default ProjectCard;
