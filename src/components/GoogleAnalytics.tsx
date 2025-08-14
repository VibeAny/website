import Script from 'next/script';

interface GoogleAnalyticsProps {
  gaId?: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ gaId }) => {
  // 如果没有提供 GA ID 或者在开发环境下不加载 GA
  if (!gaId || process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      {/* Google tag (gtag.js) - 使用 Next.js Script 组件优化加载 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;