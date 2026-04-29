import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "MedClaw | The World's First Personal MedSpa Assistant",
  description: "Jarvis for your med spa. AI-powered automation that handles scheduling, follow-ups, intake, and reviews while you focus on treatments.",
  keywords: "medspa automation, medical spa software, AI assistant, practice management, automation tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-900 text-slate-100">
        {children}
        {/* Umami Analytics (GDPR-compliant, self-hosted) */}
        {/* Analytics disabled - uncomment and configure when ready */}
        {/*}
        <Script
          defer
          src="https://umami.example.com/script.js"
          data-website-id="YOUR_UMAMI_ID"
          data-domains="medclaw.vercel.app"
        />
        {/* */}
      </body>
    </html>
  );
}
