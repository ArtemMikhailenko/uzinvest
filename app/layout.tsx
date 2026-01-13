import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "UzInvest - Инвестиционная платформа Узбекистана",
  description: "UzInvest — современная инвестиционная платформа для инвестиций в ключевые отрасли экономики Узбекистана. Инвестируйте в золото, медь, нефтегаз, финансы и химическую промышленность.",
  keywords: [
    "UzInvest",
    "инвестиции Узбекистан",
    "инвестиционная платформа",
    "НГМК",
    "АГМК",
    "Узбекнефтегаз",
    "Национальный банк Узбекистана",
    "золото Узбекистан",
    "инвестировать в Узбекистан"
  ],
  authors: [{ name: "UzInvest" }],
  creator: "UzInvest",
  publisher: "UzInvest",
  manifest: '/manifest.json',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://uzinvest.uz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "UzInvest - Инвестиционная платформа Узбекистана",
    description: "Инвестируйте в ключевые отрасли экономики Узбекистана: золото, медь, нефтегаз, финансы. Надежная государственная платформа.",
    url: 'https://uzinvest.uz',
    siteName: 'UzInvest',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UzInvest - Инвестиции в Узбекистан',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "UzInvest - Инвестиционная платформа Узбекистана",
    description: "Инвестируйте в ключевые отрасли экономики Узбекистана",
    images: ['/og-image.jpg'],
  },
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
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="UzInvest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#0f50a8' }}
      >
        {children}
      </body>
    </html>
  );
}
