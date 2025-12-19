/**
 * API: Lead Intake
 * Route: POST /api/lead
 * File: app/api/lead/route.ts
 */

import { NextResponse } from "next/server";

type LeadPayload = {
  source: "quote" | "contact" | "refer";
  name?: string;
  email?: string;
  phone?: string;
  message?: string;

  // refer-specific
  referralName?: string;
  referralContact?: string;

  // quote-specific
  quoteType?: string;
};

function safe(v?: string) {
  return (v || "").toString().trim();
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LeadPayload;

    const source = body.source;
    const name = safe(body.name);
    const email = safe(body.email);
    const phone = safe(body.phone);
    const message = safe(body.message);

    const referralName = safe(body.referralName);
    const referralContact = safe(body.referralContact);

    const quoteType = safe(body.quoteType);

    if (!source) {
      return NextResponse.json(
        { ok: false, error: "Missing source" },
        { status: 400 }
      );
    }

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    // NOTE:
    // This endpoint is intentionally “wired-ready” but not yet sending email.
    // Next step (after you confirm this file exists) is to add Resend/SMTP.
    // For now, it returns success so the forms can be made “live” immediately.
    return NextResponse.json({
      ok: true,
      received: {
        source,
        name,
        email,
        phone,
        quoteType,
        referralName,
        referralContact,
        message,
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Unknown error" },
      { status: 500 }
    );
  }
}

