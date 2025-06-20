import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CategoryProvider } from "./components/CategoryContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for the application
export const metadata: Metadata = {
  title: "예뻐지자",
  description: "쇼핑몰 웹사이트",
  openGraph: {
    title: "쇼핑몰",
    description: "쇼핑몰 웹사이트",
    url: "https://example.com",
    siteName: "쇼핑몰",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "쇼핑몰 OG 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "쇼핑몰",
    description: "쇼핑몰 웹사이트",
    images: ["https://example.com/twitter-image.jpg"],
    creator: "@your_twitter_handle",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/shortcut-icon.png",
  },
  themeColor: "#ffffff",
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    me: "me-verification-code",
  },
  keywords: ["쇼핑몰", "온라인 쇼핑", "전자상거래"],
  authors: {
    name: "Dahye",
    url: "https://yourwebsite.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CategoryProvider>
          <Header />
          <div style={{ paddingTop: 64, minHeight: "calc(100vh - 64px)" }}>
            {children}
          </div>
          <Footer />
        </CategoryProvider>
      </body>
    </html>
  );
}
