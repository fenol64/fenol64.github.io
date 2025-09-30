import React from 'react';
import Button from '@/components/atoms/Button';
import Link from 'next/link';

interface HeroActionsProps {
  t: any;
}

const HeroActions: React.FC<HeroActionsProps> = ({ t }) => (
  <div className="flex gap-4 mt-6">
    <Link href="#projects" passHref>
      <Button variant="primary">{t('actions.projects')}</Button>
    </Link>
    <Link href="#contact" passHref>
      <Button variant="outline">{t('actions.contact')}</Button>
    </Link>
    <Link href={`${t('actions.cv_link')}`} passHref>
      <Button variant="ghost">
        <span className="inline-block mr-2">📁</span> {t('actions.portfolio')}
      </Button>
    </Link>
  </div>
);

export default HeroActions;
