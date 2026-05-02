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
  title: "MedClaw | BAAS for MedSpas — Voice AI, Social Content & Managed Automation",
  description: "MedClaw is a BAAS for MedSpas. We provide Voice AI, TikTok/Instagram social content, social account management, lead inbox, and fully managed execution — starting at $997/month.",
  keywords: "medspa automation, BAAS, voice AI medspa, social content medspa, TikTok Instagram medspa, lead inbox, managed automation, medical spa software",
  openGraph: {
    title: "MedClaw | BAAS for MedSpas — Voice AI, Social Content & Managed Automation",
    description: "Voice AI, TikTok/Instagram social content, social account management, and lead inbox — all managed for your MedSpa. Starting at $997/month.",
    url: "https://medspa.jk-automations.com",
    siteName: "MedClaw",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MedClaw | BAAS for MedSpas — Voice AI, Social Content & Managed Automation",
    description: "Voice AI, TikTok/Instagram social content, social account management, and lead inbox — all managed for your MedSpa.",
  },
  alternates: {
    canonical: "https://medspa.jk-automations.com",
  },
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
