import AboutMeSection from "@/components/organism/AboutMeSection";
import AwardsSection from "@/components/organism/AwardsSection";
import CompaniesStrip from "@/components/organism/CompaniesStrip";
import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";
import HeroSection from "@/components/organism/HeroSection";
import ProjectsSection from "@/components/organism/ProjectsSection";
import { getTranslations } from "next-intl/server";
import React, { FC } from "react";

// import { Container } from './styles';

const THome: FC = async () => {
  const t = await getTranslations("HomePage");
  const tHero = await getTranslations("HomePage.hero");
  const tAboutMe = await getTranslations("AboutMeSection");
  const tProjects = await getTranslations("ProjectsSection");
  const tCompanies = await getTranslations("CompaniesStrip");
  const tAwards = await getTranslations("AwardsSection");
  const tFooter = await getTranslations("Footer");
  return (
    <>
      <Header title={t("navbar.title")} items={t.raw("navbar.items")} />
      <HeroSection t={tHero} />
      <CompaniesStrip t={tCompanies} />
      <AboutMeSection t={tAboutMe} />
      <ProjectsSection t={tProjects} />
      <AwardsSection t={tAwards} />
      <Footer t={tFooter} />
    </>
  );
};

export default THome;
