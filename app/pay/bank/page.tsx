import { Suspense } from "react";
import type { Metadata } from "next";
import BankPaymentContent from "./BankPaymentContent";

export const metadata: Metadata = {
  title: "Bank Transfer Payment | Plex Plus",
  robots: { index: false, follow: false },
};

export default function BankPaymentPage() {
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
      <BankPaymentContent />
    </Suspense>
  );
}
