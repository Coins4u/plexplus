import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beste IPTV Anbieter Deutschland 2025 | IPTV Deutschland Legal | IPTV Kaufen",
  description:
    "Beste IPTV Anbieter Deutschland. IPTV kaufen mit deutscher IPTV, M3U Playlist. IPTV Deutschland legal. German IPTV streaming. IPTV Test 2025.",
  alternates: {
    canonical: "https://plexplus.tv/de/",
  },
  openGraph: {
    type: "website",
    url: "https://plexplus.tv/de/",
    title: "Beste IPTV Anbieter Deutschland 2025 | IPTV Deutschland Legal",
    description:
      "Beste IPTV Anbieter Deutschland. IPTV kaufen mit deutscher IPTV, M3U Playlist. IPTV Deutschland legal.",
    images: ["https://plexplus.tv/img/logo.png"],
  },
};

export default function DeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
