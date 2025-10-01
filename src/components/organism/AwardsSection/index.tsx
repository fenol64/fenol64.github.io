import React from "react";
import AwardCard from "@/components/molecules/AwardCard";

interface AwardsSectionProps {
  t: any;
}

const awards = [
  {
    title: "Prêmio 1",
    subtitle: "Subtítulo do prêmio 1.",
    link: "#",
  },
  {
    title: "Prêmio 2",
    subtitle: "Subtítulo do prêmio 2.",
    link: "#",
  },
  {
    title: "Prêmio 3",
    subtitle: "Subtítulo do prêmio 3.",
    link: "#",
  },
  {
    title: "Prêmio 4",
    subtitle: "Subtítulo do prêmio 4.",
    link: "#",
  },
];

const AwardsSection: React.FC<AwardsSectionProps> = ({ t }) => (
  <section className="w-full py-12 bg-slate-50" id="awards">
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex flex-col items-center gap-2 mb-6">
        <h2 className="text-4xl font-bold text-slate-800 mb-2">{t("title")}</h2>
        <p className="text-lg text-slate-600 text-center max-w-2xl">{t("subtitle")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {awards.map((award, idx) => (
          <AwardCard key={idx} {...award} />
        ))}
      </div>
    </div>
  </section>
);

export default AwardsSection;
