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
const socialPreviewImage = new URL(
  "/images/portfolio-link-preview-2026.png",
  siteUrl
).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hamilton Felipe | LipDev.BR - Dev Web & AI Automation",
  description:
    "Desenvolvimento web moderno e automações com IA para empresas. Next.js, React, TypeScript, APIs de IA, n8n e integrações.",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en-US": `https://translate.google.com/translate?sl=pt&tl=en&u=${encodeURIComponent(siteUrl)}`,
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Hamilton Felipe | LipDev.BR - Dev Web & AI Automation",
    description:
      "Sites modernos e automações com IA que economizam tempo, capturam leads e aumentam conversões.",
    url: siteUrl,
    siteName: "LipDev.BR",
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    images: [
      {
        url: socialPreviewImage,
        width: 1200,
        height: 630,
        alt: "LipDev.BR portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamilton Felipe | LipDev.BR - Dev Web & AI Automation",
    description:
      "Sites modernos e automações com IA que economizam tempo, capturam leads e aumentam conversões.",
    images: [socialPreviewImage],
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
