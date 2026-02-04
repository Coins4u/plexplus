import { NextRequest } from "next/server";

export async function POST(_req: NextRequest) {
  // In the original project this posted to a PHP script.
  // Here we just return a simple success message.
  return new Response(
    "Thank you for contacting Plex Plus. We have received your message and will reply shortly.",
    {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}

