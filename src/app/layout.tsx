import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider, themeScript } from "@/lib/theme";
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
  title: {
    default: "Hamilton Felipe | Desenvolvedor Web & Automação com IA",
    template: "%s | Hamilton Felipe",
  },
  description:
    "Portfólio de Hamilton Felipe com aplicações web, sistemas, interfaces responsivas e experimentos de automação com IA.",
  applicationName: "LipDev.BR",
  authors: [{ name: "Hamilton Felipe", url: siteUrl }],
  creator: "Hamilton Felipe",
  publisher: "LipDev.BR",
  category: "technology",
  keywords: [
    "Hamilton Felipe",
    "desenvolvedor web",
    "Next.js",
    "React",
    "TypeScript",
    "automação com IA",
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
    title: "Hamilton Felipe | Desenvolvedor Web & Automação com IA",
    description:
      "Aplicações web, sistemas, interfaces responsivas e experimentos de automação com IA.",
    url: siteUrl,
    siteName: "LipDev.BR",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: socialPreviewImage,
        width: 1200,
        height: 630,
        alt: "Prévia do portfólio LipDev.BR de Hamilton Felipe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamilton Felipe | Desenvolvedor Web & Automação com IA",
    description:
      "Aplicações web, sistemas, interfaces responsivas e experimentos de automação com IA.",
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
