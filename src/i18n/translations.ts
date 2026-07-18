import en from './locales/en.json';
import es from './locales/es.json';

export type Locale = 'en' | 'es';

const translations: Record<Locale, typeof en> = { en, es };

export function t(locale: Locale): typeof en {
  return translations[locale] || en;
}

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'es'];
