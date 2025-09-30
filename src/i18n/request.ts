import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'locale';
const DEFAULT_LOCALE = 'en';

export default getRequestConfig(async (req) => {
  const cookie = await cookies();
  let locale = cookie.get(COOKIE_NAME)?.value || DEFAULT_LOCALE;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});