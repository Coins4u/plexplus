export type SellAppTier = {
  tierName: string;
  checkoutLink: string;
  durationLabel: string;
  priceLabel: string;
  packageDetails: string[];
};

// Centralized link configuration for easy management.
// Order must match pricing cards order on homepages.
export const SELLAPP_TIERS: SellAppTier[] = [
  {
    tierName: "1 Month",
    checkoutLink:
      "https://www.g2g.com/categories/dino-iptv-accounts/offer/G1776372621329DB?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=ayoubes",
    durationLabel: "1 Month",
    priceLabel: "€12.67",
    packageDetails: [
      "20K+ HD Channels",
      "120K+ Movies & Series",
      "Reliable Performance",
      "All Devices Supported",
      "24/7 Live chat support",
      "Adult Content (Optional)",
    ],
  },
  {
    tierName: "3 Months",
    checkoutLink:
      "https://www.g2g.com/categories/dino-iptv-accounts/offer/G1776373094864TY?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=ayoubes",
    durationLabel: "3 Months",
    priceLabel: "€24.49",
    packageDetails: [
      "20K+ HD Channels",
      "120K+ Movies & Series",
      "Reliable Performance",
      "All Devices Supported",
      "24/7 Live chat support",
      "Adult Content (Optional)",
    ],
  },
  {
    tierName: "6 Months",
    checkoutLink:
      "https://www.g2g.com/categories/dino-iptv-accounts/offer/G1776373189873NX?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=ayoubes",
    durationLabel: "6 Months",
    priceLabel: "€34.78",
    packageDetails: [
      "20K+ HD Channels",
      "120K+ Movies & Series",
      "Reliable Performance",
      "All Devices Supported",
      "24/7 Live chat support",
      "Adult Content (Optional)",
    ],
  },
  {
    tierName: "12 Months",
    checkoutLink:
      "https://www.g2g.com/categories/dino-iptv-accounts/offer/G1776373353554KK?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=ayoubes",
    durationLabel: "12 Months",
    priceLabel: "€48.56",
    packageDetails: [
      "20K+ HD Channels",
      "120K+ Movies & Series",
      "Reliable Performance",
      "All Devices Supported",
      "24/7 Live chat support",
      "Adult Content (Optional)",
    ],
  },
  {
    tierName: "1 Month Premium",
    checkoutLink:
      "https://www.g2g.com/categories/strng-iptv-8k-accounts/offer/G1776375783323NE?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=ayoubes",
    durationLabel: "1 Month Premium",
    priceLabel: "€23.45",
    packageDetails: [
      "Premium Anti-Buffer Server",
      "47K+ 4K/UHD Channels",
      "180K+ Movies & Series",
      "Sports Event Priority",
      "Global Coverage (US/UK/EU)",
      "Adult Content (Optional)",
    ],
  },
  {
    tierName: "3 Months Premium",
    checkoutLink:
      "https://www.g2g.com/categories/strng-iptv-8k-accounts/offer/G1776375847461GR?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=ayoubes",
    durationLabel: "3 Months Premium",
    priceLabel: "€34.53",
    packageDetails: [
      "Premium Anti-Buffer Server",
      "47K+ 4K/UHD Channels",
      "180K+ Movies & Series",
      "Sports Event Priority",
      "Global Coverage (US/UK/EU)",
      "Adult Content (Optional)",
    ],
  },
  {
    tierName: "6 Months Premium",
    checkoutLink:
      "https://www.g2g.com/categories/strng-iptv-8k-accounts/offer/G1776375951058WM?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=ayoubes",
    durationLabel: "6 Months Premium",
    priceLabel: "€44.79",
    packageDetails: [
      "Premium Anti-Buffer Server",
      "47K+ 4K/UHD Channels",
      "180K+ Movies & Series",
      "Sports Event Priority",
      "Global Coverage (US/UK/EU)",
      "Adult Content (Optional)",
    ],
  },
  {
    tierName: "12 Months Premium",
    checkoutLink:
      "https://www.g2g.com/categories/strng-iptv-8k-accounts/offer/G1776376044008XN?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=ayoubes",
    durationLabel: "12 Months Premium",
    priceLabel: "€65.48",
    packageDetails: [
      "Premium Anti-Buffer Server",
      "47K+ 4K/UHD Channels",
      "180K+ Movies & Series",
      "Sports Event Priority",
      "Global Coverage (US/UK/EU)",
      "Adult Content (Optional)",
    ],
  },
];

export function getTierByIndex(index: number) {
  return SELLAPP_TIERS[index];
}
