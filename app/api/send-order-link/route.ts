import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  PAYMENT_METHOD_LABELS,
  SelectablePaymentMethod,
  buildPaymentPageUrl,
  isSelectablePaymentMethod,
} from "@/app/config/paymentMethods";
import {
  formatEuro,
  getDiscountedPrice,
  getTierByIndex,
} from "@/app/config/sellappLinks";

type OrderPayload = {
  fullName?: string;
  email?: string;
  country?: string;
  paymentMethod?: string;
  tierName?: string;
  tierIndex?: number;
};

type BuyerLocale = "en" | "fr" | "nl" | "de" | "it" | "pt" | "no";

type BuyerEmailCopy = {
  headerTitle: string;
  headerSubtitlePrefix: string;
  greeting: string;
  /** Use {plan} placeholder for the selected plan name. */
  intro: string;
  selectedPackageLabel: string;
  durationFieldLabel: string;
  packageDetailsLabel: string;
  paymentMethodLabel: string;
  listedPriceLabel: string;
  discountPriceLabel: string;
  paymentOptionsTitle: string;
  discountOffer: string;
  paymentDetailsIntroBank: string;
  paymentDetailsIntroCrypto: string;
  bankButtonLabel: string;
  cryptoButtonLabel: string;
  deliveryNote: string;
  supportTitle: string;
  supportBody: string;
  closing: string;
  supportTeam: string;
  subjectPrefix: string;
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
  norway: "no",
};

