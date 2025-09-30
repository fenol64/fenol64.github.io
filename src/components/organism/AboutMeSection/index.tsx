import React from "react";
import AboutMeSkills from "@/components/molecules/AboutMeSkills";
import { MdPerson, MdRadioButtonChecked } from "react-icons/md";

interface AboutMeSectionProps {
  t: any;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ t }) => (
  <section className="w-full py-12 bg-slate-50">
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex flex-col items-center gap-2 mb-6">
        <button className="flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-2">
          <MdPerson size={20} />
          {t("cta")}
        </button>
        <h2 className="text-4xl font-bold text-slate-800 mb-2">{t("title")}</h2>
        <p className="text-lg text-slate-600 text-center max-w-2xl">{t("subtitle")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-800 mb-2">
            <MdRadioButtonChecked className="text-blue-500" size={20} />
            {t("journey.title")}
          </h3>
          <p className="text-slate-600 mb-2">
            {t("journey.experience")}
          </p>
          <p className="text-slate-600">
            {t("journey.passion")}
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="text-lg font-bold text-slate-800 mb-2">{t("objective.title")}</h3>
          <p className="text-slate-600">{t("objective.text")}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div>
          <h4 className="text-lg font-bold text-slate-800 mb-2">Sólido conhecimento em:</h4>
          <AboutMeSkills skills={t.raw("skills.solidSkills")} />
        </div>
        <div>
          <h4 className="text-lg font-bold text-slate-800 mb-2">Experiência profissional com:</h4>
          <AboutMeSkills skills={t.raw("skills.professionalExperience")} />
        </div>
        <div>
          <h4 className="text-lg font-bold text-slate-800 mb-2">Conhecimentos em:</h4>
          <AboutMeSkills skills={t.raw("skills.knowledge")} />
        </div>
      </div>
    </div>
  </section>
);

export default AboutMeSection;
