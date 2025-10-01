import React from "react";
import ProjectCard from "@/components/molecules/ProjectCard";

interface ProjectsSectionProps {
  t: any;
}

type Project = {
    name: string;
    description: string;
    technologies: string[];
    image: string;
    siteLink: string;
    repoLink: string;
}


const ProjectsSection: React.FC<ProjectsSectionProps> = ({ t }) => (
  <section className="w-full py-12 bg-slate-50" id="projects">
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex flex-col items-center gap-2 mb-6">
        <h2 className="text-4xl font-bold text-slate-800 mb-2">{t("title")}</h2>
        <p className="text-lg text-slate-600 text-center max-w-2xl">{t("subtitle")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {(t.raw("projects") as Array<Project>).map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
