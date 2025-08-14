import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Add hydrated class after client-side hydration to enable animations
    document.documentElement.classList.add('hydrated');
  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);