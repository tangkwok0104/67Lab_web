import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: '67Lab.ai | Finance-Grade AI Automation',
  description: 'Where financial precision meets AI intelligence. We build production-ready agentic workflows and custom LLM integrations.',
  metadataBase: new URL('https://67lab.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '67Lab.ai | High-Velocity AI Architecture',
    description: 'Stop using wrappers. Start using engineering. Finance-born automation for the AI era.',
    url: 'https://67lab.ai',
    siteName: '67Lab',
    images: [
      {
        url: '/og-image.png', // Upload the "67" tech image to your public folder as og-image.png
        width: 1200,
        height: 630,
        alt: '67Lab - Intelligence in the Lab',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '67Lab.ai | Let Them Cook',
    description: 'Precision-engineered AI systems for business automation.',
    images: ['/og-image.png'],
    creator: '@67lab_ai',
  },
  icons: {
    icon: '/favicon.ico', // Use the square 67 logo
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Uncomment and add your Google Analytics Measurement ID to enable tracking */}
        {/* <GoogleAnalytics measurementId="G-XXXXXXXXXX" /> */}
        {children}
      </body>
    </html>
  );
}
