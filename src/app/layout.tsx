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
  title: "MedClaw BAAS | MedSpa Automation That Builds, Manages & Scales Your Practice",
  description: "Backend as a Service for MedSpas. We build, deploy, and manage your automation workflows 24/7. Focus on patients while we handle the technology. BAAS: Done-for-you MedSpa automation.",
  keywords: "medspa automation, medical spa software, BAAS, automation as a service, practice management, medspa workflows",
  openGraph: {
    title: "MedClaw BAAS | MedSpa Automation That Builds, Manages & Scales",
    description: "Backend as a Service for MedSpas. We build, deploy, and manage your automation workflows 24/7. Focus on patients while we handle the technology.",
    url: "https://medspa.jk-automations.com",
    siteName: "MedClaw",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MedClaw BAAS | MedSpa Automation",
    description: "Backend as a Service for MedSpas. We build, deploy, and manage your automation workflows 24/7.",
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
