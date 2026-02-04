/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePlexPlusUI } from "../hooks/usePlexPlusUI";

export default function DeHomePage() {
  usePlexPlusUI();

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <a href="#hero" className="logo">
              <img src="/img/logo.png" alt="Plex Plus Logo" />
            </a>
            <div className="mobile-toggle">
              <i className="fas fa-bars" />
            </div>
            <nav className="nav-links">
              <a href="#hero" className="nav-link">Startseite</a>
              <a href="#sports" className="nav-link">Sport</a>
              <a href="#movies" className="nav-link">Filme</a>
              <a href="#pricing" className="nav-link">Preise</a>
              <Link href="/de/guide" className="nav-link">Installationsanleitung</Link>
              <Link href="/de/contact" className="nav-link">Kontakt</Link>
            </nav>
          </div>
        </div>
      </header>

      <main role="main">
        <section id="hero" className="hero">
          <div className="container hero-content">
            <h1 className="hero-title">Beste <span>IPTV Deutschland</span> | Bester IPTV Anbieter</h1>
            <p className="hero-subtitle">
              Entdecken Sie den <strong>besten IPTV-Service in Deutschland</strong>. Genießen Sie über 47.000 Live-Kanäle,
              180.000 Filme und Serien in 4K/UHD-Qualität. Wir bieten <strong>deutsche IPTV</strong> mit <strong>M3U
                Playlists</strong> und vollständigem Support. Suchen Sie <strong>IPTV legal</strong>? Plex Plus ist die
              richtige Wahl mit Premium-Qualität und allen Sportkanälen.
            </p>
            <ul className="hero-features">
              <li><i className="fas fa-check-circle" /> 4K/UHD IPTV Qualität</li>
              <li><i className="fas fa-check-circle" /> Premium IPTV Deutschland</li>
              <li><i className="fas fa-check-circle" /> Geld-zurück-Garantie</li>
            </ul>
            <div className="hero-buttons">
              <a href="#pricing" className="btn btn-primary">Jetzt starten</a>
              <a href="#features" className="btn btn-outline">Mehr erfahren</a>
            </div>
          </div>
        </section>

        <section id="sports" className="grid-section">
          <div className="container">
            <h2 className="section-title">Live Sport | IPTV Deutschland</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Verpassen Sie keinen Moment Ihrer Lieblingssportarten. Schauen Sie Bundesliga, Champions League, Formel 1 und
              MotoGP live mit unserem <strong>IPTV Deutschland</strong> Service. Wir bieten stabiles Streaming in HD und 4K
              mit <strong>M3U Playlists</strong>. Der <strong>beste IPTV Anbieter</strong> für Sport.
            </p>
            <div className="bento-grid">
              <div className="grid-item">
                <img src="/img/sports/football.png" alt="Fußball" />
                <div className="grid-item-content"><h3 className="grid-item-title">Fußball</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/mma.png" alt="MMA" />
                <div className="grid-item-content"><h3 className="grid-item-title">MMA</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/basketball.png" alt="Basketball" />
                <div className="grid-item-content"><h3 className="grid-item-title">Basketball</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/motosports.png" alt="Motorsport" />
                <div className="grid-item-content"><h3 className="grid-item-title">Motorsport</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/tennis.png" alt="Tennis" />
                <div className="grid-item-content"><h3 className="grid-item-title">Tennis</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/equestrian.png" alt="Reiten" />
                <div className="grid-item-content"><h3 className="grid-item-title">Reiten</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/rugby.png" alt="Rugby" />
                <div className="grid-item-content"><h3 className="grid-item-title">Rugby</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/omnisports-ar.png" alt="Alle Sportarten" />
                <div className="grid-item-content"><h3 className="grid-item-title">Alle Sportarten</h3></div>
              </div>
            </div>
          </div>
        </section>

        <section id="movies" className="grid-section">
          <div className="container">
            <h2 className="section-title">Filme &amp; Serien | German IPTV</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Tauchen Sie ein in eine endlose Bibliothek. Schauen Sie die neuesten Blockbuster, beliebte Serien und
              preisgekrönte Dokumentationen in 4K-Qualität. Unser <strong>IPTV Service</strong> bietet über 180.000 Titel
              mit <strong>M3U Playlists</strong>, täglich aktualisiert.
            </p>
            <section className="cinema" aria-label="Movie Channels">
              <div data-binder="true" />
              <div className="ImageWall_Ef3d78 imageWallFocus">
                <div className="ImageWall__grid_Ef3d78">
                  <div className="ImageWall__grid__item_Ef3d78 ratio--169 ImageWall__grid__item_Ratio1691_Ef3d78">
                    <div className="ImageWall__grid__item__contentWrap_Ef3d78" tabIndex={0} role="link">
                      <a className="ImageWall__grid__item__contentWrap__linker_Ef3d78" aria-disabled="false">
                        <div className="ImageWallContent_34d1ae">
                          <div data-e2e="poster" className="poster_684939">
                            <img loading="lazy" src="/img/films/les-4-fantastiques-premiers-pas-film-mcu-banniere.webp" alt="Latest Movie Releases 4K" className="ImageType_149741 cover poster__cover_684939" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="ImageWall__grid__item_Ef3d78 ratio--169 ImageWall__grid__item_Ratio1692_Ef3d78">
                    <div className="ImageWall__grid__item__contentWrap_Ef3d78" tabIndex={0} role="link">
                      <a className="ImageWall__grid__item__contentWrap__linker_Ef3d78" aria-disabled="false">
                        <div className="ImageWallContent_34d1ae">
                          <div data-e2e="poster" className="poster_684939">
                            <img loading="lazy" src="/img/films/maxresdefault.webp" alt="Action Movies Streaming" className="ImageType_149741 cover poster__cover_684939" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="ImageWall__grid__item_Ef3d78 ratio--169 ImageWall__grid__item_Ratio1693_Ef3d78">
                    <div className="ImageWall__grid__item__contentWrap_Ef3d78" tabIndex={0} role="link">
                      <a className="ImageWall__grid__item__contentWrap__linker_Ef3d78" aria-disabled="false">
                        <div className="ImageWallContent_34d1ae">
                          <div data-e2e="poster" className="poster_684939">
                            <img loading="lazy" src="/img/films/sinners.webp" alt="Top Rated Films Streaming" className="ImageType_149741 cover poster__cover_684939" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="ImageWall__grid__item_Ef3d78 ratio--169 ImageWall__grid__item_Ratio1694_Ef3d78">
                    <div className="ImageWall__grid__item__contentWrap_Ef3d78" tabIndex={0} role="link">
                      <a className="ImageWall__grid__item__contentWrap__linker_Ef3d78" aria-disabled="false">
                        <div className="ImageWallContent_34d1ae">
                          <div data-e2e="poster" className="poster_684939">
                            <img loading="lazy" src="/img/films/fe5c2ef3-1c8a-4c9e-b722-b036f018856c.webp" alt="Popular Movies 2025" className="ImageType_149741 cover poster__cover_684939" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="ImageWall__grid__item_Ef3d78 ratio--34 ImageWall__grid__item_Ratio341_Ef3d78">
                    <div className="ImageWall__grid__item__contentWrap_Ef3d78" tabIndex={0} role="link">
                      <a className="ImageWall__grid__item__contentWrap__linker_Ef3d78" aria-disabled="false">
                        <div className="ImageWallContent_34d1ae">
                          <div data-e2e="poster" className="poster_684939">
                            <img loading="lazy" src="/img/films/eszlm4m030kf1.webp" alt="Family & Kids Movies" className="ImageType_149741 cover poster__cover_684939" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="ImageWall__grid__item_Ef3d78 ratio--34 ImageWall__grid__item_Ratio342_Ef3d78">
                    <div className="ImageWall__grid__item__contentWrap_Ef3d78" tabIndex={0} role="link">
                      <a className="ImageWall__grid__item__contentWrap__linker_Ef3d78" aria-disabled="false">
                        <div className="ImageWallContent_34d1ae">
                          <div data-e2e="poster" className="poster_684939">
                            <img loading="lazy" src="/img/films/Screenshot 2025-12-20 at 12.37.26.webp" alt="Thriller Movies Streaming" className="ImageType_149741 cover poster__cover_684939" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="ImageWall__grid__item_Ef3d78 ratio--34 ImageWall__grid__item_Ratio343_Ef3d78">
                    <div className="ImageWall__grid__item__contentWrap_Ef3d78" tabIndex={0} role="link">
                      <a className="ImageWall__grid__item__contentWrap__linker_Ef3d78" aria-disabled="false">
                        <div className="ImageWallContent_34d1ae">
                          <div data-e2e="poster" className="poster_684939">
                            <img loading="lazy" src="/img/films/Screenshot 2025-12-20 at 12.38.08.webp" alt="Exclusive Movie Premieres" className="ImageType_149741 cover poster__cover_684939" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="ImageWall__grid__item_Ef3d78 ratio--34 ImageWall__grid__item_Ratio344_Ef3d78">
                    <div className="ImageWall__grid__item__contentWrap_Ef3d78" tabIndex={0} role="link">
                      <a className="ImageWall__grid__item__contentWrap__linker_Ef3d78" aria-disabled="false">
                        <div className="ImageWallContent_34d1ae">
                          <div data-e2e="poster" className="poster_684939">
                            <img loading="lazy" src="/img/films/Screenshot 2025-12-20 at 12.39.35.webp" alt="Blockbuster Cinema Streaming" className="ImageType_149741 cover poster__cover_684939" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section id="howto" className="howto-section">
          <div className="container">
            <h2 className="section-title">Wie es funktioniert</h2>
            <div className="howto-grid">
              <div className="howto-card">
                <div className="howto-number"><i className="fas fa-clipboard-check" /></div>
                <h3 className="howto-title">1. Abo wählen</h3>
                <p className="howto-desc">
                  Durchstöbern Sie unsere flexiblen Preisoptionen und wählen Sie das Paket, das zu Ihren Bedürfnissen passt. Wir bieten Laufzeiten von 1, 3, 6 und 12 Monaten für Standard und Premium Server.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number"><i className="fas fa-credit-card" /></div>
                <h3 className="howto-title">2. Sichere Bezahlung</h3>
                <p className="howto-desc">
                  Schließen Sie Ihren Kauf sicher über unser verschlüsseltes Zahlungs-Gateway ab. Wir akzeptieren gängige Kreditkarten und weitere bequeme Zahlungsmethoden.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number"><i className="fas fa-tv" /></div>
                <h3 className="howto-title">3. Sofortige Aktivierung</h3>
                <p className="howto-desc">
                  Erhalten Sie Ihre <strong>IPTV Zugangsdaten</strong> per E-Mail innerhalb weniger Minuten. Folgen Sie unserer einfachen Installationsanleitung für Ihr Gerät (Smart TV, Firestick, Android, iOS) und starten Sie sofort mit <strong>Top IPTV Streaming</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container">
            <h2 className="section-title">IPTV Kaufen | Beste IPTV Anbieter Deutschland</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 30px", color: "var(--text-gray)" }}>
              Wählen Sie das perfekte Paket. Wir bieten den <strong>besten IPTV Service in Deutschland</strong> mit erschwinglichen Preisen und Premium-Qualität. Erhalten Sie <strong>M3U Playlists</strong>, vollständigen Support und Zugang zu allen Kanälen.
            </p>
            <div className="pricing-alert">
              <p><strong>Sichere &amp; Schnelle Lieferung:</strong> Nach dem Kauf erhalten Sie Ihre IPTV-Zugangsdaten (Benutzername, Passwort, URL) innerhalb von 1-3 Stunden per E-Mail. SSL-sichere Zahlungsabwicklung.</p>
              <div className="payment-notice">
                <strong>Zahlungshinweis:</strong>
                <p>Erwähnen Sie IPTV oder verwandte Begriffe nicht in PayPal-Nachrichten, Notizen oder Streitfällen.</p>
              </div>
            </div>
            <div className="pricing-toggle-container">
              <span className="toggle-label active" data-plan="standard">Standard Server</span>
              <div className="toggle-switch" />
              <span className="toggle-label" data-plan="premium">Premium Server</span>
            </div>
            <div id="standard-plans" className="pricing-container active">
              {[
                ["1 Monat", "€14.59", "/Monat"],
                ["3 Monate", "€24.56", "/3 Mon", true, "Bester Wert"],
                ["6 Monate", "€34.78", "/6 Mon"],
                ["12 Monate", "€49.99", "/Jahr"],
              ].map(([name, price, suffix, popular, badge]) => (
                <div key={name as string} className={`pricing-card ${popular ? "popular" : ""}`}>
                  {badge && <div className="popular-badge">{badge}</div>}
                  <h3 className="plan-name">{name}</h3>
                  <div className="plan-price">{price}<span>{suffix}</span></div>
                  <ul className="pricing-features">
                    <li><i className="fas fa-check" /> <strong>20K+ HD Kanäle</strong></li>
                    <li><i className="fas fa-check" /> <strong>120K+ Filme &amp; Serien</strong></li>
                    <li><i className="fas fa-check" /> <strong>Zuverlässige Leistung</strong></li>
                    <li><i className="fas fa-check" /> <strong>Alle Geräte unterstützt</strong></li>
                    <li><i className="fas fa-check" /> <strong>24/7 Live-Chat Support</strong></li>
                    <li><i className="fas fa-check" /> <strong>Erwachseneninhalte (Optional)</strong></li>
                  </ul>
                  <a href="#" className={popular ? "btn btn-primary" : "btn btn-outline"}>Jetzt bestellen</a>
                  <img src="/img/payments.png" alt="Accepted Payment Methods" className="payment-methods-img" />
                </div>
              ))}
            </div>
            <div id="premium-plans" className="pricing-container">
              {[
                ["1 Monat Premium", "€25.86", "/Monat"],
                ["3 Monate Premium", "€36.45", "/3 Mon", true, "Top Auswahl"],
                ["6 Monate Premium", "€45.28", "/6 Mon"],
                ["12 Monate Premium", "€67.98", "/Jahr"],
              ].map(([name, price, suffix, popular, badge]) => (
                <div key={name as string} className={`pricing-card ${popular ? "popular" : ""}`}>
                  {badge && <div className="popular-badge">{badge}</div>}
                  <h3 className="plan-name">{name}</h3>
                  <div className="plan-price">{price}<span>{suffix}</span></div>
                  <ul className="pricing-features">
                    <li><i className="fas fa-check" /> <strong>Premium Anti-Puffer Server</strong></li>
                    <li><i className="fas fa-check" /> <strong>47K+ 4K/UHD Kanäle</strong></li>
                    <li><i className="fas fa-check" /> <strong>180K+ Filme &amp; Serien</strong></li>
                    <li><i className="fas fa-check" /> <strong>Priorität bei Sport-Events</strong></li>
                    <li><i className="fas fa-check" /> <strong>Globale Abdeckung (US/UK/EU)</strong></li>
                    <li><i className="fas fa-check" /> <strong>Erwachseneninhalte (Optional)</strong></li>
                  </ul>
                  <a href="#" className={popular ? "btn btn-primary" : "btn btn-outline"}>Jetzt bestellen</a>
                  <img src="/img/payments.png" alt="Accepted Payment Methods" className="payment-methods-img" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="container">
            <h2 className="section-title">Warum Plex Plus wählen?</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Entdecken Sie das ultimative Streaming-Erlebnis mit fortschrittlicher Anti-Freeze-Technologie. Unser Service bietet <strong>vollständige IPTV Listen</strong> im <strong>M3U Format</strong>, kompatibel mit Smart TV, Firestick und mobilen Geräten. 4K-Qualität garantiert mit <strong>legalem und zuverlässigem Service</strong> in Deutschland.
            </p>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-tv" /></div>
                <div className="feature-content">
                  <h3>47.000+ IPTV Kanäle</h3>
                  <p>Zugriff auf eine riesige Bibliothek von Live-Kanälen. Enthält <strong>deutsche IPTV</strong> Premium-Kanäle aus DE, USA, UK und Europa in HD &amp; 4K-Qualität. Vollständige <strong>IPTV Deutschland</strong> Kanalliste.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-film" /></div>
                <div className="feature-content">
                  <h3>VOD Bibliothek</h3>
                  <p>Unbegrenzter Zugang zu 180.000+ Filmen und Serien. Kompatibel mit <strong>M3U Playlists</strong> und allen <strong>IPTV Apps</strong>. Täglich aktualisiert mit den neuesten Veröffentlichungen.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-bolt" /></div>
                <div className="feature-content">
                  <h3>Zuverlässiger IPTV Server</h3>
                  <p>Genießen Sie unterbrechungsfreies Streaming mit unserem Premium <strong>IPTV Server</strong>. 99,9% Uptime garantiert pufferfreie Qualität. Der <strong>beste IPTV Anbieter</strong> für Deutschland.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-headset" /></div>
                <div className="feature-content">
                  <h3>24/7 Support</h3>
                  <p>Unser Experten-Support ist 24/7/365 per Live-Chat und E-Mail erreichbar, um bei der Installation und Aktivierung auf jedem Gerät innerhalb von Minuten zu helfen.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-cogs" /></div>
                <div className="feature-content">
                  <h3>Einfach zu installieren</h3>
                  <p>Kompatibel mit allen Geräten, einschließlich Smart TV, Firestick, Android Box. Unser Service unterstützt <strong>M3U Playlists</strong> und alle <strong>IPTV Apps</strong>. <strong>IPTV kaufen</strong> und sofort starten.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-shield-alt" /></div>
                <div className="feature-content">
                  <h3>Sicher &amp; Privat</h3>
                  <p>Ihre Privatsphäre ist unsere Priorität. Wir verwenden fortschrittliche Verschlüsselung, um sicheres, anonymes Streaming mit einer strikten No-Logs-Richtlinie zu gewährleisten.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="devices" className="devices-section">
          <div className="glow-bg" />
          <div className="container">
            <h2 className="section-title">Unterstützte Geräte</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Unser <strong>IPTV-Dienst</strong> funktioniert auf all Ihren Lieblingsgeräten. Egal, ob Sie <strong>IPTV auf dem Firestick</strong>, Smart TV oder Mobilgerät schauen möchten, wir bieten Ihnen eine einfache Installation und umfassenden Support.
            </p>
            <div className="devices-grid">
              <div className="device-card"><i className="fab fa-amazon" /><h3>Firestick / Fire TV</h3></div>
              <div className="device-card"><i className="fas fa-tv" /><h3>Smart TV (LG/Samsung)</h3></div>
              <div className="device-card"><i className="fab fa-android" /><h3>Android-Geräte</h3></div>
              <div className="device-card"><i className="fab fa-apple" /><h3>iOS / Apple TV</h3></div>
              <div className="device-card"><i className="fas fa-laptop" /><h3>PC / Windows / Mac</h3></div>
              <div className="device-card"><i className="fas fa-box" /><h3>MAG / Enigma2</h3></div>
            </div>
          </div>
        </section>

        <section id="reviews" className="reviews-section">
          <div className="container">
            <h2 className="section-title">Kundenbewertungen</h2>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="stars"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></div>
                <p className="review-text">&quot;Der <strong>beste IPTV Service</strong> 2025, ohne Zweifel. Kein Puffer bei großen Spielen und die Bildqualität ist unglaublich. Ich kann diesen <strong>IPTV Anbieter</strong> nur wärmstens empfehlen.&quot;</p>
                <p className="review-author">- John D.</p>
              </div>
              <div className="review-card">
                <div className="stars"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /></div>
                <p className="review-text">&quot;Großartige Auswahl an Filmen und Serien. Meine Familie liebt die Qualität der <strong>IPTV Streams</strong>. Das <strong>beste IPTV</strong> für zuverlässige Unterhaltung!&quot;</p>
                <p className="review-author">- Sarah M.</p>
              </div>
              <div className="review-card">
                <div className="stars"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></div>
                <p className="review-text">&quot;Der Support war sehr hilfreich beim Einrichten meines Geräts. Alles funktioniert jetzt perfekt. Definitiv ein <strong>Top bewerteter IPTV</strong> Dienst.&quot;</p>
                <p className="review-author">- Michael R.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section">
          <div className="container">
            <h2 className="section-title">Häufig gestellte Fragen zu IPTV Deutschland</h2>
            <div className="faq-grid">
              <details className="faq-item">
                <summary className="faq-question">Was brauche ich für IPTV? <i className="fas fa-chevron-down" /></summary>
                <div className="faq-answer">
                  <p>Für unseren <strong>IPTV Service</strong> benötigen Sie: Smart TV mit IPTV App, Firestick, oder jedes Gerät, das <strong>M3U Playlists</strong> unterstützt. Wir bieten <strong>deutsche IPTV</strong> kompatibel mit allen Geräten. Internet 15-25 Mbps empfohlen.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Brauche ich ein VPN für IPTV? <i className="fas fa-chevron-down" /></summary>
                <div className="faq-answer">
                  <p>Ein VPN verschlüsselt Ihren Datenverkehr und schützt Ihre Privatsphäre. Die Nutzung wird für zusätzliche Sicherheit mit <strong>IPTV Deutschland</strong> empfohlen. Wählen Sie immer <strong>IPTV legal</strong> wie Plex Plus für eine sichere Erfahrung.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Kann ich IPTV auf meinem Handy schauen? <i className="fas fa-chevron-down" /></summary>
                <div className="faq-answer">
                  <p>Ja! Verwenden Sie <strong>IPTV Apps</strong> wie IPTV Smarters Pro auf Ihrem Telefon. Wir bieten <strong>M3U Playlists</strong> und Zugangsdaten für Streaming überall. Unser <strong>IPTV Service</strong> funktioniert perfekt auf iOS und Android.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Braucht man eine gute WLAN-Verbindung für IPTV? <i className="fas fa-chevron-down" /></summary>
                <div className="faq-answer">
                  <p>Es wird allgemein eine Internetverbindung von mindestens 10 Mbps für HD-Streaming und 16 Mbps für Ultra HD 4K-Streaming empfohlen.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Funktioniert IPTV auf einem normalen Fernseher? <i className="fas fa-chevron-down" /></summary>
                <div className="faq-answer">
                  <p>Sie können IPTV problemlos auf älteren TV-Modellen empfangen, benötigen jedoch einen externen Decoder (z.B. Android Box, Fire TV Stick). Dieser decodiert das digitale Signal und zeigt das Bild auf Ihrem TV-Bildschirm an.</p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="#hero" className="footer-logo"><img src="/img/logo.png" alt="Plex Plus Logo" /></a>
              <p className="footer-desc">Premium IPTV Subscription Service.</p>
            </div>
            <div className="footer-links">
              <h3>Schnelllinks</h3>
              <ul>
                <li><a href="#hero">Startseite</a></li>
                <li><a href="#pricing">Preise</a></li>
                <li><Link href="/de/guide">Installationsanleitung</Link></li>
                <li><Link href="/de/contact">Kontakt</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Rechtliches</h3>
              <ul>
                <li><Link href="/de/TermsConditions">AGB</Link></li>
                <li><Link href="/de/privacy">Datenschutzerklärung</Link></li>
                <li><Link href="/de/RefundPolicy">Rückerstattung</Link></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Plex Plus. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/14302485823" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp" />
      </a>
    </>
  );
}
