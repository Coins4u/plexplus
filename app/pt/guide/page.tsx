"use client";

import { LocaleLayout } from "../../components/LocaleLayout";
import { GuideContent } from "../../components/GuideContent";
import { localeLabels } from "../../lib/localeLabels";

export default function PtGuidePage() {
  const labels = localeLabels.pt;
  return (
    <LocaleLayout locale="pt" labels={labels}>
      <GuideContent title={labels.guide.title} subtitle={labels.guide.subtitle} />
    </LocaleLayout>
  );
}
