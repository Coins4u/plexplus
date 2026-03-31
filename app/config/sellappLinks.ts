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
    checkoutLink: "https://datadraft.mysellauth.com/checkout/901e29dffbb68-0000011081894",
    durationLabel: "1 Month",
    priceLabel: "€14.59",
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
    checkoutLink: "https://datadraft.mysellauth.com/checkout/7678ac16efaa2-0000011081908",
    durationLabel: "3 Months",
    priceLabel: "€24.56",
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
    checkoutLink: "https://datadraft.mysellauth.com/checkout/0f106d2836390-0000011081927",
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
    checkoutLink: "https://datadraft.mysellauth.com/checkout/169882f5fee94-0000011081947",
    durationLabel: "12 Months",
    priceLabel: "€49.99",
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
    checkoutLink: "https://datadraft.mysellauth.com/checkout/e9c58afbe7b1d-0000011081955",
    durationLabel: "1 Month Premium",
    priceLabel: "€25.86",
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
    checkoutLink: "https://datadraft.mysellauth.com/checkout/eb8edc545c436-0000011081963",
    durationLabel: "3 Months Premium",
    priceLabel: "€36.45",
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
    checkoutLink: "https://datadraft.mysellauth.com/checkout/91f09f9f835ee-0000011081974",
    durationLabel: "6 Months Premium",
    priceLabel: "€45.28",
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
    checkoutLink: "https://datadraft.mysellauth.com/checkout/3e348853d0030-0000011082013",
    durationLabel: "12 Months Premium",
    priceLabel: "€67.98",
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
