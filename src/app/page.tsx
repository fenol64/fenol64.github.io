import LocaleSwitcher from '@/components/molecules/LocaleSwitcher';
import THome from '@/components/Templates/Home';
import {getTranslations} from 'next-intl/server'

export default async function HomePage() {
  return (
    <>
      <THome />
    </>
  );
}