import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '../../i18n';
import TesseractGemsBackground from '../../components/TesseractGemsBackground';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const titles = {
    en: 'VibeMCP.net - The Vibe-First MCP Platform',
    zh: 'VibeMCP.net - 体验优先的MCP平台',
    ja: 'VibeMCP.net - バイブファーストMCPプラットフォーム',
    fr: 'VibeMCP.net - La plateforme MCP axée sur l\'expérience',
    ko: 'VibeMCP.net - 바이브 우선 MCP 플랫폼'
  };

  const descriptions = {
    en: 'Transform MCP service deployment from complex to simple, from local to cloud. Configure Once, Connect Everywhere with Project Tesseract.',
    zh: '让MCP服务部署从复杂变简单，从本地变云端。Project Tesseract，一次配置，随处连接。',
    ja: 'MCPサービスの展開を複雑からシンプルに、ローカルからクラウドに変革。Project Tesseractで一度設定すれば、どこでも接続。',
    fr: 'Transformez le déploiement de services MCP du complexe au simple, du local au cloud. Project Tesseract, configurez une fois, connectez partout.',
    ko: 'MCP 서비스 배포를 복잡한 것에서 간단한 것으로, 로컬에서 클라우드로 변환. Project Tesseract, 한 번 구성하면 어디서나 연결.'
  };

  return {
    metadataBase: new URL('https://vibemcp.net'),
    title: {
      default: titles[locale as keyof typeof titles] || titles.en,
      template: '%s | VibeMCP.net'
    },
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: [
      'MCP', 'Model Context Protocol', 'AI', 'Machine Learning', 'Cloud Native', 
      'Service Deployment', 'API', 'Integration', 'Claude', 'Anthropic',
      'Project Tesseract', 'VibeMCP', 'Enterprise AI', 'SaaS Platform'
    ],
    authors: [{ name: 'VibeMCP Team' }],
    creator: 'VibeMCP',
    publisher: 'VibeMCP',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : locale === 'ja' ? 'ja_JP' : locale === 'fr' ? 'fr_FR' : locale === 'ko' ? 'ko_KR' : 'en_US',
      url: `https://vibemcp.net/${locale}`,
      siteName: 'VibeMCP.net',
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'VibeMCP.net - The Vibe-First MCP Platform',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@vibemcp',
      creator: '@vibemcp',
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      images: ['/twitter-image.png'],
    },
    alternates: {
      canonical: `https://vibemcp.net/${locale}`,
      languages: {
        'en': 'https://vibemcp.net/en',
        'zh-CN': 'https://vibemcp.net/zh',
        'ja': 'https://vibemcp.net/ja',
        'fr': 'https://vibemcp.net/fr',
        'ko': 'https://vibemcp.net/ko',
      },
    },
    category: 'technology',
    classification: 'Business',
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Providing all messages to the client
  const messages = await getMessages();
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <TesseractGemsBackground />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}