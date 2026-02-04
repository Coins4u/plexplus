"use client";

import { LocaleLayout } from "../../components/LocaleLayout";
import { LocaleContactContent } from "../../components/LocaleContactContent";
import { localeLabels } from "../../lib/localeLabels";

export default function NlContactPage() {
  const labels = localeLabels.nl;
  return (
    <LocaleLayout locale="nl" labels={labels}>
      <LocaleContactContent locale="nl" labels={labels} />
    </LocaleLayout>
  );
}
