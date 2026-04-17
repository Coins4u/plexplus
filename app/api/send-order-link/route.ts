import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getTierByIndex } from "@/app/config/sellappLinks";

type OrderPayload = {
  fullName?: string;
  email?: string;
  country?: string;
  tierName?: string;
  tierIndex?: number;
};

type BuyerLocale = "en" | "fr" | "nl" | "de" | "it" | "pt";

type BuyerEmailCopy = {
  headerTitle: string;
  headerSubtitlePrefix: string;
  greeting: string;
  intro: string;
  selectedPackageLabel: string;
  durationFieldLabel: string;
  priceFieldLabel: string;
  packageDetailsLabel: string;
  paymentInstructionsTitle: string;
  section1Title: string;
  buttonLabel: string;
  section2Title: string;
  step1: string;
  step2: string;
  step3: string;
  section3Title: string;
  instantTitle: string;
  instantBody: string;
  communicationTitle: string;
  communicationBody: string;
  supportTitle: string;
  supportBody: string;
  importantNote: string;
  closing: string;
  supportTeam: string;
  subjectPrefix: string;
  paymentSecureLine: string;
};

const localeByCountry: Record<string, BuyerLocale> = {
  france: "fr",
  belgium: "fr",
  switzerland: "fr",
  luxembourg: "fr",
  monaco: "fr",
  canada: "fr",
  netherlands: "nl",
  germany: "de",
  austria: "de",
  liechtenstein: "de",
  italy: "it",
  "san marino": "it",
  portugal: "pt",
  brazil: "pt",
};

