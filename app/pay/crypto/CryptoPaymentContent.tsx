"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import PaymentPageShell from "@/app/components/PaymentPageShell";
import {
  CopyField,
  OrderSummary,
  PaymentWarnings,
  parsePaymentQuery,
} from "@/app/components/PaymentPageShared";
import { CRYPTO_PAYMENT_DETAILS } from "@/app/config/paymentMethods";

type UsdtQuote = {
  usdtAmount: number;
  eurPerUsdt: number;
  fetchedAt: string;
};

async function fetchUsdtQuote(eurAmount: number): Promise<UsdtQuote> {
  const res = await fetch(`/api/usdt-quote?eur=${encodeURIComponent(eurAmount.toFixed(2))}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Could not fetch USDT rate");
  }
  const data = (await res.json()) as {
    usdtAmount?: number;
    eurPerUsdt?: number;
    fetchedAt?: string;
  };
  if (!data.usdtAmount || !data.eurPerUsdt) {
    throw new Error("Invalid USDT rate");
  }
  return {
    usdtAmount: data.usdtAmount,
    eurPerUsdt: data.eurPerUsdt,
    fetchedAt: data.fetchedAt || new Date().toISOString(),
  };
}

export default function CryptoPaymentContent() {
  const searchParams = useSearchParams();
  const { plan, price, priceLabel, valid } = parsePaymentQuery(
    searchParams.get("plan"),
    searchParams.get("price"),
  );

  const [quote, setQuote] = useState<UsdtQuote | null>(null);
  const [quoteError, setQuoteError] = useState<string | null>(null);
  const [loadingQuote, setLoadingQuote] = useState(false);

  useEffect(() => {
    if (!valid) return;
    let cancelled = false;
    setLoadingQuote(true);
    setQuoteError(null);

    fetchUsdtQuote(price)
      .then((result) => {
        if (!cancelled) setQuote(result);
      })
      .catch(() => {
        if (!cancelled) {
          setQuoteError(
            "We could not load the live USDT rate. Please refresh this page or reply to your order email for help.",
          );
        }
      })
      .finally(() => {
        if (!cancelled) setLoadingQuote(false);
      });

    return () => {
      cancelled = true;
    };
  }, [price, valid]);

  const usdtLabel = quote ? `${quote.usdtAmount.toFixed(2)} USDT` : "—";

  return (
    <PaymentPageShell
      title="Cryptocurrency Payment (USDT)"
      subtitle="Send the USDT amount below to our wallet, then reply to your order email with proof of payment."
    >
      <OrderSummary plan={plan} priceLabel={priceLabel} />

      {!valid && (
        <p className="pay-error">
          This payment link is missing a valid plan price. Please use the button in your order
          confirmation email.
        </p>
      )}

      <section className="pay-block">
        <h2>USDT amount to send</h2>
        {loadingQuote && <p className="pay-muted">Fetching live EUR → USDT rate…</p>}
        {quoteError && <p className="pay-error">{quoteError}</p>}
        {quote && (
          <>
            <div className="pay-usdt-total">{usdtLabel}</div>
            <p className="pay-muted">
              Based on {priceLabel} at ~€{quote.eurPerUsdt.toFixed(4)} per USDT. Send this exact
              USDT amount on the network listed below.
            </p>
          </>
        )}
      </section>

      <section className="pay-block">
        <h2>How to pay</h2>
        <ol className="pay-steps">
          <li>
            Send exactly <strong>{usdtLabel}</strong> as {CRYPTO_PAYMENT_DETAILS.asset}.
          </li>
          <li>
            Use network: <strong>{CRYPTO_PAYMENT_DETAILS.network}</strong> only.
          </li>
          <li>Paste the wallet address below carefully (copy button recommended).</li>
          <li>
            Optional memo / note: <strong>{CRYPTO_PAYMENT_DETAILS.memoHint}</strong>. Do not
            include words like “TV” or “IPTV”.
          </li>
          <li>
            After the transfer confirms, reply to your order confirmation email with a receipt or
            screenshot.
          </li>
        </ol>
      </section>

      <section className="pay-block">
        <h2>Wallet details</h2>
        <CopyField label="Asset / network" value={`${CRYPTO_PAYMENT_DETAILS.asset} · ${CRYPTO_PAYMENT_DETAILS.network}`} mono={false} />
        <CopyField label="Wallet address" value={CRYPTO_PAYMENT_DETAILS.walletAddress} />
        <CopyField
          label="Optional memo / note"
          value={CRYPTO_PAYMENT_DETAILS.memoHint}
          mono={false}
        />
        {quote && <CopyField label="USDT amount" value={quote.usdtAmount.toFixed(2)} />}
      </section>

      <PaymentWarnings />
    </PaymentPageShell>
  );
}
