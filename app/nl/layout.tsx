import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Kopen Nederland 2025 | Beste IPTV Abonnement | Legale IPTV Aanbieders",
  description:
    "IPTV kopen in Nederland. Beste IPTV abonnement met Nederlandse kanalen, M3U lijsten. Legale IPTV aanbieders Nederland. Goedkope IPTV met kastje. IPTV aanbieding 2025.",
  alternates: {
    canonical: "https://plexplus.tv/nl/",
  },
  openGraph: {
    type: "website",
    url: "https://plexplus.tv/nl/",
    title: "IPTV Kopen Nederland 2025 | Beste IPTV Abonnement | Legale IPTV",
    description:
      "IPTV kopen in Nederland. Beste IPTV abonnement met Nederlandse kanalen, M3U lijsten. Legale IPTV aanbieders.",
    images: ["https://plexplus.tv/img/logo.png"],
  },
};

export default function NlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
