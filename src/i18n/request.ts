import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'locale';
const DEFAULT_LOCALE = 'en';

export default getRequestConfig(async () => {
  const cookie = await cookies();
  const locale = cookie.get(COOKIE_NAME)?.value || DEFAULT_LOCALE;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});