const buyerEmailCopyByLocale: Record<BuyerLocale, BuyerEmailCopy> = {
  en: {
    headerTitle: "Order Received",
    headerSubtitlePrefix: "Thank you for your order for",
    greeting: "Hello",
    intro:
      "Thank you for submitting your order for {plan}. You selected your preferred payment method below and receive 15% off.",
    selectedPackageLabel: "Selected Package",
    durationFieldLabel: "Duration",
    packageDetailsLabel: "Package Details",
    paymentMethodLabel: "Payment Method",
    listedPriceLabel: "Listed price",
    discountPriceLabel: "Final price with 15% off",
    paymentOptionsTitle: "Your Payment Details",
    discountOffer:
      "Because you chose bank transfer or cryptocurrency, you receive a 15% discount. Your prices are shown below.",
    paymentDetailsIntroBank:
      "Click the button below to view our bank transfer details and complete your payment.",
    paymentDetailsIntroCrypto:
      "Click the button below to view our cryptocurrency payment details and complete your payment.",
    bankButtonLabel: "View Bank Transfer Details",
    cryptoButtonLabel: "View Cryptocurrency Details",
    deliveryNote:
      "As soon as we receive your payment, we will provide your account immediately.",
    supportTitle: "Support",
    supportBody:
      "If you have any questions, simply reply to this email — we are happy to help.",
    closing: "Best regards,",
    supportTeam: "Support Team",
    subjectPrefix: "Your order for",
  },
  fr: {
    headerTitle: "Commande recue",
    headerSubtitlePrefix: "Merci pour votre commande",
    greeting: "Bonjour",
    intro:
      "Merci d'avoir soumis votre commande pour {plan}. Vous avez choisi votre methode de paiement ci-dessous et beneficiez de 15 % de reduction.",
    selectedPackageLabel: "Offre selectionnee",
    durationFieldLabel: "Duree",
    packageDetailsLabel: "Details de l'offre",
    paymentMethodLabel: "Methode de paiement",
    listedPriceLabel: "Prix affiche",
    discountPriceLabel: "Prix final avec 15 % de reduction",
    paymentOptionsTitle: "Vos details de paiement",
    discountOffer:
      "Parce que vous avez choisi le virement bancaire ou la cryptomonnaie, vous beneficiez de 15 % de reduction. Les prix sont indiques ci-dessous.",
    paymentDetailsIntroBank:
      "Cliquez sur le bouton ci-dessous pour voir nos coordonnees bancaires et finaliser votre paiement.",
    paymentDetailsIntroCrypto:
      "Cliquez sur le bouton ci-dessous pour voir nos details de paiement en cryptomonnaie et finaliser votre paiement.",
    bankButtonLabel: "Voir les details du virement",
    cryptoButtonLabel: "Voir les details crypto",
    deliveryNote:
      "Des reception de votre paiement, nous vous fournirons votre compte immediatement.",
    supportTitle: "Support",
    supportBody:
      "Pour toute question, repondez simplement a cet e-mail — nous sommes a votre disposition.",
    closing: "Cordialement,",
    supportTeam: "Equipe Support",
    subjectPrefix: "Votre commande pour",
  },
  nl: {
    headerTitle: "Bestelling ontvangen",
    headerSubtitlePrefix: "Bedankt voor je bestelling voor",
    greeting: "Hallo",
    intro:
      "Bedankt voor het indienen van je bestelling voor {plan}. Je hebt hieronder je betaalmethode gekozen en ontvangt 15% korting.",
    selectedPackageLabel: "Geselecteerd pakket",
    durationFieldLabel: "Duur",
    packageDetailsLabel: "Pakketdetails",
    paymentMethodLabel: "Betaalmethode",
    listedPriceLabel: "Vermelde prijs",
    discountPriceLabel: "Eindprijs met 15% korting",
    paymentOptionsTitle: "Jouw betaalgegevens",
    discountOffer:
      "Omdat je bankoverschrijving of cryptocurrency hebt gekozen, krijg je 15% korting. Je prijzen staan hieronder.",
    paymentDetailsIntroBank:
      "Klik op de knop hieronder om onze bankgegevens te bekijken en je betaling af te ronden.",
    paymentDetailsIntroCrypto:
      "Klik op de knop hieronder om onze cryptobetalingsgegevens te bekijken en je betaling af te ronden.",
    bankButtonLabel: "Bekijk bankgegevens",
    cryptoButtonLabel: "Bekijk cryptogegevens",
    deliveryNote:
      "Zodra we je betaling hebben ontvangen, leveren we je account meteen.",
    supportTitle: "Support",
    supportBody:
      "Heb je vragen? Antwoord gewoon op deze e-mail — we helpen je graag.",
    closing: "Met vriendelijke groet,",
    supportTeam: "Support Team",
    subjectPrefix: "Je bestelling voor",
  },
  de: {
    headerTitle: "Bestellung erhalten",
    headerSubtitlePrefix: "Vielen Dank fur Ihre Bestellung fur",
    greeting: "Hallo",
    intro:
      "Vielen Dank fur Ihre Bestellung fur {plan}. Sie haben unten Ihre bevorzugte Zahlungsmethode gewahlt und erhalten 15 % Rabatt.",
    selectedPackageLabel: "Ausgewaehltes Paket",
    durationFieldLabel: "Laufzeit",
    packageDetailsLabel: "Paketdetails",
    paymentMethodLabel: "Zahlungsmethode",
    listedPriceLabel: "Listenpreis",
    discountPriceLabel: "Endpreis mit 15 % Rabatt",
    paymentOptionsTitle: "Ihre Zahlungsdetails",
    discountOffer:
      "Weil Sie Bankuberweisung oder Kryptowahrung gewahlt haben, erhalten Sie 15 % Rabatt. Die Preise stehen unten.",
    paymentDetailsIntroBank:
      "Klicken Sie auf die Schaltflache unten, um unsere Bankdaten zu sehen und Ihre Zahlung abzuschliessen.",
    paymentDetailsIntroCrypto:
      "Klicken Sie auf die Schaltflache unten, um unsere Krypto-Zahlungsdetails zu sehen und Ihre Zahlung abzuschliessen.",
    bankButtonLabel: "Bankdaten anzeigen",
    cryptoButtonLabel: "Krypto-Details anzeigen",
    deliveryNote:
      "Sobald wir Ihre Zahlung erhalten haben, stellen wir Ihr Konto sofort bereit.",
    supportTitle: "Support",
    supportBody:
      "Bei Fragen antworten Sie einfach auf diese E-Mail — wir helfen Ihnen gerne.",
    closing: "Beste Gruesse,",
    supportTeam: "Support Team",
    subjectPrefix: "Ihre Bestellung fur",
  },
  it: {
    headerTitle: "Ordine ricevuto",
    headerSubtitlePrefix: "Grazie per il tuo ordine per",
    greeting: "Ciao",
    intro:
      "Grazie per aver inviato l'ordine per {plan}. Hai selezionato il metodo di pagamento qui sotto e ricevi il 15% di sconto.",
    selectedPackageLabel: "Pacchetto selezionato",
    durationFieldLabel: "Durata",
    packageDetailsLabel: "Dettagli pacchetto",
    paymentMethodLabel: "Metodo di pagamento",
    listedPriceLabel: "Prezzo elencato",
    discountPriceLabel: "Prezzo finale con 15% di sconto",
    paymentOptionsTitle: "I tuoi dettagli di pagamento",
    discountOffer:
      "Poiche hai scelto bonifico bancario o criptovaluta, ricevi uno sconto del 15%. I prezzi sono mostrati sotto.",
    paymentDetailsIntroBank:
      "Clicca sul pulsante qui sotto per vedere i dettagli del bonifico e completare il pagamento.",
    paymentDetailsIntroCrypto:
      "Clicca sul pulsante qui sotto per vedere i dettagli di pagamento in criptovaluta e completare il pagamento.",
    bankButtonLabel: "Vedi dettagli bonifico",
    cryptoButtonLabel: "Vedi dettagli crypto",
    deliveryNote:
      "Non appena riceveremo il pagamento, forniremo immediatamente il tuo account.",
    supportTitle: "Supporto",
    supportBody:
      "Per qualsiasi domanda, rispondi semplicemente a questa email — siamo lieti di aiutarti.",
    closing: "Cordiali saluti,",
    supportTeam: "Team Supporto",
    subjectPrefix: "Il tuo ordine per",
  },
  pt: {
    headerTitle: "Pedido recebido",
    headerSubtitlePrefix: "Obrigado pelo seu pedido de",
    greeting: "Ola",
    intro:
      "Obrigado por submeter o seu pedido para {plan}. Selecionou o metodo de pagamento abaixo e recebe 15% de desconto.",
    selectedPackageLabel: "Pacote selecionado",
    durationFieldLabel: "Duracao",
    packageDetailsLabel: "Detalhes do pacote",
    paymentMethodLabel: "Metodo de pagamento",
    listedPriceLabel: "Preco indicado",
    discountPriceLabel: "Preco final com 15% de desconto",
    paymentOptionsTitle: "Os seus detalhes de pagamento",
    discountOffer:
      "Como escolheu transferencia bancaria ou criptomoeda, recebe 15% de desconto. Os precos estao abaixo.",
    paymentDetailsIntroBank:
      "Clique no botao abaixo para ver os detalhes da transferencia bancaria e concluir o pagamento.",
    paymentDetailsIntroCrypto:
      "Clique no botao abaixo para ver os detalhes de pagamento em criptomoeda e concluir o pagamento.",
    bankButtonLabel: "Ver detalhes da transferencia",
    cryptoButtonLabel: "Ver detalhes de crypto",
    deliveryNote:
      "Assim que recebermos o pagamento, fornecemos a sua conta imediatamente.",
    supportTitle: "Suporte",
    supportBody:
      "Se tiver alguma duvida, responda simplesmente a este e-mail — teremos todo o gosto em ajudar.",
    closing: "Cumprimentos,",
    supportTeam: "Equipa de Suporte",
    subjectPrefix: "O seu pedido para",
  },
  no: {
    headerTitle: "Bestilling mottatt",
    headerSubtitlePrefix: "Takk for bestillingen din for",
    greeting: "Hei",
    intro:
      "Takk for at du sendte inn bestillingen for {plan}. Du har valgt betalingsmetode nedenfor og far 15 % rabatt.",
    selectedPackageLabel: "Valgt pakke",
    durationFieldLabel: "Varighet",
    packageDetailsLabel: "Pakkedetaljer",
    paymentMethodLabel: "Betalingsmetode",
    listedPriceLabel: "Oppfort pris",
    discountPriceLabel: "Endelig pris med 15 % rabatt",
    paymentOptionsTitle: "Dine betalingsdetaljer",
    discountOffer:
      "Fordi du valgte bankoverforing eller kryptovaluta, far du 15 % rabatt. Prisene vises nedenfor.",
    paymentDetailsIntroBank:
      "Klikk pa knappen nedenfor for a se bankdetaljene vare og fullfore betalingen.",
    paymentDetailsIntroCrypto:
      "Klikk pa knappen nedenfor for a se kryptobetalingsdetaljene vare og fullfore betalingen.",
    bankButtonLabel: "Se bankdetaljer",
    cryptoButtonLabel: "Se kryptodetaljer",
    deliveryNote:
      "Sa snart vi har mottatt betalingen, leverer vi kontoen din umiddelbart.",
    supportTitle: "Support",
    supportBody:
      "Har du sporsmal? Svar bare pa denne e-posten — vi hjelper deg gjerne.",
    closing: "Med vennlig hilsen,",
    supportTeam: "Support Team",
    subjectPrefix: "Din bestilling for",
  },
};

