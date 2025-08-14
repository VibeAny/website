import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '@/styles/globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { useVibeMCPAnalytics } from '@/hooks/useAnalytics';

// GA Measurement ID - 在生产环境中使用您的 ID
const GA_MEASUREMENT_ID = 'G-SFC0NKE2HG';

function MyApp({ Component, pageProps }: AppProps) {
  // 初始化所有 GA 追踪功能
  useVibeMCPAnalytics();

  useEffect(() => {
    // Add hydrated class after client-side hydration to enable animations
    document.documentElement.classList.add('hydrated');
  }, []);

  return (
    <>
      {/* Google Analytics - 只在生产环境加载 */}
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);