import AboutMeSection from "@/components/organism/AboutMeSection";
import Header from "@/components/organism/Header";
import HeroSection from "@/components/organism/HeroSection";
import { getTranslations } from "next-intl/server";
import React, { FC } from "react";

// import { Container } from './styles';

const THome: FC = async () => {
  const t = await getTranslations("HomePage");
  const tHero = await getTranslations("HomePage.hero");
  const tAboutMe = await getTranslations("AboutMeSection");
  return (
    <>
      <Header title={t("navbar.title")} items={t.raw("navbar.items")} />
      <HeroSection t={tHero} />
      <AboutMeSection t={tAboutMe} />
    </>
  );
};

export default THome;
