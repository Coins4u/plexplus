/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import Icon from "../components/Icon";
import { usePlexPlusUI } from "../hooks/usePlexPlusUI";

export default function RefundPolicyPage() {
  usePlexPlusUI();

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <Link href="/" className="logo">
              <img src="/img/logo.png" alt="Plex Plus Logo" />
            </Link>
            <div className="mobile-toggle">
              <Icon name="bars" className="icon icon-bars" />
              <Icon name="times" className="icon icon-times" />
            </div>
            <nav className="nav-links">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <a href="/#sports" className="nav-link">
                Sports
              </a>
              <a href="/#movies" className="nav-link">
                Movies
              </a>
              <a href="/#pricing" className="nav-link">
                Pricing
              </a>
              <a href="/#howto" className="nav-link">
                How to Order
              </a>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="legal-section">
        <div className="container">
          <h2 className="section-title">Refund Policy</h2>
          <div className="legal-content">
            <div className="legal-item">
              <p>
                We are committed to ensuring the satisfaction of our customers. If you are not entirely satisfied with
                your purchase, we&apos;re here to help. <br />
                Please review our refund policy below:
              </p>
            </div>

            <div className="legal-item">
              <h3>Refund Eligibility</h3>
              <p>
                Refunds are applicable within <strong>7 days</strong> from the date of purchase. To be eligible for a
                refund, the product or service must be unused and in the same condition as received. If your request is
                approved, your refund will be processed and a credit will automatically be applied to your credit card
                or original method of payment, within a certain number of days.
              </p>
            </div>

            <div className="legal-item">
              <h3>Sale Items</h3>
              <p>Only regular priced items may be refunded. Sale items cannot be refunded.</p>
            </div>

            <div className="legal-item">
              <h3>How to Request a Refund</h3>
              <p>
                To initiate a refund, please contact our customer support team from our platform using WhatsApp or
                contact form with your order number and a detailed explanation of the reason for the refund request. Our
                team will review your request and respond within 7 business days.
              </p>
            </div>

            <div className="legal-item">
              <h3>Refund Process</h3>
              <p>
                Once your refund request is approved, a credit will automatically be applied to your original method of
                payment within 2 days.
              </p>
            </div>

            <div className="legal-item">
              <h3>Late or Missing Refunds</h3>
              <p>
                If you haven&apos;t received a refund within the specified timeframe, please first check your bank
                account. Contact your credit card company, as it may take some time before your refund is officially
                posted. If you have done all of this and you still haven’t received your refund, please contact us.
              </p>
            </div>

            <div className="legal-item">
              <h3>Special Circumstances</h3>
              <p>
                We understand that there may be exceptional circumstances where a refund is required beyond our standard
                policy. Please contact us directly to discuss any unique situation.
              </p>
            </div>

            <div className="legal-item">
              <h3>Refund Policy Changes</h3>
              <p>
                Plex Plus reserves the right to modify or update this refund policy at any time. Any changes will become
                effective immediately upon being posted on the website.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
                <img src="/img/logo.png" alt="Plex Plus Logo" />
              </Link>
              <p className="footer-desc">Premium IPTV Subscription Service.</p>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <a href="/#pricing">Pricing</a>
                </li>
                <li>
                  <Link href="/guide">Installation Guide</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Legal</h3>
              <ul>
                <li>
                  <Link href="/TermsConditions">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/RefundPolicy">Refund Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Plex Plus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

