"use client";

import { LocaleLayout } from "../../components/LocaleLayout";
import { LegalPrivacyContent } from "../../components/LegalPrivacyContent";
import { localeLabels } from "../../lib/localeLabels";

export default function ItPrivacyPage() {
  const labels = localeLabels.it;
  return (
    <LocaleLayout locale="it" labels={labels}>
      <main className="legal-section">
        <div className="container">
          <h2 className="section-title">{labels.legal.privacyTitle}</h2>
          <LegalPrivacyContent />
        </div>
      </main>
    </LocaleLayout>
  );
}
