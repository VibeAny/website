import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'zh', 'ja', 'fr', 'ko'] as const;
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale || defaultLocale;
  return {
    locale: validLocale,
    messages: (await import(`./src/messages/${validLocale}.json`)).default
  };
});