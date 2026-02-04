import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meilleur Abonnement IPTV France 2025 | Fournisseur IPTV Premium 4K",
  description:
    "Découvrez le meilleur abonnement IPTV en France pour 2025. Plex Plus, votre fournisseur IPTV premium avec +47 000 chaînes françaises et internationales en 4K.",
  alternates: {
    canonical: "https://plexplus.tv/fr/",
  },
  openGraph: {
    type: "website",
    url: "https://plexplus.tv/fr/",
    title: "Meilleur Abonnement IPTV France 2025 | Fournisseur IPTV Premium 4K",
    description:
      "Découvrez le meilleur abonnement IPTV en France pour 2025. +47 000 chaînes françaises et internationales en 4K avec votre fournisseur IPTV premium.",
    images: ["https://plexplus.tv/img/logo.png"],
  },
};

export default function FrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
