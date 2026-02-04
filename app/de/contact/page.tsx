"use client";

import { LocaleLayout } from "../../components/LocaleLayout";
import { LocaleContactContent } from "../../components/LocaleContactContent";
import { localeLabels } from "../../lib/localeLabels";

export default function DeContactPage() {
  const labels = localeLabels.de;
  return (
    <LocaleLayout locale="de" labels={labels}>
      <LocaleContactContent locale="de" labels={labels} />
    </LocaleLayout>
  );
}
