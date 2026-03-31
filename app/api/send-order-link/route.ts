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

function buildBuyerEmailHtml(
  fullName: string,
  tierName: string,
  durationLabel: string,
  priceLabel: string,
  packageDetails: string[],
  checkoutLink: string,
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
        <h2 style="margin:0;font-size:20px;">Secure Checkout</h2>
        <p style="margin:6px 0 0;font-size:14px;opacity:.95;">Complete your order for <strong>${tierName}</strong></p>
      </div>
      <div style="padding:22px;color:#1f2937;line-height:1.6;">
        <p style="margin:0 0 12px;">Hello <strong>${fullName}</strong>,</p>
        <p style="margin:0 0 14px;">Thank you for your request. To complete your purchase safely, please use your secure checkout link:</p>
        <div style="margin:0 0 14px;padding:14px;border-radius:12px;background:#f9fafb;border:1px solid #e5e7eb;">
          <p style="margin:0 0 6px;font-size:14px;"><strong>Selected Package:</strong> ${tierName}</p>
          <p style="margin:0 0 6px;font-size:14px;"><strong>Duration:</strong> ${durationLabel}</p>
          <p style="margin:0 0 10px;font-size:14px;"><strong>Price:</strong> ${priceLabel}</p>
          <p style="margin:0 0 8px;font-size:14px;"><strong>Package Details:</strong></p>
          <ul style="padding-left:18px;margin:0;">
            ${detailsHtml}
          </ul>
        </div>
        <p style="margin:0 0 14px;color:#4b5563;font-size:14px;">
          Your payment process will be completed securely via <strong>PayPal</strong>.
        </p>
        <p style="margin:18px 0;">
          <a href="${checkoutLink}" style="display:inline-block;padding:12px 18px;border-radius:999px;background:#ff00b3;color:#fff;text-decoration:none;font-weight:700;">
            Complete Secure Payment
          </a>
        </p>
        <p style="margin:0 0 10px;color:#4b5563;font-size:14px;">
          Note: After completing the payment, please check your Spam folder as well, as your order details might end up there.
        </p>
        <p style="margin:16px 0 0;">Best regards,<br/>Support Team</p>
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

    const buyerSubject = `Secure Checkout: Complete your order for ${tierName}`;
    const buyerText = `Hello ${fullName},

Thank you for your request. To complete your purchase safely, please use our secure checkout link below:
${checkoutLink}

Note: After completing the payment, please check your Spam folder as well, as your order details might end up there.

Best regards,
Support Team`;
    const buyerTextWithDetails = `${buyerText}

Selected Package: ${tierName}
Duration: ${durationLabel}
Price: ${priceLabel}
Package Details:
${packageDetails.map((d) => `- ${d}`).join("\n")}

Your payment process will be completed securely via PayPal.`;

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
