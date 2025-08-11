import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL('https://vibemcp.net'),
  title: {
    default: 'VibeMCP.net - The Vibe-First MCP Platform',
    template: '%s | VibeMCP.net'
  },
  description: 'Transform MCP service deployment from complex to simple, from local to cloud. Configure Once, Connect Everywhere with Project Tesseract - the cloud-native MCP platform.',
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
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
    url: 'https://vibemcp.net',
    siteName: 'VibeMCP.net',
    title: 'VibeMCP.net - The Vibe-First MCP Platform',
    description: 'Transform MCP service deployment from complex to simple, from local to cloud. Configure Once, Connect Everywhere with Project Tesseract.',
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
    title: 'VibeMCP.net - The Vibe-First MCP Platform',
    description: 'Transform MCP service deployment from complex to simple. Configure Once, Connect Everywhere.',
    images: ['/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://vibemcp.net',
    languages: {
      'en-US': 'https://vibemcp.net/en',
      'zh-CN': 'https://vibemcp.net/zh',
    },
  },
  category: 'technology',
  classification: 'Business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VibeMCP",
    "url": "https://vibemcp.net",
    "logo": "https://vibemcp.net/logo.png",
    "description": "The Vibe-First MCP Platform - Transform MCP service deployment from complex to simple, from local to cloud.",
    "foundingDate": "2025",
    "sameAs": [
      "https://github.com/vibemcp"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://vibemcp.net/contact"
    },
    "offers": {
      "@type": "Offer",
      "name": "VibeMCP Platform",
      "description": "Cloud-native MCP service platform with multi-tier pricing",
      "category": "Software as a Service"
    }
  };

  return (
    <html lang="en">
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}