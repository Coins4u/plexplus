/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePlexPlusUI } from "../hooks/usePlexPlusUI";

export default function PtHomePage() {
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
              <a href="#hero" className="nav-link">Início</a>
              <a href="#sports" className="nav-link">Desporto</a>
              <a href="#movies" className="nav-link">Filmes</a>
              <a href="#pricing" className="nav-link">Preços</a>
              <Link href="/pt/guide" className="nav-link">Guia de Instalação</Link>
              <Link href="/pt/contact" className="nav-link">Contacto</Link>
            </nav>
          </div>
        </div>
      </header>

      <main role="main">
        <section id="hero" className="hero">
          <div className="container hero-content">
            <h1 className="hero-title">Melhor <span>IPTV Portugal</span> | Serviço IPTV Premium em Portugal</h1>
            <p className="hero-subtitle">
              Aceda ao <strong>melhor serviço IPTV em Portugal</strong>. Desfrute de mais de 47.000 canais ao vivo, 180.000
              filmes e séries em qualidade 4K/UHD. Oferecemos <strong>listas IPTV</strong> atualizadas, <strong>playlist
                M3U</strong> e suporte completo. Procura um <strong>IPTV legal e confiável</strong>? A Plex Plus é a escolha
              certa com qualidade premium e todos os canais SportV.
            </p>
            <ul className="hero-features">
              <li><i className="fas fa-check-circle" /> Qualidade IPTV 4K/UHD</li>
              <li><i className="fas fa-check-circle" /> Canais PT &amp; Internacionais</li>
              <li><i className="fas fa-check-circle" /> Garantia de Reembolso</li>
            </ul>
            <div className="hero-buttons">
              <a href="#pricing" className="btn btn-primary">Começar Agora</a>
              <a href="#features" className="btn btn-outline">Mais Info</a>
            </div>
          </div>
        </section>

        <section id="sports" className="grid-section">
          <div className="container">
            <h2 className="section-title">Desporto em Direto | IPTV SportV Portugal</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Não perca nenhum momento dos seus desportos favoritos. Assista à Liga Portugal, Champions League, Fórmula 1 e
              MotoGP em direto com a nossa <strong>lista IPTV SportV</strong>. Oferecemos streams estáveis em qualidade HD e
              4K, com <strong>playlist M3U</strong> compatível com todos os dispositivos.
            </p>
            <div className="bento-grid">
              <div className="grid-item">
                <img src="/img/sports/football.png" alt="Futebol" />
                <div className="grid-item-content"><h3 className="grid-item-title">Futebol</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/mma.png" alt="MMA" />
                <div className="grid-item-content"><h3 className="grid-item-title">MMA</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/basketball.png" alt="Basquetebol" />
                <div className="grid-item-content"><h3 className="grid-item-title">Basquetebol</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/motosports.png" alt="Desportos Motorizados" />
                <div className="grid-item-content"><h3 className="grid-item-title">Desportos Motorizados</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/tennis.png" alt="Ténis" />
                <div className="grid-item-content"><h3 className="grid-item-title">Ténis</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/equestrian.png" alt="Hipismo" />
                <div className="grid-item-content"><h3 className="grid-item-title">Hipismo</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/rugby.png" alt="Râguebi" />
                <div className="grid-item-content"><h3 className="grid-item-title">Râguebi</h3></div>
              </div>
              <div className="grid-item">
                <img src="/img/sports/omnisports-ar.png" alt="Todos os Desportos" />
                <div className="grid-item-content"><h3 className="grid-item-title">Todos os Desportos</h3></div>
              </div>
            </div>
          </div>
        </section>

        <section id="movies" className="grid-section">
          <div className="container">
            <h2 className="section-title">Filmes e Séries | Biblioteca VOD Completa</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Mergulhe numa biblioteca infinita de entretenimento. Assista aos mais recentes blockbusters, séries populares
              e documentários premiados em qualidade 4K. A nossa <strong>playlist IPTV</strong> inclui mais de 180.000
              títulos, atualizados diariamente com formato <strong>M3U</strong> para máxima compatibilidade.
            </p>
            <section className="cinema" aria-label="Canais de Cinema">
              <div data-binder="true" />
              <div className="ImageWall_Ef3d78 imageWallFocus">
                <div className="ImageWall__grid_Ef3d78">
                  <div className="ImageWall__grid__item_Ef3d78 ratio--169 ImageWall__grid__item_Ratio1691_Ef3d78">
                    <div className="ImageWall__grid__item__contentWrap_Ef3d78" tabIndex={0} role="link">
                      <a className="ImageWall__grid__item__contentWrap__linker_Ef3d78" aria-disabled="false">
                        <div className="ImageWallContent_34d1ae">
                          <div data-e2e="poster" className="poster_684939">
                            <img loading="lazy" src="/img/films/les-4-fantastiques-premiers-pas-film-mcu-banniere.webp" alt="Últimos Filmes 4K" className="ImageType_149741 cover poster__cover_684939" />
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
                            <img loading="lazy" src="/img/films/maxresdefault.webp" alt="Filmes de Ação Streaming" className="ImageType_149741 cover poster__cover_684939" />
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
                            <img loading="lazy" src="/img/films/sinners.webp" alt="Filmes Mais Vistos" className="ImageType_149741 cover poster__cover_684939" />
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
                            <img loading="lazy" src="/img/films/fe5c2ef3-1c8a-4c9e-b722-b036f018856c.webp" alt="Filmes Populares 2025" className="ImageType_149741 cover poster__cover_684939" />
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
                            <img loading="lazy" src="/img/films/eszlm4m030kf1.webp" alt="Filmes de Família" className="ImageType_149741 cover poster__cover_684939" />
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
                            <img loading="lazy" src="/img/films/Screenshot 2025-12-20 at 12.37.26.webp" alt="Thriller Streaming" className="ImageType_149741 cover poster__cover_684939" />
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
                            <img loading="lazy" src="/img/films/Screenshot 2025-12-20 at 12.38.08.webp" alt="Filmes Exclusivos" className="ImageType_149741 cover poster__cover_684939" />
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
                            <img loading="lazy" src="/img/films/Screenshot 2025-12-20 at 12.39.35.webp" alt="Blockbuster Streaming" className="ImageType_149741 cover poster__cover_684939" />
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
            <h2 className="section-title">Como Funciona</h2>
            <div className="howto-grid">
              <div className="howto-card">
                <div className="howto-number"><i className="fas fa-clipboard-check" /></div>
                <h3 className="howto-title">1. Escolha o seu Plano</h3>
                <p className="howto-desc">
                  Veja as nossas opções flexíveis e escolha o pacote que se adapta a si. Oferecemos opções de 1, 3, 6 e 12 meses para servidores Standard e Premium.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number"><i className="fas fa-credit-card" /></div>
                <h3 className="howto-title">2. Pagamento Seguro</h3>
                <p className="howto-desc">
                  Conclua a sua encomenda com segurança através do nosso gateway de pagamento encriptado. Aceitamos todos os principais cartões de crédito e métodos seguros.
                </p>
              </div>
              <div className="howto-card">
                <div className="howto-number"><i className="fas fa-tv" /></div>
                <h3 className="howto-title">3. Ativação Imediata</h3>
                <p className="howto-desc">
                  Receba os seus dados de login por e-mail em minutos. Receberá a sua <strong>iptv portugal playlist</strong> e instruções para Smart TV, Firestick, Android, iOS e comece a assistir imediatamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container">
            <h2 className="section-title">Planos e Preços | Melhor IPTV Portugal</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 30px", color: "var(--text-gray)" }}>
              Escolha o plano perfeito para si. Oferecemos o <strong>melhor IPTV em Portugal</strong> com preços acessíveis e qualidade premium. Receba <strong>playlist M3U</strong>, suporte completo e acesso a todos os canais. Procura um <strong>serviço IPTV legal e confiável</strong>? Escolha a qualidade da Plex Plus.
            </p>
            <div className="pricing-alert">
              <p><strong>Entrega Segura &amp; Rápida:</strong> Após a compra, você receberá os detalhes da sua assinatura IPTV (Nome de usuário, Senha, URL) por e-mail dentro de 1 a 3 horas. Pagamento seguro SSL.</p>
              <div className="payment-notice">
                <strong>Aviso de Pagamento:</strong>
                <p>Não mencione IPTV ou termos relacionados em nenhuma mensagem, nota ou disputa do PayPal.</p>
              </div>
            </div>
            <div className="pricing-toggle-container">
              <span className="toggle-label active" data-plan="standard">Servidor Standard</span>
              <div className="toggle-switch" />
              <span className="toggle-label" data-plan="premium">Servidor Premium</span>
            </div>
            <div id="standard-plans" className="pricing-container active">
              {[
                ["1 Mês", "€14.59", "/Mês"],
                ["3 Meses", "€24.56", "/3 Meses", true, "Melhor Valor"],
                ["6 Meses", "€34.78", "/6 Meses"],
                ["12 Meses", "€49.99", "/Ano"],
              ].map(([name, price, suffix, popular, badge]) => (
                <div key={name as string} className={`pricing-card ${popular ? "popular" : ""}`}>
                  {badge && <div className="popular-badge">{badge}</div>}
                  <h3 className="plan-name">{name}</h3>
                  <div className="plan-price">{price}<span>{suffix}</span></div>
                  <ul className="pricing-features">
                    <li><i className="fas fa-check" /> <strong>20K+ Canais HD</strong></li>
                    <li><i className="fas fa-check" /> <strong>120K+ Filmes &amp; Séries</strong></li>
                    <li><i className="fas fa-check" /> <strong>Desempenho Fiável</strong></li>
                    <li><i className="fas fa-check" /> <strong>Todos os Dispositivos Suportados</strong></li>
                    <li><i className="fas fa-check" /> <strong>Suporte Chat 24/7</strong></li>
                    <li><i className="fas fa-check" /> <strong>Conteúdo Adulto (Opcional)</strong></li>
                  </ul>
                  <a href="#" className={popular ? "btn btn-primary" : "btn btn-outline"}>Encomendar Agora</a>
                  <img src="/img/payments.png" alt="Métodos de Pagamento Aceites" className="payment-methods-img" />
                </div>
              ))}
            </div>
            <div id="premium-plans" className="pricing-container">
              {[
                ["1 Mês Premium", "€25.86", "/Mês"],
                ["3 Meses Premium", "€36.45", "/3 Meses", true, "Top Escolha"],
                ["6 Meses Premium", "€45.28", "/6 Meses"],
                ["12 Meses Premium", "€67.98", "/Ano"],
              ].map(([name, price, suffix, popular, badge]) => (
                <div key={name as string} className={`pricing-card ${popular ? "popular" : ""}`}>
                  {badge && <div className="popular-badge">{badge}</div>}
                  <h3 className="plan-name">{name}</h3>
                  <div className="plan-price">{price}<span>{suffix}</span></div>
                  <ul className="pricing-features">
                    <li><i className="fas fa-check" /> <strong>Servidor Premium Anti-Freeze</strong></li>
                    <li><i className="fas fa-check" /> <strong>47K+ Canais 4K/UHD</strong></li>
                    <li><i className="fas fa-check" /> <strong>180K+ Filmes &amp; Séries</strong></li>
                    <li><i className="fas fa-check" /> <strong>Prioridade em Eventos Desportivos</strong></li>
                    <li><i className="fas fa-check" /> <strong>Cobertura Global (PT/EU/US)</strong></li>
                    <li><i className="fas fa-check" /> <strong>Conteúdo Adulto (Opcional)</strong></li>
                  </ul>
                  <a href="#" className={popular ? "btn btn-primary" : "btn btn-outline"}>Encomendar Agora</a>
                  <img src="/img/payments.png" alt="Métodos de Pagamento Aceites" className="payment-methods-img" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="container">
            <h2 className="section-title">Porquê Escolher Plex Plus?</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              Descubra a melhor experiência de streaming com tecnologia anti-congelamento avançada. O nosso serviço oferece <strong>listas IPTV completas</strong> com formato <strong>M3U</strong>, compatível com Smart TV, Firestick e dispositivos móveis. Qualidade 4K garantida com serviço legal e confiável em Portugal.
            </p>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-tv" /></div>
                <div className="feature-content">
                  <h3>+47.000 Canais</h3>
                  <p>Acesso a uma enorme biblioteca global de canais de TV ao vivo, incluindo canais premium de PT, EUA, RU e Europa em qualidade impressionante HD &amp; 4K.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-film" /></div>
                <div className="feature-content">
                  <h3>Biblioteca VOD</h3>
                  <p>Acesso ilimitado a mais de 180.000 filmes e séries on demand. Atualizado diariamente com os últimos lançamentos de todas as grandes plataformas de streaming.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-bolt" /></div>
                <div className="feature-content">
                  <h3>Tecnologia Anti-Freeze</h3>
                  <p>Desfrute de streaming ininterrupto graças à nossa tecnologia exclusiva Anti-Freeze 9.0, com 99,9% uptime e sem buffering durante grandes jogos.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-headset" /></div>
                <div className="feature-content">
                  <h3>Suporte 24/7</h3>
                  <p>A nossa equipa de suporte especializada está pronta 24/7/365 via chat e e-mail para ajudar com a instalação e ativação em qualquer dispositivo em minutos.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-cogs" /></div>
                <div className="feature-content">
                  <h3>Fácil Instalação</h3>
                  <p>Compatível com todos os dispositivos, incluindo Smart TV, Firestick, Android Box, Web Player, smartphones e suporte para <strong>portugal iptv m3u</strong>.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-shield-alt" /></div>
                <div className="feature-content">
                  <h3>Seguro &amp; Privado</h3>
                  <p>A sua privacidade é a nossa prioridade. Utilizamos encriptação avançada para streaming seguro e anónimo com uma política estrita de não registo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="devices" className="devices-section">
          <div className="glow-bg" />
          <div className="container">
            <h2 className="section-title">Dispositivos Suportados</h2>
            <p style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px", color: "var(--text-gray)" }}>
              O nosso <strong>serviço IPTV</strong> funciona em todos os seus dispositivos favoritos. Quer pretenda ver <strong>IPTV na Firestick</strong>, Smart TV ou telemóvel, oferecemos uma instalação fácil e suporte completo.
            </p>
            <div className="devices-grid">
              <div className="device-card"><i className="fab fa-amazon" /><h3>Firestick / Fire TV</h3></div>
              <div className="device-card"><i className="fas fa-tv" /><h3>Smart TV (LG/Samsung)</h3></div>
              <div className="device-card"><i className="fab fa-android" /><h3>Dispositivos Android</h3></div>
              <div className="device-card"><i className="fab fa-apple" /><h3>iOS / Apple TV</h3></div>
              <div className="device-card"><i className="fas fa-laptop" /><h3>PC / Windows / Mac</h3></div>
              <div className="device-card"><i className="fas fa-box" /><h3>MAG / Enigma2</h3></div>
            </div>
          </div>
        </section>

        <section id="reviews" className="reviews-section">
          <div className="container">
            <h2 className="section-title">Avaliações de Clientes</h2>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="stars"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></div>
                <p className="review-text">&quot;Sem dúvida a <strong>melhor lista iptv portugal</strong> em 2025. Sem falhas durante os jogos de futebol e a qualidade de imagem é fantástica. Recomendo este <strong>serviço IPTV</strong> sem hesitar.&quot;</p>
                <p className="review-author">- João S.</p>
              </div>
              <div className="review-card">
                <div className="stars"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /></div>
                <p className="review-text">&quot;Ótima seleção de filmes e séries. A minha família adora a qualidade da variedade das <strong>listas iptv portugal actualizadas sportv</strong>. Estava à procura de uma boa alternativa e encontrei a Plex Plus, top!&quot;</p>
                <p className="review-author">- Sofia M.</p>
              </div>
              <div className="review-card">
                <div className="stars"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></div>
                <p className="review-text">&quot;O suporte ajudou-me muito a configurar a minha TV. Tudo funciona na perfeição. Isto é exatamente <strong>o que é o melhor iptv</strong> se procura qualidade.&quot;</p>
                <p className="review-author">- António P.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section">
          <div className="container">
            <h2 className="section-title">Perguntas Frequentes sobre IPTV</h2>
            <div className="faq-grid">
              <details className="faq-item">
                <summary className="faq-question">O que preciso para IPTV? <i className="fas fa-chevron-down" /></summary>
                <div className="faq-answer">
                  <p>Para o <strong>melhor IPTV Portugal</strong>, precisa: Smart TV com app, Firestick, ou dispositivo que suporte <strong>M3U IPTV</strong> e <strong>playlist IPTV Portugal</strong>. Obtenha <strong>listas M3U IPTV Portugal</strong> e <strong>Portugal IPTV M3U</strong>. Internet de 15-25 Mbps para <strong>IPTV 4K Portugal</strong>.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Preciso de uma VPN para IPTV? <i className="fas fa-chevron-down" /></summary>
                <div className="faq-answer">
                  <p>Uma VPN encripta o seu tráfego de internet e protege a sua privacidade durante o streaming. O uso de uma VPN é recomendado para segurança extra e para contornar possíveis restrições dos fornecedores de internet.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Posso ver IPTV no meu telefone? <i className="fas fa-chevron-down" /></summary>
                <div className="faq-answer">
                  <p>Sim! Use aplicações como IPTV Smarters Pro no seu telemóvel. Fornecemos <strong>playlist M3U</strong> e credenciais de acesso para streaming em qualquer lugar. O nosso serviço funciona perfeitamente em iOS e Android.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Como funciona o IPTV com WiFi? <i className="fas fa-chevron-down" /></summary>
                <div className="faq-answer">
                  <p>Recomenda-se uma ligação de pelo menos 10 Mbps para HD, e 16-25 Mbps para streaming estável em Ultra HD 4K.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">O IPTV funciona numa TV antiga? <i className="fas fa-chevron-down" /></summary>
                <div className="faq-answer">
                  <p>Pode receber IPTV em televisões mais antigas através de um descodificador externo (ex: Android Box, Fire TV Stick). Este descodifica o sinal digital para o seu ecrã.</p>
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
              <p className="footer-desc">Serviço de Assinatura IPTV Premium.</p>
            </div>
            <div className="footer-links">
              <h3>Links Rápidos</h3>
              <ul>
                <li><a href="#hero">Início</a></li>
                <li><a href="#pricing">Preços</a></li>
                <li><Link href="/pt/guide">Guia de Instalação</Link></li>
                <li><Link href="/pt/contact">Contacto</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Info Legal</h3>
              <ul>
                <li><Link href="/pt/TermsConditions">Termos e Condições</Link></li>
                <li><Link href="/pt/privacy">Política de Privacidade</Link></li>
                <li><Link href="/pt/RefundPolicy">Política de Reembolso</Link></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Plex Plus. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/14302485823" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp" />
      </a>
    </>
  );
}
