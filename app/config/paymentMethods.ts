export type SelectablePaymentMethod = "bank_transfer" | "cryptocurrency";

export type PaymentMethodOption = {
  value: SelectablePaymentMethod | "credit_card" | "paypal";
  label: string;
  selectable: boolean;
};

export type PaymentPageParams = {
  plan: string;
  /** Discounted EUR total, e.g. 56.51 */
  price: number;
};

/** Live bank / SEPA details shown on /pay/bank */
export const BANK_PAYMENT_DETAILS = {
  accountHolder: "XXX",
  bankName: "XXX",
  iban: "xxx-xxx-xxx-xxx-xxx",
  bic: "XXX",
  bankAddress: "XXX",
  referenceHint:
    "ORDER REF + your full name (Do not include words like “TV”, “IPTV”, in the payment reference or description.)",
};

/** Live USDT wallet shown on /pay/crypto */
export const CRYPTO_PAYMENT_DETAILS = {
  asset: "USDT (BEP20)",
  network: "BNB Smart Chain",
  walletAddress: "0x954705efe9a5c038d90fae64fd5408ea71d7a1cb",
  memoHint: "ORDER REF + your full name",
};

export const PAYMENT_METHOD_OPTIONS: PaymentMethodOption[] = [
  { value: "bank_transfer", label: "Bank Transfer", selectable: true },
  { value: "cryptocurrency", label: "Cryptocurrency", selectable: true },
  { value: "credit_card", label: "Credit Card (Coming Soon)", selectable: false },
  { value: "paypal", label: "PayPal (Coming Soon)", selectable: false },
];

export const PAYMENT_METHOD_LABELS: Record<SelectablePaymentMethod, string> = {
  bank_transfer: "Bank Transfer",
  cryptocurrency: "Cryptocurrency",
};

export function isSelectablePaymentMethod(
  value: string,
): value is SelectablePaymentMethod {
  return value === "bank_transfer" || value === "cryptocurrency";
}

export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://plexplus.tv";
  return raw.replace(/\/$/, "");
}

export function buildPaymentPagePath(
  method: SelectablePaymentMethod,
  params: PaymentPageParams,
): string {
  const base = method === "bank_transfer" ? "/pay/bank" : "/pay/crypto";
  const query = new URLSearchParams({
    plan: params.plan,
    price: params.price.toFixed(2),
  });
  return `${base}?${query.toString()}`;
}

export function buildPaymentPageUrl(
  method: SelectablePaymentMethod,
  params: PaymentPageParams,
): string {
  return `${getSiteUrl()}${buildPaymentPagePath(method, params)}`;
}
