"use client";

import { LocaleLayout } from "../../components/LocaleLayout";
import { LocaleContactContent } from "../../components/LocaleContactContent";
import { localeLabels } from "../../lib/localeLabels";

export default function FrContactPage() {
  const labels = localeLabels.fr;
  return (
    <LocaleLayout locale="fr" labels={labels}>
      <LocaleContactContent locale="fr" labels={labels} />
    </LocaleLayout>
  );
}
