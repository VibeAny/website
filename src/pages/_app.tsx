import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import languageDetector from '../lib/languageDetector';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // For static export support
    const detectedLng = languageDetector.detect();
    if (router.route !== '/404' && detectedLng && detectedLng !== router.locale) {
      router.push(router.asPath, router.asPath, { locale: detectedLng });
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);