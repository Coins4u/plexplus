import Image from "next/image";
import Link from "next/link";
import Icon from "../components/Icon";
import PlexPlusUIClient from "../components/PlexPlusUIClient";

const HERO_IMAGE = "/img/heroimg.png";
const GRID_SIZES =
  "(max-width: 900px) 50vw, (max-width: 1200px) 25vw, 280px";
const POSTER_SIZES =
  "(max-width: 700px) 50vw, (max-width: 1200px) 25vw, 240px";
const PAYMENT_SIZES = "(max-width: 768px) 70vw, 320px";

export default function NlHomePage() {
  return (
    <>
      <PlexPlusUIClient />
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <a href="#hero" className="logo">
              <Image
                src="/img/logo.png"
                alt="Plex Plus Logo"
                width={160}
                height={40}
                sizes="160px"
                priority
              />
            </a>
            <div className="mobile-toggle">
              <Icon name="bars" className="icon icon-bars" />
              <Icon name="times" className="icon icon-times" />
            </div>
            <nav className="nav-links">
              <a href="#hero" className="nav-link">Home</a>
              <a href="#sports" className="nav-link">Sport</a>
              <a href="#movies" className="nav-link">Films</a>
              <a href="#pricing" className="nav-link">Prijzen</a>
              <Link href="/nl/guide" className="nav-link">Installatie Gids</Link>
              <Link href="/nl/contact" className="nav-link">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main role="main">
        <section id="hero" className="hero">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="hero-bg-image"
          />
          <div className="container hero-content">
            <h1 className="hero-title">Beste <span>IPTV Kopen</span> | Nederlandse IPTV Abonnement</h1>
            <p className="hero-subtitle">
              Ontdek de <strong>beste IPTV service in Nederland</strong>. Geniet van meer dan 47.000 live kanalen, 180.000
              films en series in 4K/UHD kwaliteit. Wij bieden <strong>Nederlandse IPTV</strong> met <strong>M3U
                lijsten</strong> en volledige ondersteuning. Op zoek naar <strong>legale IPTV aanbieders</strong>? Plex Plus
              is de juiste keuze met premium kwaliteit en alle sportzenders.
            </p>
            <ul className="hero-features">
              <li><Icon name="check-circle" className="icon" /> 4K/UHD IPTV Kwaliteit</li>
              <li><Icon name="check-circle" className="icon" /> NL &amp; Internationale Zenders</li>
              <li><Icon name="check-circle" className="icon" /> Niet-Goed-Geld-Terug Garantie</li>
            </ul>
            <div className="hero-buttons">
              <a href="#pricing" className="btn btn-primary">Start Nu</a>
              <a href="#features" className="btn btn-outline">Meer Info</a>
            </div>
          </div>
        </section>

        <section id="sports" className="grid-section">
          <div className="container">
            <h2 className="section-title">Live Sport Kijken | Nederlandse IPTV</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Mis geen enkel moment van je favoriete sporten. Kijk naar de Eredivisie, Champions League, Formule 1 en MotoGP
              in HD en 4K kwaliteit. Wij bieden stabiele streams met <strong>M3U lijsten</strong> voor maximale
              compatibiliteit. De <strong>beste IPTV voor Nederland</strong> voor sportfans.
            </p>
            <div className="bento-grid">
              <div className="grid-item">
                <Image
                  src="/img/sports/football.png"
                  alt="Voetbal"
                  fill
                  sizes={GRID_SIZES}
                />
                <div className="grid-item-content"><h3 className="grid-item-title">Voetbal</h3></div>
              </div>
              <div className="grid-item">
                <Image
                  src="/img/sports/mma.png"
                  alt="MMA"
                  fill
                  sizes={GRID_SIZES}
                />
                <div className="grid-item-content"><h3 className="grid-item-title">MMA</h3></div>
              </div>
              <div className="grid-item">
                <Image
                  src="/img/sports/basketball.png"
                  alt="Basketbal"
                  fill
                  sizes={GRID_SIZES}
                />
                <div className="grid-item-content"><h3 className="grid-item-title">Basketbal</h3></div>
              </div>
              <div className="grid-item">
                <Image
                  src="/img/sports/motosports.png"
                  alt="Motorsport"
                  fill
                  sizes={GRID_SIZES}
                />
                <div className="grid-item-content"><h3 className="grid-item-title">Motorsport</h3></div>
              </div>
              <div className="grid-item">
                <Image
                  src="/img/sports/tennis.png"
                  alt="Tennis"
                  fill
                  sizes={GRID_SIZES}
                />
                <div className="grid-item-content"><h3 className="grid-item-title">Tennis</h3></div>
              </div>
              <div className="grid-item">
                <Image
                  src="/img/sports/equestrian.png"
                  alt="Paardensport"
                  fill
                  sizes={GRID_SIZES}
                />
                <div className="grid-item-content"><h3 className="grid-item-title">Paardensport</h3></div>
              </div>
              <div className="grid-item">
                <Image
                  src="/img/sports/rugby.png"
                  alt="Rugby"
                  fill
                  sizes={GRID_SIZES}
                />
                <div className="grid-item-content"><h3 className="grid-item-title">Rugby</h3></div>
              </div>
              <div className="grid-item">
                <Image
                  src="/img/sports/omnisports-ar.png"
                  alt="Alle Sporten"
                  fill
                  sizes={GRID_SIZES}
                />
                <div className="grid-item-content"><h3 className="grid-item-title">Alle Sporten</h3></div>
              </div>
            </div>
          </div>
        </section>

        <section id="movies" className="grid-section">
          <div className="container">
            <h2 className="section-title">Films en Series | IPTV Abonnement</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Duik in een eindeloze bibliotheek van entertainment. Bekijk de nieuwste blockbusters, populaire series en
              bekroonde documentaires in 4K kwaliteit. Onze <strong>IPTV service</strong> biedt meer dan 180.000 titels,
              dagelijks geüpdatet met <strong>M3U lijsten</strong>.
            </p>
            <section className="cinema" aria-label="Cinema Kanalen">
              <div data-binder="true" />
              <div className="ImageWall_Ef3d78 imageWallFocus">
                <div className="ImageWall__grid_Ef3d78">
                  <div className="ImageWall__grid__item_Ef3d78 ratio--169 ImageWall__grid__item_Ratio1691_Ef3d78">
                    <div className="ImageWall__grid__item__contentWrap_Ef3d78" tabIndex={0} role="link">
                      <a className="ImageWall__grid__item__contentWrap__linker_Ef3d78" aria-disabled="false">
                        <div className="ImageWallContent_34d1ae">
                          <div data-e2e="poster" className="poster_684939">
                            <div className="poster-media">
                              <Image
                                src="/img/films/les-4-fantastiques-premiers-pas-film-mcu-banniere.webp"
                                alt="Nieuwste Films 4K"
                                fill
                                sizes={POSTER_SIZES}
                                className="ImageType_149741 cover poster__cover_684939"
                              />
                            </div>
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
                            <div className="poster-media">
                              <Image
                                src="/img/films/maxresdefault.webp"
                                alt="Actiefilms Streaming"
                                fill
                                sizes={POSTER_SIZES}
                                className="ImageType_149741 cover poster__cover_684939"
                              />
                            </div>
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
                            <div className="poster-media">
                              <Image
                                src="/img/films/sinners.webp"
                                alt="Meest Bekeken Films"
                                fill
                                sizes={POSTER_SIZES}
                                className="ImageType_149741 cover poster__cover_684939"
                              />
                            </div>
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
                            <div className="poster-media">
                              <Image
                                src="/img/films/fe5c2ef3-1c8a-4c9e-b722-b036f018856c.webp"
                                alt="Populaire Films 2025"
                                fill
                                sizes={POSTER_SIZES}
                                className="ImageType_149741 cover poster__cover_684939"
                              />
                            </div>
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
                            <div className="poster-media">
                              <Image
                                src="/img/films/eszlm4m030kf1.webp"
                                alt="Familiefilms"
                                fill
                                sizes={POSTER_SIZES}
                                className="ImageType_149741 cover poster__cover_684939"
                              />
                            </div>
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
                            <div className="poster-media">
                              <Image
                                src="/img/films/Screenshot 2025-12-20 at 12.37.26.webp"
                                alt="Thriller Films Streaming"
                                fill
                                sizes={POSTER_SIZES}
                                className="ImageType_149741 cover poster__cover_684939"
                              />
                            </div>
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
                            <div className="poster-media">
                              <Image
                                src="/img/films/Screenshot 2025-12-20 at 12.38.08.webp"
                                alt="Exclusieve Films"
                                fill
                                sizes={POSTER_SIZES}
                                className="ImageType_149741 cover poster__cover_684939"
                              />
                            </div>
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
                            <div className="poster-media">
                              <Image
                                src="/img/films/Screenshot 2025-12-20 at 12.39.35.webp"
                                alt="Blockbuster Streaming"
                                fill
                                sizes={POSTER_SIZES}
                                className="ImageType_149741 cover poster__cover_684939"
                              />
                            </div>
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
            <h2 className="section-title">Hoe Werkt Het</h2>
            <div className="howto-grid">
              <div className="howto-card">
                <div className="howto-number"><Icon name="clipboard-check" className="icon" /></div>
                <h3 className="howto-title">1. Kies je Abonnement</h3>
                <p className="howto-desc">
                  Bekijk onze flexibele opties en kies het pakket dat bij je past. Wij bieden <strong>IPTV abonnement Nederland legaal</strong> opties van 1, 3, 6 en 12 maanden voor zowel Standard als Premium servers.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number"><Icon name="credit-card" className="icon" /></div>
                <h3 className="howto-title">2. Veilige Betaling</h3>
                <p className="howto-desc">
                  Rond je bestelling veilig af via onze gecodeerde betaal gateway. We accepteren alle grote creditcards en veilige betaalmethoden.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number"><Icon name="tv" className="icon" /></div>
                <h3 className="howto-title">3. Directe Activering</h3>
                <p className="howto-desc">
                  Ontvang je inloggegevens via e-mail binnen enkele minuten. Vraag je je af <strong>hoe werkt IPTV</strong>? Volg onze simpele gids voor Smart TV, Firestick, Android, iOS en begin direct met kijken.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container">
            <h2 className="section-title">IPTV Kopen | Goedkope IPTV Aanbiedingen</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 30px", color: "var(--text-gray)" }}>
              Kies het perfecte pakket voor jou. Wij bieden de <strong>beste IPTV in Nederland</strong> met betaalbare prijzen en premium kwaliteit. Ontvang <strong>M3U lijsten</strong>, volledige ondersteuning en toegang tot alle kanalen. Op zoek naar <strong>legale IPTV aanbieders</strong>? Kies voor de kwaliteit van Plex Plus.
            </p>
            <div className="pricing-alert">
              <p><strong>Veilige &amp; Snelle Levering:</strong> Na aankoop ontvangt u uw IPTV-abonnementgegevens (Gebruikersnaam, Wachtwoord, URL) binnen 1-3 uur per e-mail. SSL-beveiligde betaling.</p>
              <div className="payment-notice">
                <strong>Betalingsbericht:</strong>
                <p>Vermeld geen IPTV of gerelateerde termen in PayPal-berichten, notities of geschillen.</p>
              </div>
            </div>
            <div className="pricing-toggle-container">
              <span className="toggle-label active" data-plan="standard">Standard Server</span>
              <div className="toggle-switch" />
              <span className="toggle-label" data-plan="premium">Premium Server</span>
            </div>
            <div id="standard-plans" className="pricing-container active">
              {[
                ["1 Maand", "€14.59", "/Maand"],
                ["3 Maanden", "€24.56", "/3 Maanden", true, "Beste Waarde"],
                ["6 Maanden", "€34.78", "/6 Maanden"],
                ["12 Maanden", "€49.99", "/Jaar"],
              ].map(([name, price, suffix, popular, badge]) => (
                <div key={name as string} className={`pricing-card ${popular ? "popular" : ""}`}>
                  {badge && <div className="popular-badge">{badge}</div>}
                  <h3 className="plan-name">{name}</h3>
                  <div className="plan-price">{price}<span>{suffix}</span></div>
                  <ul className="pricing-features">
                    <li><Icon name="check" className="icon" /> <strong>20K+ HD Zenders</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>120K+ Films &amp; Series</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>Betrouwbare Prestaties</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>Alle Apparaten Ondersteund</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>24/7 Chat Ondersteuning</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>Volwassenen Content (Optioneel)</strong></li>
                  </ul>
                  <a href="#" className={popular ? "btn btn-primary" : "btn btn-outline"}>Bestel Nu</a>
                  <Image
                    src="/img/payments.png"
                    alt="Geaccepteerde Betaalmethoden"
                    width={500}
                    height={60}
                    sizes={PAYMENT_SIZES}
                    className="payment-methods-img"
                  />
                </div>
              ))}
            </div>
            <div id="premium-plans" className="pricing-container">
              {[
                ["1 Maand Premium", "€25.86", "/Maand"],
                ["3 Maanden Premium", "€36.45", "/3 Maanden", true, "Top Keuze"],
                ["6 Maanden Premium", "€45.28", "/6 Maanden"],
                ["12 Maanden Premium", "€67.98", "/Jaar"],
              ].map(([name, price, suffix, popular, badge]) => (
                <div key={name as string} className={`pricing-card ${popular ? "popular" : ""}`}>
                  {badge && <div className="popular-badge">{badge}</div>}
                  <h3 className="plan-name">{name}</h3>
                  <div className="plan-price">{price}<span>{suffix}</span></div>
                  <ul className="pricing-features">
                    <li><Icon name="check" className="icon" /> <strong>Premium Anti-Freeze Server</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>47K+ 4K/UHD Zenders</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>180K+ Films &amp; Series</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>Prioriteit Bij Sportevenementen</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>Wereldwijde Dekking (NL/EU/US)</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>Volwassenen Content (Optioneel)</strong></li>
                  </ul>
                  <a href="#" className={popular ? "btn btn-primary" : "btn btn-outline"}>Bestel Nu</a>
                  <Image
                    src="/img/payments.png"
                    alt="Geaccepteerde Betaalmethoden"
                    width={500}
                    height={60}
                    sizes={PAYMENT_SIZES}
                    className="payment-methods-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="container">
            <h2 className="section-title">Waarom Kiezen Voor Plex Plus?</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Ontdek de ultieme streaming ervaring met geavanceerde anti-freeze technologie. Onze service biedt complete <strong>IPTV lijsten</strong> met <strong>M3U formaat</strong>, compatibel met Smart TV, Firestick en mobiele apparaten. 4K kwaliteit gegarandeerd met een <strong>legale en betrouwbare service</strong> in Nederland.
            </p>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon"><Icon name="tv" className="icon" /></div>
                <div className="feature-content">
                  <h3>47.000+ IPTV Kanalen</h3>
                  <p>Toegang tot een enorme wereldwijde bibliotheek van live kanalen. Inclusief premium <strong>Nederlandse IPTV</strong> kanalen uit NL, VS, VK en Europa in HD &amp; 4K kwaliteit. <strong>IPTV lijst</strong> met alle zenders.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Icon name="film" className="icon" /></div>
                <div className="feature-content">
                  <h3>VOD Bibliotheek</h3>
                  <p>Onbeperkte toegang tot 180.000+ films en series. Compatibel met <strong>M3U lijsten</strong> en alle <strong>IPTV apps</strong>. Dagelijks geüpdatet met de nieuwste releases.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Icon name="bolt" className="icon" /></div>
                <div className="feature-content">
                  <h3>Betrouwbare IPTV Server</h3>
                  <p>Geniet van ononderbroken streaming met onze premium <strong>IPTV server</strong>. 99,9% uptime garandeert buffer-vrije kwaliteit. De <strong>beste IPTV voor Nederland</strong>.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Icon name="headset" className="icon" /></div>
                <div className="feature-content">
                  <h3>24/7 Ondersteuning</h3>
                  <p>Ons expert support team staat 24/7/365 klaar via chat en e-mail om je te helpen met installatie en activatie op elk apparaat binnen enkele minuten.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Icon name="cogs" className="icon" /></div>
                <div className="feature-content">
                  <h3>IPTV Kastje &amp; Apps</h3>
                  <p>Compatibel met <strong>IPTV kastje</strong>, Smart TV, Firestick, Android Box. Vraag je af <strong>welke IPTV app voor Samsung TV</strong>? Wij ondersteunen alle apparaten met <strong>M3U lijsten</strong>.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Icon name="shield-alt" className="icon" /></div>
                <div className="feature-content">
                  <h3>Veilig &amp; Privé</h3>
                  <p>Jouw privacy is onze prioriteit. We gebruiken geavanceerde encryptie om veilig en anoniem te streamen met een strikt no-log beleid.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="devices" className="devices-section">
          <div className="glow-bg" />
          <div className="container">
            <h2 className="section-title">Ondersteunde Apparaten</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Onze <strong>IPTV-service</strong> werkt op al je favoriete apparaten. Of je nu <strong>IPTV wilt kijken op Firestick</strong>, Smart TV of mobiel, wij helpen je met een eenvoudige installatie en volledige ondersteuning.
            </p>
            <div className="devices-grid">
              <div className="device-card"><Icon name="amazon" className="icon" /><h3>Firestick / Fire TV</h3></div>
              <div className="device-card"><Icon name="tv" className="icon" /><h3>Smart TV (LG/Samsung)</h3></div>
              <div className="device-card"><Icon name="android" className="icon" /><h3>Android-apparaten</h3></div>
              <div className="device-card"><Icon name="apple" className="icon" /><h3>iOS / Apple TV</h3></div>
              <div className="device-card"><Icon name="laptop" className="icon" /><h3>PC / Windows / Mac</h3></div>
              <div className="device-card"><Icon name="box" className="icon" /><h3>MAG / Enigma2</h3></div>
            </div>
          </div>
        </section>

        <section id="reviews" className="reviews-section">
          <div className="container">
            <h2 className="section-title">Klantbeoordelingen</h2>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="stars"><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star" className="icon" /></div>
                <p className="review-text">&quot;Zeker weten het <strong>beste IPTV voor Nederland</strong> in 2025. Geen haperingen tijdens voetbalwedstrijden en de beeldkwaliteit is fantastisch. Ik raad dit <strong>IPTV abonnement Nederland legaal</strong> zeker aan.&quot;</p>
                <p className="review-author">- Mark V.</p>
              </div>
              <div className="review-card">
                <div className="stars"><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star-half" className="icon" /></div>
                <p className="review-text">&quot;Geweldige selectie van films en series. Mijn gezin is dol op de kwaliteit van de <strong>gratis iptv m3u-lijsten</strong> variëteit. Ik zocht naar een goed alternatief en vond Plex Plus, top!&quot;</p>
                <p className="review-author">- Sophie D.</p>
              </div>
              <div className="review-card">
                <div className="stars"><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star" className="icon" /></div>
                <p className="review-text">&quot;De support heeft me goed geholpen met het instellen van mijn TV. Alles werkt perfect. Dit is precies <strong>wat is de beste IPTV voor Nederland</strong> als je kwaliteit zoekt.&quot;</p>
                <p className="review-author">- Thomas B.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section">
          <div className="container">
            <h2 className="section-title">Veelgestelde Vragen over IPTV</h2>
            <div className="faq-grid">
              <details className="faq-item">
                <summary className="faq-question">Wat heb ik nodig voor IPTV? <Icon name="chevron-down" className="icon" /></summary>
                <div className="faq-answer">
                  <p>Voor onze <strong>IPTV service</strong> heb je nodig: Smart TV met IPTV app, <strong>IPTV kastje</strong>, Firestick, of elk apparaat dat <strong>M3U lijsten</strong> ondersteunt. Vraag je af <strong>welke IPTV app voor Samsung TV</strong>? Wij bieden volledige ondersteuning. Internet van 15-25 Mbps aanbevolen.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Heb ik een VPN nodig voor IPTV? <Icon name="chevron-down" className="icon" /></summary>
                <div className="faq-answer">
                  <p>Een VPN versleutelt je internetverkeer en beschermt je privacy. Het gebruik wordt aanbevolen voor extra veiligheid bij <strong>IPTV kopen</strong>. Kies altijd voor <strong>legale IPTV aanbieders</strong> zoals Plex Plus voor een veilige ervaring.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Kan ik IPTV op mijn telefoon kijken? <Icon name="chevron-down" className="icon" /></summary>
                <div className="faq-answer">
                  <p>Ja! Gebruik <strong>IPTV apps</strong> zoals IPTV Smarters Pro op je telefoon. Wij bieden <strong>M3U lijsten</strong> en inloggegevens voor streaming overal. Vraag je <strong>wat is de beste IPTV app</strong>? Wij ondersteunen alle populaire apps.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Hoe werkt IPTV met WiFi? <Icon name="chevron-down" className="icon" /></summary>
                <div className="faq-answer">
                  <p>Een verbinding van ten minste 10 Mbps wordt aanbevolen voor HD, en 16-25 Mbps voor stabiele Ultra HD 4K streaming.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Werkt IPTV op een oude TV? <Icon name="chevron-down" className="icon" /></summary>
                <div className="faq-answer">
                  <p>Je kunt IPTV ontvangen op oudere televisies via een externe decoder (bijv. Android Box, Fire TV Stick). Deze decodeert het digitale signaal voor je scherm.</p>
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
              <a href="#hero" className="footer-logo">
                <Image
                  src="/img/logo.png"
                  alt="Plex Plus Logo"
                  width={160}
                  height={50}
                  sizes="160px"
                />
              </a>
              <p className="footer-desc">Premium IPTV Abonnement Service.</p>
            </div>
            <div className="footer-links">
              <h3>Snelle Links</h3>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#pricing">Prijzen</a></li>
                <li><Link href="/nl/guide">Installatie Gids</Link></li>
                <li><Link href="/nl/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Legale Info</h3>
              <ul>
                <li><Link href="/nl/TermsConditions">Algemene Voorwaarden</Link></li>
                <li><Link href="/nl/privacy">Privacybeleid</Link></li>
                <li><Link href="/nl/RefundPolicy">Restitutiebeleid</Link></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Plex Plus. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/14302485823"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Plex Plus on WhatsApp"
      >
        <Icon name="whatsapp" className="icon" />
      </a>
    </>
  );
}
