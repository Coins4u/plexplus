import type { Metadata } from "next";
import { SetLang } from "./components/SetLang";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best IPTV Service 2025 | Premium IPTV Providers | USA & UK & EUROPE IPTV",
  description:
    "Stream 47,000+ live channels with our premium IPTV service. The best IPTV provider for USA, UK & worldwide. Support for Firestick, Kodi, Smart IPTV & IPTV Smarters Pro.",
  alternates: {
    canonical: "https://plexplus.tv/",
    languages: {
      en: "https://plexplus.tv/",
      fr: "https://plexplus.tv/fr/",
      de: "https://plexplus.tv/de/",
      it: "https://plexplus.tv/it/",
      nl: "https://plexplus.tv/nl/",
      pt: "https://plexplus.tv/pt/",
      "x-default": "https://plexplus.tv/",
    },
  },
  openGraph: {
    type: "website",
    url: "https://plexplus.tv/",
    title: "Best IPTV Service 2025 | Premium IPTV Providers | USA & UK IPTV",
    description:
      "Stream 47,000+ live channels with our premium IPTV service. Best IPTV provider for USA & UK. Supports Firestick, Kodi, and Smart IPTV apps.",
    images: ["https://plexplus.tv/img/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IPTV Service 2025 | Premium IPTV Providers | USA & UK IPTV",
    description:
      "Stream 47,000+ live channels with our premium IPTV service. Best IPTV provider for USA & UK. Supports Firestick, Kodi, and Smart IPTV apps.",
    images: ["https://plexplus.tv/img/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link rel="shortcut icon" href="/img/favicon.png" type="image/png" />
      </head>
      <body>
        <SetLang />
        {children}
      </body>
    </html>
  );
}