const buyerEmailCopyByLocale: Record<BuyerLocale, BuyerEmailCopy> = {
  en: {
    headerTitle: "Secure Checkout",
    headerSubtitlePrefix: "Complete your order for",
    greeting: "Hello",
    intro:
      "Thank you for your request. Please follow the payment instructions below to complete your order safely and quickly.",
    selectedPackageLabel: "Selected Package",
    durationFieldLabel: "Duration",
    priceFieldLabel: "Price",
    packageDetailsLabel: "Package Details",
    paymentInstructionsTitle: "Payment Instructions",
    section1Title: "1. The Secure Checkout Link:",
    buttonLabel: "Complete Secure Payment via G2G Escrow",
    section2Title: "2. Step-by-Step Payment Guide",
    step1: "Click the secure link above to visit our official product listing on G2G.",
    step2: "Sign in (Social login like Google/Discord is recommended for speed).",
    step3: "Complete your purchase using your preferred method (PayPal/Apple Pay/Google Pay/Credit Card).",
    section3Title: "3. Critical Delivery & Security Notes ",
    instantTitle: "Instant Multi-Channel Delivery",
    instantBody:
      "Your private credentials will be sent automatically to your registered email address and your G2G Order Chat immediately after payment is verified.",
    communicationTitle: "Communication Protocol",
    communicationBody:
      "G2G is our primary secure payment and escrow partner. To ensure your account warranty remains valid, please do not mention this website or external URLs in the G2G chat.",
    supportTitle: "Technical Support",
    supportBody:
      "For all technical assistance or configuration help, please reply directly to this email. Our engineering team handles all support off-platform to maintain your privacy.",
    importantNote:
      "Important: After completing payment, also check your Spam or Promotions folder in case your delivery message is filtered.",
    closing: "Best regards,",
    supportTeam: "Support Team",
    subjectPrefix: "Secure Checkout: Complete your order for",
    paymentSecureLine: "Payment is completed securely via G2G Escrow.",
  },
  fr: {
    headerTitle: "Paiement Securise",
    headerSubtitlePrefix: "Finalisez votre commande pour",
    greeting: "Bonjour",
    intro:
      "Merci pour votre demande. Veuillez suivre les instructions de paiement ci-dessous pour finaliser votre commande en toute securite.",
    selectedPackageLabel: "Offre selectionnee",
    durationFieldLabel: "Duree",
    priceFieldLabel: "Prix",
    packageDetailsLabel: "Details de l'offre",
    paymentInstructionsTitle: "Instructions de Paiement",
    section1Title: "1. Lien de paiement securise :",
    buttonLabel: "Completer le paiement securise via G2G Escrow",
    section2Title: "2. Guide de paiement etape par etape",
    step1: "Cliquez sur le lien securise ci-dessus pour visiter notre annonce officielle sur G2G.",
    step2: "Connectez-vous (la connexion sociale Google/Discord est recommandee pour aller plus vite).",
    step3: "Finalisez votre achat avec votre methode preferee (PayPal/Apple Pay/Google Pay/Carte bancaire).",
    section3Title: "3. Notes critiques de livraison et securite ",
    instantTitle: "Livraison instantanee multi-canal",
    instantBody:
      "Vos identifiants prives seront envoyes automatiquement a votre adresse email enregistree ET dans votre chat de commande G2G des verification du paiement.",
    communicationTitle: "Protocole de communication",
    communicationBody:
      "G2G est notre partenaire principal pour le paiement securise et l'escrow. Pour conserver la validite de votre garantie, veuillez ne pas mentionner ce site web ni des URL externes dans le chat G2G.",
    supportTitle: "Support technique",
    supportBody:
      "Pour toute assistance technique ou aide a la configuration, repondez directement a cet email. Notre equipe d'ingenierie gere tout le support hors plateforme pour proteger votre confidentialite.",
    importantNote:
      "Important : apres le paiement, verifiez aussi vos dossiers Spam ou Promotions si le message de livraison est filtre.",
    closing: "Cordialement,",
    supportTeam: "Equipe Support",
    subjectPrefix: "Paiement securise : finalisez votre commande pour",
    paymentSecureLine: "Le paiement est traite en toute securite via G2G Escrow.",
  },
  nl: {
    headerTitle: "Veilige Betaling",
    headerSubtitlePrefix: "Rond je bestelling af voor",
    greeting: "Hallo",
    intro:
      "Bedankt voor je aanvraag. Volg de betaalinstructies hieronder om je bestelling veilig en snel af te ronden.",
    selectedPackageLabel: "Geselecteerd pakket",
    durationFieldLabel: "Duur",
    priceFieldLabel: "Prijs",
    packageDetailsLabel: "Pakketdetails",
    paymentInstructionsTitle: "Betaalinstructies",
    section1Title: "1. De veilige checkout-link:",
    buttonLabel: "Voltooi veilige betaling via G2G Escrow",
    section2Title: "2. Stap-voor-stap betaalgids",
    step1: "Klik op de veilige link hierboven om onze officiele productlisting op G2G te openen.",
    step2: "Log in (sociale login zoals Google/Discord wordt aanbevolen voor snelheid).",
    step3: "Voltooi je aankoop met je gewenste methode (PayPal/Apple Pay/Google Pay/Creditcard).",
    section3Title: "3. Kritieke leverings- en veiligheidsnotities",
    instantTitle: "Directe levering via meerdere kanalen",
    instantBody:
      "Je privegegevens worden direct na betaalverificatie automatisch gestuurd naar je geregistreerde e-mailadres EN je G2G Order Chat.",
    communicationTitle: "Communicatieprotocol",
    communicationBody:
      "G2G is onze primaire partner voor veilige betalingen en escrow. Om je accountgarantie geldig te houden, noem deze website of externe URL's niet in de G2G-chat.",
    supportTitle: "Technische ondersteuning",
    supportBody:
      "Voor technische hulp of configuratiehulp kun je direct op deze e-mail reageren. Ons engineeringteam behandelt alle support buiten het platform om je privacy te behouden.",
    importantNote:
      "Belangrijk: controleer na betaling ook je Spam- of Promoties-map als het leveringsbericht is gefilterd.",
    closing: "Met vriendelijke groet,",
    supportTeam: "Support Team",
    subjectPrefix: "Veilige betaling: rond je bestelling af voor",
    paymentSecureLine: "Betaling wordt veilig verwerkt via G2G Escrow.",
  },
  de: {
    headerTitle: "Sicherer Checkout",
    headerSubtitlePrefix: "Schliessen Sie Ihre Bestellung ab fur",
    greeting: "Hallo",
    intro:
      "Vielen Dank fur Ihre Anfrage. Bitte folgen Sie den untenstehenden Zahlungsanweisungen, um Ihre Bestellung sicher und schnell abzuschliessen.",
    selectedPackageLabel: "Ausgewaehltes Paket",
    durationFieldLabel: "Laufzeit",
    priceFieldLabel: "Preis",
    packageDetailsLabel: "Paketdetails",
    paymentInstructionsTitle: "Zahlungsanweisungen",
    section1Title: "1. Der sichere Checkout-Link:",
    buttonLabel: "Sichere Zahlung uber G2G Escrow abschliessen",
    section2Title: "2. Schritt-fur-Schritt Zahlungsanleitung",
    step1: "Klicken Sie auf den sicheren Link oben, um unser offizielles Produktangebot auf G2G zu besuchen.",
    step2: "Melden Sie sich an (Social Login wie Google/Discord wird fur mehr Geschwindigkeit empfohlen).",
    step3: "Schliessen Sie den Kauf mit Ihrer bevorzugten Methode ab (PayPal/Apple Pay/Google Pay/Kreditkarte).",
    section3Title: "3. Wichtige Liefer- und Sicherheitshinweise ",
    instantTitle: "Sofortige Mehrkanal-Lieferung",
    instantBody:
      "Ihre privaten Zugangsdaten werden unmittelbar nach Zahlungsbestaetigung automatisch an Ihre registrierte E-Mail-Adresse UND in Ihren G2G Order Chat gesendet.",
    communicationTitle: "Kommunikationsprotokoll",
    communicationBody:
      "G2G ist unser primarer Partner fur sichere Zahlungen und Escrow. Damit Ihre Kontogarantie gueltig bleibt, nennen Sie bitte diese Website oder externe URLs nicht im G2G-Chat.",
    supportTitle: "Technischer Support",
    supportBody:
      "Fur technische Hilfe oder Konfigurationsunterstuetzung antworten Sie bitte direkt auf diese E-Mail. Unser Engineering-Team bearbeitet den Support bewusst ausserhalb der Plattform, um Ihre Privatsphaere zu schuetzen.",
    importantNote:
      "Wichtig: Prufen Sie nach der Zahlung auch Ihren Spam- oder Promotions-Ordner, falls die Liefernachricht gefiltert wurde.",
    closing: "Beste Gruesse,",
    supportTeam: "Support Team",
    subjectPrefix: "Sicherer Checkout: Schliessen Sie Ihre Bestellung ab fur",
    paymentSecureLine: "Die Zahlung wird sicher uber G2G Escrow abgewickelt.",
  },
  it: {
    headerTitle: "Checkout Sicuro",
    headerSubtitlePrefix: "Completa il tuo ordine per",
    greeting: "Ciao",
    intro:
      "Grazie per la tua richiesta. Segui le istruzioni di pagamento qui sotto per completare il tuo ordine in modo sicuro e veloce.",
    selectedPackageLabel: "Pacchetto selezionato",
    durationFieldLabel: "Durata",
    priceFieldLabel: "Prezzo",
    packageDetailsLabel: "Dettagli pacchetto",
    paymentInstructionsTitle: "Istruzioni di Pagamento",
    section1Title: "1. Il link di checkout sicuro:",
    buttonLabel: "Completa pagamento sicuro tramite G2G Escrow",
    section2Title: "2. Guida pagamento passo dopo passo",
    step1: "Clicca sul link sicuro qui sopra per visitare la nostra inserzione ufficiale su G2G.",
    step2: "Accedi (login social come Google/Discord consigliato per velocita).",
    step3: "Completa l'acquisto con il metodo che preferisci (PayPal/Apple Pay/Google Pay/Carta di credito).",
    section3Title: "3. Note critiche su consegna e sicurezza ",
    instantTitle: "Consegna istantanea multi-canale",
    instantBody:
      "Le tue credenziali private verranno inviate automaticamente al tuo indirizzo email registrato E alla tua chat ordine G2G subito dopo la verifica del pagamento.",
    communicationTitle: "Protocollo di comunicazione",
    communicationBody:
      "G2G e il nostro partner principale per pagamenti sicuri ed escrow. Per mantenere valida la garanzia del tuo account, non menzionare questo sito o URL esterni nella chat G2G.",
    supportTitle: "Supporto tecnico",
    supportBody:
      "Per assistenza tecnica o aiuto di configurazione, rispondi direttamente a questa email. Il nostro team di ingegneria gestisce tutto il supporto fuori piattaforma per tutelare la tua privacy.",
    importantNote:
      "Importante: dopo il pagamento, controlla anche la cartella Spam o Promozioni nel caso in cui il messaggio di consegna venga filtrato.",
    closing: "Cordiali saluti,",
    supportTeam: "Team Supporto",
    subjectPrefix: "Pagamento sicuro: completa il tuo ordine per",
    paymentSecureLine: "Il pagamento viene gestito in sicurezza tramite G2G Escrow.",
  },
  pt: {
    headerTitle: "Checkout Seguro",
    headerSubtitlePrefix: "Conclua o seu pedido para",
    greeting: "Ola",
    intro:
      "Obrigado pelo seu pedido. Siga as instrucoes de pagamento abaixo para concluir a sua compra com seguranca e rapidez.",
    selectedPackageLabel: "Pacote selecionado",
    durationFieldLabel: "Duracao",
    priceFieldLabel: "Preco",
    packageDetailsLabel: "Detalhes do pacote",
    paymentInstructionsTitle: "Instrucoes de Pagamento",
    section1Title: "1. O link de checkout seguro:",
    buttonLabel: "Concluir pagamento seguro via G2G Escrow",
    section2Title: "2. Guia de pagamento passo a passo",
    step1: "Clique no link seguro acima para visitar o nosso anuncio oficial no G2G.",
    step2: "Inicie sessao (login social como Google/Discord e recomendado para rapidez).",
    step3: "Conclua a compra com o seu metodo preferido (PayPal/Apple Pay/Google Pay/Cartao de credito).",
    section3Title: "3. Notas criticas de entrega e seguranca ",
    instantTitle: "Entrega instantanea em multiplos canais",
    instantBody:
      "As suas credenciais privadas serao enviadas automaticamente para o seu email registado E para o seu chat de encomenda no G2G imediatamente apos a verificacao do pagamento.",
    communicationTitle: "Protocolo de comunicacao",
    communicationBody:
      "O G2G e o nosso parceiro principal de pagamento seguro e escrow. Para manter a garantia da sua conta valida, nao mencione este website nem URLs externas no chat do G2G.",
    supportTitle: "Suporte tecnico",
    supportBody:
      "Para assistencia tecnica ou ajuda de configuracao, responda diretamente a este email. A nossa equipa de engenharia trata todo o suporte fora da plataforma para proteger a sua privacidade.",
    importantNote:
      "Importante: apos concluir o pagamento, verifique tambem as pastas Spam ou Promocoes caso a mensagem de entrega seja filtrada.",
    closing: "Cumprimentos,",
    supportTeam: "Equipa de Suporte",
    subjectPrefix: "Pagamento seguro: conclua o seu pedido para",
    paymentSecureLine: "O pagamento e processado com seguranca via G2G Escrow.",
  },
};

