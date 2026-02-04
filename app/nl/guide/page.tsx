"use client";

import { LocaleLayout } from "../../components/LocaleLayout";
import { GuideContent } from "../../components/GuideContent";
import { localeLabels } from "../../lib/localeLabels";

export default function NlGuidePage() {
  const labels = localeLabels.nl;
  return (
    <LocaleLayout locale="nl" labels={labels}>
      <GuideContent title={labels.guide.title} subtitle={labels.guide.subtitle} />
    </LocaleLayout>
  );
}
