import React from 'react';
import HeroTitle from '@/components/molecules/HeroTitle';
import HeroContactInfo from '@/components/molecules/HeroContactInfo';
import HeroActions from '@/components/molecules/HeroActions';
import HeroSocialIcons from '@/components/molecules/HeroSocialIcons';
import HeroProfile from '@/components/molecules/HeroProfile';

interface HeroSectionProps {
  t: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ t }) => (
  <section className="flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-4 md:px-4 min-h-[80vh] w-full max-w-6xl mx-auto">
    <div className="flex-1.5 max-w-xl">
      <HeroTitle t={t} />
      <HeroContactInfo t={t} />
      <HeroActions t={t} />
      <HeroSocialIcons t={t} />
    </div>
    <div className="flex-1 flex justify-end me-10">
      <HeroProfile t={t} />
    </div>
  </section>
);

export default HeroSection;