function getBuyerLocaleFromCountry(country: string): BuyerLocale {
  const normalizedCountry = country.trim().toLowerCase();
  return localeByCountry[normalizedCountry] || "en";
}

function buildBuyerEmailHtml(
  fullName: string,
  tierName: string,
  durationLabel: string,
  priceLabel: string,
  packageDetails: string[],
  checkoutLink: string,
  copy: BuyerEmailCopy,
) {
  const detailsHtml = packageDetails
    .map(
      (item) =>
        `<li style="margin:0 0 6px;color:#374151;font-size:14px;line-height:1.5;">${item}</li>`,
    )
    .join("");

  return `
  <div style="font-family:Arial,sans-serif;background:#f6f7fb;padding:24px;">
    <div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #ececf3;">
      <div style="padding:18px 22px;background:linear-gradient(135deg,#ff00b3,#ff66d6);color:#fff;">
        <h2 style="margin:0;font-size:20px;">${copy.headerTitle}</h2>
        <p style="margin:6px 0 0;font-size:14px;opacity:.95;">${copy.headerSubtitlePrefix} <strong>${tierName}</strong></p>
      </div>
      <div style="padding:22px;color:#1f2937;line-height:1.6;">
        <p style="margin:0 0 12px;">${copy.greeting} <strong>${fullName}</strong>,</p>
        <p style="margin:0 0 14px;">
          ${copy.intro}
        </p>
        <div style="margin:0 0 14px;padding:14px;border-radius:12px;background:#f9fafb;border:1px solid #e5e7eb;">
          <p style="margin:0 0 6px;font-size:14px;"><strong>${copy.selectedPackageLabel}:</strong> ${tierName}</p>
          <p style="margin:0 0 6px;font-size:14px;"><strong>${copy.durationFieldLabel}:</strong> ${durationLabel}</p>
          <p style="margin:0 0 10px;font-size:14px;"><strong>${copy.priceFieldLabel}:</strong> ${priceLabel}</p>
          <p style="margin:0 0 8px;font-size:14px;"><strong>${copy.packageDetailsLabel}:</strong></p>
          <ul style="padding-left:18px;margin:0;">
            ${detailsHtml}
          </ul>
        </div>
        <div style="margin:0 0 16px;padding:16px;border-radius:12px;background:#eef6ff;border:1px solid #bfdbfe;">
          <p style="margin:0 0 10px;color:#1e3a8a;font-size:15px;font-weight:700;">
            ${copy.paymentInstructionsTitle}
          </p>
          <p style="margin:0 0 10px;color:#0f172a;font-size:14px;">
            <strong>${copy.priceFieldLabel}:</strong>
            <span style="display:inline-block;margin-left:6px;padding:4px 10px;border-radius:999px;background:#1d4ed8;color:#ffffff;font-weight:700;">
              ${priceLabel}
            </span>
          </p>
          <p style="margin:0;color:#1f2937;font-size:14px;">
            ${copy.section1Title}
          </p>
          <p style="margin:14px 0 0;">
            <a href="${checkoutLink}" style="display:inline-block;padding:12px 18px;border-radius:999px;background:#1d4ed8;color:#fff;text-decoration:none;font-weight:700;">
              ${copy.buttonLabel}
            </a>
          </p>
        </div>
        <div style="margin:0 0 16px;padding:16px;border-radius:12px;background:#f8f5ff;border:1px solid #ddd6fe;">
          <p style="margin:0 0 10px;color:#5b21b6;font-size:15px;font-weight:700;">
            ${copy.section2Title}
          </p>
          <ol style="margin:0;padding-left:18px;color:#1f2937;font-size:14px;line-height:1.7;">
            <li style="margin:0 0 8px;">
              ${copy.step1}
            </li>
            <li style="margin:0 0 8px;">
              ${copy.step2}
            </li>
            <li style="margin:0;">
              ${copy.step3}
            </li>
          </ol>
        </div>
        <div style="margin:0 0 16px;padding:16px;border-radius:12px;background:#fff7ed;border:1px solid #fdba74;">
          <p style="margin:0 0 10px;color:#9a3412;font-size:15px;font-weight:700;">
            ${copy.section3Title}
          </p>
          <p style="margin:0 0 10px;color:#1f2937;font-size:14px;">
            <strong>${copy.instantTitle}:</strong> ${copy.instantBody}
          </p>
          <p style="margin:0 0 10px;color:#1f2937;font-size:14px;">
            <strong>${copy.communicationTitle}:</strong> ${copy.communicationBody}
          </p>
          <p style="margin:0;color:#1f2937;font-size:14px;">
            <strong>${copy.supportTitle}:</strong> ${copy.supportBody}
          </p>
        </div>
        <p style="margin:0 0 10px;color:#7c2d12;font-size:14px;background:#fff1f2;border:1px solid #fecdd3;padding:10px 12px;border-radius:10px;">
          ${copy.importantNote}
        </p>
        <p style="margin:16px 0 0;">${copy.closing}<br/>${copy.supportTeam}</p>
      </div>
    </div>
  </div>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as OrderPayload;
    const fullName = (body.fullName || "").trim();
    const email = (body.email || "").trim();
    const country = (body.country || "").trim();

    if (!fullName || !email || !country) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 },
      );
    }

    const tierFromIndex =
      typeof body.tierIndex === "number" ? getTierByIndex(body.tierIndex) : undefined;
    const tierName = body.tierName?.trim() || tierFromIndex?.tierName || "Selected Tier";
    const checkoutLink = tierFromIndex?.checkoutLink || "";
    const durationLabel = tierFromIndex?.durationLabel || tierName;
    const priceLabel = tierFromIndex?.priceLabel || "Check secure checkout";
    const packageDetails = tierFromIndex?.packageDetails || [];

    if (!checkoutLink) {
      return NextResponse.json(
        { message: "Unable to resolve checkout link for selected tier." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || "false") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const from = process.env.SMTP_FROM || process.env.SMTP_USER;
    const adminEmail = process.env.ORDER_ADMIN_EMAIL;

    if (!from || !adminEmail) {
      return NextResponse.json(
        { message: "Email server environment variables are not fully configured." },
        { status: 500 },
      );
    }

    const buyerLocale = getBuyerLocaleFromCountry(country);
    const copy = buyerEmailCopyByLocale[buyerLocale];

    const buyerSubject = `${copy.subjectPrefix} ${tierName}`;
    const buyerText = `${copy.greeting} ${fullName},

${copy.intro}

${copy.paymentInstructionsTitle}
${copy.section1Title}
${copy.priceFieldLabel}: ${priceLabel}
${copy.buttonLabel}
${checkoutLink}

${copy.section2Title}
Step 1: ${copy.step1}
Step 2: ${copy.step2}
Step 3: ${copy.step3}

${copy.section3Title}
${copy.instantTitle}: ${copy.instantBody}
${copy.communicationTitle}: ${copy.communicationBody}
${copy.supportTitle}: ${copy.supportBody}

${copy.importantNote}

${copy.closing}
${copy.supportTeam}`;
    const buyerTextWithDetails = `${buyerText}

${copy.selectedPackageLabel}: ${tierName}
${copy.durationFieldLabel}: ${durationLabel}
${copy.priceFieldLabel}: ${priceLabel}
${copy.packageDetailsLabel}:
${packageDetails.map((d) => `- ${d}`).join("\n")}

${copy.paymentSecureLine}`;

    const adminSubject = `NEW FORM FILLED: ${tierName} - ${fullName}`;
    const adminText = `A user has filled the order form.
Name: ${fullName}
Email: ${email}
Country: ${country}
Tier Selected: ${tierName}
Status: Secure link has been sent to the buyer.`;

    await Promise.all([
      transporter.sendMail({
        from,
        to: email,
        subject: buyerSubject,
        text: buyerTextWithDetails,
        html: buildBuyerEmailHtml(
          fullName,
          tierName,
          durationLabel,
          priceLabel,
          packageDetails,
          checkoutLink,
          copy,
        ),
      }),
      transporter.sendMail({
        from,
        to: adminEmail,
        subject: adminSubject,
        text: adminText,
      }),
    ]);

    return NextResponse.json({ message: "Secure link sent successfully." });
  } catch (error) {
    console.error("SMTP send-order-link error:", error);
    return NextResponse.json(
      { message: "Failed to send secure payment link. Please try again." },
      { status: 500 },
    );
  }
}
