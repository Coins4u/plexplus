"use client";

import { useSearchParams } from "next/navigation";
import PaymentPageShell from "@/app/components/PaymentPageShell";
import {
  CopyField,
  OrderSummary,
  PaymentWarnings,
  parsePaymentQuery,
} from "@/app/components/PaymentPageShared";
import { BANK_PAYMENT_DETAILS } from "@/app/config/paymentMethods";

export default function BankPaymentContent() {
  const searchParams = useSearchParams();
  const { plan, priceLabel, valid } = parsePaymentQuery(
    searchParams.get("plan"),
    searchParams.get("price"),
  );

  return (
    <PaymentPageShell
      title="Bank Transfer (SEPA Instant)"
      subtitle="Pay the discounted total below by SEPA Instant transfer, then reply to your order email with proof of payment."
    >
      <OrderSummary plan={plan} priceLabel={priceLabel} />

      {!valid && (
        <p className="pay-error">
          This payment link is missing a valid plan price. Please use the button in your order
          confirmation email.
        </p>
      )}

      <section className="pay-block">
        <h2>How to pay with SEPA Instant</h2>
        <ol className="pay-steps">
          <li>Open your banking app and choose a SEPA Instant transfer (if available).</li>
          <li>
            Send exactly <strong>{priceLabel}</strong> to the account details below.
          </li>
          <li>
            In the reference / description, use <strong>ORDER REF + your full name</strong> only.
            Do not include words like “TV” or “IPTV”.
          </li>
          <li>
            After the transfer, reply to your order confirmation email with a receipt or
            screenshot.
          </li>
        </ol>
      </section>

      <section className="pay-block">
        <h2>Account details</h2>
        <CopyField label="Beneficiary" value={BANK_PAYMENT_DETAILS.accountHolder} mono={false} />
        <CopyField label="Bank name" value={BANK_PAYMENT_DETAILS.bankName} mono={false} />
        <CopyField label="IBAN" value={BANK_PAYMENT_DETAILS.iban} />
        <CopyField label="BIC / SWIFT" value={BANK_PAYMENT_DETAILS.bic} />
        <CopyField label="Bank address" value={BANK_PAYMENT_DETAILS.bankAddress} mono={false} />
        <CopyField
          label="Reference / description"
          value={BANK_PAYMENT_DETAILS.referenceHint}
          mono={false}
        />
      </section>

      <PaymentWarnings />
    </PaymentPageShell>
  );
}
