import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Italia 2025 | Miglior IPTV Italiano | Lista Canali IPTV Italiani",
  description:
    "IPTV Italia - Migliore IPTV italiano con lista canali IPTV italiani, liste M3U funzionanti. Abbonamenti IPTV legale. IPTV per Fire Stick. Canali italiani IPTV 2025.",
  alternates: {
    canonical: "https://plexplus.tv/it/",
  },
  openGraph: {
    type: "website",
    url: "https://plexplus.tv/it/",
    title: "Miglior Servizio IPTV Italia 2025 - Fornitore IPTV Premium 4K/UHD | Plex Plus",
    description:
      "Abbonati al miglior servizio IPTV in Italia del 2025. Plex Plus offre 47.000+ canali live, film e sport in 4K/UHD.",
    images: ["https://plexplus.tv/img/logo.png"],
  },
};

export default function ItLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
