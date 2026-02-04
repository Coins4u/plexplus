"use client";

import { LocaleLayout } from "../../components/LocaleLayout";
import { LocaleContactContent } from "../../components/LocaleContactContent";
import { localeLabels } from "../../lib/localeLabels";

export default function ItContactPage() {
  const labels = localeLabels.it;
  return (
    <LocaleLayout locale="it" labels={labels}>
      <LocaleContactContent locale="it" labels={labels} />
    </LocaleLayout>
  );
}
