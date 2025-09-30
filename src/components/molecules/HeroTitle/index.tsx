import React from 'react';
import Text from '@/components/atoms/Text';

interface HeroTitleProps {
  t: any;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ t }) => (
  <div className="mb-4">
    <Text className="text-blue-600 font-semibold text-lg flex items-center gap-2">
      <span role="img" aria-label="Olá">👋</span> {t('greeting')}
    </Text>
    <h1 className="font-extrabold text-5xl md:text-6xl text-gray-900 mt-2">
      {t('name').split(' ')[0]}
      <span className="block bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent">{t('name').split(' ')[1]}</span>
    </h1>
    <h2 className="mt-4 text-2xl font-bold text-gray-700">{t('role')}</h2>
    <Text className="mt-2 text-gray-500 text-lg block">
      {t('description')}
    </Text>
  </div>
);

export default HeroTitle;
