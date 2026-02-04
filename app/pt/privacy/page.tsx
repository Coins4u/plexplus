"use client";

import { LocaleLayout } from "../../components/LocaleLayout";
import { LegalPrivacyContent } from "../../components/LegalPrivacyContent";
import { localeLabels } from "../../lib/localeLabels";

export default function PtPrivacyPage() {
  const labels = localeLabels.pt;
  return (
    <LocaleLayout locale="pt" labels={labels}>
      <main className="legal-section">
        <div className="container">
          <h2 className="section-title">{labels.legal.privacyTitle}</h2>
          <LegalPrivacyContent />
        </div>
      </main>
    </LocaleLayout>
  );
}
