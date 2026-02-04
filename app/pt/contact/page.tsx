"use client";

import { LocaleLayout } from "../../components/LocaleLayout";
import { LocaleContactContent } from "../../components/LocaleContactContent";
import { localeLabels } from "../../lib/localeLabels";

export default function PtContactPage() {
  const labels = localeLabels.pt;
  return (
    <LocaleLayout locale="pt" labels={labels}>
      <LocaleContactContent locale="pt" labels={labels} />
    </LocaleLayout>
  );
}
