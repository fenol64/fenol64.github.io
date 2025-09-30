import AboutMeSection from "@/components/organism/AboutMeSection";
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
  return (
    <>
      <Header title={t("navbar.title")} items={t.raw("navbar.items")} />
      <HeroSection t={tHero} />
      <AboutMeSection t={tAboutMe} />
      <ProjectsSection t={tProjects} />
    </>
  );
};

export default THome;
