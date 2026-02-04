/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { usePlexPlusUI } from "../hooks/usePlexPlusUI";

export default function ContactPage() {
  usePlexPlusUI();

  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setMessage(null);

    try {
      const res = await fetch("/contact/api", {
        method: "POST",
        body: formData,
      });
      const text = await res.text();
      setMessage(text || "Thank you for your message. We will get back to you.");
      setIsSuccess(res.ok || text.includes("Thank you"));
      if (res.ok) {
        form.reset();
      }
    } catch {
      setMessage("An error occurred. Please try again.");
      setIsSuccess(false);
    } finally {
      setStatus("idle");
    }
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <Link href="/" className="logo">
              <img src="/img/logo.png" alt="Plex Plus Logo" />
            </Link>
            <div className="mobile-toggle">
              <i className="fas fa-bars" />
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
              <Link href="/guide" className="nav-link">
                Installation Guide
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="contact-section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-info">
            <p style={{ fontSize: "1.1rem", marginBottom: 20 }}>
              Have questions or need assistance? Our dedicated support team is here to help you 24/7.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: 20,
                marginBottom: 40,
                textAlign: "left",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: 20,
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <i
                  className="fas fa-bolt"
                  style={{
                    color: "var(--primary-color)",
                    fontSize: "1.5rem",
                    marginBottom: 15,
                  }}
                />
                <h3 style={{ color: "#fff", marginBottom: 10 }}>Fast Response</h3>
                <p style={{ fontSize: "0.9rem", margin: 0 }}>
                  We aim to respond to all tickets within <strong>1-2 hours</strong>. Please check your spam folder if
                  you don&apos;t see a reply.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: 20,
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <i
                  className="fas fa-book-open"
                  style={{
                    color: "var(--primary-color)",
                    fontSize: "1.5rem",
                    marginBottom: 15,
                  }}
                />
                <h3 style={{ color: "#fff", marginBottom: 10 }}>Installation Guides</h3>
                <p style={{ fontSize: "0.9rem", margin: 0 }}>
                  Need help setting up? Check out our detailed{" "}
                  <Link
                    href="/guide"
                    style={{ color: "var(--primary-color)", textDecoration: "underline" }}
                  >
                    Installation Guides
                  </Link>{" "}
                  for step-by-step instructions.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: 20,
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <i
                  className="fas fa-question-circle"
                  style={{
                    color: "var(--primary-color)",
                    fontSize: "1.5rem",
                    marginBottom: 15,
                  }}
                />
                <h3 style={{ color: "#fff", marginBottom: 10 }}>FAQ</h3>
                <p style={{ fontSize: "0.9rem", margin: 0 }}>
                  Find answers to common questions about channels, buffering, and more in our{" "}
                  <a
                    href="/#faq"
                    style={{ color: "var(--primary-color)", textDecoration: "underline" }}
                  >
                    FAQ section
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows={5}
                  required
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", border: "none" }}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              {message && (
                <div
                  style={{
                    marginTop: 15,
                    textAlign: "center",
                    color: isSuccess ? "#4CAF50" : "#FF5252",
                  }}
                >
                  {message}
                </div>
              )}
            </form>
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

