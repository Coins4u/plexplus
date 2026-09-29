import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const eurRaw = req.nextUrl.searchParams.get("eur");
  const eurAmount = Number.parseFloat((eurRaw || "").replace(",", "."));

  if (!Number.isFinite(eurAmount) || eurAmount <= 0) {
    return NextResponse.json({ message: "Invalid EUR amount." }, { status: 400 });
  }

  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=eur",
      { next: { revalidate: 60 } },
    );

    if (!res.ok) {
      return NextResponse.json(
        { message: "Could not fetch USDT rate." },
        { status: 502 },
      );
    }

    const data = (await res.json()) as { tether?: { eur?: number } };
    const eurPerUsdt = data.tether?.eur;

    if (!eurPerUsdt || eurPerUsdt <= 0) {
      return NextResponse.json({ message: "Invalid USDT rate." }, { status: 502 });
    }

    const usdtAmount = Math.round((eurAmount / eurPerUsdt) * 100) / 100;

    return NextResponse.json({
      eurAmount,
      usdtAmount,
      eurPerUsdt,
      fetchedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { message: "Failed to convert EUR to USDT." },
      { status: 500 },
    );
  }
}
