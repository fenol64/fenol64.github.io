'use client';
import { getLocaleFromCookie, setLocaleCookie } from '@/i18n/switchLanguage';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

export default function LocaleSwitcher() {
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  const locales = [
    { value: 'en', label: 'English', default: true },
    { value: 'pt', label: 'Português' },
    // Adicione seus outros idiomas
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value as 'en' | 'pt'; // Ajuste o tipo

    startTransition(() => {
      setLocaleCookie(newLocale);
    });
  };


  return (
    <select
      value={currentLocale}
      onChange={handleChange}
    >
      {locales.map((locale) => (
        <option key={locale.value} value={locale.value}>
          {locale.label}
        </option>
      ))}
    </select>
  );
}