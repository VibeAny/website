import languageDetector from 'next-language-detector'

import nextI18NextConfig from '../../next-i18next.config'

export default languageDetector({
  supportedLngs: nextI18NextConfig.i18n.locales,
  fallbackLng: nextI18NextConfig.i18n.defaultLocale,
})