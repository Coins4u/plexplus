/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePlexPlusUI } from "../hooks/usePlexPlusUI";
import type { Locale, LocaleLabels } from "../lib/localeLabels";

interface LocaleLayoutProps {
  locale: Locale;
  labels: LocaleLabels;
  children: React.ReactNode;
}

export function LocaleLayout({ locale, labels, children }: LocaleLayoutProps) {
  usePlexPlusUI();
  const base = `/${locale}`;

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <Link href={base} className="logo">
              <img src="/img/logo.png" alt="Plex Plus Logo" />
            </Link>
            <div className="mobile-toggle">
              <i className="fas fa-bars" />
            </div>
            <nav className="nav-links">
              <Link href={base} className="nav-link">
                {labels.nav.home}
              </Link>
              <a href={`${base}/#sports`} className="nav-link">
                {labels.nav.sports}
              </a>
              <a href={`${base}/#movies`} className="nav-link">
                {labels.nav.movies}
              </a>
              <a href={`${base}/#pricing`} className="nav-link">
                {labels.nav.pricing}
              </a>
              <a href={`${base}/#howto`} className="nav-link">
                {labels.nav.howToOrder}
              </a>
              <Link href={`${base}/guide`} className="nav-link">
                {labels.nav.guide}
              </Link>
              <Link href={`${base}/contact`} className="nav-link">
                {labels.nav.contact}
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {children}

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Link href={base} className="footer-logo">
                <img src="/img/logo.png" alt="Plex Plus Logo" />
              </Link>
              <p className="footer-desc">{labels.footer.desc}</p>
            </div>
            <div className="footer-links">
              <h3>{labels.footer.quickLinks}</h3>
              <ul>
                <li>
                  <Link href={base}>{labels.footer.home}</Link>
                </li>
                <li>
                  <a href={`${base}/#pricing`}>{labels.footer.pricing}</a>
                </li>
                <li>
                  <Link href={`${base}/guide`}>{labels.footer.guide}</Link>
                </li>
                <li>
                  <Link href={`${base}/contact`}>{labels.footer.contact}</Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>{labels.footer.legal}</h3>
              <ul>
                <li>
                  <Link href={`${base}/TermsConditions`}>{labels.footer.terms}</Link>
                </li>
                <li>
                  <Link href={`${base}/privacy`}>{labels.footer.privacy}</Link>
                </li>
                <li>
                  <Link href={`${base}/RefundPolicy`}>{labels.footer.refund}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>{labels.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
