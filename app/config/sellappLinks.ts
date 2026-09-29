export type SellAppTier = {
  tierName: string;
  checkoutLink: string;
  durationLabel: string;
  /** Listed price as shown on the website (EUR). */
  priceAmount: number;
  priceLabel: string;
  packageDetails: string[];
};

export const BANK_CRYPTO_DISCOUNT_RATE = 0.15;

export function formatEuro(amount: number): string {
  return `€${amount.toFixed(2)}`;
}

/** Final price = listed × 0.85, rounded to 2 decimals. */
export function getDiscountedPrice(listedAmount: number): number {
  return Math.round(listedAmount * (1 - BANK_CRYPTO_DISCOUNT_RATE) * 100) / 100;
}

function tier(
  tierName: string,
  checkoutLink: string,
  durationLabel: string,
  priceAmount: number,
  packageDetails: string[],
): SellAppTier {
  return {
    tierName,
    checkoutLink,
    durationLabel,
    priceAmount,
    priceLabel: formatEuro(priceAmount),
    packageDetails,
  };
}

const STANDARD_DETAILS = [
  "20K+ HD Channels",
  "120K+ Movies & Series",
  "Reliable Performance",
  "All Devices Supported",
  "24/7 Live chat support",
  "Adult Content (Optional)",
];

const PREMIUM_DETAILS = [
  "Premium Anti-Buffer Server",
  "47K+ 4K/UHD Channels",
  "180K+ Movies & Series",
  "Sports Event Priority",
  "Global Coverage (US/UK/EU)",
  "Adult Content (Optional)",
];

// Centralized tier configuration. Order must match pricing cards on homepages.
// Listed prices match the website plan prices.
export const SELLAPP_TIERS: SellAppTier[] = [
  tier(
    "1 Month",
    "https://www.g2g.com/categories/dino-iptv-accounts/offer/G1776372621329DB?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=ayoubes",
    "1 Month",
    12.89,
    STANDARD_DETAILS,
  ),
  tier(
    "3 Months",
    "https://www.g2g.com/categories/dino-iptv-accounts/offer/G1776373094864TY?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=ayoubes",
    "3 Months",
    24.93,
    STANDARD_DETAILS,
  ),
  tier(
    "6 Months",
    "https://www.g2g.com/categories/dino-iptv-accounts/offer/G1776373189873NX?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=ayoubes",
    "6 Months",
    36.72,
    STANDARD_DETAILS,
  ),
  tier(
    "12 Months",
    "https://www.g2g.com/categories/dino-iptv-accounts/offer/G1776373353554KK?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=ayoubes",
    "12 Months",
    49.94,
    STANDARD_DETAILS,
  ),
  tier(
    "1 Month Premium",
    "https://www.g2g.com/categories/strng-iptv-8k-accounts/offer/G1776375783323NE?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=ayoubes",
    "1 Month Premium",
    24.12,
    PREMIUM_DETAILS,
  ),
  tier(
    "3 Months Premium",
    "https://www.g2g.com/categories/strng-iptv-8k-accounts/offer/G1776375847461GR?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=ayoubes",
    "3 Months Premium",
    34.63,
    PREMIUM_DETAILS,
  ),
  tier(
    "6 Months Premium",
    "https://www.g2g.com/categories/strng-iptv-8k-accounts/offer/G1776375951058WM?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=ayoubes",
    "6 Months Premium",
    44.79,
    PREMIUM_DETAILS,
  ),
  tier(
    "12 Months Premium",
    "https://www.g2g.com/categories/strng-iptv-8k-accounts/offer/G1776376044008XN?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=ayoubes",
    "12 Months Premium",
    66.48,
    PREMIUM_DETAILS,
  ),
];

export function getTierByIndex(index: number) {
  return SELLAPP_TIERS[index];
}
