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
    checkoutLink: "https://datadraft.mysellauth.com/product/starter-pack",
    durationLabel: "1 Month",
    priceLabel: "€14.32",
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
    checkoutLink: "https://datadraft.mysellauth.com/product/elite-vault",
    durationLabel: "3 Months",
    priceLabel: "€25.86",
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
    checkoutLink: "https://datadraft.mysellauth.com/product/business-suite",
    durationLabel: "6 Months",
    priceLabel: "€37.31",
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
    checkoutLink: "https://datadraft.mysellauth.com/product/enterprise-ledger",
    durationLabel: "12 Months",
    priceLabel: "€49.12",
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
    checkoutLink: "https://datadraft.mysellauth.com/product/pro-dashboard-access",
    durationLabel: "1 Month Premium",
    priceLabel: "€24.89",
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
    checkoutLink: "https://datadraft.mysellauth.com/product/growth-bundle",
    durationLabel: "3 Months Premium",
    priceLabel: "€36.49",
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
    checkoutLink: "https://datadraft.mysellauth.com/product/premium-toolkit",
    durationLabel: "6 Months Premium",
    priceLabel: "€46.65",
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
    checkoutLink: "https://datadraft.mysellauth.com/product/ultimate-data-infrastructure",
    durationLabel: "12 Months Premium",
    priceLabel: "€69.09",
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
