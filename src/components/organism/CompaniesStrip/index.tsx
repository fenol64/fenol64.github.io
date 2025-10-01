import Image from "next/image";
import React from "react";

interface CompaniesStripProps {
  t: any;
}

// Mocked companies logos (replace with your real logos in /public/companies/)
const companies = [
  { name: "vibra logo", logo: "/companies/vibra-logo.png" },
  { name: "vale logo", logo: "/companies/vale-logo.png" },
  { name: "42 rio logo", logo: "/companies/42-logo.png" },
  { name: "sofex logo", logo: "/companies/sofex-logo.png" },
  { name: "inob logo", logo: "/companies/inob-logo.png" },
  { name: "link logo", logo: "/companies/link-logo.png" },
  { name: "stellar logo", logo: "/companies/stellar-logo.png" },
  { name: "cosmos logo", logo: "/companies/cosmos-logo.png" },
];

const CompaniesStrip: React.FC<CompaniesStripProps> = ({ t }) => (
  <section className="w-full py-8 border-y border-slate-100 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-500">
    <div className="max-w-5xl mx-auto flex flex-col items-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
        {t("title")}
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-8 w-full">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex items-center justify-center bg-white rounded h-16 w-32 p-2 shadow-sm overflow-hidden"
            title={company.name}
          >
            <Image
              src={company.logo}
              alt={company.name}
              className="object-contain grayscale hover:grayscale-0 transition"
              width={96}
              height={48}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CompaniesStrip;
