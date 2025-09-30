import React from 'react';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import Text from '@/components/atoms/Text';

interface HeroContactInfoProps {
  t: any;
}

const HeroContactInfo: React.FC<HeroContactInfoProps> = ({ t }) => (
  <div className="flex items-center gap-6 mt-4 text-gray-500 text-base">
    <div className="flex items-center gap-2">
      <MdLocationOn size={20} className="text-blue-500" />
      <Text>{t('location')}</Text>
    </div>
    <div className="flex items-center gap-2">
      <MdPhone size={20} className="text-blue-500" />
      <Text>{t('phone')}</Text>
    </div>
  </div>
);

export default HeroContactInfo;
