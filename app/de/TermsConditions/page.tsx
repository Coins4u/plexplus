"use client";

import { LocaleLayout } from "../../components/LocaleLayout";
import { LegalTermsContent } from "../../components/LegalTermsContent";
import { localeLabels } from "../../lib/localeLabels";

export default function DeTermsPage() {
  const labels = localeLabels.de;
  return (
    <LocaleLayout locale="de" labels={labels}>
      <main className="legal-section">
        <div className="container">
          <h2 className="section-title">{labels.legal.termsTitle}</h2>
          <LegalTermsContent />
        </div>
      </main>
    </LocaleLayout>
  );
}
