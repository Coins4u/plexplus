"use client";

import { LocaleLayout } from "../../components/LocaleLayout";
import { GuideContent } from "../../components/GuideContent";
import { localeLabels } from "../../lib/localeLabels";

export default function DeGuidePage() {
  const labels = localeLabels.de;
  return (
    <LocaleLayout locale="de" labels={labels}>
      <GuideContent title={labels.guide.title} subtitle={labels.guide.subtitle} />
    </LocaleLayout>
  );
}
