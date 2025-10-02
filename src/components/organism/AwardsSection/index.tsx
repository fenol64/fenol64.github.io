import React, { FC } from "react";
import AwardCard from "@/components/molecules/AwardCard";

interface Award {
  image?: string;
  title: string;
  subtitle: string;
  link: string;
}

interface IAwardsSection {
    t: any
}

const AwardsSection: FC<IAwardsSection> = ({ t }) => {
  return (
    <section className="w-full py-12 bg-slate-50 min-h-screen flex items-center" id="awards">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center gap-2 mb-6">
          <h2 className="text-4xl font-bold text-slate-800 mb-2">{t("title")}</h2>
          <p className="text-lg text-slate-600 text-center max-w-2xl">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.raw("awards").map((award: Award, idx: React.Key | null | undefined) => (
            <AwardCard key={idx} {...award} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
