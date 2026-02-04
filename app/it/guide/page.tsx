"use client";

import { LocaleLayout } from "../../components/LocaleLayout";
import { GuideContent } from "../../components/GuideContent";
import { localeLabels } from "../../lib/localeLabels";

export default function ItGuidePage() {
  const labels = localeLabels.it;
  return (
    <LocaleLayout locale="it" labels={labels}>
      <GuideContent title={labels.guide.title} subtitle={labels.guide.subtitle} />
    </LocaleLayout>
  );
}
