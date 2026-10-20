import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-data";
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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Web Development Agency`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "ConsultWeb builds business-focused web products, SaaS platforms, e-commerce experiences, and custom digital systems for ambitious teams.",
  keywords: [
    "ConsultWeb",
    "web development agency",
    "SaaS product development",
    "custom web app",
    "e-commerce websites",
    "startup MVP",
    "business automation",
  ],
  openGraph: {
    title: `${siteConfig.name} | Web Development Agency`,
    description:
      "From idea to launch, ConsultWeb builds digital products that move businesses forward.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Web Development Agency`,
    description:
      "From idea to launch, ConsultWeb builds digital products that move businesses forward.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#071b18] text-white">
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
