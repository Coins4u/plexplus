import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Melhor IPTV Portugal 2025 | Lista IPTV Portugal | IPTV 4K Portugal Pro",
  description:
    "Melhor IPTV em Portugal com playlist IPTV Portugal, M3U IPTV, listas IPTV Portugal grátis. IPTV legal Portugal, IPTV 4K Portugal, lista IPTV SportV Portugal. Melhores IPTV Portugal 2025.",
  alternates: {
    canonical: "https://plexplus.tv/pt/",
  },
  openGraph: {
    type: "website",
    url: "https://plexplus.tv/pt/",
    title: "Melhor IPTV Portugal 2025 | Lista IPTV Portugal | IPTV 4K Portugal",
    description:
      "Melhor IPTV em Portugal com playlist IPTV Portugal, M3U IPTV, listas IPTV Portugal. IPTV legal Portugal, IPTV 4K, lista IPTV SportV.",
    images: ["https://plexplus.tv/img/logo.png"],
  },
};

export default function PtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
