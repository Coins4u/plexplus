/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePlexPlusUI } from "../hooks/usePlexPlusUI";

export default function FrHomePage() {
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
              <a href="#hero" className="nav-link">Accueil</a>
              <a href="#sports" className="nav-link">Sports</a>
              <a href="#movies" className="nav-link">Films</a>
              <a href="#pricing" className="nav-link">Tarifs</a>
              <Link href="/fr/guide" className="nav-link">Guide d&apos;installation</Link>
              <Link href="/fr/contact" className="nav-link">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main role="main">
        <section id="hero" className="hero">
          <div className="container hero-content">
            <h1 className="hero-title">Le Meilleur <span>Abonnement IPTV France</span> | Votre Fournisseur IPTV Premium</h1>
            <p className="hero-subtitle">
              Découvrez le <strong>meilleur IPTV</strong> pour la France. Profitez de +47 000 chaînes en direct, 180 000
              films et séries en qualité 4K/UHD. Nous proposons un <strong>abonnement IPTV France</strong> premium avec un
              support complet. Optez pour la <strong>meilleure IPTV</strong> avec Plex Plus, votre fournisseur de confiance.
            </p>
            <ul className="hero-features">
              <li><i className="fas fa-check-circle" /> Qualité IPTV 4K/UHD</li>
              <li><i className="fas fa-check-circle" /> IPTV France &amp; International</li>
              <li><i className="fas fa-check-circle" /> Garantie Satisfait ou Remboursé</li>
            </ul>
            <div className="hero-buttons">
              <a href="#pricing" className="btn btn-primary">Commencer</a>
              <a href="#features" className="btn btn-outline">En savoir plus</a>
            </div>
          </div>
        </section>

        <section id="sports" className="grid-section">
          <div className="container">
            <h2 className="section-title">Sports en Direct | Abonnement IPTV Premium</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Ne manquez aucun moment de vos sports préférés. Regardez la Ligue 1, la Champions League, la Formule 1 et la
              MotoGP en direct avec le <strong>meilleur abonnement IPTV</strong>. Nous offrons des flux stables en HD et 4K
              avec une <strong>liste mise à jour de l&apos;IPTV M3U</strong>.
            </p>
            <div className="bento-grid">
              <div className="grid-item">
                <img src="/img/sports/football.png" alt="Football" />
                <div className="grid-item-content"><h3 className="grid-item-title">Football</h3></div>
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
                <img src="/img/sports/motosports.png" alt="Sport Auto" />
                <div className="grid-item-content"><h3 className="grid-item-title">Sport Auto</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/tennis.png" alt="Tennis" />
                <div className="grid-item-content"><h3 className="grid-item-title">Tennis</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/equestrian.png" alt="Équitation" />
                <div className="grid-item-content"><h3 className="grid-item-title">Équitation</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/rugby.png" alt="Rugby" />
                <div className="grid-item-content"><h3 className="grid-item-title">Rugby</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/omnisports-ar.png" alt="Tous les Sports" />
                <div className="grid-item-content"><h3 className="grid-item-title">Tous les Sports</h3></div>
              </div>
            </div>
          </div>
        </section>

        <section id="movies" className="grid-section">
          <div className="container">
            <h2 className="section-title">Films &amp; Séries | Meilleur IPTV VOD</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Plongez dans une bibliothèque infinie de divertissement. Regardez les derniers blockbusters, vos séries
              préférées et des documentaires en qualité 4K. Notre <strong>fournisseur IPTV</strong> propose plus de 180 000
              titres VOD, inclus dans votre <strong>abonnement IPTV premium</strong>.
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
            <h2 className="section-title">Comment ça marche</h2>
            <div className="howto-grid">
              <div className="howto-card">
                <div className="howto-number"><i className="fas fa-clipboard-check" /></div>
                <h3 className="howto-title">1. Choisissez votre abonnement</h3>
                <p className="howto-desc">
                  Explorez nos options tarifaires flexibles et choisissez le forfait qui vous convient. Nous proposons des abonnements de 1, 3, 6 et 12 mois pour les serveurs Standard et Premium.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number"><i className="fas fa-credit-card" /></div>
                <h3 className="howto-title">2. Paiement Sécurisé</h3>
                <p className="howto-desc">
                  Finalisez votre achat en toute sécurité via notre passerelle de paiement cryptée. Nous acceptons les principales cartes de crédit et autres méthodes de paiement pratiques.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number"><i className="fas fa-tv" /></div>
                <h3 className="howto-title">3. Activation Immédiate</h3>
                <p className="howto-desc">
                  Recevez vos <strong>identifiants IPTV</strong> par email en quelques minutes. Suivez notre guide d&apos;installation simple pour votre appareil (Smart TV, Firestick, Android, iOS) et commencez immédiatement le <strong>streaming IPTV</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container">
            <h2 className="section-title">Nos Tarifs | Abonnement IPTV Pas Cher</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 30px", color: "var(--text-gray)" }}>
              Choisissez le forfait qui vous correspond. Profitez du <strong>meilleur IPTV</strong> avec des tarifs compétitifs et une qualité premium. Accédez à toutes les <strong>chaînes françaises</strong> et internationales avec un <strong>abonnement IPTV 12 mois smart TV</strong> ou plus court.
            </p>
            <div className="pricing-alert">
              <p><strong>Livraison Sécurisée &amp; Rapide :</strong> Après achat, vous recevrez vos détails d&apos;abonnement IPTV (Nom d&apos;utilisateur, Mot de passe, URL) par email sous 1 à 3 heures. Traitement sécurisé SSL.</p>
              <div className="payment-notice">
                <strong>Avis de paiement :</strong>
                <p>Ne mentionnez pas IPTV ou des termes liés dans les messages, notes ou litiges PayPal.</p>
              </div>
            </div>
            <div className="pricing-toggle-container">
              <span className="toggle-label active" data-plan="standard">Serveur Standard</span>
              <div className="toggle-switch" />
              <span className="toggle-label" data-plan="premium">Serveur Premium</span>
            </div>
            <div id="standard-plans" className="pricing-container active">
              {[
                ["1 Mois", "€14.59", "/Mois"],
                ["3 Mois", "€24.56", "/3 Mois", true, "Meilleure Valeur"],
                ["6 Mois", "€34.78", "/6 Mois"],
                ["12 Mois", "€49.99", "/An"],
              ].map(([name, price, suffix, popular, badge]) => (
                <div key={name as string} className={`pricing-card ${popular ? "popular" : ""}`}>
                  {badge && <div className="popular-badge">{badge}</div>}
                  <h3 className="plan-name">{name}</h3>
                  <div className="plan-price">{price}<span>{suffix}</span></div>
                  <ul className="pricing-features">
                    <li><i className="fas fa-check" /> <strong>20K+ Chaînes HD</strong></li>
                    <li><i className="fas fa-check" /> <strong>120K+ Films &amp; Séries</strong></li>
                    <li><i className="fas fa-check" /> <strong>Performance Fiable</strong></li>
                    <li><i className="fas fa-check" /> <strong>Tous les appareils supportés</strong></li>
                    <li><i className="fas fa-check" /> <strong>Support Chat 24/7</strong></li>
                    <li><i className="fas fa-check" /> <strong>Contenu Adulte (Optionnel)</strong></li>
                  </ul>
                  <a href="#" className={popular ? "btn btn-primary" : "btn btn-outline"}>Commander</a>
                  <img src="/img/payments.png" alt="Accepted Payment Methods" className="payment-methods-img" />
                </div>
              ))}
            </div>
            <div id="premium-plans" className="pricing-container">
              {[
                ["1 Mois Premium", "€25.86", "/Mois"],
                ["3 Mois Premium", "€36.45", "/3 Mois", true, "Top Choix"],
                ["6 Mois Premium", "€45.28", "/6 Mois"],
                ["12 Mois Premium", "€67.98", "/An"],
              ].map(([name, price, suffix, popular, badge]) => (
                <div key={name as string} className={`pricing-card ${popular ? "popular" : ""}`}>
                  {badge && <div className="popular-badge">{badge}</div>}
                  <h3 className="plan-name">{name}</h3>
                  <div className="plan-price">{price}<span>{suffix}</span></div>
                  <ul className="pricing-features">
                    <li><i className="fas fa-check" /> <strong>Serveur Premium Anti-Coupure</strong></li>
                    <li><i className="fas fa-check" /> <strong>47K+ Chaînes 4K/UHD</strong></li>
                    <li><i className="fas fa-check" /> <strong>180K+ Films &amp; Séries</strong></li>
                    <li><i className="fas fa-check" /> <strong>Priorité événements sportifs</strong></li>
                    <li><i className="fas fa-check" /> <strong>Couverture Globale (US/UK/EU)</strong></li>
                    <li><i className="fas fa-check" /> <strong>Contenu Adulte (Optionnel)</strong></li>
                  </ul>
                  <a href="#" className={popular ? "btn btn-primary" : "btn btn-outline"}>Commander</a>
                  <img src="/img/payments.png" alt="Accepted Payment Methods" className="payment-methods-img" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="container">
            <h2 className="section-title">Pourquoi choisir Plex Plus ?</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Découvrez l&apos;expérience de streaming ultime avec une technologie anti-coupure avancée. Notre <strong>abonnement IPTV premium</strong> offre des <strong>listes IPTV M3U</strong> complètes, compatibles avec Smart TV, Firestick et tous vos appareils. La <strong>meilleure IPTV France</strong> à portée de main.
            </p>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-tv" /></div>
                <div className="feature-content">
                  <h3>+47 000 Chaînes</h3>
                  <p>Accédez à une immense bibliothèque mondiale de chaînes en direct. Inclus les chaînes premium de France, USA, UK et Europe en qualité HD &amp; 4K. Le <strong>meilleur abonnement IPTV</strong> disponible.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-film" /></div>
                <div className="feature-content">
                  <h3>Bibliothèque VOD</h3>
                  <p>Accès illimité à plus de 180 000 films et séries. Inclus dans votre <strong>abonnement IPTV premium</strong>, mis à jour quotidiennement avec les dernières sorties.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-bolt" /></div>
                <div className="feature-content">
                  <h3>Technologie Anti-Coupure</h3>
                  <p>Profitez d&apos;un streaming ininterrompu grâce à notre technologie exclusive Anti-Freeze 9.0, garantissant 99,9% de disponibilité et zéro mise en mémoire tampon lors des grands matchs.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-headset" /></div>
                <div className="feature-content">
                  <h3>Support 24/7</h3>
                  <p>Notre support expert est disponible 24/7/365 par chat en direct et email pour vous aider à l&apos;installation et à l&apos;activation sur n&apos;importe quel appareil en quelques minutes.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-cogs" /></div>
                <div className="feature-content">
                  <h3>Installation Facile</h3>
                  <p>Compatible avec tous les appareils, y compris Smart TV, clés de streaming (Firestick), Box Android, lecteurs Web et smartphones.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-shield-alt" /></div>
                <div className="feature-content">
                  <h3>Sécurisé &amp; Privé</h3>
                  <p>Votre confidentialité est notre priorité. Nous utilisons un cryptage avancé pour garantir un streaming sécurisé, anonyme avec une politique stricte de non-conservation des logs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="devices" className="devices-section">
          <div className="glow-bg" />
          <div className="container">
            <h2 className="section-title">Appareils Supportés</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Notre <strong>service IPTV</strong> fonctionne sur tous vos appareils préférés. Que vous souhaitiez regarder l&apos;<strong>IPTV sur Firestick</strong>, Smart TV ou mobile, nous avons ce qu&apos;il vous faut avec une installation facile et un support complet.
            </p>
            <div className="devices-grid">
              <div className="device-card"><i className="fab fa-amazon" /><h3>Firestick / Fire TV</h3></div>
              <div className="device-card"><i className="fas fa-tv" /><h3>Smart TV (LG/Samsung)</h3></div>
              <div className="device-card"><i className="fab fa-android" /><h3>Appareils Android</h3></div>
              <div className="device-card"><i className="fab fa-apple" /><h3>iOS / Apple TV</h3></div>
              <div className="device-card"><i className="fas fa-laptop" /><h3>PC / Windows / Mac</h3></div>
              <div className="device-card"><i className="fas fa-box" /><h3>MAG / Enigma2</h3></div>
            </div>
          </div>
        </section>

        <section id="reviews" className="reviews-section">
          <div className="container">
            <h2 className="section-title">Avis Clients</h2>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="stars"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></div>
                <p className="review-text">&quot;Le <strong>meilleur service IPTV</strong> 2025, sans aucun doute. Pas de coupure pendant les grands matchs et la qualité d&apos;image est incroyable. Je recommande vivement ce <strong>fournisseur IPTV</strong>.&quot;</p>
                <p className="review-author">- John D.</p>
              </div>
              <div className="review-card">
                <div className="stars"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /></div>
                <p className="review-text">&quot;Superbe sélection de films et séries. Ma famille adore la qualité des <strong>streams IPTV</strong>. Le <strong>meilleur IPTV</strong> pour un divertissement fiable !&quot;</p>
                <p className="review-author">- Sarah M.</p>
              </div>
              <div className="review-card">
                <div className="stars"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></div>
                <p className="review-text">&quot;Le support a été très utile pour configurer mon appareil. Tout fonctionne parfaitement maintenant. Définitivement un service <strong>IPTV top niveau</strong>.&quot;</p>
                <p className="review-author">- Michael R.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section">
          <div className="container">
            <h2 className="section-title">Questions Fréquentes sur l&apos;IPTV France</h2>
            <div className="faq-grid">
              <details className="faq-item">
                <summary className="faq-question">De quoi ai-je besoin pour l&apos;IPTV ? <i className="fas fa-chevron-down" /></summary>
                <div className="faq-answer">
                  <p>Pour utiliser notre <strong>service IPTV</strong>, vous avez besoin d&apos;une Smart TV avec une application IPTV, un boîtier Firestick ou tout appareil supportant les <strong>listes IPTV M3U</strong>. Nous fournissons un support complet pour vous aider.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Ai-je besoin d&apos;un VPN pour l&apos;IPTV ? <i className="fas fa-chevron-down" /></summary>
                <div className="faq-answer">
                  <p>Un VPN crypte votre trafic. Bien que non obligatoire, il est recommandé pour sécuriser votre <strong>abonnement IPTV premium</strong> et éviter les bridages par votre FAI.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Puis-je regarder l&apos;IPTV sur mon téléphone ? <i className="fas fa-chevron-down" /></summary>
                <div className="faq-answer">
                  <p>Oui ! Utilisez des <strong>applications IPTV</strong> comme IPTV Smarters Pro sur votre téléphone. Nous fournissons des identifiants compatibles avec les <strong>meilleurs sites IPTV</strong>.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Faut-il une bonne connexion WiFi ? <i className="fas fa-chevron-down" /></summary>
                <div className="faq-answer">
                  <p>Une connexion d&apos;au moins 10 Mbps est recommandée pour la HD, et 16-25 Mbps pour le streaming en Ultra HD 4K stable.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">L&apos;IPTV fonctionne-t-elle sur une vieille TV ? <i className="fas fa-chevron-down" /></summary>
                <div className="faq-answer">
                  <p>Vous pouvez recevoir l&apos;IPTV sur des téléviseurs plus anciens via un décodeur externe (ex: Box Android, Fire TV Stick). Celui-ci décode le signal numérique pour votre écran.</p>
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
              <p className="footer-desc">Service d&apos;abonnement IPTV Premium.</p>
            </div>
            <div className="footer-links">
              <h3>Liens Rapides</h3>
              <ul>
                <li><a href="#hero">Accueil</a></li>
                <li><a href="#pricing">Tarifs</a></li>
                <li><Link href="/fr/guide">Guide d&apos;installation</Link></li>
                <li><Link href="/fr/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Légal</h3>
              <ul>
                <li><Link href="/fr/TermsConditions">Conditions Générales</Link></li>
                <li><Link href="/fr/privacy">Confidentialité</Link></li>
                <li><Link href="/fr/RefundPolicy">Remboursement</Link></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Plex Plus. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/14302485823" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp" />
      </a>
    </>
  );
}
