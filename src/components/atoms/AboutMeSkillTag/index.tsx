import React from "react";

interface AboutMeSkillTagProps {
  label: string;
  color?: string;
}

const colorMap = {
  blue: "bg-blue-100 text-blue-700 border-blue-300",
  green: "bg-green-100 text-green-700 border-green-300",
  purple: "bg-purple-100 text-purple-700 border-purple-300",
};

const AboutMeSkillTag: React.FC<AboutMeSkillTagProps> = ({ label, color = "blue" }) => (
  <span
    className={`px-3 py-1 rounded-full border text-sm font-medium ${colorMap[color as keyof typeof colorMap]} whitespace-nowrap`}
  >
    {label}
  </span>
);

export default AboutMeSkillTag;
