"use client";

import { useSearchParams } from "next/navigation";
import PaymentPageShell from "@/app/components/PaymentPageShell";
import {
  OrderSummary,
  parsePaymentQuery,
} from "@/app/components/PaymentPageShared";

export default function BankPaymentContent() {
  const searchParams = useSearchParams();
  const { plan, priceLabel, valid } = parsePaymentQuery(
    searchParams.get("plan"),
    searchParams.get("price"),
  );

  return (
    <PaymentPageShell
      title="Bank Transfer"
      subtitle="Bank payment details are sent privately after you confirm your order by email."
    >
      <OrderSummary plan={plan} priceLabel={priceLabel} />

      {!valid && (
        <p className="pay-error">
          This page is missing a valid plan price. Please use the link in your order confirmation
          email, or reply to that email for help.
        </p>
      )}

      <section className="pay-block">
        <h2>How to complete your bank transfer</h2>
        <ol className="pay-steps">
          <li>Open the order confirmation email we sent you.</li>
          <li>
            Reply directly to that email to confirm your order and request your secure bank payment
            details.
          </li>
          <li>
            We will review your reply and send the bank credentials through a private email reply.
          </li>
          <li>
            After you pay, reply again with a receipt or screenshot so we can activate your account.
          </li>
        </ol>
      </section>

      <div className="pay-warnings">
        <div className="pay-warning pay-warning-info">
          <strong>Private bank details only</strong>
          <p>
            For security, IBAN and account details are never shown on this website. Reply to your
            order confirmation email to receive them securely.
          </p>
        </div>
      </div>
    </PaymentPageShell>
  );
}
