"use server";
import { cookies } from 'next/headers';

export const setLocaleCookie = async (locale: 'en' | 'pt') => {
    const COOKIE_NAME = 'locale';
    const MAX_AGE = 60 * 60 * 24 * 30;
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, locale, { path: '/', maxAge: MAX_AGE });
};

export const getLocaleFromCookie = async () => {
    const COOKIE_NAME = 'locale';
    const cookieStore = await cookies();
    const locale = cookieStore.get(COOKIE_NAME)?.value;
    return locale;
}