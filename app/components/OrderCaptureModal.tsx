"use client";

import { FormEvent, useEffect, useState } from "react";
import { getTierByIndex } from "@/app/config/sellappLinks";

type FormState = {
  fullName: string;
  email: string;
  country: string;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  country: "",
};

const COUNTRY_OPTIONS = [
  "Albania",
  "Andorra",
  "Argentina",
  "Austria",
  "Belarus",
  "Belgium",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Brazil",
  "Bulgaria",
  "Canada",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Dominican Republic",
  "Ecuador",
  "El Salvador",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Guatemala",
  "Honduras",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Mexico",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "Nicaragua",
  "North Macedonia",
  "Norway",
  "Panama",
  "Paraguay",
  "Peru",
  "Poland",
  "Portugal",
  "Romania",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Ukraine",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Venezuela",
  "Other",
];

export default function OrderCaptureModal() {
  const [open, setOpen] = useState(false);
  const [tierName, setTierName] = useState("");
  const [tierIndex, setTierIndex] = useState<number | null>(null);
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handlePricingClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest(".pricing-card .btn") as HTMLAnchorElement | null;
      if (!anchor) return;

      event.preventDefault();
      const pricingButtons = Array.from(
        document.querySelectorAll<HTMLAnchorElement>(".pricing-card .btn"),
      );
      const idx = pricingButtons.indexOf(anchor);
      const card = anchor.closest(".pricing-card");
      const heading = card?.querySelector(".plan-name")?.textContent?.trim();
      const tier = idx >= 0 ? getTierByIndex(idx) : undefined;

      setTierIndex(idx >= 0 ? idx : null);
      setTierName(heading || tier?.tierName || "Selected Tier");
      setForm(initialForm);
      setErrorMessage("");
      setSuccessMessage("");
      setOpen(true);
    };

    document.addEventListener("click", handlePricingClick);
    return () => document.removeEventListener("click", handlePricingClick);
  }, []);

  const closeModal = () => {
    if (submitting) return;
    setOpen(false);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/send-order-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          country: form.country,
          tierName,
          tierIndex,
        }),
      });

      const data = (await res.json()) as { message?: string };
      if (!res.ok) {
        throw new Error(data.message || "Could not submit your request.");
      }

      setSuccessMessage(
        `Thank you, ${form.fullName}. We have sent a secure payment link to ${form.email}. Please check your inbox (and spam folder) to finalize your purchase.`,
      );
      setForm(initialForm);
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Unexpected error. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="order-modal-overlay" onClick={closeModal}>
      <div
        className="order-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Order form"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="order-modal-close"
          onClick={closeModal}
          aria-label="Close"
        >
          ×
        </button>
        <h3 className="order-modal-title">Secure Checkout Request</h3>
        <p className="order-modal-tier">Selected Tier: {tierName}</p>

        <form className="order-form" onSubmit={onSubmit}>
          <label>
            Full Name
            <input
              type="text"
              required
              value={form.fullName}
              onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
            />
          </label>

          <label>
            Correct Email Address
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            />
          </label>

          <label>
            Country
            <select
              required
              value={form.country}
              onChange={(e) => setForm((p) => ({ ...p, country: e.target.value }))}
            >
              <option value="" disabled>
                Select your country
              </option>
              {COUNTRY_OPTIONS.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </label>

          <button type="submit" className="btn btn-primary order-form-submit" disabled={submitting}>
            {submitting ? "Sending..." : "Get Secure Payment Link"}
          </button>
        </form>

        {successMessage && <p className="order-form-success">{successMessage}</p>}
        {errorMessage && <p className="order-form-error">{errorMessage}</p>}
      </div>
    </div>
  );
}
