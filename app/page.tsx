import Image from "next/image";
import Link from "next/link";
import Icon from "./components/Icon";
import PlexPlusUIClient from "./components/PlexPlusUIClient";

const HERO_IMAGE = "/img/heroimg.png";
const GRID_SIZES =
  "(max-width: 900px) 50vw, (max-width: 1200px) 25vw, 280px";
const POSTER_SIZES =
  "(max-width: 700px) 50vw, (max-width: 1200px) 25vw, 240px";
const PAYMENT_SIZES = "(max-width: 768px) 70vw, 320px";

export default function Home() {
  return (
    <>
      <PlexPlusUIClient />
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <a href="#" className="logo">
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
              <a href="#hero" className="nav-link">
                Home
              </a>
              <a href="#sports" className="nav-link">
                Sports
              </a>
              <a href="#movies" className="nav-link">
                Movies
              </a>
              <a href="#pricing" className="nav-link">
                Pricing
              </a>
              <Link href="/guide" className="nav-link">
                installation guide
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
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
            <h1 className="hero-title">
              Experience Premium <span>IPTV Service</span> | The Best IPTV
              Providers
            </h1>
            <p className="hero-subtitle">
              Discover the top-rated <strong>IPTV service</strong> for premium
              entertainment. Stream over 47,000 live channels, 180,000 films and
              series in 4K/UHD quality. We provide a reliable{" "}
              <strong>premium IPTV subscription</strong> with{" "}
              <strong>M3U IPTV playlists</strong> and full support. Looking for
              the <strong>best IPTV providers</strong> for USA and UK? Plex Plus
              offers stable, buffer-free streaming for all your favorite sports
              and shows.
            </p>
            <ul className="hero-features">
              <li>
                <Icon name="check-circle" className="icon" /> 4K/UHD IPTV Quality
              </li>
              <li>
                <Icon name="check-circle" className="icon" /> Premium IPTV
              </li>
              <li>
                <Icon name="check-circle" className="icon" /> Money-Back Guarantee
              </li>
            </ul>
            <div className="hero-buttons">
              <a href="#pricing" className="btn btn-primary">
                Get Started
              </a>
              <a href="#features" className="btn btn-outline">
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section id="sports" className="grid-section">
          <div className="container">
            <h2 className="section-title">
              Live Sports | Premium IPTV Channels
            </h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 40px",
                color: "var(--text-gray)",
              }}
            >
              Watch live sports with our <strong>IPTV service</strong>. Our{" "}
              <strong>IPTV list</strong> includes <strong>USA IPTV</strong> and{" "}
              <strong>UK IPTV sports channels</strong> for Football, Basketball,
              MMA, and Racing. Stream with{" "}
              <strong>IPTV on Firestick</strong>,{" "}
              <strong>IPTV on Kodi</strong>, or any device using our{" "}
              <strong>M3U IPTV playlist</strong>. Get the{" "}
              <strong>best IPTV player for Firestick</strong> experience with
              our reliable <strong>IPTV stream</strong>.
            </p>
            <div className="bento-grid">
              <div className="grid-item">
                <Image
                  src="/img/sports/football.png"
                  alt="football"
                  fill
                  sizes={GRID_SIZES}
                />
                <div className="grid-item-content">
                  <h3 className="grid-item-title">Football</h3>
                </div>
              </div>
              <div className="grid-item">
                <Image
                  src="/img/sports/mma.png"
                  alt="mma"
                  fill
                  sizes={GRID_SIZES}
                />
                <div className="grid-item-content">
                  <h3 className="grid-item-title"> MMA</h3>
                </div>
              </div>
              <div className="grid-item">
                <Image
                  src="/img/sports/basketball.png"
                  alt="basketball"
                  fill
                  sizes={GRID_SIZES}
                />
                <div className="grid-item-content">
                  <h3 className="grid-item-title">Basketball</h3>
                </div>
              </div>
              <div className="grid-item">
                <Image
                  src="/img/sports/motosports.png"
                  alt="motosports"
                  fill
                  sizes={GRID_SIZES}
                />
                <div className="grid-item-content">
                  <h3 className="grid-item-title">Motosports</h3>
                </div>
              </div>
              <div className="grid-item">
                <Image
                  src="/img/sports/tennis.png"
                  alt="tennis"
                  fill
                  sizes={GRID_SIZES}
                />
                <div className="grid-item-content">
                  <h3 className="grid-item-title">Tennis</h3>
                </div>
              </div>
              <div className="grid-item">
                <Image
                  src="/img/sports/equestrian.png"
                  alt="equestrian"
                  fill
                  sizes={GRID_SIZES}
                />
                <div className="grid-item-content">
                  <h3 className="grid-item-title">Equestrian</h3>
                </div>
              </div>
              <div className="grid-item">
                <Image
                  src="/img/sports/rugby.png"
                  alt="rugby"
                  fill
                  sizes={GRID_SIZES}
                />
                <div className="grid-item-content">
                  <h3 className="grid-item-title">Rugby</h3>
                </div>
              </div>
              <div className="grid-item">
                <Image
                  src="/img/sports/omnisports-ar.png"
                  alt="all sports"
                  fill
                  sizes={GRID_SIZES}
                />
                <div className="grid-item-content">
                  <h3 className="grid-item-title">All Sports</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="movies" className="grid-section">
          <div className="container">
            <h2 className="section-title">
              Movies &amp; Series | IPTV VOD Library
            </h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 40px",
                color: "var(--text-gray)",
              }}
            >
              Enjoy unlimited <strong>IPTV VOD</strong> and{" "}
              <strong>4K IPTV streaming</strong> with our{" "}
              <strong>reliable IPTV provider</strong> network. Access 180,000+
              movies via <strong>Xtream IPTV</strong> or{" "}
              <strong>M3U IPTV playlist</strong> with full{" "}
              <strong>IPTV EPG</strong> support. The{" "}
              <strong>best IPTV service</strong> for{" "}
              <strong>IPTV on Firestick</strong> and{" "}
              <strong>Smart IPTV</strong> users.
            </p>
            <section className="cinema" aria-label="Movie Channels">
              <div data-binder="true" />
              <div className="ImageWall_Ef3d78 imageWallFocus">
                <div className="ImageWall__grid_Ef3d78">
                  <div className="ImageWall__grid__item_Ef3d78 ratio--169 ImageWall__grid__item_Ratio1691_Ef3d78">
                    <div
                      className="ImageWall__grid__item__contentWrap_Ef3d78"
                      tabIndex={0}
                      role="link"
                    >
                      <a
                        className="ImageWall__grid__item__contentWrap__linker_Ef3d78"
                        aria-disabled="false"
                      >
                        <div className="ImageWallContent_34d1ae">
                          <div
                            data-e2e="poster"
                            className="poster_684939"
                            data-testid="poster"
                          >
                            <div className="poster-media">
                              <Image
                                src="/img/films/les-4-fantastiques-premiers-pas-film-mcu-banniere.webp"
                                alt="Latest 4K IPTV Streaming Movie Releases"
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
                    <div
                      className="ImageWall__grid__item__contentWrap_Ef3d78"
                      tabIndex={0}
                      role="link"
                    >
                      <a
                        className="ImageWall__grid__item__contentWrap__linker_Ef3d78"
                        aria-disabled="false"
                      >
                        <div className="ImageWallContent_34d1ae">
                          <div
                            data-e2e="poster"
                            className="poster_684939"
                            data-testid="poster"
                          >
                            <div className="poster-media">
                              <Image
                                src="/img/films/maxresdefault.webp"
                                alt="Action Movies on Smart IPTV"
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
                    <div
                      className="ImageWall__grid__item__contentWrap_Ef3d78"
                      tabIndex={0}
                      role="link"
                    >
                      <a
                        className="ImageWall__grid__item__contentWrap__linker_Ef3d78"
                        aria-disabled="false"
                      >
                        <div className="ImageWallContent_34d1ae">
                          <div
                            data-e2e="poster"
                            className="poster_684939"
                            data-testid="poster"
                          >
                            <div className="poster-media">
                              <Image
                                src="/img/films/sinners.webp"
                                alt="Top Rated Films via IPTV VOD"
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
                    <div
                      className="ImageWall__grid__item__contentWrap_Ef3d78"
                      tabIndex={0}
                      role="link"
                    >
                      <a
                        className="ImageWall__grid__item__contentWrap__linker_Ef3d78"
                        aria-disabled="false"
                      >
                        <div className="ImageWallContent_34d1ae">
                          <div
                            data-e2e="poster"
                            className="poster_684939"
                            data-testid="poster"
                          >
                            <div className="poster-media">
                              <Image
                                src="/img/films/fe5c2ef3-1c8a-4c9e-b722-b036f018856c.webp"
                                alt="Popular Movies 2025 on IPTV Server"
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
                    <div
                      className="ImageWall__grid__item__contentWrap_Ef3d78"
                      tabIndex={0}
                      role="link"
                    >
                      <a
                        className="ImageWall__grid__item__contentWrap__linker_Ef3d78"
                        aria-disabled="false"
                      >
                        <div className="ImageWallContent_34d1ae">
                          <div
                            data-e2e="poster"
                            className="poster_684939"
                            data-testid="poster"
                          >
                            <div className="poster-media">
                              <Image
                                src="/img/films/eszlm4m030kf1.webp"
                                alt="Family Kids Movies IPTV Subscription"
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
                    <div
                      className="ImageWall__grid__item__contentWrap_Ef3d78"
                      tabIndex={0}
                      role="link"
                    >
                      <a
                        className="ImageWall__grid__item__contentWrap__linker_Ef3d78"
                        aria-disabled="false"
                      >
                        <div className="ImageWallContent_34d1ae">
                          <div
                            data-e2e="poster"
                            className="poster_684939"
                            data-testid="poster"
                          >
                            <div className="poster-media">
                              <Image
                                src="/img/films/Screenshot 2025-12-20 at 12.37.26.webp"
                                alt="Thriller Movies Best IPTV Provider"
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
                    <div
                      className="ImageWall__grid__item__contentWrap_Ef3d78"
                      tabIndex={0}
                      role="link"
                    >
                      <a
                        className="ImageWall__grid__item__contentWrap__linker_Ef3d78"
                        aria-disabled="false"
                      >
                        <div className="ImageWallContent_34d1ae">
                          <div
                            data-e2e="poster"
                            className="poster_684939"
                            data-testid="poster"
                          >
                            <div className="poster-media">
                              <Image
                                src="/img/films/Screenshot 2025-12-20 at 12.38.08.webp"
                                alt="Exclusive Premieres on M3U IPTV Playlist"
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
                    <div
                      className="ImageWall__grid__item__contentWrap_Ef3d78"
                      tabIndex={0}
                      role="link"
                    >
                      <a
                        className="ImageWall__grid__item__contentWrap__linker_Ef3d78"
                        aria-disabled="false"
                      >
                        <div className="ImageWallContent_34d1ae">
                          <div
                            data-e2e="poster"
                            className="poster_684939"
                            data-testid="poster"
                          >
                            <div className="poster-media">
                              <Image
                                src="/img/films/Screenshot 2025-12-20 at 12.39.35.webp"
                                alt="Cinema Streaming Best IPTV Player for Firestick"
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
            <h2 className="section-title">How It Works</h2>
            <div className="howto-grid">
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="clipboard-check" className="icon" />
                </div>
                <h3 className="howto-title">1. Select Your IPTV Plan</h3>
                <p className="howto-desc">
                  Choose from our top-rated{" "}
                  <strong>premium IPTV subscriptions</strong>. We offer flexible
                  plans for 1, 3, 6, or 12 months, ensuring you get the best
                  value from your <strong>IPTV provider</strong>.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="credit-card" className="icon" />
                </div>
                <h3 className="howto-title">2. Secure Checkout</h3>
                <p className="howto-desc">
                  Complete your purchase securely using our encrypted payment
                  gateway. We support major credit cards and other convenient
                  payment methods for a hassle-free transaction.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number">
                  <Icon name="tv" className="icon" />
                </div>
                <h3 className="howto-title">3. Start IPTV Streaming</h3>
                <p className="howto-desc">
                  Your <strong>IPTV playlist</strong> and login details arrive
                  via email within minutes. Get{" "}
                  <strong>IPTV on Firestick</strong>, Smart TV, or Android in
                  seconds and enjoy the <strong>best IPTV server</strong> quality
                  available.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container">
            <h2 className="section-title">
              Premium IPTV Subscription | Affordable IPTV Providers
            </h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 30px",
                color: "var(--text-gray)",
              }}
            >
              Choose the perfect plan for your needs. We offer the{" "}
              <strong>best IPTV service</strong> with flexible options, premium
              quality, and <strong>affordable IPTV</strong> rates. Get access to
              all channels with a <strong>premium IPTV subscription</strong>{" "}
              that works on all your favorite devices.
            </p>
            <div className="pricing-alert">
              <p>
                <strong>Secure &amp; Fast Delivery:</strong> After purchase,
                you&apos;ll receive your IPTV subscription details (Username,
                Password, URL) via email within 1-3 hours. SSL secure payment
                processing.
              </p>
              <div className="payment-notice">
                <strong>Payment Notice:</strong>
                <p>
                  Do not mention IPTV or related terms in any PayPal message,
                  note, or dispute.
                </p>
              </div>
            </div>

            <div className="pricing-toggle-container">
              <span className="toggle-label active" data-plan="standard">
                Standard Server
              </span>
              <div className="toggle-switch" />
              <span className="toggle-label" data-plan="premium">
                Premium Server
              </span>
            </div>

            <div id="standard-plans" className="pricing-container active">
              <div className="pricing-card">
                <h3 className="plan-name">1 Month</h3>
                <div className="plan-price">
                  €14.59<span>/mo</span>
                </div>
                <ul className="pricing-features">
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>20K+ HD Channels</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>120K+ Movies &amp; Series</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Reliable Performance</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>All Devices Supported</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>24/7 Live chat support</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Adult Content (Optional)</strong>
                  </li>
                </ul>
                <a href="#" className="btn btn-outline">
                  Order Now
                </a>
                <Image
                  src="/img/payments.png"
                  alt="Accepted Payment Methods"
                  width={500}
                  height={60}
                  sizes={PAYMENT_SIZES}
                  className="payment-methods-img"
                />
              </div>
              <div className="pricing-card popular">
                <div className="popular-badge">Best Value</div>
                <h3 className="plan-name">3 Months</h3>
                <div className="plan-price">
                  €24.56<span>/3mo</span>
                </div>
                <ul className="pricing-features">
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>20K+ HD Channels</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>120K+ Movies &amp; Series</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Reliable Performance</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>All Devices Supported</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>24/7 Live chat support</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Adult Content (Optional)</strong>
                  </li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Order Now
                </a>
                <Image
                  src="/img/payments.png"
                  alt="Accepted Payment Methods"
                  width={500}
                  height={60}
                  sizes={PAYMENT_SIZES}
                  className="payment-methods-img"
                />
              </div>
              <div className="pricing-card">
                <h3 className="plan-name">6 Months</h3>
                <div className="plan-price">
                  €34.78<span>/6mo</span>
                </div>
                <ul className="pricing-features">
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>20K+ HD Channels</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>120K+ Movies &amp; Series</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Reliable Performance</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>All Devices Supported</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>24/7 Live chat support</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Adult Content (Optional)</strong>
                  </li>
                </ul>
                <a href="#" className="btn btn-outline">
                  Order Now
                </a>
                <Image
                  src="/img/payments.png"
                  alt="Accepted Payment Methods"
                  width={500}
                  height={60}
                  sizes={PAYMENT_SIZES}
                  className="payment-methods-img"
                />
              </div>
              <div className="pricing-card">
                <h3 className="plan-name">12 Months</h3>
                <div className="plan-price">
                  €49.99<span>/yr</span>
                </div>
                <ul className="pricing-features">
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>20K+ HD Channels</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>120K+ Movies &amp; Series</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Reliable Performance</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>All Devices Supported</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>24/7 Live chat support</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Adult Content (Optional)</strong>
                  </li>
                </ul>
                <a href="#" className="btn btn-outline">
                  Order Now
                </a>
                <Image
                  src="/img/payments.png"
                  alt="Accepted Payment Methods"
                  width={500}
                  height={60}
                  sizes={PAYMENT_SIZES}
                  className="payment-methods-img"
                />
              </div>
            </div>

            <div id="premium-plans" className="pricing-container">
              <div className="pricing-card">
                <h3 className="plan-name">1 Month Premium</h3>
                <div className="plan-price">
                  €25.86<span>/mo</span>
                </div>
                <ul className="pricing-features">
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Premium Anti-Buffer Server</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>47K+ 4K/UHD Channels</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>180K+ Movies &amp; Series</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Sports Event Priority</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Global Coverage (US/UK/EU)</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Adult Content (Optional)</strong>
                  </li>
                </ul>
                <a href="#" className="btn btn-outline">
                  Order Now
                </a>
                <Image
                  src="/img/payments.png"
                  alt="Accepted Payment Methods"
                  width={500}
                  height={60}
                  sizes={PAYMENT_SIZES}
                  className="payment-methods-img"
                />
              </div>
              <div className="pricing-card popular">
                <div className="popular-badge">Top Choice</div>
                <h3 className="plan-name">3 Months Premium</h3>
                <div className="plan-price">
                  €36.45<span>/3mo</span>
                </div>
                <ul className="pricing-features">
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Premium Anti-Buffer Server</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>47K+ 4K/UHD Channels</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>180K+ Movies &amp; Series</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Sports Event Priority</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Global Coverage (US/UK/EU)</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Adult Content (Optional)</strong>
                  </li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Order Now
                </a>
                <Image
                  src="/img/payments.png"
                  alt="Accepted Payment Methods"
                  width={500}
                  height={60}
                  sizes={PAYMENT_SIZES}
                  className="payment-methods-img"
                />
              </div>
              <div className="pricing-card">
                <h3 className="plan-name">6 Months Premium</h3>
                <div className="plan-price">
                  €45.28<span>/6mo</span>
                </div>
                <ul className="pricing-features">
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Premium Anti-Buffer Server</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>47K+ 4K/UHD Channels</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>180K+ Movies &amp; Series</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Sports Event Priority</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Global Coverage (US/UK/EU)</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Adult Content (Optional)</strong>
                  </li>
                </ul>
                <a href="#" className="btn btn-outline">
                  Order Now
                </a>
                <Image
                  src="/img/payments.png"
                  alt="Accepted Payment Methods"
                  width={500}
                  height={60}
                  sizes={PAYMENT_SIZES}
                  className="payment-methods-img"
                />
              </div>
              <div className="pricing-card">
                <h3 className="plan-name">12 Months Premium</h3>
                <div className="plan-price">
                  €67.98<span>/yr</span>
                </div>
                <ul className="pricing-features">
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Premium Anti-Buffer Server</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>47K+ 4K/UHD Channels</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>180K+ Movies &amp; Series</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Sports Event Priority</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Global Coverage (US/UK/EU)</strong>
                  </li>
                  <li>
                    <Icon name="check" className="icon" />{" "}
                    <strong>Adult Content (Optional)</strong>
                  </li>
                </ul>
                <a href="#" className="btn btn-outline">
                  Order Now
                </a>
                <Image
                  src="/img/payments.png"
                  alt="Accepted Payment Methods"
                  width={500}
                  height={60}
                  sizes={PAYMENT_SIZES}
                  className="payment-methods-img"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="container">
            <h2 className="section-title">
              Best IPTV Providers | Smart IPTV for Firestick &amp; Kodi
            </h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 40px",
                color: "var(--text-gray)",
              }}
            >
              Experience the ultimate streaming with advanced anti-freeze
              technology. Our <strong>IPTV service</strong> provides complete{" "}
              <strong>M3U IPTV playlists</strong> and support for{" "}
              <strong>Smart IPTV</strong>, <strong>Xtream IPTV</strong>, and
              more. 4K quality is guaranteed with our{" "}
              <strong>reliable IPTV provider</strong> network.
            </p>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <Icon name="tv" className="icon" />
                </div>
                <div className="feature-content">
                  <h3>47,000+ Live Channels</h3>
                  <p>
                    Access our massive <strong>IPTV list</strong> including
                    premium channels from USA, UK, and worldwide. Stream via{" "}
                    <strong>M3U IPTV playlist</strong> or{" "}
                    <strong>Xtream IPTV</strong> in stunning 4K quality.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Icon name="film" className="icon" />
                </div>
                <div className="feature-content">
                  <h3>Premium VOD Content</h3>
                  <p>
                    Unlimited access to over 180,000 movies and series on
                    demand. Included in your{" "}
                    <strong>premium IPTV subscription</strong> and updated daily
                    with the latest releases.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Icon name="bolt" className="icon" />
                </div>
                <div className="feature-content">
                  <h3>Reliable IPTV Server</h3>
                  <p>
                    Experience uninterrupted <strong>IPTV streaming</strong> with
                    our premium <strong>IPTV server</strong>. 99.9% uptime
                    guarantees buffer-free <strong>IPTV stream</strong> quality
                    during live events.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Icon name="headset" className="icon" />
                </div>
                <div className="feature-content">
                  <h3>24/7 Support</h3>
                  <p>
                    Our expert support team is available 24/7/365 via Live Chat
                    and Email to assist with installation and activation on any
                    device within minutes.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Icon name="cogs" className="icon" />
                </div>
                <div className="feature-content">
                  <h3>Firestick &amp; App Support</h3>
                  <p>
                    Compatible with all devices including Smart TV,{" "}
                    <strong>IPTV on Firestick</strong>, and{" "}
                    <strong>IPTV on Kodi</strong>. We support the{" "}
                    <strong>best IPTV player for Firestick</strong> and more.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Icon name="shield-alt" className="icon" />
                </div>
                <div className="feature-content">
                  <h3>Secure &amp; Private</h3>
                  <p>
                    Your privacy is our priority. We use advanced encryption to
                    ensure secure, anonymous streaming with a strict No-Logs
                    policy for your peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="devices" className="devices-section">
          <div className="glow-bg" />
          <div className="container">
            <h2 className="section-title">Supported Devices</h2>
            <p
              style={{
                textAlign: "center",
                maxWidth: 800,
                margin: "0 auto 40px",
                color: "var(--text-gray)",
              }}
            >
              Our <strong>IPTV service</strong> works on all your favorite
              devices. Whether you want to watch{" "}
              <strong>IPTV on Firestick</strong>, Smart TV, or mobile, we have
              you covered with easy installation and full support.
            </p>
            <div className="devices-grid">
              <div className="device-card">
                <Icon name="amazon" className="icon" />
                <h3>Firestick / Fire TV</h3>
              </div>
              <div className="device-card">
                <Icon name="tv" className="icon" />
                <h3>Smart TV (LG/Samsung)</h3>
              </div>
              <div className="device-card">
                <Icon name="android" className="icon" />
                <h3>Android Devices</h3>
              </div>
              <div className="device-card">
                <Icon name="apple" className="icon" />
                <h3>iOS / Apple TV</h3>
              </div>
              <div className="device-card">
                <Icon name="laptop" className="icon" />
                <h3>PC / Windows / Mac</h3>
              </div>
              <div className="device-card">
                <Icon name="box" className="icon" />
                <h3>MAG / Enigma2</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="reviews-section">
          <div className="container">
            <h2 className="section-title">Customer Reviews</h2>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="stars">
                  <Icon name="star" className="icon" />
                  <Icon name="star" className="icon" />
                  <Icon name="star" className="icon" />
                  <Icon name="star" className="icon" />
                  <Icon name="star" className="icon" />
                </div>
                <p className="review-text">
                  &quot;The <strong>best IPTV service</strong> 2025 hands down.
                  No buffering during big matches and the picture quality is
                  amazing. Highly recommend this <strong>IPTV provider</strong>
                  .&quot;
                </p>
                <p className="review-author">- John D.</p>
              </div>
              <div className="review-card">
                <div className="stars">
                  <Icon name="star" className="icon" />
                  <Icon name="star" className="icon" />
                  <Icon name="star" className="icon" />
                  <Icon name="star" className="icon" />
                  <Icon name="star-half" className="icon" />
                </div>
                <p className="review-text">
                  &quot;Great selection of movies and series. My family loves
                  the <strong>IPTV streams</strong> quality. The{" "}
                  <strong>best IPTV</strong> for reliable entertainment!&quot;
                </p>
                <p className="review-author">- Sarah M.</p>
              </div>
              <div className="review-card">
                <div className="stars">
                  <Icon name="star" className="icon" />
                  <Icon name="star" className="icon" />
                  <Icon name="star" className="icon" />
                  <Icon name="star" className="icon" />
                  <Icon name="star" className="icon" />
                </div>
                <p className="review-text">
                  &quot;Support was very helpful setting up my device.
                  Everything works perfectly now. Definitely a{" "}
                  <strong>top rated IPTV</strong> service.&quot;
                </p>
                <p className="review-author">- Michael R.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section">
          <div className="container">
            <h2 className="section-title">
              IPTV FAQ | Smart IPTV, M3U Playlist, Xtream Codes Guide
            </h2>
            <div className="faq-grid">
              <details className="faq-item">
                <summary className="faq-question">
                  What do I need for IPTV?{" "}
                  <Icon name="chevron-down" className="icon" />
                </summary>
                <div className="faq-answer">
                  <p>
                    To use our <strong>IPTV service</strong>, you need: a Smart
                    TV with an IPTV app, a Firestick, or any device that
                    supports <strong>M3U IPTV playlists</strong>. We provide
                    full setup support for{" "}
                    <strong>IPTV on Firestick</strong> and other devices.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Do I need a VPN for IPTV?{" "}
                  <Icon name="chevron-down" className="icon" />
                </summary>
                <div className="faq-answer">
                  <p>
                    A VPN encrypts your traffic and protects your privacy. While
                    not mandatory, it is recommended for extra security with
                    your <strong>premium IPTV subscription</strong> and to avoid
                    ISP throttling.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Can I watch IPTV on my phone?{" "}
                  <Icon name="chevron-down" className="icon" />
                </summary>
                <div className="faq-answer">
                  <p>
                    Yes! Use <strong>IPTV apps</strong> like IPTV Smarters Pro
                    on your phone. We provide credentials compatible with the{" "}
                    <strong>best IPTV player</strong> apps for mobile streaming
                    on the go.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Do you need a good Wi-Fi connection for IPTV?{" "}
                  <Icon name="chevron-down" className="icon" />
                </summary>
                <div className="faq-answer">
                  <p>
                    It is generally recommended to have an internet connection
                    of at least 10 Mbps for HD streaming and 16 Mbps for Ultra
                    HD 4K streaming.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Can IPTV work on a regular television?{" "}
                  <Icon name="chevron-down" className="icon" />
                </summary>
                <div className="faq-answer">
                  <p>
                    You can use our <strong>IPTV service</strong> on regular TVs
                    by using an external <strong>IPTV box</strong> or{" "}
                    <strong>Firestick</strong>. These devices connect to your
                    TV&apos;s HDMI port and provide the{" "}
                    <strong>best IPTV player</strong> experience.
                  </p>
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
              <a href="#" className="footer-logo">
                <Image
                  src="/img/logo.png"
                  alt="Plex Plus Logo"
                  width={160}
                  height={50}
                  sizes="160px"
                />
              </a>
              <p className="footer-desc">
                The most reliable <strong>IPTV service provider</strong> for{" "}
                <strong>premium IPTV subscriptions</strong> world-wide.
              </p>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
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
