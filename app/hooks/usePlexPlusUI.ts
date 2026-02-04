"use client";

import { useEffect } from "react";

const PRICING_URLS = [
  "https://aurapresets.shop/bundle/VIP-500.html",
  "https://aurapresets.shop/bundle/Master-700.html",
  "https://aurapresets.shop/bundle/Pro-1200.html",
  "https://aurapresets.shop/bundle/Mega-2500.html",
  "https://aurapresets.shop/bundle/Starter-500.html",
  "https://aurapresets.shop/bundle/Elite-700.html",
  "https://aurapresets.shop/bundle/Pro-Max-1200.html",
  "https://aurapresets.shop/bundle/Ultimate-2500.html",
];

export function usePlexPlusUI() {
  useEffect(() => {
    // Pricing links mapping by DOM order (matches your existing main.js default list)
    const selectors = [
      ".pricing-card .btn",
      ".pricing__card__cta a.button",
      ".pricing__card__cta a",
      ".pricing a.button",
      'a[data-plan]',
    ];
    const allButtons: HTMLAnchorElement[] = [];
    selectors.forEach((sel) => {
      document.querySelectorAll<HTMLAnchorElement>(sel).forEach((el) => {
        if (!allButtons.includes(el)) allButtons.push(el);
      });
    });
    allButtons.forEach((anchor, index) => {
      const url = PRICING_URLS[index];
      if (!url) return;
      anchor.href = url;
      anchor.rel = "noopener noreferrer";
      anchor.referrerPolicy = "no-referrer";
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector<HTMLElement>(".mobile-toggle");
    const navLinks = document.querySelector<HTMLElement>(".nav-links");

    const handleToggleClick = () => {
      if (!navLinks || !mobileToggle) return;
      navLinks.classList.toggle("active");
      const icon = mobileToggle.querySelector("i");
      if (!icon) return;
      if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    };

    mobileToggle?.addEventListener("click", handleToggleClick);

    // Close mobile menu when a nav link is clicked
    const navLinkEls = Array.from(
      document.querySelectorAll<HTMLElement>(".nav-link"),
    );
    const handleNavLinkClick = () => {
      if (!navLinks || !mobileToggle) return;
      navLinks.classList.remove("active");
      const icon = mobileToggle.querySelector("i");
      if (!icon) return;
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    };
    navLinkEls.forEach((el) => el.addEventListener("click", handleNavLinkClick));

    // Pricing toggle logic
    const toggleSwitch = document.querySelector<HTMLElement>(".toggle-switch");
    const standardLabel = document.querySelector<HTMLElement>(
      '.toggle-label[data-plan="standard"]',
    );
    const premiumLabel = document.querySelector<HTMLElement>(
      '.toggle-label[data-plan="premium"]',
    );
    const standardContainer =
      document.querySelector<HTMLElement>("#standard-plans");
    const premiumContainer =
      document.querySelector<HTMLElement>("#premium-plans");

    const switchPlan = (plan: "standard" | "premium") => {
      if (
        !toggleSwitch ||
        !standardLabel ||
        !premiumLabel ||
        !standardContainer ||
        !premiumContainer
      ) {
        return;
      }

      if (plan === "premium") {
        toggleSwitch.classList.add("premium");
        standardLabel.classList.remove("active");
        premiumLabel.classList.add("active");
        standardContainer.classList.remove("active");
        premiumContainer.classList.add("active");
      } else {
        toggleSwitch.classList.remove("premium");
        premiumLabel.classList.remove("active");
        standardLabel.classList.add("active");
        premiumContainer.classList.remove("active");
        standardContainer.classList.add("active");
      }
    };

    const handleToggleSwitchClick = () => {
      if (!toggleSwitch) return;
      const isPremium = toggleSwitch.classList.contains("premium");
      switchPlan(isPremium ? "standard" : "premium");
    };

    const handleStandardClick = () => switchPlan("standard");
    const handlePremiumClick = () => switchPlan("premium");

    if (toggleSwitch && standardContainer && premiumContainer) {
      toggleSwitch.addEventListener("click", handleToggleSwitchClick);
      standardLabel?.addEventListener("click", handleStandardClick);
      premiumLabel?.addEventListener("click", handlePremiumClick);
    }

    // Smooth scroll for internal anchors
    const anchorHandlers: Array<[HTMLAnchorElement, (e: Event) => void]> = [];
    document
      .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
      .forEach((anchor) => {
        const handler = (e: Event) => {
          const href = anchor.getAttribute("href");
          if (!href || href === "#") return;
          e.preventDefault();
          const target = document.querySelector(href);
          target?.scrollIntoView({ behavior: "smooth" });
        };
        anchor.addEventListener("click", handler);
        anchorHandlers.push([anchor, handler]);
      });

    return () => {
      mobileToggle?.removeEventListener("click", handleToggleClick);
      navLinkEls.forEach((el) =>
        el.removeEventListener("click", handleNavLinkClick),
      );

      if (toggleSwitch && standardContainer && premiumContainer) {
        toggleSwitch.removeEventListener("click", handleToggleSwitchClick);
        standardLabel?.removeEventListener("click", handleStandardClick);
        premiumLabel?.removeEventListener("click", handlePremiumClick);
      }

      anchorHandlers.forEach(([a, handler]) =>
        a.removeEventListener("click", handler),
      );
    };
  }, []);
}

