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

const MOVIES_GRID = (
  <section className="cinema" aria-label="Canali Cinema">
    <div data-binder="true" />
    <div className="ImageWall_Ef3d78 imageWallFocus">
      <div className="ImageWall__grid_Ef3d78">
        {[
          ["/img/films/les-4-fantastiques-premiers-pas-film-mcu-banniere.webp", "Ultime Uscite Film 4K"],
          ["/img/films/maxresdefault.webp", "Film Azione Streaming"],
          ["/img/films/sinners.webp", "Film Più Visti"],
          ["/img/films/fe5c2ef3-1c8a-4c9e-b722-b036f018856c.webp", "Film Popolari 2025"],
        ].map(([src, alt], i) => (
          <div key={i} className={`ImageWall__grid__item_Ef3d78 ratio--169 ImageWall__grid__item_Ratio169${i + 1}_Ef3d78`}>
            <div className="ImageWall__grid__item__contentWrap_Ef3d78" tabIndex={0} role="link">
              <a className="ImageWall__grid__item__contentWrap__linker_Ef3d78" aria-disabled="false">
                <div className="ImageWallContent_34d1ae">
                  <div data-e2e="poster" className="poster_684939">
                    <div className="poster-media">
                      <Image
                        src={src}
                        alt={alt}
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
        ))}
        {[
          ["/img/films/eszlm4m030kf1.webp", "Film per Famiglie"],
          ["/img/films/Screenshot 2025-12-20 at 12.37.26.webp", "Film Thriller Streaming"],
          ["/img/films/Screenshot 2025-12-20 at 12.38.08.webp", "Anteprime Esclusive Film"],
          ["/img/films/Screenshot 2025-12-20 at 12.39.35.webp", "Blockbuster Streaming"],
        ].map(([src, alt], i) => (
          <div key={i} className={`ImageWall__grid__item_Ef3d78 ratio--34 ImageWall__grid__item_Ratio34${i + 1}_Ef3d78`}>
            <div className="ImageWall__grid__item__contentWrap_Ef3d78" tabIndex={0} role="link">
              <a className="ImageWall__grid__item__contentWrap__linker_Ef3d78" aria-disabled="false">
                <div className="ImageWallContent_34d1ae">
                  <div data-e2e="poster" className="poster_684939">
                    <div className="poster-media">
                      <Image
                        src={src}
                        alt={alt}
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
        ))}
      </div>
    </div>
  </section>
);

