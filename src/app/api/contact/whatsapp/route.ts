import { NextRequest, NextResponse } from "next/server";
import { getWhatsAppUrl } from "@/lib/contact";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const whatsappUrl = getWhatsAppUrl();

  if (!whatsappUrl) {
    const fallbackUrl = new URL(request.url);
    fallbackUrl.pathname = "/";
    fallbackUrl.search = "";
    fallbackUrl.hash = "contact";

    return NextResponse.redirect(fallbackUrl, 307);
  }

  return NextResponse.redirect(whatsappUrl, 307);
}