function getBuyerLocaleFromCountry(country: string): BuyerLocale {
  const normalizedCountry = country.trim().toLowerCase();
  return localeByCountry[normalizedCountry] || "en";
}

function withPlan(template: string, plan: string) {
  return template.replace(/\{plan\}/g, plan);
}

function getPaymentCta(
  paymentMethod: SelectablePaymentMethod,
  copy: BuyerEmailCopy,
  plan: string,
  discountedAmount: number,
) {
  const url = buildPaymentPageUrl(paymentMethod, {
    plan,
    price: discountedAmount,
  });

  if (paymentMethod === "bank_transfer") {
    return {
      intro: copy.paymentDetailsIntroBank,
      buttonLabel: copy.bankButtonLabel,
      url,
    };
  }
  return {
    intro: copy.paymentDetailsIntroCrypto,
    buttonLabel: copy.cryptoButtonLabel,
    url,
  };
}

function buildBuyerEmailHtml(
  fullName: string,
  tierName: string,
  durationLabel: string,
  listedPriceLabel: string,
  discountedPriceLabel: string,
  discountedAmount: number,
  packageDetails: string[],
  paymentMethod: SelectablePaymentMethod,
  copy: BuyerEmailCopy,
) {
  const detailsHtml = packageDetails
    .map(
      (item) =>
        `<li style="margin:0 0 6px;color:#374151;font-size:14px;line-height:1.5;">${item}</li>`,
    )
    .join("");
  const paymentMethodLabel = PAYMENT_METHOD_LABELS[paymentMethod];
  const cta = getPaymentCta(paymentMethod, copy, tierName, discountedAmount);

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
          ${withPlan(copy.intro, tierName)}
        </p>
        <div style="margin:0 0 14px;padding:14px;border-radius:12px;background:#f9fafb;border:1px solid #e5e7eb;">
          <p style="margin:0 0 6px;font-size:14px;"><strong>${copy.selectedPackageLabel}:</strong> ${tierName}</p>
          <p style="margin:0 0 6px;font-size:14px;"><strong>${copy.durationFieldLabel}:</strong> ${durationLabel}</p>
          <p style="margin:0 0 10px;font-size:14px;"><strong>${copy.paymentMethodLabel}:</strong> ${paymentMethodLabel}</p>
          <p style="margin:0 0 8px;font-size:14px;"><strong>${copy.packageDetailsLabel}:</strong></p>
          <ul style="padding-left:18px;margin:0;">
            ${detailsHtml}
          </ul>
        </div>
        <div style="margin:0 0 16px;padding:16px;border-radius:12px;background:#eef6ff;border:1px solid #bfdbfe;">
          <p style="margin:0 0 10px;color:#1e3a8a;font-size:15px;font-weight:700;">
            ${copy.paymentOptionsTitle}
          </p>
          <p style="margin:0 0 12px;color:#1f2937;font-size:14px;">
            ${copy.discountOffer}
          </p>
          <p style="margin:0 0 8px;color:#0f172a;font-size:14px;">
            <strong>${copy.listedPriceLabel}:</strong>
            <span style="margin-left:6px;text-decoration:line-through;color:#6b7280;">${listedPriceLabel}</span>
          </p>
          <p style="margin:0 0 14px;color:#0f172a;font-size:14px;">
            <strong>${copy.discountPriceLabel}:</strong>
            <span style="display:inline-block;margin-left:6px;padding:4px 10px;border-radius:999px;background:#15803d;color:#ffffff;font-weight:700;">
              ${discountedPriceLabel}
            </span>
          </p>
          <p style="margin:0 0 12px;color:#1f2937;font-size:14px;">
            ${cta.intro}
          </p>
          <p style="margin:0;">
            <a href="${cta.url}" style="display:inline-block;padding:12px 18px;border-radius:999px;background:#1d4ed8;color:#fff;text-decoration:none;font-weight:700;">
              ${cta.buttonLabel}
            </a>
          </p>
        </div>
        <div style="margin:0 0 16px;padding:16px;border-radius:12px;background:#fff7ed;border:1px solid #fdba74;">
          <p style="margin:0;color:#1f2937;font-size:14px;">
            ${copy.deliveryNote}
          </p>
        </div>
        <p style="margin:0 0 10px;color:#1f2937;font-size:14px;">
          <strong>${copy.supportTitle}:</strong> ${copy.supportBody}
        </p>
        <p style="margin:16px 0 0;">${copy.closing}<br/>${copy.supportTeam}</p>
      </div>
    </div>
  </div>`;
}

function buildBuyerEmailText(
  fullName: string,
  tierName: string,
  durationLabel: string,
  listedPriceLabel: string,
  discountedPriceLabel: string,
  discountedAmount: number,
  packageDetails: string[],
  paymentMethod: SelectablePaymentMethod,
  copy: BuyerEmailCopy,
) {
  const paymentMethodLabel = PAYMENT_METHOD_LABELS[paymentMethod];
  const cta = getPaymentCta(paymentMethod, copy, tierName, discountedAmount);

  return `${copy.greeting} ${fullName},

${withPlan(copy.intro, tierName)}

${copy.selectedPackageLabel}: ${tierName}
${copy.durationFieldLabel}: ${durationLabel}
${copy.paymentMethodLabel}: ${paymentMethodLabel}
${copy.packageDetailsLabel}:
${packageDetails.map((d) => `- ${d}`).join("\n")}

${copy.paymentOptionsTitle}
${copy.discountOffer}
${copy.listedPriceLabel}: ${listedPriceLabel}
${copy.discountPriceLabel}: ${discountedPriceLabel}

${cta.intro}
${cta.buttonLabel}:
${cta.url}

${copy.deliveryNote}

${copy.supportTitle}: ${copy.supportBody}

${copy.closing}
${copy.supportTeam}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as OrderPayload;
    const fullName = (body.fullName || "").trim();
    const email = (body.email || "").trim();
    const country = (body.country || "").trim();
    const paymentMethodRaw = (body.paymentMethod || "").trim();

    if (!fullName || !email || !country) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 },
      );
    }

    if (!isSelectablePaymentMethod(paymentMethodRaw)) {
      return NextResponse.json(
        { message: "Please select Bank Transfer or Cryptocurrency." },
        { status: 400 },
      );
    }
    const paymentMethod = paymentMethodRaw;

    const tierFromIndex =
      typeof body.tierIndex === "number" ? getTierByIndex(body.tierIndex) : undefined;
    const tierName = body.tierName?.trim() || tierFromIndex?.tierName || "Selected Tier";
    const durationLabel = tierFromIndex?.durationLabel || tierName;
    const packageDetails = tierFromIndex?.packageDetails || [];
    const listedAmount = tierFromIndex?.priceAmount;

    if (typeof listedAmount !== "number") {
      return NextResponse.json(
        { message: "Unable to resolve price for selected plan." },
        { status: 400 },
      );
    }

    const discountedAmount = getDiscountedPrice(listedAmount);
    const listedPriceLabel = formatEuro(listedAmount);
    const discountedPriceLabel = formatEuro(discountedAmount);

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
    const paymentMethodLabel = PAYMENT_METHOD_LABELS[paymentMethod];
    const paymentPageUrl = buildPaymentPageUrl(paymentMethod, {
      plan: tierName,
      price: discountedAmount,
    });

    const buyerSubject = `${copy.subjectPrefix} ${tierName}`;
    const buyerText = buildBuyerEmailText(
      fullName,
      tierName,
      durationLabel,
      listedPriceLabel,
      discountedPriceLabel,
      discountedAmount,
      packageDetails,
      paymentMethod,
      copy,
    );

    const adminSubject = `NEW FORM FILLED: ${tierName} - ${fullName}`;
    const adminText = `A user has filled the order form.
Name: ${fullName}
Email: ${email}
Country: ${country}
Tier Selected: ${tierName}
Payment Method: ${paymentMethodLabel}
Listed price: ${listedPriceLabel}
Discounted price (15% off): ${discountedPriceLabel}
Payment page: ${paymentPageUrl}
Status: Customer confirmation email sent with ${paymentMethodLabel} details link.`;

    await Promise.all([
      transporter.sendMail({
        from,
        to: email,
        subject: buyerSubject,
        text: buyerText,
        html: buildBuyerEmailHtml(
          fullName,
          tierName,
          durationLabel,
          listedPriceLabel,
          discountedPriceLabel,
          discountedAmount,
          packageDetails,
          paymentMethod,
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

    return NextResponse.json({
      message: "Order follow-up sent successfully.",
      listedPrice: listedPriceLabel,
      discountedPrice: discountedPriceLabel,
      tierName,
      paymentMethod,
    });
  } catch (error) {
    console.error("SMTP send-order-link error:", error);
    return NextResponse.json(
      { message: "Failed to send order confirmation. Please try again." },
      { status: 500 },
    );
  }
}