export default function ItHomePage() {
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
              <a href="#movies" className="nav-link">Film</a>
              <a href="#pricing" className="nav-link">Prezzi</a>
              <Link href="/it/guide" className="nav-link">Guida Installazione</Link>
              <Link href="/it/contact" className="nav-link">Contatti</Link>
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
            <h1 className="hero-title">Miglior <span>IPTV Italia</span> | IPTV Italiano Premium</h1>
            <p className="hero-subtitle">
              Scopri il <strong>miglior servizio IPTV in Italia</strong>. Goditi oltre 47.000 canali live, 180.000 film e
              serie in qualità 4K/UHD. Offriamo <strong>lista canali IPTV italiani</strong>, <strong>liste M3U
                funzionanti</strong> e supporto completo. Cerchi <strong>IPTV legale</strong>? Plex Plus è la scelta giusta
              con qualità premium e tutti i canali sportivi.
            </p>
            <ul className="hero-features">
              <li><Icon name="check-circle" className="icon" /> Qualità IPTV 4K/UHD</li>
              <li><Icon name="check-circle" className="icon" /> Canali Italia &amp; Internazionali</li>
              <li><Icon name="check-circle" className="icon" /> Garanzia Soddisfatti o Rimborsati</li>
            </ul>
            <div className="hero-buttons">
              <a href="#pricing" className="btn btn-primary">Inizia Ora</a>
              <a href="#features" className="btn btn-outline">Scopri di Più</a>
            </div>
          </div>
        </section>

        <section id="sports" className="grid-section">
          <div className="container">
            <h2 className="section-title">Sport in Diretta | Canali IPTV Italiani</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Non perdere nessun momento dei tuoi sport preferiti. Guarda Serie A, Champions League, Formula 1 e MotoGP in
              diretta con la nostra <strong>lista canali IPTV Italia</strong>. Offriamo streaming stabile in HD e 4K con
              <strong>liste M3U funzionanti</strong>. Il <strong>miglior IPTV</strong> per lo sport.
            </p>
            <div className="bento-grid">
              {["Calcio", "MMA", "Basket", "Motori", "Tennis", "Equitazione", "Rugby", "Tutti gli Sport"].map((title, i) => (
                <div key={i} className="grid-item">
                  <Image
                    src={`/img/sports/${["football", "mma", "basketball", "motosports", "tennis", "equestrian", "rugby", "omnisports-ar"][i]}.png`}
                    alt={title}
                    fill
                    sizes={GRID_SIZES}
                  />
                  <div className="grid-item-content"><h3 className="grid-item-title">{title}</h3></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="movies" className="grid-section">
          <div className="container">
            <h2 className="section-title">Film e Serie TV | IPTV Italia</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Immergiti in una libreria infinita di intrattenimento. Guarda gli ultimi blockbuster, serie TV e documentari
              in qualità 4K. Il nostro <strong>servizio IPTV</strong> offre oltre 180.000 titoli con <strong>liste
                M3U</strong> aggiornate quotidianamente.
            </p>
            {MOVIES_GRID}
          </div>
        </section>

        <section id="howto" className="howto-section">
          <div className="container">
            <h2 className="section-title">Come Funziona</h2>
            <div className="howto-grid">
              <div className="howto-card">
                <div className="howto-number"><Icon name="clipboard-check" className="icon" /></div>
                <h3 className="howto-title">1. Scegli il tuo abbonamento</h3>
                <p className="howto-desc">Esplora le nostre opzioni flessibili e scegli il pacchetto più adatto a te. Offriamo <strong>abbonamenti iptv</strong> di 1, 3, 6 e 12 mesi per server Standard e Premium.</p>
              </div>
              <div className="howto-card">
                <div className="howto-number"><Icon name="credit-card" className="icon" /></div>
                <h3 className="howto-title">2. Pagamento Sicuro</h3>
                <p className="howto-desc">Completa il tuo ordine in sicurezza tramite il nostro gateway di pagamento criptato. Accettiamo le principali carte di credito e metodi di pagamento sicuri.</p>
              </div>
              <div className="howto-card">
                <div className="howto-number"><Icon name="tv" className="icon" /></div>
                <h3 className="howto-title">3. Attivazione Immediata</h3>
                <p className="howto-desc">Ricevi i tuoi <strong>dati di accesso IPTV</strong> via email in pochi minuti. Segui la nostra guida semplice per Smart TV, Firestick, Android, iOS e inizia subito lo <strong>streaming IPTV</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container">
            <h2 className="section-title">Abbonamenti IPTV | Miglior IPTV Italia</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 30px", color: "var(--text-gray)" }}>
              Scegli il pacchetto perfetto per te. Offriamo il <strong>miglior IPTV in Italia</strong> con prezzi accessibili e qualità premium. Ricevi <strong>liste M3U</strong>, supporto completo e accesso a tutti i canali. Cerchi <strong>IPTV legale</strong>? Scegli la qualità di Plex Plus.
            </p>
            <div className="pricing-alert">
              <p><strong>Consegna Sicura &amp; Veloce:</strong> Dopo l&apos;acquisto, riceverai i dettagli del tuo abbonamento IPTV (Nome utente, Password, URL) via email entro 1-3 ore. Elaborazione pagamenti sicura SSL.</p>
              <div className="payment-notice">
                <strong>Avviso di Pagamento:</strong>
                <p>Non menzionare IPTV o termini correlati in nessun messaggio, nota o contestazione PayPal.</p>
              </div>
            </div>
            <div className="pricing-toggle-container">
              <span className="toggle-label active" data-plan="standard">Server Standard</span>
              <div className="toggle-switch" />
              <span className="toggle-label" data-plan="premium">Server Premium</span>
            </div>
            <div id="standard-plans" className="pricing-container active">
              {[
                ["1 Mese", "€14.59", "/Mese"],
                ["3 Mesi", "€24.56", "/3 Mesi", true, "Miglior Valore"],
                ["6 Mesi", "€34.78", "/6 Mesi"],
                ["12 Mesi", "€49.99", "/Anno"],
              ].map(([name, price, suffix, popular, badge]) => (
                <div key={name as string} className={`pricing-card ${popular ? "popular" : ""}`}>
                  {badge && <div className="popular-badge">{badge}</div>}
                  <h3 className="plan-name">{name}</h3>
                  <div className="plan-price">{price}<span>{suffix}</span></div>
                  <ul className="pricing-features">
                    <li><Icon name="check" className="icon" /> <strong>20K+ Canali HD</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>120K+ Film &amp; Serie</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>Prestazioni Affidabili</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>Tutti i dispositivi supportati</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>Assistenza Chat 24/7</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>Contenuti Adulti (Opzionale)</strong></li>
                  </ul>
                  <a href="#" className={popular ? "btn btn-primary" : "btn btn-outline"}>Ordina Ora</a>
                  <Image
                    src="/img/payments.png"
                    alt="Metodi di Pagamento Accettati"
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
                ["1 Mese Premium", "€25.86", "/Mese"],
                ["3 Mesi Premium", "€36.45", "/3 Mesi", true, "Top Scelta"],
                ["6 Mesi Premium", "€45.28", "/6 Mesi"],
                ["12 Mesi Premium", "€67.98", "/Anno"],
              ].map(([name, price, suffix, popular, badge]) => (
                <div key={name as string} className={`pricing-card ${popular ? "popular" : ""}`}>
                  {badge && <div className="popular-badge">{badge}</div>}
                  <h3 className="plan-name">{name}</h3>
                  <div className="plan-price">{price}<span>{suffix}</span></div>
                  <ul className="pricing-features">
                    <li><Icon name="check" className="icon" /> <strong>Server Premium Anti-Blocco</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>47K+ Canali 4K/UHD</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>180K+ Film &amp; Serie</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>Priorità Eventi Sportivi</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>Copertura Globale (EU/US/UK)</strong></li>
                    <li><Icon name="check" className="icon" /> <strong>Contenuti Adulti (Opzionale)</strong></li>
                  </ul>
                  <a href="#" className={popular ? "btn btn-primary" : "btn btn-outline"}>Ordina Ora</a>
                  <Image
                    src="/img/payments.png"
                    alt="Metodi di Pagamento Accettati"
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
            <h2 className="section-title">Perché scegliere Plex Plus?</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Scopri l&apos;esperienza di streaming definitiva con tecnologia anti-blocco avanzata. Il nostro servizio offre <strong>liste IPTV complete</strong> con formato <strong>M3U</strong>, compatibile con Smart TV, Firestick e dispositivi mobili. Qualità 4K garantita con <strong>servizio legale e affidabile</strong> in Italia.
            </p>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon"><Icon name="tv" className="icon" /></div>
                <div className="feature-content">
                  <h3>47.000+ Canali IPTV</h3>
                  <p>Accesso a un&apos;immensa libreria di canali live. Include <strong>canali italiani IPTV</strong> premium da IT, USA, UK ed Europa in qualità HD &amp; 4K. <strong>Lista canali IPTV Italia</strong> completa.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Icon name="film" className="icon" /></div>
                <div className="feature-content">
                  <h3>Libreria VOD</h3>
                  <p>Accesso illimitato a 180.000+ film e serie. Compatibile con <strong>liste M3U</strong> e tutte le <strong>app IPTV</strong>. Aggiornato quotidianamente con le ultime uscite.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Icon name="bolt" className="icon" /></div>
                <div className="feature-content">
                  <h3>Server IPTV Affidabile</h3>
                  <p>Goditi streaming ininterrotto con il nostro <strong>server IPTV</strong> premium. 99,9% uptime garantisce qualità senza buffer. Il <strong>miglior IPTV per Italia</strong>.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Icon name="headset" className="icon" /></div>
                <div className="feature-content">
                  <h3>Supporto 24/7</h3>
                  <p>Il nostro supporto esperto è disponibile 24/7/365 via chat e email per aiutarti con l&apos;installazione e l&apos;attivazione su qualsiasi dispositivo in pochi minuti.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Icon name="cogs" className="icon" /></div>
                <div className="feature-content">
                  <h3>IPTV per Fire Stick &amp; Apps</h3>
                  <p>Compatibile con <strong>IPTV per Fire Stick</strong>, Smart TV, Box Android. Il nostro servizio supporta tutti i dispositivi con <strong>liste M3U</strong> e app IPTV.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Icon name="shield-alt" className="icon" /></div>
                <div className="feature-content">
                  <h3>Sicuro &amp; Privato</h3>
                  <p>La tua privacy è la nostra priorità. Utilizziamo una crittografia avanzata per garantire uno streaming sicuro e anonimo con una politica rigorosa di no-log.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="devices" className="devices-section">
          <div className="glow-bg" />
          <div className="container">
            <h2 className="section-title">Dispositivi Supportati</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Il nostro <strong>servizio IPTV</strong> funziona su tutti i tuoi dispositivi preferiti. Sia che tu voglia guardare l&apos;<strong>IPTV su Firestick</strong>, Smart TV o mobile, ti offriamo un&apos;installazione facile e un supporto completo.
            </p>
            <div className="devices-grid">
              <div className="device-card"><Icon name="amazon" className="icon" /><h3>Firestick / Fire TV</h3></div>
              <div className="device-card"><Icon name="tv" className="icon" /><h3>Smart TV (LG/Samsung)</h3></div>
              <div className="device-card"><Icon name="android" className="icon" /><h3>Dispositivi Android</h3></div>
              <div className="device-card"><Icon name="apple" className="icon" /><h3>iOS / Apple TV</h3></div>
              <div className="device-card"><Icon name="laptop" className="icon" /><h3>PC / Windows / Mac</h3></div>
              <div className="device-card"><Icon name="box" className="icon" /><h3>MAG / Enigma2</h3></div>
            </div>
          </div>
        </section>

        <section id="reviews" className="reviews-section">
          <div className="container">
            <h2 className="section-title">Recensioni Clienti</h2>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="stars"><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star" className="icon" /></div>
                <p className="review-text">&quot;Il <strong>migliore iptv</strong> del 2025, senza dubbio. Nessun blocco durante le partite e la qualità dell&apos;immagine è incredibile. Consiglio vivamente questo <strong>servizio iptv</strong>.&quot;</p>
                <p className="review-author">- Marco R.</p>
              </div>
              <div className="review-card">
                <div className="stars"><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star-half" className="icon" /></div>
                <p className="review-text">&quot;Fantastica selezione di film e serie. La mia famiglia adora la qualità dei <strong>canali in chiaro</strong>. Ho cercato <strong>albkanale iptv</strong> e ho trovato Plex Plus, top!&quot;</p>
                <p className="review-author">- Giulia B.</p>
              </div>
              <div className="review-card">
                <div className="stars"><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star" className="icon" /><Icon name="star" className="icon" /></div>
                <p className="review-text">&quot;Il supporto è stato utilissimo per configurare la mia TV. Tutto funziona perfettamente. Sicuramente tra le migliori <strong>liste iptv funzionanti</strong> che abbia mai provato.&quot;</p>
                <p className="review-author">- Luca S.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section">
          <div className="container">
            <h2 className="section-title">Domande Frequenti IPTV Italia</h2>
            <div className="faq-grid">
              <details className="faq-item">
                <summary className="faq-question">Di cosa ho bisogno per l&apos;IPTV? <Icon name="chevron-down" className="icon" /></summary>
                <div className="faq-answer">
                  <p>Per il nostro <strong>servizio IPTV</strong> serve: Smart TV con app IPTV, Fire Stick, o qualsiasi dispositivo che supporta <strong>liste M3U</strong>. Forniamo <strong>lista canali IPTV italiani</strong> compatibile con tutti i dispositivi. Internet 15-25 Mbps raccomandato.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Ho bisogno di una VPN per l&apos;IPTV? <Icon name="chevron-down" className="icon" /></summary>
                <div className="faq-answer">
                  <p>Una VPN cripta il traffico e protegge la privacy. L&apos;uso è raccomandato per sicurezza extra con <strong>abbonamenti IPTV</strong>. Scegli sempre <strong>IPTV legale</strong> come Plex Plus per un&apos;esperienza sicura.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Posso guardare l&apos;IPTV sul mio telefono? <Icon name="chevron-down" className="icon" /></summary>
                <div className="faq-answer">
                  <p>Sì! Usa <strong>app IPTV</strong> come IPTV Smarters Pro sul telefono. Forniamo <strong>liste M3U</strong> e credenziali per streaming ovunque. Il nostro <strong>servizio IPTV</strong> funziona perfettamente su iOS e Android.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Serve una buona connessione WiFi? <Icon name="chevron-down" className="icon" /></summary>
                <div className="faq-answer">
                  <p>Una connessione di almeno 10 Mbps è raccomandata per l&apos;HD, e 16-25 Mbps per lo streaming in Ultra HD 4K stabile.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">L&apos;IPTV funziona su una vecchia TV? <Icon name="chevron-down" className="icon" /></summary>
                <div className="faq-answer">
                  <p>Puoi ricevere l&apos;IPTV su televisori più vecchi tramite un decoder esterno (es: Box Android, Fire TV Stick). Questo decodifica il segnale digitale per il tuo schermo.</p>
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
              <p className="footer-desc">Servizio di abbonamento IPTV Premium.</p>
            </div>
            <div className="footer-links">
              <h3>Link Rapidi</h3>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#pricing">Prezzi</a></li>
                <li><Link href="/it/guide">Guida Installazione</Link></li>
                <li><Link href="/it/contact">Contatti</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Legale</h3>
              <ul>
                <li><Link href="/it/TermsConditions">Termini e Condizioni</Link></li>
                <li><Link href="/it/privacy">Privacy</Link></li>
                <li><Link href="/it/RefundPolicy">Rimborsi</Link></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Plex Plus. Tutti i diritti riservati.</p>
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
