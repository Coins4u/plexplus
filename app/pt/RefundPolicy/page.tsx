"use client";

import { LocaleLayout } from "../../components/LocaleLayout";
import { LegalRefundContent } from "../../components/LegalRefundContent";
import { localeLabels } from "../../lib/localeLabels";

export default function PtRefundPage() {
  const labels = localeLabels.pt;
  return (
    <LocaleLayout locale="pt" labels={labels}>
      <main className="legal-section">
        <div className="container">
          <h2 className="section-title">{labels.legal.refundTitle}</h2>
          <LegalRefundContent />
        </div>
      </main>
    </LocaleLayout>
  );
}
