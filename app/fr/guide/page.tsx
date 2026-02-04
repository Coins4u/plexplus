"use client";

import { LocaleLayout } from "../../components/LocaleLayout";
import { GuideContent } from "../../components/GuideContent";
import { localeLabels } from "../../lib/localeLabels";

export default function FrGuidePage() {
  const labels = localeLabels.fr;
  return (
    <LocaleLayout locale="fr" labels={labels}>
      <GuideContent title={labels.guide.title} subtitle={labels.guide.subtitle} />
    </LocaleLayout>
  );
}
