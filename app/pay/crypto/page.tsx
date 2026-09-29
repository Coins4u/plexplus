import { Suspense } from "react";
import type { Metadata } from "next";
import CryptoPaymentContent from "./CryptoPaymentContent";

export const metadata: Metadata = {
  title: "Cryptocurrency Payment | Plex Plus",
  robots: { index: false, follow: false },
};

export default function CryptoPaymentPage() {
  return (
    <Suspense
      fallback={
        <main className="pay-section">
          <div className="container">
            <div className="pay-card">
              <p className="pay-muted">Loading payment details…</p>
            </div>
          </div>
        </main>
      }
    >
      <CryptoPaymentContent />
    </Suspense>
  );
}
