import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  "/images/lipdev-backend-preview.webp",
  siteUrl
).toString();
const metadataDescription =
  "Portfólio de Hamilton Felipe com projetos e estudos em Python, Flask, APIs REST, automação, SQLite e segurança ofensiva em laboratórios autorizados.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LipDev | Desenvolvedor Backend Python em formação",
    template: "%s | Hamilton Felipe",
  },
  description: metadataDescription,
  applicationName: "LipDev",
  authors: [{ name: "Hamilton Felipe", url: siteUrl }],
  creator: "Hamilton Felipe",
  publisher: "LipDev",
  category: "technology",
  keywords: [
    "Hamilton Felipe",
    "LipDev",
    "Desenvolvedor Backend Python",
    "Python",
    "Flask",
    "APIs REST",
    "automação Python",
    "SQLite",
    "MySQL",
    "Requests",
    "Selenium",
    "segurança ofensiva",
    "Parrot OS",
    "portfólio",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "LipDev | Desenvolvedor Backend Python em formação",
    description: metadataDescription,
    url: siteUrl,
    siteName: "LipDev",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: socialPreviewImage,
        width: 2172,
        height: 724,
        alt: "LipDev — Python backend, automação e estudos de segurança",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LipDev | Desenvolvedor Backend Python em formação",
    description: metadataDescription,
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
      suppressHydrationWarning
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
