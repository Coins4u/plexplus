"use client";

import { useCallback, useState } from "react";

type CopyFieldProps = {
  label: string;
  value: string;
  mono?: boolean;
};

export function CopyField({ label, value, mono = true }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }, [value]);

  return (
    <div className="pay-field">
      <div className="pay-field-label">{label}</div>
      <div className="pay-field-row">
        <code className={mono ? "pay-field-value mono" : "pay-field-value"}>{value}</code>
        <button type="button" className="pay-copy-btn" onClick={onCopy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

type OrderSummaryProps = {
  plan: string;
  priceLabel: string;
};

export function OrderSummary({ plan, priceLabel }: OrderSummaryProps) {
  return (
    <div className="pay-summary">
      <div className="pay-summary-row">
        <span>Selected plan</span>
        <strong>{plan}</strong>
      </div>
      <div className="pay-summary-row">
        <span>Final price (15% off)</span>
        <strong className="pay-price">{priceLabel}</strong>
      </div>
    </div>
  );
}

export function PaymentWarnings() {
  return (
    <div className="pay-warnings">
      <div className="pay-warning pay-warning-danger">
        <strong>Important — payment reference</strong>
        <p>
          Use <em>ORDER REF + your full name</em> only. Do <em>not</em> write &quot;TV&quot;,
          &quot;IPTV&quot;, channel names, or anything related to streaming in the payment
          reference, description, or memo.
        </p>
      </div>
      <div className="pay-warning pay-warning-info">
        <strong>After you pay</strong>
        <p>
          Reply to your previous order confirmation email with a payment receipt or screenshot.
          We confirm the payment and activate your account only after we receive that proof.
        </p>
      </div>
    </div>
  );
}

export function parsePaymentQuery(
  planRaw: string | null,
  priceRaw: string | null,
): { plan: string; price: number; priceLabel: string; valid: boolean } {
  const plan = (planRaw || "").trim() || "Selected plan";
  const price = Number.parseFloat((priceRaw || "").replace(",", "."));
  const valid = Number.isFinite(price) && price > 0;
  const priceLabel = valid ? `€${price.toFixed(2)}` : "—";
  return { plan, price: valid ? price : 0, priceLabel, valid };
}
