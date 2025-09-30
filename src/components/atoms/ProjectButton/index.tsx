import React from "react";

interface ProjectButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "site" | "repo";
}

const variantStyles = {
  site: "bg-blue-600 text-white hover:bg-blue-700",
  repo: "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300",
};

const ProjectButton: React.FC<ProjectButtonProps> = ({ href, children, variant = "site" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`px-4 py-2 rounded font-medium transition ${variantStyles[variant]}`}
  >
    {children}
  </a>
);

export default ProjectButton;
