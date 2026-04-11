import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hamilton Felipe | LipDev.BR — AI Automation Developer",
  description:
    "AI Automation Developer — Automacoes inteligentes que escalam operacoes e geram receita. Next.js, React, TypeScript, AI APIs.",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en-US": `https://translate.google.com/translate?sl=pt&tl=en&u=${encodeURIComponent(siteUrl)}`,
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Hamilton Felipe | LipDev.BR — AI Automation Developer",
    description:
      "AI automations that scale operations and drive revenue. Next.js, React, TypeScript, AI APIs.",
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    images: [{ url: "/images/premium_ecommerce.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
