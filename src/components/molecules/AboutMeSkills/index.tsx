import React from "react";
import AboutMeSkillTag from "@/components/atoms/AboutMeSkillTag";

interface Skill {
  label: string;
  color: string;
}

interface AboutMeSkillsProps {
  skills: Skill[];
}

const AboutMeSkills: React.FC<AboutMeSkillsProps> = ({ skills }) => (
  <div className="flex flex-wrap gap-2 mt-2">
    {skills.map((skill, idx) => (
      <AboutMeSkillTag key={idx} label={skill.label} color={skill.color} />
    ))}
  </div>
);

export default AboutMeSkills;
