import React from 'react';
import Badge from '@/components/atoms/Badge';
import Image from 'next/image';

interface HeroProfileProps {
  t: any;
}

const HeroProfile: React.FC<HeroProfileProps> = ({ t }) => (
  <div className="relative flex flex-col items-center">
    <div className="absolute -top-4 right-0">
      <Badge>{t('badges.years')}</Badge>
    </div>
    <Image
        src="/profile.png"
        alt="Profile"
        width={224}
        height={224}
        className="w-56 h-56 rounded-full shadow-lg object-cover border-4 border-white"
      />
    <div className="absolute -bottom-5 left-0">
      <Badge color="bg-blue-500">{t('badges.stack')}</Badge>
    </div>
  </div>
);

export default HeroProfile;
