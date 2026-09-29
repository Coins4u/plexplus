"use client";

import Link from "next/link";
import { ReactNode } from "react";
import Icon from "@/app/components/Icon";
import { usePlexPlusUI } from "@/app/hooks/usePlexPlusUI";

type PaymentPageShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function PaymentPageShell({
  title,
  subtitle,
  children,
}: PaymentPageShellProps) {
  usePlexPlusUI();

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <Link href="/" className="logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
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
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="pay-section">
        <div className="container">
          <div className="pay-card">
            <h1 className="pay-title">{title}</h1>
            <p className="pay-subtitle">{subtitle}</p>
            {children}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="pay-footer-note">
            Need help? Reply to your order confirmation email or visit our{" "}
            <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </footer>
    </>
  );
}
